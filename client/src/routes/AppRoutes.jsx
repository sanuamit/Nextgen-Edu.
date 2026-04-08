import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import MainLayout from '../layout/MainLayout';
import AuthLayout from '../layout/AuthLayout';
import DashboardLayout from '../layout/DashboardLayout';

// Security Wrappers
import PrivateRoute from './PrivateRoute';
import RoleBasedRoute from './RoleBasedRoute';

// Pages
import Home from '../pages/Home';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Dashboard from '../pages/student/Dashboard';
import CreateCourse from '../pages/instructor/CreateCourse';
import Unauthorized from '../pages/Unauthorized';

export default function AppRoutes() {
  return (
    <Routes>
      {/* 1. Public Routes (Uses the standard Navbar) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Route>

      {/* 2. Authentication Routes (Uses the distraction-free Auth layout) */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* 3. Protected Dashboard Routes (Wrapped in PrivateRoute, uses Sidebar Layout) */}
      <Route element={<PrivateRoute><DashboardLayout /></PrivateRoute>}>
        
        {/* Available to ALL logged-in users (Students, Instructors, Admins) */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* INSTRUCTOR ONLY Routes (Wrapped in RoleBasedRoute) */}
        <Route 
          path="/instructor/create" 
          element={
            <RoleBasedRoute allowedRoles={['instructor', 'admin']}>
              <CreateCourse />
            </RoleBasedRoute>
          } 
        />
        
      </Route>

      {/* Catch-all for bad URLs (404 alternative) */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}