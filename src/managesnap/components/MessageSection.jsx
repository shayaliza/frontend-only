import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
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
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  Smile,
  Send,
  MoreVertical,
  Pin,
  Edit,
  Reply,
  X,
} from "lucide-react";
import ChannelsSidebar from "./ChannelsSidebar";
import Profile from "./ProfileSection";
import "./Main.css";
import { EmojiHappyIcon } from "@heroicons/react/outline";

const currentUser = {
  id: 1,
  name: "Yaswanth",
  photo: "/api/placeholder/32/32",
};

const reactionTypes = [
  { emoji: "👍", label: "Like" },
  { emoji: "❤️", label: "Love" },
  { emoji: "😄", label: "Haha" },
  { emoji: "😢", label: "Sad" },
  { emoji: "😠", label: "Angry" },
];

const initialChannelMessages = [
  {
    id: 1,
    user: "Alice",
    content: "Hey everyone!",
    timestamp: "10:00 AM",
    reactions: [],
    photo: "/api/placeholder/32/32",
    isPinned: false,
  },
  {
    id: 2,
    user: "Yaswanth",
    content: "Hi Alice, how are you?",
    timestamp: "10:05 AM",
    reactions: [],
    photo: "/api/placeholder/32/32",
    isPinned: false,
  },
  {
    id: 3,
    user: "Bob",
    content: "Hey everyone!",
    timestamp: "10:00 AM",
    reactions: [],
    photo: "/api/placeholder/32/32",
    isPinned: false,
  },
];

const initialDMMessages = [
  {
    id: 1,
    user: "John",
    content: "Hey, how's it going?",
    timestamp: "10:15 AM",
    reactions: [],
  },
  {
    id: 2,
    user: "Yaswanth",
    content: "I'm good, thanks! How about you?",
    timestamp: "10:20 AM",
    reactions: [],
  },
];

