import React, { useEffect, useState } from "react";
// import { getUsers } from "../services/userService";
import { getUsers } from "../features/users/services/userService";
// import UserForm from "./UserForm";
import UserForm from "./postAPICalled";

export default function UserList() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Management</h2>

      {/* Form for creating user */}
      <UserForm onUserCreated={loadUsers} />

      {/* List of users */}
      <h3>Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}