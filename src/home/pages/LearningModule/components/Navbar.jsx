import React, { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import SettingBar from "./Settingbar.jsx";
import Popup from "./Popup.jsx";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSettingBarOpen, setIsSettingBarOpen] = useState(false);
  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };
  const toggleSettingBar = () => {
    setIsSettingBarOpen(!isSettingBarOpen); // Toggle setting bar visibility
  };
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full z-10 top-0">
        <div className="mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center w-80">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="/src/assets/logo-black.png"
                  alt="Logo"
                />
              </div>
            </div>
            <div className="flex items-center justify-center flex-grow">
              <button
                className="ml-2 flex items-center text-gray-800 px-3 py-2 rounded-md text-sm font-medium border border-gray-300 hover:border-green-500 transition-colors duration-300"
                onClick={toggleSidebar}
              >
                Open
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Link
                  href="#"
                  className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium relative"
                >
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d=""
                      fill="#0F0F0F"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d=""
                      fill="#0F0F0F"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d=""
                      fill="#0F0F0F"
                    ></path>
                  </svg>
                </Link>
              </div>
              <div className="relative flex justify-between items-center">
                <i
                  onClick={togglePopup}
                  className="fa fa-question-circle py-2 px-3 cursor-pointer"
                  style={{ fontSize: "34px" }}
                  title="question"
                ></i>
                {isPopupOpen && <Popup onClose={togglePopup} />}
                <img
                  src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/000000/external-setting-advertising-xnimrodx-lineal-gradient-xnimrodx-3.png"
                  onClick={toggleSettingBar}
                  className="w-1/6 h-1/6 py-2 px-3 cursor-pointer"
                  alt="Setting"
                  title="Setting"
                />
                <div
                  className="relative notification_bell cursor-pointer py-2 px-3"
                  onClick={toggleNotification}
                >
                  <div className="">
                    <img
                      src="/src/assets/bell.svg"
                      alt="notification"
                      className="notification_bell w-8 h-8 ml-1"
                      title="notification"
                    />
                    <span className="absolute top-0 right-0 transform -translate-y-2/5 text-white rounded-full text-xs font-bold px-2 py-1">
                      3
                    </span>
                  </div>
                  {isNotificationOpen && (
                    <div
                      id="notification-popup"
                      className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-80 z-20"
                    >
                      <div className="p-4">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-700">
                            Notifications
                          </span>
                          <Link className="text-blue-500 text-sm">
                            Mark All as Read
                          </Link>
                        </div>
                        <ul className="mt-2">
                          <li className="px-4 py-2 border-b border-gray-200 flex justify-between">
                            <span>Notification 1</span>
                            <span className="text-xs text-gray-500">
                              Today at 12:19 AM
                            </span>
                          </li>
                          <li className="px-4 py-2 border-b border-gray-200 flex justify-between">
                            <span>Notification 2</span>
                            <span className="text-xs text-gray-500">
                              Today at 1:19 AM
                            </span>
                          </li>
                          <li className="px-4 py-2 flex justify-between">
                            <span>Notification 3</span>
                            <span className="text-xs text-gray-500">
                              Today at 2:19 AM
                            </span>
                          </li>
                        </ul>
                        <Link
                          href="#"
                          className="block text-center text-blue-500 py-2"
                        >
                          See All Notifications
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <i
                  className="fa fa-info-circle py-2 px-3 cursor-pointer"
                  style={{ fontSize: "34px" }}
                  title="info"
                ></i>
                <i
                  className="fa fa-arrow-circle-left py-2 px-3 cursor-pointer"
                  style={{ fontSize: "34px" }}
                  title="back"
                ></i>
                <div
                  className="relative profile-icon cursor-pointer py-2 px-3"
                  onClick={toggleProfile}
                >
                  <Link
                    href="#"
                    className="text-gray-800 px-3 rounded-md text-sm font-medium"
                    id="profile-icon"
                    title="profile"
                  >
                    <svg
                      width="34px"
                      height="34px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </Link>
                  {isProfileOpen && (
                    <div
                      id="profile-popup"
                      className="absolute right-0 mt-0 bg-white border border-gray-300 rounded-lg shadow-lg w-80 z-20"
                    >
                      <div className="p-4">
                        <ul className="mt-0">
                          <li className="px-4 py-2 border-b border-gray-200 flex justify-between items-center hover-blue-500 checkhover">
                            <Link className="flex items-center">
                              <svg
                                stroke="currentColor"
                                className="w-5 h-5 mr-2"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="20"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                              </svg>
                              <span>Profile</span>
                            </Link>
                          </li>
                          <li className="px-4 py-2 border-b border-gray-200 flex justify-between items-center hover-blue-500">
                            <Link className="flex items-center">
                              <svg
                                stroke="currentColor"
                                className="w-5 h-5 mr-2"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="20"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle cx="12" cy="8" r="7"></circle>
                                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                              </svg>
                              <span>Upgrade to Pro</span>
                            </Link>
                          </li>
                          <li className="px-4 py-2 border-b border-gray-200 flex justify-between items-center hover-blue-500">
                            <Link className="flex items-center">
                              <svg
                                stroke="currentColor"
                                className="w-5 h-5 mr-2"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 1024 1024"
                                height="20"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d=""></path>
                              </svg>
                              <span>My Playgrounds</span>
                            </Link>
                          </li>
                          <li className="px-4 py-2 border-b border-gray-200 flex justify-between items-center hover-blue-500">
                            <Link className="flex items-center">
                              <svg
                                stroke="currentColor"
                                className="w-5 h-5 mr-2"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="20"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <polyline points="8 17 12 21 16 17"></polyline>
                                <line x1="12" y1="12" x2="12" y2="21"></line>
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                              </svg>
                              <span>My Account</span>
                            </Link>
                          </li>
                          <li className="px-4 py-2 border-b border-gray-200 flex justify-between items-center hover-blue-500">
                            <Link className="flex items-center">
                              <svg
                                stroke="currentColor"
                                className="w-5 h-5 mr-2"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="20"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9 21H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h4m10 5h4a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-4m-4-9v4m0 0v4m0-4h4m-4 0H9"></path>
                                <path d="M16.72 11.06A5 5 0 0 0 12 9a5 5 0 0 0-4.72 3.06"></path>
                                <circle cx="12" cy="4" r="2"></circle>
                              </svg>
                              <span>New playground</span>
                            </Link>
                          </li>
                          <li className="px-4 py-2 flex justify-between items-center hover-blue-500">
                            <Link className="flex items-center">
                              <svg
                                stroke="currentColor"
                                className="w-5 h-5 mr-2"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="20"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M6 3v3M6 21v-3"></path>
                                <path d="M18 3v3M18 21v-3"></path>
                                <path d="M3 6h3m12 0h3"></path>
                                <path d="M3 18h3m12 0h3"></path>
                                <rect
                                  x="6"
                                  y="8"
                                  width="12"
                                  height="8"
                                  rx="1"
                                ></rect>
                              </svg>
                              <span>Import playground</span>
                            </Link>
                          </li>
                        </ul>
                        <Link
                          href="#"
                          className="block text-center text-blue-500 py-2"
                        >
                          Sign Out
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />{" "}
      {/* Add the Sidebar component */}
      <SettingBar
        isOpen={isSettingBarOpen}
        closeSettingBar={() => setIsSettingBarOpen(false)}
      />{" "}
      {/* Add the Setting Bar component */}
    </>
  );
};

export default Navbar;
