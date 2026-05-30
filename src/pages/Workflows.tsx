import { MAIN_WORKFLOW, DEVELOPMENT_PHASES } from '../spec-kit';
import { CodeBlock } from '../components/ui/CodeBlock';
import { Badge, SectionHeader, StepBadge, Card } from '../components/ui/Cards';

export default function Workflows() {
  return (
    <div className="space-y-12">
      <div>
        <Badge variant="blue">Reference</Badge>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-3 tracking-tight">
          Workflows
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 mt-4 max-w-3xl">
          The complete Spec-Driven Development workflow — from idea to production-ready implementation.
        </p>
      </div>

      {/* Main SDD workflow */}
      <section>
        <SectionHeader
          title="The SDD Workflow"
          subtitle="Each step produces a structured Markdown artifact stored in .specify/. These artifacts feed the next step, giving your AI agent rich, consistent context."
          badge="Core Workflow"
        />
        <div className="space-y-6">
          {MAIN_WORKFLOW.map((step, i) => {
            const isOptional = step.id === 'clarify' || step.id === 'checklist' || step.id === 'analyze';
            return (
              <div key={step.id} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <StepBadge step={step.step} optional={isOptional} />
                  {i < MAIN_WORKFLOW.length - 1 && (
                    <div className="w-0.5 flex-1 mt-2 bg-slate-200 dark:bg-slate-700 min-h-8" />
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="font-bold text-slate-900 dark:text-white">{step.title}</h3>
                    {isOptional && <Badge variant="amber">Optional</Badge>}
                    {!isOptional && <Badge variant="success">Required</Badge>}
                    {step.command && (
                      <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded">
                        {step.command}
                      </code>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{step.description}</p>
                  {step.output && (
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-xs text-slate-400">Output:</span>
                      <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded">
                        {step.output}
                      </code>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Full workflow example */}
      <section>
        <SectionHeader title="Complete Workflow Example" badge="Example" />
        <CodeBlock
          code={`# In your terminal (one time)
specify init my-app --integration copilot

# ──────────────────────────────────────────────────────────
# In your AI coding agent (GitHub Copilot Chat)
# ──────────────────────────────────────────────────────────

# Step 1: Establish project principles
/speckit.constitution
# Prompt: Create principles for a React TypeScript SaaS app:
# - TypeScript strict mode, no 'any', functional components only
# - Tailwind for styling, React Query for server state
# - Vitest + Testing Library for tests, 80% coverage minimum
# - Conventional Commits, semantic versioning

# Step 2: Create the specification
/speckit.specify
# Prompt: Build a user onboarding flow for a SaaS dashboard:
# - 3-step wizard (profile, team setup, tool connections)
# - Progress indicator, step validation, back/next navigation
# - Save progress and resume later
# - Send welcome email after completion

# Step 3 (optional): Clarify ambiguities
/speckit.clarify
# → Surfaces: What happens if email fails? Can user skip steps?
#   How long does progress persist? Mobile responsive required?

# Step 4 (optional): Validate spec quality
/speckit.checklist
# → Generates quality checklist for reviewing the spec

# Step 5: Technical implementation plan
/speckit.plan
# Prompt: React 19, TypeScript 5.4, Tailwind CSS v4, React Query v5.
# Use React Hook Form + Zod for validation. AWS SES for email.
# Store progress in localStorage, sync to API on completion.
# Deploy to Vercel, API on AWS Lambda.

# Step 6: Generate tasks
/speckit.tasks
# → Creates ordered list of ~20 atomic implementation tasks

# Step 7 (optional): Cross-artifact analysis
/speckit.analyze
# → Verifies spec/plan/tasks are fully aligned before coding

# Step 8: Implement
/speckit.implement
# → Executes all tasks, builds the complete onboarding feature`}
          language="bash"
          title="Complete SDD workflow"
        />
      </section>

      {/* Development phases */}
      <section>
        <SectionHeader
          title="Development Phases"
          subtitle="Spec Kit supports three modes of development, each using the same SDD workflow."
          badge="Modes"
        />
        <div className="grid sm:grid-cols-3 gap-5">
          {DEVELOPMENT_PHASES.map((phase) => (
            <Card key={phase.id} hover>
              <div className={`text-sm font-bold mb-1 ${
                phase.color === 'emerald' ? 'text-emerald-600 dark:text-emerald-400' :
                phase.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                'text-violet-600 dark:text-violet-400'
              }`}>{phase.subtitle}</div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">{phase.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{phase.description}</p>
              <div className="space-y-1.5">
                {phase.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    {i > 0 && <span className="text-slate-400">→</span>}
                    <span className={i === 0 ? 'font-medium' : ''}>{step.replace('→ ', '')}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Requirement workflow */}
      <section>
        <SectionHeader title="Workflow: Requirement to Production" badge="Detailed Flow" />
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          {[
            { phase: 'Discovery', items: ['Stakeholder input', 'Problem statement', 'Success criteria'], color: 'bg-blue-50 dark:bg-blue-950/30' },
            { phase: 'Specification (SDD)', items: ['/speckit.constitution (principles)', '/speckit.specify (requirements)', '/speckit.clarify (ambiguity removal)', '/speckit.checklist (quality gate)'], color: 'bg-emerald-50 dark:bg-emerald-950/30' },
            { phase: 'Planning (SDD)', items: ['/speckit.plan (architecture + tech stack)', '/speckit.tasks (atomic task breakdown)', '/speckit.analyze (consistency check)', '/speckit.taskstoissues (GitHub Issues)'], color: 'bg-teal-50 dark:bg-teal-950/30' },
            { phase: 'Implementation (SDD)', items: ['/speckit.implement (full build)', 'Code review', 'Testing', 'Merge'], color: 'bg-violet-50 dark:bg-violet-950/30' },
            { phase: 'Release', items: ['CI/CD pipeline', 'Staging verification', 'Production deploy', 'Monitoring'], color: 'bg-slate-50 dark:bg-slate-800/50' },
          ].map((row, i) => (
            <div key={i} className={`flex items-start gap-4 p-4 border-b border-slate-200 dark:border-slate-700 last:border-0 ${row.color}`}>
              <span className="shrink-0 w-32 text-sm font-bold text-slate-700 dark:text-slate-300">{row.phase}</span>
              <ul className="flex flex-wrap gap-2">
                {row.items.map((item, j) => (
                  <li key={j} className="text-xs bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
