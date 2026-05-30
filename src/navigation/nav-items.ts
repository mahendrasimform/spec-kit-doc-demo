import type { NavItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', path: '/', icon: 'LayoutDashboard' },
  {
    id: 'overview', label: 'Overview', path: '#', icon: 'Info',
    children: [
      { id: 'what-is', label: 'What is Spec Kit', path: '/what-is-spec-kit', icon: 'HelpCircle' },
      { id: 'architecture', label: 'Architecture', path: '/architecture', icon: 'Network' },
      { id: 'features', label: 'Features', path: '/features', icon: 'Sparkles' },
    ],
  },
  {
    id: 'getting-started', label: 'Getting Started', path: '#', icon: 'Rocket',
    children: [
      { id: 'installation', label: 'Installation Guide', path: '/installation', icon: 'Download', badge: 'v0.8.18' },
      { id: 'integration', label: 'Integration Guide', path: '/integration', icon: 'Plug' },
    ],
  },
  {
    id: 'reference', label: 'Reference', path: '#', icon: 'BookOpen',
    children: [
      { id: 'commands', label: 'Commands Reference', path: '/commands', icon: 'Terminal' },
      { id: 'workflows', label: 'Workflows', path: '/workflows', icon: 'GitBranch' },
    ],
  },
  {
    id: 'learn', label: 'Learn', path: '#', icon: 'GraduationCap',
    children: [
      { id: 'examples', label: 'Examples', path: '/examples', icon: 'Code2' },
      { id: 'playground', label: 'Demo Playground', path: '/playground', icon: 'Play', badge: 'Interactive' },
      { id: 'best-practices', label: 'Best Practices', path: '/best-practices', icon: 'Award' },
    ],
  },
  {
    id: 'support', label: 'Support', path: '#', icon: 'LifeBuoy',
    children: [
      { id: 'troubleshooting', label: 'Troubleshooting', path: '/troubleshooting', icon: 'AlertTriangle' },
      { id: 'faq', label: 'FAQ', path: '/faq', icon: 'MessageCircle' },
      { id: 'resources', label: 'Resources', path: '/resources', icon: 'ExternalLink' },
    ],
  },
];

export const FLAT_NAV: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', path: '/', icon: 'LayoutDashboard' },
  { id: 'what-is', label: 'What is Spec Kit', path: '/what-is-spec-kit', icon: 'HelpCircle' },
  { id: 'installation', label: 'Installation Guide', path: '/installation', icon: 'Download' },
  { id: 'integration', label: 'Integration Guide', path: '/integration', icon: 'Plug' },
  { id: 'architecture', label: 'Architecture', path: '/architecture', icon: 'Network' },
  { id: 'features', label: 'Features', path: '/features', icon: 'Sparkles' },
  { id: 'commands', label: 'Commands Reference', path: '/commands', icon: 'Terminal' },
  { id: 'workflows', label: 'Workflows', path: '/workflows', icon: 'GitBranch' },
  { id: 'examples', label: 'Examples', path: '/examples', icon: 'Code2' },
  { id: 'playground', label: 'Demo Playground', path: '/playground', icon: 'Play' },
  { id: 'best-practices', label: 'Best Practices', path: '/best-practices', icon: 'Award' },
  { id: 'troubleshooting', label: 'Troubleshooting', path: '/troubleshooting', icon: 'AlertTriangle' },
  { id: 'faq', label: 'FAQ', path: '/faq', icon: 'MessageCircle' },
  { id: 'resources', label: 'Resources', path: '/resources', icon: 'ExternalLink' },
];
