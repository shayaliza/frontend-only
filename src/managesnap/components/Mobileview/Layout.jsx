import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import BottomBar from "./BottomBar";
import PullToRefresh from 'react-simple-pull-to-refresh';
import { RefreshIcon } from "@heroicons/react/outline";

function Layout() {
  const [isIOS, setIsIOS] = useState(false);
  
    useEffect(() => {
      const checkIsIOS = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test(userAgent);
      };
      setIsIOS(checkIsIOS());
    }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-28">
        <Header />
      </div>
      <main className={`flex-1 relative ${isIOS ? "pb-6" : ""}`}>
        <Outlet />
      </main>
      <div className="h-16">
        <BottomBar />
      </div>
    </div>
  );
}

export default Layout;
