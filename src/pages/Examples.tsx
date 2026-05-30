import { useState } from 'react';
import { EXAMPLES } from '../spec-kit';
import { CodeBlock } from '../components/ui/CodeBlock';
import { Badge, SectionHeader } from '../components/ui/Cards';

export default function Examples() {
  const [active, setActive] = useState(EXAMPLES[0].id);
  const example = EXAMPLES.find(e => e.id === active) || EXAMPLES[0];

  return (
    <div className="space-y-10">
      <div>
        <Badge variant="blue">Learn</Badge>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-3 tracking-tight">
          Examples
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 mt-4 max-w-3xl">
          Real-world Spec Kit workflows for different tech stacks and scenarios.
        </p>
      </div>

      {/* Tab navigation */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-700 pb-2">
        {EXAMPLES.map(ex => (
          <button
            key={ex.id}
            onClick={() => setActive(ex.id)}
            className={`px-4 py-2 rounded-t-lg text-sm font-medium transition-colors ${
              active === ex.id
                ? 'bg-emerald-600 text-white'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {ex.title}
          </button>
        ))}
      </div>

      {/* Active example */}
      <div className="space-y-6">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{example.title}</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">{example.description}</p>
          </div>
          <Badge variant="default">{example.stack}</Badge>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
          <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Tech Stack</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">{example.stack}</p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Complete Workflow</h3>
          <CodeBlock
            code={example.code}
            language="bash"
            title={example.title}
            id={example.id}
          />
        </div>

        {example.output && (
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800">
            <h3 className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-1">Expected Output</h3>
            <p className="text-sm text-emerald-800 dark:text-emerald-300">{example.output}</p>
          </div>
        )}

        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Explanation</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{example.explanation}</p>
        </div>
      </div>

      {/* All examples overview */}
      <section>
        <SectionHeader title="All Examples" />
        <div className="grid sm:grid-cols-2 gap-4">
          {EXAMPLES.map(ex => (
            <button
              key={ex.id}
              onClick={() => setActive(ex.id)}
              className={`p-4 rounded-xl border-2 text-left transition-all hover:shadow-sm ${
                active === ex.id
                  ? 'border-emerald-400 dark:border-emerald-600 bg-emerald-50 dark:bg-emerald-950/20'
                  : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            >
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">{ex.title}</h3>
              <p className="text-xs text-slate-500 mt-1">{ex.description}</p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-mono mt-2">{ex.stack}</p>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
