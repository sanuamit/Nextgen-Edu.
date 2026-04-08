import React from 'react';

export default function ProgressBar({ progress, label, showPercentage = true }) {
  // Ensure progress stays strictly between 0 and 100
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-2 text-sm font-bold">
          {label && <span className="text-slate-700 dark:text-slate-300">{label}</span>}
          {showPercentage && <span className="text-indigo-600 dark:text-indigo-400">{clampedProgress}%</span>}
        </div>
      )}
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
        <div 
          className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${clampedProgress}%` }}
        ></div>
      </div>
    </div>
  );
}