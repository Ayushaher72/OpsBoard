import React, { useState } from "react";
import './registration.css'

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
        <div className="register-container">
            <form className="register-card" onSubmit={handleSubmit}>
                <h2 className="title">Create Account</h2>

                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}

                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Choose a username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        disabled={loading}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                    />
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Re-enter password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        disabled={loading}
                    />
                </div>

                <button type="submit" className="register-btn" disabled={loading}>
                    {loading ? "Registering..." : "Register"}
                </button>

                <p className="login-link">
                    Already have an account? <a href="/login">Login</a>
                </p>
            </form>
        </div>
    );
}
