import React from "react";
import { FaClock, FaDownload, FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/projects/details");
  };
  const CareerCard = () => {
    return (
      <div className="flex flex-col p-4 bg-white shadow-md border">
        <div className="text-[#8677ae] text-sm">ASSESMENT</div>
        <div className="font-bold text-black">Azure Fundamentals</div>

        <div className="border border-gray-200 mt-10"></div>
        <div className="flex justify-between mt-2" onClick={handleClick}>
          <div className="text-gray-800">Theory</div>
          <div className="flex gap-3">
            <div className="text-blue-500 font-semibold">Topics</div>
            <div className="border border-gray-800 rounded-md px-2 text-black ">
              Start
            </div>
          </div>
        </div>
      </div>
    );
  };
  const MainCard = () => {
    return (
      <div className="bg-card p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2">Multiplayer Game - Connect4</h2>
        <p className="text-gray-500 mb-4">
          If you ever wondered how multiplayer games are made or wanted to make
          a game for your weekend, this is the project for you. In this python
          project you will be creating a multiplayer Connect4 game for you and
          your friends using fundamentals of PyGame, Sockets and game
          development.
        </p>
        <div className="mb-4">
          <span className="font-semibold">Author:</span> Apoorv Goyal{" "}
          <FaUserFriends className="inline-block ml-1" />
        </div>
        <div className="mb-4">
          <span className="font-semibold">Collaborator(s):</span> Kevin Paulose,
          Kiran <FaUserFriends className="inline-block ml-1" />
        </div>
        <div className="mb-4">
          <span className="font-semibold">Prerequisite(s):</span> Python
        </div>
        <div className="flex flex-row items-center mb-4 bg-gray-100 w-max p-2 rounded-md">
          <div className="mr-2 flex flex-row gap-2 ">
            <FaClock className="mt-1" />
            <div>25 hours</div>
          </div>
          <span className="text-muted-foreground">
            | Difficulty: Intermediate
          </span>
        </div>
        <h3 className="font-semibold mb-2 text-gray-700">
          Skills to be Learned
        </h3>
        <div className="flex flex-wrap gap-2 mb-4 text-gray-700">
          <span className="px-2 py-1 rounded bg-gray-200">Pygame</span>
          <span className="bg-gray-200 px-2 py-1 rounded">
            Game Development
          </span>
          <span className="bg-gray-200 px-2 py-1 rounded">
            Networking Fundamentals
          </span>
          <span className="bg-gray-200 px-2 py-1 rounded">
            Socket Communication
          </span>
          <span className="bg-gray-200 px-2 py-1 rounded">Game Engine</span>
        </div>
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 rounded border-green-600 text-green-600 hover:bg-green-400/10 border"
            onClick={handleClick}
          >
            View Project
          </button>
          <button className="px-4 py-2 rounded flex items-center bg-green-600 text-white ">
            <FaDownload className="mr-2" /> Download Project
          </button>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="final m-auto flex flex-row  bg-gradient-to-r rounded-lg text-white from-[#f4b9cd] to-[#8677ae]  md:mt-5 mt-1 ">
        <div className="xl:w-1/2 w-full md:p-8 p-6">
          <div className="md:text-5xl text-2xl font-bold mt-4 ">
            Learn Programming by Building projects
          </div>
          <div className="mt-4 text-sm">
            Explore reputable programs, distinguished careers, and resources you
            may need along the way. we give you the information, tools, and
            support you need to quickly get into a tech career. Find the right
            carrer for you and make a change.
          </div>
          <div className=" px-4 py-2 rounded-md mt-4 text-white bg-orange-600 w-max ">
            Start Building Projects
          </div>
        </div>
        <div className="xl:w-1/2 hidden">
          <div className="grid grid-cols-2 gap-4  my-4 mr-2">
            <CareerCard />
            <CareerCard />
            <CareerCard />
            <CareerCard />
          </div>
        </div>
      </div>
      <div className="final px-4">
        <div className="text-3xl font-bold mt-6 mb-4">Featured Projects</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-auto mt-4">
          <MainCard />
          <MainCard />
        </div>
        <div className="text-3xl font-bold mt-6 mb-4">All Projects</div>
        <div class="sticky  top-0 z-10 flex flex-wrap gap-2 mb-2 max-w-[1150px] mx-auto px-4 py-2 bg-white  overflow-hidden md:overflow-auto md:h-auto">
          <div
            class="tagCourse p-3 bg-black text-white rounded-md flex-shrink-0"
            data-tag="all"
          >
            All
          </div>
          <div
            class="tagCourse p-3 bg-gray-200 text-black rounded-md flex-shrink-0"
            data-tag="python"
          >
            Python
          </div>
          <div
            class="tagCourse p-3 bg-gray-200 text-black rounded-md flex-shrink-0"
            data-tag="web-development"
          >
            Web Development
          </div>
          <div
            class="tagCourse p-3 bg-gray-200 text-black rounded-md flex-shrink-0"
            data-tag="frontend"
          >
            Frontend
          </div>

          <div
            class="tagCourse p-3 bg-gray-200 text-black rounded-md flex-shrink-0"
            data-tag="python"
          >
            Python
          </div>
          <div
            class="tagCourse p-3 bg-gray-200 text-black rounded-md flex-shrink-0"
            data-tag="web-development"
          >
            Web Development
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  m-auto mt-4">
          <MainCard />
          <MainCard />
        </div>
      </div>
    </>
  );
}

export default Projects;
