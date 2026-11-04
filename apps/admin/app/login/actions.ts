"use server";

import { redirect } from "next/navigation";
import { setMockSession } from "@/lib/auth";

export type LoginState = { error?: string };

export async function loginAction(
  _previousState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return { error: "Enter a valid email address." };
  }

  if (password.length === 0) {
    return { error: "Enter any password for this mock login." };
  }

  if (!(await setMockSession())) {
    return { error: "ADMIN_SESSION_SECRET is required in production." };
  }

  redirect("/dashboard");
}
