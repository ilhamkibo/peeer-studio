import Image from "next/image";
import Link from "next/link";
import residence from "@/public/images/projects/rayshouse.png";
import cafe from "@/public/images/projects/moodandtonecoffeeshop.png";
import { ProjectImage, Reveal } from "./components/portfolio";
import { SiteFooter, SiteHeader } from "./components/site-chrome";
import { practices } from "./lib/work";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "↘"}</span>;
}

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="section-label">
      <span>{number}</span>
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader home />
      <main id="main">
        <section className="hero page-gutter" aria-labelledby="hero-heading">
          <div className="hero-eyebrow">
            <span className="status-dot" />
            PEEER STUDIO
            <span className="hero-established">EST. 2024 — JAKARTA</span>
          </div>
          <h1 id="hero-heading">
            Architecture
            <span className="hero-second-line">
              <span className="hero-amp">&</span> interior studio
              <span className="full-stop">.</span>
            </span>
          </h1>
          <div className="hero-bottom">
            <div className="hero-note">
              <p>
                Space for
                <br />a different perspective.
              </p>
              <a className="text-link" href="#work">
                Explore our work <Arrow />
              </a>
            </div>
            <figure className="hero-image">
              <Image
                src={residence}
                alt="Warm residential interior with sculptural seating, timber cabinetry, and pendant lighting"
                sizes="(max-width: 700px) 92vw, 72vw"
                preload
              />
              <figcaption>
                <span>A study in space, light & material</span>
                <span>01 / 02</span>
              </figcaption>
            </figure>
          </div>
        </section>
        <section
          className="work page-gutter"
          aria-labelledby="work-heading"
        >
          <div className="section-top" id="work">
            <SectionLabel number="01">Selected work</SectionLabel>
            <span className="micro">RESIDENTIAL / COMMERCIAL</span>
          </div>
          <Reveal>
            <div className="section-heading">
              <h2 id="work-heading">
                Different spaces.
                <br />
                <span>A shared perspective.</span>
              </h2>
              <p>
                A closer look at our work
                <br />
                across interiors and architecture.
              </p>
            </div>
          </Reveal>
          <div className="projects">
            <Reveal className="project project-residence">
              <ProjectImage
                image={residence}
                alt="Residential interior with cream seating, a textured rug, timber finishes, and an open kitchen"
                label="Residential interior"
              />
              <div className="project-caption">
                <div>
                  <span className="micro">01 — INTERIOR</span>
                  <h3>
                    <Link href="/projects/residential-interior">
                      Residential interior{" "}
                      <span className="sr-only">— explore project</span>
                    </Link>
                  </h3>
                </div>
                <span className="project-caption-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </Reveal>
            <Reveal className="project project-cafe">
              <ProjectImage
                image={cafe}
                alt="Café façade shown at dusk and in daylight, with outdoor seating and a pitched roof"
                label="Café exterior"
              />
              <div className="project-caption">
                <div>
                  <span className="micro">02 — ARCHITECTURE</span>
                  <h3>
                    <Link href="/projects/cafe-exterior">
                      Café exterior{" "}
                      <span className="sr-only">— explore project</span>
                    </Link>
                  </h3>
                </div>
                <span className="project-caption-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </Reveal>
          </div>
          <a
            className="text-link instagram-link"
            href="https://www.instagram.com/peeer.studio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            More from the studio on Instagram <Arrow diagonal />
          </a>
        </section>
        <section
          className="studio"
          id="studio"
          aria-labelledby="studio-heading"
        >
          <div className="studio-inner page-gutter">
            <SectionLabel number="02">The studio</SectionLabel>
            <Reveal>
              <h2 id="studio-heading">
                A fresh eye.
                <br />
                An open mind.
                <br />
                <span>A different Peeer.</span>
              </h2>
            </Reveal>
            <div className="studio-description">
              <p>
                Peeer Studio is an architecture and interior design studio based
                in Jakarta, Indonesia.
              </p>
              <p>
                Established in 2024, our practice spans commercial and
                residential architecture, interior design, and architectural
                planning.
              </p>
              <a className="text-link" href="#contact">
                Get to know us <Arrow diagonal />
              </a>
            </div>
            <div className="studio-footnote">
              <span>BASED IN JAKARTA</span>
              <span>OPEN TO POSSIBILITIES</span>
            </div>
          </div>
        </section>
        <section
          className="services page-gutter"
          id="services"
          aria-labelledby="services-heading"
        >
          <SectionLabel number="03">Our practice</SectionLabel>
          <div className="services-content">
            <h2 id="services-heading">
              From the bigger picture
              <br />
              to the smallest detail.
            </h2>
            <div className="service-list">
              {practices.map((practice) => (
                <Link
                  className="service-row"
                  key={practice.slug}
                  href={`/practice/${practice.slug}`}
                >
                  <span className="micro">{practice.number}</span>
                  <h3>{practice.title}</h3>
                  <Arrow diagonal />
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section
          className="contact page-gutter"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div className="section-top">
            <SectionLabel number="04">Start a conversation</SectionLabel>
            <span className="micro">JAKARTA, INDONESIA</span>
          </div>
          <h2 id="contact-heading">
            Have a space
            <br />
            in mind<span>?</span>
          </h2>
          <div className="contact-bottom">
            <p>Let’s explore its possibilities.</p>
            <a className="contact-link" href="tel:+6282132553763">
              Let’s talk <Arrow diagonal />
            </a>
          </div>
          <div className="contact-details">
            <span>M. Farras Oktavianto</span>
            <a href="tel:+6282132553763">+62 821-3255-3763</a>
            <a
              href="https://www.instagram.com/peeer.studio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @peeer.studio <Arrow diagonal />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
