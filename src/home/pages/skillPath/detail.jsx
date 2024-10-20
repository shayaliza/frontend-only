import React from "react";
import { FaClock, FaDumbbell, FaVideo } from "react-icons/fa6";
import {
  FaEye,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaMoneyBillWave,
  FaBuilding,
} from "react-icons/fa";
import Path from "./path";
import { cn } from "../../../lib/utils";
import GridPattern from "../../../components/ui/grid-pattern";
function SkillPathDetails() {
  const CareerCard = () => {
    return (
      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600 p-6 shadow-md">
        <div className="text-gray-600 dark:text-gray-400">
          Skill path | Human generated
        </div>
        <div className="text-2xl font-bold mt-4 mb-4">Git & Github</div>
        <div className="text-sm">
          You will investigate a dataset from a fictitious company called
          Databel in Power BI, and need to figure out why...
        </div>
        <div className="flex gap-4 mt-4">
          <div className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-lg">
            View Skill Path
          </div>
          <div className="bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Enroll Now
          </div>
        </div>
      </div>
    );
  };

  return (
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
        <div className="flex flex-row">
          <div className="lg:w-1/2 w-full md:p-8 p-6">
            <div className="flex gap-8 mt-2">
              <div className="px-3 py-1 bg-white text-black">
                Human Generated
              </div>
              <div className="px-3 py-1 bg-gray-800 text-white">
                Certification avalaible
              </div>
            </div>
            <div className="md:text-5xl text-2xl font-bold mt-4 text-black dark:text-white">
              Become Frontend Developer
            </div>
            <div className="mt-4 text-sm text-black dark:text-white">
              In this track, you’ll discover everything you need to know to
              become a data engineer by learning Python, SQL, and Git from
              scratch. You'll discover how to interact with relational databases
              to query, input, and modify data and get hands-on experience in
              importing and cleaning data in Python, optimizing your code for
              efficiency, and writing tests to validate your code. Throughout
              this track, you’ll learn some of the essential data engineering
              tools, starting with SQL and Python, before moving on to topics
              such as cloud computing, clearing data, and working with Git.
              These foundational skills will allow you to work with data in
              various ways, building the knowledge you need to become a data
              engineer.   to progress your career by handling common data
              engineering duties.
            </div>
            <div className="flex gap-8 mt-5">
              <div className="px-3 py-1 bg-white text-black">Enrol Now</div>
              <div className="px-3 py-1 bg-gray-800 text-white">
                View Curated Course
              </div>
            </div>
            <div className="p-4 flex space-x-4 flex-row mt-4 ">
              <div className="flex items-center space-x-2 ">
                <FaClock className=" text-black dark:text-white h-5 w-5" />
                <span className=" text-black dark:text-white">2 Hours</span>
              </div>
              <div className="flex  text-black dark:text-white items-center space-x-2">
                <FaVideo className=" h-5 w-5" />
                <span className="">11 Videos</span>
              </div>
              <div className="flex items-center space-x-2  text-black dark:text-white">
                <FaDumbbell className=" h-5 w-5" />
                <span className="">32 Exercises</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 lg:block hidden p-6 space-y-4 text-black dark:text-white m-auto px-32">
            <div className="flex items-center space-x-2">
              <FaEye className="text-blue-500 text-2xl" />
              <span className="text-xl font-semibold">5k Visits Today</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaHtml5 className="text-red-500 text-2xl" />
              <FaCss3Alt className="text-blue-500 text-2xl" />
              <FaJs className="text-yellow-500 text-2xl" />
              <span className="text-xl font-semibold">
                HTML, CSS, JavaScript
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMoneyBillWave className="text-green-500 text-2xl" />
              <span className="text-xl font-semibold">
                Average salary: $50,000/year
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <FaBuilding className="text-gray-600 text-2xl" />
              <span className="text-xl font-semibold">Visit Companies</span>
            </div>
          </div>
        </div>
      </div>

      <div className="final mt-2">
        <Path />
        <div
          className=" 
        text-black dark:text-white
        text-2xl font-bold my-4 w-full pl-4 md:w-full  m-auto"
        >
          Also Must to Know About
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-11/12 final m-auto">
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
        </div>
      </div>
    </div>
  );
}

export default SkillPathDetails;
