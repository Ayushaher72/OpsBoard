import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import Registration from '../pages/registration';
import UserList from '../features/users/components/getAPICalled';
import FormComponent from '../features/users/components/FormComponent';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/notfound" element={<NotFound />} />
    <Route path="/registration" element={<Registration />} />
    <Route path="/userlist" element={<UserList />} />
    <Route path="/form" element={<FormComponent />} />
  </Routes>
);

export default AppRoutes;