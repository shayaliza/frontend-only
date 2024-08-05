import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { CgLock } from "react-icons/cg";
import { BiLock } from "react-icons/bi";
function AssementDetails() {
  return (
    <div>
      <div className="final m-auto flex justify-between  bg-blue-600 rounded-lg text-white   md:mt-5 mt-1 ">
        <div className="lg:w-1/2 w-full md:p-8 p-6 ">
          <div className="flex gap-2">
            {/* Give react target icon */}
            <TbTargetArrow className="mt-1" />
            <div>ASSEMENTS</div>
          </div>
          <div className="md:text-5xl text-2xl font-bold mt-4 ">
            Python Fundamentals
          </div>
          <div className="mt-4 text-sm">
            Get Your skill score and personalised course recommendation in less
            than 20 minutes
          </div>
        </div>
        <div className="md:w-1/2 m-auto hidden">
          <FaPython className="m-auto" size={200} />
        </div>
      </div>
      <div className="final flex xl:flex-row flex-col px-4">
        <div className="xl:w-2/3  mt-6 ">
          <div className="text-2xl font-bold">Assement Overview</div>
          <div className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quidem
            rerum nostrum voluptas, vitae quae possimus maxime similique quo
            vero tempora placeat. Voluptatum ab minus sap
          </div>

          <div className="text-xl font-bold mt-6">Topics Covered</div>
          <div className="flex flex-row gap-8 mt-3">
            <div className="flex gap-2 text-sm">
              <div>
                <IoMdCheckmark className="mt-1" />
              </div>
              <div>Operators</div>
            </div>
            <div className="flex gap-2 text-sm">
              <div>
                <IoMdCheckmark className="mt-1" />
              </div>
              <div>Operators</div>
            </div>
            <div className="flex gap-2 text-sm">
              <div>
                <IoMdCheckmark className="mt-1" />
              </div>
              <div>Operators</div>
            </div>
            <div className="flex gap-2 text-sm">
              <div>
                <IoMdCheckmark className="mt-1" />
              </div>
              <div>Operators</div>
            </div>
          </div>
          <div className="flex flex-row gap-8 mt-3">
            <div className="flex gap-2 text-sm">
              <div>
                <IoMdCheckmark className="mt-1" />
              </div>
              <div>Operators</div>
            </div>
            <div className="flex gap-2 text-sm">
              <div>
                <IoMdCheckmark className="mt-1" />
              </div>
              <div>Operators</div>
            </div>
            <div className="flex gap-2 text-sm">
              <div>
                <IoMdCheckmark className="mt-1" />
              </div>
              <div>Operators</div>
            </div>
            <div className="flex gap-2 text-sm">
              <div>
                <IoMdCheckmark className="mt-1" />
              </div>
              <div>Operators</div>
            </div>
          </div>
          <div className="flex flex-row gap-8 mt-3">
            <div className="flex gap-2 text-sm">
              <div>
                <IoMdCheckmark className="mt-1" />
              </div>
              <div>Operators</div>
            </div>
            <div className="flex gap-2 text-sm">
              <div>
                <IoMdCheckmark className="mt-1" />
              </div>
              <div>Operators</div>
            </div>
            <div className="flex gap-2 text-sm">
              <div>
                <IoMdCheckmark className="mt-1" />
              </div>
              <div>Operators</div>
            </div>
          </div>
        </div>
        <div className="xl:w-1/3  mt-6 px-10 ">
          <div className="border-blue-400 border p-4 rounded-sm">
            <div className="text-xl font-bold text-white bg-blue-500 px-4 py-2 ">
              Take Assessment
            </div>
            <div className="flex gap-2 mt-4">
              <CgLock className="mt-1 text-blue-500" />
              <div>20 minutes</div>
            </div>
            <div className="flex gap-2">
              <CgLock className="mt-1 text-blue-500" />
              <div>3 attempts</div>
            </div>
            <div className="flex justify-center">
              <BiLock size={200} className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssementDetails;
