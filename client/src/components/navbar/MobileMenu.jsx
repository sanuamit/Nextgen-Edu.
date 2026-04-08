import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MobileMenu({ isOpen, onClose, user, handleLogout }) {
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => document.body.style.overflow = 'unset';
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden flex">
      {/* Dark Backdrop */}
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
      {/* Slide-out panel */}
      <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-slate-900 shadow-2xl animate-slide-in-right">
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-100 dark:border-slate-800">
          <span className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-500">
            Menu
          </span>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-4 space-y-4">
          {user ? (
            <>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 mb-6">
                <p className="font-bold text-slate-900 dark:text-white">{user.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 capitalize">{user.role}</p>
              </div>
              <Link to="/dashboard" onClick={onClose} className="block px-4 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 font-medium dark:text-slate-200">Dashboard</Link>
              {user.role === 'instructor' && (
                <>
                  <Link to="/instructor/create" onClick={onClose} className="block px-4 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 font-medium dark:text-slate-200">Create Course</Link>
                  <Link to="/instructor/analytics" onClick={onClose} className="block px-4 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 font-medium dark:text-slate-200">Analytics</Link>
                </>
              )}
              <button onClick={() => { handleLogout(); onClose(); }} className="w-full text-left px-4 py-3 text-red-500 font-medium rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 mt-4">
                Logout
              </button>
            </>
          ) : (
            <div className="flex flex-col gap-3 mt-4">
              <Link to="/login" onClick={onClose} className="w-full text-center px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl font-bold dark:text-white">Log in</Link>
              <Link to="/register" onClick={onClose} className="w-full text-center px-4 py-3 bg-indigo-600 text-white rounded-xl font-bold">Sign up</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}