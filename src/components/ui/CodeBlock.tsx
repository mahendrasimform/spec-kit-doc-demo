import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { useCopyCode } from '../../hooks/useCopyCode';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  id?: string;
}

export function CodeBlock({ code, language = 'bash', title, id }: CodeBlockProps) {
  const blockId = id || Math.random().toString(36).slice(2);
  const { copiedId, copy } = useCopyCode();
  const isCopied = copiedId === blockId;

  return (
    <div className="relative rounded-xl overflow-hidden my-4 border border-slate-800">
      {title && (
        <div className="flex items-center justify-between bg-slate-800 px-4 py-2.5 border-b border-slate-700">
          <span className="text-xs font-medium text-slate-300 font-mono">{title}</span>
          <span className="text-xs text-slate-500 bg-slate-700 px-2 py-0.5 rounded">{language}</span>
        </div>
      )}
      <div className="bg-slate-900 relative">
        <button
          onClick={() => copy(code.trim(), blockId)}
          className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white transition-all duration-150"
          title="Copy to clipboard"
          aria-label="Copy code"
        >
          {isCopied ? (
            <><Check size={12} className="text-emerald-400" /><span className="text-emerald-400">Copied!</span></>
          ) : (
            <><Copy size={12} /><span>Copy</span></>
          )}
        </button>
        <pre className="p-5 overflow-x-auto text-sm leading-relaxed m-0">
          <code className={`language-${language} text-slate-200`}>{code.trim()}</code>
        </pre>
      </div>
    </div>
  );
}

interface InlineCodeProps {
  children: string;
}

export function InlineCode({ children }: InlineCodeProps) {
  return (
    <code className="px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 text-sm font-mono border border-slate-200 dark:border-slate-700">
      {children}
    </code>
  );
}

interface CommandDisplayProps {
  command: string;
  description?: string;
}

export function CommandDisplay({ command, description }: CommandDisplayProps) {
  const { copiedId, copy } = useCopyCode();
  const isCopied = copiedId === command;

  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900 border border-slate-700 group">
      <div className="flex-1 min-w-0">
        <div className="font-mono text-sm text-emerald-400 break-all">{command}</div>
        {description && <div className="text-xs text-slate-400 mt-1">{description}</div>}
      </div>
      <button
        onClick={() => copy(command, command)}
        className="shrink-0 p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-slate-700 transition-colors"
        title="Copy command"
      >
        {isCopied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
      </button>
    </div>
  );
}

// Simple inline copy button
export function CopyButton({ text, id }: { text: string; id: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
      aria-label={`Copy ${id}`}
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
    </button>
  );
}
