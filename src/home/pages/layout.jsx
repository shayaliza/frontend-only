import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../component/layoutComp/header";
import Sidebar from "../component/layoutComp/sidebar";
import MobileMenu from "../component/layoutComp/mobileSidebar";
import BottomBar from "../component/layoutComp/bottomBar";

function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div>
      <div className="flex flex-col">
        <Header toggleMobileMenu={toggleMobileMenu} />
        <div className="flex overflow-hidden">
          <Sidebar isActive={isActive} />
          <MobileMenu
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
            isActive={isActive}
          />
          <div
            className={`min-[900px]:ml-52 flex-1 mt-16 mb-10 md:mb-0 overflow-y-auto ${
              isMobileMenuOpen ? "blur" : ""
            }`}
          >
            <Outlet />
          </div>
        </div>
        <BottomBar />
      </div>
    </div>
  );
}

export default Layout;
