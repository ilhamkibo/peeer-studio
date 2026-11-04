import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Peeer Admin", template: "%s / Peeer Admin" },
  description: "Content management workspace for Peeer Studio.",
  robots: { index: false, follow: false, nocache: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
