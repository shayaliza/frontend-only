import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { FaForward, FaShare } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import getFileIcon from "./GetFileIcon";
import MessageOptions from "./MessageOptions";
import LinkPreviewHandler from "./LinkHandling";
import {
  Pin,
  Download,
  FileIcon,
  ReplyIcon,
  ViewIcon,
  ForwardIcon,
} from "lucide-react";
import ReactionPicker from "./ReactionPicker";
import MessageStatus from "./MessageStatus";
import MessageTimestamp from "./MessageTimestamp";
import ForwardMessage from "./ForwardMessage";

export default function ChatMessage({
  message,
  id,
  previousMessage,
  isHighlighted,
  isCurrentUser,
  messageStatus,
  onReply,
  onEdit,
  onDelete,
  onPin,
  onReact,
  isChannelChat,
}) {
  const [showFullContent, setShowFullContent] = useState(false);
  const contentRef = useRef(null);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [forwardOpen, setForwardOpen] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setHasOverflow(
        contentRef.current.scrollHeight > contentRef.current.clientHeight
      );
    }
  }, [message.content]);

  const handleReaction = (emoji) => {
    onReact(message.id, emoji);
  };

  const shareMessage = async (event) => {
    event?.preventDefault();
    event?.stopPropagation();

    try {
      let shareData = {
        title: "Shared Message",
        text: message.content,
      };

      if (message.imageUrl) {
        shareData.url = message.imageUrl;
      }

      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(
          `${message.content}${message.imageUrl ? `\n${message.imageUrl}` : ""}`
        );
        alert("Message copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const renderContent = () => {
    return (
      <div className="space-y-2 msg-scrollbar">
        {message.replyTo && (
          <div
            className="bg-black/10 dark:bg-white/10 rounded p-2 text-sm cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              const originalMessage = document.getElementById(
                `message-${message.replyTo.id}`
              );
              originalMessage?.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
          >
            <div className="text-xs opacity-70">
              Reply to {message.replyTo.user}
            </div>
            {message.replyTo.imageUrl ? (
              <div className="flex items-center gap-2 mt-1">
                <img
                  src={message.replyTo.imageUrl}
                  alt="Reply"
                  className="h-10 w-10 object-cover rounded"
                />
                <span className="text-sm">Photo</span>
              </div>
            ) : message.replyTo.fileUrl ? (
              <div className="flex items-center gap-2 mt-1">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded">
                  <FileIcon className="h-4 w-4" />
                </div>
                <span className="text-sm">{message.replyTo.fileName}</span>
              </div>
            ) : (
              <div className="line-clamp-1">{message.replyTo.content}</div>
            )}
          </div>
        )}

        {message.imageUrl && (
          <div className="relative group">
            <img
              src={message.imageUrl}
              alt="Shared"
              className="max-w-sm rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
            />
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                variant="secondary"
                size="sm"
                className="mr-2"
                onClick={() => handleFileDownload(message.imageUrl, "image")}
              >
                <Download className="w-4 h-4" />
              </Button>
              <Button variant="secondary" size="sm" onClick={shareMessage}>
                <FaShare className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {message.linkUrl && <LinkPreviewHandler content={message.linkUrl} />}
        {/* {message.linkUrl.includes("giphy.com") && (
          <img
            src={message.linkUrl}
            alt="GIF"
            className="max-w-full h-auto rounded-lg"
          />
        )} */}

        {!message.imageUrl && message.fileUrl && (
          <div className="flex items-center space-x-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer group">
            {getFileIcon(message.fileType)}
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm truncate text-black dark:text-white">
                {message.fileName}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <span>{message.fileSize}</span>
              </div>
            </div>
            <a
              href={message.fileUrl}
              download
              rel="noopener noreferrer"
              className="text-red-600 underline break-all opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Download className="w-4 h-4" />
            </a>
            <a
              href={message.fileUrl}
              target="_blank"
              className="text-red-600 underline break-all opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ViewIcon className="w-4 h-4" />
            </a>
          </div>
        )}

        <div
          ref={contentRef}
          className={`${
            showFullContent ? "" : "max-h-68"
          } overflow-hidden transition-all duration-200 break-words whitespace-pre-wrap`}
        >
          <LinkPreviewHandler content={message.content} />
        </div>

        {hasOverflow && (
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              setShowFullContent(!showFullContent);
            }}
            className="text-xs"
          >
            {showFullContent ? "Show less" : "Show more"}
          </Button>
        )}

        {isCurrentUser && (
          <div className="absolute bottom-0 right-0 flex items-center space-x-1 p-1">
            <MessageStatus
              status={messageStatus?.status}
              seenBy={messageStatus?.seenBy}
              isChannelChat={isChannelChat}
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`relative w-full px-2 ${
        isCurrentUser ? "items-end" : "items-start"
      }`}
      id={id}
    >
      <div
        className={`flex w-full mb-1 ${
          isCurrentUser ? "justify-end" : "justify-start"
        } px-2`}
      >
        <div className="flex items-center gap-2 text-xs text-muted-foreground ml-8">
          {!isCurrentUser && isChannelChat && (
            <span className="font-medium">{message.user}</span>
          )}
          <MessageTimestamp
            message={message}
            previousMessage={previousMessage}
          />
        </div>
      </div>

      <div
        className={`flex items-start gap-2 ${
          isCurrentUser ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {!isCurrentUser && (
          <Avatar className="w-8 h-8 border border-gray-500 flex-shrink-0">
            <AvatarImage src={message.photo} alt={message.user} />
          </Avatar>
        )}

        <div className="relative max-w-2xl group">
          <Card
            className={`border-0 ${
              isHighlighted
                ? "bg-yellow-500 dark:bg-yellow-500"
                : isCurrentUser
                ? "bg-blue-500 text-white dark:bg-blue-700"
                : "bg-gray-200 dark:bg-gray-700"
            } 
            ${
              isCurrentUser
                ? "rounded-t-lg rounded-bl-lg"
                : "rounded-t-lg rounded-br-lg"
            }`}
          >
            {message.isPinned && (
              <div className="absolute top-2 right-2 text-xs text-muted-foreground">
                <Pin fill="#000" className="w-2 h-2 text-black" />
              </div>
            )}
            <CardContent className="p-3">{renderContent()}</CardContent>
          </Card>

          {message.reactions.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1 z-20">
              {message.reactions.map((reaction, index) => (
                <Badge
                  key={`${reaction.emoji}-${index}`}
                  variant="secondary"
                  className="text-xs py-0.5 px-2 cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-600 bg-gray-200"
                  onClick={(e) => handleReaction(reaction.emoji)}
                >
                  {reaction.emoji}
                </Badge>
              ))}
            </div>
          )}

          <ForwardMessage
            message={message}
            isOpen={forwardOpen}
            onClose={() => setForwardOpen(false)}
          />

          <div
            className={`absolute top-0 ${
              isCurrentUser ? "right-72" : "left-0"
            } z-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 mb-1 rounded-full bg-white dark:bg-gray-800 shadow-lg border`}
            style={{
              transform: isCurrentUser
                ? "translateY(-100%) translateX(100%)"
                : "translateY(-100%)",
            }}
          >
            <div className="border-r border-gray-500">
              <ReactionPicker onReact={handleReaction} />
            </div>
            <ReplyIcon
              className="cursor-pointer w-5 h-5"
              onClick={(e) => {
                e.preventDefault();
                onReply(message);
              }}
            />
            <ForwardIcon
              className="ml-2 cursor-pointer w-5 h-5"
              onClick={() => setForwardOpen(true)}
            />
            <MessageOptions
              message={message}
              onReply={onReply}
              onDelete={onDelete}
              onEdit={onEdit}
              onPin={onPin}
              isCurrentUser={isCurrentUser}
              forwardOpen={forwardOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
