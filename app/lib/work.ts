import type { StaticImageData } from "next/image";
import residence from "@/public/images/projects/rayshouse.png";
import cafe from "@/public/images/projects/moodandtonecoffeeshop.png";

export type Practice = {
  slug: string;
  title: string;
  number: string;
  headline: string;
  introduction: string;
};

export const practices: Practice[] = [
  {
    slug: "commercial-architecture",
    title: "Commercial Architecture",
    number: "01",
    headline: "Spaces for a public life.",
    introduction:
      "Explore the commercial side of Peeer Studio’s architecture practice, from the building to its relationship with the street.",
  },
  {
    slug: "residential-architecture",
    title: "Residential Architecture",
    number: "02",
    headline: "Room for everyday life.",
    introduction:
      "A closer look at the residential side of our architecture practice. A place to explore homes, their spaces, and the lives they accommodate.",
  },
  {
    slug: "interior-design",
    title: "Interior Design",
    number: "03",
    headline: "A perspective from within.",
    introduction:
      "Explore interior spaces through light, material, furniture, and the relationships between them.",
  },
  {
    slug: "architectural-planning",
    title: "Architectural Planning",
    number: "04",
    headline: "The beginning of a possibility.",
    introduction:
      "The planning side of our practice: a space for the ideas, spatial relationships, and possibilities that come before a building.",
  },
];

export type Project = {
  slug: string;
  title: string;
  practiceSlug: string;
  image: StaticImageData;
  alt: string;
  description: string;
  imageCaption: string;
  notes: readonly { title: string; text: string }[];
};

// These are image-led templates, not confirmed project names or case studies.
// Replace the descriptive titles and provisional categories when details arrive.
export const projects: Project[] = [
  {
    slug: "residential-interior",
    title: "Residential interior",
    practiceSlug: "interior-design",
    image: residence,
    alt: "Residential interior with cream seating, a textured rug, timber finishes, and an open kitchen",
    description:
      "A view through a warm residential interior, connecting a seating area with an open kitchen. Cream upholstery, timber cabinetry, and pendant lighting define the scene.",
    imageCaption: "Living and kitchen spaces / Interior view",
    notes: [
      {
        title: "Material",
        text: "Timber, pale upholstery, and a textured rug bring contrasting surfaces into the same view.",
      },
      {
        title: "Light",
        text: "Pendant lights and integrated cabinet lighting introduce a warm glow around the kitchen.",
      },
    ],
  },
  {
    slug: "cafe-exterior",
    title: "Café exterior",
    practiceSlug: "commercial-architecture",
    image: cafe,
    alt: "Café façade shown at dusk and in daylight, with outdoor seating and a pitched roof",
    description:
      "Two views of a café façade, captured in daylight and at dusk. A pitched roof, broad horizontal frontage, and outdoor seating frame its relationship with the street.",
    imageCaption: "Daylight and dusk / Exterior views",
    notes: [
      {
        title: "Street",
        text: "Outdoor tables and seating occupy the edge between the café frontage and the street.",
      },
      {
        title: "Atmosphere",
        text: "The paired views reveal the change from a sunlit façade to an illuminated interior at dusk.",
      },
    ],
  },
];

export function getPractice(slug: string) {
  return practices.find((practice) => practice.slug === slug);
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
