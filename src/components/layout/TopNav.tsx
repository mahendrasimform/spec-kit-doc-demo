import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Search, Sun, Moon, X, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { useTheme } from '../../context/ThemeContext';
import { useSidebar } from '../../context/SidebarContext';
import { useSearch } from '../../hooks/useSearch';

export function TopNav() {
  const { isDark, toggle } = useTheme();
  const { toggle: toggleSidebar } = useSidebar();
  const { query, setQuery, isOpen, setIsOpen, results } = useSearch();
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const searchResults = results();
  const [dropdownStyle, setDropdownStyle] = useState<{ top: number; left: number; width: number }>({ top: 0, left: 0, width: 0 });

  // Recalculate dropdown position whenever the search input moves
  useEffect(() => {
    function updatePosition() {
      if (inputRef.current) {
        const rect = inputRef.current.closest('[data-search-container]')?.getBoundingClientRect();
        if (rect) {
          setDropdownStyle({ top: rect.bottom + 8, left: rect.left, width: rect.width });
        }
      }
    }
    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [isOpen]);

  // Close search on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [setIsOpen]);

  // Keyboard shortcut: Ctrl+K / Cmd+K
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
      if (e.key === 'Escape') setIsOpen(false);
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [setIsOpen]);

  return (
    <header className="sticky top-0 z-30 h-16 bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 flex items-center px-4 gap-4">
      {/* Mobile menu */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>

      {/* Logo */}
      <Link to="/" className="hidden sm:flex items-center gap-2.5 shrink-0">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-sm">
          <span className="text-white font-bold text-sm">SK</span>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-bold text-slate-900 dark:text-white text-sm tracking-tight">Spec Kit</span>
          <span className="text-[10px] text-slate-400 font-medium">v0.8.18 · Docs Portal</span>
        </div>
      </Link>

      {/* Search */}
      <div ref={searchRef} data-search-container className="flex-1 max-w-xl relative">
        <div className="relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search docs... (Ctrl+K)"
            value={query}
            onChange={e => { setQuery(e.target.value); setIsOpen(true); }}
            onFocus={() => {
              const rect = searchRef.current?.getBoundingClientRect();
              if (rect) setDropdownStyle({ top: rect.bottom + 8, left: rect.left, width: rect.width });
              setIsOpen(true);
            }}
            className="w-full pl-9 pr-4 py-2 text-sm bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 rounded-xl border border-transparent focus:border-emerald-400 dark:focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all"
          />
          {query && (
            <button
              onClick={() => { setQuery(''); setIsOpen(false); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Search dropdown — rendered via portal on document.body to escape the sticky header's stacking context */}
        {isOpen && searchResults.length > 0 && createPortal(
          <div
            className="fixed bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden z-[9999]"
            style={{ top: dropdownStyle.top, left: dropdownStyle.left, width: dropdownStyle.width }}
          >
            {searchResults.map((result, i) => (
              <button
                key={i}
                className="w-full flex items-start gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-left border-b border-slate-100 dark:border-slate-800 last:border-0"
                onClick={() => { navigate(result.path); setQuery(''); setIsOpen(false); }}
              >
                <span className="shrink-0 mt-0.5 px-1.5 py-0.5 text-[10px] font-bold rounded bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400">
                  {result.type}
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-medium text-slate-900 dark:text-white truncate">{result.title}</div>
                  <div className="text-xs text-slate-500 truncate mt-0.5">{result.excerpt}</div>
                </div>
              </button>
            ))}
          </div>,
          document.body
        )}
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2 shrink-0">
        <a
          href="https://github.com/github/spec-kit"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 rounded-lg hover:border-slate-300 dark:hover:border-slate-600 transition-all"
        >
          <GithubIcon size={13} />
          <span className="hidden md:inline">GitHub</span>
        </a>
        <a
          href="https://github.github.io/spec-kit/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
        >
          <ExternalLink size={13} />
          <span>Official Docs</span>
        </a>
        <button
          onClick={toggle}
          className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDark ? 'Light mode' : 'Dark mode'}
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
}
