import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, practices, projectImages, projectNotes } from "@/lib/mock-data";

type Props = { params: Promise<{ slug: string }> };

export default async function ProjectEditorPage({ params }: Props) {
  const slug = (await params).slug;
  const isNew = slug === "new";
  const project = isNew ? null : getProject(slug);
  if (!isNew && !project) notFound();
  const images = projectImages.filter((image) => image.projectId === project?.id);
  const notes = projectNotes.filter((note) => note.projectId === project?.id);

  return (
    <main className="dashboard-content editor-page">
      <div className="editor-topbar"><div><Link href="/dashboard/projects" className="back-link">&lt;- Projects</Link><p>{isNew ? "Untitled project" : project?.title}</p></div><div><span className={`status ${project?.status ?? "draft"}`}>{project?.status ?? "draft"}</span><button type="button" className="secondary-button">Preview</button><button type="button" className="primary-button">Save draft</button></div></div>
      <div className="prototype-banner"><strong>Preview only.</strong> Save and publish actions will be enabled after the authenticated API is connected.</div>
      <div className="editor-layout">
        <div className="editor-main">
          <section className="editor-panel"><div className="editor-heading"><p className="section-kicker">PROJECT DETAILS</p><h1>{isNew ? "New project" : "Edit project"}</h1></div><form className="editor-form"><label>Title<input defaultValue={project?.title ?? ""} placeholder="Project title" /></label><div className="field-pair"><label>Slug<input defaultValue={project?.slug ?? ""} placeholder="project-slug" /></label><label>Practice<select defaultValue={project?.practiceId ?? ""}><option value="" disabled>Select practice</option>{practices.map((practice) => <option key={practice.id} value={practice.id}>{practice.title}</option>)}</select></label></div><label>Description<textarea rows={6} defaultValue={project?.description ?? ""} placeholder="Introduce the project and its central idea." /></label></form></section>
          <section className="editor-panel"><div className="panel-heading"><div><p className="section-kicker">PROJECT_IMAGE</p><h2>Images</h2></div><button type="button" className="secondary-button">Add image</button></div>{images.length > 0 ? images.map((image) => <div className="nested-record" key={image.id}><span className="record-order">{String(image.sortOrder).padStart(2, "0")}</span><div><strong>{image.caption}</strong><small>{image.url}</small><p>{image.altText}</p></div><button type="button" className="text-button">Edit</button></div>) : <p className="empty-state">No images yet. Add an image with required alternative text.</p>}</section>
          <section className="editor-panel"><div className="panel-heading"><div><p className="section-kicker">PROJECT_NOTE</p><h2>Editorial notes</h2></div><button type="button" className="secondary-button">Add note</button></div>{notes.length > 0 ? notes.map((note) => <div className="nested-record" key={note.id}><span className="record-order">{String(note.sortOrder).padStart(2, "0")}</span><div><strong>{note.title}</strong><p>{note.body}</p></div><button type="button" className="text-button">Edit</button></div>) : <p className="empty-state">No notes yet. Notes appear as ordered project details.</p>}</section>
        </div>
        <aside className="publish-panel"><p className="section-kicker">PUBLISHING</p><label>Status<select defaultValue={project?.status ?? "draft"}><option value="draft">Draft</option><option value="published">Published</option></select></label><div><span>Public URL</span><code>/projects/{project?.slug || "project-slug"}</code></div><div><span>Published at</span><p>{project?.publishedAt ?? "Not published"}</p></div><div><span>Last updated</span><p>{project?.updatedAt ?? "Not saved"}</p></div><hr /><p className="publish-help">Only published projects are returned to the public website.</p></aside>
      </div>
    </main>
  );
}
