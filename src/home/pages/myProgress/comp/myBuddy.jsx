import React from "react";
import enrollImage from "../../../assets/enrolled.svg";
function MyBuddy() {
  return (
    <div>
      {/* <div className="h-12  text-black p-2">Your buddy</div> */}
      <div class="flex flex-col gap-4 mt-2 ">
        <div class="rounded-lg mb-2">
          <div class="mb-4 flex justify-between w-10/12 mx-auto">
            <h1 class="text-xl font-bold">Your buddy</h1>
            <p class="text-gray-600">Need help?</p>
          </div>
          <div className="w-10/12 mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
              <div class="flex flex-col justify-between h-[170px] border-2 shadow-xl border-black rounded-lg p-4">
                <h2 class="flex items-center mb-2 text-[#7933ff] text-lg">
                  <span>
                    <img src={enrollImage} alt="enroll" class="h-4 w-4 mr-2" />{" "}
                  </span>
                  Enrolled
                </h2>
                <h1 class="text-md">Courses : 4</h1>
                <h1 class="text-md">CareerPaths : 2</h1>
                <h1 class="text-md">Projects : 5</h1>
              </div>
              <div class="flex flex-col justify-between h-[170px] border-2 shadow-xl border-black rounded-lg p-4">
                <h2 class="flex items-center mb-2 text-[#7933ff] text-lg">
                  <span>
                    <img src={enrollImage} alt="enroll" class="h-4 w-4 mr-2" />{" "}
                  </span>
                  Enrolled
                </h2>
                <h1 class="text-md">Courses : 4</h1>
                <h1 class="text-md">CareerPaths : 2</h1>
                <h1 class="text-md">Projects : 5</h1>
              </div>
              <div class="flex flex-col justify-between h-[170px] border-2 shadow-xl border-black rounded-lg p-4">
                <h2 class="flex items-center mb-2 text-[#7933ff] text-lg">
                  <span>
                    <img src={enrollImage} alt="enroll" class="h-4 w-4 mr-2" />{" "}
                  </span>
                  Enrolled
                </h2>
                <h1 class="text-md">Courses : 4</h1>
                <h1 class="text-md">CareerPaths : 2</h1>
                <h1 class="text-md">Projects : 5</h1>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="rounded-lg p-4 ">
              <div class="mb-4">
                <h1 class="text-base font-bold">Top 3 of your campus</h1>
              </div>
              <div class="bg-white rounded-lg shadow-md p-4">
                <div class="flex justify-between mb-2">
                  <h6 class="w-1/4 font-bold">Rank</h6>
                  <h6 class="w-1/2 font-bold">Name</h6>
                  <h6 class="w-1/4 font-bold">Score</h6>
                </div>
                <div class="flex justify-between items-center mb-2">
                  <h5 class="w-1/4">1</h5>
                  <div class="w-1/2 flex items-center">
                    <img
                      src="/src/home/assets/profile.jpg"
                      alt="avatar"
                      class="h-8 w-8 rounded-full mr-2"
                    />
                    <h5>Akhil</h5>
                  </div>
                  <h5 class="w-1/4">1200</h5>
                </div>
                <div class="flex justify-between items-center mb-2">
                  <h5 class="w-1/4">1</h5>
                  <div class="w-1/2 flex items-center">
                    <img
                      src="/src/home/assets/profile.jpg"
                      alt="avatar"
                      class="h-8 w-8 rounded-full mr-2"
                    />
                    <h5>Akhil</h5>
                  </div>
                  <h5 class="w-1/4">1200</h5>
                </div>
                <div class="flex justify-between items-center">
                  <h5 class="w-1/4">1</h5>
                  <div class="w-1/2 flex items-center">
                    <img
                      src="/src/home/assets/profile.jpg"
                      alt="avatar"
                      class="h-8 w-8 rounded-full mr-2"
                    />
                    <h5>Akhil</h5>
                  </div>
                  <h5 class="w-1/4">1200</h5>
                </div>
              </div>
            </div> */}
      </div>
    </div>
  );
}

export default MyBuddy;
