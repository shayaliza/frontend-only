import React from "react";
import {
  PlusIcon,
  EmojiHappyIcon,
  CameraIcon,
  MicrophoneIcon,
} from "@heroicons/react/outline";
import { MdSend } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Camera, Contact, FileIcon, Image, Plus, Sticker } from "lucide-react";
import { FaPoll } from "react-icons/fa";
import { useRef } from "react";

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
  setReplyToMessage,
}) => {
  const fileInputRef = useRef(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSendMessage();
      }}
      className="flex items-center bg-white dark:bg-black pt-3 fixed bottom-0 left-0 right-0 w-full border-t border-gray-300 bg-background"
      style={{ paddingBottom: keyboardHeight + 8 }}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Plus className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => fileInputRef.current?.click()}>
            <FileIcon className="mr-2 h-4 w-4 text-purple-600" /> Document
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => fileInputRef.current?.click()}>
            <Image className="mr-2 h-4 w-4 text-blue-600" /> Photos & Videos
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Camera className="mr-2 h-4 w-4 text-red-600" /> Camera
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Contact className="mr-2 h-4 w-4 text-green-600" /> Contact
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FaPoll className="mr-2 h-4 w-4 text-yellow-400" /> Poll
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Sticker className="mr-2 h-4 w-4" /> New Sticker
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="bg-white dark:bg-black rounded-lg flex items-center flex-grow">
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
            paddingBottom: keyboardHeight,
          }}
          onInput={(e) => {
            e.target.style.height = "auto";
            const newHeight = Math.min(e.target.scrollHeight, 150);
            e.target.style.height = `${newHeight}px`;
          }}
        />

        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept=".pdf,.doc,.docx,.xls,.xlsx,.txt"
          multiple
          // onChange={(e) => {
          //   const files = e.target.files;
          //   if (files) handleFileUpload(files);
          // }}
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
