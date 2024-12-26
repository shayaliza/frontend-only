import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { SearchIcon, UserIcon, BellIcon } from "@heroicons/react/outline";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  FaUserAlt,
  FaPalette,
  FaCommentDots,
  FaLock,
  FaUsers,
  FaExclamationCircle,
} from "react-icons/fa";
import { FiImage, FiFileText, FiLink, FiList } from 'react-icons/fi';
import img1 from "../../assets/man1.jpg";
import img2 from "../../assets/man2.jpg";
import img3 from "../../assets/man3.jpg";
import { useTheme } from "../../../DarkMode/ThemeProvider";

function Profile() {
  const menuItems = [
    {
      icon: <FaUserAlt className="text-xl" />,
      label: "Customer details",
      description: "Save and find important customer details",
      link: "/customer-details",
    },
    {
      icon: <FaPalette className="text-xl" />,
      label: "Theme",
      description: "Default",
      customIconStyle: "bg-gradient-to-r from-purple-500 to-blue-500",
      link: "/theme",
    },
    {
      icon: <FaCommentDots className="text-xl" />,
      label: "Chat controls",
      link: "/chat-controls",
    },
    {
      icon: <FaLock className="text-xl" />,
      label: "Privacy and safety",
      link: "/privacy",
    },
    {
      icon: <FaUsers className="text-xl" />,
      label: "Create a group chat",
      link: "/group-chat",
    },
    {
      icon: <FaExclamationCircle className="text-xl" />,
      label: "Something isn't working",
      link: "/support",
    },
  ];
  const [activeTab, setActiveTab] = useState('Images');

  const tabs = [
    { name: 'Images', icon: <FiImage className="text-2xl" /> },
    { name: 'Documents', icon: <FiFileText className="text-2xl"/> },
    { name: 'Links', icon: <FiLink className="text-2xl" /> },
    { name: 'Snaplist', icon: <FiList className="text-2xl"/> },
  ];

  const images = [
   img1,
   img2,
   img3,
   img1,
   img2,
   img3,
   img1,
   img2,
   img3,
   img1,
   img2,
   img3,
   img1,
   img2,
   img3,
  ];

  const documents = [
    'Document 1',
    'Document 2',
    'Document 3',
  ];

  const links = [
    'https://example.com/link1',
    'https://example.com/link2',
    'https://example.com/link3',
  ];

  const snaplist = [
    'Snap 1',
    'Snap 2',
    'Snap 3',
  ];
  const [profileInfo, setProfileInfo] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const {theme} = useTheme();

  useEffect(() => {
    const fetchProfileData = async () => {
      const { img, name } = location.state || {};
      setProfileInfo({
        name: name || `${id}`,
        img: img || "(link unavailable)",
      });
    };
    fetchProfileData();
  }, [id, location.state]);

  return (
    <div className={`${theme == 'dark' ? "text-gray-300" : "text-gray-700"} h-screen overflow-auto`}>
      {profileInfo && (
        <div className="p-8 w-full">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-6">
              {profileInfo.img ? (
                <img
                  src={profileInfo.img}
                  alt="Profile"
                  className="w-28 h-28 rounded-full object-cover border-2 border-gray-500"
                />
              ) : (
                <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-full text-gray-500">
                  N/A
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-xl font-semibold">
                  {profileInfo.name}
                </span>
                <span className="text-lg">Designation</span>
              </div>
            </div>
            <div className="flex justify-around w-full pt-4 space-x-2">
              <div className="flex flex-col items-center space-y-2">
                <UserIcon className="w-6 h-6 transition-transform transform hover:scale-110 cursor-pointer" />
                <span className="text-sm">Profile</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <SearchIcon className="w-6 h-6 transition-transform transform hover:scale-110 cursor-pointer" />
                <span className="text-sm">Search</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <BellIcon className="w-6 h-6 transition-transform transform hover:scale-110 cursor-pointer" />
                <span className="text-sm">Mute</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <BsThreeDots className="w-6 h-6 transition-transform transform hover:scale-110 cursor-pointer" />
                <span className="text-sm">Options</span>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="">
        {menuItems.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="flex items-center justify-between py-2 px-2 mx-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <div className={`p-2 ${item.customIconStyle} rounded-full`}>
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm font-medium">{item.label}</h3>
                {item.description && (
                  <p className="text-xs">{item.description}</p>
                )}
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full overflow-auto">
      <div className="flex justify-between p-2">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`flex justify-center items-center text-center py-2 px-4 border-b-2 ${
              activeTab === tab.name ? 'border-blue-600 ' : 'border-transparent text-gray-400'
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.icon}
          </button>
        ))}
      </div>
      <div className="">
        {activeTab === 'Images' && (
          <div className="grid grid-cols-3">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-28 object-fill"
              />
            ))}
          </div>
        )}
        {activeTab === 'Documents' && (
          <div className="flex flex-col gap-4">
            {documents.map((doc, index) => (
              <div key={index} className="p-4 mx-2 bg-gray-300 dark:bg-gray-700 rounded-lg">
                {doc}
              </div>
            ))}
          </div>
        )}
        {activeTab === 'Links' && (
          <div className="flex flex-col gap-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 mx-2 bg-gray-300 dark:bg-gray-700 rounded-lg text-blue-600"
              >
                {link}
              </a>
            ))}
          </div>
        )}
        {activeTab === 'Snaplist' && (
          <div className="flex flex-col gap-4">
            {snaplist.map((snap, index) => (
              <div key={index} className="p-4 mx-2 bg-gray-300 dark:bg-gray-700 rounded-lg">
                {snap}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
      <button
      onClick={() => navigate(-1)}
      className="absolute top-6 left-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-gray-700"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414L9.414 10l3.293 3.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export default Profile;
