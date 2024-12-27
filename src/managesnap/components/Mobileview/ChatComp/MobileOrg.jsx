import React from 'react'
import { FaTimes } from 'react-icons/fa'
import img1 from "../../../assets/man1.jpg";

function MobileOrg() {
  return (
    <div className="flex flex-col h-full dark:text-white">
      <div className="relative flex-1 overflow-y-auto px-4 py-2 pin-scrollbar">
        <div className="absolute left-1/2 top-0 bottom-10 w-[2px] bg-gray-300"></div>
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className="relative flex items-center p-3 rounded-lg shadow-md border mb-4 bg-white dark:bg-black dark:hover:bg-gray-600 hover:bg-gray-300 hover:scale-105"
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
    </div>
  )
}

export default MobileOrg