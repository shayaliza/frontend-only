import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Notification from './Notification';
import { Outlet } from 'react-router-dom';

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleNotification = () => setIsNotificationOpen(!isNotificationOpen);

  return (
    <div className="flex flex-col h-screen">
      <Header toggleSidebar={toggleSidebar} toggleNotification={toggleNotification} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <main className="flex-1 p-4 md:p-6 bg-gray-800 overflow-auto">
          <Outlet />
        </main>
        <Notification isOpen={isNotificationOpen} />
      </div>
    </div>
  );
}

export default Layout;