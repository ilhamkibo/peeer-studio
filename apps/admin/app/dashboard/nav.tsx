"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/dashboard", label: "Overview", count: null },
  { href: "/dashboard/projects", label: "Projects", count: "03" },
  { href: "/dashboard/practices", label: "Practices", count: "04" },
  { href: "/dashboard/media", label: "Media", count: "02" },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="dashboard-nav" aria-label="Admin navigation">
      {navigation.map((item) => {
        const active = item.href === "/dashboard" ? pathname === item.href : pathname.startsWith(item.href);
        return <Link key={item.href} href={item.href} className={active ? "active" : undefined}><span>{item.label}</span>{item.count && <small>{item.count}</small>}</Link>;
      })}
    </nav>
  );
}
