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
      <div className="flex flex-col w-[90%] mx-auto ">
        <div className="flex flex-col sm:flex-row bg-white rounded-r-2xl rounded-l-2xl overflow-hidden justify-evenly font-bold my-5 text-center border border-black w-full">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`px-4 py-3 w-full border-b sm:border-b-0 sm:border-x border-black hover:bg-[#cd27ff] hover:text-white transition ease delay-150 cursor-pointer ${
                activeTab === tab.name
                  ? "bg-[#cd27ff] text-white"
                  : "text-black"
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
  );
}

export default MyProgress;
