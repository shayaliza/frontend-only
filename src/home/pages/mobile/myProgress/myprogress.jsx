import React, { useState } from "react";
import Progress from "./comp/progress";
import Projects from "./comp/projects";
import Internship from "./comp/internship";
import CareerPath from "./comp/careerPath";
import Certificate from "./comp/certificate";
import InsideTab from "./comp/insideTab";
import MyBuddy from "./comp/myBuddy";
import Graph from "./comp/graph";

const tabs = [
  { name: "Progress", component: Progress },
  { name: "Projects", component: Projects },
  { name: "Internship", component: Internship },
  { name: "CareerPath", component: CareerPath },
  // { name: "Certificate", component: Certificate },
];

function MyProgress() {
  const [activeTab, setActiveTab] = useState("Progress");

  const ActiveComponent = tabs.find((tab) => tab.name === activeTab).component;

  return (
    <div className="bg-[#f6f6f6] w-full">
      <div className="w-full  ">
        <div className="w-full ">
          <div className="bg-white  rounded-lg p-6 max-w-4xl mx-auto">
            {/* Profile Section */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src="https://dummyimage.com/50x50"
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-semibold">Hey, sai pavan! {">"}</p>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                    <span className="text-gray-500">Profile 30% complete</span>
                  </div>
                </div>
              </div>
            </div>

            {/* XP Section */}
            <div className="flex justify-between items-center mt-6">
              <div className="flex flex-col items-start">
                <p className="text-gray-500 text-sm">Daily XP</p>
                <p className="text-lg font-bold">
                  0<span className="text-gray-500">/250</span>
                </p>
              </div>

              <div className="border-r h-12 mx-6"></div>

              <div className="flex flex-col items-start">
                <p className="text-gray-500 text-sm">Total XP</p>
                <p className="text-lg font-bold">250</p>
              </div>
            </div>

            {/* Daily Streak Section */}
            <div className="mt-6">
              <p className="text-gray-500 text-sm">Daily Streak</p>
              <div className="flex justify-between mt-2">
                <p className="text-lg font-bold mr-4 text-nowrap">0 days</p>
                <div className="flex space-x-1 text-xs">
                  {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                    <div
                      key={index}
                      className={`w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full ${
                        index === 0 ? "text-gray-500" : "text-gray-300"
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col  w-[95%] mx-auto">
            <div className="flex flex-row gap-3 text-xs  rounded  justify-evenly font-bold mt-5 text-center  w-full  overflow-x-scroll ">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  className={`px-2 py-2 w-full cursor-pointer ${
                    activeTab === tab.name
                      ? "bg-black text-white"
                      : "text-black bg-gray-300"
                  }`}
                  onClick={() => setActiveTab(tab.name)}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            <div className="">
              <InsideTab />
              <MyBuddy />
              <Graph />
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="w-full mt-4 flex flex-row space-y-4  "></div>
      </div>
      <div className="w-11/12 mx-auto">
        <ActiveComponent />
      </div>{" "}
    </div>
  );
}

export default MyProgress;
