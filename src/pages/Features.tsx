import {
  FileText, Target, Bot, Puzzle, Users, Shield, CheckSquare, Zap
} from 'lucide-react';
import { SPEC_KIT_FEATURES } from '../spec-kit';
import { SectionHeader, Badge, Card } from '../components/ui/Cards';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  FileText, Target, Bot, Puzzle, Users, Shield, CheckSquare, Zap,
};

export default function Features() {
  return (
    <div className="space-y-12">
      <div>
        <Badge variant="success">Features</Badge>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-3 tracking-tight">
          Spec Kit Features
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 mt-4 max-w-3xl">
          Everything you need for structured, AI-assisted, spec-driven software development.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {SPEC_KIT_FEATURES.map((feature, i) => {
          const Icon = ICON_MAP[feature.icon];
          return (
            <Card key={i} hover>
              <div className="flex items-start gap-4 mb-4">
                {Icon && (
                  <div className={`p-3 rounded-xl shrink-0 ${
                    i % 4 === 0 ? 'bg-emerald-50 dark:bg-emerald-950/50' :
                    i % 4 === 1 ? 'bg-blue-50 dark:bg-blue-950/50' :
                    i % 4 === 2 ? 'bg-violet-50 dark:bg-violet-950/50' :
                    'bg-amber-50 dark:bg-amber-950/50'
                  }`}>
                    <Icon size={22} className={
                      i % 4 === 0 ? 'text-emerald-600 dark:text-emerald-400' :
                      i % 4 === 1 ? 'text-blue-600 dark:text-blue-400' :
                      i % 4 === 2 ? 'text-violet-600 dark:text-violet-400' :
                      'text-amber-600 dark:text-amber-400'
                    } />
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{feature.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{feature.description}</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Key Benefits</p>
                <ul className="space-y-1">
                  {feature.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Comparison */}
      <section>
        <SectionHeader title="Vibe Coding vs Spec-Driven Development" subtitle="What changes when you adopt SDD with Spec Kit." />
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="grid grid-cols-2 divide-x divide-slate-200 dark:divide-slate-700">
            <div className="p-5 bg-red-50 dark:bg-red-950/20">
              <h3 className="font-bold text-red-700 dark:text-red-400 mb-3 text-sm">❌ Without Spec Kit</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                {['Ad-hoc prompts to AI', 'Unpredictable code quality', 'Requirements lost in chat history', 'No team alignment', 'Repeated rework cycles', 'Technical debt accumulates', 'Agent lock-in risk'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="shrink-0 mt-0.5 text-red-400">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20">
              <h3 className="font-bold text-emerald-700 dark:text-emerald-400 mb-3 text-sm">✓ With Spec Kit</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                {['Structured, multi-step workflow', 'Consistent quality artifacts', 'Requirements in Git', 'PR-reviewable specifications', 'Aligned spec/plan/tasks', 'Intentional, documented decisions', 'Agent-agnostic (30+ agents)'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="shrink-0 mt-0.5 text-emerald-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
