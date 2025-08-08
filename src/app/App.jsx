// Root component using React Router
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../navigation/routes';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
