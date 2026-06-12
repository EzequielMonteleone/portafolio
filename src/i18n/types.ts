export type Lang = 'es' | 'en';

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface ProjectItem {
  name: string;
  role: string;
  description: string;
  url?: string;
}

export interface EducationItem {
  title: string;
  institution: string;
  period: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface NavLinks {
  about: string;
  experience: string;
  skills: string;
  projects: string;
  education: string;
  contact: string;
}

export interface Content {
  meta: {
    title: string;
    description: string;
  };
  nav: NavLinks;
  hero: {
    name: string;
    role: string;
    tagline: string;
    ctaContact: string;
    ctaProjects: string;
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  skills: {
    title: string;
    groups: SkillGroup[];
  };
  projects: {
    title: string;
    items: ProjectItem[];
  };
  education: {
    title: string;
    items: EducationItem[];
  };
  contact: {
    title: string;
    intro: string;
    email: string;
    location: string;
    locationLabel: string;
  };
  footer: {
    rights: string;
  };
}
