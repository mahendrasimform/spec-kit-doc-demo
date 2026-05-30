import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: string;
}

export function Accordion({ items, defaultOpen }: AccordionProps) {
  const [open, setOpen] = useState<string | null>(defaultOpen || null);

  return (
    <div className="divide-y divide-slate-200 dark:divide-slate-700 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      {items.map((item) => (
        <div key={item.id} className="bg-white dark:bg-slate-900">
          <button
            onClick={() => setOpen(open === item.id ? null : item.id)}
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            aria-expanded={open === item.id}
          >
            <div className="flex items-start gap-3">
              {item.category && (
                <span className="shrink-0 mt-0.5 px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                  {item.category}
                </span>
              )}
              <span className="font-medium text-slate-900 dark:text-white text-sm">{item.question}</span>
            </div>
            <span className="shrink-0 text-slate-400">
              {open === item.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </span>
          </button>
          {open === item.id && (
            <div className="px-5 pb-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-800/50">
              <div className="pt-2 border-t border-slate-200 dark:border-slate-700 mt-1">{item.answer}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
