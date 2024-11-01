import React from "react";

const Test = () => {
  return (
    <div className="w-full p-4 bg-gray-100">
      {/* Two column wrapper */}
      <div className="flex h-full">
        {/* Left column - fixed width */}
        <div className="w-64 flex flex-col">
          {/* Top row - fixed height */}
          <div className="h-20 bg-blue-500 p-4">
            <h2 className="text-white font-bold">Left Top</h2>
            <p className="text-white text-sm">Fixed Height: 80px</p>
          </div>

          {/* Middle row - responsive height */}
          <div className="flex-1 bg-blue-400 p-4 overflow-auto">line</div>

          {/* Bottom row - fixed height */}
          <div className="h-24 bg-blue-600 p-4">
            <h2 className="text-white font-bold">Left Bottom</h2>
            <p className="text-white text-sm">Fixed Height: 96px</p>
          </div>
        </div>

        {/* Right column - responsive width */}
        <div className="flex-1 flex flex-col ml-4">
          {/* Top row - fixed height */}
          <div className="h-20 bg-green-500 p-4">
            <h2 className="text-white font-bold">Right Top</h2>
            <p className="text-white text-sm">Fixed Height: 80px</p>
          </div>

          {/* Middle row - responsive height */}
          <div className="flex-1 bg-green-400 p-4 overflow-auto">
            <h2 className="text-white font-bold">Right Middle</h2>
            <h2 className="text-white font-bold">Right Middle</h2>
            <h2 className="text-white font-bold">Right Middle</h2>
            <h2 className="text-white font-bold">Right Middle</h2>
            <h2 className="text-white font-bold">Right Middle</h2>
            <h2 className="text-white font-bold">Right Middle</h2>
            <h2 className="text-white font-bold">Right Middle</h2>
          </div>

          {/* Bottom row - fixed height */}
          <div className="h-24 bg-green-600 p-4">
            <h2 className="text-white font-bold">Right Bottom</h2>
            <p className="text-white text-sm">Fixed Height: 96px</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
