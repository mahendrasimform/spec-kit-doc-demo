import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'blue' | 'violet' | 'amber' | 'red';
}

const variants = {
  default: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
  success: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800',
  blue: 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400 border border-blue-200 dark:border-blue-800',
  violet: 'bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-400 border border-violet-200 dark:border-violet-800',
  amber: 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400 border border-amber-200 dark:border-amber-800',
  red: 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-400 border border-red-200 dark:border-red-800',
};

export function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${variants[variant]}`}>
      {children}
    </span>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
  color?: 'emerald' | 'blue' | 'violet' | 'amber';
}

const statColors = {
  emerald: 'from-emerald-500 to-teal-600',
  blue: 'from-blue-500 to-indigo-600',
  violet: 'from-violet-500 to-purple-600',
  amber: 'from-amber-500 to-orange-600',
};

export function StatCard({ value, label, icon, color = 'emerald' }: StatCardProps) {
  return (
    <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-6 text-center shadow-sm">
      {icon && (
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${statColors[color]} text-white mb-3`}>
          {icon}
        </div>
      )}
      <div className="text-3xl font-extrabold text-slate-900 dark:text-white">{value}</div>
      <div className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">{label}</div>
    </div>
  );
}

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div className={`rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-6 shadow-sm ${hover ? 'hover:shadow-md hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-200' : ''} ${className}`}>
      {children}
    </div>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, badge, centered }: SectionHeaderProps) {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      {badge && <Badge variant="success">{badge}</Badge>}
      <h2 className={`text-3xl font-bold text-slate-900 dark:text-white ${badge ? 'mt-3' : ''}`}>{title}</h2>
      {subtitle && <p className={`mt-3 text-lg text-slate-500 dark:text-slate-400 ${centered ? 'mx-auto max-w-2xl' : 'max-w-3xl'}`}>{subtitle}</p>}
    </div>
  );
}

interface StepBadgeProps {
  step: number;
  optional?: boolean;
}

export function StepBadge({ step, optional }: StepBadgeProps) {
  return (
    <div className="relative shrink-0">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${optional ? 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 border-2 border-dashed border-slate-300 dark:border-slate-600' : 'bg-emerald-600 text-white'}`}>
        {step}
      </div>
      {optional && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full flex items-center justify-center">
          <span className="text-white text-[8px] font-bold">?</span>
        </div>
      )}
    </div>
  );
}
