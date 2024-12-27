import { PinIcon } from 'lucide-react';
import React, { useState } from 'react';

function PinHeader({ messages, onSendData, setCurrentView }) {
  const pinnedMessages = messages.filter((message) => message.isPinned);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReversed, setIsReversed] = useState(false); 

  return (
    <>
      {pinnedMessages.length > 0 && (
        <div className="fixed left-0 right-0 top-16 z-50 px-1 py-2 border-y bg-zinc-300 dark:bg-black dark:border-gray-500 flex items-center">
          <div className="flex-1 flex items-center space-x-1 px-2 overflow-x-auto mr-2">
            {pinnedMessages.slice(0, 10).map((message, index) => (
              <div
                key={message.id}
                className="flex-shrink-0 w-1/3"
                onClick={() => onSendData(message.id)}
              >
                <div className="flex items-center space-x-2 bg-gray-400 dark:bg-gray-600 rounded-md p-1 ml-1">
                  <PinIcon className="w-4 h-4 text-black dark:text-white" />
                  <span className="whitespace-nowrap overflow-hidden text-ellipsis flex-1 cursor-pointer text-black dark:text-white text-sm">
                    {message.content}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-shrink-0 bg-blue-600 py-1 px-2 rounded-md" onClick={() => setCurrentView("pinnedMessages")}>
            <button className="whitespace-nowrap overflow-hidden text-ellipsis flex-1 cursor-pointer text-white">
              View All
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default PinHeader;
