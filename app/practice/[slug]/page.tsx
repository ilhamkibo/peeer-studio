import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../components/site-chrome";
import { WorkCard } from "../../components/work-card";
import { getPractice, practices, projects } from "../../lib/work";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return practices.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const practice = getPractice((await params).slug);
  if (!practice) notFound();
  return {
    title: `${practice.title} — Peeer Studio`,
    description: practice.introduction,
    openGraph: {
      title: `${practice.title} — Peeer Studio`,
      description: practice.introduction,
    },
  };
}

export default async function PracticePage({ params }: Props) {
  const practice = getPractice((await params).slug);
  if (!practice) notFound();
  const selectedProjects = projects.filter(
    (project) => project.practiceSlug === practice.slug,
  );
  return (
    <>
      <SiteHeader />
      <main id="main" className="inner-page">
        <section
          className="practice-hero page-gutter"
          aria-labelledby="practice-title"
        >
          <Link className="back-link" href="/#services">
            ← Our practice
          </Link>
          <div className="section-top">
            <p className="section-label">
              <span>{practice.number}</span>Our practice
            </p>
            <span className="micro">PEEER STUDIO / JAKARTA</span>
          </div>
          <h1 id="practice-title">{practice.title}</h1>
          <div className="practice-intro">
            <h2>{practice.headline}</h2>
            <p>{practice.introduction}</p>
          </div>
        </section>
        <section
          className="practice-work page-gutter"
          aria-labelledby="selection-title"
        >
          <div className="section-top">
            <h2 id="selection-title" className="section-label">
              Selected perspectives
            </h2>
            <span className="micro">
              {String(selectedProjects.length).padStart(2, "0")} PROJECT
              PREVIEWS
            </span>
          </div>
          {selectedProjects.length ? (
            <div className="practice-projects">
              {selectedProjects.map((project, index) => (
                <WorkCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="work-coming-soon">
              <span className="empty-index" aria-hidden="true">
                —
              </span>
              <div>
                <h3>A selection in the making.</h3>
                <p>
                  Project stories for this part of our practice will be shared
                  here. In the meantime, explore our selected work or start a
                  conversation with the studio.
                </p>
                <Link className="text-link" href="/#work">
                  Explore selected work <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          )}
        </section>
        <section
          className="practice-explore page-gutter"
          aria-labelledby="explore-title"
        >
          <h2 id="explore-title">Another perspective.</h2>
          <nav aria-label="Explore our practice">
            {practices.map((item) => (
              <Link
                key={item.slug}
                href={`/practice/${item.slug}`}
                aria-current={item.slug === practice.slug ? "page" : undefined}
              >
                <span className="micro">{item.number}</span>
                {item.title}
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </nav>
        </section>
        <section className="inner-contact page-gutter">
          <p>Have a space in mind?</p>
          <Link className="text-link" href="/#contact">
            Let’s talk about it <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
