import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from './components/layout/Layout';

import Dashboard from './pages/Dashboard';
import WhatIsSpecKit from './pages/WhatIsSpecKit';
import Installation from './pages/Installation';
import Integration from './pages/Integration';
import Architecture from './pages/Architecture';
import Features from './pages/Features';
import Commands from './pages/Commands';
import Workflows from './pages/Workflows';
import Examples from './pages/Examples';
import Playground from './pages/Playground';
import BestPractices from './pages/BestPractices';
import Troubleshooting from './pages/Troubleshooting';
import FAQ from './pages/FAQ';
import Resources from './pages/Resources';

function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center">
      <div className="text-6xl font-extrabold text-slate-200 dark:text-slate-800">404</div>
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Page not found</h1>
      <p className="text-slate-500">The page you are looking for does not exist.</p>
      <a href="/" className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors">
        Back to Dashboard
      </a>
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <ScrollReset />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/what-is-spec-kit" element={<WhatIsSpecKit />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/features" element={<Features />} />
        <Route path="/commands" element={<Commands />} />
        <Route path="/workflows" element={<Workflows />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/best-practices" element={<BestPractices />} />
        <Route path="/troubleshooting" element={<Troubleshooting />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
