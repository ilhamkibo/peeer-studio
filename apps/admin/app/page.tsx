import { redirect } from "next/navigation";
import { hasAdminSession } from "@/lib/auth";

export default async function Home() {
  redirect((await hasAdminSession()) ? "/dashboard" : "/login");
}
