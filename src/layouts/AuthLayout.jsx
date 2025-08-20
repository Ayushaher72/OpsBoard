import React from 'react';
import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div>
      <header>Auth Layout</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AuthLayout;
