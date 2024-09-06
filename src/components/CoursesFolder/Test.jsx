import React from 'react';

function Test() {
  return (
    <div className="w-full mx-auto p-4">
      <div className="w-full flex flex-col lg:flex-row border">
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-2xl font-bold text-gray-800">Title Label</h2>
          <input
            type="text"
            value="Test"
            className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        
        <div className="w-full lg:w-1/2">
          <iframe
            frameBorder="0"
            height="600px"
            src="https://onecompiler.com/embed/python"
            width="100%"
            className=" shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Test;
