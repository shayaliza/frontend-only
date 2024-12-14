import React from "react";

const ForwardMessage = ({ message, isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 dark:bg-gray-900/50 transition-all">
          <div className="w-full max-w-md mx-auto p-4 bg-zinc-900 text-white rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">
                Forward this private message
              </h2>
              <button
                className="text-gray-400"
                onClick={onClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <input
              type="text"
              placeholder="Add by name or channel"
              className="w-full px-3 py-2 mb-4 text-sm bg-transparent rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Add a message if you like."
              rows="3"
              className="w-full px-3 py-2 mb-4 text-sm rounded bg-transparent border resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <div className="flex items-center gap-3 p-3 bg-gray-700 rounded">
              <img src = {message.photo} className="h-8 w-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                
              />
              <div>
                <div className="text-sm font-medium text-white">{message.user}</div>
                <div className="text-sm text-gray-400">{message.content}</div>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-500">
                Forward
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ForwardMessage;
