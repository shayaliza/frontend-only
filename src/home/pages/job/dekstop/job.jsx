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
      <div className="flex justify-center space-x-4  mb-2 mt-2 ">
        {/* Dashboard Tab */}
        <button
          className={`py-2 px-4  cursor-pointer rounded ${
            activeTab === "first"
              ? "bg-black text-white"
              : "text-black bg-gray-300"
          } `}
          onClick={() => setActiveTab("first")}
        >
          First
        </button>

        {/* Job Tab */}
        <button
          className={`py-2 px-4  cursor-pointer rounded ${
            activeTab === "second"
              ? "bg-black text-white"
              : "text-black bg-gray-300"
          } `}
          onClick={() => setActiveTab("second")}
        >
          Second
        </button>

        {/* Profile Tab */}
        <button
          className={`py-2 px-4  cursor-pointer rounded ${
            activeTab === "third"
              ? "bg-black text-white"
              : "text-black bg-gray-300"
          } `}
          onClick={() => setActiveTab("third")}
        >
          Third
        </button>

        {/* Settings Tab */}
        <button
          className={`py-2 px-4  cursor-pointer rounded ${
            activeTab === "fourth"
              ? "bg-black text-white"
              : "text-black bg-gray-300"
          } `}
          onClick={() => setActiveTab("fourth")}
        >
          Fourth
        </button>
      </div>

      {/* Tab Content */}
      <div className="">{Tab()}</div>
    </div>
  );
};

export default Job;
