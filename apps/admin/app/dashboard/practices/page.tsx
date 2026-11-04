import { practices, projects } from "@/lib/mock-data";

export default function PracticesPage() {
  return (
    <main className="dashboard-content">
      <div className="page-heading"><div><p className="section-kicker">CONTENT MODEL / PRACTICE</p><h1>Practices</h1><p>Organize projects around the studio's four fields of work.</p></div><button type="button" className="primary-button">New practice</button></div>
      <div className="prototype-banner"><strong>Preview only.</strong> Controls are intentionally not persisted until the API and database are connected.</div>
      <section className="panel table-panel">
        <div className="table-header practice-grid"><span>No.</span><span>Practice</span><span>Slug</span><span>Projects</span><span>Updated</span></div>
        {practices.map((practice) => <article className="table-row practice-grid" key={practice.id}><span className="mono">{practice.number}</span><div><strong>{practice.title}</strong><small>{practice.headline}</small></div><span className="mono">{practice.slug}</span><span>{projects.filter((project) => project.practiceId === practice.id).length}</span><time>{practice.updatedAt}</time></article>)}
      </section>
      <section className="editor-panel">
        <div className="editor-heading"><p className="section-kicker">QUICK EDIT</p><h2>Commercial Architecture</h2></div>
        <form className="editor-form">
          <div className="field-pair"><label>Title<input defaultValue="Commercial Architecture" /></label><label>Number<input defaultValue="01" /></label></div>
          <label>Slug<input defaultValue="commercial-architecture" /></label>
          <label>Headline<input defaultValue="Spaces for a public life." /></label>
          <label>Introduction<textarea rows={4} defaultValue="Buildings and spaces shaped around public life and their relationship with the street." /></label>
          <div className="form-actions"><button type="button" className="secondary-button">Discard</button><button type="button" className="primary-button">Save changes</button></div>
        </form>
      </section>
    </main>
  );
}
