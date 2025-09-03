import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiUser, FiSettings, FiLogIn, FiMenu } from "react-icons/fi";
import styles from "./VerticalNavbar.module.css";

export default function VerticalNavbar() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
            {/* Toggle */}
            <button
                className={styles.toggleBtn}
                onClick={() => setCollapsed((c) => !c)}
                aria-label="Toggle sidebar"
            >
                <FiMenu />
            </button>

            {/* Brand / Logo */}
            <div className={styles.brand}>
                <span className={styles.logo}>🧭</span>
                {!collapsed && <span className={styles.brandText}>MyApp</span>}
            </div>

            {/* Nav Items */}
            <nav className={styles.nav}>
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        `${styles.link} ${isActive ? styles.active : ""}`
                    }
                >
                    <FiHome className={styles.icon} />
                    {!collapsed && <span>Home</span>}
                </NavLink>

                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        `${styles.link} ${isActive ? styles.active : ""}`
                    }
                >
                    <FiUser className={styles.icon} />
                    {!collapsed && <span>Profile</span>}
                </NavLink>

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

                <NavLink
                    to="/login"
                    className={({ isActive }) =>
                        `${styles.link} ${isActive ? styles.active : ""}`
                    }
                >
                    <FiLogIn className={styles.icon} />
                    {!collapsed && <span>Login</span>}
                </NavLink>
            </nav>
        </aside>
    );
}
