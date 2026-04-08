import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50 dark:bg-slate-900 transition-colors duration-300 p-4">
      {/* Minimal branding in the corner */}
      <div className="absolute top-6 left-6">
        <Link to="/" className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-500">
          NextGen Edu
        </Link>
      </div>
      
      <main className="w-full max-w-md animate-fade-in-up">
        <Outlet />
      </main>
    </div>
  );
}