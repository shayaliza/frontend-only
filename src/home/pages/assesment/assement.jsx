import React from "react";
import { useNavigate } from "react-router-dom";

function Assement() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/assesment/details");
  };
  const CareerCard = () => {
    return (
      <div className="flex flex-col p-4 bg-white shadow-md border">
        <div className="text-[#8677ae] text-sm">ASSESMENT</div>
        <div className="font-bold">Azure Fundamentals</div>

        <div className="border border-gray-200 mt-10"></div>
        <div className="flex justify-between mt-2" onClick={handleClick}>
          <div className="text-gray-800">Theory</div>
          <div className="flex gap-3">
            <div className="text-blue-500 font-semibold">Topics</div>
            <div className="border border-gray-800 rounded-md px-2 ">Start</div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
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
      <div className="final">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 pb-10  m-auto mt-4">
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
        </div>
        <div className="">
          <div className="text-3xl font-bold mt-6 mb-4 ">All Assesments</div>
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
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 pb-10 m-auto mt-4">
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

export default Assement;
