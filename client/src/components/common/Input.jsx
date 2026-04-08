import React from 'react';

export default function Input({ label, error, className = '', ...props }) {
  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      {label && (
        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border ${
          error ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-700 focus:ring-indigo-500'
        } rounded-xl focus:ring-2 outline-none transition-colors text-slate-900 dark:text-white`}
        {...props}
      />
      {error && <span className="text-red-500 text-xs font-medium mt-1">{error}</span>}
    </div>
  );
}