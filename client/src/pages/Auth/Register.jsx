import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import RegisterForm from '../../components/forms/RegisterForm';
import Toast from '../../components/common/Toast';

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async (formData) => {
    setIsLoading(true);
    setError('');
    try {
      await register(formData);
      // Once registered successfully, immediately send them to their new dashboard
      navigate('/dashboard', { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create account');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 my-8">
      <Toast message={error} type="error" onClose={() => setError('')} />
      
      <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2 text-center">Join NextGen</h2>
      <p className="text-slate-500 dark:text-slate-400 text-center mb-8">Create an account to start learning or teaching.</p>
      
      <RegisterForm onSubmit={handleRegister} isLoading={isLoading} />
      
      <p className="text-center mt-6 text-slate-600 dark:text-slate-400 text-sm font-medium">
        Already have an account?{' '}
        <Link to="/login" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
}