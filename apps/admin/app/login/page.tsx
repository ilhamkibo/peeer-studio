import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { hasAdminSession } from "@/lib/auth";
import { LoginForm } from "./login-form";

export const metadata: Metadata = { title: "Sign in" };

export default async function LoginPage() {
  if (await hasAdminSession()) redirect("/dashboard");

  return (
    <main className="login-shell">
      <section className="login-brand" aria-label="Peeer Studio admin introduction">
        <div className="wordmark">peeer<span>admin</span></div>
        <p className="eyebrow">CONTENT WORKSPACE / JAKARTA</p>
        <h1>Shape the story<br />behind every space.</h1>
        <p className="login-intro">A focused workspace for practices, projects, imagery, and editorial notes.</p>
      </section>
      <section className="login-panel">
        <div className="login-card">
          <p className="section-kicker">PRIVATE ACCESS</p>
          <h2>Welcome back.</h2>
          <p className="muted">Use any valid email and any password during this prototype phase.</p>
          <div className="security-notice"><strong>Mock authentication</strong><span>Do not deploy this login as production authentication. Connect an identity provider before launch.</span></div>
          <LoginForm />
        </div>
      </section>
    </main>
  );
}
