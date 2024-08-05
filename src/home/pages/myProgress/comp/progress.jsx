import React, { useState } from "react";
import TrendingCourse from "./trendingCourse";
import TrendingProject from "./trendingProject";
import TrendingCareer from "./trendingCareer";

function Progress() {
  const [activeTab, setActiveTab] = useState("inProgress");

  const renderContent = () => {
    if (activeTab === "inProgress") {
      return (
        <div className="flex flex-wrap justify-between">
          <div class=" bg-white flex flex-col justify-around rounded-lg shadow-xl my-5 mr-2.5 h-[220px] w-[32%] max-[900px]:w-full">
            <div class="flex items-center p-4">
              <img
                src="/src/assets/python_logo.png"
                alt="course-logo"
                class="w-7 h-7 mr-4 rounded-2xl"
              />
              <h1 class="text-base font-bold">Introduction to Python</h1>
            </div>
            <div class=" p-4">
              <p class="text-gray-700 text-[0.8rem]">
                Master the basics of data analysis in Python. Expand your
                skillset by learning scientific computing with numpy.
              </p>
            </div>
            <div class="p-4 text-center">
              <button class="bg-[#cd27ff] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                Go to Course
              </button>
            </div>
          </div>
          <div class=" bg-white flex flex-col justify-around rounded-lg shadow-xl my-5 mr-2.5 h-[220px] w-[32%] max-[900px]:w-full">
            <div class="flex items-center p-4">
              <img
                src="/src/assets/python_logo.png"
                alt="course-logo"
                class="w-7 h-7 mr-4 rounded-2xl"
              />
              <h1 class="text-base font-bold">Introduction to Python</h1>
            </div>
            <div class=" p-4">
              <p class="text-gray-700 text-[0.8rem]">
                Master the basics of data analysis in Python. Expand your
                skillset by learning scientific computing with numpy.
              </p>
            </div>
            <div class="p-4 text-center">
              <button class="bg-[#cd27ff] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                Go to Course
              </button>
            </div>
          </div>
          <div class=" bg-white flex flex-col justify-around rounded-lg shadow-xl my-5 mr-2.5 h-[220px] w-[32%] max-[900px]:w-full">
            <div class="flex items-center p-4">
              <img
                src="/src/assets/python_logo.png"
                alt="course-logo"
                class="w-7 h-7 mr-4 rounded-2xl"
              />
              <h1 class="text-base font-bold">Introduction to Python</h1>
            </div>
            <div class=" p-4">
              <p class="text-gray-700 text-[0.8rem]">
                Master the basics of data analysis in Python. Expand your
                skillset by learning scientific computing with numpy.
              </p>
            </div>
            <div class="p-4 text-center">
              <button class="bg-[#cd27ff] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                Go to Course
              </button>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === "completed") {
      return (
        <div>
          <div class="flex justify-center my-5 items-center h-64 bg-[rgba(4, 4, 255, 0.048)] border border-dotted border-black">
            <h6 class="">No Completed Projects</h6>
          </div>
          {/* Add more completed content here */}
        </div>
      );
    }
  };
  // Take Test
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;
  return (
    <div className="">
      <div className=" mt-5 border-b border-black flex space-x-4 mb-4 ">
        <button
          className={` pb-3  rounded text-xl font-semibold ${
            activeTab === "inProgress"
              ? " text-[#cd27ff] border-black border-b-2"
              : " text-black "
          }`}
          onClick={() => setActiveTab("inProgress")}
        >
          In Progress
        </button>
        <button
          className={`tab pb-3 rounded text-xl font-semibold ${
            activeTab === "completed"
              ? " text-[#cd27ff] border-black border-b-2"
              : "text-black "
          }`}
          onClick={() => setActiveTab("completed")}
        >
          Completed
        </button>
      </div>
      <div className="">{renderContent()}</div>
      {/* Your Buddy */}
      <div>
        <div class="flex flex-col md:flex-row gap-4  my-5">
          <div class="rounded-lg my-5 md:w-2/3">
            <div class="mb-4 flex justify-between">
              <h1 class="text-base font-bold">Your buddy</h1>
              <p class="text-gray-600">Need help?</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="flex flex-col justify-between h-[170px] border-2 shadow-xl border-black rounded-lg p-4">
                <h2 class="flex items-center mb-2 text-[#7933ff] text-lg">
                  <span>
                    <img
                      src="/src/assets/enrolled.svg"
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
              <div class="flex flex-col justify-between h-[170px] border-2 shadow-xl border-black rounded-lg p-4">
                <h2 class="flex items-center mb-2 text-[#7933ff] text-lg">
                  <span>
                    <img
                      src="/src/assets/enrolled.svg"
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
              <div class="flex flex-col justify-between h-[170px] border-2 shadow-xl border-black rounded-lg p-4">
                <h2 class="flex items-center mb-2 text-[#7933ff] text-lg">
                  <span>
                    <img
                      src="/src/assets/enrolled.svg"
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
          <div class="rounded-lg p-4 md:w-1/3">
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
                    src="/src/assets/profile.jpg"
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
                    src="/src/assets/profile.jpg"
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
                    src="/src/assets/profile.jpg"
                    alt="avatar"
                    class="h-8 w-8 rounded-full mr-2"
                  />
                  <h5>Akhil</h5>
                </div>
                <h5 class="w-1/4">1200</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Take a Test */}
      <div className="my_progress_third_card my-8 bg-[#7933ff] text-white p-5 flex flex-col relative">
        <h1 className="text-lg w-9/12 font-medium">
          Please take your skill test so that we can improve your
          recommendations and can suggest you better content or projects
        </h1>

        <button className="w-36 h-10 bg-white text-black font-semibold rounded-lg mt-5">
          Take Test
        </button>
        <p
          className="close_banner absolute top-6 right-6 font-semibold cursor-pointer"
          onClick={handleClose}
        >
          X
        </p>
      </div>

      {/* Trending Course with Swiper */}
      <div class="mb-4 flex justify-between">
        <h1 class="text-lg font-bold">Trending Courses</h1>
      </div>
      <TrendingCourse />
      {/* Trending Career with Swiper */}
      <div class="mb-4 flex justify-between">
        <h1 class="text-lg font-bold">Trending Projects</h1>
      </div>
      <TrendingProject />
      {/* Trending Career with Swiper */}
      <div class="mb-4 flex justify-between">
        <h1 class="text-lg font-bold">Trending Career Paths</h1>
      </div>
      <TrendingCareer />
    </div>
  );
}

export default Progress;
