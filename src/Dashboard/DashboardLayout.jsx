// src/Dashboard/DashboardLayout.jsx
import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  Home as HomeIcon,
  PackageCheck,
  UserCircle2,
} from 'lucide-react'; // Modern icons

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;

  const isActive = (path) => currentPath.includes(path);

  return (
    <div className="min-h-screen bg-white">
      {/* Main Page Content */}
      <div className='pb-20'>
      <Outlet />
</div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md flex justify-around items-center py-3 z-50">
        <button
          onClick={() => navigate('/dashboard/home')}
          className={`flex flex-col items-center text-sm ${
            isActive('home') ? 'text-purple-600' : 'text-gray-500'
          }`}
        >
          <HomeIcon size={24} />
          <span>Home</span>
        </button>

        <button
          onClick={() => navigate('/dashboard/deliveries')}
          className={`flex flex-col items-center text-sm ${
            isActive('deliveries') ? 'text-purple-600' : 'text-gray-500'
          }`}
        >
          <PackageCheck size={24} />
          <span>Deliveries</span>
        </button>

        <button
          onClick={() => navigate('/dashboard/profile')}
          className={`flex flex-col items-center text-sm ${
            isActive('profile') ? 'text-purple-600' : 'text-gray-500'
          }`}
        >
          <UserCircle2 size={24} />
          <span>Profile</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardLayout;
