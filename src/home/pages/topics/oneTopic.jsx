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
  const [showReportPopup, setShowReportPopup] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");

  const handleReport = () => {
    setShowReportPopup(false);
    console.log("Report submitted for reason:", selectedReason);
  };

  return (
    <div className="final mx-auto pt-6">
      {/* Profile Header */}
      <div className="flex items-center space-x-4">
        {/* Profile Image */}
        <img
          src="https://dummyimage.com/200x200/ddd"
          alt="Profile"
          className="rounded-full object-cover"
        />
        {/* Title and Followers */}
        <div className="flex gap-3 pl-6 flex-col">
          <h1 className="text-4xl font-bold">#javascript</h1>
          <p className="text-sm text-gray-500">0 followers</p>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600">
              Follow
            </button>
            <button
              className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300"
              onClick={() => setShowReportPopup(true)}
            >
              Report
            </button>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-6 ml-8">
        <h2 className="text-lg font-semibold">Description</h2>
        <p className="text-sm">wefgewf</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex mt-6 space-x-4 border-b border-gray-200">
        {["posts", "careerPaths", "competitions", "blogs", "events"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-lg pb-2 ${
                activeTab === tab
                  ? "border-b-2 border-pink-500 text-pink-500"
                  : ""
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          )
        )}
      </div>

      {/* Tab Content */}
      <TabContent activeTab={activeTab} />

      {/* Report Popup */}
      {showReportPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Report Hashtag </h2>
              <button
                onClick={() => setShowReportPopup(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            <div className="mb-4">
              {/* <label
                htmlFor="reason"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Reason for Reporting
              </label> */}
              <select
                id="reason"
                value={selectedReason}
                onChange={(e) => setSelectedReason(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              >
                <option value="" disabled>
                  Select a reason
                </option>
                <option value="spam">Spam</option>
                <option value="inappropriate">Inappropriate Content</option>
                <option value="harassment">Harassment</option>
                <option value="misleading">Misleading Information</option>
              </select>
            </div>
            <button
              onClick={handleReport}
              className="w-full bg-pink-500 text-white rounded-md py-2 hover:bg-pink-600 transition"
            >
              Submit Report
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TagProfile;
