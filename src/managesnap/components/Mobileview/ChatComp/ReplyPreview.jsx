import React from 'react';
import { ReplyIcon } from "@heroicons/react/outline";
import { FaTimes } from "react-icons/fa";

const ReplyPreview = ({ replyToMessage, setReplyToMessage }) => {
  if (!replyToMessage) return null;
  
  return (
    <div className="fixed bottom-16 left-0 right-0 bg-gray-200 dark:bg-zinc-800 p-2 flex justify-between items-center z-40">
      <div className="flex items-center space-x-2">
        <ReplyIcon className="w-5 h-5" />
        <div>
          <span className="text-sm font-semibold">
            Replying to {replyToMessage.sender}
          </span>
          {replyToMessage.imageUrl && (
            <img
              src={replyToMessage.imageUrl}
              alt=""
              className="w-full h-10 object-fill my-2"
            />
          )}
          <p className="text-xs truncate max-w-[250px]">
            {replyToMessage.content}
          </p>
        </div>
      </div>
      <button
        onClick={() => setReplyToMessage(null)}
        className="text-red-600 hover:text-gray-900"
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default ReplyPreview;