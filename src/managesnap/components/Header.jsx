import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchIcon, Moon, BellOff, ChevronRight, User2, Settings, Rocket, LogOut } from 'lucide-react';
import { IoIosArrowDropdown } from 'react-icons/io';
import { useTheme } from '../../DarkMode/ThemeProvider';
import { ModeToggle } from '../../DarkMode/ToggleMode';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import logo from "../assets/faviconmobile.png";
import user from "../assets/man1.jpg";
import Profile from './Profile';

const NAVIGATION_ITEMS = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'About', path: '/about' },
  { id: 3, name: 'Products', path: '/products' },
  { id: 4, name: 'Contact', path: '/contact' },
];

const DROPDOWN_MENU_ITEMS = [
  { label: 'Follower', path: null },
  { label: 'Following', path: null },
  { label: 'Home', path: '/dashboard/profile' },
  { label: 'Createsnap', path: '/createsnap/analytics' },
  { label: 'Datasnap', path: '/datasnap' },
  { label: 'Managesnap', path: '/managesnap' },
];

const Header = () => {
  const [searchState, setSearchState] = useState({
    term: '',
    isDropdownVisible: false,
    showCustomSearch: false,
    filteredData: NAVIGATION_ITEMS,
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { theme } = useTheme();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSearchState(prev => ({ ...prev, isDropdownVisible: false }));
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProfileMouseEvents = {
    onMouseEnter: () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsProfileOpen(true);
    },
    onMouseLeave: () => {
      timeoutRef.current = setTimeout(() => setIsProfileOpen(false), 300);
    },
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    const filtered = term.trim() === '' 
      ? NAVIGATION_ITEMS 
      : NAVIGATION_ITEMS.filter(item => 
          item.name.toLowerCase().includes(term.toLowerCase())
        );

    setSearchState({
      term,
      filteredData: filtered,
      isDropdownVisible: true,
      showCustomSearch: term.trim() !== '' && filtered.length === 0,
    });
  };

  const handleSearchSelection = (path) => {
    setSearchState({
      term: '',
      isDropdownVisible: false,
      showCustomSearch: false,
      filteredData: NAVIGATION_ITEMS,
    });
    if (path === '/managesnap/search') {
      navigate(path, {
        state: { name: searchState.term.trim() }
      });
    } else {
      navigate(path);
    }
  };

  const handleCustomSearch = () => {
    if (searchState.term.trim()) {
      navigate('/managesnap/search', {
        state: { name: searchState.term.trim() }
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 p-2.5 w-full flex items-center border-b ${
      theme === "dark" ? "bg-black text-gray-300" : "bg-white text-gray-700"
    }`}>
      <div className="absolute left-4 top-3">
        <div className="relative flex items-center space-x-2">
          <img src={logo} alt="snapthetech logo" className="w-10 h-10 rounded-md border border-gray-500 object-fit" />
          <span className="ml-3 text-2xl font-semibold">snapthetech</span>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="mt-2 mr-2"
            aria-label="Toggle navigation menu"
            aria-expanded={isDropdownOpen}
          >
            <IoIosArrowDropdown size={24} />
          </button>
          
          {isDropdownOpen && (
            <nav className="absolute top-12 -right-10 mt-2 w-48 bg-black text-white bg-opacity-25 backdrop-blur-md shadow-lg rounded-lg z-[999]">
              <ul className="list-none p-2 m-0">
                {DROPDOWN_MENU_ITEMS.map((item, index) => (
                  <li key={index} className="p-2 hover:bg-gray-400 hover:text-gray-900 cursor-pointer">
                    {item.path ? (
                      <Link to={item.path}>{item.label}</Link>
                    ) : (
                      item.label
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>

      <div className="w-2/3 mx-auto px-4 flex justify-center">
        <div className="relative w-1/2" ref={dropdownRef}>
          <input 
            type="search"
            className="w-full py-2 px-4 border rounded-full focus:outline-none dark:bg-black"
            placeholder="Search..." 
            value={searchState.term}
            onChange={handleSearch}
            onFocus={() => setSearchState(prev => ({ ...prev, isDropdownVisible: true }))}
            aria-label="Search"
            aria-expanded={searchState.isDropdownVisible}
          />
          <button 
            className="absolute top-1/2 right-4 transform -translate-y-1/2"
            onClick={searchState.showCustomSearch ? handleCustomSearch : undefined}
            aria-label="Submit search"
          >
            <SearchIcon className="w-5 h-5"/>
          </button>

          {searchState.isDropdownVisible && (
            <div className={`absolute top-full left-0 w-full mt-1 shadow-lg rounded-lg overflow-auto ${
              theme === "dark" ? "bg-black" : "bg-white"
            } border`}>
              {searchState.filteredData.map((item) => (
                <button
                  key={item.id}
                  className={`w-full text-left px-4 py-2 ${
                    theme === "dark" ? "hover:bg-gray-600" : "hover:bg-gray-200"
                  }`}
                  onClick={() => handleSearchSelection(item.path)}
                >
                  {item.name}
                </button>
              ))}
              {searchState.showCustomSearch && (
                <button
                  className={`w-full flex items-center space-x-2 px-4 py-2 ${
                    theme === "dark" ? "hover:bg-gray-600" : "hover:bg-gray-200"
                  }`}
                  onClick={handleCustomSearch}
                >
                  <SearchIcon className="w-4 h-4" />
                  <span>{searchState.term}</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="absolute right-4 top-2.5 flex space-x-2">
        <Popover open={isProfileOpen} onOpenChange={setIsProfileOpen}>
          <PopoverTrigger asChild>
            <div {...handleProfileMouseEvents}>
              <Avatar className="w-8 h-8 border border-gray-500 cursor-pointer hover:opacity-90 mt-1.5 flex-shrink-0">
                <AvatarImage src={user} alt="User profile" />
              </Avatar>
            </div>
          </PopoverTrigger>

          <PopoverContent
            className="w-[300px] p-0 bg-[#1E1E1E] text-white shadow-xl mr-3"
            onMouseEnter={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
            }}
            // onMouseLeave={handleProfileMouseEvents.onMouseLeave}
          >
            <Profile/>
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