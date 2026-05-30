import { useState } from 'react';
import { FAQS } from '../spec-kit';
import { Badge } from '../components/ui/Cards';
import { Accordion } from '../components/ui/Accordion';

const CATEGORIES = ['All', ...Array.from(new Set(FAQS.map(f => f.category)))];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? FAQS : FAQS.filter(f => f.category === activeCategory);

  return (
    <div className="space-y-10">
      <div>
        <Badge variant="default">Support</Badge>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-3 tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 mt-4 max-w-3xl">
          {FAQS.length} questions about Spec Kit installation, configuration, commands, and best practices.
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {cat}
            <span className="ml-1.5 text-xs opacity-70">
              ({cat === 'All' ? FAQS.length : FAQS.filter(f => f.category === cat).length})
            </span>
          </button>
        ))}
      </div>

      <Accordion items={filtered} />
    </div>
  );
}
