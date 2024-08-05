import React from "react";

const VideoPlayer = () => {
  return (
    <div className="relative max-w-4xl mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-800 p-4">
          <h2 className="text-2xl font-bold text-white">React in One Hour</h2>
        </div>
        <div className="relative w-full overflow-hidden pb-[56.25%] bg-black">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/SqcY0GlETPk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <button className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105">
        <span className="flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
          </svg>
          Edit
        </span>
      </button>
    </div>
  );
};

export default VideoPlayer;
