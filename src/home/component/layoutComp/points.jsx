import { useState } from "react";

function Points() {
  const [isGoalsVisible, setGoalsVisible] = useState(false);
  const [isPowerVisible, setPowerVisible] = useState(false);
  const [isCoinVisible, setCoinVisible] = useState(false);

  const toggleGoals = () => setGoalsVisible(!isGoalsVisible);
  const togglePower = () => setPowerVisible(!isPowerVisible);
  const toggleCoin = () => setCoinVisible(!isCoinVisible);
  return (
    <>
      <div
        className="points relative items-center max-[900px]:hidden bg-purple-200 w-[180px] rounded-full px-3 py-2 mr-4 cursor-pointer"
        onClick={toggleGoals}
      >
        <div className="flex justify-between">
          <p className="flex items-center font-medium text-base mr-2">
            <span className="mr-1">🔥</span> 365
          </p>
          <p className="flex items-center font-medium text-base">
            <span className="mr-1">🎯</span> 36935
          </p>
        </div>
        {isGoalsVisible && (
          <div
            className="goals_DropDown bg-white rounded-md w-[400px] absolute right-[-70%] top-[65px]"
            style={{
              boxShadow:
                "0 -5px 10px -5px rgba(0, 0, 0, 0.35), 5px 0 10px -5px rgba(0, 0, 0, 0.35), -5px 0 10px -5px rgba(0, 0, 0, 0.35)",
            }}
          >
            <div className="title flex justify-between items-center px-4 py-2 border-b">
              <h2 className="text-lg font-semibold">Daily Goals</h2>
              <p className="text-blue-500 hover:text-blue-700 text-base cursor-pointer">
                Edit Goals
              </p>
            </div>
            <div className="info_text px-4 py-2 border-b flex items-center justify-between bg-gray-100 text-sm mb-2">
              <p className="text-gray-600">
                How does streak work , know more about here
              </p>
              <span
                className="text-gray-600 hover:text-gray-800 cursor-pointer"
                onClick={() => setGoalsVisible(false)}
              >
                X
              </span>
            </div>
            <div className="goals_section flex px-4 py-2 text-sm">
              <div className="left_section w-1/2 pr-2 mb-4">
                <div className="total_streak_day bg-[#ffecee] rounded-md px-2 h-[60%]">
                  <div className="title flex justify-between items-center mb-2">
                    <p className="text-gray-600">Total Streak</p>
                    <img
                      src="https://img.icons8.com/color/48/000000/share--v1.png"
                      className="w-3 h-3"
                      alt="Share"
                    />
                  </div>
                  <div className="streak_body flex items-center justify-center h-[40px] pt-[10px]">
                    <img
                      src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-fire-blogger-vitaliy-gorbachev-flat-vitaly-gorbachev.png"
                      className="w-8 h-8 mr-2"
                      alt="Fire"
                    />
                    <div className="body_details">
                      <p className="text-lg font-bold">0</p>
                      <span className="text-gray-600">Day Streak</span>
                    </div>
                  </div>
                </div>
                <div className="total_streak_freeeze bg-[#ebfcfc] rounded-md mt-3 px-2 h-[40%]">
                  <div className="streak_body flex justify-center items-center pt-[10px]">
                    <img
                      src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-fire-kitchen-kiranshastry-lineal-color-kiranshastry.png"
                      className="w-8 h-8 mr-2"
                      alt="Freeze"
                    />
                    <div className="body_details">
                      <p className="text-lg font-bold">0</p>
                      <span className="text-gray-600">Streak Freeze</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right_section w-1/2 pl-2 mb-3">
                <div className="right_box bg-[#fff7ea] rounded-md px-2 py-4">
                  <div className="title flex justify-between mb-2 flex-col">
                    <p className="text-gray-600 font-bold mb-2">Daily Goal</p>
                    <div className="time_box bg-[#e9b7bbb6] rounded-full w-[120px] text-center px-2">
                      <span className="text-red-500">11:34:13</span>
                    </div>
                  </div>
                  <div className="streak_body flex items-center mb-2">
                    <div className="body_details">
                      <p className="text-lg font-semibold">10/200</p>
                      <span className="text-gray-600">Points</span>
                    </div>
                  </div>
                  <div className="progress_streak">
                    <div className="progress_bar bg-gray-300 rounded-full h-2">
                      <div
                        className="bar bg-blue-500 h-2 rounded-full"
                        style={{ width: "10%" }}
                      ></div>
                    </div>
                    <button className="bg-[#21dde0] text-white font-bold py-2 px-4 rounded mt-2 w-full">
                      Achieve Score
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="score relative flex items-center mr-2">
        <div>
          <p
            className="flex items-center font-medium text-base mr-3 shock cursor-pointer"
            onClick={togglePower}
          >
            <span>⚡</span> 200
          </p>
        </div>
        {isPowerVisible && (
          <div
            className="power_dropDown flex flex-col p-4 rounded-lg absolute top-[65px] right-[-110%] w-[200px] z-50 bg-white text-center justify-between text-base"
            style={{
              boxShadow:
                "0 -5px 10px -5px rgba(0, 0, 0, 0.35), 5px 0 10px -5px rgba(0, 0, 0, 0.35), -5px 0 10px -5px rgba(0, 0, 0, 0.35)",
            }}
          >
            <div className="power_item h-[40px] font-bold">
              <p>Highest xp : 200</p>
            </div>
            <div className="power_item h-[40px] font-bold">
              <p>Current xp : 10</p>
            </div>
            <div className="buttons">
              <button className="hover:bg-blue-700 text-white font-semibold px-4 rounded h-[30px] bg-[#34b2bb]">
                Redeem
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="score relative flex items-center mr-4">
        <div>
          <p
            className="flex items-center font-medium text-base coin cursor-pointer"
            onClick={toggleCoin}
          >
            <img
              src="/src/assets/coin (3).png"
              alt="Coin"
              className="w-6 h-6 mr-1.5"
            />
            <span>36912</span>
          </p>
        </div>
        {isCoinVisible && (
          <div
            className="coin_dropDown flex flex-col p-4 rounded-lg absolute top-[65px] right-[-110%] w-[200px] z-50 bg-white text-center justify-between text-base"
            style={{
              boxShadow:
                "0 -5px 10px -5px rgba(0, 0, 0, 0.35), 5px 0 10px -5px rgba(0, 0, 0, 0.35), -5px 0 10px -5px rgba(0, 0, 0, 0.35)",
            }}
          >
            <div className="power_item h-[40px] font-bold">
              <p>Total Coins : 36912</p>
            </div>
            <div className="power_item h-[40px] font-bold">
              <p>Coins left: 2000</p>
            </div>
            <div className="buttons">
              <button className="hover:bg-blue-700 text-white font-semibold px-4 rounded h-[30px] bg-[#34b2bb]">
                Redeem
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Points;
