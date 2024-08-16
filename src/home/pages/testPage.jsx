import React from "react";
import CircularProgressChart from "../component/chart/circle";

function TestPage() {
  return (
    <div className="min-h-screen final bg-gray-200 flex ">
      <div className="w-full ">
        <div className="w-full  p-4 flex gap-9">
          {/* Left Column */}
          <div className="w-full flex flex-col space-y-4">
            {/* Top Navigation */}
            <div className="flex space-x-4">
              <div className="w-1/3 h-10 bg-blue-600"></div>
              <div className="w-1/3 h-10 bg-blue-600"></div>
              <div className="w-1/3 h-10 bg-blue-600"></div>
            </div>
            {/* Main Content */}
            <div className="h-64 bg-gray-800"></div>
            {/* Bottom Section */}
            <div className="flex space-x-4">
              {/* Leaderboard */}
              <div className="w-1/2 bg-white p-4">
                {/* Leaderboard Content */}
                <div>#1 Abhishek Sharma - 181039</div>
                <div>#2 Shaikh Tabrez - 141360</div>
                <div>#3 Pradeep Suryavanshi - 140403</div>
                <div>#516433 Saipavan Saketh - 200</div>
                <a href="#" className="text-blue-500">
                  View Leaderboard
                </a>
              </div>
              {/* Progress */}
              <div className="w-1/2 bg-white p-4 flex flex-col items-center">
                <div className="mb-2">Your Progress</div>
                <CircularProgressChart />
                <div className="mt-4 text-center">
                  <div>Solved: 1 / 963</div>
                  <div>Attempted: 1</div>
                  <div>Accuracy: 50.00%</div>
                  <a href="#" className="text-blue-500">
                    Solve More Problems
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-1/3 flex flex-col space-y-4 border-2 ">
            <div className="h-12 bg-gray-900 text-white p-2">Your buddy</div>
            <div className="flex-1 bg-gray-400"></div>
            <div className="flex-1 bg-gray-400"></div>
            <div className="flex-1 bg-gray-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestPage;
