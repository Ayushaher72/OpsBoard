import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, allowedRoles }) {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    // Not logged in → Redirect to login
    return <Navigate to="/login" replace />;
  }

  // Role-based check (if allowedRoles is provided)
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Unauthorized → Redirect to login or some "Access Denied" page
    return <Navigate to="/login" replace />;
  }

  return children;
}
