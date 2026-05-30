import { ExternalLink, BookOpen, PlayCircle, Users, MessageCircle, Star, Tag } from 'lucide-react';
import { GithubIcon as Github } from '../components/ui/Icons';
import { SPEC_KIT_CONFIG } from '../spec-kit';
import { Badge, SectionHeader } from '../components/ui/Cards';

const RESOURCES = [
  {
    category: 'Official',
    items: [
      {
        title: 'Official Documentation',
        description: 'The complete Spec Kit documentation site hosted at github.github.io/spec-kit/',
        url: SPEC_KIT_CONFIG.docsUrl,
        icon: <BookOpen size={22} className="text-emerald-500" />,
        badge: 'Official',
        color: 'border-emerald-200 dark:border-emerald-800',
      },
      {
        title: 'GitHub Repository',
        description: 'Source code, issues, discussions, and releases for github/spec-kit. 107K+ stars.',
        url: SPEC_KIT_CONFIG.repoUrl,
        icon: <Github size={22} className="text-slate-700 dark:text-slate-300" />,
        badge: '107K Stars',
        color: 'border-slate-200 dark:border-slate-700',
      },
      {
        title: `Release v${SPEC_KIT_CONFIG.version}`,
        description: `Latest stable release of specify-cli. View changelog, download options, and release notes.`,
        url: SPEC_KIT_CONFIG.releaseUrl,
        icon: <Tag size={22} className="text-blue-500" />,
        badge: `v${SPEC_KIT_CONFIG.version}`,
        color: 'border-blue-200 dark:border-blue-800',
      },
      {
        title: 'All Releases',
        description: 'Full release history for Spec Kit. 153+ releases with detailed changelogs.',
        url: SPEC_KIT_CONFIG.latestReleasesUrl,
        icon: <Tag size={22} className="text-violet-500" />,
        badge: '153+ Releases',
        color: 'border-violet-200 dark:border-violet-800',
      },
    ],
  },
  {
    category: 'Learning',
    items: [
      {
        title: 'Video Overview',
        description: 'Official video walkthrough of Spec Kit showing the SDD workflow in action.',
        url: SPEC_KIT_CONFIG.videoOverviewUrl,
        icon: <PlayCircle size={22} className="text-red-500" />,
        badge: 'Video',
        color: 'border-red-200 dark:border-red-800',
      },
      {
        title: 'Quick Start Guide',
        description: 'Step-by-step guide to initializing your first Spec Kit project and running the workflow.',
        url: `${SPEC_KIT_CONFIG.docsUrl}quickstart.html`,
        icon: <BookOpen size={22} className="text-emerald-500" />,
        badge: 'Beginner',
        color: 'border-emerald-200 dark:border-emerald-800',
      },
      {
        title: 'Spec-Driven Development Guide',
        description: 'Deep dive into the complete SDD methodology — the philosophy, phases, and best practices.',
        url: `${SPEC_KIT_CONFIG.repoUrl}/blob/main/spec-driven.md`,
        icon: <BookOpen size={22} className="text-teal-500" />,
        badge: 'Core Methodology',
        color: 'border-teal-200 dark:border-teal-800',
      },
      {
        title: 'Community Walkthroughs',
        description: 'End-to-end SDD scenario walkthroughs contributed by the community.',
        url: `${SPEC_KIT_CONFIG.docsUrl}community/walkthroughs.html`,
        icon: <PlayCircle size={22} className="text-amber-500" />,
        badge: 'Community',
        color: 'border-amber-200 dark:border-amber-800',
      },
    ],
  },
  {
    category: 'Community & Extensions',
    items: [
      {
        title: 'Community Extensions',
        description: '105+ extensions contributed by the community. Add Jira, V-Model, architecture guards, and more.',
        url: `${SPEC_KIT_CONFIG.docsUrl}community/extensions.html`,
        icon: <Star size={22} className="text-amber-500" />,
        badge: '105 Extensions',
        color: 'border-amber-200 dark:border-amber-800',
      },
      {
        title: 'Community Presets',
        description: '22+ presets for customizing Spec Kit workflows to your team, methodology, or compliance requirements.',
        url: `${SPEC_KIT_CONFIG.docsUrl}community/presets.html`,
        icon: <Star size={22} className="text-violet-500" />,
        badge: '22 Presets',
        color: 'border-violet-200 dark:border-violet-800',
      },
      {
        title: 'GitHub Discussions',
        description: 'Ask questions, share examples, and discuss Spec Kit with the community.',
        url: SPEC_KIT_CONFIG.discussionsUrl,
        icon: <MessageCircle size={22} className="text-blue-500" />,
        badge: 'Community',
        color: 'border-blue-200 dark:border-blue-800',
      },
      {
        title: 'Friend Projects',
        description: 'Projects that extend or build upon Spec Kit, including alternative SDD processes and integrations.',
        url: `${SPEC_KIT_CONFIG.docsUrl}community/friends.html`,
        icon: <Users size={22} className="text-pink-500" />,
        badge: 'Ecosystem',
        color: 'border-pink-200 dark:border-pink-800',
      },
    ],
  },
  {
    category: 'Support',
    items: [
      {
        title: 'GitHub Issues',
        description: 'Report bugs, request features, or ask questions. The Spec Kit team actively monitors issues.',
        url: SPEC_KIT_CONFIG.issuesUrl,
        icon: <Github size={22} className="text-slate-700 dark:text-slate-300" />,
        badge: 'Bug Reports',
        color: 'border-slate-200 dark:border-slate-700',
      },
      {
        title: 'Contributing Guide',
        description: 'How to contribute to Spec Kit — extensions, presets, code, documentation, and more.',
        url: `${SPEC_KIT_CONFIG.repoUrl}/blob/main/CONTRIBUTING.md`,
        icon: <Users size={22} className="text-emerald-500" />,
        badge: 'Contribute',
        color: 'border-emerald-200 dark:border-emerald-800',
      },
      {
        title: 'Extension Publishing Guide',
        description: 'Step-by-step guide to creating and publishing your own Spec Kit extension to the community catalog.',
        url: `${SPEC_KIT_CONFIG.repoUrl}/blob/main/extensions/EXTENSION-PUBLISHING-GUIDE.md`,
        icon: <Star size={22} className="text-blue-500" />,
        badge: 'Publish',
        color: 'border-blue-200 dark:border-blue-800',
      },
      {
        title: 'Security Policy',
        description: 'How to report security vulnerabilities in Spec Kit responsibly.',
        url: `${SPEC_KIT_CONFIG.repoUrl}/blob/main/SECURITY.md`,
        icon: <BookOpen size={22} className="text-red-500" />,
        badge: 'Security',
        color: 'border-red-200 dark:border-red-800',
      },
    ],
  },
];

