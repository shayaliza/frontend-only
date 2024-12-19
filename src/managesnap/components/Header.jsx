import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  SearchIcon,
  Clock,
  X,
  Lock,
} from "lucide-react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useTheme } from "../../DarkMode/ThemeProvider";
import { ModeToggle } from "../../DarkMode/ToggleMode";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import logo from "../assets/faviconmobile.png";
import user from "../assets/man1.jpg";
import Profile from "./Profile";
import { BsQuestionCircleFill } from "react-icons/bs";
import { FaHashtag, FaQuestionCircle } from "react-icons/fa";

const DROPDOWN_MENU_ITEMS = [
  { label: "Follower", path: null },
  { label: "Following", path: null },
  { label: "Home", path: "/dashboard/profile" },
  { label: "Createsnap", path: "/createsnap/analytics" },
  { label: "Datasnap", path: "/datasnap" },
  { label: "Managesnap", path: "/managesnap" },
];

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { theme } = useTheme();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);
  const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const toggleDropdown = () => {
    setIsMainDropdownOpen(!isMainDropdownOpen);
  };

  const filterData = [
    { name: "Techsnap", icon: <FaQuestionCircle />, id: 1 },
    { name: "View profile for Techsnap", icon: <FaQuestionCircle />, id: 2 },
    { name: "test-tasks", icon: <FaHashtag />, id: 3 },
    { name: "techsnap", icon: <Lock />, id: 4 },
    {
      name: "Customise your terms of service for Enterprise Grid",
      icon: <FaQuestionCircle />,
      id: 5,
    },
    {
      name: "Email template for introducing Slack",
      icon: <FaQuestionCircle />,
      id: 6,
    },
    {
      name: "Microsoft Teams Calls for Slack",
      icon: <FaQuestionCircle />,
      id: 7,
    },
  ];

  const [persons, setPersons] = useState([
    { name: "Vignesh Reddy", id: 1 },
    { name: "Mahesh Reddy", id: 2 },
    { name: "Rajesh Reddy", id: 3 },
    { name: "Siddharth Reddy", id: 4 },
    { name: "Karthik Reddy", id: 5 },
  ]);
  
  const handleRecentRemoval = (personId) => {
    setPersons((prevPersons) =>
      prevPersons.filter((user) => user.id !== personId)
    );
  };
  

  useEffect(() => {
    if (searchQuery) {
      setIsTyping(true);
      setFilteredData(
        filterData.filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setIsTyping(false);
      setFilteredData([]);
    }
  }, [searchQuery]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 p-2.5 w-full flex items-center border-b ${
        theme === "dark" ? "bg-black text-gray-300" : "bg-white text-gray-700"
      }`}
    >
      <div className="absolute left-4 top-3">
        <div className="relative flex items-center space-x-2">
          <img
            src={logo}
            alt="snapthetech logo"
            className="w-10 h-10 rounded-md border border-gray-500 object-fit"
          />
          <span className="ml-3 text-2xl font-semibold">snapthetech</span>
          <div className="relative" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="p-2">
              <IoIosArrowDropdown
                size={24}
                className="text-black dark:text-white"
              />
            </button>
            {isMainDropdownOpen && (
              <div className="absolute top-12 -right-10 mt-2 w-48 bg-gray-300 dark:bg-zinc-800 text-black dark:text-white bg-opacity-25 backdrop-blur-md shadow-lg rounded-lg z-[9999]">
                <ul className="list-none p-2 m-0">
                  <li className="p-2 hover:bg-gray-400 hover:text-gray-900 cursor-pointer">
                    Follower
                  </li>
                  <li className="p-2 hover:bg-gray-400 hover:text-gray-900 cursor-pointer">
                    Following
                  </li>
                  <li className="p-2 hover:bg-gray-400 hover:text-gray-900 cursor-pointer">
                    <Link to="/dashboard/profile">Home</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-400 hover:text-gray-900 cursor-pointer">
                    <Link to="/createsnap/analytics">Createsnap</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-400 hover:text-gray-900 cursor-pointer">
                    <Link to="/datasnap">Datasnap</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-400 hover:text-gray-900 cursor-pointer">
                    <Link to="/managesnap">Managesnap</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-400 hover:text-gray-900 cursor-pointer">
                    <Link to="/ckeditor">CKEditor</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-2/3 mx-auto px-4 flex justify-center items-center">
        <div className="relative w-1/2" ref={dropdownRef}>
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2"
            aria-label="Submit search"
          >
            <SearchIcon className="w-5 h-5" />
          </button>

          <input
          ref={inputRef}
            type="search"
            className="w-full py-2 px-12 border rounded-full focus:outline-none dark:bg-black"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsDropdownOpen(true)}
            onBlur={() => setIsDropdownOpen(false)}
          />
          {isDropdownOpen && (
            <div className="absolute w-full bg-white border dark:bg-black shadow-lg mt-2 rounded-lg z-[999]">
              {isTyping ? (
                <div className="w-full flex flex-col">
                  <div className="w-full flex flex-col border-b">
                    <div
                      className="px-4 pt-2 pb-1 flex items-center space-x-4 rounded-t-md hover:bg-blue-600 cursor-pointer"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        navigate("/managesnap/search", {
                          state: { name: searchQuery },
                        });
                        setSearchQuery("");
                        if (inputRef.current) inputRef.current.blur();
                      }}
                    >
                      <SearchIcon className="w-5 h-5 mr-2" />
                      {searchQuery}
                    </div>

                    <div className="w-full flex flex-col">
                      {filteredData.map((item, index) => (
                        <div
                          key={item.id}
                          className="w-full px-4 py-2 flex items-center space-x-2 hover:bg-blue-600 cursor-pointer"
                        >
                          <div className="">{item.icon}</div>
                          <span className="text-sm">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full flex flex-col space-y-2" onMouseDown={(e) => e.preventDefault()}>
                  <div className="w-full flex flex-col space-y-2 py-2 border-b ">
                    <h3 className="mr-2 text-xs ml-2">People</h3>
                    <div className="flex justify-around px-4">
                      <div className="flex flex-col space-y-1">
                        <img src={user} className="w-10 h-10 rounded-full" />
                        <span className="text-sm">
                          Vignesh <br /> Reddy
                        </span>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <img src={user} className="w-10 h-10 rounded-full" />
                        <span className="text-sm">
                          Mahesh <br /> Reddy
                        </span>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <img src={user} className="w-10 h-10 rounded-full" />
                        <span className="text-sm">
                          Rajesh <br /> Reddy
                        </span>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <img src={user} className="w-10 h-10 rounded-full" />
                        <span className="text-sm">
                          Siddharth <br /> Reddy
                        </span>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <img src={user} className="w-10 h-10 rounded-full" />
                        <span className="text-sm">
                          Karthik <br /> Reddy
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col space-y-2 border-b">
                    <h3 className="mr-2 text-xs ml-2">Recent searches</h3>
                    <div className="w-full flex flex-col">
                      {persons.map((person, index) => (
                        <div
                          key={index}
                          className="w-full flex justify-between items-center  px-4 py-2 group relative hover:bg-blue-600"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-full flex justify-center items-center bg-gray-700 flex-shrink-0">
                              <Clock className="w-4 h-4 text-white flex-shrink-0" />
                            </div>
                            <span className="text-sm">{person.name}</span>
                          </div>
                          <X className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer" onClick={() => handleRecentRemoval(person.id)}/>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="absolute right-4 top-2.5 flex space-x-2">
        <Popover open={isProfileOpen} onOpenChange={setIsProfileOpen}>
          <PopoverTrigger asChild>
            <div /*...handleProfileMouseEvents*/>
              <Avatar className="w-8 h-8 border border-gray-500 cursor-pointer hover:opacity-90 mt-1.5 flex-shrink-0">
                <AvatarImage src={user} alt="User profile" />
              </Avatar>
            </div>
          </PopoverTrigger>

          <PopoverContent
            className="w-[300px] p-0 bg-white dark:bg-gray-900 text-black dark:text-white shadow-xl mr-3"
            // onMouseEnter={() => {
            //   if (timeoutRef.current) clearTimeout(timeoutRef.current);
            // }}
            // onMouseLeave={handleProfileMouseEvents.onMouseLeave}
          >
            <Profile />
            {/* <div className="p-3 space-y-1">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={user} alt="User avatar" />
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-lg font-medium">Saketh</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-sm text-green-500">Active</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-1 py-1">
              <button className="w-full flex items-center gap-3 px-2 py-1 hover:bg-white/10 rounded-md">
                <span role="img" aria-label="smile emoji">😊</span>
                <span className="text-gray-300">Update your status</span>
              </button>
            </div>

            <div className="px-2 py-1 space-y-1">
              {[
                { icon: Moon, label: 'Set yourself as away' },
                { icon: BellOff, label: 'Pause notifications', hasChevron: true },
                { icon: User2, label: 'Profile' },
                { icon: Settings, label: 'Preferences' },
                { icon: Rocket, label: 'Upgrade snapthetech' },
                { icon: LogOut, label: 'Sign out of snapthetech', className: 'text-red-400' }
              ].map((item, index) => (
                <button
                  key={index}
                  className={`w-full flex items-center gap-2 px-2 py-1 hover:bg-white/10 rounded-md ${item.className || ''}`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                  {item.hasChevron && <ChevronRight className="w-5 h-5 ml-auto" />}
                </button>
              ))}
            </div> */}
          </PopoverContent>
        </Popover>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
