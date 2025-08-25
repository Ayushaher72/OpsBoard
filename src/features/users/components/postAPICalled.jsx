import React, { useState } from "react";
// import { createUser } from "../services/userService";
import { createUser } from "../services/userService";

export default function UserForm({ onUserCreated }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email) {
      setError("All fields are required ❌");
      return;
    }

    try {
      const newUser = await createUser({ name, email });
      setSuccess("✅ User created successfully!");
      setName("");
      setEmail("");

      if (onUserCreated) onUserCreated(newUser); // refresh parent list
    } catch (err) {
      setError("Failed to create user ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>Add New User</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <div>
        <label>Name:</label><br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </div>
      <div>
        <label>Email:</label><br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}
