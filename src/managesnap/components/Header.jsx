import React, { useState, useEffect, useRef } from 'react';
import { SearchIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../DarkMode/ThemeProvider';
import { ModeToggle } from '../../DarkMode/ToggleMode';
import { FaUserCircle } from 'react-icons/fa';
import { IoIosArrowDropdown } from 'react-icons/io';
import { Link } from 'react-router-dom';

const mockData = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'About', path: '/about' },
  { id: 3, name: 'Products', path: '/products' },
  { id: 4, name: 'Contact', path: '/contact' },
];

function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(mockData);
  const {theme, setTheme} = useTheme();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

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
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = mockData.filter(item =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleSelect = (path) => {
    setIsDropdownVisible(false);
    navigate(path);
  };

  return (
    <div className={`fixed top-0 left-0 right-0 p-2.5 w-full flex items-center border-b text-gray-700 dark:text-gray-300 ${theme == "dark" ? "bg-black" : "text-gray-700"}`}>
      <div className="absolute right-4 top-4">
        <ModeToggle/>
      </div>
      <div className="absolute left-4 top-3 ">
        <div className="relative flex space-x-4 items-center mb-6">
          <div className="bg-gray-600 w-10 h-10 rounded-full flex items-center justify-center text-xl">
            <FaUserCircle />
          </div>
          <span className="ml-3 text-2xl font-semibold">snapthetech</span>
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="p-2">
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
        <div className="relative w-1/2 border rounded-full" ref={dropdownRef} >
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
          <button className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <SearchIcon className="w-5 h-5"/>
          </button>
          {isDropdownVisible && (
            <div className={`absolute top-full left-0 w-full mt-1 shadow-lg rounded-lg ${theme == "dark" ?  "bg-black" : "bg-white"} border`}>
              {filteredData.map((item) => (
                <div
                  key={item.id}
                  className={`px-4 py-2 ${theme == "dark" ? "hover:bg-gray-600" : "hover:bg-gray-200" }  cursor-pointer`}
                  onClick={() => handleSelect(item.path)}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;