// src/components/Layout.js
import React, { useState } from "react";
import Navbar from "./../components/layoutComp/navbar";
import Sidebar from "./../components/layoutComp/sidebar";

const DataSnapLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default DataSnapLayout;
