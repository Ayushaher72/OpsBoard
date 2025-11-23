import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
// import UserList from '../features/users/components/UserList';
import UserList from '../features/users/components/getAPICalled';
import FormComponent from '../features/users/components/FormComponent';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => (
  <Routes>
    {/* Public Routes */}
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/registration" element={<Registration />} />

    {/* Protected Routes with Layout */}
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute allowedRoles={['admin']}>
          <MainLayout>
            <Dashboard />
          </MainLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/userlist"
      element={
        <ProtectedRoute>
          <MainLayout>
            <UserList />
          </MainLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/form"
      element={
        <ProtectedRoute>
          <MainLayout>
            <FormComponent />
          </MainLayout>
        </ProtectedRoute>
      }
    />
    <Route
      path="*"
      element={
        <ProtectedRoute>
          <MainLayout>
            <NotFound />
          </MainLayout>
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default AppRoutes;
