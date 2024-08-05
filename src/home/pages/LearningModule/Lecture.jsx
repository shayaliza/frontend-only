// src/components/Lecture.js
import React from "react";

const Lecture = () => {
  return (
    <div className="p-4 px-4 coding flex flex-col md:flex-row ">
      {/* Left Content */}
      <div className="left-content mr-4 mb-4 sm:mb-0 overflow-y-scroll h-1/2 sm:h-[80vh] w-full sm:w-1/2 border-r-2">
        <div>
          <h1 className="text-xl font-bold mb-2">Course Name</h1>
          <h2 className="text-lg font-semibold mb-2">Topic Heading</h2>
          <p className="mb-4">Some text describing the topic goes here.</p>
          <img
            src="https://cdn.programiz.pro/course-images/sql-basics/sql1-2.1.1.png"
            alt="Course Image"
            className="mb-4"
          />
        </div>
      </div>
      {/* Right Content */}
      <div className="right-content bg-gray-200 p-4 w-full sm:w-full md:w-1/2 h-1/2 sm:h-full">
        <iframe
          id="compiler"
          frameBorder="0"
          height="450px"
          src="https://onecompiler.com/embed/"
          width="100%"
        ></iframe>
      </div>
    </div>
  );
};

export default Lecture;
