import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoIosNotifications, IoIosNotificationsOutline } from "react-icons/io";
import Post from "./../../assets/bottomNav/post.png";
import Jobs from "./../../assets/bottomNav/jobs.png";
import Surprize from "./../../assets/bottomNav/surprice.png";
import Catelogue from "./../../assets/bottomNav/catelog.png";
import home from "./../../assets/bottomNav/home.png";
import datasnaplogo from "../../../datasnap/assets/rsc/datasnap-logo.png"
import { ArrowLeftCircleIcon, Book, MessageCircleIcon, Pen } from "lucide-react";
import { FaBlog, FaBook, FaMessage } from "react-icons/fa6";

function BottomBar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const navigate = useNavigate();
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const handleMoreOptionOn = () => {
    navigate("/dashboard/catalog")
    setShowMoreOptions(true);
  };

  const handleMoreOptionOff = () => {
    navigate("/dashboard/profile")
    setShowMoreOptions(false);
  }

  return (
    <div className="bottombar z-20 fixed bottom-0 left-0 w-full h-16 bg-white min-[900px]:hidden border-t border-gray-200">
      {!showMoreOptions ? (
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
          <Link
            to={"/dashboard/profile"}
            className={`inline-flex flex-col items-center justify-center px-5 "
              ${
                isActive("/dashboard/profile")
                  ? "bg-gray-400 rounded-2xl text-white"
                  : "hover:bg-gray-700 "
              }`}
          >
            <img src={home} alt="progress" className="w-6 h-6" />
            <span className="text-sm">Home</span>
          </Link>
          <Link
            to={"/dashboard/myfeed"}
            className={`inline-flex flex-col items-center justify-center px-5 "
            ${
              isActive("/dashboard/myfeed")
                ? "bg-gray-400 rounded-2xl text-white"
                : "hover:bg-gray-700 "
            }`}
          >
            <img src={Post} alt="progress" className="w-6 h-6" />
            <span className="text-sm text-gray-600 group-hover:text-pink-600">
              Posts
            </span>
          </Link>
          <button
            onClick={handleMoreOptionOn}
            className={`inline-flex flex-col items-center justify-center px-5 "
           ${
             isActive("/dashboard/catalog")
               ? "bg-gray-400 rounded-2xl text-white"
               : "hover:bg-gray-700 "
           }`}
          >
            <img src={Catelogue} alt="leader" className="w-6 h-6" />
            <span className="text-sm text-gray-600 group-hover:text-pink-600">
              More
            </span>
          </button>
          <Link
            to={"/dashboard/job"}
            className={`inline-flex flex-col items-center justify-center px-5 "
          ${
            isActive("/dashboard/job")
              ? "bg-gray-400 rounded-2xl text-white"
              : "hover:bg-gray-700 "
          }`}
          >
            <img src={Jobs} alt="progress" className="w-6 h-6" />
            <span className="text-sm text-gray-600 group-hover:text-pink-600">
              Jobs
            </span>
          </Link>
          <Link
            to={"/createsnap"}
            className={`inline-flex flex-col items-center justify-center px-5 "
          ${
            isActive("/projects")
              ? "bg-gray-400 rounded-2xl text-white"
              : "hover:bg-gray-700 "
          }`}
          >
            <img src={Surprize} alt="leader" className="w-6 h-6" />
            <span className="text-sm text-gray-600 group-hover:text-pink-600">
              Snappie
            </span>
          </Link>
        </div>
      ) : (
        <div className="flex justify-around items-center h-full font-medium">
          <button
            onClick={handleMoreOptionOff}
            className="inline-flex flex-col items-center justify-center px-5 border-r-2"
          >
            <ArrowLeftCircleIcon alt="progress" className="w-6 h-6" />
            <span className="text-sm text-gray-600 group-hover:text-pink-600">
              Home
            </span>
          </button>
          <Link
            to={"/datasnap"}
            className={`inline-flex flex-col items-center justify-center px-5 "
              ${
                isActive("/datasnap")
                  ? "bg-gray-400 rounded-2xl text-white"
                  : "hover:bg-gray-700 "
              }`}
          >
            <Pen className="w-6 h-6" />
            <span className="text-sm">DS</span>
          </Link>
          <Link
            to={"/managesnap"}
            className={`inline-flex flex-col items-center justify-center px-5 "
              ${
                isActive("/managesnap")
                  ? "bg-gray-400 rounded-2xl text-white"
                  : "hover:bg-gray-700 "
              }`}
          >
            <MessageCircleIcon className="w-6 h-6" />
            <span className="text-sm">MS</span>
          </Link>
          <Link
            to={"/createsnap"}
            className={`inline-flex flex-col items-center justify-center px-5 "
              ${
                isActive("/createsnap")
                  ? "bg-gray-400 rounded-2xl text-white"
                  : "hover:bg-gray-700 "
              }`}
          >
            <Book className="w-6 h-6" />
            <span className="text-sm">CS</span>
          </Link>
          
        </div>
      )}
    </div>
  );
}

export default BottomBar;