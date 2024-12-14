import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import emojisData from "./Emoji.json";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Smile,
  Send,
  Reply,
  X,
  FileIcon,
  PaperclipIcon,
  Plus,
} from "lucide-react";

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
  handleFileUpload,
  sendMessage
}) => {
  const renderReplyPreview = () => {
    if (!replyToMessage) return null;
  
    const ContentPreview = () => {
      if (replyToMessage.imageUrl) {
        return (
          <div className="flex items-center gap-2">
            <img
              src={replyToMessage.imageUrl}
              alt="Reply preview"
              className="h-12 w-12 object-cover rounded-lg shadow-sm"
            />
            <span className="text-sm text-gray-600 dark:text-gray-300">Photo</span>
          </div>
        );
      }
      if (replyToMessage.fileUrl) {
        return (
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gray-200 dark:bg-gray-700 rounded shadow-sm">
              <FileIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300 truncate max-w-xs">
              {replyToMessage.fileName}
            </span>
          </div>
        );
      }
      return (
        <div className="text-sm text-gray-600 dark:text-gray-300 line-clamp-1">
          {replyToMessage.content}
        </div>
      );
    };
  
    return (
      <div className="mb-3 flex items-center gap-3 bg-[#1F1F1F] p-3 rounded-lg shadow">
        <div className="flex-shrink-0">
          <Reply className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </div>
        <div className="flex-grow">
          <div className="text-sm font-semibold text-gray-700 dark:text-gray-200 pb-2">
            {replyToMessage.user}
          </div>
          <ContentPreview />
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setReplyToMessage(null)}
          className="text-gray-500 hover:text-red-700 dark:text-gray-400 dark:hover:text-red-700"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>
    );
  };
  

  const [emojis, setEmojis] = useState(emojisData.emojis || []);  

  return (
    <div className="p-4 border-t shadow-md">
      {renderReplyPreview()}

      <div className="flex items-center gap-2">
      <Button
          variant="ghost"
          size="sm"
          onClick={() => fileInputRef.current?.click()}
        >
          <Plus className="h-4 w-4" />
        </Button>
        <textarea
          id="message-textarea"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onPaste={handlePaste}
          onKeyDown={handleKeyDown}
          className="w-full p-2 bg-transparent rounded-lg focus:outline-none resize-none border border-gray-500"
          placeholder={editingMessageId ? "Edit your message..." : "Type your message..."}
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
          accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.xls,.xlsx,.txt"
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
          <PopoverContent className="mr-2 mb-6">
            <div className="grid grid-cols-6 gap-4 overflow-y-auto max-h-96 emoji-scrollbar">
              {emojis.map((emoji, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setMessageInput((prev) => prev + emoji);  
                    // setShowEmojiPicker(false);
                  }}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                >
                  {emoji}
                </button>
              ))}
            </div>
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
