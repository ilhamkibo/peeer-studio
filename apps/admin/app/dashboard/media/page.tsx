import { projects, projectImages } from "@/lib/mock-data";

export default function MediaPage() {
  return (
    <main className="dashboard-content">
      <div className="page-heading"><div><p className="section-kicker">CONTENT MODEL / PROJECT_IMAGE</p><h1>Media library</h1><p>Review image metadata, alternative text, captions, and display order.</p></div><button type="button" className="primary-button">Upload image</button></div>
      <div className="prototype-banner"><strong>Storage not connected.</strong> Production uploads should use private signed uploads, MIME validation, size limits, and image processing.</div>
      <section className="media-grid">{projectImages.map((image, index) => { const project = projects.find((item) => item.id === image.projectId); return <article className="media-card" key={image.id}><div className={`media-placeholder media-${index + 1}`}><span>IMAGE {String(index + 1).padStart(2, "0")}</span></div><div className="media-meta"><div><p className="section-kicker">{project?.title}</p><h2>{image.caption}</h2></div><dl><div><dt>Alt text</dt><dd>{image.altText}</dd></div><div><dt>Sort order</dt><dd>{image.sortOrder}</dd></div><div><dt>Source</dt><dd><code>{image.url}</code></dd></div></dl><button type="button" className="secondary-button">Edit metadata</button></div></article>; })}</section>
    </main>
  );
}
