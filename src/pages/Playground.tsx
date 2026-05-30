import { useState } from 'react';
import { Play, RefreshCw, Copy, Check } from 'lucide-react';
import { Badge, SectionHeader, Card } from '../components/ui/Cards';

type GeneratorType = 'spec' | 'plan' | 'tasks' | 'story' | 'constitution';

interface SpecForm {
  projectName: string;
  feature: string;
  users: string;
  goals: string;
}

interface PlanForm {
  feature: string;
  techStack: string;
  constraints: string;
}

interface TasksForm {
  feature: string;
  planSummary: string;
}

interface StoryForm {
  persona: string;
  goal: string;
  benefit: string;
}

interface ConstitutionForm {
  projectType: string;
  standards: string;
  architecture: string;
}

function generateSpec(form: SpecForm): string {
  return `# Specification: ${form.feature || 'Feature Name'}

## Project
${form.projectName || 'My Project'}

## Overview
Build a feature that allows ${form.users || 'users'} to ${form.feature?.toLowerCase() || 'accomplish their goal'}.

## Goals
${form.goals ? form.goals.split('\n').map(g => `- ${g}`).join('\n') : '- Improve user productivity\n- Reduce manual effort\n- Provide clear feedback'}

## User Scenarios

### Scenario 1: Happy Path
- **Given** a ${form.users || 'user'} is authenticated
- **When** they initiate the ${form.feature || 'feature'}
- **Then** the system processes the request successfully
- **And** the user receives confirmation

### Scenario 2: Error Handling
- **Given** an invalid input is provided
- **When** the user submits the form
- **Then** clear validation errors are displayed
- **And** no data is persisted

## Acceptance Criteria
- [ ] Feature is accessible within 2 clicks from the main dashboard
- [ ] All operations complete within 500ms (95th percentile)
- [ ] Mobile-responsive design (320px minimum)
- [ ] WCAG 2.1 AA accessibility compliance
- [ ] Unit tests cover all business logic (80% minimum)

## Out of Scope
- Advanced analytics
- Bulk operations (Phase 2)

## Dependencies
- Authentication system (existing)
- API backend (existing)`;
}

function generatePlan(form: PlanForm): string {
  return `# Implementation Plan: ${form.feature || 'Feature Name'}

## Technical Stack
${form.techStack || 'React, TypeScript, Tailwind CSS'}

## Architecture Overview
The ${form.feature || 'feature'} will be implemented as a React feature module
following the existing application architecture.

## Component Structure
\`\`\`
src/features/${(form.feature || 'feature').toLowerCase().replace(/\s+/g, '-')}/
├── components/
│   ├── ${(form.feature || 'Feature').replace(/\s+/g, '')}Container.tsx
│   ├── ${(form.feature || 'Feature').replace(/\s+/g, '')}Form.tsx
│   └── ${(form.feature || 'Feature').replace(/\s+/g, '')}List.tsx
├── hooks/
│   └── use${(form.feature || 'Feature').replace(/\s+/g, '')}.ts
├── services/
│   └── ${(form.feature || 'feature').toLowerCase().replace(/\s+/g, '-')}.service.ts
├── types/
│   └── index.ts
└── index.ts
\`\`\`

## Data Model
- Primary entity with id, timestamps, status fields
- Relations to User entity via foreign key
- Soft delete pattern (deletedAt timestamp)

## API Contracts
- GET /api/${(form.feature || 'feature').toLowerCase().replace(/\s+/g, '-')} — list with pagination
- POST /api/${(form.feature || 'feature').toLowerCase().replace(/\s+/g, '-')} — create
- PUT /api/${(form.feature || 'feature').toLowerCase().replace(/\s+/g, '-')}/:id — update
- DELETE /api/${(form.feature || 'feature').toLowerCase().replace(/\s+/g, '-')}/:id — soft delete

## Constraints
${form.constraints || '- No new external dependencies\n- Must integrate with existing auth\n- Follow existing coding patterns'}

## Testing Strategy
- Unit tests: all business logic and hooks
- Integration tests: API endpoints
- E2E test: critical happy path`;
}

