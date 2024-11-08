import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { HomeIcon, BellIcon, CogIcon } from "@heroicons/react/outline";
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
  Plus,
} from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname.split("/").pop();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsProfileOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsProfileOpen(false);
    }, 300);
  };

  const icons = [
    {
      id: "home-tooltip",
      icon: <HomeIcon className="w-6 h-6 mb-1" />,
      label: "Home",
      tooltip: "Home",
      path: "/managesnap/home",
    },
    {
      id: "custom-tooltip",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 mb-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
          />
        </svg>
      ),
      label: "dms",
      tooltip: "DMs",
      path: "/managesnap/dms",
    },
    {
      id: "bell-tooltip",
      icon: <BellIcon className="w-6 h-6 mb-1" />,
      label: "Notifications",
      tooltip: "Notifications",
      path: "/managesnap/notifications",
    },
    {
      id: "cog-tooltip",
      icon: <CogIcon className="w-6 h-6 mb-1" />,
      label: "Settings",
      tooltip: "Settings",
      path: "/managesnap/settings",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-between px-2 py-4 bg-zinc-900 shadow-md w-16">
        <aside className="flex flex-col items-center space-y-6">
          {icons.map(({ id, icon, label, tooltip, path }) => {
            const isActive = currentPath === path.split("/").pop();
            return (
              <Link to={path} key={id}>
                <div
                  data-tooltip-id={id}
                  data-tooltip-content={tooltip}
                  className={`group relative flex items-center justify-center w-12 h-12 cursor-pointer rounded-full transition 
                ${isActive ? "bg-gray-600" : "bg-gray-700 hover:bg-gray-600"}`}
                  aria-label={label}
                  role="button"
                >
                  {React.cloneElement(icon, {
                    className: `${
                      isActive ? "text-black" : "text-white"
                    } w-6 h-6 mb-1`,
                  })}
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
        <div className="w-full bg-transparent cursor-pointer mb-10">
          <div className="mb-4 p-3 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center shadow-md transition-all duration-150 ease-in-out">
            <Plus />
          </div>

          <Popover open={isProfileOpen} onOpenChange={setIsProfileOpen}>
            <PopoverTrigger asChild>
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Avatar className="w-12 h-12 border border-gray-500 cursor-pointer hover:opacity-90">
                  <AvatarImage src={logo} alt="Profile" />
                </Avatar>
              </div>
            </PopoverTrigger>

            <PopoverContent
              className="w-[300px] p-0 bg-[#1E1E1E] text-white shadow-xl ml-6"
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
              }}
              onMouseLeave={handleMouseLeave}
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
    </>
  );
}

export default Sidebar;