function MessageOptions({ message, onReply, onEdit, onPin, isCurrentUser }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => onReply(message)}>
          <Reply className="mr-2 h-4 w-4" /> Reply
        </DropdownMenuItem>
        {isCurrentUser && (
          <DropdownMenuItem onClick={() => onEdit(message.id, message.content)}>
            <Edit className="mr-2 h-4 w-4" /> Edit
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={() => onPin(message.id)}>
          <Pin className="mr-2 h-4 w-4" /> {message.isPinned ? "Unpin" : "Pin"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ReactionSelector({ onReact }) {
  return (
    <div className="p-2 grid grid-cols-5 gap-1">
      {reactionTypes.map((reaction) => (
        <Button
          key={reaction.label}
          variant="ghost"
          size="sm"
          onClick={() => onReact(reaction.emoji)}
          className="text-lg hover:bg-muted"
        >
          {reaction.emoji}
        </Button>
      ))}
    </div>
  );
}

function ChatMessage({
  message,
  isCurrentUser,
  onReply,
  onEdit,
  onPin,
  onReact,
  isChannelChat,
}) {

  return (
    <div
      className={`group pt-6 flex items-start gap-2 ${
        isCurrentUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isCurrentUser && isChannelChat && (
        <Avatar className="w-8 h-8 border border-gray-500">
          <AvatarImage src={message.photo} alt={message.user} />
          <AvatarFallback>{message.user[0]}</AvatarFallback>
        </Avatar>
      )}

      <div className="relative max-w-[70%]">
        {message.isPinned && (
          <div className="absolute -top-6 left-0 flex items-center text-xs text-muted-foreground">
            <Pin className="w-3 h-3 mr-1" /> Pinned
          </div>
        )}

        <Card
          className={`border-0 ${
            isCurrentUser
              ? "bg-blue-400 rounded-t-lg rounded-bl-lg text-gray-200"
              : "bg-gray-500 rounded-t-lg rounded-br-lg text-gray-200"
          }`}
        >
          <CardContent className="p-3">
            <div className="flex justify-between items-start gap-2">
              <div className="text-sm font-medium">
                {isCurrentUser ? "You" : message.user}
                <span className="text-xs ml-2 opacity-70">
                  {message.timestamp}
                </span>
              </div>

              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Smile className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-fit p-0">
                    <ReactionSelector
                      onReact={(emoji) => onReact(message.id, emoji)}
                    />
                  </PopoverContent>
                </Popover>

                <MessageOptions
                  message={message}
                  onReply={onReply}
                  onEdit={onEdit}
                  onPin={onPin}
                  isCurrentUser={isCurrentUser}
                />
              </div>
            </div>

            <div className="mt-1">{message.content}</div>

            {message.reactions.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {message.reactions.map((reaction, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs py-0 h-6"
                  >
                    {reaction.emoji}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function ChatInterface({ toggleProfileSectionVisibility, onProfileIdChange }) {
  const [messageInput, setMessageInput] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [replyToMessage, setReplyToMessage] = useState(null);
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];
  
  const isChannelChat = lastSegment.startsWith("C");
  const isDMChat = lastSegment.startsWith("D");
  const [messages, setMessages] = useState([]);

  const handleProfileToggle = () => {
    toggleProfileSectionVisibility();
    if (onProfileIdChange) {
      onProfileIdChange(lastSegment);
    }
  };
  
  useEffect(() => {
    setMessages(isChannelChat ? initialChannelMessages : initialDMMessages);
    setMessageInput("");
    setEditingMessageId(null);
    setReplyToMessage(null);
  }, [lastSegment]); 

  const addReaction = (messageId, reaction) => {
    setMessages(
      messages.map((msg) =>
        msg.id === messageId
          ? {
              ...msg,
              reactions: msg.reactions.some((r) => r.emoji === reaction)
                ? msg.reactions.filter((r) => r.emoji !== reaction)
                : [...msg.reactions, { emoji: reaction, user: currentUser.name }],
            }
          : msg
      )
    );
  };

  const togglePin = (messageId) => {
    setMessages(
      messages.map((msg) =>
        msg.id === messageId ? { ...msg, isPinned: !msg.isPinned } : msg
      )
    );
  };

  const sendMessage = () => {
    if (!messageInput.trim()) return;

    if (editingMessageId) {
      setMessages(
        messages.map((msg) =>
          msg.id === editingMessageId ? { ...msg, content: messageInput } : msg
        )
      );
      setEditingMessageId(null);
    } else {
      const newMessage = {
        id: messages.length + 1,
        user: currentUser.name,
        content: messageInput,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        reactions: [],
        photo: currentUser.photo,
        isPinned: false,
      };
      setMessages([...messages, newMessage]);
    }
    setMessageInput("");
    const textarea = document.getElementById("message-textarea");
    if (textarea) {
      textarea.style.height = "auto";
    }
    setReplyToMessage(null);
  };

  const handleReply = (message) => setReplyToMessage(message);
  const handleEdit = (messageId, content) => {
    setEditingMessageId(messageId);
    setMessageInput(content);
  };
  const cancelReply = () => setReplyToMessage(null);

  return (
    <div className="flex flex-col h-full text-black dark:text-white">
      <div className="p-4 flex justify-between items-center border-b shadow-md">
        <div
          className="flex items-center cursor-pointer"
          onClick={toggleProfileSectionVisibility}
        >
          <Avatar className="w-12 h-12 border border-gray-500 mr-4">
            <AvatarImage src={currentUser.photo} alt="Profile" />
            <AvatarFallback>YR</AvatarFallback>
          </Avatar>
          <div className="text-lg font-bold">
            {lastSegment}
          </div>
        </div>
      </div>
      <div className="flex-grow overflow-auto p-4">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            isCurrentUser={message.user === currentUser.name}
            onReply={handleReply}
            onEdit={handleEdit}
            onPin={togglePin}
            onReact={addReaction}
            isChannelChat={isChannelChat}
          />
        ))}
      </div>
      <div className="p-4 border-t shadow-md">
        {replyToMessage && (
          <div className="mb-2 flex items-center text-sm bg-muted p-2 rounded">
            <Reply className="w-4 h-4 mr-2" />
            <span className="flex-1">Replying to {replyToMessage.user}</span>
            <Button variant="ghost" size="xs" onClick={cancelReply}>
              <X className="w-3 h-3" />
            </Button>
          </div>
        )}
        <div className="flex items-center gap-2">
          <textarea
              id="message-textarea"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              className="w-full p-2 bg-transparent rounded-lg focus:outline-none resize-none border border-gray-500 overflow-y-auto"
              placeholder={editingMessageId ? "Edit your message..." : "Type your message..."}
              style={{ minHeight: "0px", maxHeight: "200px", overflowY: "auto" }}
              onInput={(e) => {
                e.target.style.height = "auto";
                const newHeight = Math.min(e.target.scrollHeight, 400);
                e.target.style.height = `${newHeight}px`;
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
          <Popover open={showEmojiPicker} onOpenChange={setShowEmojiPicker}>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Smile className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <ReactionSelector onReact={(emoji) => setMessageInput(messageInput + emoji)} />
            </PopoverContent>
          </Popover>
          <Button variant="ghost" size="sm" onClick={sendMessage}>
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

const FullChatInterface = () => {
  const [isResizingLeft, setIsResizingLeft] = useState(false);
  const [isResizingRight, setIsResizingRight] = useState(false);
  const [channelsSidebarWidth, setChannelsSidebarWidth] = useState(280);
  const [profileSectionWidth, setProfileSectionWidth] = useState(300);
  const [isProfileSectionVisible, setIsProfileSectionVisible] = useState(false);

  const channelsSidebarRef = useRef(null);
  const messageSectionRef = useRef(null);
  const profileSectionRef = useRef(null);
  const leftDividerRef = useRef(null);
  const rightDividerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isResizingLeft) {
        const newWidth =
          e.clientX - channelsSidebarRef.current.getBoundingClientRect().left;
        if (newWidth > 200 && newWidth < 400) {
          setChannelsSidebarWidth(newWidth);
        }
      } else if (isResizingRight) {
        const containerWidth =
          messageSectionRef.current.parentElement.offsetWidth;
        const newWidth = containerWidth - e.clientX;
        if (newWidth > 230 && newWidth < 400) {
          setProfileSectionWidth(newWidth);
        }
      }
    };

    const handleMouseUp = () => {
      setIsResizingLeft(false);
      setIsResizingRight(false);
    };

    if (isResizingLeft || isResizingRight) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.classList.add('selecting-none')
    };
  }, [isResizingLeft, isResizingRight]);

  const toggleProfileSectionVisibility = () => {
    setIsProfileSectionVisible(!isProfileSectionVisible);
  };
  return (
    <div className="flex">
      <div className="flex flex-grow overflow-hiddens">
        <div
          ref={channelsSidebarRef}
          style={{ width: `${channelsSidebarWidth}px` }}
          className="flex-shrink-0"
        >
          <ChannelsSidebar />
        </div>
        <div
          ref={leftDividerRef}
          className="w-1 bg-gray-600 cursor-col-resize"
          onMouseDown={() => setIsResizingLeft(true)}
        />
        <div
          ref={messageSectionRef}
          className={`flex-grow overflow-hidden ${
            !isProfileSectionVisible ? "flex-grow" : ""
          }`}
        >
          <ChatInterface
            isProfileSectionVisible={isProfileSectionVisible}
            toggleProfileSectionVisibility={toggleProfileSectionVisibility}
          />
        </div>
        <div
          ref={rightDividerRef}
          className="w-1 bg-gray-600 cursor-col-resize"
          onMouseDown={() => setIsResizingRight(true)}
        />
        {isProfileSectionVisible && (
          <div
            ref={profileSectionRef}
            style={{ width: `${profileSectionWidth}px` }}
            className="flex-shrink-0"
          >
            <Profile
              onToggleVisibility={toggleProfileSectionVisibility}
              setIsProfileSectionVisible={setIsProfileSectionVisible}
              isProfileSectionVisible={isProfileSectionVisible}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FullChatInterface;
