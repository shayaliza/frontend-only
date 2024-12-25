import React, {useState, useEffect} from "react";
import img from "../assets/rsc/feed.png";
import img2 from "../assets/rsc/draft.png";
import img3 from "../assets/rsc/bookmark.png";
import img4 from "../assets/rsc/explore.png";
import img5 from "../assets/rsc/notification-bell.png";
import { useNavigate, useLocation } from "react-router-dom";


function BottomBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop(); 
  const [isIOS, setIsIOS] = useState(false);
  
    useEffect(() => {
      const checkIsIOS = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test(userAgent);
      };
      setIsIOS(checkIsIOS());
    }, []);

  const tabs = [
    { name: "home", icon: img, label: "Home" },
    { name: "explore", icon: img4, label: "Explore" },
    { name: "drafts", icon: img2, label: "Drafts" },
    { name: "bookmarks", icon: img3, label: "Bookmarks" },
    { name: "notifications", icon: img5, label: "Alerts" }
  ];

  const handleClick = (path) => {
    navigate(`${path}`);
  };


  return (
    <div className={`w-full bg-background fixed bottom-0 left-0 right-0 border-t border-gray-300 z-30 shadow-lg bg-gray-50 text-gray-800 dark:text-gray-100 dark:bg-black flex justify-around items-center px-4 ${isIOS ? "pb-8" : ""}`}>
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
            <span className="text-xs">{tab.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export default BottomBar;
