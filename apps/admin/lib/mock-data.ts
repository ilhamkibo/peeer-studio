export type PracticeRecord = {
  id: string;
  slug: string;
  title: string;
  number: string;
  headline: string;
  introduction: string;
  updatedAt: string;
};

export type ProjectStatus = "draft" | "published";

export type ProjectRecord = {
  id: string;
  practiceId: string;
  slug: string;
  title: string;
  description: string;
  status: ProjectStatus;
  publishedAt: string | null;
  updatedAt: string;
};

export type ProjectImageRecord = {
  id: string;
  projectId: string;
  url: string;
  altText: string;
  caption: string;
  sortOrder: number;
};

export type ProjectNoteRecord = {
  id: string;
  projectId: string;
  title: string;
  body: string;
  sortOrder: number;
};

export const practices: PracticeRecord[] = [
  { id: "practice-commercial", slug: "commercial-architecture", title: "Commercial Architecture", number: "01", headline: "Spaces for a public life.", introduction: "Buildings and spaces shaped around public life and their relationship with the street.", updatedAt: "04 Nov 2026" },
  { id: "practice-residential", slug: "residential-architecture", title: "Residential Architecture", number: "02", headline: "Room for everyday life.", introduction: "Homes, their spaces, and the lives they accommodate.", updatedAt: "04 Nov 2026" },
  { id: "practice-interior", slug: "interior-design", title: "Interior Design", number: "03", headline: "A perspective from within.", introduction: "Interior spaces explored through light, material, furniture, and relationships.", updatedAt: "04 Nov 2026" },
  { id: "practice-planning", slug: "architectural-planning", title: "Architectural Planning", number: "04", headline: "The beginning of a possibility.", introduction: "Ideas and spatial relationships that come before a building.", updatedAt: "04 Nov 2026" },
];

export const projects: ProjectRecord[] = [
  { id: "project-residential", practiceId: "practice-interior", slug: "residential-interior", title: "Residential interior", description: "A warm residential interior connecting a seating area with an open kitchen.", status: "published", publishedAt: "02 Nov 2026", updatedAt: "04 Nov 2026" },
  { id: "project-cafe", practiceId: "practice-commercial", slug: "cafe-exterior", title: "Cafe exterior", description: "Daylight and dusk studies of a cafe facade and its relationship with the street.", status: "published", publishedAt: "01 Nov 2026", updatedAt: "03 Nov 2026" },
  { id: "project-courtyard", practiceId: "practice-residential", slug: "courtyard-house", title: "Courtyard house", description: "An early study for a home organized around a sheltered courtyard.", status: "draft", publishedAt: null, updatedAt: "04 Nov 2026" },
];

export const projectImages: ProjectImageRecord[] = [
  { id: "image-residential", projectId: "project-residential", url: "/images/projects/rayshouse.png", altText: "Residential interior with cream seating, timber finishes, and an open kitchen", caption: "Living and kitchen spaces / Interior view", sortOrder: 1 },
  { id: "image-cafe", projectId: "project-cafe", url: "/images/projects/moodandtonecoffeeshop.png", altText: "Cafe facade shown at dusk and in daylight", caption: "Daylight and dusk / Exterior views", sortOrder: 1 },
];

export const projectNotes: ProjectNoteRecord[] = [
  { id: "note-material", projectId: "project-residential", title: "Material", body: "Timber, pale upholstery, and a textured rug bring contrasting surfaces into the same view.", sortOrder: 1 },
  { id: "note-light", projectId: "project-residential", title: "Light", body: "Pendant lights and integrated cabinet lighting introduce a warm glow.", sortOrder: 2 },
  { id: "note-street", projectId: "project-cafe", title: "Street", body: "Outdoor seating occupies the edge between the cafe frontage and the street.", sortOrder: 1 },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getPracticeTitle(practiceId: string) {
  return practices.find((practice) => practice.id === practiceId)?.title ?? "Unassigned";
}
