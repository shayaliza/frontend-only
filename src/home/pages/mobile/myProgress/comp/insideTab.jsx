import React from "react";
import { useState } from "react";

function InsideTab() {
  const [activeTab, setActiveTab] = useState("inProgress");
  const renderContent = () => {
    if (activeTab === "inProgress") {
      return (
        <div className="flex  flex-nowrap gap-2  overflow-x-auto  ">
          <div class=" bg-white flex flex-col justify-around rounded-lg shadow-xl my-5 mr-2.5 flex-shrink-0 w-[320px] ">
            <div class="flex items-center p-4">
              <img
                src="/src/home/assets/python_logo.png"
                alt="course-logo"
                class="w-7 h-7 mr-4 rounded-2xl"
              />
              <h1 class="text-base font-bold">Introduction to Python</h1>
            </div>
            <div class=" p-4">
              <p class="text-gray-700 text-[0.8rem]">
                Master the basics of data analysis in Python. Expand your
                skillset by learning scientific computing with numpy.
              </p>
            </div>
            <div class="p-4 text-center">
              <button class="bg-[#cd27ff] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                Go to Course
              </button>
            </div>
          </div>
          <div class=" bg-white flex flex-col justify-around rounded-lg shadow-xl my-5 mr-2.5 flex-shrink-0 w-[320px] ">
            <div class="flex items-center p-4">
              <img
                src="/src/home/assets/python_logo.png"
                alt="course-logo"
                class="w-7 h-7 mr-4 rounded-2xl"
              />
              <h1 class="text-base font-bold">Introduction to Python</h1>
            </div>
            <div class=" p-4">
              <p class="text-gray-700 text-[0.8rem]">
                Master the basics of data analysis in Python. Expand your
                skillset by learning scientific computing with numpy.
              </p>
            </div>
            <div class="p-4 text-center">
              <button class="bg-[#cd27ff] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                Go to Course
              </button>
            </div>
          </div>
          <div class=" bg-white flex flex-col justify-around rounded-lg shadow-xl my-5 mr-2.5 flex-shrink-0 h-[220px] w-[320px] ">
            <div class="flex items-center p-4">
              <img
                src="/src/home/assets/python_logo.png"
                alt="course-logo"
                class="w-7 h-7 mr-4 rounded-2xl"
              />
              <h1 class="text-base font-bold">Introduction to Python</h1>
            </div>
            <div class=" p-4">
              <p class="text-gray-700 text-[0.8rem]">
                Master the basics of data analysis in Python. Expand your
                skillset by learning scientific computing with numpy.
              </p>
            </div>
            <div class="p-4 text-center">
              <button class="bg-[#cd27ff] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                Go to Course
              </button>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === "completed") {
      return (
        <div>
          <div class="flex justify-center my-5 items-center h-64 bg-[rgba(4, 4, 255, 0.048)] border border-dotted border-black">
            <h6 class="">No Completed Projects</h6>
          </div>
          {/* Add more completed content here */}
        </div>
      );
    }
  };
  return (
    <div>
      <div className="mt-5 border-b border-black flex justify-between items-center space-x-4 mb-4 w-full ">
        <div className="flex space-x-4">
          <button
            className={`pb-3 rounded text-sm font-semibold ${
              activeTab === "inProgress"
                ? "text-[#cd27ff] border-black border-b-2"
                : "text-black"
            }`}
            onClick={() => setActiveTab("inProgress")}
          >
            In Progress
          </button>
          <button
            className={`tab pb-3 rounded text-sm font-semibold ${
              activeTab === "completed"
                ? "text-[#cd27ff] border-black border-b-2"
                : "text-black"
            }`}
            onClick={() => setActiveTab("completed")}
          >
            Completed
          </button>
        </div>

        <div className="ml-auto text-xs p-2">See all</div>
      </div>
      <div>{renderContent()}</div>
    </div>
  );
}

export default InsideTab;
