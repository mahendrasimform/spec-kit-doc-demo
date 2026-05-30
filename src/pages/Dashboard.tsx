import { Link } from 'react-router-dom';
import {
  ArrowRight, Star, GitFork, Users, Puzzle, Layers, Zap,
  Target, Bot, Shield, CheckSquare, FileText, Rocket,
  Map, GitBranch, RefreshCw, LayoutTemplate, Wrench,
  Terminal, ChevronDown, ExternalLink
} from 'lucide-react';
import { SPEC_KIT_CONFIG, SPEC_KIT_FEATURES, SPEC_KIT_BENEFITS } from '../spec-kit';
import { CodeBlock } from '../components/ui/CodeBlock';
import { Card, SectionHeader, StatCard, Badge } from '../components/ui/Cards';
import { Accordion } from '../components/ui/Accordion';
import { FAQS } from '../spec-kit';

const FEATURE_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  FileText, Target, Bot, Puzzle, Users, Shield, CheckSquare, Zap,
};

const BENEFIT_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Rocket, Map, GitBranch, RefreshCw, LayoutTemplate, Wrench,
};

const WORKFLOW_STEPS = [
  { step: 'Idea', icon: '💡', desc: 'Raw concept or problem to solve' },
  { step: 'Constitution', icon: '📋', desc: '/speckit.constitution', cmd: true },
  { step: 'Specification', icon: '📄', desc: '/speckit.specify', cmd: true },
  { step: 'Clarification', icon: '🔍', desc: '/speckit.clarify (optional)', cmd: true },
  { step: 'Plan', icon: '🗺️', desc: '/speckit.plan', cmd: true },
  { step: 'Tasks', icon: '✅', desc: '/speckit.tasks', cmd: true },
  { step: 'Implementation', icon: '⚡', desc: '/speckit.implement', cmd: true },
  { step: 'Deployment', icon: '🚀', desc: 'Production-ready software' },
];

