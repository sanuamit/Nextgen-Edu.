import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Loader from '../components/common/Loader';

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Wait for the auth check to finish before making a decision
  if (loading) return <Loader fullScreen />;

  // If there is no user, kick them to login
  if (!user) {
    // Save the location they were trying to go to so we can redirect them back after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If they are logged in, render the requested page!
  return children;
}