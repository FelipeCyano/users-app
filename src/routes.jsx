import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import UsersList from './pages/UsersList';

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<UsersList />} />
      </Routes>
  )
}

export default AppRoutes;
