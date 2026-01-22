export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  shortDescription?: string;
  imageUrl: string;
  videoUrl?: string;
  technologies: string[];
  link?: string;
  sourceUrl?: string;
  award?: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}