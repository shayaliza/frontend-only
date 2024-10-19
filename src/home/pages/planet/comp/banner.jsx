import React from "react";

const EventCard = () => {
  return (
    <div className="pt-2">
      {/* Event Ended Badge */}
      <div className="bg-gray-600 text-white px-6 pt-20 pb-24">
        <div className="md:w-9/12 w-full mx-auto">
          <div className="md:w-max text-md bg-red-600 text-white px-3 py-1  font-semibold rounded">
            <span role="img" aria-label="clock">
              ⏰
            </span>{" "}
            Ended on 25th Jun'23 09:30 PM (India Standard Time)
          </div>

          {/* Title and Description */}
          <div className="mt-8">
            <h1 className="text-3xl font-bold">
              Global AI HackFest 2023 | Travel, Logistics & Supply Chain
            </h1>
            <p className="mt-2 text-gray-300">
              The AI hackathon to unleash your creativity and build innovative
              and impactful solutions
            </p>
          </div>

          {/* Difficulty Level and Reward */}
          <div iv className="mt-4 flex items-center space-x-4">
            <div className="flex items-center">
              <div className="bg-white text-black rounded-full px-3 py-1 text-sm font-semibold">
                <span role="img" aria-label="star">
                  ⭐
                </span>{" "}
                Easy
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#013145] py-4 ">
        <div className="md:w-9/12 px-2 md:px-0  flex md:flex-row justify-between mx-auto">
          {/* Organized by */}
          <div className="md:flex gap-6 text-white">
            <div className="mt-6 flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span>Organized by:</span>
                <strong>
                  <div className="bg-white text-black rounded-full px-3 py-1 text-sm font-semibold">
                    <span role="img" aria-label="trophy">
                      🏆
                    </span>{" "}
                    Planet
                  </div>
                </strong>
              </div>
            </div>
            <div className="mt-6 flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span>Rewards: </span>
                <strong>
                  <div className="bg-white text-black rounded-full px-3 py-1 text-sm font-semibold">
                    <span role="img" aria-label="trophy">
                      🏆
                    </span>{" "}
                    $3000
                  </div>
                </strong>
              </div>
            </div>
          </div>

          {/* Register Button */}
          <div className="mt-6">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-semibold">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
