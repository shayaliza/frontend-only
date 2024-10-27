import React from "react";
import { useState } from "react";
import { FaHeart, FaDownload, FaUsers, FaBookReader } from "react-icons/fa";

function Internship() {
  const [activeTab, setActiveTab] = useState("inProgress");
  const Card = () => {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-xs shadow-md">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-4">
          <img
            src="https://dummyimage.com/48x48" // Replace with actual icon/image URL
            alt="App Icon"
            className="h-8 w-8"
          />
          <div className="flex items-center text-gray-500 text-sm">
            <FaHeart className="mr-1" />
            4.9
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold">Frontend Developer</h2>

        {/* Stats Section */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-gray-600">
            <p className="text-xs">Enrolled</p>
            <div className="flex items-center mt-1">
              <FaUsers className="h-4 w-4 mr-1 text-gray-500" />
              <span>9.2k</span>
            </div>
          </div>

          <div className="text-gray-600">
            <p className="text-xs">Lessons</p>
            <div className="flex items-center mt-1">
              <FaBookReader className="h-4 w-4 mr-1 text-gray-500" />
              <span>90</span>
            </div>
          </div>
        </div>
        <div className="border-b-2 my-2 border-gray-300 border-dashed "></div>

        {/* Download Section */}
        <div className="mt-2 flex items-center justify-between">
          <span className="text-gray-600 text-sm">Frontend Developer</span>
          <button className="flex items-center px-3 py-1 bg-black text-white rounded-md text-sm font-semibold">
            Start
          </button>
        </div>
      </div>
    );
  };
  const renderContent = () => {
    if (activeTab === "inProgress") {
      return (
        <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-1 ">
          <Card />
          <Card />
          <Card />
        </div>
      );
    } else if (activeTab === "completed") {
      return (
        <div>
          <div class="flex justify-center my-5 items-center h-64 bg-[rgba(4, 4, 255, 0.048)] border border-dotted border-black dark:text-white">
            <h6 class="">No Completed Projects</h6>
          </div>
          {/* Add more completed content here */}
        </div>
      );
    }
  };
  return (
    <div>
      <div className="mt-5 border-b border-black dark:border-gray-600 flex space-x-4 mb-4 ">
        <button
          className={`pb-3 rounded text-lg font-semibold ${
            activeTab === "inProgress"
              ? "text-[#cd27ff] border-black dark:border-gray-300 border-b-2"
              : "text-black dark:text-gray-300"
          }`}
          onClick={() => setActiveTab("inProgress")}
        >
          In Progress
        </button>
        <button
          className={`pb-3 rounded text-lg font-semibold ${
            activeTab === "completed"
              ? "text-[#cd27ff] border-black dark:border-gray-300 border-b-2"
              : "text-black dark:text-gray-300"
          }`}
          onClick={() => setActiveTab("completed")}
        >
          Completed
        </button>
      </div>

      <div className="">{renderContent()}</div>
    </div>
  );
}

export default Internship;
