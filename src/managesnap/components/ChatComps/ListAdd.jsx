import { SearchIcon, X } from 'lucide-react';
import React from 'react'
import { createPortal } from 'react-dom';

function ListAdd() {
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/10 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white/80 dark:bg-gray-900/80 p-6 rounded-xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-lg">
      <div className="flex justify-between items-center mb-4 text-black dark:text-white">
        <h1 className="text-lg font-semibold">Add to List</h1>
      <X className="w-5 h-5 cursor-pointer"/>
      </div>
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

        <div className="flex justify-end space-x-3">
          <button
            onClick={() => setCustomPopupOpen(false)}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 shadow-md"
          >
            Done
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}

export default ListAdd