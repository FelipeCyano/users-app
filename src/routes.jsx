import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from '../src/services/authentication';
import LoginPage from './pages/LoginPage';
import UserListPage from './pages/UserListPage';

function AppRoutes() {
  function ProtectedRoute({ children }) {
    if (isAuthenticated()) {
      return children;
    }
    return <Navigate to="/" replace/>
  }

  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route 
          path="/users" 
          element={
            <ProtectedRoute>
              <UserListPage />
            </ProtectedRoute>
          }
        />
      </Routes>
  )
}

export default AppRoutes;
