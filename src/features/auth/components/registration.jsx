import React, { useState } from "react";
import styles from './registration.module.css'

export default function RegisterForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset states
        setError("");
        setSuccess("");

        // basic validations
        if (!username || !password || !confirmPassword) {
            setError("All fields are required ❌");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match ⚠️");
            return;
        }

        // simulate API call
        setLoading(true);
        setTimeout(() => {
            setLoading(false);

            // pretend backend says "username already taken"
            if (username.toLowerCase() === "admin") {
                setError("❌ Username already taken!");
                return;
            }

            setSuccess("✅ Registration Successful!");
            console.log("User Registered:", { username, password });

            // clear form after success
            setUsername("");
            setPassword("");
            setConfirmPassword("");
        }, 1500); // 1.5s fake delay
    };

    return (
        <div className={styles.registercontainer}>
            <form className={styles.registercard} onSubmit={handleSubmit}>
                <h2 className={styles.title}>Create Account</h2>

                {error && <p className={styles.errormessage}>{error}</p>}
                {success && <p className={styles.successmessage}>{success}</p>}

                <div className={styles.formgroup}>
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Choose a username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        disabled={loading}
                    />
                </div>

                <div className={styles.formgroup}>
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                    />
                </div>

                <div className={styles.formgroup}>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Re-enter password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        disabled={loading}
                    />
                </div>

                <button type="submit" className={styles.registerbtn} disabled={loading}>
                    {loading ? "Registering..." : "Register"}
                </button>

                <p className={styles.loginlink}>
                    Already have an account? <a href="/login">Login</a>
                </p>
            </form>
        </div>
    );
}
