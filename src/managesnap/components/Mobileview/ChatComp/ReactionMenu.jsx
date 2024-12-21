import React from 'react';
import {
  ClipboardCopyIcon,
  ReplyIcon,
  FastForwardIcon,
  SaveIcon,
} from '@heroicons/react/outline';
import { FaPlus } from 'react-icons/fa';

const ReactionMenu = ({
  reactionMenuRef,
  handleAddReaction,
  handleReplyToMessage,
  selectedMessage,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
      <div
        className="fixed left-[50%] top-[100%] h-full z-50 w-full translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-gray-700 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-slate-800 dark:bg-slate-950"
        ref={reactionMenuRef}
      >
        {/* Top Indicator */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1/5 h-2 bg-indigo-200 rounded-lg shadow-lg"></div>

        {/* Emoji Reaction Options */}
        <div className="flex justify-around space-x-4 py-3">
          {['👍', '❤️', '😄', '😮'].map((emoji) => (
            <div
              key={emoji}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 hover:bg-green-400 transition-transform duration-300 cursor-pointer text-2xl text-white transform hover:scale-110 shadow-md"
              onClick={() => handleAddReaction(emoji)}
            >
              {emoji}
            </div>
          ))}
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-transform duration-300 cursor-pointer text-2xl text-white transform hover:scale-110 shadow-md">
            <FaPlus />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 space-y-2">
          <button className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-150 ease-in-out shadow-lg">
            <ClipboardCopyIcon className="w-6 h-6 text-gray-400" />
            <span className="text-gray-200 text-sm">Copy</span>
          </button>
          <button
            onClick={() => handleReplyToMessage(selectedMessage)}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-150 ease-in-out shadow-lg"
          >
            <ReplyIcon className="w-6 h-6 text-gray-400" />
            <span className="text-gray-200 text-sm">Reply</span>
          </button>
          <button className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-150 ease-in-out shadow-lg">
            <FastForwardIcon className="w-6 h-6 text-gray-400" />
            <span className="text-gray-200 text-sm">Forward</span>
          </button>
          <button className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-150 ease-in-out shadow-lg">
            <SaveIcon className="w-6 h-6 text-gray-400" />
            <span className="text-gray-200 text-sm">Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReactionMenu;
