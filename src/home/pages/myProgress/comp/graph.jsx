import React from "react";
import { FaUserCircle } from "react-icons/fa";
import CircularProgressChart from "../../../component/chart/circle";

function Graph() {
  const LeaderboardCard = () => {
    return (
      <div className="bg-white dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-lg w-80">
        <div className="space-y-3">
          {[
            {
              rank: "#1",
              name: "Abhishek Sharma",
              score: "181039",
              color: "text-green-700",
            },
            {
              rank: "#2",
              name: "Shaikh Tabrez",
              score: "141360",
              color: "text-indigo-800",
            },
            {
              rank: "#3",
              name: "Pradeep Suryavanshi",
              score: "140403",
              color: "text-green-600",
            },
            {
              rank: "#516433",
              name: "Saipavan Saketh",
              score: "200",
              color: "text-yellow-600",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-gray-200 pb-3"
            >
              <div className="flex items-center">
                <span className="mr-2 text-lg font-bold">{item.rank}</span>
                <FaUserCircle className={`${item.color}`} size={28} />
                <span className="ml-3 text-sm font-medium">{item.name}</span>
              </div>
              <span className="text-sm font-semibold">{item.score}</span>
            </div>
          ))}
        </div>
        <div className="text-blue-500 text-center mt-4 cursor-pointer hover:underline hover:text-blue-600">
          View Leaderboard
        </div>
      </div>
    );
  };
  const ProgressCard = () => {
    return (
      <div className="bg-white dark:bg-gray-800 dark:text-white px-6 py-6 rounded-xl shadow-lg flex flex-col items-center w-80">
        {/* Title */}
        <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">
          Your Progress
        </h2>

        {/* Progress Content */}
        <div className="flex justify-between items-center w-full gap-4">
          <CircularProgressChart />

          {/* Progress Details */}
          <div className="space-y-3 mt-4 text-sm">
            <div className="flex justify-between text-orange-400 font-semibold">
              <span>Solved:</span>
              <span>1 / 963</span>
            </div>
            <div className="flex justify-between text-blue-400 font-semibold">
              <span>Attempted:</span>
              <span>1</span>
            </div>
            <div className="flex justify-between text-green-500 font-semibold">
              <span>Accuracy:</span>
              <span>50.00%</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button className="text-blue-500 font-medium mt-6 px-4 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-gray-700 transition ease-in-out duration-200">
          Solve More Problems
        </button>
      </div>
    );
  };
  return (
    <div>
      <div className="flex flex-wrap  gap-2 mt-4">
        {/* Leaderboard */}
        <LeaderboardCard />

        <ProgressCard />
        {/* Progress */}
        <div className="bg-white rounded-lg p-6 w-80">
          {/* Profile Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="https://dummyimage.com/50x50"
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-lg font-semibold">Hey, sai pavan! {">"}</p>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                  <span className="text-gray-500">Profile 30% complete</span>
                </div>
              </div>
            </div>
          </div>

          {/* XP Section */}
          <div className="flex justify-between items-center mt-6">
            <div className="flex flex-col items-start">
              <p className="text-gray-500 text-sm">Daily XP</p>
              <p className="text-md font-bold">
                0<span className="text-gray-500">/250</span>
              </p>
            </div>

            <div className="border-r h-12 mx-6"></div>

            <div className="flex flex-col items-start">
              <p className="text-gray-500 text-sm">Total XP</p>
              <p className="text-lg font-bold">250</p>
            </div>
          </div>

          {/* Daily Streak Section */}
          <div className="mt-6">
            <p className="text-gray-500 text-sm">Daily Streak</p>
            <div className="flex justify-between mt-2">
              <p className="text-sm font-bold mr-4 text-nowrap">0 days</p>
              <div className="flex space-x-1 text-xs">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                  <div
                    key={index}
                    className={`w-7 h-7 flex items-center justify-center border border-gray-300 rounded-full ${
                      index === 0 ? "text-gray-500" : "text-gray-300"
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graph;
