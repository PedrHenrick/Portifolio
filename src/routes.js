import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <Dashboard /> } />
      <Route path="*" element={ <h1>Not Found</h1> } />
    </Routes>
  )
};

export default MainRoutes;
