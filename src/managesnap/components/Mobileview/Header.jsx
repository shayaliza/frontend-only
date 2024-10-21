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
import img1 from "../../assets/man1.jpg";
import img2 from "../../assets/man2.jpg";
import profile from "../../assets/logo.png";
import { ModeToggle } from "../../../DarkMode/ToggleMode";
import { useTheme } from "../../../DarkMode/ThemeProvider";

const workspaces = [
  { id: 1, img: img1, name: "snapthetech", link: "snapthetech.workspace.com" },
  { id: 2, img: img2, name: "techsnap", link: "techsnap.workspace.com" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isInsideProfileOpen, setIsInsideProfileOpen] = useState(false);
  const [isOrganisationOpen, setIsOrganisationOpen] = useState(false);
  const {theme, setTheme} = useTheme();

  useEffect(() => {
    if (isProfileOpen || isInsideProfileOpen || isOrganisationOpen|| isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isProfileOpen, isInsideProfileOpen, isOrganisationOpen, isMenuOpen])
  

  const navigate = useNavigate();

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProfileOpen(false);
    setIsInsideProfileOpen(false);
    setIsOrganisationOpen(false);
  };

  return (
    <>
      <div className={`fixed top-0 left-0 w-full h-28 bg-background z-10 ${theme == 'dark' ? "bg-black text-gray-300" : "bg-white"}  shadow-lg py-2 px-4 border-b border-gray-400`}>
        <div className="flex justify-between items-center mb-2.5">
          <div className="flex items-center space-x-3">
            <img
              src={profile}
              alt="Profile"
              className="w-10 h-10 rounded-full border shadow-lg cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            />
            <span className="text-2xl font-semibold">
              Snapthetech
            </span>
          </div>
          <div className="flex space-x-2">
            <ModeToggle/>
            <img
              src={img1}
              alt="Logo"
              className="w-10 h-10 object-cover rounded-full border-2  shadow-lg cursor-pointer"
              onClick={() => setIsProfileOpen(true)}
            />
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-2">
          <div className={`flex items-center flex-grow ${theme == "dark" ? '': "bg-gray-300"}  p-2 rounded-full shadow-md border border-gray-600`}>
            <FaSearch className="mr-2 w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow bg-transparent outline-none  placeholder-gray-500 h-4"
              onFocus={() => navigate("/search")}
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
          className={`fixed left-0 h-full z-50 w-4/5 gap-4 border p-4 bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-right-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-right-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:bg-white`}  
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
                  <p className="text-sm  truncate">
                    {workspace.link}
                  </p>
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
          className={`fixed right-0 h-full z-40 w-4/5 bg-white gap-4 bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-right-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-right-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg ${isProfileOpen ? "translate-x-0" : "translate-x-full"}`}  
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <img
                  src="path_to_user_image.jpg"
                  alt="User Avatar"
                  className="w-16 h-16 rounded-full border-2 border-blue-500 object-cover flex-shrink-0"
                />
                <div>
                  <h2
                    className="text-md font-semibold flex items-center cursor-pointer hover:text-blue-400 transition-colors duration-200"
                    onClick={() => setIsInsideProfileOpen(true)}
                  >
                    Sai Pavan Saketh Desamsetti{" "}
                    <FaChevronRight className="w-4 h-4 ml-2 cursor-pointer" />
                  </h2>
                  <p className="text-sm">
                    Employee Experience API & Integration Engineer
                  </p>
                </div>
              </div>
              <button
                className=" absolute top-0 right-2 rounded-full p-2 hover:bg-gray-600 transition-colors duration-200"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>

            <ul className="space-y-4">
              {[
                {
                  icon: <FaCircle className="text-green-500" />,
                  text: "Available",
                  active: true,
                },
                { icon: <FaBan className="text-red-500" />, text: "Busy" },
                {
                  icon: <FaMinus className="text-red-600" />,
                  text: "Do not disturb",
                },
                {
                  icon: <FaClock className="text-yellow-500" />,
                  text: "Be right back",
                },
                {
                  icon: <FaSignOutAlt className="text-yellow-600" />,
                  text: "Away",
                },
                {
                  icon: <FaPowerOff className="text-gray-500" />,
                  text: "Appear offline",
                },
                {
                  icon: <FaHome className="text-pink-500" />,
                  text: "Out of office",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center justify-between p-2 rounded-lg ${
                    item.active ? "bg-gray-300 text-black" : "hover:bg-gray-700"
                  } transition-colors duration-200 cursor-pointer`}
                >
                  <span className="flex items-center space-x-3">
                    {item.icon}
                    <span>{item.text}</span>
                  </span>
                  {item.active && <FaCheck className="text-blue-500" />}
                </li>
              ))}
            </ul>

            <ul className="space-y-4 mt-8">
              {[
                { icon: <FaMapMarkerAlt />, text: "Set work location" },
                { icon: <FaPencilAlt />, text: "Set status message" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      )}
      {isInsideProfileOpen && (
        <div className="fixed inset-0 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
    <div
      className={`fixed right-0 h-full z-50 w-4/5 bg-whites gap-4 bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-right-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-right-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg ${isInsideProfileOpen ? "translate-x-0" : "translate-x-full"}`}  
    >
          <div className="p-4 w-full">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src="path_to_user_image.jpg"
                alt="User Avatar"
                className="w-16 h-16 rounded-full border-2 border-gray-700 shadow-lg flex-shrink-0"
              />
              <div>
                <h2 className="text-md font-bold">
                  Sai Pavan Saketh Desamsetti
                </h2>
                <p className="text-sm">
                  Employee Experience API & Integration Engineer
                </p>
                <p className="text-sm">
                  Digital Innovation & Technology
                </p>
              </div>
            </div>
            <button
              className=" absolute top-0 right-2 rounded-full p-2 hover:bg-gray-600 transition-colors duration-200"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <FaTimes className="w-4 h-4" />
            </button>

            <div className="flex justify-center mb-6">
              <button className="flex items-center space-x-2 bg-gray-100 text-black hover:bg-gray-700 px-4 py-2 rounded-lg shadow-md transition ease-in-out duration-200">
                <FaCamera className="" />
                <span className="font-medium">Update photo</span>
              </button>
            </div>

            <div className="bg-gray-100 text-black p-4 rounded-lg mb-6 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <span className="flex items-center space-x-2 text-lg font-medium">
                  <FaCheckCircle className="text-green-500" />
                  <span>Available</span>
                </span>
                <span className="text-sm">Free all day</span>
              </div>
              <p className="text-sm">
                Work hours: 6:30 AM - 5:30 PM
              </p>
              <p className="text-smmt-1">
                2:40 PM - Your local time
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Contact</h3>
              <div className="space-y-3">
                <div className="flex shrink-0 items-center space-x-3">
                  <FaEnvelope className=" w-4 h-4" />
                  <span className="text-xs">
                    saipavansaketh.desamsetti@se.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="" />
                  <span>+91 9705811666</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="" />
                  <span>Exora Business Park</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Your manager</h3>
                <div
                  className="text-blue-500 text-md block text-center"
                  onClick={() => setIsOrganisationOpen(true)}
                >
                  Show organisation
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-gray-100 text-black p-4 rounded-lg shadow-md">
                <img
                  src="path_to_manager_image.jpg"
                  alt="Manager Avatar"
                  className="w-8 h-8 rounded-full border-2 border-gray-100 shadow-lg"
                />
                <div>
                  <p className="font-semibold text-md">Apoorva PRAKASH</p>
                  <p className="text-sm">DGM - Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      )}
      {isOrganisationOpen && (
  <div className="fixed inset-0 z-50">
    <div
      className={`fixed right-0 flex flex-col h-full z-50 w-4/5 bg-white shadow-lg transition-transform duration-200 border border-gray-600 ${
        isProfileOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="relative w-full h-full flex overflow-auto mb-2">
        <div className="w-1/2 border-r border-gray-700 h-full"></div>
        <div className="w-1/2 border-l border-gray-700 h-full"></div>
        <div className="absolute flex flex-col gap-2 w-full h-full py-10 px-4  mt-4  text-black">
        <div className="p-2 flex items-center space-x-4 rounded-lg bg-gray-800">
        <img
          src="path_to_user_image.jpg"
          alt="User Avatar"
          className=" flex-shrink-0 w-10 h-10 rounded-full border-2 border-gray-800 shadow-lg"
        />
        <div className="text-white">
          <h2 className="text-sm font-bold">Sai Pavan Saketh Desamsetti</h2>
          <p className="text-xs">Employee Experience API & Integration Engineer</p>
          <p className="text-xs">Digital Innovation & Technology</p>
        </div>
      </div>
      <div className="p-2 flex items-center space-x-4 rounded-lg bg-gray-800">
        <img
          src="path_to_user_image.jpg"
          alt="User Avatar"
          className=" flex-shrink-0 w-10 h-10 rounded-full border-2 border-gray-700 shadow-lg"
        />
        <div className="text-white">
          <h2 className="text-sm font-bold">Sai Pavan Saketh Desamsetti</h2>
          <p className="text-xs text-white">Employee Experience API & Integration Engineer</p>
          <p className="text-xs text-white">Digital Innovation & Technology</p>
        </div>
      </div>
      <div className="p-2 flex items-center space-x-4 rounded-lg bg-gray-800">
        <img
          src="path_to_user_image.jpg"
          alt="User Avatar"
          className=" flex-shrink-0 w-10 h-10 rounded-full border-2 border-gray-700 shadow-lg"
        />
        <div className="text-white">
          <h2 className="text-sm font-bold">Sai Pavan Saketh Desamsetti</h2>
          <p className="text-xs text-white">Employee Experience API & Integration Engineer</p>
          <p className="text-xs text-white">Digital Innovation & Technology</p>
        </div>
      </div>
      <div className="p-2 flex items-center space-x-4 rounded-lg bg-gray-800">
        <img
          src="path_to_user_image.jpg"
          alt="User Avatar"
          className=" flex-shrink-0 w-10 h-10 rounded-full border-2 border-gray-700 shadow-lg"
        />
        <div className="text-white">
          <h2 className="text-sm font-bold">Sai Pavan Saketh Desamsetti</h2>
          <p className="text-xs text-white">Employee Experience API & Integration Engineer</p>
          <p className="text-xs text-white">Digital Innovation & Technology</p>
        </div>
      </div>
      <div className="p-2 flex items-center space-x-4 rounded-lg bg-gray-800">
        <img
          src="path_to_user_image.jpg"
          alt="User Avatar"
          className=" flex-shrink-0 w-10 h-10 rounded-full border-2 border-gray-700 shadow-lg"
        />
        <div className="text-white">
          <h2 className="text-sm font-bold">Sai Pavan Saketh Desamsetti</h2>
          <p className="text-xs text-white">Employee Experience API & Integration Engineer</p>
          <p className="text-xs text-white">Digital Innovation & Technology</p>
        </div>
      </div>
      <div className="p-2 flex items-center space-x-4 rounded-lg bg-gray-800">
        <img
          src="path_to_user_image.jpg"
          alt="User Avatar"
          className=" flex-shrink-0 w-10 h-10 rounded-full border-2 border-gray-700 shadow-lg"
        />
        <div className="text-white">
          <h2 className="text-sm font-bold">Sai Pavan Saketh Desamsetti</h2>
          <p className="text-xs text-white">Employee Experience API & Integration Engineer</p>
          <p className="text-xs text-white">Digital Innovation & Technology</p>
        </div>
      </div>
      <div className="p-2 flex items-center space-x-4 rounded-lg bg-gray-800">
        <img
          src="path_to_user_image.jpg"
          alt="User Avatar"
          className=" flex-shrink-0 w-10 h-10 rounded-full border-2 border-gray-700 shadow-lg"
        />
        <div className="text-white">
          <h2 className="text-sm font-bold">Sai Pavan Saketh Desamsetti</h2>
          <p className="text-xs text-white">Employee Experience API & Integration Engineer</p>
          <p className="text-xs text-white">Digital Innovation & Technology</p>
        </div>
      </div>
        </div>
      </div>
      <div className="p-2 flex items-center space-x-4 border-t border-gray-400">
        <img
          src="path_to_user_image.jpg"
          alt="User Avatar"
          className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-gray-400 shadow-lg"
        />
        <div className="">
          <h2 className="text-md font-bold">Sai Pavan Saketh Desamsetti</h2>
          <p className="text-sm">Employee Experience API & Integration Engineer</p>
          <p className="text-sm">Digital Innovation & Technology</p>
        </div>
      </div>
      <div className="my-4 px-4 w-full">
        <span className="text-md">Your work</span>
        <div className="flex gap-2">
          <div className="flex bg-gray-900 rounded-lg space-x-2 p-2 w-1/2">
          <img
          src="path_to_user_image.jpg"
          alt="User Avatar"
          className=" flex-shrink-0 w-10 h-10 rounded-full border-2 border-gray-700 shadow-lg"
        />
        <div className="text-white">
          <h2 className="text-sm font-bold">Rishabh Shetty</h2>
          <p className="text-xs ">Project Manager</p>
        </div>
          </div>
          <div className="flex bg-gray-900 rounded-lg space-x-2 p-2 w-1/2">
          <img
          src="path_to_user_image.jpg"
          alt="User Avatar"
          className=" flex-shrink-0 w-10 h-10 rounded-full border-2 border-gray-700 shadow-lg"
        />
        <div className="text-white">
          <h2 className="text-sm font-bold">Shilpa Shetty</h2>
          <p className="text-xs ">Work Manager</p>
        </div>
          </div>
        </div>
      </div>
      <button
        className="absolute top-2 right-2 rounded-full p-2 hover:bg-gray-600 transition-colors duration-200"
        onClick={closeMenu}
        aria-label="Close menu"
      >
        <FaTimes className="w-4 h-4" />
      </button>
    </div>
  </div>
)}

    </>
  );
}

export default Header;
