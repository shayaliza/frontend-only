import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Notification from "./Notification";
import { Outlet, useLocation } from "react-router-dom";
import BottomBar from "./BottomBar";

const BBLayout = () => {
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
      <main className={`flex-grow ${isIOS ? "pb-24 pt-16" : "py-16"}`}>
        <Outlet />
      </main>
      <BottomBar />
    </div>
  );
};

export default BBLayout;
