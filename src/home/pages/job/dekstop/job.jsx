import React, { useState } from "react";
import First from "./first";
import Second from "./second";
import Third from "./third";
import Fourth from "./fourth";

const Job = () => {
  const [activeTab, setActiveTab] = useState("first");

  // Function to render the component based on the active tab
  const Tab = () => {
    switch (activeTab) {
      case "first":
        return <First />;
      case "second":
        return <Second />;
      case "third":
        return <Third />;
      case "fourth":
        return <Fourth />;
      default:
        return <First />;
    }
  };

  return (
    <div className="w-full">
      <div className="flex  gap-1 mx-2 flex-nowrap overflow-auto  mb-2 mt-2 ">
        {/* Dashboard Tab */}
        <button
          className={`py-2 px-4  cursor-pointer  ${
            activeTab === "first"
              ? " text-black border-b-2 border-black"
              : "text-gray-500 "
          } `}
          onClick={() => setActiveTab("first")}
        >
          Company
        </button>

        {/* Job Tab */}
        <button
          className={`py-2 px-4  cursor-pointer  ${
            activeTab === "second"
              ? " text-black border-b-2 border-black"
              : "text-gray-500 "
          } `}
          onClick={() => setActiveTab("second")}
        >
          Jobs
        </button>

        {/* Profile Tab */}
        <button
          className={`py-2 px-4  cursor-pointer  ${
            activeTab === "third"
              ? " text-black border-b-2 border-black"
              : "text-gray-500 "
          } `}
          onClick={() => setActiveTab("third")}
        >
          Internship
        </button>

        {/* Settings Tab */}
        <button
          className={`py-2 px-4  cursor-pointer  ${
            activeTab === "fourth"
              ? " text-black border-b-2 border-black"
              : "text-gray-500 "
          } `}
          onClick={() => setActiveTab("fourth")}
        >
          Freelancing
        </button>
      </div>

      {/* Tab Content */}
      <div className="">{Tab()}</div>
    </div>
  );
};

export default Job;
