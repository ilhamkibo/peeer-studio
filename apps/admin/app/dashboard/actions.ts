"use server";

import { redirect } from "next/navigation";
import { clearAdminSession, requireAdminSession } from "@/lib/auth";

export async function logoutAction() {
  await requireAdminSession();
  await clearAdminSession();
  redirect("/login");
}
