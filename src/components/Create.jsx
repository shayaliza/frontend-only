import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBriefcase, FaBook, FaVideo, FaFileAlt, FaPen } from "react-icons/fa"; 

function Create() {
  const navigate = useNavigate();
  return (
    <div className="w-full px-8 flex flex-col gap-4 my-8">
      <button
        onClick={() => navigate("/createsnap/career-path")}
        className="w-full flex items-center justify-start gap-3 px-4 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300"
      >
        <FaBriefcase className="text-xl" /> Career Path
      </button>

      <button
        onClick={() => navigate("/createsnap/course")}
        className="w-full flex items-center justify-start gap-3 px-4 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-300"
      >
        <FaBook className="text-xl" /> Course
      </button>

      <button
        onClick={() => navigate("/createsnap/course")}
        className="w-full flex items-center justify-start gap-3 px-4 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-300"
      >
        <FaBook className="text-xl" /> Skill paths
      </button>

      <button
        onClick={() => navigate("/createsnap/course")}
        className="w-full flex items-center justify-start gap-3 px-4 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-300"
      >
        <FaBook className="text-xl" /> Assignments
      </button>

      <button
        onClick={() => navigate("/createsnap/course")}
        className="w-full flex items-center justify-start gap-3 px-4 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-300"
      >
        <FaBook className="text-xl" /> Coding Round
      </button>

      <button
        onClick={() => navigate("/createsnap/course")}
        className="w-full flex items-center justify-start gap-3 px-4 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-300"
      >
        <FaBook className="text-xl" />Hackathon
      </button>

      <button
        onClick={() => navigate("/createsnap/course")}
        className="w-full flex items-center justify-start gap-3 px-4 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-300"
      >
        <FaBook className="text-xl" /> Resource
      </button>
    </div>
  );
}

export default Create;