import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (rolesAllowed.length && !rolesAllowed.includes(user.role)) {
    return <Navigate to="/not-authorized" replace />;  // Create this page if needed
  }

  return children;
}