function generateTasks(form: TasksForm): string {
  const feature = form.feature || 'Feature';
  return `# Tasks: ${feature}

## Phase 1: Setup & Infrastructure
- [ ] Task 1: Create feature directory structure
- [ ] Task 2: Define TypeScript interfaces and types
- [ ] Task 3: Set up API service layer with error handling
- [ ] Task 4: Configure React Query hooks for data fetching

## Phase 2: Core Implementation
- [ ] Task 5: Implement ${feature} list component with pagination
- [ ] Task 6: Build ${feature} creation form with validation
- [ ] Task 7: Add ${feature} edit functionality
- [ ] Task 8: Implement delete with confirmation dialog
- [ ] Task 9: Add loading skeletons and empty states
- [ ] Task 10: Implement error boundary and error states

## Phase 3: Integration & Polish
- [ ] Task 11: Wire up React Router for ${feature} routes
- [ ] Task 12: Add breadcrumb navigation
- [ ] Task 13: Implement optimistic updates
- [ ] Task 14: Add toast notifications for mutations

## Phase 4: Testing & Documentation
- [ ] Task 15: Write unit tests for all hooks (coverage ≥ 80%)
- [ ] Task 16: Write integration tests for API service
- [ ] Task 17: Add E2E test for happy path
- [ ] Task 18: Update component documentation

## Estimated Total: 8-12 hours`;
}

function generateStory(form: StoryForm): string {
  return `# User Story

## Story
**As a** ${form.persona || 'registered user'},  
**I want to** ${form.goal || 'complete my goal'},  
**So that** ${form.benefit || 'I receive value from the system'}.

## Acceptance Criteria (BDD)

### Scenario 1: Successful execution
\`\`\`gherkin
Given I am authenticated as a ${form.persona || 'user'}
And I am on the relevant page
When I ${form.goal || 'perform the action'}
Then the system processes my request
And I see a success confirmation
And the change is reflected immediately
\`\`\`

### Scenario 2: Validation failure
\`\`\`gherkin
Given I attempt to ${form.goal || 'perform the action'}
When I provide invalid or incomplete data
Then I see clear, actionable error messages
And no data is modified
\`\`\`

## Definition of Done
- [ ] Feature works as described in all scenarios
- [ ] Tests written and passing
- [ ] Code reviewed and approved
- [ ] Deployed to staging and verified
- [ ] Documentation updated

## Priority: Medium | Points: 3`;
}

function generateConstitution(form: ConstitutionForm): string {
  return `# Project Constitution

## Project Type
${form.projectType || 'Web Application'}

## Architecture Principles
${form.architecture ? form.architecture.split('\n').map(a => `- ${a}`).join('\n') : '- Component-based architecture\n- Separation of concerns\n- Single responsibility principle\n- Dependency inversion'}

## Coding Standards
${form.standards ? form.standards.split('\n').map(s => `- ${s}`).join('\n') : '- TypeScript strict mode, no implicit any\n- Functional components with hooks\n- Conventional Commits format\n- 80% minimum test coverage'}

## Quality Gates
- All PRs require review before merge
- CI must pass (lint, tests, build)
- No console.log in production code
- Security scan on dependencies (weekly)

## Development Workflow
1. Create spec with /speckit.specify
2. Clarify with /speckit.clarify
3. Plan with /speckit.plan
4. Break down with /speckit.tasks
5. Implement with /speckit.implement
6. Review → merge → deploy

## Documentation Requirements
- All public APIs documented
- README kept up to date
- Architecture decisions recorded in .specify/memory/

*This constitution was generated with Spec Kit Demo Playground*`;
}

const GENERATORS: Array<{ id: GeneratorType; label: string; desc: string; badge: string }> = [
  { id: 'spec', label: 'Specification Generator', desc: 'Generate a structured spec artifact', badge: '/speckit.specify' },
  { id: 'plan', label: 'Implementation Plan Generator', desc: 'Generate a technical plan artifact', badge: '/speckit.plan' },
  { id: 'tasks', label: 'Task Breakdown Generator', desc: 'Generate ordered task lists', badge: '/speckit.tasks' },
  { id: 'story', label: 'User Story Generator', desc: 'Generate BDD user stories', badge: 'User Stories' },
  { id: 'constitution', label: 'Constitution Generator', desc: 'Generate project principles', badge: '/speckit.constitution' },
];

