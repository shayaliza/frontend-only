import React from 'react';
import { Pin, X } from 'lucide-react';

function PinnedHeader({ 
  messages, 
  onUnpin, 
  onViewAll, 
  onSendData
}) {
  const pinnedMessages = messages.filter(message => message.isPinned);
  const displayMessages = pinnedMessages.slice(0, 5);

  if (displayMessages.length === 0) return null;

  return (
    <div className='shadow-md flex items-center bg-white dark:bg-black text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 p-2 rounded-md'>
      <div className="flex items-center mr-4">
        <Pin className="text-blue-500 mr-2" size={20} />
      </div>
      
      <div className="flex-1 flex items-center space-x-4 overflow-x-auto scrollbar-hide">
        {displayMessages.map((message, index) => (
          <div
            key={message.id}
            className="flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm w-auto max-w-[110px]"
          >        
            <span 
              className="whitespace-nowrap overflow-hidden text-ellipsis flex-1 cursor-pointer"
              onClick={() => onSendData(message.id)}
            >
              {message.content}
            </span>
            
            <button 
              onClick={() => onUnpin(index)}
              className="ml-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full p-1 transition-colors"
              title="Unpin message"
            >
              <X size={16} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" />
            </button>
          </div>
        ))}
      </div>
      
      {pinnedMessages.length > 0 && (
        <button 
          onClick={onViewAll}
          className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition-colors ml-4'
        >
          {`View all (${pinnedMessages.length})`}
        </button>
      )}
    </div>
  );
}

export default PinnedHeader;
