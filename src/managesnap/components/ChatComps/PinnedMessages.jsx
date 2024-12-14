import { SearchIcon } from 'lucide-react'
import React from 'react'
import { FaMessage } from 'react-icons/fa6'

function PinnedMessages() {
  return (
    <div className="px-6 py-10 space-y-10">
    <div className="relative w-full flex">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search files"
        className="w-full dark:bg-[#1F1F1F] border outline-none px-8 py-3 rounded-md dark:text-gray-400 focus:ring-0 dark:border-none"
      />
      <SearchIcon className="w-4 h-4 absolute top-4 left-2.5" />
    </div>
    <div className="space-y-6">
      <div className="flex items-center space-x-4 bg-gray-100 shadow-sm dark:bg-[#1F1F1F] px-4 py-3 rounded-md border dark:border-none">
        <div className="bg-blue-500 p-2 rounded-md">
          <FaMessage className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium">John Doe</h3>
          <p className="text-gray-400 text-sm">Hey, how's it going?</p>
        </div>
        <div className="text-gray-400 text-sm">11:42 AM</div>
      </div>
      <div className="flex items-center space-x-4 bg-gray-100 shadow-sm dark:bg-[#1F1F1F] px-4 py-3 rounded-md border dark:border-none">
        <div className="bg-yellow-500 p-2 rounded-md">
          <FaMessage className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium">Jane Smith</h3>
          <p className="text-gray-400 text-sm">
            Can we meet for lunch today?
          </p>
        </div>
        <div className="text-gray-400 text-sm">9:30 AM</div>
      </div>
      <div className="flex items-center space-x-4 bg-gray-100 shadow-sm dark:bg-[#1F1F1F] px-4 py-3 rounded-md border dark:border-none">
        <div className="bg-pink-500 p-2 rounded-md">
          <FaMessage className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium">Alex Johnson</h3>
          <p className="text-gray-400 text-sm">
            Did you see the new update?
          </p>
        </div>
        <div className="text-gray-400 text-sm">Yesterday</div>
      </div>
    </div>
  </div>
  )
}

export default PinnedMessages