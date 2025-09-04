import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../slices/authSlice';
import { loginService } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Both fields are required ❌');
      return;
    }

    // Example auth logic (replace with API later)
    if (email === 'test@example.com' && password === '123456') {
      alert('✅ Login Successful!');
      setError('');
    } else {
      setError('Invalid credentials ⚠️');
    }
  };

  return (
    <>
      <form className={styles["login-form"]} onSubmit={handleSubmit}>
        {error && <p className={styles["error-message"]}>{error}</p>}

        <div className={styles["form-group"]}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles["form-group"]}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className={styles["login-btn"]}>
          Login
        </button>

      </form>
      <button className={`${styles["home-btn"]} ${styles["register-btn11"]}`} onClick={() => navigate('/registration')}>
        create an account
      </button>
    </>

  );
};

export default LoginForm;