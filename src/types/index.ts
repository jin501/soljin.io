export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  year: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  stack?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  notes?: string;
}

export type Theme = 'light' | 'dark';
