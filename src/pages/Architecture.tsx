import { ChevronDown } from 'lucide-react';
import { SectionHeader, Badge, Card } from '../components/ui/Cards';
import { CodeBlock } from '../components/ui/CodeBlock';

const ARCH_LAYERS = [
  { label: 'Developer / Product Team', description: 'Provides natural language requirements and tech stack decisions', color: 'bg-blue-100 dark:bg-blue-950 border-blue-300 dark:border-blue-700 text-blue-800 dark:text-blue-300' },
  { label: 'AI Coding Agent', description: 'Copilot, Claude, Gemini, Cursor — executes slash commands', color: 'bg-purple-100 dark:bg-purple-950 border-purple-300 dark:border-purple-700 text-purple-800 dark:text-purple-300' },
  { label: 'Spec Kit (specify-cli v0.8.18)', description: 'Core CLI — manages templates, integrations, extensions', color: 'bg-emerald-100 dark:bg-emerald-950 border-emerald-400 dark:border-emerald-600 text-emerald-800 dark:text-emerald-300 font-bold' },
  { label: 'SDD Artifact Engine', description: 'Transforms templates into structured Markdown artifacts', color: 'bg-teal-100 dark:bg-teal-950 border-teal-300 dark:border-teal-700 text-teal-800 dark:text-teal-300' },
  { label: 'Extension & Preset Layer', description: 'Community and org-specific customization overlay', color: 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-300' },
  { label: 'Git Repository', description: 'Artifacts, scripts, and project memory stored as version-controlled Markdown', color: 'bg-amber-100 dark:bg-amber-950 border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-300' },
];

export default function Architecture() {
  return (
    <div className="space-y-12">
      <div>
        <Badge variant="blue">System Design</Badge>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-3 tracking-tight">
          Architecture
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 mt-4 max-w-3xl">
          How Spec Kit is structured — from the CLI tool and artifact engine to the extension layer and Git integration.
        </p>
      </div>

      {/* System diagram */}
      <section>
        <SectionHeader title="System Architecture" />
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-8">
          <div className="flex flex-col items-center gap-2 max-w-lg mx-auto">
            {ARCH_LAYERS.map((layer, i) => (
              <div key={i} className="w-full flex flex-col items-center">
                <div className={`w-full rounded-xl border-2 ${layer.color} p-3 text-center`}>
                  <div className="text-sm font-semibold">{layer.label}</div>
                  <div className="text-xs opacity-75 mt-0.5">{layer.description}</div>
                </div>
                {i < ARCH_LAYERS.length - 1 && (
                  <ChevronDown size={18} className="text-slate-400 my-1" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artifact flow */}
      <section>
        <SectionHeader title="Artifact Flow" subtitle="Each phase produces a Markdown file that feeds the next step." />
        <div className="relative overflow-x-auto">
          <div className="flex items-start gap-2 min-w-max">
            {[
              { label: 'Constitution', file: 'constitution.md', cmd: '/speckit.constitution', color: 'emerald' },
              { label: 'Specification', file: 'specs/<feature>.md', cmd: '/speckit.specify', color: 'blue' },
              { label: 'Plan', file: 'plans/<feature>.md', cmd: '/speckit.plan', color: 'violet' },
              { label: 'Tasks', file: 'tasks/<feature>.md', cmd: '/speckit.tasks', color: 'amber' },
              { label: 'Implementation', file: 'Working code', cmd: '/speckit.implement', color: 'teal' },
            ].map((item, i, arr) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`p-3 rounded-xl border-2 text-center min-w-[130px] ${
                  item.color === 'emerald' ? 'border-emerald-400 bg-emerald-50 dark:bg-emerald-950' :
                  item.color === 'blue' ? 'border-blue-400 bg-blue-50 dark:bg-blue-950' :
                  item.color === 'violet' ? 'border-violet-400 bg-violet-50 dark:bg-violet-950' :
                  item.color === 'amber' ? 'border-amber-400 bg-amber-50 dark:bg-amber-950' :
                  'border-teal-400 bg-teal-50 dark:bg-teal-950'
                }`}>
                  <div className="font-bold text-slate-900 dark:text-white text-sm">{item.label}</div>
                  <code className={`text-[10px] font-mono block mt-1 ${
                    item.color === 'emerald' ? 'text-emerald-600 dark:text-emerald-400' :
                    item.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                    item.color === 'violet' ? 'text-violet-600 dark:text-violet-400' :
                    item.color === 'amber' ? 'text-amber-600 dark:text-amber-400' :
                    'text-teal-600 dark:text-teal-400'
                  }`}>{item.cmd}</code>
                  <div className="text-[10px] text-slate-500 mt-1">.specify/{item.file}</div>
                </div>
                {i < arr.length - 1 && (
                  <div className="text-slate-400">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Template resolution */}
      <section>
        <SectionHeader title="Template Resolution Order" subtitle="Spec Kit walks the stack top-down and uses the first matching template." />
        <div className="space-y-2">
          {[
            { priority: '1 (Highest)', label: 'Project-local overrides', path: '.specify/templates/overrides/', desc: 'One-off customizations for this specific project' },
            { priority: '2', label: 'Preset templates', path: '.specify/presets/templates/', desc: 'Org/team standards installed via specify preset add' },
            { priority: '3', label: 'Extension templates', path: '.specify/extensions/templates/', desc: 'New commands from specify extension add' },
            { priority: '4 (Lowest)', label: 'Spec Kit core templates', path: '.specify/templates/', desc: 'Built-in SDD templates — always present' },
          ].map((layer, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
              <span className="shrink-0 w-20 text-xs font-bold text-slate-500 dark:text-slate-400 pt-0.5">{layer.priority}</span>
              <div>
                <div className="font-semibold text-slate-900 dark:text-white text-sm">{layer.label}</div>
                <code className="text-xs font-mono text-emerald-600 dark:text-emerald-400">{layer.path}</code>
                <p className="text-xs text-slate-500 mt-0.5">{layer.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Directory structure */}
      <section>
        <SectionHeader title="Complete Directory Structure" />
        <CodeBlock
          code={`my-project/
├── .specify/                       # Spec Kit root
│   ├── templates/                  # Core SDD templates
│   │   ├── constitution-template.md
│   │   ├── spec-template.md
│   │   ├── plan-template.md
│   │   ├── tasks-template.md
│   │   ├── checklist-template.md
│   │   └── overrides/             # Project-local overrides
│   │
│   ├── scripts/
│   │   ├── bash/                  # .sh automation scripts
│   │   └── powershell/            # .ps1 scripts (Windows)
│   │
│   ├── memory/
│   │   └── constitution.md        # Living project principles
│   │
│   ├── extensions/
│   │   ├── extensions.yml         # Installed extensions manifest
│   │   └── templates/             # Extension command templates
│   │
│   ├── presets/
│   │   └── templates/             # Preset template overrides
│   │
│   ├── workflows/                 # Automation workflow .yml files
│   ├── integrations/              # Agent integration metadata
│   ├── integration.json           # Active integration config
│   └── init-options.json          # How project was initialized
│
├── .github/                       # GitHub Copilot integration
│   └── prompts/                   # 14 .prompt.md slash-command files
│
├── .claude/                       # Claude Code integration (if added)
│   └── commands/
│
├── .gemini/                       # Gemini CLI integration (if added)
│   └── commands/
│
└── ... (your application source code)`}
          language="text"
          title="Complete Spec Kit project structure"
        />
      </section>

      {/* Core components */}
      <section>
        <SectionHeader title="Core Components" />
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: 'specify-cli (Python)', desc: 'The main CLI tool. Handles project initialization, extension/preset management, integration setup, and workflow execution. Written in Python 3.11+.', color: 'border-emerald-200 dark:border-emerald-800' },
            { title: 'SDD Templates (Markdown)', desc: 'Structured templates for constitutions, specifications, plans, tasks, and checklists. Templates use a consistent, AI-interpretable format.', color: 'border-blue-200 dark:border-blue-800' },
            { title: 'Agent Command Files', desc: 'Integration-specific files (e.g., .prompt.md for Copilot, slash-command.md for Claude) that register slash commands in your AI agent.', color: 'border-violet-200 dark:border-violet-800' },
            { title: 'Automation Scripts', desc: 'Bash and PowerShell scripts in .specify/scripts/ that power /speckit.implement and other automated commands.', color: 'border-amber-200 dark:border-amber-800' },
          ].map((comp, i) => (
            <Card key={i}>
              <h3 className={`font-bold text-slate-900 dark:text-white mb-2 text-sm pb-2 border-b-2 ${comp.color}`}>{comp.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{comp.desc}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
