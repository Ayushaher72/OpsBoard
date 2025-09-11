import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../features/auth/slices/authSlice";
import { FiHome, FiUser, FiSettings, FiLogIn, FiMenu, FiShield } from "react-icons/fi";
import styles from "./VerticalNavbar.module.css";

export default function VerticalNavbar() {
    const [collapsed, setCollapsed] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isAuthenticated } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
            {/* Toggle Button */}
            <button
                className={styles.toggleBtn}
                onClick={() => setCollapsed((c) => !c)}
                aria-label="Toggle sidebar"
            >
                <FiMenu />
            </button>

            {/* Brand */}
            <div className={styles.brand}>
                <span className={styles.logo}>🧭</span>
                {!collapsed && <span className={styles.brandText}>MyApp</span>}
            </div>

            {/* Nav Items */}
            <nav className={styles.nav}>
                {isAuthenticated && user?.role === "developer" && (
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `${styles.link} ${isActive ? styles.active : ""}`
                        }
                    > 
                        <FiHome className={styles.icon} />
                        {!collapsed && <span>Home</span>}
                    </NavLink>,

                      <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            `${styles.link} ${isActive ? styles.active : ""}`
                        }
                    >
                        <FiUser className={styles.icon} />
                        {!collapsed && <span>Profile</span>}
                    </NavLink>

                    
                )}

                {isAuthenticated && user?.role === "admin" && (
                    <NavLink
                        to="/admin"
                        className={({ isActive }) =>
                            `${styles.link} ${isActive ? styles.active : ""}`
                        }
                    >
                        <FiShield className={styles.icon} />
                        {!collapsed && <span>Admin Panel</span>}
                    </NavLink>
                )}

                <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                        `${styles.link} ${isActive ? styles.active : ""}`
                    }
                >
                    <FiSettings className={styles.icon} />
                    {!collapsed && <span>Settings</span>}
                </NavLink>

                <div className={styles.divider} />

                {!isAuthenticated ? (
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            `${styles.link} ${isActive ? styles.active : ""}`
                        }
                    >
                        <FiLogIn className={styles.icon} />
                        {!collapsed && <span>Login</span>}
                    </NavLink>
                ) : (
                    <button
                        className={styles.link}
                        onClick={handleLogout}
                    >
                        <FiLogIn className={styles.icon} />
                        {!collapsed && <span>Logout</span>}
                    </button>
                )}
            </nav>
        </aside>
    );
}
