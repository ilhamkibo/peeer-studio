import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../components/site-chrome";
import { ProjectImage } from "../../components/portfolio";
import { getPractice, getProject, projects } from "../../lib/work";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return {
    title: `${project.title} — Peeer Studio`,
    description: project.description,
    robots: { index: false, follow: true },
    openGraph: {
      title: `${project.title} — Peeer Studio`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const practice = getPractice(project.practiceSlug);
  if (!practice) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <>
      <SiteHeader />
      <main id="main" className="inner-page">
        <section
          className="project-detail-hero page-gutter"
          aria-labelledby="project-title"
        >
          <Link className="back-link" href={`/practice/${practice.slug}`}>
            ← {practice.title}
          </Link>
          <div className="section-top">
            <span className="section-label">Project preview</span>
            <span className="micro">PEEER STUDIO</span>
          </div>
          <h1 id="project-title">{project.title}</h1>
          <p className="project-introduction">{project.description}</p>
          <figure className="project-detail-image">
            <Image
              src={project.image}
              alt={project.alt}
              sizes="(max-width: 700px) 90vw, 74vw"
              preload
            />
            <figcaption>{project.imageCaption}</figcaption>
          </figure>
        </section>
        <section
          className="project-story page-gutter"
          aria-labelledby="story-title"
        >
          <div>
            <p className="section-label">A closer look</p>
            <h2 id="story-title">
              Space, seen
              <br />
              in detail.
            </h2>
            <p className="project-preview-note">
              An image-led preview. The full project story and details will
              follow.
            </p>
          </div>
          <div className="project-notes">
            {project.notes.map((note, index) => (
              <div key={note.title}>
                <span className="micro">
                  0{index + 1} / {note.title.toUpperCase()}
                </span>
                <p>{note.text}</p>
              </div>
            ))}
            <ProjectImage
              image={project.image}
              alt={project.alt}
              label={project.title}
            />
          </div>
        </section>
        <section
          className="next-project page-gutter"
          aria-labelledby="next-project-title"
        >
          <p className="micro">NEXT PERSPECTIVE</p>
          <Link href={`/projects/${next.slug}`}>
            <h2 id="next-project-title">{next.title}</h2>
            <span aria-hidden="true">↗</span>
          </Link>
        </section>
        <section className="inner-contact page-gutter">
          <p>A possibility for your space.</p>
          <Link className="text-link" href="/#contact">
            Start a conversation <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
