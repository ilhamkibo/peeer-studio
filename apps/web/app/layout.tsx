import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const switzer = localFont({
  src: [
    { path: "./fonts/Switzer-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Switzer-Medium.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-switzer",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Peeer Studio — Architecture & Interior Studio, Jakarta",
  description:
    "Peeer Studio is an architecture and interior design studio based in Jakarta, Indonesia. Commercial architecture, residential architecture, interior design, and architectural planning.",
  icons: { icon: "/images/studio-logo.png", apple: "/images/studio-logo.png" },
  openGraph: {
    title: "Peeer Studio — Architecture & Interior Studio",
    description:
      "A Jakarta-based architecture and interior design studio. Explore our work and start a conversation.",
    type: "website",
    locale: "en_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={switzer.variable}>
      <body>{children}</body>
    </html>
  );
}
