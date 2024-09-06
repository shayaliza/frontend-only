import React from "react";
import { InfoIcon, LayersIcon, QuoteIcon, UsersIcon, MoreHorizontalIcon } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

function BottomBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split("/").pop(); 

  const tabs = [
    { name: "info", icon: InfoIcon, label: "Info" },
    { name: "coursestructure", icon: LayersIcon, label: "Structure" },
    { name: "testimonial", icon: QuoteIcon, label: "Testimonials" },
    { name: "users", icon: UsersIcon, label: "Enrolled" },
    { name: "more", icon: MoreHorizontalIcon, label: "More" }
  ];

  const handleClick = (path) => {
    navigate(`/createsnap/course/html/started/${path}`);
  };

  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-300 z-30 shadow-lg flex justify-around items-center px-4 pb-2 safe-bottom">
      {tabs.map((tab) => {
        const isActive = currentPath === tab.name;

        return (
          <div
            key={tab.name}
            className={`relative flex flex-col items-center justify-center w-16 h-16 cursor-pointer rounded-full transition-all duration-300 ${
              isActive ? "text-black scale-110" : "text-gray-500"
            } hover:scale-105`}
            onClick={() => handleClick(tab.name)}
            aria-label={tab.label}
          >
            <tab.icon className={`w-6 h-6 mb-1 ${isActive ? "text-black" : ""}`} />
            <span className="text-xs">{tab.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export default BottomBar;