import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/studio-logo.png";
import { projects } from "../lib/work";

export function SiteHeader({ home = false }: { home?: boolean }) {
  const root = home ? "" : "/";
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header page-gutter">
        <Link className="brand" href="/" aria-label="Peeer Studio home">
          <Image src={logo} alt="Peeer Studio" width={66} height={66} preload />
        </Link>
        <span className="header-location">
          Architecture & interior studio
          <br />
          Jakarta, Indonesia
        </span>
        <nav aria-label="Main navigation">
          <Link href={`${root}#work`}>
            Work <span>{String(projects.length).padStart(2, "0")}</span>
          </Link>
          <Link href={`${root}#studio`}>Studio</Link>
          <Link href={`${root}#contact`}>
            Let’s talk <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer page-gutter">
      <Link href="/" className="footer-name" aria-label="Peeer Studio home">
        peeer studio<span aria-hidden="true">↗</span>
      </Link>
      <div className="footer-bottom">
        <span>© Peeer Studio 2026</span>
        <span>Architecture and Interior Studio</span>
        <a href="#main">Back to top ↑</a>
      </div>
    </footer>
  );
}
