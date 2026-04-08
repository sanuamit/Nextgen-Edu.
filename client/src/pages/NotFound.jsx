import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="text-8xl mb-6 font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-600">
        404
      </div>
      <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Page Not Found</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
        We can't seem to find the page you're looking for. It might have been removed or the link is incorrect.
      </p>
      <Link to="/">
        <Button size="lg">Return to Home</Button>
      </Link>
    </div>
  );
}