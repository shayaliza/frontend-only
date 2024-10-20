import React, { useState } from "react";

const TabContent = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case "posts":
        return <div>Posts Content</div>;
      case "careerPaths":
        return <div>Career Paths Content</div>;
      case "competitions":
        return <div>Competitions Content</div>;
      case "blogs":
        return <div>Blogs Content</div>;
      case "events":
        return <div>Events Content</div>;
      default:
        return <div>Posts Content</div>;
    }
  };

  return <div className="mt-6">{renderContent()}</div>;
};

const TagProfile = () => {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="final mx-auto pt-6">
      {/* Profile Header */}
      <div className="flex items-center space-x-4">
        {/* Profile Image */}
        <img
          src="https://dummyimage.com/200x200/ddd"
          alt="Profile"
          className=" rounded-full object-cover"
        />
        {/* Title and Followers */}
        <div className="flex gap-3 pl-6 flex-col">
          <h1 className="text-4xl font-bold">#javascript</h1>
          <p className="text-sm text-gray-500">0 followers</p>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600">
              Follow
            </button>
            <button className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300">
              Report
            </button>
          </div>
        </div>
        {/* Buttons */}
      </div>

      {/* Description */}
      <div className="mt-6 ml-8 ">
        <h2 className="text-lg font-semibold">Description</h2>
        <p className="text-sm">wefgewf</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex mt-6 space-x-4 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("posts")}
          className={`text-lg pb-2 ${
            activeTab === "posts"
              ? "border-b-2 border-pink-500 text-pink-500"
              : ""
          }`}
        >
          Posts
        </button>
        <button
          onClick={() => setActiveTab("careerPaths")}
          className={`text-lg pb-2 ${
            activeTab === "careerPaths"
              ? "border-b-2 border-pink-500 text-pink-500"
              : ""
          }`}
        >
          Career Paths
        </button>
        <button
          onClick={() => setActiveTab("competitions")}
          className={`text-lg pb-2 ${
            activeTab === "competitions"
              ? "border-b-2 border-pink-500 text-pink-500"
              : ""
          }`}
        >
          Competitions
        </button>
        <button
          onClick={() => setActiveTab("blogs")}
          className={`text-lg pb-2 ${
            activeTab === "blogs"
              ? "border-b-2 border-pink-500 text-pink-500"
              : ""
          }`}
        >
          Blogs
        </button>
        <button
          onClick={() => setActiveTab("events")}
          className={`text-lg pb-2 ${
            activeTab === "events"
              ? "border-b-2 border-pink-500 text-pink-500"
              : ""
          }`}
        >
          Events
        </button>
      </div>

      {/* Tab Content */}
      <TabContent activeTab={activeTab} />
    </div>
  );
};

export default TagProfile;
