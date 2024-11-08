import React from "react";
import { Button } from "@/components/ui/button";
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
} from "lucide-react";
const REACTION_TYPES = [
    { emoji: "👍", label: "Like" },
    { emoji: "😄", label: "Haha" },
    { emoji: "😢", label: "Sad" },
    { emoji: "😄", label: "Haha" },
    { emoji: "😢", label: "Sad" },
  ];

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
  
      return (
        <div className="mb-2 flex items-center gap-2 bg-muted p-2 rounded">
          <Reply className="w-4 h-4" />
          <div className="flex-grow flex items-center gap-2">
            <div className="flex-grow">
              <div className="text-sm font-medium">{replyToMessage.user}</div>
              {replyToMessage.imageUrl ? (
                <div className="flex items-center gap-2">
                  <img 
                    src={replyToMessage.imageUrl} 
                    alt="Reply preview" 
                    className="h-10 w-10 object-cover rounded"
                  />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Photo
                  </span>
                </div>
              ) : replyToMessage.fileUrl ? (
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded">
                    <FileIcon className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {replyToMessage.fileName}
                  </span>
                </div>
              ) : (
                <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                  {replyToMessage.content}
                </div>
              )}
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setReplyToMessage(null)}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      );
    };
  
    return (
      <div className="p-4 border-t shadow-md">
        {renderReplyPreview()}
  
        <div className="flex items-center gap-2">
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
              e.target.style.height = `${Math.min(
                e.target.scrollHeight,
                200
              )}px`;
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
  
          <Button
            variant="ghost"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
          >
            <PaperclipIcon className="h-4 w-4" />
          </Button>
  
          <Popover open={showEmojiPicker} onOpenChange={setShowEmojiPicker}>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="sm">
                <Smile className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="grid grid-cols-5 gap-2 p-2">
                {REACTION_TYPES.map((reaction) => (
                  <button
                    key={reaction.label}
                    onClick={() => {
                      setMessageInput((prev) => prev + reaction.emoji);
                      setShowEmojiPicker(false);
                    }}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                  >
                    {reaction.emoji}
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