export default function Resources() {
  return (
    <div className="space-y-12">
      <div>
        <Badge variant="default">Links</Badge>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-3 tracking-tight">
          Resources
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 mt-4 max-w-3xl">
          Official documentation, GitHub repository, tutorials, community resources, and support links.
        </p>
      </div>

      {RESOURCES.map((section, i) => (
        <section key={i}>
          <SectionHeader title={section.category} />
          <div className="grid sm:grid-cols-2 gap-4">
            {section.items.map((item, j) => (
              <a
                key={j}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-start gap-4 p-5 rounded-2xl border-2 ${item.color} bg-white dark:bg-slate-900 hover:shadow-md transition-all hover:scale-[1.01]`}
              >
                <div className="shrink-0 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <Badge variant="default">{item.badge}</Badge>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.description}</p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    <ExternalLink size={11} />
                    <span className="truncate">{item.url.replace('https://', '')}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      ))}

      {/* Quick links */}
      <section>
        <SectionHeader title="Quick Command Reference" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: 'Install specify-cli', code: `uv tool install specify-cli --from git+${SPEC_KIT_CONFIG.repoUrl}.git@v${SPEC_KIT_CONFIG.version}` },
            { label: 'Verify installation', code: 'specify version' },
            { label: 'Initialize a project', code: 'specify init my-project --integration copilot' },
            { label: 'List integrations', code: 'specify integration list' },
          ].map((item, i) => (
            <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
              <p className="text-xs text-slate-500 mb-1.5">{item.label}</p>
              <code className="text-xs font-mono text-emerald-600 dark:text-emerald-400 break-all">{item.code}</code>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
