import React from 'react';
import { PlusIcon, EmojiHappyIcon, CameraIcon, MicrophoneIcon } from "@heroicons/react/outline";
import { MdSend } from "react-icons/md";

const MessageInput = ({
  newMessage,
  handleInputChange,
  handleSendMessage,
  isActive,
  textareaRef,
  handleInputFocus,
  handleInputBlur,
  keyboardHeight,
  replyToMessage,
  setReplyToMessage
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSendMessage();
      }}
      className="flex items-center bg-white dark:bg-black pt-3 fixed bottom-0 left-0 right-0 w-full border-t border-gray-300 bg-background"
      style={{ paddingBottom: keyboardHeight + 8 }}
    >
      <button
        type="button"
        className="p-2 rounded-full hover:bg-gray-200 transition duration-150 ease-in-out"
      >
        <PlusIcon className="w-5 h-5 hover:text-gray-900" />
      </button>

      <div
        className="bg-white dark:bg-black rounded-lg flex items-center flex-grow"
        style={{ paddingBottom: keyboardHeight }}
      >
        <textarea
          ref={textareaRef}
          id="message-textarea"
          className="flex-grow outline-none p-1 rounded-sm text-sm border border-gray-500 resize-none overflow-y-auto bg-transparent"
          placeholder="Type a message"
          value={newMessage}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          style={{
            minHeight: "1px",
            maxHeight: "100px",
            overflowY: "auto",
          }}
          onInput={(e) => {
            e.target.style.height = "auto";
            const newHeight = Math.min(e.target.scrollHeight, 150);
            e.target.style.height = `${newHeight}px`;
          }}
        />
        <button
          type="button"
          className="p-2 rounded-full hover:bg-gray-600 transition duration-150 ease-in-out"
        >
          <EmojiHappyIcon className="w-5 h-5 hover:text-gray-900" />
        </button>
      </div>

      {!isActive && (
        <div className="mx-2 flex">
          <button
            type="button"
            className="p-2 rounded-full hover:bg-gray-600 transition duration-150 ease-in-out"
          >
            <CameraIcon className="w-5 h-5 hover:text-gray-900" />
          </button>
          <button
            type="button"
            className="p-2 rounded-full hover:bg-gray-600 transition duration-150 ease-in-out"
          >
            <MicrophoneIcon className="w-5 h-5 hover:text-gray-900" />
          </button>
        </div>
      )}

      {isActive && (
        <button
          type="submit"
          className="p-2 rounded-full transition duration-150 ease-in-out mx-2 border border-gray-500"
          onClick={handleSendMessage}
        >
          <MdSend className="w-5 h-5" />
        </button>
      )}
    </form>
  );
};

export default MessageInput;