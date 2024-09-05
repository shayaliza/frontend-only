import React from "react";
import { FaRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function CareerPath() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard/career/details");
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

      {/* Mobile View */}
      <div className="">
        <div class="text-sm flex flex-nowrap gap-2 mb-2 w-full mx-auto px-4 py-2 bg-white  overflow-x-auto ">
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
        <div className="flex flex-row mb-2 w-11/12 m-auto">
          <div className="flex flex-row gap-4 items-center w-full mb-2">
            <div className="flex  gap-2  flex-row w-auto">
              <div className="flex items-center rounded-3xl border-gray-500 px-2 py-2 border text-xs">
                <span className="mr-2">Sort By</span>
                <select className="border-none focus:outline-none rounded-md font-bold">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center w-full mb-2">
            <div className="flex  gap-1  flex-row w-auto">
              <div className="flex items-center rounded-3xl border-gray-500 px-2 py-2 border text-xs ">
                <span className="mr-1">Filter by:</span>
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
