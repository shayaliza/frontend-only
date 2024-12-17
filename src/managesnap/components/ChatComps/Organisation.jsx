import { X } from "lucide-react";
import React from "react";
import img1 from "../../assets/man1.jpg"
import img2 from "../../assets/man2.jpg"
import img3 from "../../assets/man3.jpg"

function Organisation({ onClose }) {
  return (
    <div className="flex flex-col h-full border-l border-gray-700 dark:text-white">
      <div className="sticky top-0 z-10 flex justify-between items-center px-4 py-2 ">
        <h1 className="text-lg font-semibold">Organisation</h1>
        <X
          className="cursor-pointer hover:text-gray-400 transition duration-150"
          onClick={onClose}
        />
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 px-4 py-2 pin-scrollbar">
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className="flex items-center p-3 rounded-lg shadow-md border"
          >
            <img
              src={img1}
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-gray-700"
            />
            <div className="ml-4">
              <h2 className="text-sm font-bold">Sai Pavan Saketh Desamsetti</h2>
              <p className="text-xs">
                Employee Experience API & Integration Engineer
              </p>
              <p className="text-xs">Digital Innovation & Technology</p>
            </div>
          </div>
        ))}
      </div>

      <div className="sticky bottom-0 z-10 px-4 py-3 shadow-md border-t">
        <h3 className="text-md font-bold mb-2">Your Work</h3>
        <div
            className="flex items-center p-3 rounded-lg shadow-md border mb-2"
          >
            <img
              src={img2}
              alt="user"
              className="w-10 h-10 rounded-full border-2 border-gray-700"
            />
            <div className="ml-4">
              <h2 className="text-sm font-bold">Sai Pavan Saketh Desamsetti</h2>
              <p className="text-xs">
                Employee Experience API & Integration Engineer
              </p>
              <p className="text-xs">Digital Innovation & Technology</p>
            </div>
          </div>
        <div className="flex gap-2 pb-2">
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className="flex items-center p-3 rounded-lg shadow-md w-1/2 border"
            >
              <img
                src={img3}
                alt="Work Member"
                className="w-10 h-10 rounded-full border-2 border-gray-700"
              />
              <div className="ml-4">
                <h4 className="text-sm font-bold">Jagan Mohan Reddy</h4>
                <p className="text-xs">EX CM</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Organisation;
