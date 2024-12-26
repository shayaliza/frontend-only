import { PinIcon } from 'lucide-react';
import React, { useState } from 'react';

function PinHeader({ messages, onSendData }) {
  const pinnedMessages = messages.filter((message) => message.isPinned);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReversed, setIsReversed] = useState(false); 

  const handlePinClick = () => {
    if (pinnedMessages.length > 0) {
      const currentPinned = pinnedMessages[currentIndex];
      onSendData(currentPinned.id); 

      if (!isReversed) {
        const nextIndex = (currentIndex + 1) % pinnedMessages.length;
        setCurrentIndex(nextIndex);
        if (nextIndex === 0) setIsReversed(true); 
      } else {
        const prevIndex = (currentIndex - 1 + pinnedMessages.length) % pinnedMessages.length;
        setCurrentIndex(prevIndex);
        if (prevIndex === pinnedMessages.length - 1) setIsReversed(false); 
      }
    }
  };

  return (
    <div 
      className="fixed left-0 right-0 top-16 z-50 px-3 py-2 transition-all transform hover:scale-105 border-b bg-gray-300 dark:bg-black dark:border-gray-700"
      onClick={handlePinClick}
    >
      {pinnedMessages.length > 0 ? (
        <div className="flex items-center space-x-3">
          <PinIcon className="w-4 h-4 text-black dark:text-white transform hover:scale-110 transition-all duration-300" />
          <span className='whitespace-nowrap overflow-hidden text-ellipsis flex-1 cursor-pointer text-black dark:text-white'>
            {pinnedMessages[currentIndex].content}
          </span>
        </div>
      ) : (
        <div className="text-gray-300">No pinned messages</div>
      )}
    </div>
  );
}

export default PinHeader;
