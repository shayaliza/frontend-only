import React from "react";

function MyBuddy() {
  return (
    <div>
      {/* <div className="h-12  text-black p-2">Your buddy</div> */}
      <div class="flex flex-col gap-4 mt-2 ">
        <div class="rounded-lg mb-2">
          <div class="mb-4 flex justify-between">
            <h1 class="text-sm font-bold">Your buddy</h1>
            <p class="text-gray-600 text-xs">Need help?</p>
          </div>
          <div className="w-full mx-auto">
            <div class="flex  overflow-x-auto gap-4">
              <div class="flex flex-col justify-between h-[170px] w-[220px] flex-shrink-0 border-2 shadow-xl border-black rounded-lg p-4">
                <h2 class="flex items-center mb-2 text-[#7933ff] text-lg">
                  <span>
                    <img
                      src="/src/home/assets/enrolled.svg"
                      alt="enroll"
                      class="h-4 w-4 mr-2"
                    />{" "}
                  </span>
                  Enrolled
                </h2>
                <h1 class="text-md">Courses : 4</h1>
                <h1 class="text-md">CareerPaths : 2</h1>
                <h1 class="text-md">Projects : 5</h1>
              </div>
              <div class="flex flex-col justify-between h-[170px] w-[220px] flex-shrink-0 border-2 shadow-xl border-black rounded-lg p-4">
                <h2 class="flex items-center mb-2 text-[#7933ff] text-lg">
                  <span>
                    <img
                      src="/src/home/assets/enrolled.svg"
                      alt="enroll"
                      class="h-4 w-4 mr-2"
                    />{" "}
                  </span>
                  Enrolled
                </h2>
                <h1 class="text-md">Courses : 4</h1>
                <h1 class="text-md">CareerPaths : 2</h1>
                <h1 class="text-md">Projects : 5</h1>
              </div>
              <div class="flex flex-col justify-between h-[170px] w-[220px] flex-shrink-0 border-2 shadow-xl border-black rounded-lg p-4">
                <h2 class="flex items-center mb-2 text-[#7933ff] text-lg">
                  <span>
                    <img
                      src="/src/home/assets/enrolled.svg"
                      alt="enroll"
                      class="h-4 w-4 mr-2"
                    />{" "}
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
      </div>
    </div>
  );
}

export default MyBuddy;
