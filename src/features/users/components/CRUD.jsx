import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../slices/createAsyncThunk";

export default function UserList() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>Users</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}, {u.email}, {u.company.name}</li>
        ))}
      </ul>
    </div>
  );
}
