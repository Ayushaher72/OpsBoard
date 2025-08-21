import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css'


export default function Home() {
const navigate = useNavigate();

return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="home-title">Welcome to OpsBoard 🚀</h1>
        <div className="button-group">
          <button className="home-btn login-btn1" onClick={() => navigate('/login')}>
            Login
          </button>
          <button className="home-btn register-btn1" onClick={() => navigate('/registration')}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}