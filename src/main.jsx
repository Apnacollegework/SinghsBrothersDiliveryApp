import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Dashboard/Home';
import Profile from './Dashboard/Profile';

import DashboardLayout from './Dashboard/DashboardLayout';
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from './AuthContext';
import './index.css';
import Deliveries from './Dashboard/Deliveries';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />

          {/* Protected Dashboard Layout Route */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardLayout />
              </PrivateRoute>
            }
          >
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="deliveries" element={<Deliveries />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

