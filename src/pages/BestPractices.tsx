import { CodeBlock } from '../components/ui/CodeBlock';
import { Badge, SectionHeader } from '../components/ui/Cards';

const SECTIONS = [
  {
    title: 'Folder Structure',
    content: [
      { label: 'Use feature-based organization', code: `src/
├── features/
│   ├── auth/             # Feature module
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types/
│   └── dashboard/
├── shared/               # Cross-feature utilities
│   ├── components/       # Reusable UI components
│   ├── hooks/            # Shared hooks
│   └── utils/
└── spec-kit/             # Spec Kit integration layer
    ├── configuration/
    ├── services/
    └── documentation/` },
    ],
  },
  {
    title: 'Naming Conventions',
    items: [
      ['Spec files', 'Use kebab-case: .specify/specs/user-onboarding.md'],
      ['Plan files', 'Match spec name: .specify/plans/user-onboarding.md'],
      ['Task files', 'Match spec name: .specify/tasks/user-onboarding.md'],
      ['Branch naming', 'speckit/<feature-name> (e.g., speckit/user-onboarding)'],
      ['Commit prefixes', 'spec:, plan:, tasks:, implement: to trace SDD phases'],
    ],
  },
  {
    title: 'Constitution Best Practices',
    items: [
      ['Be specific', 'Vague principles produce vague implementations. "Use TypeScript strict mode" is better than "write clean code".'],
      ['Include architecture decisions', 'State folder structure, state management choice, API patterns upfront.'],
      ['Define quality standards', 'Minimum test coverage, accessibility requirements, performance budgets.'],
      ['Update over time', 'The constitution evolves. Update it when team decisions change.'],
    ],
  },
  {
    title: 'Specification Writing',
    items: [
      ['Focus on what, not how', 'Describe user scenarios and acceptance criteria. Leave technical decisions to /speckit.plan.'],
      ['Be concrete', 'Use real numbers: "respond in < 200ms" not "respond quickly".'],
      ['Include edge cases', 'What happens when the user is unauthenticated? What if the API fails? Document these.'],
      ['Use /speckit.clarify', 'Always run clarify before plan on complex features. Cheap to fix early.'],
    ],
  },
  {
    title: 'Team Workflow',
    items: [
      ['Commit specs to Git', 'Treat .specify/ files like source code. Review via pull requests.'],
      ['Review specs before coding', 'Non-technical stakeholders can review specs. Catch requirement misalignments early.'],
      ['Convert tasks to issues', 'Use /speckit.taskstoissues to track implementation in GitHub Issues.'],
      ['Keep spec and code in sync', 'Run /speckit.analyze when changing requirements mid-implementation.'],
    ],
  },
  {
    title: 'Extension & Preset Strategy',
    items: [
      ['Start with core', 'Use Spec Kit core for 2-3 weeks before adding extensions. Understand the baseline first.'],
      ['Extensions for new workflows', 'Only add extensions when you need a capability that core does not provide.'],
      ['Presets for standards', 'Use presets to encode organizational standards (compliance formats, terminology, quality gates).'],
      ['Local overrides for exceptions', 'Use .specify/templates/overrides/ for one-off project customizations.'],
    ],
  },
];

export default function BestPractices() {
  return (
    <div className="space-y-12">
      <div>
        <Badge variant="success">Guide</Badge>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-3 tracking-tight">
          Best Practices
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 mt-4 max-w-3xl">
          Recommendations for getting the most out of Spec-Driven Development with Spec Kit.
        </p>
      </div>

      {/* SDD commandments */}
      <section>
        <SectionHeader title="The 10 SDD Principles" badge="Core" />
        <div className="space-y-2">
          {[
            'Always run /speckit.constitution before your first spec. Principles guide everything.',
            'Specify the "what" and "why" — never the "how" in the spec phase.',
            'Run /speckit.clarify on any feature with ambiguous requirements.',
            'Commit all .specify/ artifacts to version control. They are first-class documentation.',
            'Review specifications via pull requests before creating the implementation plan.',
            'Use /speckit.analyze to verify cross-artifact consistency before implementing.',
            'Task files are the single source of truth for implementation scope.',
            'Keep the constitution up to date. It should evolve with your project.',
            'Use /speckit.taskstoissues to connect SDD artifacts to project management.',
            'Run specifications against multiple AI agents. Different agents catch different gaps.',
          ].map((principle, i) => (
            <div key={i} className="flex gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors">
              <span className="shrink-0 w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                {i + 1}
              </span>
              <p className="text-sm text-slate-700 dark:text-slate-300">{principle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed sections */}
      {SECTIONS.map((section, i) => (
        <section key={i}>
          <SectionHeader title={section.title} />
          {section.content?.map((block, j) => (
            <div key={j}>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{block.label}</p>
              <CodeBlock code={block.code} language="text" />
            </div>
          ))}
          {section.items?.map(([title, desc], j) => (
            <div key={j} className="flex gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-3">
              <div className="shrink-0 w-1.5 rounded-full bg-emerald-500 self-stretch" />
              <div>
                <span className="font-semibold text-slate-900 dark:text-white text-sm">{title}: </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">{desc}</span>
              </div>
            </div>
          ))}
        </section>
      ))}

      {/* CI/CD */}
      <section>
        <SectionHeader title="CI/CD Integration" />
        <CodeBlock
          code={`# .github/workflows/spec-kit-check.yml
name: Spec Kit CI

on: [push, pull_request]

jobs:
  spec-kit-verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.11'
      
      - name: Install uv
        run: curl -LsSf https://astral.sh/uv/install.sh | sh
      
      - name: Install specify-cli
        run: |
          export PATH="$HOME/.local/bin:$PATH"
          uv tool install specify-cli \\
            --from git+https://github.com/github/spec-kit.git@v0.8.18
      
      - name: Verify installation
        run: |
          export PATH="$HOME/.local/bin:$PATH"
          specify version
      
      # Optional: validate spec kit project structure
      - name: Check .specify directory
        run: test -d .specify && echo "Spec Kit initialized" || echo "Warning: no .specify dir"`}
          language="yaml"
          title=".github/workflows/spec-kit-check.yml"
        />
      </section>

      {/* Git practices */}
      <section>
        <SectionHeader title="Git Workflow Integration" />
        <CodeBlock
          code={`# Recommended Git workflow for SDD

# 1. Create a spec branch
git checkout -b speckit/user-onboarding

# 2. Run /speckit.constitution (if new project)
# 3. Run /speckit.specify → commits spec artifact
git add .specify/specs/user-onboarding.md
git commit -m "spec: add user onboarding flow specification"

# 4. Run /speckit.plan → commits plan artifact
git add .specify/plans/user-onboarding.md
git commit -m "plan: add user onboarding implementation plan"

# 5. Run /speckit.tasks → commits task artifact
git add .specify/tasks/user-onboarding.md
git commit -m "tasks: add user onboarding task breakdown"

# 6. Open PR for spec review (before implementation!)
gh pr create --title "Spec: User Onboarding Flow" \\
  --body "Specification for the new onboarding wizard. Please review requirements."

# 7. After approval, run /speckit.implement
git commit -m "implement: build user onboarding wizard [tasks: 1-18]"`}
          language="bash"
          title="Git workflow"
        />
      </section>
    </div>
  );
}
