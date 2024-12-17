import { X } from "lucide-react";
import React, { useRef } from "react";

function PinnedContent({ messages, onSendData, onClose }) {
  const chatContainerRef = useRef(null);

  const pinnedMessages = messages.filter((message) => message.isPinned);

  return (
    <>
      <div className="flex justify-between px-4 pt-2 text-black dark:text-white">
        <h1 className="text-lg font-semibold">Pinned Messages</h1>
        <X className="cursor-pointer" onClick={onClose} />
      </div>

      <div
        className="relative flex-grow overflow-y-auto overflow-x-hidden"
        ref={chatContainerRef}
      >
        {pinnedMessages.length === 0 ? (
          <div className="text-center text-gray-400 dark:text-white py-4">
            No pinned messages
          </div>
        ) : (
          pinnedMessages.map((message) => (
            <div
              key={message.id}
              className="hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-white p-4 border-b"
              onClick={() => onSendData(message.id)}
            >
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-xs ">{message.timestamp}</span>
              </div>
              <p className="text-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-[350px]">{message.content}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default PinnedContent;
