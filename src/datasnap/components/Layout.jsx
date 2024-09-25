import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Notification from './Notification';
import { Outlet, useLocation } from 'react-router-dom';
import BottomBar from './BottomBar';
import  {useTheme} from "../../DarkMode/ThemeProvider"

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleNotification = () => setIsNotificationOpen(!isNotificationOpen);

  const location = useLocation();
  const currentPath = location.pathname.split('/').pop();
  const {theme} = useTheme();

  return (
    <div className="flex flex-col h-screen max-h-screen">
      <Header toggleSidebar={toggleSidebar} toggleNotification={toggleNotification} />
      <div className="flex flex-1 overflow-hidden">
        {currentPath !== "detail" && (
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        )}
        <main className={`flex-1 ${ currentPath === "detail" ? "p-0 pb-16 w-screen" : "p-4 pb-20 md:p-6"} ${theme == 'dark' ? 'bg-black text-white' : "bg-gray-800"} bg-background overflow-auto lg:pb-0`}>
          <Outlet />
        </main>
        {currentPath !== "detail" && (
          <Notification isOpen={isNotificationOpen} className="overflow-auto" />
        )}
        <div className="fixed bottom-0 lg:hidden h-16 w-full">
          <BottomBar />
        </div>
      </div>
    </div>
  );
}

export default Layout;
