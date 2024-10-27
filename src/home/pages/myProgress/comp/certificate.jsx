import React from "react";
import { useState } from "react";
import { BsFillEmojiSmileFill } from "react-icons/bs";

function Certificate() {
  const [activeTab, setActiveTab] = useState("inProgress");
  const Card = () => {
    return (
      <div className="flex items-center justify-cente dark-mode:bg-gray-900">
        <div className="relative bg-white shadow-lg rounded-lg p-6 w-[300px] h-[280px] dark-mode:bg-gray-800">
          {/* Free Badge */}
          <div className="absolute top-4 right-4 bg-green-400 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Free
          </div>

          {/* SVG Icons */}
          <div className="absolute top-0 left-0 p-2 text-green-300 opacity-15">
            <BsFillEmojiSmileFill size={55} />
          </div>
          <div className="absolute bottom-0 right-0 p-2 text-pink-300 opacity-15">
            <BsFillEmojiSmileFill size={55} />
          </div>

          {/* Centered Card Content */}
          <div className="flex flex-col items-center justify-center h-full text-center">
            <p className="text-xs text-gray-400">Frontend</p>
            <h1 className="text-lg font-semibold my-1 text-gray-800 dark-mode:text-white">
              E-commerce
            </h1>
            <div className="flex gap-5 mt-2">
              <div className="flex flex-col">
                <div>Rating</div>
                <div>5.0</div>
              </div>
              <div className="flex flex-col">
                <div>Enrolled</div>
                <div>23k</div>
              </div>
              <div className="flex flex-col">
                <div>Lesson</div>
                <div>5</div>
              </div>
            </div>
          </div>
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
        <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-1 ">
          <Card />
          <Card />
          <Card />
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

export default Certificate;
