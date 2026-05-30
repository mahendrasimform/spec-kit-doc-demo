import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { FLAT_NAV } from '../../navigation/nav-items';

export function Breadcrumb() {
  const location = useLocation();
  const current = FLAT_NAV.find(n => n.path === location.pathname);

  if (location.pathname === '/') return null;

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-6">
      <Link to="/" className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
        <Home size={12} />
        <span>Home</span>
      </Link>
      {current && (
        <>
          <ChevronRight size={12} />
          <span className="text-slate-700 dark:text-slate-300 font-medium">{current.label}</span>
        </>
      )}
    </nav>
  );
}
