import React from "react";
import {
  FaCheckCircle,
  FaClock,
  FaDumbbell,
  FaPlayCircle,
  FaStar,
  FaVideo,
} from "react-icons/fa";
import FAQ from "./fasq";

function CourseDetails() {
  return (
    <div className="bg-[#F8F9FB]">
      <div className="2xl:w-[1250px] w-full m-auto  bg-white md:mt-10  border-2 border-black">
        <div className="xl:w-2/3 w-full p-8">
          <div className="text-[#d34eff]">Course</div>
          <div className="md:text-3xl text-2xl font-bold mt-4 ">
            Introduction to Pandas and Numpy for Data Analysis
          </div>
          <div className="mt-4 text-sm md:text-base">
            Introduction to Pandas and Numpy for Data Analysis Introduction to
            Pandas and Numpy for Data Analysis Introduction to Pandas and Numpy
            for Data Analysis Introduction to Pandas and Numpy for Data Analysis
            Pandas and Numpy for Data Analysis Introduction to Pandas and Numpy
            for Data Analysis Introduction to Pandas and Numpy for Data Analysis
          </div>
          <div className="flex items-center space-x-1 mt-4">
            <span className="ml-2 text-sm text-gray-800 mr-2">4.6</span>
            <FaStar className="text-yellow-500 h-5 w-5" />
            <FaStar className="text-yellow-500 h-5 w-5" />
            <FaStar className="text-yellow-500 h-5 w-5" />
            <FaStar className="text-yellow-500 h-5 w-5" />
            <FaStar className="text-yellow-500 h-5 w-5" />
            <span className="ml-1 text-sm text-gray-800">(9,323 ratings)</span>
          </div>
          <div className="p-4 flex space-x-4 flex-row mt-4">
            <div className="flex items-center space-x-2">
              <FaClock className="text-black h-5 w-5" />
              <span className="text-gray-700">2 Hours</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaVideo className="text-black h-5 w-5" />
              <span className="text-gray-700">11 Videos</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaDumbbell className="text-black h-5 w-5" />
              <span className="text-gray-700">32 Exercises</span>
            </div>
          </div>
        </div>
      </div>
      <div className="final   gap-16 flex md:flex-row flex-col">
        <div className=" md:w-2/3 w-11/12 m-auto">
          <div className="text-3xl font-bold mt-4">Course Overview</div>
          <div className="mt-6 text-justify">
            Introduction to Pandas and Numpy for Data Analysis Introduction to
            Pandas and Numpy for Data Analysis Introduction to Pandas and Numpy
            for Data Analysis Introduction to Pandas and Numpy for Data Analysis
            Pandas and Numpy for Data Analysis Introduction to Pandas and Numpy
            for Data Analysis Introduction to Pandas and Numpy for Data Analysis
          </div>
          <FAQ />
          <div>
            <div className="text-3xl font-bold mt-6 mb-4">Projects</div>
            <div className="flex md:justify-between flex-col md:flex-row gap-2">
              <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6 max-w-sm mx-auto">
                <div className="text-xl font-semibold text-gray-600 mb-2">
                  PROJECT
                </div>
                <div className="text-xl font-bold text-gray-900 mb-4">
                  Dr. Semmelweis and the Discovery of Handwashing
                </div>
                <div className="text-sm font-medium text-gray-600 mb-4">
                  Beginner
                </div>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  porro culpa harum quae provident reprehenderit? Cumque,
                </p>
                <div className="border-b border-gray-300 mb-4"></div>
                <div className="flex justify-between items-center text-gray-700">
                  <div className="flex items-center space-x-2">
                    <FaClock className="text-gray-500" />
                    <span>1h</span>
                  </div>
                  <button className="flex items-center border border-gray-800 px-4 py-1 rounded-sm text-blue-500 hover:text-blue-600 focus:outline-none">
                    <span>Start</span>
                  </button>
                </div>
              </div>
              <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6 max-w-sm mx-auto">
                <div className="text-xl font-semibold text-gray-600 mb-2">
                  PROJECT
                </div>
                <div className="text-xl font-bold text-gray-900 mb-4">
                  Dr. Semmelweis and the Discovery of Handwashing
                </div>
                <div className="text-sm font-medium text-gray-600 mb-4">
                  Beginner
                </div>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  porro culpa harum quae provident reprehenderit? Cumque,
                </p>
                <div className="border-b border-gray-300 mb-4"></div>
                <div className="flex justify-between items-center text-gray-700">
                  <div className="flex items-center space-x-2">
                    <FaClock className="text-gray-500" />
                    <span>1h</span>
                  </div>
                  <button className="flex items-center border border-gray-800 px-4 py-1 rounded-sm text-blue-500 hover:text-blue-600 focus:outline-none">
                    <span>Start</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold mt-6 mb-4">Skill Assesments</div>
            <div className="flex md:justify-between flex-col md:flex-row gap-2">
              <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6 max-w-sm mx-auto">
                <div className="text-xl font-semibold text-gray-600 mb-2">
                  PROJECT
                </div>
                <div className="text-xl font-bold text-gray-900 mb-4">
                  Dr. Semmelweis and the Discovery of Handwashing
                </div>

                <div className="border-b border-gray-300 mb-4"></div>
                <div className="flex justify-between items-center text-gray-700">
                  <div className="flex items-center space-x-2">
                    <FaClock className="text-gray-500" />
                    <span>1h</span>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center  px-4 py-1 rounded-sm text-blue-500 font-bold hover:text-blue-600 focus:outline-none">
                      <span>Topics</span>
                    </button>
                    <button className="flex items-center border border-gray-800 px-4 py-1 rounded-sm text-blue-500 hover:text-blue-600 focus:outline-none">
                      <span>Start</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6 max-w-sm mx-auto">
                <div className="text-xl font-semibold text-gray-600 mb-2">
                  PROJECT
                </div>
                <div className="text-xl font-bold text-gray-900 mb-4">
                  Dr. Semmelweis and the Discovery of Handwashing
                </div>

                <div className="border-b border-gray-300 mb-4"></div>
                <div className="flex justify-between items-center text-gray-700">
                  <div className="flex items-center space-x-2">
                    <FaClock className="text-gray-500" />
                    <span>1h</span>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center  px-4 py-1 rounded-sm text-blue-500 font-bold hover:text-blue-600 focus:outline-none">
                      <span>Topics</span>
                    </button>
                    <button className="flex items-center border border-gray-800 px-4 py-1 rounded-sm text-blue-500 hover:text-blue-600 focus:outline-none">
                      <span>Start</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certificate */}
          <div className="bg-gray-800 text-white p-8  mt-4 mb-4 rounded-lg">
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
                    d="M7 16V4m0 0L3 8m4-4h10l4 4m-4 4H7m14 0v12M5 12h14"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold">Build a collection</h4>
                <p>
                  The more courses and paths you complete, the more certificates
                  you collect.
                </p>
              </div>
            </div>

            <div className="flex items-center">
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
                    d="M17.657 16.657L13.414 20.914a2 2 0 01-2.828 0L9.343 16.657m0-4.696l-2.644-2.644a2 2 0 010-2.828l2.644-2.644m6.314 6.315a2 2 0 010 2.828l2.644 2.644a2 2 0 01-2.828 0L17.657 16.657m0 0L20 21m-2.343-4.343L15.657 17.657m0 0l-4.696 4.696a2 2 0 01-2.828 0l-2.644-2.644m0-4.696l2.644-2.644a2 2 0 012.828 0l4.696 4.696"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold">Share with your network</h4>
                <p>
                  Easily add certificates of completion to your LinkedIn profile
                  to share your accomplishments.
                </p>
              </div>
            </div>
          </div>
          {/* LST */}
          <div className="text-3xl font-bold mt-6 mb-4">Learning Resources</div>

          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                How to Learn Python (Step-by-Step)
              </h2>
              <p className="text-gray-600 text-sm pt-4 pb-4">
                Learn Python the right way, avoid the "cliff of boring"...
              </p>
              <a
                href="#"
                className="inline-block  py-2 text-blue-600 font-medium rounded-lg "
              >
                Read Article
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                How to Learn Python (Step-by-Step)
              </h2>
              <p className="text-gray-600 text-sm pt-4 pb-4">
                Learn Python the right way, avoid the "cliff of boring"...
              </p>
              <a
                href="#"
                className="inline-block  py-2 text-blue-600 font-medium rounded-lg "
              >
                Read Article
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                How to Learn Python (Step-by-Step)
              </h2>
              <p className="text-gray-600 text-sm pt-4 pb-4">
                Learn Python the right way, avoid the "cliff of boring"...
              </p>
              <a
                href="#"
                className="inline-block  py-2 text-blue-600 font-medium rounded-lg "
              >
                Read Article
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 w-11/12 m-auto md:m-0 ">
          <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Skills You'll Gain
            </h2>
            <div className="flex items-center text-gray-700 mb-3">
              <FaCheckCircle className="text-black mr-2" />
              <span className="text-lg">Structure pages with HTML</span>
            </div>
            <div className="flex items-center text-gray-700 mb-3">
              <FaCheckCircle className="text-black mr-2" />
              <span className="text-lg">Style pages with CSS</span>
            </div>
            <div className="flex items-center text-gray-700 mb-3">
              <FaCheckCircle className="text-black mr-2" />
              <span className="text-lg">Implement layouts</span>
            </div>
            <div className="flex items-center text-gray-700 mb-3">
              <FaCheckCircle className="text-black mr-2" />
              <span className="text-lg">Create responsive designs</span>
            </div>
          </div>
          <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="flex items-center text-gray-700 mb-3">
              <FaCheckCircle className="text-black mr-2 " />
              <span className="text-lg font-bold">PREREQUISITES</span>
            </div>
            <div className="flex items-center text-gray-700 mb-3">
              <FaCheckCircle className="text-black mr-2" />
              <span className="text-lg text-blue-600">Intermediate Python</span>
            </div>
          </div>
          <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="flex items-center text-gray-700 mb-3">
              <FaCheckCircle className="text-black mr-2 " />
              <span className="text-lg font-bold">PART OF THESE TRACKS</span>
            </div>
            <div className="flex items-center text-gray-700 mb-3">
              <FaCheckCircle className="text-black mr-2" />
              <span className="text-lg text-blue-600">
                Associate Data Scientist
              </span>
            </div>
            <div className="flex items-center text-gray-700 mb-3">
              <FaCheckCircle className="text-black mr-2" />
              <span className="text-lg text-blue-600">Data Analyst</span>
            </div>
            <div className="flex items-center text-gray-700 mb-3">
              <FaCheckCircle className="text-black mr-2" />
              <span className="text-lg text-blue-600">Data Manipulation</span>
            </div>
          </div>
          <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="flex items-center text-gray-700 mb-3">
              <FaCheckCircle className="text-black mr-2 " />
              <span className="text-lg font-bold">COLLABORATORS</span>
            </div>
            <div className="flex items-center text-gray-700 mb-3">
              <FaCheckCircle className="text-black mr-2" />
              <span className="text-lg text-blue-600">Amy Peterson</span>
            </div>
            <div className="flex items-center text-gray-700 mb-3">
              <FaCheckCircle className="text-black mr-2" />
              <span className="text-lg text-blue-600">Adel Nehme</span>
            </div>
            <div className="flex items-center text-gray-700 mb-3">
              <FaCheckCircle className="text-black mr-2" />
              <span className="text-lg text-blue-600">Alex Yarosh</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