export default function Playground() {
  const [activeGen, setActiveGen] = useState<GeneratorType>('spec');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const [specForm, setSpecForm] = useState<SpecForm>({ projectName: '', feature: '', users: '', goals: '' });
  const [planForm, setPlanForm] = useState<PlanForm>({ feature: '', techStack: '', constraints: '' });
  const [tasksForm, setTasksForm] = useState<TasksForm>({ feature: '', planSummary: '' });
  const [storyForm, setStoryForm] = useState<StoryForm>({ persona: '', goal: '', benefit: '' });
  const [constitutionForm, setConstitutionForm] = useState<ConstitutionForm>({ projectType: '', standards: '', architecture: '' });

  function generate() {
    let result = '';
    switch (activeGen) {
      case 'spec': result = generateSpec(specForm); break;
      case 'plan': result = generatePlan(planForm); break;
      case 'tasks': result = generateTasks(tasksForm); break;
      case 'story': result = generateStory(storyForm); break;
      case 'constitution': result = generateConstitution(constitutionForm); break;
    }
    setOutput(result);
  }

  function reset() {
    setOutput('');
    setSpecForm({ projectName: '', feature: '', users: '', goals: '' });
    setPlanForm({ feature: '', techStack: '', constraints: '' });
    setTasksForm({ feature: '', planSummary: '' });
    setStoryForm({ persona: '', goal: '', benefit: '' });
    setConstitutionForm({ projectType: '', standards: '', architecture: '' });
  }

  function copyOutput() {
    navigator.clipboard.writeText(output).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const inputClass = "w-full px-3 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20";
  const labelClass = "block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5";

  return (
    <div className="space-y-10">
      <div>
        <Badge variant="blue">Interactive</Badge>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-3 tracking-tight">
          Demo Playground
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 mt-4 max-w-3xl">
          Try Spec Kit's artifact generators interactively. Enter your project details to generate
          real Markdown artifacts — the same format produced by Spec Kit's slash commands.
        </p>
        <div className="mt-4 p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 text-sm text-blue-800 dark:text-blue-300">
          These generators simulate Spec Kit's output format. In real usage, your AI agent generates
          richer artifacts by reading your actual codebase and applying the installed templates.
        </div>
      </div>

      {/* Generator tabs */}
      <div className="flex flex-wrap gap-2">
        {GENERATORS.map(gen => (
          <button
            key={gen.id}
            onClick={() => { setActiveGen(gen.id); setOutput(''); }}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              activeGen === gen.id
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {gen.label}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Form */}
        <Card>
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-slate-900 dark:text-white">
              {GENERATORS.find(g => g.id === activeGen)?.label}
            </h2>
            <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 px-2 py-1 rounded">
              {GENERATORS.find(g => g.id === activeGen)?.badge}
            </code>
          </div>

          {activeGen === 'spec' && (
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Project Name</label>
                <input type="text" placeholder="e.g. My SaaS Dashboard" value={specForm.projectName}
                  onChange={e => setSpecForm(f => ({ ...f, projectName: e.target.value }))} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Feature to Build</label>
                <input type="text" placeholder="e.g. User notification center" value={specForm.feature}
                  onChange={e => setSpecForm(f => ({ ...f, feature: e.target.value }))} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Target Users</label>
                <input type="text" placeholder="e.g. authenticated dashboard users" value={specForm.users}
                  onChange={e => setSpecForm(f => ({ ...f, users: e.target.value }))} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Goals (one per line)</label>
                <textarea rows={3} placeholder="Reduce response time&#10;Improve visibility&#10;Enable self-service" value={specForm.goals}
                  onChange={e => setSpecForm(f => ({ ...f, goals: e.target.value }))} className={inputClass} />
              </div>
            </div>
          )}

          {activeGen === 'plan' && (
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Feature Name</label>
                <input type="text" placeholder="e.g. Notification Center" value={planForm.feature}
                  onChange={e => setPlanForm(f => ({ ...f, feature: e.target.value }))} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Tech Stack</label>
                <input type="text" placeholder="e.g. React 19, TypeScript 5, Tailwind CSS v4" value={planForm.techStack}
                  onChange={e => setPlanForm(f => ({ ...f, techStack: e.target.value }))} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Constraints (one per line)</label>
                <textarea rows={3} placeholder="No new dependencies&#10;Must work offline&#10;Follow existing patterns" value={planForm.constraints}
                  onChange={e => setPlanForm(f => ({ ...f, constraints: e.target.value }))} className={inputClass} />
              </div>
            </div>
          )}

          {activeGen === 'tasks' && (
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Feature Name</label>
                <input type="text" placeholder="e.g. User Profile Editor" value={tasksForm.feature}
                  onChange={e => setTasksForm(f => ({ ...f, feature: e.target.value }))} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Plan Summary (optional)</label>
                <textarea rows={3} placeholder="Brief description of what the plan covers" value={tasksForm.planSummary}
                  onChange={e => setTasksForm(f => ({ ...f, planSummary: e.target.value }))} className={inputClass} />
              </div>
            </div>
          )}

          {activeGen === 'story' && (
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Persona (role)</label>
                <input type="text" placeholder="e.g. product manager" value={storyForm.persona}
                  onChange={e => setStoryForm(f => ({ ...f, persona: e.target.value }))} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Goal</label>
                <input type="text" placeholder="e.g. create a weekly report with one click" value={storyForm.goal}
                  onChange={e => setStoryForm(f => ({ ...f, goal: e.target.value }))} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Benefit</label>
                <input type="text" placeholder="e.g. I save 2 hours every Friday" value={storyForm.benefit}
                  onChange={e => setStoryForm(f => ({ ...f, benefit: e.target.value }))} className={inputClass} />
              </div>
            </div>
          )}

          {activeGen === 'constitution' && (
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Project Type</label>
                <input type="text" placeholder="e.g. React TypeScript SaaS Application" value={constitutionForm.projectType}
                  onChange={e => setConstitutionForm(f => ({ ...f, projectType: e.target.value }))} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Coding Standards (one per line)</label>
                <textarea rows={3} placeholder="TypeScript strict mode&#10;No console.log in prod&#10;80% test coverage" value={constitutionForm.standards}
                  onChange={e => setConstitutionForm(f => ({ ...f, standards: e.target.value }))} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Architecture Principles (one per line)</label>
                <textarea rows={3} placeholder="Feature-based folder structure&#10;Dependency injection&#10;SOLID principles" value={constitutionForm.architecture}
                  onChange={e => setConstitutionForm(f => ({ ...f, architecture: e.target.value }))} className={inputClass} />
              </div>
            </div>
          )}

          <div className="flex gap-3 mt-6">
            <button
              onClick={generate}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors"
            >
              <Play size={15} /> Generate
            </button>
            <button
              onClick={reset}
              className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <RefreshCw size={15} />
            </button>
          </div>
        </Card>

        {/* Output */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-slate-900 dark:text-white">Generated Output</h3>
            {output && (
              <button
                onClick={copyOutput}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                {copied ? <><Check size={12} className="text-emerald-500" /> Copied!</> : <><Copy size={12} /> Copy</>}
              </button>
            )}
          </div>
          {output ? (
            <div className="rounded-xl bg-slate-900 border border-slate-700 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 border-b border-slate-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                </div>
                <span className="text-xs text-slate-400 font-mono">{GENERATORS.find(g => g.id === activeGen)?.badge}.md</span>
              </div>
              <pre className="p-5 text-sm text-slate-300 leading-relaxed overflow-auto max-h-[500px] whitespace-pre-wrap">
                {output}
              </pre>
            </div>
          ) : (
            <div className="rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700 h-64 flex flex-col items-center justify-center text-slate-400 gap-2">
              <Play size={24} className="text-slate-300 dark:text-slate-600" />
              <span className="text-sm">Fill in the form and click Generate</span>
              <span className="text-xs text-slate-300 dark:text-slate-600">Your Markdown artifact will appear here</span>
            </div>
          )}
        </div>
      </div>

      {/* About the playground */}
      <section>
        <SectionHeader title="About This Playground" />
        <div className="grid sm:grid-cols-2 gap-4">
          <Card>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">What this demonstrates</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              The Markdown structure that Spec Kit produces at each workflow phase. Real artifacts are richer —
              they're generated by your AI agent reading your codebase context and applying installed templates.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">Use the real thing</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Install Spec Kit and run the actual slash commands with your AI agent for production-quality artifacts
              tailored to your specific project and codebase.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
