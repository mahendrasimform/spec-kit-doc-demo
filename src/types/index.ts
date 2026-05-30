export interface NavItem {
  id: string;
  label: string;
  path: string;
  icon?: string;
  badge?: string;
  children?: NavItem[];
}

export interface Command {
  command: string;
  description: string;
  parameters?: string;
  example: string;
  output?: string;
  type: 'core' | 'optional' | 'management';
}

export interface Feature {
  title: string;
  description: string;
  benefits: string[];
  icon: string;
}

export interface WorkflowStep {
  id: string;
  step: number;
  title: string;
  command?: string;
  description: string;
  output?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Example {
  id: string;
  title: string;
  description: string;
  stack: string;
  code: string;
  output?: string;
  explanation: string;
}

export interface SearchResult {
  title: string;
  path: string;
  excerpt: string;
  type: string;
}
