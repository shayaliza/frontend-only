import React, { useState, useEffect, useRef } from 'react';
import { SearchIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../DarkMode/ThemeProvider';
import { ModeToggle } from '../../DarkMode/ToggleMode';
import { IoIosArrowDropdown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import logo from "../assets/faviconmobile.png"
import user from "../assets/man1.jpg"
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
  LogOut
} from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const mockData = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'About', path: '/about' },
  { id: 3, name: 'Products', path: '/products' },
  { id: 4, name: 'Contact', path: '/contact' },
];

function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(mockData);
  const [showCustomSearch, setShowCustomSearch] = useState(false);
  const { theme } = useTheme();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
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


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleFocus = () => {
    setIsDropdownVisible(true);
    setFilteredData(mockData);
    setShowCustomSearch(false);
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.trim() === '') {
      setFilteredData(mockData);
      setShowCustomSearch(false);
      return;
    }

    const filtered = mockData.filter(item =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    
    setFilteredData(filtered);
    setShowCustomSearch(filtered.length === 0);
  };

  const handleSelect = (path) => {
    setIsDropdownVisible(false);
    setSearchTerm('');
    navigate(path);
  };

  const handleCustomSearch = () => {
    setIsDropdownVisible(false);
    setSearchTerm('');
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className={`fixed top-0 left-0 right-0 p-2.5 w-full flex items-center border-b text-gray-700 dark:text-gray-300 ${theme === "dark" ? "bg-black" : "text-gray-700"}`}>
      <div className="absolute right-4 top-2.5 flex space-x-2">
      <Popover open={isProfileOpen} onOpenChange={setIsProfileOpen}>
            <PopoverTrigger asChild>
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Avatar className="w-8 h-8 border border-gray-500 cursor-pointer hover:opacity-90 mt-1.5 flex-shrink-0">
                  <AvatarImage src={user} alt="Profile" />
                </Avatar>
              </div>
            </PopoverTrigger>

            <PopoverContent
              className="w-[300px] p-0 bg-[#1E1E1E] text-white shadow-xl mr-3"
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
              }}
              onMouseLeave={handleMouseLeave}
            >
              <div className="p-3 space-y-1">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={user} alt="techsnap" />
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
        <ModeToggle/>
      </div>
      <div className="absolute left-4 top-3">
        <div className="relative flex space-x-2 items-center mb-6">
          <img src={logo} alt="logo" className='w-10 h-10 rounded-full object-fit' />
          <span className="ml-3 text-2xl font-semibold">snapthetech</span>
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="mt-2 mr-2">
            <IoIosArrowDropdown size={24} />
          </button>
          {isDropdownOpen && (
            <div className="absolute top-12 -right-10 mt-2 w-48 bg-black text-white bg-opacity-25 backdrop-blur-md shadow-lg rounded-lg z-[999]">
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
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="w-2/3 mx-auto px-4 flex justify-center">
        <div className="relative w-1/2 border rounded-full" ref={dropdownRef}>
          <input 
            type="text" 
            name="search" 
            id="search" 
            className="w-full py-2 px-4 border rounded-full focus:outline-none dark:bg-black"
            placeholder="Search..." 
            aria-label="Search"
            onFocus={handleFocus}
            onChange={handleSearch}
            value={searchTerm}
          />
          <button 
            className="absolute top-1/2 right-4 transform -translate-y-1/2"
            onClick={showCustomSearch ? handleCustomSearch : undefined}
          >
            <SearchIcon className="w-5 h-5"/>
          </button>
          {isDropdownVisible && (
            <div className={`absolute top-full left-0 w-full mt-1 shadow-lg rounded-lg ${theme === "dark" ? "bg-black" : "bg-white"} border`}>
              {filteredData.map((item) => (
                <div
                  key={item.id}
                  className={`px-4 py-2 ${theme === "dark" ? "hover:bg-gray-600" : "hover:bg-gray-200"} cursor-pointer`}
                  onClick={() => handleSelect(item.path)}
                >
                  {item.name}
                </div>
              ))}
              {showCustomSearch && searchTerm && (
                <div
                  className={`px-4 py-2 flex space-x-2 items-center ${theme === "dark" ? "hover:bg-gray-600" : "hover:bg-gray-200"} cursor-pointer`}
                  onClick={handleCustomSearch}
                >
                  <SearchIcon className='w-4 h-4 mt-1.5'/>
                  <span>{searchTerm}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;