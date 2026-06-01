export type ProjectCategory = 'ux' | 'code' | 'design';

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  oneLiner: string;
  category: ProjectCategory;
  tags: string[];
  year: number;
  aiUsed: boolean;
  thumbnail: string;
  heroImage: string;
  role: string;
  overview: string;
  challenge: string;
  process: ProcessSection[];
  aiWorkflow?: string;
  outcomes: string[];
  nextSteps?: string;
}

export interface ProcessSection {
  heading: string;
  body: string;
  image?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
