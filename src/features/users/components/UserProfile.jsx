import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const user = useSelector((state) => state.user.profile);
  return <div>{user ? `Hello, ${user.name}` : 'No user data'}</div>;
};

export default UserProfile;