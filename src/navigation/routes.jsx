import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import Registration from '../pages/registration';
import FormComponent from '../features/users/components/FormComponent';
import UserList from '../features/users/components/CRUD';


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/registration" element={<Registration />} />

    <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
    <Route path="/notfound" element={<MainLayout><NotFound /></MainLayout>} />
    <Route path="/userlist" element={<MainLayout><UserList /></MainLayout>} />
    <Route path="/form" element={<MainLayout><FormComponent /></MainLayout>} />

  </Routes>
);

export default AppRoutes;