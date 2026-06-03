export type ProjectCategory = 'design' | 'research' | 'development' | 'strategy';
export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  oneLiner: string;
  category: ProjectCategory;
  context: 'Academic' | 'Professional';
  tags: string[];
  year: number;
  thumbnail: string;
  heroImage: string;
  role: string;
  overview: string;
  challenge: string;
  process: ProcessSection[];
  outcomes: string[];
  nextSteps?: string;
  media?: { src: string; caption: string }[];
  driveEmbed?: string;
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
