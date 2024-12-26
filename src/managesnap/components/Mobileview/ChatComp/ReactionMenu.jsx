import React,{useRef, useEffect} from 'react';
import {
  ClipboardCopyIcon,
  ReplyIcon,
  FastForwardIcon,
  SaveIcon,
} from '@heroicons/react/outline';
import { FaPlus } from 'react-icons/fa';
import { Edit, ForwardIcon, PinIcon } from 'lucide-react';

const ReactionMenu = ({
  isReactionOpen,
  setIsReactionOpen,
  setIsShareOpen,
  handleAddReaction,
  handleReplyToMessage,
  selectedMessage,
  onEdit,
  onPinned,
}) => {
  const reactionMenuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        reactionMenuRef.current &&
        !reactionMenuRef.current.contains(event.target)
      ) {
        setIsReactionOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
    {isReactionOpen && (
    <div className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
      <div
        className="fixed left-[50%] top-[100%] h-full z-50 w-full translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-slate-800 dark:bg-slate-950"
        ref={reactionMenuRef}
      >
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1/5 h-2 bg-indigo-200 rounded-lg shadow-lg"></div>
        <div className="flex justify-around space-x-4 py-3">
          {['👍', '❤️', '😄', '😮'].map((emoji) => (
            <div
              key={emoji}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-green-400 transition-transform duration-300 cursor-pointer text-2xl text-white transform hover:scale-110 shadow-md"
              onClick={() => handleAddReaction(emoji)}
            >
              {emoji}
            </div>
          ))}
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-transform duration-300 cursor-pointer text-2xl text-white transform hover:scale-110 shadow-md">
            <FaPlus />
          </div>
        </div>

        <div className="mt-4 space-y-2 text-black dark:text-white">
          <button className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-150 ease-in-out"
          onClick={() => navigator.clipboard.writeText(selectedMessage.content)}>
            <ClipboardCopyIcon className="w-6 h-6 " />
            <span className="text-sm">Copy</span>
          </button>
          <button
            onClick={() => handleReplyToMessage(selectedMessage)}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-150 ease-in-out"
          >
            <ReplyIcon className="w-6 h-6" />
            <span className="text-sm">Reply</span>
          </button>
          <button className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-150 ease-in-out" onClick={() => setIsShareOpen(true)}>
            <ForwardIcon className="w-6 h-6" />
            <span className="text-sm">Forward</span>
          </button>
          <button className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-150 ease-in-out" onClick={() => onEdit(selectedMessage.id, selectedMessage.content)}>
            <Edit className="w-6 h-6 " />
            <span className="text-sm">Edit</span>
          </button>
          <button className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-150 ease-in-out" onClick={() => onPinned(selectedMessage.id)}>
            <PinIcon className="w-6 h-6 " />
            <span className="text-sm">{selectedMessage.isPinned ? "Unpin" : "Pin"}</span>
          </button>
        </div>
      </div>
    </div>
    )}
    </>
  );
};

export default ReactionMenu;
