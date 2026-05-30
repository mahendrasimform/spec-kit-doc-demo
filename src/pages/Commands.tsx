import { useState } from 'react';
import { Search } from 'lucide-react';
import { CORE_COMMANDS, OPTIONAL_COMMANDS, MANAGEMENT_COMMANDS } from '../spec-kit';
import { CodeBlock } from '../components/ui/CodeBlock';
import { Badge, SectionHeader } from '../components/ui/Cards';
import type { Command } from '../types';

function CommandRow({ cmd }: { cmd: Command }) {
  const [expanded, setExpanded] = useState(false);
  const badgeVariant = cmd.type === 'core' ? 'success' : cmd.type === 'optional' ? 'amber' : 'default';
  const typeLabel = cmd.type === 'core' ? 'Core' : cmd.type === 'optional' ? 'Optional' : 'CLI';

  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden mb-3">
      <button
        className="w-full flex items-start gap-3 p-4 hover:bg-slate-50 dark:hover:bg-slate-800 text-left transition-colors"
        onClick={() => setExpanded(e => !e)}
      >
        <Badge variant={badgeVariant}>{typeLabel}</Badge>
        <div className="flex-1 min-w-0">
          <code className="text-sm font-mono font-bold text-emerald-600 dark:text-emerald-400 block break-all">
            {cmd.command}
          </code>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{cmd.description}</p>
        </div>
        <span className="text-slate-400 shrink-0 text-xs">{expanded ? '▲' : '▼'}</span>
      </button>
      {expanded && (
        <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 px-4 pb-4 pt-3 space-y-4">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Full Description</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">{cmd.description}</p>
          </div>
          {cmd.parameters && (
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Parameters</p>
              <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-1 rounded">
                {cmd.parameters}
              </code>
            </div>
          )}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Example</p>
            <CodeBlock code={cmd.example} language="bash" id={cmd.command} />
          </div>
          {cmd.output && (
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Output</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">{cmd.output}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Commands() {
  const [filter, setFilter] = useState('');
  const q = filter.toLowerCase();

  const filterCmds = (cmds: Command[]) =>
    cmds.filter(c =>
      c.command.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      (c.parameters || '').toLowerCase().includes(q)
    );

  const filteredCore = filterCmds(CORE_COMMANDS);
  const filteredOptional = filterCmds(OPTIONAL_COMMANDS);
  const filteredManagement = filterCmds(MANAGEMENT_COMMANDS);

  return (
    <div className="space-y-12">
      <div>
        <Badge variant="default">Reference</Badge>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-3 tracking-tight">
          Commands Reference
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 mt-4 max-w-3xl">
          All Spec Kit slash commands and CLI commands with parameters, examples, and output descriptions.
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search commands..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
        />
      </div>

      {/* Core commands */}
      {filteredCore.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-5">
            <SectionHeader title="Core Commands" />
            <Badge variant="success">Essential</Badge>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 -mt-8">
            The 6 commands that form the complete SDD workflow. Use these in your AI coding agent after <code className="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-emerald-600 dark:text-emerald-400">specify init</code>.
          </p>
          {filteredCore.map(cmd => <CommandRow key={cmd.command} cmd={cmd} />)}
        </section>
      )}

      {/* Optional commands */}
      {filteredOptional.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-5">
            <SectionHeader title="Optional Enhancement Commands" />
            <Badge variant="amber">Optional</Badge>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 -mt-8">
            Use these to improve quality and confidence before implementing.
          </p>
          {filteredOptional.map(cmd => <CommandRow key={cmd.command} cmd={cmd} />)}
        </section>
      )}

      {/* CLI management */}
      {filteredManagement.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-5">
            <SectionHeader title="CLI Management Commands" />
            <Badge variant="default">CLI</Badge>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 -mt-8">
            Run these in your terminal to manage your Spec Kit installation and projects.
          </p>
          {filteredManagement.map(cmd => <CommandRow key={cmd.command} cmd={cmd} />)}
        </section>
      )}

      {filteredCore.length === 0 && filteredOptional.length === 0 && filteredManagement.length === 0 && (
        <div className="text-center py-12 text-slate-400">
          No commands match "{filter}"
        </div>
      )}
    </div>
  );
}
