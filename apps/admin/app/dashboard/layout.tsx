import Link from "next/link";
import { requireAdminSession } from "@/lib/auth";
import { logoutAction } from "./actions";
import { DashboardNav } from "./nav";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  await requireAdminSession();

  return (
    <div className="admin-shell">
      <aside className="sidebar">
        <Link href="/dashboard" className="admin-wordmark">peeer<span>admin</span></Link>
        <DashboardNav />
        <div className="sidebar-footer">
          <p>Prototype mode</p>
          <span>Database writes are disabled.</span>
          <form action={logoutAction}><button type="submit" className="text-button">Sign out</button></form>
        </div>
      </aside>
      <div className="workspace">
        <header className="workspace-header">
          <p>Peeer Studio / Content Management</p>
          <div><span className="status-dot" />Mock data</div>
        </header>
        {children}
      </div>
    </div>
  );
}
