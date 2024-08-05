import React from "react";
import { FaBook, FaClipboardCheck, FaProjectDiagram } from "react-icons/fa";
import { FaRightLong, FaRightToBracket } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function CareerPath() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/career/details");
  };
  const CareerCard = () => {
    return (
      <div className="bg-white rounded-lg border-black border p-6 shadow-md">
        <h2 className="text-lg font-bold text-gray-800 mb-2">
          Full-Stack Engineer
        </h2>
        <p className="text-black text-sm pt-4 pb-4">
          A full-stack engineer can get a project done from start to finish,
          back-end to front-end.
        </p>
        <div className="flex gap-2">
          <img
            src="/src/assets/profile.png"
            alt="profile"
            className="h-10 w-10 rounded-full mr-2"
          />
          <div className="flex flex-col ">
            <div className="text-sm font-semibold">Techsnap</div>
            <div className="text-xs">company</div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-2">
              <FaBook />
              <span>12 Courses</span>
            </div>
            <div className="flex items-center gap-2">
              <FaProjectDiagram />
              <span>3 Projects</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm pt-3">
            <FaClipboardCheck />
            <span>3 Skill Assessments</span>
          </div>
        </div>
        <div
          className="bg-blue-800 mt-8 text-white text-sm py-2 px-4 rounded-lg text-center font-bold"
          onClick={handleClick}
        >
          View careerpath
        </div>
      </div>
    );
  };
  return (
    <div className=" w-full">
      <div className="final m-auto  bg-gradient-to-r rounded-lg text-white from-[#f4b9cd] to-[#8677ae]  md:mt-5 mt-1 ">
        <div className="lg:w-1/2 w-full md:p-8 p-6">
          <div className="md:text-5xl text-2xl font-bold mt-4 ">
            Discover your path and land on your dream career
          </div>
          <div className="mt-4 text-sm">
            Explore reputable programs, distinguished careers, and resources you
            may need along the way. we give you the information, tools, and
            support you need to quickly get into a tech career. Find the right
            carrer for you and make a change.
          </div>

          <div className="md:pt-8 pt-2 text-black">
            Create Possibilities For Your Future.
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
      <div className="final w-11/12 m-auto  hidden md:block">
        <div className="text-3xl font-bold mt-6 mb-4">Featured careerpaths</div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
          <CareerCard />
          <CareerCard />
          <CareerCard />
        </div>
        <div className="text-3xl font-bold mt-6 mb-4">All careerpaths</div>

        {/* Tags */}
        <div class="sticky  top-0 z-10 flex flex-wrap gap-2 mb-8 final mx-auto px-4 py-2 bg-white h-14 overflow-hidden md:overflow-auto md:h-auto">
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
          <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
            Python
          </div>
          <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
            Python
          </div>
          <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
            Python
          </div>
          <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
            Python
          </div>
          <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
            Python
          </div>
          <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
            Python
          </div>
          <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
            Python
          </div>
          <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
            Python
          </div>
          <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
            Python
          </div>
          <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
            Python
          </div>
          <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
            Python
          </div>
          <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
            Python
          </div>
          <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
            Python
          </div>
          <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
            Python
          </div>
          <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
            Python
          </div>
          <div class="p-3 bg-gray-200 text-black rounded-md flex-shrink-0">
            +8
          </div>
        </div>
        {/* <div className="text-3xl font-bold mt-6 mb-4">All careerpaths</div> */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-10">
          <CareerCard />
          <CareerCard />
          <CareerCard />
        </div>
      </div>
      {/* Mobile View */}
      <div className="md:hidden block">
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
        <div className="flex flex-col mb-2 ml-2">
          <div className="flex flex-row gap-4 items-center w-full mb-2">
            <span className="text-sm font-semibold p-1">Sort by:</span>
            <div className="flex  gap-2  flex-row w-auto">
              <div className="flex items-center rounded-3xl border-gray-500 p-1 border text-xs">
                <span className="mr-2">Option 1:</span>
                <select className="border-none focus:outline-none rounded-md font-bold">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center w-full ">
            <span className="text-sm font-semibold p-1">Filter by:</span>
            <div className="flex  gap-1  flex-row w-auto">
              <div className="flex items-center rounded-3xl border-gray-500 p-1 border text-xs ">
                <span className="mr-1">Option 1:</span>
                <select className="border-none focus:outline-none rounded-md font-bold">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              <div className="flex items-center rounded-3xl border-gray-500 p-1 border text-xs">
                <span className="mr-1">Option 1:</span>
                <select className="border-none focus:outline-none rounded-md font-bold">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden grid grid-cols-2 gap-4 pb-10 w-11/12 m-auto">
        <div className="flex flex-col p-4 bg-white shadow-md border">
          <div className="text-[#8677ae]">23 Course</div>
          <div className="font-bold">Data Analyst(R)</div>
          <div className="flex gap-2 text-xs">
            <div>icon</div>
            <div>techsnap</div>
          </div>
          <div className="border border-gray-200 mt-4"></div>
          <div className="flex justify-between mt-2" onClick={handleClick}>
            <div className="text-blue-500">View Path</div>
            <div>
              <FaRightLong className="mt-1 text-blue-500" />
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4 bg-white shadow-md border">
          <div className="text-[#8677ae]">23 Course</div>
          <div className="font-bold">Data Analyst(R)</div>
          <div className="flex gap-2 text-xs">
            <div>icon</div>
            <div>techsnap</div>
          </div>
          <div className="border border-gray-200 mt-4"></div>
          <div className="flex justify-between mt-2" onClick={handleClick}>
            <div className="text-blue-500">View Path</div>
            <div>
              <FaRightLong className="mt-1 text-blue-500" />
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4 bg-white shadow-md border">
          <div className="text-[#8677ae]">23 Course</div>
          <div className="font-bold">Data Analyst(R)</div>
          <div className="flex gap-2 text-xs">
            <div>icon</div>
            <div>techsnap</div>
          </div>
          <div className="border border-gray-200 mt-4"></div>
          <div className="flex justify-between mt-2 " onClick={handleClick}>
            <div className="text-blue-500">View Path</div>
            <div>
              <FaRightLong className="mt-1 text-blue-500" />
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4 bg-white shadow-md border">
          <div className="text-[#8677ae]">23 Course</div>
          <div className="font-bold">Data Analyst(R)</div>
          <div className="flex gap-2 text-xs">
            <div>icon</div>
            <div>techsnap</div>
          </div>
          <div className="border border-gray-200 mt-4"></div>
          <div className="flex justify-between mt-2" onClick={handleClick}>
            <div className="text-blue-500">View Path</div>
            <div>
              <FaRightLong className="mt-1 text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerPath;
