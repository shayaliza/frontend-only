// src/components/Video.js
import React from 'react';

const Video = () => {
  return (
    <div className="container mx-auto p-4 max-[500px]:p-0 max-w-3xl mt-[80px] flex flex-col absolute top-0 bottom-0 left-0 right-0 justify-center">
      
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Hello Python!</h1>
        <span className="bg-yellow-300 px-2 py-1 rounded font-semibold">50 XP</span>
      </header>

      <div className="bg-white rounded-lg shadow-md p-0">
        <div className="aspect-w-16 aspect-h-12 relative">
          <video
            id="pythonVideo"
            className="w-full h-full rounded-lg"
            controls
            poster="path_to_your_poster_image.jpg"
          >
            <source src="path_to_your_video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="mt-4 flex justify-between">
        <button
          id="showTranscript"
          className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 transition"
        >
          Show Transcript
        </button>
        <button
          id="gotIt"
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
        >
          Got It!
        </button>
      </div>
    </div>
  );
};

export default Video;
