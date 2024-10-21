import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import BottomBar from "./BottomBar";
import PullToRefresh from 'react-simple-pull-to-refresh';
import { RefreshIcon } from "@heroicons/react/outline";

function Layout() {
  const [refreshing, setRefreshing] = useState(false);
  const refreshData = () => {
    return new Promise((resolve) => {
      setRefreshing(true);
      setTimeout(() => {
        console.log('refreshed');
        setRefreshing(false);
        resolve();
      }, 2000);
    });
  };
  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-28">
        <Header />
      </div>
      <main className="flex-1 relative">
        <PullToRefresh 
        onRefresh={refreshData}
        maxPullDownDistance={150}
        refreshingContent={<div className="flex justify-center items-center w-16 h-16 relative left-1/2 -translate-x-1/2">
          <RefreshIcon className="spin w-8 h-8 rounded-full text-blue-600"></RefreshIcon>
        </div>}
        className="text-transparent">
          <Outlet />
        </PullToRefresh>
      </main>
      <div className="h-16">
        <BottomBar />
      </div>
    </div>
  );
}

export default Layout;
