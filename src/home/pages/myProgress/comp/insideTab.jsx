import React from "react";
import { useState } from "react";
import pylogo from "../../../assets/python_logo.png";
import BannerImage from "../../../assets/banner.png";

function InsideTab() {
  const [activeTab, setActiveTab] = useState("inProgress");
  const Card = () => {
    return (
      <div className="bg-white dark:bg-gray-800 pb-4 shadow-md rounded-lg flex flex-col overflow-hidden">
        {/* <div className="h-[150px] max-[900px]:mb-4">
          <img
            src={BannerImage}
            alt="card"
            className="h-full w-full object-cover"
          />
        </div> */}
        <div className="flex justify-between text-gray-600  text-sm px-4 my-2">
          <div>28942 students</div>
          <div>1h 13m</div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="px-4 pb-2">
            <p className="font-bold text-lg text-gray-900 dark:text-gray-100">
              Introduction to Python
            </p>
          </div>

          <div className="flex gap-2 items-center px-4 py-2">
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjrWdH1kcSOptxTJvewZ8d6TIy84-yIoOIEjC8OYljd3LZaarqejCI1njtYhROEXhOCE&usqp=CAU"
              }
              className="rounded-full h-10 w-10"
            />

            <div className="text-sm">
              <div>Author Name</div>
              {/* <div>Description</div> */}
            </div>
          </div>
          <div className="px-4 text-sm pt-1">
            <div className="flex items-center space-x-2">
              <div className="bg-purple-600 text-white px-2 py-1 rounded-lg text-xs font-medium">
                React
              </div>
              <div className="bg-purple-600 text-white px-2 py-1 rounded-lg text-xs font-medium">
                Kodo
              </div>
            </div>
          </div>
          <button className="w-[90%] mx-auto bg-white dark:bg-gray-700 text-black dark:text-gray-200 h-9 border border-black dark:border-gray-500 font-semibold rounded-md mt-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition">
            View in Detail
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

export default InsideTab;
