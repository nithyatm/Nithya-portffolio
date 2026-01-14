
export enum Theme {
  DARK = 'dark',
  LIGHT = 'light'
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  role: string;
  category: 'iot' | 'web' | 'dashboard' | 'security' | 'embedded';
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Certification {
  title: string;
  issuer: string;
}

export interface Education {
  degree: string;
  institution: string;
  status: string;
  year?: string;
  current?: boolean;
}
