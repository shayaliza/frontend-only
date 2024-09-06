import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBriefcase, FaBook, FaVideo, FaFileAlt, FaPen } from "react-icons/fa"; 

function More() {
  const navigate = useNavigate();
  return (
    <div className="w-full px-8 flex flex-col gap-4 my-8">
      <button
        onClick={() => navigate("/createsnap/course/:courseId/started/banner")}
        className="w-full flex items-center justify-start gap-3 px-4 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300"
      >
        <FaBriefcase className="text-xl" />  Banner Section
      </button>

      <button
        onClick={() => navigate("/createsnap/course/:courseId/started/coursesetting")}
        className="w-full flex items-center justify-start gap-3 px-4 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-300"
      >
        <FaBook className="text-xl" /> Course Setting
      </button>

      <button
        onClick={() => navigate("/createsnap/course/:courseId/started/addproject")}
        className="w-full flex items-center justify-start gap-3 px-4 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 transition duration-300"
      >
        <FaVideo className="text-xl" /> Add Project
      </button>

      <button
        onClick={() => navigate("/createsnap/course/:courseId/started/addassessment")}
        className="w-full flex items-center justify-start gap-3 px-4 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-300"
      >
        <FaFileAlt className="text-xl" /> Add Assessment
      </button>

    </div>
  );
}

export default More;