import React from 'react';

export default function Card({ children, className = '', onClick }) {
  return (
    <div 
      onClick={onClick}
      className={`bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 ${
        onClick ? 'cursor-pointer hover:shadow-md transition-shadow' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}