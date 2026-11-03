import Image from "next/image";
import Link from "next/link";
import type { Project } from "../lib/work";

export function WorkCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="work-card">
      <Link className="work-card-link" href={`/projects/${project.slug}`}>
        <div className="work-card-image">
          <Image
            src={project.image}
            alt={project.alt}
            sizes="(max-width: 700px) 90vw, 55vw"
          />
          <span className="image-action">
            Explore project <span aria-hidden="true">↗</span>
          </span>
        </div>
        <div className="project-caption">
          <div>
            <span className="micro">
              {String(index + 1).padStart(2, "0")} — PROJECT PREVIEW
            </span>
            <h3>{project.title}</h3>
          </div>
          <span className="project-caption-arrow" aria-hidden="true">
            ↗
          </span>
        </div>
      </Link>
    </article>
  );
}
