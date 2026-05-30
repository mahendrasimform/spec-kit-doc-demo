import { ExternalLink, Heart } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">SK</span>
            </div>
            <span>Spec Kit Docs Portal</span>
            <span>·</span>
            <span>v0.8.18</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              Built with <Heart size={12} className="text-red-400" /> for SDD
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <a href="https://github.com/github/spec-kit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              <GithubIcon size={13} /> GitHub
            </a>
            <a href="https://github.github.io/spec-kit/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              <ExternalLink size={13} /> Official Docs
            </a>
            <a href="https://github.com/github/spec-kit/releases/tag/v0.8.18" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Releases
            </a>
            <a href="https://github.com/github/spec-kit/issues" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Issues
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-slate-400 dark:text-slate-600">
          Spec Kit is open source under the MIT license · github.com/github/spec-kit · 107K+ stars
        </div>
      </div>
    </footer>
  );
}
