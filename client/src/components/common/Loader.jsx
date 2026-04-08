import React from 'react';

export default function Loader({ fullScreen = false }) {
  const spinner = (
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-indigo-600"></div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-50 dark:bg-slate-900">
        {spinner}
      </div>
    );
  }

  return <div className="flex justify-center p-8">{spinner}</div>;
}