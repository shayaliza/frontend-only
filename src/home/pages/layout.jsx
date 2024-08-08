import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../component/layoutComp/header";
import Sidebar from "../component/layoutComp/sidebar";
import MobileMenu from "../component/layoutComp/mobileSidebar";
import BottomBar from "../component/layoutComp/bottomBar";
import { getTokenExpiration } from "../../fetching/getExpiration.js";
import { useSelector } from "react-redux";
import {
  logout,
  setUserData,
  updateAccessToken,
} from "../../features/user/userSlice.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Layout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const checkTokens = async () => {
  //     console.log("checking tokens");
  //     try {
  //       const refreshTokenExpiry = getTokenExpiration(reduxRefreshToken);
  //       const accessTokenExpiry = getTokenExpiration(reduxAccessToken);
  //       const currentTime = Math.floor(Date.now() / 1000);

  //       if (refreshTokenExpiry < currentTime) {
  //         dispatch(logout());
  //         navigate("/signin");
  //       } else if (accessTokenExpiry - currentTime < 1800) {
  //         const newTokens = await refreshTokenFetch(reduxRefreshToken);
  //         console.log("new tokens", newTokens);
  //         dispatch(updateAccessToken(newTokens));
  //       }
  //     } catch (error) {
  //       console.error("Error refreshing token", error);
  //       dispatch(logoutUser());
  //       navigate("/signin");
  //     }
  //   };

  //   checkTokens();
  // }, [reduxAccessToken, reduxRefreshToken, dispatch, navigate]);

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
