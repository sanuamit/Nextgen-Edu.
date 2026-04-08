import React from 'react';
import Card from '../common/Card';

export default function StatsCard({ title, value, icon, trend }) {
  const isPositive = trend && trend > 0;
  const isNegative = trend && trend < 0;

  // Determine icon color based on title keyword
  let colorClass = 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400';
  if (title.toLowerCase().includes('revenue') || title.toLowerCase().includes('earn')) {
    colorClass = 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400';
  } else if (title.toLowerCase().includes('course')) {
    colorClass = 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400';
  }

  return (
    <Card className="flex items-center gap-5 hover:shadow-lg transition duration-300">
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${colorClass}`}>
        {icon || '📊'}
      </div>
      <div className="flex-1">
        <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{title}</p>
        <div className="flex items-end gap-3 mt-1">
          <p className="text-3xl font-black text-slate-900 dark:text-white">{value}</p>
          {trend !== undefined && (
            <span className={`text-sm font-bold mb-1 ${isPositive ? 'text-green-500' : isNegative ? 'text-red-500' : 'text-slate-400'}`}>
              {isPositive ? '↑' : isNegative ? '↓' : ''} {Math.abs(trend)}%
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}