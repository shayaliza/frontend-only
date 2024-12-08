import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

function Settings() {
  const { pathname } = useLocation();
  
  const getActiveStyle = (path) =>
    pathname.endsWith(path) 
      ? 'border-b-2 border-blue-500' 
      : 'hover:border-b-2 hover:border-gray-400 hover:text-gray-600 dark:hover:text-gray-400';

  return (
    <div className="w-full h-full">
      <div className="max-w-screen-lg flex flex-col mx-auto my-8">
        <h1 className="text-3xl font-semibold mb-6 ml-4 lg:ml-0">Settings</h1>
        
        <div className="max-w-screen-sm flex justify-between items-center px-4 mb-3 text-gray-500 overflow-x-auto">
          <Link to="account" className={`p-2 ${getActiveStyle('account')}`}>
            Account
          </Link>
          <Link to="profile" className={`p-2 ${getActiveStyle('profile')}`}>
            Profile
          </Link>
          <Link to="privacy" className={`p-2 ${getActiveStyle('privacy')}`}>
            Privacy
          </Link>
          <Link to="preferences" className={`p-2 ${getActiveStyle('preferences')}`}>
            Preferences
          </Link>
          <Link to="notifications" className={`p-2 ${getActiveStyle('notifications')}`}>
            Notifications
          </Link>
        </div>

        <div className="min-h-screen px-4 pb-20 lg:py-2 lg:px-0 overflow-auto lg:min-h-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Settings;
