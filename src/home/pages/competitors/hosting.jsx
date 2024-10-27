import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateCompetition = () => {
  // State to manage sidebar visibility
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  // Function to open the sidebar
  const openSidebar = (option) => {
    setSelectedOption(option);
    setSidebarOpen(true);
  };

  // Function to close the sidebar
  const closeSidebar = () => {
    setSidebarOpen(false);
    setSelectedOption("");
  };

  return (
    <div className="p-6">
      {/* Header */}
      <Link
        to={"/dashboard/competitions"}
        className="text-lg font-semibold mb-4"
      >
        <button className="mr-2">&larr;</button> Go Back
      </Link>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-6">
        What kind of competition do you want to create?
      </h2>

      <div className="w-1/2">
        {/* Grid for Options */}
        <div className="grid grid-cols-2 gap-6">
          <div
            className="p-6 border rounded-lg shadow-md hover:shadow-lg cursor-pointer"
            onClick={() => openSidebar("New Competition")}
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center">
                <span className="text-3xl">+</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">New Competition</h3>
              <p className="text-sm text-gray-500">
                Use your own dataset to create a competition
              </p>
            </div>
          </div>

          <div
            className="p-6 border rounded-lg shadow-md hover:shadow-lg cursor-pointer"
            onClick={() => openSidebar("New AI Generated Competition")}
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center">
                <span className="text-3xl">*</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">
                New AI Generated Competition
              </h3>
              <p className="text-sm text-gray-500">
                Use an AI-generated dataset to quickly create a competition
              </p>
            </div>
          </div>

          <div
            className="p-6 border rounded-lg shadow-md hover:shadow-lg cursor-pointer"
            onClick={() => openSidebar("Clone a Competition You Hosted")}
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center">
                <span className="text-3xl">&#128464;</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">
                Clone a Competition You Hosted
              </h3>
              <p className="text-sm text-gray-500">
                Re-run one of your past competitions
              </p>
            </div>
          </div>

          <div
            className="p-6 border rounded-lg shadow-md hover:shadow-lg cursor-pointer"
            onClick={() => openSidebar("Browse Cloneable Library")}
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-3xl">&#9634;</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">
                Browse Cloneable Library
              </h3>
              <p className="text-sm text-gray-500">
                Clone someone else's competition
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40">
          <div className="fixed right-0 top-0 h-full w-1/2 bg-white shadow-lg z-50 p-6">
            {/* Cross button */}
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={closeSidebar}
            >
              &times;
            </button>

            {/* Sidebar Content */}
            <h2 className="text-xl font-bold mb-4">{selectedOption}</h2>

            <div className="overflow-y-auto h-[90%]">
              {/* Form */}
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700">New Title</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2"
                    placeholder="Enter field 1"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Subtitle</label>
                  <textarea
                    className="w-full border rounded px-3 py-2"
                    placeholder=""
                    rows="3"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Description</label>
                  <textarea
                    className="w-full border rounded px-3 py-2"
                    placeholder=""
                    rows="6"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Steps</label>
                  <textarea
                    className="w-full border rounded px-3 py-2"
                    placeholder=""
                    rows="6"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Price</label>
                  <textarea
                    className="w-full border rounded px-3 py-2"
                    placeholder="Enter field 3"
                  />
                </div>
              </form>
              <div className="flex justify-end space-x-4 mt-4">
                <button
                  className="px-4 py-2 bg-gray-300 rounded"
                  onClick={closeSidebar}
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded">
                  Submit
                </button>
              </div>
            </div>

            {/* Cancel and Submit buttons */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateCompetition;
