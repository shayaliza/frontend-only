import React from "react";
import { FaRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Catalog() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Popular Tracks */}
      <div className="flex justify-between w-11/12 m-auto my-2 text-lg">
        <div className="font-bold">Popular Tracks</div>
        <div
          className="underline cursor-pointer"
          onClick={() => {
            navigate("/dashboard/career");
          }}
        >
          See all
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="flex gap-2 pb-10 w-max md:w-11/12 m-auto">
          {/* Card 1 */}
          <div className="flex flex-col p-4 bg-white shadow-md border w-[180px]">
            <div className="text-[#8677ae]">23 Course</div>
            <div className="font-bold">Data Analyst(R)</div>
            <div className="flex gap-2 text-xs">
              <div>icon</div>
              <div>techsnap</div>
            </div>
            <div className="border border-gray-200 mt-4"></div>
            <div className="flex justify-between mt-2">
              <div className="text-blue-500">View Path</div>
              <div>
                <FaRightLong className="mt-1 text-blue-500" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col p-4 bg-white shadow-md border w-[180px]">
            <div className="text-[#8677ae]">23 Course</div>
            <div className="font-bold">Data Analyst(R)</div>
            <div className="flex gap-2 text-xs">
              <div>icon</div>
              <div>techsnap</div>
            </div>
            <div className="border border-gray-200 mt-4"></div>
            <div className="flex justify-between mt-2">
              <div className="text-blue-500">View Path</div>
              <div>
                <FaRightLong className="mt-1 text-blue-500" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col p-4 bg-white shadow-md border w-[180px]">
            <div className="text-[#8677ae]">15 Courses</div>
            <div className="font-bold">Software Engineer</div>
            <div className="flex gap-2 text-xs">
              <div>icon</div>
              <div>techsnap</div>
            </div>
            <div className="border border-gray-200 mt-4"></div>
            <div className="flex justify-between mt-2">
              <div className="text-blue-500">View Path</div>
              <div>
                <FaRightLong className="mt-1 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Skill Path */}
      <div className="flex justify-between w-11/12 m-auto my-2 text-lg">
        <div className="font-bold">Popular Skills Path</div>
        <div
          className="underline cursor-pointer"
          onClick={() => {
            navigate("/dashboard/skill");
          }}
        >
          See all
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <div className=" pb-10 flex gap-2 w-max m-auto">
          <div className="flex flex-col p-4 bg-white shadow-md border w-[190px]">
            <div className="font-bold">Analyze Data with SQL</div>
            <div className="text-sm mt-1 text-gray-600">
              learn to analyz data with sql and prepare for data science
            </div>
            <div className="flex gap-2 text-sm mt-2">
              <div>icon</div>
              <div>techsnap</div>
            </div>
          </div>
          <div className="flex flex-col p-4 bg-white shadow-md border w-[190px]">
            <div className="font-bold">Analyze Data with SQL</div>
            <div className="text-sm mt-1 text-gray-600">
              learn to analyz data with sql and prepare for data science
            </div>
            <div className="flex gap-2 text-sm mt-2">
              <div>icon</div>
              <div>techsnap</div>
            </div>
          </div>
          <div className="flex flex-col p-4 bg-white shadow-md border w-[190px]">
            <div className="font-bold">Analyze Data with SQL</div>
            <div className="text-sm mt-1 text-gray-600">
              learn to analyz data with sql and prepare for data science
            </div>
            <div className="flex gap-2 text-sm mt-2">
              <div>icon</div>
              <div>techsnap</div>
            </div>
          </div>
        </div>
      </div>
      {/* Popular Courses */}
      <div className="flex justify-between w-11/12 m-auto my-2 text-lg">
        <div className="font-bold">Popular Courses</div>
        <div
          className="underline cursor-pointer"
          onClick={() => {
            navigate("/dashboard/courses");
          }}
        >
          See all
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-10 w-11/12 m-auto">
        <div className="flex flex-col p-4 bg-white shadow-md border">
          <img
            src="https://djeqr6to3dedg.cloudfront.net/repo-logos/library/python/live/logo-1720462259584.png"
            alt="Introduction to Python"
          />
          <div className="mt-2 font-semibold">Introduction to Python</div>
        </div>
        <div className="flex flex-col p-4 bg-white shadow-md border">
          <img
            src="https://djeqr6to3dedg.cloudfront.net/repo-logos/library/python/live/logo-1720462259584.png"
            alt="Introduction to Python"
          />
          <div className="mt-2 font-semibold">Introduction to Python</div>
        </div>
      </div>
      {/* Experience Resource Center */}
      <div className="w-11/12 m-auto bg-[#B95FFF] pt-2 pb-4 mb-4">
        <div className="text-white pl-3 pb-4">Experience Resource Center</div>
        <div className="grid grid-cols-2 md:grid-cols-4 w-11/12 m-auto gap-4">
          <div className="bg-white w-[120px] m-auto h-[50px]"></div>
          <div className="bg-white w-[120px] h-[50px] m-auto"></div>
          <div className="bg-white w-[120px] h-[50px] m-auto"></div>
          <div className="bg-white w-[120px] h-[50px] m-auto"></div>
        </div>
        <div className="text-white flex justify-center pt-2">
          View All Resources
        </div>
      </div>
      {/* Popular Projects */}
      <div className="flex justify-between w-11/12 m-auto my-2 text-lg">
        <div className="font-bold">Popular Projects</div>
        <div
          className="underline cursor-pointer"
          onClick={() => {
            navigate("/dashboard/projects");
          }}
        >
          See all
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-10 w-11/12 m-auto">
        <div className="flex flex-col p-4 bg-white shadow-md border">
          <img
            src="https://djeqr6to3dedg.cloudfront.net/repo-logos/library/python/live/logo-1720462259584.png"
            alt="Introduction to Python"
          />
          <div className="mt-2 font-semibold">Introduction to Python</div>
        </div>
        <div className="flex flex-col p-4 bg-white shadow-md border">
          <img
            src="https://djeqr6to3dedg.cloudfront.net/repo-logos/library/python/live/logo-1720462259584.png"
            alt="Introduction to Python"
          />
          <div className="mt-2 font-semibold">Introduction to Python</div>
        </div>
      </div>
      {/* Popular Skill Assessment */}
      <div className="flex justify-between w-11/12 m-auto my-2 text-lg">
        <div className="font-bold">Popular Skill Assessment</div>
        <div
          className="underline cursor-pointer"
          onClick={() => {
            navigate("/dashboard/projects");
          }}
        >
          See all
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-10 w-11/12 m-auto">
        <div className="flex flex-col p-4 bg-white shadow-md border">
          <div className="text-[#8677ae]">23 Course</div>
          <div className="font-bold">Data Analyst(R)</div>
          <div className="flex gap-2 text-xs">
            <div>icon</div>
            <div>techsnap</div>
          </div>
          <div className="border border-gray-200 mt-4"></div>
          <div className="flex justify-between mt-2">
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
          <div className="flex justify-between mt-2">
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

export default Catalog;
