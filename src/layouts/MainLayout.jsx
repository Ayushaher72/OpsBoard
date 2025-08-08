import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div>
      <header>Main Navigation</header>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;