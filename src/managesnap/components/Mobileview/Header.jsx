import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaFilter,
  FaTimes,
  FaCog,
  FaPlus,
  FaQuestionCircle,
  FaEllipsisV,
  FaChevronRight,
  FaCircle,
  FaBan,
  FaMinus,
  FaClock,
  FaSignOutAlt,
  FaPowerOff,
  FaHome,
  FaMapMarkerAlt,
  FaPencilAlt,
  FaCheck,
} from "react-icons/fa";
import { FaCamera, FaEnvelope, FaPhone, FaCheckCircle } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import img1 from "../../assets/man1.jpg";
import img2 from "../../assets/man2.jpg";
import profile from "../../assets/logo.png";
import { ModeToggle } from "../../../DarkMode/ToggleMode";
import { useTheme } from "../../../DarkMode/ThemeProvider";
import { Link } from "react-router-dom";
import MobileProfile from "./ChatComp/MobileProfile";

const workspaces = [
  { id: 1, img: img1, name: "snapthetech", link: "snapthetech.workspace.com" },
  { id: 2, img: img2, name: "techsnap", link: "techsnap.workspace.com" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isInsideProfileOpen, setIsInsideProfileOpen] = useState(false);
  const [isOrganisationOpen, setIsOrganisationOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (
      isProfileOpen ||
      isInsideProfileOpen ||
      isOrganisationOpen ||
      isMenuOpen
    ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isProfileOpen, isInsideProfileOpen, isOrganisationOpen, isMenuOpen]);

  const navigate = useNavigate();

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProfileOpen(false);
    setIsInsideProfileOpen(false);
    setIsOrganisationOpen(false);
  };

  return (
    <>
      <div
        className={`fixed  top-0 left-0 w-full h-28 bg-background z-10 text-gray-700 dark:text-gray-300 ${
          theme == "dark" ? "bg-black" : "bg-white"
        }  shadow-lg py-2 px-4 border-b border-gray-400`}
      >
        <div className="relative flex justify-between items-center mb-2.5">
          <div className="flex items-center">
            <img
              src={profile}
              alt="Profile"
              className="w-10 h-10 rounded-full border shadow-lg cursor-pointer mr-2"
              onClick={() => setIsMenuOpen(true)}
            />
            <span className="text-2xl font-semibold">Snapthetech.</span>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="p-2"
            >
              <IoIosArrowDropdown
                size={24}
                className="text-gray-700 dark:text-gray-300"
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-10 left-10 mt-2 w-48 bg-black text-white bg-opacity-25 backdrop-blur-md shadow-lg rounded-lg z-[999]">
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
          <div className="flex space-x-2 ml-4">
            <ModeToggle />
            <img
              src={img1}
              alt="Logo"
              className="w-10 h-10 object-cover rounded-full border-2  shadow-lg cursor-pointer"
              onClick={() => setIsProfileOpen(true)}
            />
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-2">
          <div
            className={`flex items-center flex-grow ${
              theme == "dark" ? "" : "bg-gray-300"
            }  p-2 rounded-full shadow-md border border-gray-600`}
          >
            <FaSearch className="mr-2 w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow bg-transparent outline-none  placeholder-gray-500 h-4"
              onFocus={() => navigate("/managesnap/search")}
            />
          </div>
          <div className="flex items-center justify-center w-10 h-10  rounded-full shadow-md  transition duration-300 border border-gray-600">
            <FaFilter className=" w-4 h-4" />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
          <div
            className={`fixed left-0 h-full z-50 w-4/5 gap-4 border p-4 bg-white shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-right-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-right-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:bg-white`}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-2xl font-semibold">Workspaces</span>
              <button
                className="w-12 h-12 rounded-full hover:bg-gray-300 flex items-center justify-center transition duration-300 mt-2"
                onClick={closeMenu}
              >
                <FaTimes />
              </button>
            </div>
            <div className="space-y-4 mb-24">
              {workspaces.map((workspace) => (
                <div
                  key={workspace.id}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition duration-300"
                >
                  <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden">
                    <img
                      src={workspace.img}
                      alt={workspace.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="font-semibold text-lg truncate">
                      {workspace.name}
                    </h3>
                    <p className="text-sm  truncate">{workspace.link}</p>
                  </div>
                  <button className="p-2 rounded-full hover:bg-gray-200 transition duration-300 flex-shrink-0">
                    <FaEllipsisV className="" />
                  </button>
                </div>
              ))}
            </div>

            <div className="absolute bottom-0 p-2 flex flex-col w-full">
              <div className="flex space-x-4 my-2 items-center">
                <FaPlus />
                <span>Add a workspace</span>
              </div>
              <div className="flex space-x-4 my-2 items-center">
                <FaCog />
                <span>Preferences</span>
              </div>
              <div className="flex space-x-4 my-2 items-center">
                <FaQuestionCircle />
                <span>Help</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {isProfileOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
          <div
            className={`fixed right-0 h-full z-40 w-4/5 bg-white gap-4 bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-right-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-right-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg ${
              isProfileOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-2">
              <MobileProfile setIsInsiderProfileOpen={setIsInsideProfileOpen} setIsOrganisationOpen={setIsOrganisationOpen} closeMenu={closeMenu} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
