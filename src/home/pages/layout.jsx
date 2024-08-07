import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../component/layoutComp/header";
import Sidebar from "../component/layoutComp/sidebar";
import MobileMenu from "../component/layoutComp/mobileSidebar";
import BottomBar from "../component/layoutComp/bottomBar";
import refreshTokenFetch from "../../fetching/refresh.js";
import getTokenExpiration from "../../fetching/getExpiration.js";
import { useSelector } from "react-redux";

const TOKEN_REFRESH_INTERVAL = 5 * 60 * 1000;

function Layout() {
  const { reduxAccessToken, reduxRefreshToken } = useSelector(
    (state) => state.user.userData
  );

  useEffect(() => {
    console.log("use effect called");
    const checkTokenExpiration = async () => {
      console.log("checking expiration");
      if (reduxAccessToken) {
        const expTime = getTokenExpiration(reduxAccessToken) * 1000;
        const currentTime = new Date().getTime();
        console.log("current time", currentTime, "exp time", expTime);
        const timeRemaining = expTime - currentTime;
        console.log("time remaining", timeRemaining);

        if (timeRemaining < TOKEN_REFRESH_INTERVAL) {
          console.log("refreshing token started");
          await refreshTokenFetch(reduxRefreshToken);
        }
      }
    };

    const interval = setInterval(checkTokenExpiration, TOKEN_REFRESH_INTERVAL);

    return () => clearInterval(interval);
  }, [reduxAccessToken, reduxRefreshToken]);

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
