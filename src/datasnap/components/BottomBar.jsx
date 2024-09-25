import React from "react";
import img from "../assets/rsc/feed.png";
import img2 from "../assets/rsc/draft.png";
import img3 from "../assets/rsc/bookmark.png";
import img4 from "../assets/rsc/explore.png";
import img5 from "../assets/rsc/notification-bell.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../../DarkMode/ThemeProvider";

function BottomBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop(); 

  const tabs = [
    { name: "home", icon: img, label: "Home" },
    { name: "explore", icon: img4, label: "Explore" },
    { name: "drafts", icon: img2, label: "Drafts" },
    { name: "bookmarks", icon: img3, label: "Bookmarks" },
    { name: "notifications", icon: img5, label: "Alerts" }
  ];

  const handleClick = (path) => {
    navigate(`/datasnap/${path}`);
  };

  const {theme} = useTheme();

  return (
    <div className={`w-full bg-background border-t border-gray-300 z-30 shadow-lg ${theme == 'dark' ? 'bg-black text-white' : "bg-gray-800 text-white"} flex justify-around items-center px-4 pb-2 safe-bottom`}>
      {tabs.map((tab) => {
        const isActive = currentPath === tab.name;

        return (
          <div
            key={tab.name}
            className={`relative flex flex-col items-center justify-center w-16 h-16 cursor-pointer rounded-full transition-all duration-300 ${
              isActive ? "scale-110" : ""
            } hover:scale-105`}
            onClick={() => handleClick(tab.name)}
            aria-label={tab.label}
          >
            <img src={tab.icon} alt={tab.label} className="w-6 h-6" />
            <span className="text-xs text-white">{tab.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export default BottomBar;
