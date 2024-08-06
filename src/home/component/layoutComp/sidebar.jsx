import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isActive }) => {
  return (
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
          <p className={"w-[70%] ml-[10px] "} style={{ fontFamily: "Nunito" }}>
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
  );
};

export default Sidebar;
