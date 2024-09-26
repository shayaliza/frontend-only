import React, { useState } from "react";

import First from "./first";
import Second from "./second";
import Third from "./third";
import Fourth from "./fourth";
import { FaArrowLeft } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
function Search() {
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
    <div className="w-full mt-4">
      <div className="flex items-center w-full ">
        <FaArrowLeft
          className="text-gray-500 text-xl cursor-pointer ml-1"
          onClick={() => window.history.back()}
        />
        <div className="flex bg-blue-100 rounded-md px-2 w-full mr-2 ml-2 py-1">
          <FaSearch className="text-gray-500 text-xl cursor-pointer" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow bg-transparent border-none focus:outline-none px-4 text-gray-700"
          />
        </div>
      </div>
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
          Discussion
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
          Clubs
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
          Work
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
          Members
        </button>
      </div>

      {/* Tab Content */}
      <div className="">{Tab()}</div>
    </div>
  );
}

export default Search;
