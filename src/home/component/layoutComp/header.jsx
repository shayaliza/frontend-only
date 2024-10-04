import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Points from "./points";
import ProfileIcon from "../profileicon";
import Image from "./../../assets/icon.svg";
import ProfileIconMobile from "../profileicoMobile";
import { IoIosArrowDropdown } from "react-icons/io";
import { useRef } from "react";
import { SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { IoIosNotifications, IoIosNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Header = ({ toggleMobileMenu }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Toggle dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (isMobile) {
    return (
      <header
        className="bg-white fixed py-2 text-lg w-full z-50"
        style={{ boxShadow: "0 6px 16px -1px rgba(0, 0, 0, 0.3)" }}
      >
        <div className="relative mx-auto flex justify-between items-center max-[900px]:min-h-[45px]">
          <div className="flex items-center" onClick={toggleDropdown}>
            <img src={Image} alt="Logo" className="w-32 h-12 object-contain" />
            <div className="relative" ref={dropdownRef}>
              <button onClick={toggleDropdown} className="p-2">
                <IoIosArrowDropdown size={24} />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-12 -right-10 mt-2 w-48  bg-black text-white bg-opacity-25 backdrop-blur-md shadow-lg  rounded-lg z-[999]">
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
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center mr-4">
            <div className="Icons flex items-center min-[900px]:mr-4 justify-end">
              <SearchIcon
                className="mr-2"
                onClick={() => navigate("/search")}
              />
              <IoIosNotificationsOutline
                size={28}
                onClick={() => navigate("/dashboard/notification")}
              />
              <ProfileIconMobile />
            </div>
          </div>
        </div>
      </header>
    );
  }

  // return the desktop version of the header
  return (
    <header
      className="bg-white fixed py-2 text-lg w-full z-50"
      style={{ boxShadow: "0 6px 16px -1px rgba(0, 0, 0, 0.3)" }}
    >
      <div className="relative mx-auto flex justify-between items-center max-[900px]:min-h-[45px]">
        <div
          className="flex items-center"
          ref={dropdownRef}
          onClick={toggleDropdown}
        >
          <img
            src={Image}
            alt="Logo"
            className="w-32 h-12 object-contain hidden md:block"
          />
          {isDropdownOpen && (
            <div className="absolute top-16 left-2 mt-2 w-48  bg-black text-white bg-opacity-25 backdrop-blur-md shadow-lg  rounded-lg z-[999]">
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
              </ul>
            </div>
          )}
        </div>
        <div className="flex items-center mr-4">
          <div className="Icons flex items-center min-[900px]:mr-4 justify-end">
            <Points />
            <ProfileIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
