import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { HomeIcon as HomeOutline } from "@heroicons/react/outline";
import { HomeIcon as HomeSolid } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import logo from "../assets/faviconmobile.png";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Moon,
  BellOff,
  ChevronRight,
  User2,
  Settings,
  Rocket,
  LogOut,
  MessageSquare,
  Bell,
  Cog,
  MessageCircle,
} from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { FaBell } from "react-icons/fa6";
import { FaCog } from "react-icons/fa";

function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const msgCount = 5; 

  const icons = [
    {
      id: "home-tooltip",
      icon: (
        <div className="relative">
          <HomeOutline className="w-6 h-6" />
          {msgCount > 0 && (
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {msgCount}
            </span>
          )}
        </div>
      ),
      activeIcon: (
        <div className="relative">
          <HomeSolid className="w-6 h-6" />
          {msgCount > 0 && (
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {msgCount}
            </span>
          )}
        </div>
      ),
      label: "Home",
      tooltip: "Home",
      path: "/managesnap/home",
      matchPath: "home"
    },
    {
      id: "custom-tooltip",
      icon: (
        <div className="relative">
          <MessageCircle className="w-6 h-6" />
          {msgCount > 0 && (
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {msgCount}
            </span>
          )}
        </div>
      ),
      activeIcon: (
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-current" />
          {msgCount > 0 && (
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {msgCount}
            </span>
          )}
        </div>
      ),
      label: "DMs",
      tooltip: "DMs",
      path: "/managesnap/dms",
      matchPath: "dms"
    },
    {
      id: "bell-tooltip",
      icon: (
        <div className="relative">
          <Bell className="w-6 h-6" />
          {msgCount > 0 && (
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {msgCount}
            </span>
          )}
        </div>
      ),
      activeIcon: (
        <div className="relative">
          <FaBell className="w-6 h-6 fill-current" />
          {msgCount > 0 && (
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {msgCount}
            </span>
          )}
        </div>
      ),
      label: "Notifications",
      tooltip: "Notifications",
      path: "/managesnap/notifications",
      matchPath: "notifications"
    },
    {
      id: "cog-tooltip",
      icon: (
        <div className="relative">
          <Cog className="w-6 h-6" />
          {msgCount > 0 && (
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {msgCount}
            </span>
          )}
        </div>
      ),
      activeIcon: (
        <div className="relative">
          <FaCog className="w-6 h-6 fill-current" />
          {msgCount > 0 && (
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {msgCount}
            </span>
          )}
        </div>
      ),
      label: "Settings",
      tooltip: "Settings",
      path: "/managesnap/settings",
      matchPath: "settings"
    },
  ];

  return (
    <div className="flex flex-col justify-between px-2 py-6 shadow-md w-20">
      <aside className="flex flex-col items-center space-y-6">
        {icons.map(({ id, icon, activeIcon, label, tooltip, path, matchPath }) => {
          const isActive = currentPath.includes(matchPath);
          return (
            <Link to={path} key={id} className="flex flex-col items-center">
              <div
                data-tooltip-id={id}
                data-tooltip-content={tooltip}
                className="flex flex-col items-center justify-center cursor-pointer"
                aria-label={label}
                role="button"
              >
                <div className={`${
                  isActive ? "text-pink-500" : "text-gray-600 hover:text-gray-200"
                }`}>
                  {isActive ? activeIcon : icon}
                </div>
                <span className={`text-xs mt-1 ${
                  isActive ? "text-pink-500" : "text-gray-600"
                }`}>
                  {label}
                </span>
                <ReactTooltip
                  id={id}
                  place="right"
                  content={tooltip}
                  className="z-50"
                />
              </div>
            </Link>
          );
        })}
      </aside>

      <div className="w-full bg-transparent cursor-pointer">
        <Popover open={isProfileOpen} onOpenChange={setIsProfileOpen}>
          <PopoverTrigger asChild>
            <div className="flex flex-col items-center">
              <Avatar className="w-12 h-12 cursor-pointer hover:opacity-90 rounded-lg">
                <AvatarImage src={logo} alt="Profile"  />
              </Avatar>
              <span className="text-xs text-gray-600 mt-1">Personal</span>
            </div>
          </PopoverTrigger>

          <PopoverContent
            className="w-[300px] p-0 bg-[#1E1E1E] text-white shadow-xl ml-12"
            align="start"
          >
            <div className="p-3 space-y-1">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={logo} alt="techsnap" />
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-lg font-medium">Techsnap</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-sm text-green-500">Active</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-1 py-1">
              <button className="w-full flex items-center gap-3 px-2 py-1 hover:bg-white/10 rounded-md">
                <span className="text-xl">😊</span>
                <span className="text-gray-300">Update your status</span>
              </button>
            </div>

            <div className="px-2 py-1 space-y-1">
              <button className="w-full flex items-center gap-3 px-2 py-1 hover:bg-white/10 rounded-md">
                <Moon className="w-5 h-5" />
                <span>Set yourself as away</span>
              </button>
              <button className="w-full flex items-center justify-between px-2 py-1 hover:bg-white/10 rounded-md">
                <div className="flex items-center gap-2">
                  <BellOff className="w-5 h-5" />
                  <span>Pause notifications</span>
                </div>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="h-[1px] bg-gray-800 my-1" />

            <div className="px-2 py-1 space-y-1">
              <button className="w-full flex items-center gap-2 px-2 py-1 hover:bg-white/10 rounded-md">
                <User2 className="w-5 h-5" />
                <span>Profile</span>
              </button>
              <button className="w-full flex items-center gap-2 px-2 py-1 hover:bg-white/10 rounded-md">
                <Settings className="w-5 h-5" />
                <span>Preferences</span>
              </button>
            </div>

            <div className="h-[1px] bg-gray-800 my-1" />

            <div className="px-2 py-1 space-y-1">
              <button className="w-full flex items-center gap-2 px-2 py-2 hover:bg-white/10 rounded-md">
                <Rocket className="w-5 h-5" />
                <span>Upgrade snapthetech</span>
              </button>
              <button className="w-full flex items-center gap-2 px-2 py-2 hover:bg-white/10 rounded-md text-red-400">
                <LogOut className="w-5 h-5" />
                <span>Sign out of snapthetech</span>
              </button>
            </div>
          </PopoverContent>

        </Popover>
      </div>
    </div>
  );
}

export default Sidebar;
