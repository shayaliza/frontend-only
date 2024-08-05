import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import Points from "./points";
import ProfileIcon from "./profileicon";
import { GiHamburgerMenu } from "react-icons/gi";
import BottomBar from "./bottomBar";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <div className="flex flex-col">
      <header
        className="bg-white fixed py-2 text-lg w-full z-50"
        style={{ boxShadow: "0 6px 16px -1px rgba(0, 0, 0, 0.3)" }}
      >
        <div className="relative mx-auto flex justify-between items-center max-[900px]:min-h-[45px]">
          <div className=" flex items-center">
            <img
              src="/src/assets/icon.svg"
              alt="Logo"
              className="w-32 h-12 object-contain hidden md:block"
            />

            <button
              className="block min-[900px]:hidden ml-2 p-2"
              onClick={toggleMobileMenu}
            >
              <GiHamburgerMenu size={24} />
            </button>
          </div>
          <div className=" flex items-center mr-4">
            <div className="Icons flex items-center min-[900px]:mr-4 justify-end">
              <Points />
              <ProfileIcon />
            </div>
          </div>
        </div>
      </header>
      <div className="flex  overflow-hidden">
        <aside className="fixed top-14 pt-1 left-0 h-full mb-24 bg-[#0a182e] min-w-[220px] flex flex-col max-[900px]:hidden lg:flex transition-all duration-300 z-40 max-w-[220px] w-[250px] overflow-x-hidden overflow-y-scroll">
          <div className="myMenu flex flex-col justify-center mb-4 mt-2">
            <Link
              to="/"
              className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                ${isActive("/") ? "bg-gray-500 " : "hover:bg-gray-700"}`}
            >
              <img
                src="/src/assets/self-growth3.png"
                alt="progress"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                My Progress
              </p>
            </Link>
            <Link
              to="/myfeed"
              className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                ${isActive("/myfeed") ? "bg-gray-500 " : "hover:bg-gray-700"}`}
            >
              <img
                src="/src/assets/self-growth3.png"
                alt="feed"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                My Feed
              </p>
            </Link>
            <Link
              to="/topics"
              className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                ${isActive("/topics") ? "bg-gray-500 " : "hover:bg-gray-700"}`}
            >
              <img
                src="/src/assets/self-growth3.png"
                alt="topics"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                Topics
              </p>
            </Link>
            <Link
              to="/competitions"
              className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                ${
                  isActive("/competitions")
                    ? "bg-gray-500 "
                    : "hover:bg-gray-700"
                }`}
            >
              <img
                src="/src/assets/stage.png"
                alt="competitions"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                Competitions
              </p>
            </Link>
            <Link
              to="/leaderboard"
              className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                ${
                  isActive("/leaderboard")
                    ? "bg-gray-500 "
                    : "hover:bg-gray-700"
                }`}
            >
              <img
                src="/src/assets/leaderboard.png"
                alt="leaderboard"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                Leaderboard
              </p>
            </Link>
            <hr className="border-gray-500 w-[80%] mx-auto" />
          </div>
          <div className="myMenu flex flex-col justify-center mb-4 mt-2">
            <div className="title w-full pl-8 mb-2">
              <h4
                className="text-white uppercase my-1 text-lg font-bold"
                style={{ fontFamily: "Nunito" }}
              >
                Catalog
              </h4>
            </div>
            <Link
              to="/career"
              className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                ${isActive("/career") ? "bg-gray-500 " : "hover:bg-gray-700"}`}
              // className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
            >
              <img
                src="/src/assets/career-choice.png"
                alt="career"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                Career Paths
              </p>
            </Link>
            <Link
              to="/skill"
              className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                ${isActive("/skill") ? "bg-gray-500 " : "hover:bg-gray-700"}`}
              // className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
            >
              <img
                src="/src/assets/career-choice.png"
                alt="career"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                Skill Paths
              </p>
            </Link>
            <Link
              to="/courses"
              className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
              ${isActive("/courses") ? "bg-gray-500 " : "hover:bg-gray-700"}`}
            >
              <img
                src="/src/assets/online-course2.png"
                alt="courses"
                className="w-4 h-4"
              />
              <p
                className={"w-[70%] ml-[10px] "}
                style={{ fontFamily: "Nunito" }}
              >
                Courses
              </p>
            </Link>
            <Link
              to="/projects"
              className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                ${
                  isActive("/projects") ? "bg-gray-500 " : "hover:bg-gray-700"
                }`}
            >
              <img
                src="/src/assets/project-management (2).png"
                alt="projects"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                Projects
              </p>
            </Link>
            {/* <Link
              to="/learningmodule"
              className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                ${
                  isActive("/learningmodule")
                    ? "bg-gray-500 "
                    : "hover:bg-gray-700"
                }`}
            >
              <img
                src="/src/assets/learnmodules.png"
                alt="learnmodules"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                Learn Modules
              </p>
            </Link> */}
            <Link
              to="/assesment"
              className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                ${
                  isActive("/assesment") ? "bg-gray-500 " : "hover:bg-gray-700"
                }`}
            >
              <img
                src="/src/assets/clipboard.png"
                alt="assessment"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                Assessments
              </p>
            </Link>
            <Link
              to="#"
              className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
            >
              <img
                src="/src/assets/deadline.png"
                alt="live events"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                Live Events
              </p>
            </Link>
            <hr className="border-gray-500 w-[80%] mx-auto" />
          </div>
          <div className="myMenu flex flex-col justify-center mb-4 mt-2">
            <div className="title w-full pl-8 mb-2">
              <h4
                className="text-white uppercase my-1 text-lg font-bold"
                style={{ fontFamily: "Nunito" }}
              >
                Profile
              </h4>
            </div>
            <Link
              to="/profile"
              className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
               ${isActive("/profile") ? "bg-gray-500 " : "hover:bg-gray-700"}`}
            >
              <img
                src="/src/assets/account (1).png"
                alt="my profile"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                My Profile
              </p>
            </Link>
            <Link
              to="/editprofile"
              className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                ${
                  isActive("/editprofile")
                    ? "bg-gray-500 "
                    : "hover:bg-gray-700"
                }`}
            >
              <img
                src="/src/assets/edit (1).png"
                alt="edit profile"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                Edit Profile
              </p>
            </Link>
            <Link
              to="#"
              className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
            >
              <img
                src="/src/assets/user (1).png"
                alt="account settings"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                Account Settings
              </p>
            </Link>
            <Link
              to="#"
              className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
            >
              <img
                src="/src/assets/logout (1).png"
                alt="logout"
                className="w-4 h-4"
              />
              <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
                Logout
              </p>
            </Link>
          </div>
          <button className="bg-[#7933ff] text-white rounded-lg py-2 px-4 mb-4 w-4/5 mx-auto">
            Contact Us
          </button>
        </aside>
        {/* Mobile menu */}
        <div
          className={`fixed top-2 left-0 w-full h-full bg-[#0a182e] md:hidden transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{
            zIndex: 40,
            width: isMobileMenuOpen ? "60vw" : "0", // 60% of the viewport width
            maxWidth: "60vw", // Ensure it does not exceed 60% of the viewport width
            overflowY: "auto", // Add this for vertical scrolling
          }}
        >
          <div className="flex flex-col p-4">
            <button
              className="self-end text-white text-2xl"
              onClick={toggleMobileMenu}
            >
              &times;
            </button>
            <div className="myMenu flex flex-col justify-center mb-4 mt-2">
              <Link
                to="/"
                className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                  ${isActive("/") ? "bg-gray-500 " : "hover:bg-gray-700"}`}
                onClick={toggleMobileMenu}
              >
                <img
                  src="/src/assets/self-growth3.png"
                  alt="progress"
                  className="w-4 h-4"
                />
                <p
                  className="w-[70%] ml-[10px]"
                  style={{ fontFamily: "Nunito" }}
                >
                  My Progress
                </p>
              </Link>
              <Link
                onClick={toggleMobileMenu}
                to="/myfeed"
                className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                  ${
                    isActive("/myfeed") ? "bg-gray-500 " : "hover:bg-gray-700"
                  }`}
              >
                <img
                  src="/src/assets/self-growth3.png"
                  alt="feed"
                  className="w-4 h-4"
                />
                <p
                  className="w-[70%] ml-[10px]"
                  style={{ fontFamily: "Nunito" }}
                >
                  My Feed
                </p>
              </Link>
              <Link
                onClick={toggleMobileMenu}
                to="#"
                className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
              >
                <img
                  src="/src/assets/self-growth3.png"
                  alt="topics"
                  className="w-4 h-4"
                />
                <p
                  className="w-[70%] ml-[10px]"
                  style={{ fontFamily: "Nunito" }}
                >
                  Topics
                </p>
              </Link>
              <Link
                onClick={toggleMobileMenu}
                to="/competitions"
                className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                ${
                  isActive("/competitions")
                    ? "bg-gray-500 "
                    : "hover:bg-gray-700"
                }`}
              >
                <img
                  src="/src/assets/stage.png"
                  alt="competitions"
                  className="w-4 h-4"
                />
                <p
                  className="w-[70%] ml-[10px]"
                  style={{ fontFamily: "Nunito" }}
                >
                  Competitions
                </p>
              </Link>
              <Link
                onClick={toggleMobileMenu}
                to="/leaderboard"
                className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
               ${
                 isActive("/leaderboard") ? "bg-gray-500 " : "hover:bg-gray-700"
               }`}
              >
                <img
                  src="/src/assets/leaderboard.png"
                  alt="leaderboard"
                  className="w-4 h-4"
                />
                <p
                  className="w-[70%] ml-[10px]"
                  style={{ fontFamily: "Nunito" }}
                >
                  Leaderboard
                </p>
              </Link>
              <hr className="border-gray-500 w-[80%] mx-auto" />
            </div>
            <div className="myMenu flex flex-col justify-center mb-4 mt-2">
              <div className="title w-full pl-8 mb-2">
                <h4
                  className="text-white uppercase my-1 text-lg font-bold"
                  style={{ fontFamily: "Nunito" }}
                >
                  Catalog
                </h4>
              </div>
              <Link
                onClick={toggleMobileMenu}
                to="/career"
                className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                 ${isActive("/career") ? "bg-gray-500 " : "hover:bg-gray-700"}`}
              >
                <img
                  src="/src/assets/career-choice.png"
                  alt="career"
                  className="w-4 h-4"
                />
                <p
                  className="w-[70%] ml-[10px]"
                  style={{ fontFamily: "Nunito" }}
                >
                  Career Paths
                </p>
              </Link>
              <Link
                onClick={toggleMobileMenu}
                to="/skill"
                className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                 ${isActive("/skill") ? "bg-gray-500 " : "hover:bg-gray-700"}`}
              >
                <img
                  src="/src/assets/career-choice.png"
                  alt="career"
                  className="w-4 h-4"
                />
                <p
                  className="w-[70%] ml-[10px]"
                  style={{ fontFamily: "Nunito" }}
                >
                  Skill Paths
                </p>
              </Link>
              <Link
                onClick={toggleMobileMenu}
                to="/courses"
                className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                  ${
                    isActive("/courses") ? "bg-gray-500 " : "hover:bg-gray-700"
                  }`}
              >
                <img
                  src="/src/assets/online-course2.png"
                  alt="courses"
                  className="w-4 h-4"
                />
                <p
                  className="w-[70%] ml-[10px]"
                  style={{ fontFamily: "Nunito" }}
                >
                  Courses
                </p>
              </Link>
              <Link
                onClick={toggleMobileMenu}
                to="/projects"
                className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                  ${
                    isActive("/projects") ? "bg-gray-500 " : "hover:bg-gray-700"
                  }`}
              >
                <img
                  src="/src/assets/project-management (2).png"
                  alt="projects"
                  className="w-4 h-4"
                />
                <p
                  className="w-[70%] ml-[10px]"
                  style={{ fontFamily: "Nunito" }}
                >
                  Projects
                </p>
              </Link>
              {/* <Link
                onClick={toggleMobileMenu}
                to="/learningmodule"
                className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
              >
                <img
                  src="/src/assets/learnmodules.png"
                  alt="learningmodule"
                  className="w-4 h-4"
                />
                <p
                  className="w-[70%] ml-[10px]"
                  style={{ fontFamily: "Nunito" }}
                >
                  Learn Modules
                </p>
              </Link> */}
              <Link
                onClick={toggleMobileMenu}
                to="/assesment"
                className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                  ${
                    isActive("/assesment")
                      ? "bg-gray-500 "
                      : "hover:bg-gray-700"
                  }`}
              >
                <img
                  src="/src/assets/clipboard.png"
                  alt="assessment"
                  className="w-4 h-4"
                />
                <p
                  className="w-[70%] ml-[10px]"
                  style={{ fontFamily: "Nunito" }}
                >
                  Assessments
                </p>
              </Link>
              <Link
                onClick={toggleMobileMenu}
                to="#"
                className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
              >
                <img
                  src="/src/assets/deadline.png"
                  alt="live events"
                  className="w-4 h-4"
                />
                <p
                  className="w-[70%] ml-[10px]"
                  style={{ fontFamily: "Nunito" }}
                >
                  Live Events
                </p>
              </Link>
              <hr className="border-gray-500 w-[80%] mx-auto" />
            </div>
            <div className="myMenu flex flex-col justify-center mb-4 mt-2">
              <div className="title w-full pl-8 mb-2">
                <h4
                  className="text-white uppercase my-1 text-lg font-bold"
                  style={{ fontFamily: "Nunito" }}
                >
                  Profile
                </h4>
              </div>
              <Link
                onClick={toggleMobileMenu}
                to="/profile"
                className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                 ${
                   isActive("/profile") ? "bg-gray-500 " : "hover:bg-gray-700"
                 }`}
              >
                <img
                  src="/src/assets/account (1).png"
                  alt="my profile"
                  className="w-4 h-4"
                />
                <p
                  className="w-[70%] ml-[10px]"
                  style={{ fontFamily: "Nunito" }}
                >
                  My Profile
                </p>
              </Link>
              <Link
                onClick={toggleMobileMenu}
                to="/editprofile"
                className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                 ${
                   isActive("/editprofile")
                     ? "bg-gray-500 "
                     : "hover:bg-gray-700"
                 }`}
              >
                <img
                  src="/src/assets/edit (1).png"
                  alt="edit profile"
                  className="w-4 h-4"
                />
                <p
                  className="w-[70%] ml-[10px]"
                  style={{ fontFamily: "Nunito" }}
                >
                  Edit Profile
                </p>
              </Link>
              <Link
                onClick={toggleMobileMenu}
                to="#"
                className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
              >
                <img
                  src="/src/assets/user (1).png"
                  alt="account settings"
                  className="w-4 h-4"
                />
                <p
                  className="w-[70%] ml-[10px]"
                  style={{ fontFamily: "Nunito" }}
                >
                  Account Settings
                </p>
              </Link>
              <Link
                onClick={toggleMobileMenu}
                to="#"
                className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
              >
                <img
                  src="/src/assets/logout (1).png"
                  alt="logout"
                  className="w-4 h-4"
                />
                <p
                  className="w-[70%] ml-[10px]"
                  style={{ fontFamily: "Nunito" }}
                >
                  Logout
                </p>
              </Link>
            </div>
            <button className="bg-[#7933ff] text-white rounded-lg py-2 px-4 mb-4 w-4/5 mx-auto">
              Contact Us
            </button>
          </div>
        </div>
        {/* </div> */}
        <div
          className={`min-[900px]:ml-52 flex-1 mt-16 mb-10 md:mb-0  overflow-y-auto ${
            isMobileMenuOpen ? "blur  " : ""
          } `}
        >
          <Outlet />
        </div>
      </div>

      <BottomBar />
    </div>
  );
}

export default Navbar;
