import { useState, useCallback } from 'react';
import type { SearchResult } from '../types';
import { CORE_COMMANDS, OPTIONAL_COMMANDS, MANAGEMENT_COMMANDS, SPEC_KIT_FEATURES, FAQS } from '../spec-kit';

const SEARCH_INDEX: SearchResult[] = [
  { title: 'Dashboard', path: '/', excerpt: 'Overview of Spec Kit, quick start, features, and workflow visualization.', type: 'Page' },
  { title: 'What is Spec Kit', path: '/what-is-spec-kit', excerpt: 'GitHub\'s open-source toolkit for Spec-Driven Development (SDD). 107K+ stars.', type: 'Page' },
  { title: 'Installation Guide', path: '/installation', excerpt: 'Install specify-cli using uv or pipx. Prerequisites, verification, and troubleshooting.', type: 'Page' },
  { title: 'Integration Guide', path: '/integration', excerpt: 'Integrate Spec Kit with GitHub Copilot, Claude Code, Gemini CLI, and 30+ agents.', type: 'Page' },
  { title: 'Architecture', path: '/architecture', excerpt: 'System architecture of Spec Kit: SDD methodology, artifact flow, and integration layer.', type: 'Page' },
  { title: 'Features', path: '/features', excerpt: 'Structured specifications, AI workflow, extensions, presets, enterprise support.', type: 'Page' },
  { title: 'Commands Reference', path: '/commands', excerpt: 'All specify and /speckit.* slash commands with parameters and examples.', type: 'Page' },
  { title: 'Workflows', path: '/workflows', excerpt: 'SDD workflow: constitution → specify → plan → tasks → implement.', type: 'Page' },
  { title: 'Examples', path: '/examples', excerpt: 'React, Next.js, Node.js, and team collaboration examples with full code.', type: 'Page' },
  { title: 'Demo Playground', path: '/playground', excerpt: 'Interactive generators for specifications, plans, tasks, and user stories.', type: 'Page' },
  { title: 'Best Practices', path: '/best-practices', excerpt: 'Folder structure, naming conventions, documentation standards, workflow patterns.', type: 'Page' },
  { title: 'Troubleshooting', path: '/troubleshooting', excerpt: 'Common installation, configuration, and integration issues with solutions.', type: 'Page' },
  { title: 'FAQ', path: '/faq', excerpt: '22 frequently asked questions about Spec Kit installation, commands, and workflows.', type: 'Page' },
  { title: 'Resources', path: '/resources', excerpt: 'Official docs, GitHub repo, releases, tutorials, community, and support links.', type: 'Page' },
  ...CORE_COMMANDS.map(c => ({ title: c.command, path: '/commands', excerpt: c.description, type: 'Command' })),
  ...OPTIONAL_COMMANDS.map(c => ({ title: c.command, path: '/commands', excerpt: c.description, type: 'Command' })),
  ...MANAGEMENT_COMMANDS.slice(0, 5).map(c => ({ title: c.command, path: '/commands', excerpt: c.description, type: 'Command' })),
  ...SPEC_KIT_FEATURES.map(f => ({ title: f.title, path: '/features', excerpt: f.description, type: 'Feature' })),
  ...FAQS.slice(0, 10).map(f => ({ title: f.question, path: '/faq', excerpt: f.answer.substring(0, 120) + '...', type: 'FAQ' })),
];

export function useSearch() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const results = useCallback((): SearchResult[] => {
    if (!query.trim() || query.length < 2) return [];
    const q = query.toLowerCase();
    return SEARCH_INDEX.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.excerpt.toLowerCase().includes(q) ||
      item.type.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [query]);

  return { query, setQuery, isOpen, setIsOpen, results };
}
