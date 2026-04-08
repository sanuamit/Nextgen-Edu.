import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function Sidebar() {
  const { user } = useAuth();
  const location = useLocation();

  const studentLinks = [
    { name: 'Overview', path: '/dashboard', icon: '📊' },
    { name: 'My Courses', path: '/my-courses', icon: '📚' },
  ];

  const instructorLinks = [
    { name: 'Overview', path: '/dashboard', icon: '📊' },
    { name: 'Manage Courses', path: '/instructor/courses', icon: '🛠️' },
    { name: 'Create Course', path: '/instructor/create', icon: '✨' },
    { name: 'Analytics', path: '/instructor/analytics', icon: '📈' },
  ];

  const links = user?.role === 'instructor' ? instructorLinks : studentLinks;

  return (
    <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col min-h-screen sticky top-0">
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <Link to="/" className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
          NextGen Edu
        </Link>
      </div>
      
      <nav className="flex-1 py-6 px-4 space-y-2">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <span className="text-xl">{link.icon}</span>
              <span className="font-medium">{link.name}</span>
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-slate-800">
        <div className="bg-slate-800 rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center font-bold text-lg">
            {user?.name.charAt(0)}
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-bold truncate">{user?.name}</p>
            <p className="text-xs text-slate-400 capitalize">{user?.role}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}