import React from 'react';
import VerticalNavbar from '../components/verticalNavbar/verticalNavbar';

const MainLayout = ({ children }) => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* <header>Main Navigation</header> */}
      <VerticalNavbar/>
      <main style={{ flex: 1, padding: "20px", background: "#f8fafc" }}>{children}</main>
    </div>
  );
};

export default MainLayout;