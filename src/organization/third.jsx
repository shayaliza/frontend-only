import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RadioGroup from "./comp/radioBtn";

function Third() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("Work");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    { value: "Work", label: "Work" },
    { value: "Personal", label: "Personal" },
    { value: "School", label: "School" },
    { value: "Nonprofits", label: "Nonprofits" },
    { value: "Marketing", label: "Marketing" },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left section */}
      <div className="lg:w-2/3 w-full flex flex-col px-8 lg:px-24 h-full justify-between">
        <div>
          {/* Logo Section */}
          <div className="mb-8 mt-8">
            <div>Techsnap org logo</div>
          </div>

          {/* Heading Section */}
          <h1 className="text-2xl lg:text-3xl font-semibold mb-8">
            Select what you'd like to focus on first
          </h1>

          {/* Reusable Radio Buttons Section */}
          <RadioGroup
            options={options}
            selectedOption={selectedOption}
            onChange={handleOptionChange}
          />
        </div>

        {/* Continue Button Section */}
        <div className="w-full mb-8">
          <div className="flex justify-between">
            <button
              onClick={() => {
                navigate("/organization/second");
              }}
              className="bg-gray-300 text-gray-600 px-6 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in"
            >
              &larr; Back
            </button>
            <button
              onClick={() => {
                navigate("/organization/fourth");
              }}
              className="bg-gray-300 text-gray-600 px-6 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in"
            >
              Continue &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="lg:w-1/3 w-full bg-yellow-500 flex items-center justify-center lg:min-h-full">
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

export default Third;
