import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/navbar/Sidebar';
import Navbar from '../components/navbar/Navbar';

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-900 transition-colors duration-300 text-slate-900 dark:text-white">
      {/* Sidebar stays pinned to the left */}
      <Sidebar />
      
      {/* Main content area scrolls independently */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Navbar isDashboard={true} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 animate-fade-in-up">
          <Outlet />
        </main>
      </div>
    </div>
  );
}