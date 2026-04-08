import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Home() {
  const { user, loading } = useAuth();

  // If already logged in, skip the landing page and go straight to the dashboard
  if (!loading && user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] text-center px-4 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div className="max-w-4xl animate-fade-in-up z-10">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-bold text-sm tracking-wide uppercase border border-indigo-100 dark:border-indigo-800">
          🚀 The Future of Learning
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
          Master the Skills of <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-400">
            Tomorrow.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of students and expert instructors on NextGen Edu. The premier platform for modern web development, design, and software engineering.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/register" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 dark:shadow-none transition transform hover:-translate-y-1 text-lg">
            Start Learning for Free
          </Link>
          <Link to="/login" className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition transform hover:-translate-y-1 text-lg">
            Instructor Login
          </Link>
        </div>
      </div>
    </div>
  );
}