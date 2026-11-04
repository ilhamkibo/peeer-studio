import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const SESSION_COOKIE = "peeer_admin_session";
const SESSION_DURATION_SECONDS = 8 * 60 * 60;
const DEVELOPMENT_SECRET = "peeer-admin-development-session-only";

function getSessionSecret() {
  const configuredSecret = process.env.ADMIN_SESSION_SECRET;

  if (configuredSecret) {
    if (process.env.NODE_ENV === "production" && configuredSecret.length < 32) {
      return null;
    }
    return configuredSecret;
  }
  if (process.env.NODE_ENV !== "production") return DEVELOPMENT_SECRET;

  return null;
}

function sign(value: string, secret: string) {
  return createHmac("sha256", secret).update(value).digest("base64url");
}

export function createSessionToken() {
  const secret = getSessionSecret();
  if (!secret) return null;

  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_DURATION_SECONDS;
  const payload = `mock-admin.${expiresAt}`;
  return `${payload}.${sign(payload, secret)}`;
}

export function verifySessionToken(token?: string) {
  const secret = getSessionSecret();
  if (!secret || !token) return false;

  const [subject, expiresAtValue, signature] = token.split(".");
  if (subject !== "mock-admin" || !expiresAtValue || !signature) return false;

  const expiresAt = Number(expiresAtValue);
  if (!Number.isSafeInteger(expiresAt) || expiresAt <= Date.now() / 1000) {
    return false;
  }

  const payload = `${subject}.${expiresAtValue}`;
  const expected = Buffer.from(sign(payload, secret));
  const received = Buffer.from(signature);

  return expected.length === received.length && timingSafeEqual(expected, received);
}

export async function setMockSession() {
  const token = createSessionToken();
  if (!token) return false;

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: SESSION_DURATION_SECONDS,
  });
  return true;
}

export async function hasAdminSession() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  return verifySessionToken(token);
}

export async function requireAdminSession() {
  if (!(await hasAdminSession())) redirect("/login");
}

export async function clearAdminSession() {
  (await cookies()).delete(SESSION_COOKIE);
}
