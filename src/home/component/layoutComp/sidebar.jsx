import React from "react";
import { Link } from "react-router-dom";
import selfGrowth from "./../../assets/self-growth3.png";
import stage from "./../../assets/stage.png";
import leaderboard from "./../../assets/leaderboard.png";
import careerchoice from "./../../assets/career-choice.png";
import onlineCourse from "./../../assets/online-course2.png";
import productmanagement from "./../../assets/project-management (2).png";
import clipboard from "./../../assets/clipboard.png";
import deadline from "./../../assets/deadline.png";
import account from "./../../assets/account (1).png";
import user from "./../../assets/user (1).png";
import edit from "./../../assets/edit (1).png";
import logoutImage from "./../../assets/logout (1).png";
import { useDispatch } from "react-redux";
import { logout } from "../../../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { clearMailData } from "../../../features/mail/mailSlice";

const Sidebar = ({ isActive }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearMailData());
    navigate("/");
  };
  return (
    <aside className="fixed top-14 pt-1 left-0 h-full mb-24 bg-[#0a182e] min-w-[220px] flex flex-col max-[900px]:hidden lg:flex transition-all duration-300 z-40 max-w-[220px] w-[250px] overflow-x-hidden overflow-y-scroll">
      <div className="myMenu flex flex-col justify-center mb-4 mt-2">
        <Link
          to="/dashboard/progress"
          className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                ${
                  isActive("/dashboard/progress")
                    ? "bg-gray-500 "
                    : "hover:bg-gray-700"
                }`}
        >
          <img src={selfGrowth} alt="progress" className="w-4 h-4" />
          <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
            My Progress
          </p>
        </Link>
        <Link
          to="/dashboard/myfeed"
          className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                ${
                  isActive("/dashboard/myfeed")
                    ? "bg-gray-500 "
                    : "hover:bg-gray-700"
                }`}
        >
          <img src={selfGrowth} alt="feed" className="w-4 h-4" />
          <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
            My Feed
          </p>
        </Link>
        <Link
          to="/dashboard/topics"
          className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                ${
                  isActive("/dashboard/topics")
                    ? "bg-gray-500 "
                    : "hover:bg-gray-700"
                }`}
        >
          <img src={selfGrowth} alt="topics" className="w-4 h-4" />
          <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
            Topics
          </p>
        </Link>
        <Link
          to="/dashboard/competitions"
          className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                ${
                  isActive("/dashboard/competitions")
                    ? "bg-gray-500 "
                    : "hover:bg-gray-700"
                }`}
        >
          <img src={stage} alt="competitions" className="w-4 h-4" />
          <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
            Competitions
          </p>
        </Link>
        <Link
          to="/dashboard/leaderboard"
          className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                ${
                  isActive("/dashboard/leaderboard")
                    ? "bg-gray-500 "
                    : "hover:bg-gray-700"
                }`}
        >
          <img src={leaderboard} alt="leaderboard" className="w-4 h-4" />
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
          to="/dashboard/career"
          className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                ${
                  isActive("/dashboard/career")
                    ? "bg-gray-500 "
                    : "hover:bg-gray-700"
                }`}
          // className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
        >
          <img src={careerchoice} alt="career" className="w-4 h-4" />
          <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
            Career Paths
          </p>
        </Link>
        <Link
          to="/dashboard/skill"
          className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                ${
                  isActive("/dashboard/skill")
                    ? "bg-gray-500 "
                    : "hover:bg-gray-700"
                }`}
          // className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
        >
          <img src={careerchoice} alt="career" className="w-4 h-4" />
          <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
            Skill Paths
          </p>
        </Link>
        <Link
          to="/dashboard/courses"
          className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
              ${
                isActive("/dashboard/courses")
                  ? "bg-gray-500 "
                  : "hover:bg-gray-700"
              }`}
        >
          <img src={onlineCourse} alt="courses" className="w-4 h-4" />
          <p className={"w-[70%] ml-[10px] "} style={{ fontFamily: "Nunito" }}>
            Courses
          </p>
        </Link>
        <Link
          to="/dashboard/projects"
          className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                ${
                  isActive("/dashboard/projects")
                    ? "bg-gray-500 "
                    : "hover:bg-gray-700"
                }`}
        >
          <img src={productmanagement} alt="projects" className="w-4 h-4" />
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
          to="/dashboard/assesment"
          className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                ${
                  isActive("/dashboard/assesment")
                    ? "bg-gray-500 "
                    : "hover:bg-gray-700"
                }`}
        >
          <img src={clipboard} alt="assessment" className="w-4 h-4" />
          <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
            Assessments
          </p>
        </Link>
        <Link
          to="#"
          className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
        >
          <img src={deadline} alt="live events" className="w-4 h-4" />
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
          to="/dashboard/profile"
          className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
               ${
                 isActive("/dashboard/profile")
                   ? "bg-gray-500 "
                   : "hover:bg-gray-700"
               }`}
        >
          <img src={account} alt="my profile" className="w-4 h-4" />
          <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
            My Profile
          </p>
        </Link>
        <Link
          to="/dashboard/editprofile"
          className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                ${
                  isActive("/dashboard/editprofile")
                    ? "bg-gray-500 "
                    : "hover:bg-gray-700"
                }`}
        >
          <img src={edit} alt="edit profile" className="w-4 h-4" />
          <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
            Edit Profile
          </p>
        </Link>
        <Link
          to="/dashboard/accountSettings"
          className={`flex h-10 text-white text-[14px] w-full justify-center items-center hover:text-gray-400 transition-colors duration-300"
                 ${
                   isActive("/dashboard/accountSettings")
                     ? "bg-gray-500 "
                     : "hover:bg-gray-700"
                 }`}
        >
          <img src={user} alt="account settings" className="w-4 h-4" />
          <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
            Account Settings
          </p>
        </Link>
        <div
          onClick={() => handleLogout()}
          className="flex h-10 text-white text-[14px] w-full justify-center items-center hover:bg-red-500 bg-red-600 transition-colors duration-300"
        >
          <img src={logoutImage} alt="logout" className="w-4 h-4" />
          <p className="w-[70%] ml-[10px]" style={{ fontFamily: "Nunito" }}>
            Logout
          </p>
        </div>
      </div>
      <button className="bg-[#7933ff] text-white rounded-lg py-2 px-4 mb-4 w-4/5 mx-auto">
        Contact Us
      </button>
    </aside>
  );
};

export default Sidebar;
