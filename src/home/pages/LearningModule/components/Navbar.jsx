import React from "react";
import { CiSettings } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaInfo } from "react-icons/fa";
import CourseContent from "./info.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleSidebar, toggleSettingBar }) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCourseContentOpen, setIsCourseContentOpen] = useState(false);

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleCourseContent = () => {
    setIsCourseContentOpen(!isCourseContentOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full z-10 top-0">
        <div className="mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center w-80">
              <div className="">Logo</div>
            </div>
            <div className="flex items-center " onClick={toggleSidebar}>
              <div className="border-2 border-gray-400 rounded-md px-3 py-1 cursor-pointer">
                Open
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div onClick={toggleSettingBar} className="cursor-pointer">
                <CiSettings size={25} />
              </div>
              <div onClick={toggleNotification} className="cursor-pointer">
                <IoIosNotifications size={25} />
              </div>
              <div onClick={toggleCourseContent} className="cursor-pointer">
                <FaInfo size={20} />
              </div>
              <div onClick={toggleProfile} className="cursor-pointer">
                <CgProfile size={25} />
              </div>
            </div>
          </div>
        </div>
        {/* Course Info  */}
        {isCourseContentOpen && <CourseContent onClose={toggleCourseContent} />}

        {/* Notification */}
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
                <Link className="text-blue-500 text-sm">Mark All as Read</Link>
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
              <Link href="#" className="block text-center text-blue-500 py-2">
                See All Notifications
              </Link>
            </div>
          </div>
        )}
        {/* Profile */}
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
                      <rect x="6" y="8" width="12" height="8" rx="1"></rect>
                    </svg>
                    <span>Import playground</span>
                  </Link>
                </li>
              </ul>
              <Link href="#" className="block text-center text-blue-500 py-2">
                Sign Out
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
