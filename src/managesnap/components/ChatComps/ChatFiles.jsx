import { FolderIcon, ListIcon, SearchIcon } from 'lucide-react'
import React from 'react'
import { FaFilePdf, FaHtml5 } from 'react-icons/fa'

function ChatFiles() {
  return (
    <div className="px-6 py-10 space-y-10 overflow-y-auto">
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
              <div className="bg-[#00B2FF] p-2 rounded-md">
                <FolderIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Untitled</h3>
                <p className="text-sm">Shared by Techsnap yesterday</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-gray-100 shadow-sm dark:bg-[#1F1F1F] border px-4 py-3 rounded-md dark:border-none">
              <div className="bg-[#FFB800] p-2 rounded-md">
                <ListIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Untitled list</h3>
                <p className="text-sm">Shared by Techsnap yesterday</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-gray-100 shadow-sm dark:bg-[#1F1F1F] px-4 py-3 rounded-md border dark:border-none">
              <div className="bg-[#FF007F] p-2 rounded-md">
                <FaFilePdf className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Anurag Upadhyay_JL.pdf</h3>
                <p className="text-sm">Shared by Techsnap on Oct 29th</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-gray-100 shadow-sm dark:bg-[#1F1F1F] border px-4 py-3 rounded-md dark:border-none">
              <div className="bg-[#FF6600] p-2 rounded-md">
                <FaHtml5 className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">testpro.html</h3>
                <p className="text-sm">Shared by Techsnap on Aug 14th</p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ChatFiles