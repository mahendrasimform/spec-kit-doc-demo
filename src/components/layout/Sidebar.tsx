import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, HelpCircle, Download, Plug, Network, Sparkles,
  Terminal, GitBranch, Code2, Play, Award, AlertTriangle,
  MessageCircle, ExternalLink, Info, Rocket, BookOpen,
  GraduationCap, LifeBuoy, ChevronDown, ChevronRight, X
} from 'lucide-react';
import { NAV_ITEMS } from '../../navigation/nav-items';
import type { NavItem } from '../../types';
import { useSidebar } from '../../context/SidebarContext';

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  LayoutDashboard, HelpCircle, Download, Plug, Network, Sparkles,
  Terminal, GitBranch, Code2, Play, Award, AlertTriangle,
  MessageCircle, ExternalLink, Info, Rocket, BookOpen,
  GraduationCap, LifeBuoy,
};

function NavItemEl({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const location = useLocation();
  const { setIsOpen } = useSidebar();
  const [expanded, setExpanded] = useState(() =>
    item.children?.some(c => c.path === location.pathname ||
      c.children?.some(cc => cc.path === location.pathname)
    ) ?? true
  );

  const Icon = item.icon ? ICONS[item.icon] : null;
  const isActive = item.path === location.pathname;
  const hasChildren = item.children && item.children.length > 0;

  if (hasChildren) {
    return (
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
            depth === 0 ? 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          {Icon && <Icon size={14} />}
          <span className="flex-1 text-left">{item.label}</span>
          {expanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
        </button>
        {expanded && (
          <div className={`mt-0.5 space-y-0.5 ${depth > 0 ? 'ml-4 pl-3 border-l border-slate-200 dark:border-slate-700' : ''}`}>
            {item.children!.map(child => (
              <NavItemEl key={child.id} item={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={item.path}
      onClick={() => setIsOpen(false)}
      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
        isActive
          ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400'
          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100'
      }`}
    >
      {Icon && <Icon size={15} />}
      <span className="flex-1">{item.label}</span>
      {item.badge && (
        <span className={`px-1.5 py-0.5 text-[10px] font-bold rounded-full ${
          item.badge === 'Interactive' ? 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400' : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400'
        }`}>
          {item.badge}
        </span>
      )}
    </Link>
  );
}

export function Sidebar() {
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 bottom-0 z-40 w-[280px] bg-white dark:bg-slate-950
        border-r border-slate-200 dark:border-slate-800
        flex flex-col overflow-hidden
        transition-transform duration-250 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:sticky lg:top-[64px] lg:h-[calc(100vh-64px)]
      `}>
        {/* Mobile header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 lg:hidden">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">S</span>
            </div>
            <span className="font-semibold text-slate-900 dark:text-white text-sm">Spec Kit Docs</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X size={16} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {NAV_ITEMS.map(item => (
            <NavItemEl key={item.id} item={item} depth={0} />
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <a
            href="https://github.com/github/spec-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <ExternalLink size={12} />
            <span>github/spec-kit • v0.8.18</span>
          </a>
        </div>
      </aside>
    </>
  );
}
