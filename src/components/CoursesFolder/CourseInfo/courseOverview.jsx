import React, { useRef, useState } from "react";

const CourseOverview = ({ overview, onEdit }) => {
  const overviewRef = useRef();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Course Overview
        </h2>
        <button
          className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105"
          onClick={() => onEdit(overviewRef.current.innerHTML)}
        >
          <span className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              ></path>
            </svg>
            Edit
          </span>
        </button>
      </div>
      <p className="text-gray-700" ref={overviewRef}>
        {overview}
      </p>
    </div>
  );
};

export default CourseOverview;
