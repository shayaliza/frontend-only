import React from "react";
import { FaClock, FaDownload, FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { cn } from "../../../lib/utils";
import GridPattern from "../../../components/ui/grid-pattern";

function Projects() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard/projects/details");
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
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
        <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
          Multiplayer Game - Connect4
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          If you ever wondered how multiplayer games are made or wanted to make
          a game for your weekend, this is the project for you. In this Python
          project, you will be creating a multiplayer Connect4 game for you and
          your friends using the fundamentals of PyGame, Sockets, and game
          development.
        </p>
        <div className="mb-4">
          <span className="font-semibold dark:text-white">Author:</span>
          <span className="text-gray-600 dark:text-gray-300">Apoorv Goyal</span>
          <FaUserFriends className="inline-block ml-1 dark:text-white" />
        </div>
        <div className="mb-4">
          <span className="font-semibold dark:text-white">
            Collaborator(s):
          </span>{" "}
          <span className="text-gray-600 dark:text-gray-300">
            {" "}
            Kevin Paulose, Kiran{" "}
          </span>
          <FaUserFriends className="inline-block ml-1 dark:text-white" />
        </div>
        <div className="mb-4">
          <span className="font-semibold dark:text-white">
            Prerequisite(s):
          </span>{" "}
          <span className="text-gray-600 dark:text-gray-300">Python</span>
        </div>
        <div className="flex flex-row items-center mb-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
          <div className="mr-2 flex flex-row gap-2 text-gray-700 dark:text-gray-300">
            <FaClock className="mt-1" />
            <div>25 hours</div>
          </div>
          <span className="text-gray-500 dark:text-gray-400">
            | Difficulty: Intermediate
          </span>
        </div>
        <h3 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
          Skills to be Learned
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            "Pygame",
            "Game Development",
            "Networking Fundamentals",
            "Socket Communication",
            "Game Engine",
          ].map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 rounded border border-green-600 text-green-600 hover:bg-green-400/10 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400/20 transition duration-300"
            onClick={handleClick}
          >
            View Project
          </button>
          <button className="px-4 py-2 rounded flex items-center bg-green-600 text-white hover:bg-green-500 transition duration-300">
            <FaDownload className="mr-2" /> Download Project
          </button>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="final md:pt-4">
        <div
          className="relative flex size-full overflow-hidden rounded-lg border bg-gradient-to-l from-pink-50 to-blue-50
    dark:bg-gradient-to-l dark:from-gray-500 dark:via-gray-700 dark:to-gray-900
      dark:bg-blackTheme p-8 md:shadow-xl"
        >
          <GridPattern
            width={20}
            height={20}
            x={-1}
            y={-1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] "
            )}
          />
          <div className="w-2/3 mx-0 md:p-0 p-6 text-black dark:text-white">
            <div className="md:text-5xl text-2xl font-bold mt-4 ">
              Learn Programming by Building projects
            </div>
            <div className="mt-4 text-sm">
              Explore reputable programs, distinguished careers, and resources
              you may need along the way. we give you the information, tools,
              and support you need to quickly get into a tech career. Find the
              right carrer for you and make a change.
            </div>

            <div className="md:pt-8 pt-2 ">Start Building Projects</div>
          </div>
        </div>
      </div>
      <div className="final px-4">
        <div className="text-3xl font-bold mt-6 mb-4 text-black dark:text-white">
          Featured Projects
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-auto mt-4">
          <MainCard />
          <MainCard />
        </div>
        <div className="text-3xl font-bold mt-6 mb-4 text-black dark:text-white">
          All Projects
        </div>
        <div class="sticky  top-0 z-10 flex flex-wrap gap-2 mb-2 max-w-[1150px] mx-auto px-4 py-2  overflow-hidden md:overflow-auto md:h-auto">
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
