import React, { useState } from "react";
import Progress from "./comp/progress";
import Projects from "./comp/projects";
import Internship from "./comp/internship";
import CareerPath from "./comp/careerPath";
import Certificate from "./comp/certificate";

const tabs = [
  { name: "Progress", component: Progress },
  { name: "Projects", component: Projects },
  { name: "Internship", component: Internship },
  { name: "CareerPath", component: CareerPath },
  { name: "Certificate", component: Certificate },
];

function MyProgress() {
  const [activeTab, setActiveTab] = useState("Progress");

  const ActiveComponent = tabs.find((tab) => tab.name === activeTab).component;

  return (
    <div className="bg-[#f6f6f6]">
      <div className="w-full flex flex-row gap-10">
        <div className="w-2/3 ">
          <div className="flex flex-col w-[90%] mx-auto ">
            <div className="flex flex-col gap-3 sm:flex-row bg-white rounded overflow-hidden justify-evenly font-bold my-5 text-center  w-full">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  className={`px-4 py-3 w-full  hover:bg-[#cd27ff]  hover:text-white transition ease delay-150 cursor-pointer ${
                    activeTab === tab.name
                      ? "bg-[#cd27ff] text-white"
                      : "text-black bg-gray-300"
                  }`}
                  onClick={() => setActiveTab(tab.name)}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            <div className="mt-5">
              <ActiveComponent />
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="w-1/3 mt-4 flex flex-col space-y-4 border-2 ">
          <div className="h-12 bg-gray-900 text-white p-2">Your buddy</div>
          <div className="flex-1 bg-gray-400"></div>
          <div className="flex-1 bg-gray-400"></div>
          <div className="flex-1 bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
}

export default MyProgress;
