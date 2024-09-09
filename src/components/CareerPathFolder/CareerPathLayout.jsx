import React, { useState } from "react";
import BottomBar from "./CPBottomBar"
import Header from "../Header";
import { Outlet, useLocation, Link, useNavigate } from "react-router-dom";
import PreviewSidebar from "./CareerPathSidebar";
import "../Layout.css";
import TimelinePopup from "../../popups/CareerPathPopup";

function Layout() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const navigate = useNavigate()

  const handlePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const toggleSidebar = () => {
    setIsPanelOpen(false);
  };

  const [profileOpen, setProfileOpen] = useState(false);

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  const [isTimelinePopup, setIsTimelinePopup] = useState(false);

  const handleTimelinePopup = () => {
    setIsTimelinePopup(!isTimelinePopup);
  };

  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const currentPathName = pathSegments[pathSegments.length - 1] || "Home";

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Careerpath", path: "/career-path" },
    { name: currentPathName.charAt(0).toUpperCase() + currentPathName.slice(1), path: location.pathname }
  ];

  return (
    <>
      <div className="flex overflow-hidden">
        <PreviewSidebar
          isPanelOpen={isPanelOpen}
          toggleSidebar={toggleSidebar}
        />
        <div className={`flex flex-col w-full${isPanelOpen ? "blur" : ""}`}>
          <div className="h-20">
          <Header
            handlePanel={handlePanel}
            profileOpen={profileOpen}
            toggleProfile={toggleProfile}
          />
          </div>
          <div
            className={`lg:ml-56 overflow-y-auto flex-grow z-0 ${
              isPanelOpen ? "blur" : ""
            }`}
          >
            <nav className="breadcrumb p-2 mb-2 overflow-auto hidden lg:block">
          {breadcrumbs.map((breadcrumb, index) => (
            <span key={index}>
              <Link to={breadcrumb.path} className="text-blue-500 hover:underline">
                {breadcrumb.name}
              </Link>
              {index < breadcrumbs.length - 1 && (
                <span className="mx-2">/</span>
              )}
            </span>
          ))}
        </nav>
            <Outlet context={{handleTimelinePopup}}/>
          </div>
          <div className="h-16 lg:hidden">
        <BottomBar/>
        </div>
        </div>
        <TimelinePopup isOpen={isTimelinePopup} togglePopup={handleTimelinePopup}/>
      </div>
    </>
  );
}

export default Layout;
