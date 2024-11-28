import React, { useRef, useEffect } from "react";
import { Ban, BookmarkPlus, Eye, Flag, Plus, Share2 } from "lucide-react";

function DesktopMore({ isOpen, onClose }) {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 dark:bg-gray-800/70 transition-all">
          <div
            ref={popupRef}
            className="bg-white dark:bg-black rounded-xl shadow-2xl p-6 w-full max-w-md border border-gray-200 dark:border-gray-700 transform transition-transform scale-95 hover:scale-100"
            role="dialog"
            aria-label="More options"
          >
            <div className="flex flex-col items-center space-y-4">
              <button
                className="group flex items-center w-full p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                aria-label="Hide this post"
              >
                <Eye className="w-6 h-6 text-gray-500 group-hover:text-yellow-600 dark:text-gray-400 dark:group-hover:text-yellow-400" />
                <span className="ml-4 text-gray-700 group-hover:text-yellow-600 dark:text-gray-300 dark:group-hover:text-yellow-400">
                  Hide
                </span>
              </button>

              <button
                className="group flex items-center w-full p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-label="Save this post for later"
              >
                <BookmarkPlus className="w-6 h-6 text-gray-500 group-hover:text-green-600 dark:text-gray-400 dark:group-hover:text-green-400" />
                <span className="ml-4 text-gray-700 group-hover:text-green-600 dark:text-gray-300 dark:group-hover:text-green-400">
                  Read it later
                </span>
              </button>

              <button
                className="group flex items-center w-full p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Follow Community Picks"
              >
                <Plus className="w-6 h-6 text-gray-500 group-hover:text-purple-600 dark:text-gray-400 dark:group-hover:text-purple-400" />
                <span className="ml-4 text-gray-700 group-hover:text-purple-600 dark:text-gray-300 dark:group-hover:text-purple-400">
                  Follow Community Picks
                </span>
              </button>

              <button
                className="group flex items-center w-full p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label="Don't show posts from Community Picks"
              >
                <Ban className="w-6 h-6 text-gray-500 group-hover:text-red-600 dark:text-gray-400 dark:group-hover:text-red-400" />
                <span className="ml-4 text-gray-700 group-hover:text-red-600 dark:text-gray-300 dark:group-hover:text-red-400">
                  Don't show posts from Community Picks
                </span>
              </button>

              <button
                className="group flex items-center w-full p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label="Report this post"
              >
                <Flag className="w-6 h-6 text-gray-500 group-hover:text-red-600 dark:text-gray-400 dark:group-hover:text-red-400" />
                <span className="ml-4 text-gray-700 group-hover:text-red-600 dark:text-gray-300 dark:group-hover:text-red-400">
                  Report
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DesktopMore;
