import Link from "next/link";
import { practices, projectImages, projectNotes, projects } from "@/lib/mock-data";

export default function DashboardPage() {
  const publishedCount = projects.filter((project) => project.status === "published").length;
  const draftCount = projects.length - publishedCount;

  return (
    <main className="dashboard-content">
      <div className="page-heading"><div><p className="section-kicker">OVERVIEW / 04 NOV 2026</p><h1>Good afternoon.</h1><p>Everything shaping the public portfolio, in one place.</p></div><Link className="primary-button" href="/dashboard/projects/new">New project</Link></div>
      <section className="metrics" aria-label="Content summary">
        <article><span>Projects</span><strong>{String(projects.length).padStart(2, "0")}</strong><small>{publishedCount} published / {draftCount} draft</small></article>
        <article><span>Practices</span><strong>{String(practices.length).padStart(2, "0")}</strong><small>Portfolio categories</small></article>
        <article><span>Images</span><strong>{String(projectImages.length).padStart(2, "0")}</strong><small>With required alt text</small></article>
        <article><span>Notes</span><strong>{String(projectNotes.length).padStart(2, "0")}</strong><small>Editorial details</small></article>
      </section>
      <section className="panel">
        <div className="panel-heading"><div><p className="section-kicker">RECENT CONTENT</p><h2>Projects</h2></div><Link href="/dashboard/projects" className="text-link">View all -&gt;</Link></div>
        <div className="content-list">
          {projects.map((project) => <Link key={project.id} href={`/dashboard/projects/${project.slug}`} className="content-row"><div><strong>{project.title}</strong><span>{project.slug}</span></div><span className={`status ${project.status}`}>{project.status}</span><time>{project.updatedAt}</time><span aria-hidden="true">-&gt;</span></Link>)}
        </div>
      </section>
      <section className="readiness"><div><p className="section-kicker">PUBLISHING READINESS</p><h2>Content model prepared.</h2></div><p>The interface mirrors the planned database entities. API persistence, media storage, user accounts, audit logging, and production authentication remain intentionally disabled.</p></section>
    </main>
  );
}