export default function Dashboard() {
  const topFaqs = FAQS.slice(0, 5);

  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="relative pt-6 pb-12">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-emerald-400/10 dark:bg-emerald-600/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-teal-400/10 dark:bg-teal-600/10 blur-3xl" />
        </div>

        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-2">
            <Badge variant="success">v0.8.18 · Latest</Badge>
            <Badge variant="blue">MIT License</Badge>
            <Badge variant="default">107K+ Stars</Badge>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Spec Kit<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
              Documentation
            </span>{' '}
            Portal
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            Complete guide to GitHub's Spec-Driven Development toolkit — installation, integration,
            architecture, workflows, and examples. Build high-quality software faster.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link to="/installation" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors shadow-sm">
              <Rocket size={16} /> Get Started
            </Link>
            <Link to="/installation" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 dark:border-emerald-500 font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-colors">
              <Terminal size={16} /> Install Spec Kit
            </Link>
            <Link to="/what-is-spec-kit" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              View Documentation
            </Link>
            <a
              href="https://github.com/github/spec-kit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <ExternalLink size={16} /> View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { value: SPEC_KIT_CONFIG.stats.stars, label: 'GitHub Stars', icon: <Star size={20} />, color: 'amber' as const },
            { value: SPEC_KIT_CONFIG.stats.forks, label: 'Forks', icon: <GitFork size={20} />, color: 'blue' as const },
            { value: SPEC_KIT_CONFIG.stats.contributors, label: 'Contributors', icon: <Users size={20} />, color: 'violet' as const },
            { value: `${SPEC_KIT_CONFIG.stats.integrations}+`, label: 'AI Agents', icon: <Bot size={20} />, color: 'emerald' as const },
            { value: `${SPEC_KIT_CONFIG.stats.extensions}`, label: 'Extensions', icon: <Puzzle size={20} />, color: 'emerald' as const },
            { value: `${SPEC_KIT_CONFIG.stats.presets}`, label: 'Presets', icon: <Layers size={20} />, color: 'blue' as const },
          ].map((s, i) => (
            <StatCard key={i} value={s.value} label={s.label} icon={s.icon} color={s.color} />
          ))}
        </div>
      </section>

      {/* Overview */}
      <section>
        <SectionHeader
          title="What is Spec Kit?"
          subtitle="GitHub's open-source toolkit for Spec-Driven Development — where specifications become executable, directly generating working implementations."
          badge="Official GitHub Project"
        />
        <div className="grid sm:grid-cols-2 gap-6">
          <Card hover>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Target size={18} className="text-emerald-500" /> The Core Idea
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Spec-Driven Development flips the script: specifications become executable, directly generating
              working implementations rather than just guiding them. Define <em>what</em> to build before <em>how</em> to build it.
            </p>
          </Card>
          <Card hover>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Bot size={18} className="text-blue-500" /> Works With Any AI Agent
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              30+ integrations — GitHub Copilot, Claude Code, Gemini CLI, Cursor, Windsurf, Kiro, and more.
              Switch agents freely. No lock-in. One unified methodology.
            </p>
          </Card>
          <Card hover>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Puzzle size={18} className="text-violet-500" /> Extensible Ecosystem
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              105 community extensions, 22 presets, and growing. Add Jira integration, V-Model traceability,
              architecture governance, CI compliance gates, and custom SDD processes.
            </p>
          </Card>
          <Card hover>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Shield size={18} className="text-amber-500" /> Enterprise Ready
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Air-gapped installation, private extension catalogs, compliance presets. Works offline, behind
              firewalls, on Windows, macOS, and Linux. Python-based, no cloud dependency.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Installation */}
      <section>
        <SectionHeader
          title="Quick Installation"
          subtitle="Install specify-cli and initialize your first Spec Kit project in minutes."
          badge="Get Started"
        />
        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">1. Install specify-cli (requires uv)</p>
            <CodeBlock
              code={SPEC_KIT_CONFIG.installCommand}
              language="bash"
              title="Install Spec Kit"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">2. Verify installation</p>
            <CodeBlock code="specify version" language="bash" title="Verify" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">3. Initialize a project</p>
            <CodeBlock code={SPEC_KIT_CONFIG.initCommand} language="bash" title="Initialize" />
          </div>
          <div className="flex gap-3 mt-4">
            <Link to="/installation" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:gap-3 transition-all">
              Full Installation Guide <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section>
        <SectionHeader
          title="SDD Workflow"
          subtitle="A structured, multi-step process that catches issues before code is written. Each step produces a Markdown artifact that feeds the next."
          badge="Spec → Plan → Tasks → Implement"
        />
        <div className="relative">
          <div className="space-y-3">
            {WORKFLOW_STEPS.map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shrink-0 ${
                    step.cmd
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}>
                    {step.icon}
                  </div>
                  {i < WORKFLOW_STEPS.length - 1 && (
                    <div className="w-0.5 h-4 bg-slate-200 dark:bg-slate-700 mt-1" />
                  )}
                </div>
                <div className="flex-1 pb-3">
                  <span className="font-semibold text-slate-900 dark:text-white">{step.step}</span>
                  {step.cmd && (
                    <code className="ml-2 text-xs bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-md font-mono">
                      {step.desc}
                    </code>
                  )}
                  {!step.cmd && (
                    <span className="ml-2 text-sm text-slate-500">{step.desc}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link to="/workflows" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:gap-3 transition-all">
              Explore all workflows <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section>
        <SectionHeader
          title="Key Features"
          subtitle="Everything you need for structured, AI-assisted development."
          badge="Features"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SPEC_KIT_FEATURES.slice(0, 6).map((feature, i) => {
            const Icon = FEATURE_ICONS[feature.icon];
            return (
              <Card key={i} hover>
                <div className="flex items-center gap-3 mb-3">
                  {Icon && (
                    <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50">
                      <Icon size={18} className="text-emerald-600 dark:text-emerald-400" />
                    </div>
                  )}
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">{feature.title}</h3>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>
        <div className="mt-6">
          <Link to="/features" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:gap-3 transition-all">
            View all features <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section>
        <SectionHeader
          title="Benefits"
          subtitle="Why teams adopt Spec-Driven Development with Spec Kit."
          badge="Why Spec Kit"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SPEC_KIT_BENEFITS.map((benefit, i) => {
            const Icon = BENEFIT_ICONS[benefit.icon];
            return (
              <div key={i} className="flex gap-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors bg-white dark:bg-slate-900">
                {Icon && (
                  <div className="shrink-0 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 h-fit">
                    <Icon size={18} className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">{benefit.title}</h3>
                    <Badge variant="success">{benefit.stat}</Badge>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Architecture preview */}
      <section>
        <SectionHeader title="Architecture Overview" badge="System Design" />
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-8">
          <div className="flex flex-col items-center gap-2 max-w-sm mx-auto">
            {[
              { label: 'Developer / Team', bg: 'bg-blue-100 dark:bg-blue-950 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300' },
              { label: 'AI Coding Agent', bg: 'bg-purple-100 dark:bg-purple-950 border-purple-200 dark:border-purple-800 text-purple-800 dark:text-purple-300' },
              { label: 'Spec Kit (specify-cli)', bg: 'bg-emerald-100 dark:bg-emerald-950 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-bold' },
              { label: 'Specification Engine', bg: 'bg-teal-100 dark:bg-teal-950 border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300' },
              { label: 'Planning Engine', bg: 'bg-teal-100 dark:bg-teal-950 border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300' },
              { label: 'Implementation Engine', bg: 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-300' },
            ].map((layer, i, arr) => (
              <div key={i} className="w-full flex flex-col items-center">
                <div className={`w-full text-center py-3 px-6 rounded-xl border ${layer.bg} text-sm font-semibold`}>
                  {layer.label}
                </div>
                {i < arr.length - 1 && (
                  <ChevronDown size={16} className="text-slate-400 dark:text-slate-600 my-1" />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <Link to="/architecture" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:gap-3 transition-all">
            Explore full architecture <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* FAQ Preview */}
      <section>
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions about Spec Kit."
          badge="FAQ"
        />
        <Accordion items={topFaqs} defaultOpen={topFaqs[0]?.id} />
        <div className="mt-6">
          <Link to="/faq" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:gap-3 transition-all">
            View all {FAQS.length} FAQs <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
