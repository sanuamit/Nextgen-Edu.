import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import MobileMenu from './MobileMenu';

export default function Navbar({ isDashboard = false }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <nav className={`bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40 ${isDashboard ? 'w-full' : 'shadow-sm'}`}>
        <div className={`${isDashboard ? 'px-4 sm:px-6 lg:px-8' : 'max-w-7xl mx-auto px-4'} flex justify-between h-16 items-center`}>
          
          {/* Logo */}
          <div className="flex items-center gap-4">
            {!isDashboard && (
              <Link to={user ? "/dashboard" : "/"} className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-500">
                NextGen Edu
              </Link>
            )}
            {isDashboard && (
              <span className="text-xl font-bold text-slate-800 dark:text-white hidden md:block">
                Dashboard
              </span>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {user ? (
              <>
                <div className="flex flex-col text-right">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">{user.name}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 capitalize">{user.role}</span>
                </div>
                <div className="h-8 w-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold">
                  {user.name.charAt(0)}
                </div>
                <button onClick={handleLogout} className="text-sm font-medium text-slate-500 hover:text-red-500 transition border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-lg">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 font-medium">Log in</Link>
                <Link to="/register" className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl font-bold transition shadow-lg shadow-indigo-200 dark:shadow-none">Sign up</Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        user={user}
        handleLogout={handleLogout}
      />
    </>
  );
}