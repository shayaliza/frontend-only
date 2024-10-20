import React from "react";
import {
  FaCheckCircle,
  FaClock,
  FaDumbbell,
  FaPlayCircle,
  FaStar,
  FaVideo,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { cn } from "../../../lib/utils";
import GridPattern from "../../../components/ui/grid-pattern";
import FAQ from "./fasq";

function CourseDetails() {
  const navigate = useNavigate();
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
        <div className="">
          <div className="w-full p-8">
            <div className="text-[#d34eff] dark:text-[#b784ff]">Course</div>
            <div className="md:text-3xl text-2xl font-bold mt-4 dark:text-white">
              Introduction to Pandas and Numpy for Data Analysis
            </div>
            <div className="mt-4 text-sm md:text-base dark:text-gray-300">
              Introduction to Pandas and Numpy for Data Analysis Introduction to
              Pandas and Numpy for Data Analysis Introduction to Pandas and
              Numpy for Data Analysis Introduction to Pandas and Numpy for Data
              Analysis Pandas and Numpy for Data Analysis Introduction to Pandas
              and Numpy for Data Analysis Introduction to Pandas and Numpy for
              Data Analysis
            </div>
            <div className="flex items-center space-x-1 mt-4">
              <span className="ml-2 text-sm text-gray-800 dark:text-gray-400 mr-2">
                4.6
              </span>
              <FaStar className="text-yellow-500 h-5 w-5" />
              <FaStar className="text-yellow-500 h-5 w-5" />
              <FaStar className="text-yellow-500 h-5 w-5" />
              <FaStar className="text-yellow-500 h-5 w-5" />
              <FaStar className="text-yellow-500 h-5 w-5" />
              <span className="ml-1 text-sm text-gray-800 dark:text-gray-400">
                (9,323 ratings)
              </span>
            </div>
            <div className="p-4 flex space-x-4 flex-row mt-4">
              <div className="flex items-center space-x-2">
                <FaClock className="text-black dark:text-gray-300 h-5 w-5" />
                <span className="text-gray-700 dark:text-gray-300">
                  2 Hours
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FaVideo className="text-black dark:text-gray-300 h-5 w-5" />
                <span className="text-gray-700 dark:text-gray-300">
                  11 Videos
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FaDumbbell className="text-black dark:text-gray-300 h-5 w-5" />
                <span className="text-gray-700 dark:text-gray-300">
                  32 Exercises
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-end -mt-[70px] ">
            <button
              onClick={() => {
                navigate("/learningmodule");
              }}
              className="text-md p-2 my-2 mr-2 bg-black dark:bg-gray-800 dark:text-white text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 transition-all"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="gap-16 flex md:flex-row flex-col">
        <div className="md:w-2/3 w-11/12 m-auto">
          <div className="text-3xl font-bold mt-4 dark:text-white">
            Course Overview
          </div>
          <div className="mt-6 text-justify dark:text-gray-300">
            Introduction to Pandas and Numpy for Data Analysis Introduction to
            Pandas and Numpy for Data Analysis Introduction to Pandas and Numpy
            for Data Analysis Introduction to Pandas and Numpy for Data Analysis
            Pandas and Numpy for Data Analysis Introduction to Pandas and Numpy
            for Data Analysis Introduction to Pandas and Numpy for Data Analysis
          </div>
          <FAQ />
          <div>
            <div className="text-3xl font-bold mt-6 mb-4 dark:text-white">
              Projects
            </div>
            <div className="flex md:justify-between flex-col md:flex-row gap-2">
              <div className="bg-white dark:bg-gray-800 dark:border-gray-700 shadow-lg rounded-lg border border-gray-200 p-6 max-w-sm mx-auto">
                <div className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  PROJECT
                </div>
                <div className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Dr. Semmelweis and the Discovery of Handwashing
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
                  Beginner
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  porro culpa harum quae provident reprehenderit? Cumque,
                </p>
                <div className="border-b border-gray-300 dark:border-gray-600 mb-4"></div>
                <div className="flex justify-between items-center text-gray-700 dark:text-gray-300">
                  <div className="flex items-center space-x-2">
                    <FaClock className="text-gray-500 dark:text-gray-400" />
                    <span>1h</span>
                  </div>
                  <button className="flex items-center border border-gray-800 dark:border-gray-500 px-4 py-1 rounded-sm text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500 focus:outline-none">
                    <span>Start</span>
                  </button>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 dark:border-gray-700 shadow-lg rounded-lg border border-gray-200 p-6 max-w-sm mx-auto">
                <div className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  PROJECT
                </div>
                <div className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Dr. Semmelweis and the Discovery of Handwashing
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
                  Beginner
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  porro culpa harum quae provident reprehenderit? Cumque,
                </p>
                <div className="border-b border-gray-300 dark:border-gray-600 mb-4"></div>
                <div className="flex justify-between items-center text-gray-700 dark:text-gray-300">
                  <div className="flex items-center space-x-2">
                    <FaClock className="text-gray-500 dark:text-gray-400" />
                    <span>1h</span>
                  </div>
                  <button className="flex items-center border border-gray-800 dark:border-gray-500 px-4 py-1 rounded-sm text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500 focus:outline-none">
                    <span>Start</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold mt-6 mb-4 dark:text-white">
              Skill Assessments
            </div>
            <div className="flex md:justify-between flex-col md:flex-row gap-2">
              <div className="bg-white dark:bg-gray-800 dark:border-gray-700 shadow-lg rounded-lg border border-gray-200 p-6 max-w-sm mx-auto">
                <div className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  PROJECT
                </div>
                <div className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Dr. Semmelweis and the Discovery of Handwashing
                </div>
                <div className="border-b border-gray-300 dark:border-gray-600 mb-4"></div>
                <div className="flex justify-between items-center text-gray-700 dark:text-gray-300">
                  <div className="flex items-center space-x-2">
                    <FaClock className="text-gray-500 dark:text-gray-400" />
                    <span>1h</span>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center px-4 py-1 rounded-sm text-blue-500 dark:text-blue-400 font-bold hover:text-blue-600 dark:hover:text-blue-500 focus:outline-none">
                      <span>Topics</span>
                    </button>
                    <button className="flex items-center border border-gray-800 dark:border-gray-500 px-4 py-1 rounded-sm text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500 focus:outline-none">
                      <span>Start</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 dark:border-gray-700 shadow-lg rounded-lg border border-gray-200 p-6 max-w-sm mx-auto">
                <div className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  PROJECT
                </div>
                <div className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Dr. Semmelweis and the Discovery of Handwashing
                </div>
                <div className="border-b border-gray-300 dark:border-gray-600 mb-4"></div>
                <div className="flex justify-between items-center text-gray-700 dark:text-gray-300">
                  <div className="flex items-center space-x-2">
                    <FaClock className="text-gray-500 dark:text-gray-400" />
                    <span>1h</span>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center px-4 py-1 rounded-sm text-blue-500 dark:text-blue-400 font-bold hover:text-blue-600 dark:hover:text-blue-500 focus:outline-none">
                      <span>Topics</span>
                    </button>
                    <button className="flex items-center border border-gray-800 dark:border-gray-500 px-4 py-1 rounded-sm text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500 focus:outline-none">
                      <span>Start</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certificate */}
          <div className="bg-gray-800 text-white p-8 mt-4 mb-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              Earn a certificate of completion
            </h2>
            <p className="mb-6">
              Show your network you've done the work by earning a certificate of
              completion for each course or path you finish.
            </p>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-12 0v1z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold">Show proof</h4>
                <p>
                  Receive a certificate that demonstrates you've completed a
                  course or path.
                </p>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v8m0 0H8m4 0h4"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold">Download or print</h4>
                <p>
                  Download your certificate as a printable PDF to share in your
                  professional network or print for your records.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/3 w-11/12 m-auto md:m-0">
          {/* Skills You'll Gain */}
          <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Skills You'll Gain
            </h2>
            <div className="flex items-center text-gray-700 dark:text-gray-300 mb-3">
              <FaCheckCircle className="text-black dark:text-white mr-2" />
              <span className="text-lg">Structure pages with HTML</span>
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-300 mb-3">
              <FaCheckCircle className="text-black dark:text-white mr-2" />
              <span className="text-lg">Style pages with CSS</span>
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-300 mb-3">
              <FaCheckCircle className="text-black dark:text-white mr-2" />
              <span className="text-lg">Implement layouts</span>
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-300 mb-3">
              <FaCheckCircle className="text-black dark:text-white mr-2" />
              <span className="text-lg">Create responsive designs</span>
            </div>
          </div>

          {/* PREREQUISITES */}
          <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="flex items-center text-gray-700 dark:text-gray-300 mb-3">
              <FaCheckCircle className="text-black dark:text-white mr-2" />
              <span className="text-lg font-bold">PREREQUISITES</span>
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-300 mb-3">
              <FaCheckCircle className="text-black dark:text-white mr-2" />
              <span className="text-lg text-blue-600 dark:text-blue-400">
                Intermediate Python
              </span>
            </div>
          </div>

          {/* PART OF THESE TRACKS */}
          <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="flex items-center text-gray-700 dark:text-gray-300 mb-3">
              <FaCheckCircle className="text-black dark:text-white mr-2" />
              <span className="text-lg font-bold">PART OF THESE TRACKS</span>
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-300 mb-3">
              <FaCheckCircle className="text-black dark:text-white mr-2" />
              <span className="text-lg text-blue-600 dark:text-blue-400">
                Associate Data Scientist
              </span>
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-300 mb-3">
              <FaCheckCircle className="text-black dark:text-white mr-2" />
              <span className="text-lg text-blue-600 dark:text-blue-400">
                Data Analyst
              </span>
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-300 mb-3">
              <FaCheckCircle className="text-black dark:text-white mr-2" />
              <span className="text-lg text-blue-600 dark:text-blue-400">
                Data Manipulation
              </span>
            </div>
          </div>

          {/* COLLABORATORS */}
          <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="flex items-center text-gray-700 dark:text-gray-300 mb-3">
              <FaCheckCircle className="text-black dark:text-white mr-2" />
              <span className="text-lg font-bold">COLLABORATORS</span>
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-300 mb-3">
              <FaCheckCircle className="text-black dark:text-white mr-2" />
              <span className="text-lg text-blue-600 dark:text-blue-400">
                Amy Peterson
              </span>
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-300 mb-3">
              <FaCheckCircle className="text-black dark:text-white mr-2" />
              <span className="text-lg text-blue-600 dark:text-blue-400">
                Adel Nehme
              </span>
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-300 mb-3">
              <FaCheckCircle className="text-black dark:text-white mr-2" />
              <span className="text-lg text-blue-600 dark:text-blue-400">
                Alex Yarosh
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
