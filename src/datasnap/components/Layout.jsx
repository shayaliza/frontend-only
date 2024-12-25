import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Notification from "./Notification";
import { Outlet, useLocation } from "react-router-dom";
import BottomBar from "./BottomBar";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const location = useLocation();
  const currentPath = location.pathname;

  const isDetailPage = currentPath.includes("detail");
  const isSettingsPage = currentPath.includes("settings");
  const [isIOS, setIsIOS] = useState(false);
  
    useEffect(() => {
      const checkIsIOS = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test(userAgent);
      };
      setIsIOS(checkIsIOS());
    }, []);

  return (
    <div className="flex flex-col h-screen max-h-screen">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        {!isDetailPage && (
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        )}
        <div className={`flex flex-1 overflow-y-auto bg-gray-50 text-gray-700 dark:bg-black dark:text-gray-100`}>
          <main
            className={`${
              isDetailPage || isSettingsPage ? "w-screen" : "w-full lg:w-2/3"
            } ${isIOS ? "mb-20": "mb-16"}`}
          >
            <Outlet />
          </main>

          {!isDetailPage && !isSettingsPage && (
            <div className="hidden lg:block lg:w-1/3 bg-gray-100 dark:bg-gray-900 scroll-smooth">
              <Notification />
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default Layout;
