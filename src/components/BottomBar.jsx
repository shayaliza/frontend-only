import React from "react";
import { HelpCircle, AreaChart, FileQuestion, PencilIcon, Cog } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../DarkMode/ThemeProvider";

function BottomBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop(); 
  const {theme} = useTheme();

  const tabs = [
    { name: "analytics", icon: AreaChart, label: "Analytics" },
    { name: "manage", icon: Cog, label: "Manage"},
    { name: "create", icon: PencilIcon, label: "Create" },
    { name: "doubts", icon: FileQuestion, label: "Doubts" },
    { name: "support", icon: HelpCircle, label: "Support" }
  ];

  const handleClick = (path) => {
    navigate(`/createsnap/${path}`);
  };

  return (
    <div className={`fixed bottom-0 w-full ${theme === "dark" ? "bg-black" : "bg-white"} border-t border-gray-300 z-30 shadow-lg flex justify-around items-center px-4 pb-2 safe-bottom`}>
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