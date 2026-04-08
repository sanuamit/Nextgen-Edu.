import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-white">
      <Navbar />
      <main className="animate-fade-in-up">
        {/* React Router injects the child page here */}
        <Outlet />
      </main>
    </div>
  );
}