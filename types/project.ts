export type Project = {
  id: number;
  title: string;
  slug: string;
  category: string;
  status: "Completed" | "In Development";
  description: string;
  technologies: string[];
  image: string;

  gallery?: string[];
  galleryType?: "mobile" | "web";

  role?: string;
  projectType?: string;
  overview?: string;
  features?: string[];
  challenges?: string[];
  learned?: string[];

  githubUrl?: string;
  liveUrl?: string;
  figmaUrl?: string;

  featured: boolean;
};