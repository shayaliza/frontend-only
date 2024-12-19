import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import emojisData from "./Emoji.json";
import { cn } from "../../../lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Smile,
  Send,
  Reply,
  X,
  FileIcon,
  PaperclipIcon,
  Plus,
  Image,
  Camera,
  Contact,
  Sticker,
  StickerIcon,
  LucideSticker,
} from "lucide-react";
import { FaPoll } from "react-icons/fa";
import { FaStickerMule } from "react-icons/fa6";
import Emoji from "./Emoji";
import Gifs from "./Gifs";

const MessageComposer = ({
  messageInput,
  setMessageInput,
  handleKeyDown,
  handlePaste,
  editingMessageId,
  replyToMessage,
  setReplyToMessage,
  showEmojiPicker,
  setShowEmojiPicker,
  fileInputRef,
  handleImageUpload,
  imageInputRef,
  handleFileUpload,
  sendMessage,
}) => {
  
  const renderReplyPreview = () => {
    if (!replyToMessage) return null;

    const ContentPreview = () => {
      if (replyToMessage.imageUrl) {
        return (
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src={replyToMessage.imageUrl}
                alt="Reply preview"
                className="h-14 w-14 object-cover rounded-xl 
                         shadow-md transition-all duration-300 
                         group-hover:scale-105 group-hover:shadow-lg
                         ring-2 ring-transparent 
                         group-hover:ring-blue-300/50 
                         dark:group-hover:ring-blue-600/50"
              />
            </div>
          </div>
        );
      }

      if (replyToMessage.fileUrl) {
        return (
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <div
                className="p-3 bg-gray-100 dark:bg-gray-800 
                            rounded-xl shadow-md 
                            transition-all duration-300 
                            group-hover:bg-blue-50 
                            dark:group-hover:bg-blue-900/30
                            group-hover:shadow-lg"
              >
                <FileIcon
                  className="h-6 w-6 
                                  text-gray-500 dark:text-gray-400 
                                  group-hover:text-blue-600 
                                  dark:group-hover:text-blue-400 
                                  transition-colors"
                />
              </div>
            </div>
            <span
              className="text-sm text-gray-600 dark:text-gray-300 
                           max-w-xs truncate 
                           group-hover:text-blue-600 
                           dark:group-hover:text-blue-400 
                           transition-colors"
            >
              {replyToMessage.fileName}
            </span>
          </div>
        );
      }

      return (
        <div
          className="text-sm text-gray-600 dark:text-gray-300 
                      line-clamp-1 border dark:border-gray-600
                      bg-gray-50 dark:bg-gray-900/30 
                      px-3 py-2 rounded-lg 
                      transition-all duration-300 
                      hover:bg-blue-50 
                      dark:hover:bg-blue-900/30 
                      hover:shadow-sm"
        >
          {replyToMessage.content}
        </div>
      );
    };

    return (
      <div
        className={cn(
          "mb-3 flex items-center gap-4 p-4 rounded-xl shadow-md",
          "bg-white dark:bg-gray-900/60 backdrop-blur-sm",
          "border border-gray-100 dark:border-gray-800/50",
          "transition-all duration-300 hover:shadow-lg",
          "transform hover:-translate-y-0.5"
        )}
      >
        <div className="flex-shrink-0">
          <Reply
            className={cn(
              "w-6 h-6",
              "text-gray-500 dark:text-gray-400",
              "group-hover:text-blue-600 dark:group-hover:text-blue-400",
              "transition-colors"
            )}
          />
        </div>

        <div className="flex-grow group">
          <div
            className={cn(
              "text-sm font-semibold",
              "text-gray-700 dark:text-gray-200",
              "pb-2",
              "group-hover:text-blue-700 dark:group-hover:text-blue-300",
              "transition-colors"
            )}
          >
            {replyToMessage.user}
          </div>
          <ContentPreview />
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setReplyToMessage(null)}
          className={cn(
            "text-gray-500 hover:text-red-700",
            "dark:text-gray-400 dark:hover:text-red-700",
            "transition-all duration-300",
            "hover:bg-red-50 dark:hover:bg-red-900/30",
            "rounded-full"
          )}
        >
          <X className="w-5 h-5 transition-transform hover:rotate-90" />
        </Button>
      </div>
    );
  };

  const [showGifPicker, setShowGifPicker] = useState(false);
  const [emojis, setEmojis] = useState(emojisData.emojis || []);

  return (
    <div className="p-4 border-t shadow-md">
      <div className="ml-8 mr-36">{renderReplyPreview()}</div>
      <div className="flex items-center gap-2">
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
            <DropdownMenuItem onClick={() => imageInputRef.current?.click()}>
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
        <textarea
          id="message-textarea"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onPaste={handlePaste}
          onKeyDown={handleKeyDown}
          className="w-full p-2 bg-transparent rounded-lg focus:outline-none resize-none border border-gray-500"
          placeholder={
            editingMessageId ? "Edit your message..." : "Type your message..."
          }
          style={{ minHeight: "40px", maxHeight: "200px" }}
          onInput={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = `${Math.min(e.target.scrollHeight, 200)}px`;
          }}
        />
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept=".pdf,.doc,.docx,.xls,.xlsx,.txt"
          multiple
          onChange={(e) => {
            const files = e.target.files;
            if (files) handleFileUpload(files);
          }}
        />

        <input
          type="file"
          ref={imageInputRef}
          className="hidden"
          accept=".jpg,.jpeg,.png,.gif,"
          multiple
          onChange={(e) => {
            const files = e.target.files;
            if (files) handleFileUpload(files);
          }}
        />

        <Popover open={showEmojiPicker} onOpenChange={setShowEmojiPicker}>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm">
              <Smile className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="mr-12 mb-6 w-[300px]">
            <Emoji setMessageInput={setMessageInput}/>
          </PopoverContent>
        </Popover>

        <Popover open={showGifPicker} onOpenChange={setShowGifPicker}>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm">
              <StickerIcon className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="mr-12 mb-6 w-[300px]">
            <Gifs setMessageInput={setMessageInput}/>
          </PopoverContent>
        </Popover>

        <Button variant="ghost" size="sm" onClick={sendMessage}>
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default MessageComposer;
