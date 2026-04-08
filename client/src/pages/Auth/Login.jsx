import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import LoginForm from '../../components/forms/LoginForm';
import Toast from '../../components/common/Toast';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Determine where to send them after login. 
  // If they were kicked out of a private page, this remembers where they were!
  const from = location.state?.from?.pathname || '/dashboard';

  const handleLogin = async (credentials) => {
    setIsLoading(true);
    setError('');
    try {
      await login(credentials.email, credentials.password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
      <Toast message={error} type="error" onClose={() => setError('')} />
      
      <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2 text-center">Welcome Back</h2>
      <p className="text-slate-500 dark:text-slate-400 text-center mb-8">Enter your details to access your learning hub.</p>
      
      <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
      
      <p className="text-center mt-6 text-slate-600 dark:text-slate-400 text-sm font-medium">
        Don't have an account?{' '}
        <Link to="/register" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}