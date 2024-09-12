import React from "react";
import {
  FaHome,
  FaCompass,
  FaPenAlt,
  FaBookmark,
  FaEllipsisH,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
  FaTimes,
} from "react-icons/fa";
import trendingimg from "../assets/rsc/icons8-trending-topic-25.png";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();

  const getLinkClass = (path) =>
    `flex items-center mb-2 p-2 rounded-lg transition-all ${
      location.pathname === path ? "bg-gray-700" : "hover:bg-gray-700"
    }`;

  return (
    <div className="">
      <div
        className={`hidden lg:flex lg:flex-col lg:justify-between sticky top-0 h-full bg-black text-white p-6 shadow-lg `}
      >
        <div>
          <div className={getLinkClass("/home")}>
            <FaHome className="w-6 h-6 mr-4 text-blue-400" />
            <Link to="home" className="text-lg font-medium">
              My Feed
            </Link>
          </div>
          <div className={getLinkClass("/explore")}>
            <FaCompass className="w-6 h-6 mr-4 text-blue-400" />
            <Link to="explore" className="text-lg font-medium">
              Explore
            </Link>
          </div>
          <div className={getLinkClass("/drafts")}>
            <FaPenAlt className="w-6 h-6 mr-4 text-blue-400" />
            <Link to="drafts" className="text-lg font-medium">
              Drafts
            </Link>
          </div>
          <div className={getLinkClass("/bookmarks")}>
            <FaBookmark className="w-6 h-6 mr-4 text-blue-400" />
            <Link to="bookmarks" className="text-lg font-medium">
              Bookmarks
            </Link>
          </div>
          <div className={getLinkClass("/more")}>
            <FaEllipsisH className="w-6 h-6 mr-4 text-blue-400" />
            <Link to="detail" className="text-lg font-medium">
              More
            </Link>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xl font-semibold">Trending Tags</p>
            <img src={trendingimg} alt="Trending" className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <p className="flex justify-between p-2 hover:bg-gray-700 rounded-lg transition-all">
              <a href="" className="text-md">
                Javascript
              </a>
              <span className="text-sm text-gray-400">+205</span>
            </p>
            <p className="flex justify-between p-2 hover:bg-gray-700 rounded-lg transition-all">
              <a href="" className="text-md">
                React
              </a>
              <span className="text-sm text-gray-400">+93</span>
            </p>
            <p className="flex justify-between p-2 hover:bg-gray-700 rounded-lg transition-all">
              <a href="" className="text-md">
                CSS
              </a>
              <span className="text-sm text-gray-400">+105</span>
            </p>
            <p className="flex justify-between p-2 hover:bg-gray-700 rounded-lg transition-all">
              <a href="" className="text-md">
                Python
              </a>
              <span className="text-sm text-gray-400">+66</span>
            </p>
            <p className="flex justify-between p-2 hover:bg-gray-700 rounded-lg transition-all">
              <a href="" className="text-md">
                Vue
              </a>
              <span className="text-sm text-gray-400">+40</span>
            </p>
            <p className="p-2 hover:bg-gray-700 rounded-lg transition-all">
              <a href="" className="text-md">
                Show more
              </a>
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-500 text-sm">&copy; 2022 Datasnap</p>
          <div className="flex space-x-4 mt-4">
            <a href="" className="hover:text-blue-400 transition-colors">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="" className="hover:text-blue-400 transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="" className="hover:text-blue-400 transition-colors">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="" className="hover:text-blue-400 transition-colors">
              <FaDiscord className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      {/* <div
        className={`lg:hidden fixed inset-0 w-2/3 bg-black left-0 z-50 overflow-y-auto transition-transform duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } 
          }`}
      >
        <div
          className="w-4 h-4 text-white absolute right-2 top-2"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </div>
        <div className="flex flex-col justify-between text-white mt-8">
          <div>
            <div className={getLinkClass("/home")}>
              <FaHome className="w-6 h-6 mr-4 text-blue-400" />
              <Link to="home" className="text-lg font-medium">
                My Feed
              </Link>
            </div>
            <div className={getLinkClass("/explore")}>
              <FaCompass className="w-6 h-6 mr-4 text-blue-400" />
              <Link to="explore" className="text-lg font-medium">
                Explore
              </Link>
            </div>
            <div className={getLinkClass("/drafts")}>
              <FaPenAlt className="w-6 h-6 mr-4 text-blue-400" />
              <Link to="drafts" className="text-lg font-medium">
                Drafts
              </Link>
            </div>
            <div className={getLinkClass("/bookmarks")}>
              <FaBookmark className="w-6 h-6 mr-4 text-blue-400" />
              <Link to="bookmarks" className="text-lg font-medium">
                Bookmarks
              </Link>
            </div>
            <div className={getLinkClass("/more")}>
              <FaEllipsisH className="w-6 h-6 mr-4 text-blue-400" />
              <Link to="/ds/detail" className="text-lg font-medium">
                More
              </Link>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xl font-semibold">Trending Tags</p>
              <img src={trendingimg} alt="Trending" className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <p className="flex justify-between p-2 hover:bg-gray-700 rounded-lg transition-all">
                <a href="" className="text-md">
                  Javascript
                </a>
                <span className="text-sm text-gray-400">+205</span>
              </p>
              <p className="flex justify-between p-2 hover:bg-gray-700 rounded-lg transition-all">
                <a href="" className="text-md">
                  React
                </a>
                <span className="text-sm text-gray-400">+93</span>
              </p>
              <p className="flex justify-between p-2 hover:bg-gray-700 rounded-lg transition-all">
                <a href="" className="text-md">
                  CSS
                </a>
                <span className="text-sm text-gray-400">+105</span>
              </p>
              <p className="flex justify-between p-2 hover:bg-gray-700 rounded-lg transition-all">
                <a href="" className="text-md">
                  Python
                </a>
                <span className="text-sm text-gray-400">+66</span>
              </p>
              <p className="flex justify-between p-2 hover:bg-gray-700 rounded-lg transition-all">
                <a href="" className="text-md">
                  Vue
                </a>
                <span className="text-sm text-gray-400">+40</span>
              </p>
              <p className="p-2 hover:bg-gray-700 rounded-lg transition-all">
                <a href="" className="text-md">
                  Show more
                </a>
              </p>
            </div>
          </div>
          <div className="mt-4 absolute bottom-2 left-2">
            <p className="text-gray-500 text-sm">&copy; 2022 Datasnap</p>
            <div className="flex space-x-4 mt-4">
              <a href="" className="hover:text-blue-400 transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="" className="hover:text-blue-400 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="" className="hover:text-blue-400 transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="" className="hover:text-blue-400 transition-colors">
                <FaDiscord className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Sidebar;
