import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './home.module.css'


export default function Home() {
const navigate = useNavigate();

return (
    <div className={styles.homecontainer}>
      <div className={styles.overlay}>
        <h1 className={styles.hometitle}>Welcome to OpsBoard 🚀</h1>
        <div className={styles.buttongroup}>
          <button className={`${styles.homebtn} ${styles.loginbtn1}`} onClick={() => navigate('/login')}>
            Login
          </button>
          <button className={`${styles.homebtn} ${styles.registerbtn1}`} onClick={() => navigate('/registration')}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}