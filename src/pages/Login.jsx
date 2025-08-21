import React from 'react';
import LoginForm from '../features/auth/components/LoginForm';
import './login.css'

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Welcome Back 👋</h1>
        <p className="login-subtitle">Please login to continue</p>
        <LoginForm />
      </div>
    </div>
  );
}