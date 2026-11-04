import Link from "next/link";
import { getPracticeTitle, projects } from "@/lib/mock-data";

export default function ProjectsPage() {
  return (
    <main className="dashboard-content">
      <div className="page-heading"><div><p className="section-kicker">CONTENT MODEL / PROJECT</p><h1>Projects</h1><p>Draft, review, and publish stories to the public portfolio.</p></div><Link className="primary-button" href="/dashboard/projects/new">New project</Link></div>
      <div className="filter-bar"><div><button type="button" className="filter-active">All <span>{projects.length}</span></button><button type="button">Published <span>2</span></button><button type="button">Draft <span>1</span></button></div><label className="search-field"><span className="sr-only">Search projects</span><input type="search" placeholder="Search projects" /></label></div>
      <section className="panel table-panel">
        <div className="table-header project-grid"><span>Project</span><span>Practice</span><span>Status</span><span>Published</span><span>Updated</span><span /></div>
        {projects.map((project) => <Link href={`/dashboard/projects/${project.slug}`} className="table-row project-grid" key={project.id}><div><strong>{project.title}</strong><small>{project.slug}</small></div><span>{getPracticeTitle(project.practiceId)}</span><span><i className={`status ${project.status}`}>{project.status}</i></span><span>{project.publishedAt ?? "-"}</span><time>{project.updatedAt}</time><span aria-hidden="true">-&gt;</span></Link>)}
      </section>
    </main>
  );
}
