import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

export default function Unauthorized() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="text-6xl mb-6">🛑</div>
      <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Access Denied</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
        You don't have the required permissions to view this page. If you believe this is an error, please contact support.
      </p>
      <Link to="/dashboard">
        <Button size="lg">Return to Dashboard</Button>
      </Link>
    </div>
  );
}