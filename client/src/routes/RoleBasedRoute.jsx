import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Loader from '../components/common/Loader';

export default function RoleBasedRoute({ children, allowedRoles }) {
  const { user, loading } = useAuth();

  if (loading) return <Loader fullScreen />;

  // Must be logged in first
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Check if the user's role is inside the allowed array
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}