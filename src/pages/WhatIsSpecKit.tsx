import { ExternalLink, Star, GitFork, Users, Puzzle } from 'lucide-react';
import { GithubIcon as Github } from '../components/ui/Icons';
import { SPEC_KIT_CONFIG } from '../spec-kit';
import { Card, SectionHeader, Badge } from '../components/ui/Cards';
import { CodeBlock } from '../components/ui/CodeBlock';

export default function WhatIsSpecKit() {
  return (
    <div className="space-y-12">
      <div>
        <Badge variant="success">Official GitHub Project</Badge>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-3 tracking-tight">
          What is Spec Kit?
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 mt-4 max-w-3xl">
          GitHub's open-source toolkit for Spec-Driven Development (SDD) — a methodology that puts
          specifications at the center of AI-assisted software development.
        </p>
      </div>

      {/* Stats bar */}
      <div className="flex flex-wrap gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
        {[
          { icon: <Star size={15} className="text-amber-500" />, value: SPEC_KIT_CONFIG.stats.stars, label: 'Stars' },
          { icon: <GitFork size={15} className="text-blue-500" />, value: SPEC_KIT_CONFIG.stats.forks, label: 'Forks' },
          { icon: <Users size={15} className="text-violet-500" />, value: SPEC_KIT_CONFIG.stats.contributors, label: 'Contributors' },
          { icon: <Puzzle size={15} className="text-emerald-500" />, value: `${SPEC_KIT_CONFIG.stats.extensions}`, label: 'Extensions' },
        ].map((s, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            {s.icon}
            <span className="font-bold text-slate-900 dark:text-white">{s.value}</span>
            <span className="text-slate-500">{s.label}</span>
          </div>
        ))}
        <a
          href={SPEC_KIT_CONFIG.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
        >
          <Github size={13} /> github/spec-kit <ExternalLink size={11} />
        </a>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Core Philosophy</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            Spec-Driven Development flips the script on traditional software development. For decades, code has
            been king — specifications were scaffolding we built and discarded once the "real work" of coding began.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            <strong className="text-slate-900 dark:text-white">Spec Kit changes this:</strong> specifications become
            executable, directly generating working implementations rather than just guiding them. Instead of jumping
            straight to code, you describe what to build, refine it through structured phases, and let your AI
            coding agent implement it.
          </p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50 dark:bg-emerald-950/30 rounded-r-xl">
            <p className="text-slate-700 dark:text-slate-300 italic">
              "Build high-quality software faster by focusing on product scenarios and predictable outcomes
              instead of vibe coding every piece from scratch."
            </p>
            <cite className="text-xs text-slate-500 mt-1 block">— github/spec-kit README</cite>
          </blockquote>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Why It Exists</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Card>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-sm">Problem: Vibe Coding</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                AI tools make it easy to generate code from one-shot prompts. But this leads to inconsistent
                quality, missed requirements, technical debt, and unpredictable outcomes.
              </p>
            </Card>
            <Card>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-sm">Solution: Structured SDD</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Spec Kit enforces a multi-step process that produces structured artifacts at each phase, giving
                AI agents rich, consistent context instead of ad-hoc prompts.
              </p>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Problems It Solves</h2>
          <div className="space-y-3">
            {[
              ['Ambiguous Requirements', 'The /speckit.clarify command surfaces missing details before planning begins — when fixes cost nothing.'],
              ['Inconsistent Implementation', 'The constitution command establishes project principles that all agents follow consistently.'],
              ['Lost Intent', 'Specs are Markdown files in Git. The "why" behind every feature is preserved, readable by future maintainers.'],
              ['Specification Drift', 'The /speckit.analyze command verifies cross-artifact consistency — spec, plan, and tasks must align.'],
              ['Agent Lock-in', 'Spec Kit is agent-agnostic. The same artifacts work with Copilot, Claude, Gemini, Cursor, and 27 more agents.'],
              ['Team Alignment', 'Specs are reviewable via pull requests. Non-technical stakeholders understand what is being built before coding starts.'],
            ].map(([title, desc], i) => (
              <div key={i} className="flex gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="shrink-0 w-1.5 rounded-full bg-emerald-500 self-stretch" />
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white text-sm">{title}: </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Use Cases</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: '0-to-1 Greenfield', desc: 'Start completely fresh. Generate an entire application from high-level requirements.', color: 'border-emerald-200 dark:border-emerald-800' },
              { title: 'Feature Development', desc: 'Add features to existing codebases with specifications that match current architecture.', color: 'border-blue-200 dark:border-blue-800' },
              { title: 'Legacy Modernization', desc: 'Incrementally modernize legacy systems with structured, step-by-step migration plans.', color: 'border-violet-200 dark:border-violet-800' },
              { title: 'Enterprise Projects', desc: 'Apply organizational standards, compliance requirements, and quality gates via presets.', color: 'border-amber-200 dark:border-amber-800' },
              { title: 'Team Collaboration', desc: 'Coordinate multiple developers and AI agents with shared specifications and task tracking.', color: 'border-pink-200 dark:border-pink-800' },
              { title: 'Prototyping', desc: 'Rapidly explore multiple implementations of the same spec to compare approaches.', color: 'border-teal-200 dark:border-teal-800' },
            ].map((uc, i) => (
              <div key={i} className={`p-4 rounded-xl border-2 ${uc.color} bg-white dark:bg-slate-900`}>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{uc.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{uc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The SDD Artifact Chain</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
            Each phase produces a Markdown artifact stored in <code className="text-emerald-600 dark:text-emerald-400 font-mono text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">.specify/</code>.
            These files feed the next step, giving AI agents structured context instead of one-shot prompts.
          </p>
          <div className="space-y-2">
            {[
              { file: '.specify/memory/constitution.md', from: '/speckit.constitution', desc: 'Project principles, architecture decisions, coding standards' },
              { file: '.specify/specs/<feature>.md', from: '/speckit.specify', desc: 'Requirements, user stories, acceptance criteria' },
              { file: '.specify/plans/<feature>.md', from: '/speckit.plan', desc: 'Technical design, component architecture, data models' },
              { file: '.specify/tasks/<feature>.md', from: '/speckit.tasks', desc: 'Ordered, atomic task list for implementation' },
            ].map((artifact, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <code className="text-xs font-mono text-emerald-600 dark:text-emerald-400 shrink-0 bg-white dark:bg-slate-800 px-2 py-1 rounded border border-slate-200 dark:border-slate-700">
                  {artifact.file}
                </code>
                <div>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Created by </span>
                  <code className="text-xs font-mono text-violet-600 dark:text-violet-400">{artifact.from}</code>
                  <p className="text-xs text-slate-500 mt-0.5">{artifact.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="Quick Start" />
          <CodeBlock
            code={`# 1. Install specify-cli
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git@v0.8.18

# 2. Initialize a project
specify init my-project --integration copilot

# 3. Use slash commands in your AI coding agent
/speckit.constitution  # Set project principles
/speckit.specify       # Describe what to build
/speckit.plan          # Technical implementation plan
/speckit.tasks         # Atomic task breakdown
/speckit.implement     # Build the feature`}
            language="bash"
            title="Quick Start"
          />
        </section>
      </div>
    </div>
  );
}
