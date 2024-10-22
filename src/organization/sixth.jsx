import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sixth() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left section */}
      <div className="lg:w-1/2 w-full flex flex-col px-8 lg:px-24 h-full justify-between">
        <div>
          {/* Logo Section */}
          <div className="mb-8 mt-8">
            <div>Techsnap org logo</div>
          </div>

          {/* Heading Section */}
          <h1 className="text-2xl lg:text-3xl font-semibold mb-8">
            What is your workspace name?
          </h1>
          <div className="text-gray-600 ">
            Give it a name. You can change it later.
          </div>
          <div>
            <input
              type="text"
              placeholder="Workspace name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-8"
            />
          </div>
        </div>

        {/* Continue Button Section */}
        <div className="w-full mb-8">
          <div className="flex justify-end">
            {/* <button
              onClick={() => {
                navigate("/organization/fifth");
              }}
              className="bg-gray-300 text-gray-600 px-6 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in"
            >
              Remind me later
            </button> */}
            <button
              onClick={() => {
                navigate("/managesnap/channels");
              }}
              className="bg-gray-300 text-gray-600 px-6 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className=" hidden lg:w-1/2 w-full bg-gradient-to-r from-white to-blue-200 md:flex items-center justify-center lg:min-h-full">
        <div className="relative">
          <img
            src="https://dummyimage.com/400x400/00ff00"
            alt="Illustration"
            className="w-64 lg:w-96"
          />
        </div>
      </div>
    </div>
  );
}

export default Sixth;
