import React, { useState } from "react";
import CandidatesTable from "./candidateTable";

function LeaderBoard() {
  const [activeTab, setActiveTab] = useState("Global");
  const renderContent = () => {
    if (activeTab === "Global") {
      return <CandidatesTable />;
    } else if (activeTab === "College") {
      return (
        <div>
          <div class="flex justify-center my-5 items-center h-64 bg-[rgba(4, 4, 255, 0.048)] border border-dotted border-black">
            <h6 class="">No Completed Projects</h6>
          </div>
        </div>
      );
    } else if (activeTab === "Group") {
      return (
        <div>
          <div class="flex justify-center my-5 items-center h-64 bg-[rgba(4, 4, 255, 0.048)] border border-dotted border-black">
            <h6 class="">No Completed Projects</h6>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="bg-[#f6f6f6]">
      <div className="p-[30px] max-[900px]:ml-0 max-w-[1400px]   ">
        <div className="heading ">
          <h1 className="text-2xl font-semibold mr-4">
            Groups and Leaderboard
          </h1>
        </div>
        <div className=" mt-5 border-b border-black flex space-x-4 justify-center ">
          <button
            className={` pb-3  rounded text-xl font-semibold ${
              activeTab === "Global"
                ? " text-[#cd27ff] border-black border-b-2"
                : " text-black "
            }`}
            onClick={() => setActiveTab("Global")}
          >
            Global
          </button>
          <button
            className={`tab pb-3 rounded text-xl font-semibold ${
              activeTab === "College"
                ? " text-[#cd27ff] border-black border-b-2"
                : "text-black "
            }`}
            onClick={() => setActiveTab("College")}
          >
            College
          </button>
          <button
            className={`tab pb-3 rounded text-xl font-semibold ${
              activeTab === "Group"
                ? " text-[#cd27ff] border-black border-b-2"
                : "text-black "
            }`}
            onClick={() => setActiveTab("Group")}
          >
            Group
          </button>
        </div>
        <div className="">{renderContent()}</div>
      </div>
    </div>
  );
}

export default LeaderBoard;
