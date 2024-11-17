import React, { useState, useRef } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Notification from "./Notification";
import { Outlet, useLocation } from "react-router-dom";
import BottomBar from "./BottomBar";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const location = useLocation();
  const currentPath = location.pathname.split("/").pop();

  return (
    <div className="flex flex-col h-screen max-h-screen">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        {currentPath !== "detail" && (
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        )}
        <div className="flex flex-1 overflow-y-auto bg-gray-50 text-gray-700 dark:bg-black dark:text-gray-100 ds-scrollbar">
          <main
            className={`${
              currentPath === "details" ? "w-screen" : "w-full lg:w-2/3 "
            } `}
          >
            <Outlet />
          </main>

          {currentPath !== "details" && (
            <div
              className="hidden lg:block lg:w-1/3 sticky top-[-240px] bg-gray-100 dark:bg-gray-900 scroll-smooth"
            >
              <Notification />
            </div>
          )}
        </div>
      </div>

      <div className="fixed bottom-0 lg:hidden h-16 w-full">
        <BottomBar />
      </div>
    </div>
  );
};

export default Layout;
