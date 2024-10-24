import { useState, useRef, useEffect } from "react";
import {
  Send,
  Paperclip,
  Smile,
  AtSign,
  Link,
  Image,
  Code,
  Bold,
  Italic,
  Search,
  MoreVertical,
  Edit2,
  Trash2,
  Reply,
  Pin,
  ThumbsUp,
  Heart,
  Star,
  Plus,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Switch } from "../../components/ui/Switch";
import ProfileSection from "./ProfileSection";

const REACTIONS = [
  { emoji: "👍", name: "thumbsup" },
  { emoji: "❤️", name: "heart" },
  { emoji: "😊", name: "smile" },
  { emoji: "🎉", name: "party" },
  { emoji: "🔥", name: "fire" },
  { emoji: "👏", name: "clap" },
];

const DMs = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState({});
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [replyingTo, setReplyingTo] = useState(null);
  const [pinnedMessages, setPinnedMessages] = useState([]);
  const [profileUserId, setProfileUserId] = useState(null);

  const users = [
    {
      id: "Kunal",
      name: "Kunal Dugar",
      avatar: "/api/placeholder/32/32",
      status: "online",
      lastSeen: "Active now",
      timestamp: "Sep 4",
    },
    {
      id: "Techsnap",
      name: "Techsnap",
      avatar: "/api/placeholder/32/32",
      status: "away",
      lastSeen: "2h ago",
      timestamp: "Aug 14",
    },
  ];

  const [isResizingLeft, setIsResizingLeft] = useState(false);
  const [isResizingRight, setIsResizingRight] = useState(false);
  const [dmListWidth, setDmListWidth] = useState(360);
  const [profileSectionWidth, setProfileSectionWidth] = useState(300);
  const [isProfileSectionVisible, setIsProfileSectionVisible] = useState(false);

  const dmListRef = useRef(null);
  const messageSectionRef = useRef(null);
  const profileSectionRef = useRef(null);
  const leftDividerRef = useRef(null);
  const rightDividerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isResizingLeft) {
        const newWidth = e.clientX - dmListRef.current.getBoundingClientRect().left;
        if (newWidth > 200 && newWidth < 400) {
          setDmListWidth(newWidth);
        }
      } else if (isResizingRight) {
        const containerWidth = messageSectionRef.current.parentElement.offsetWidth;
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
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      document.body.classList.add('selecting-none');
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.classList.remove('selecting-none');
    };
  }, [isResizingLeft, isResizingRight]);

  const toggleProfileSectionVisibility = (userId) => {
    setIsProfileSectionVisible(!isProfileSectionVisible);
    setProfileUserId(userId);  
  };


  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked((prev) => !prev);
  };

  const handleSendMessage = () => {
    if (messageInput.trim() === "") return;

    const newMessage = {
      id: Date.now(),
      text: messageInput,
      timestamp: new Date().toLocaleTimeString(),
      status: "sent",
      reactions: {},
      sender: "me",
      replyTo: replyingTo,
    };

    setMessages((prevMessages) => ({
      ...prevMessages,
      [selectedUser.id]: [...(prevMessages[selectedUser.id] || []), newMessage],
    }));

    setMessageInput("");
    setEditingMessageId(null);
    setReplyingTo(null);

    setTimeout(() => {
      const receivedMessage = {
        id: Date.now() + 1,
        text: "This is a sample response",
        timestamp: new Date().toLocaleTimeString(),
        status: "received",
        reactions: {},
        sender: "them",
      };

      setMessages((prevMessages) => ({
        ...prevMessages,
        [selectedUser.id]: [
          ...(prevMessages[selectedUser.id] || []),
          receivedMessage,
        ],
      }));
    }, 1000);
  };

  const handleReaction = (messageId, reaction) => {
    setMessages((prevMessages) => {
      const userMessages = [...(prevMessages[selectedUser.id] || [])];
      const messageIndex = userMessages.findIndex((m) => m.id === messageId);

      if (messageIndex !== -1) {
        const message = userMessages[messageIndex];
        const currentReactions = { ...message.reactions };

        if (currentReactions[reaction]) {
          delete currentReactions[reaction];
        } else {
          currentReactions[reaction] = 1;
        }

        userMessages[messageIndex] = {
          ...message,
          reactions: currentReactions,
        };
      }

      return {
        ...prevMessages,
        [selectedUser.id]: userMessages,
      };
    });
  };

  const handlePinMessage = (messageId) => {
    setPinnedMessages((prev) => {
      if (prev.includes(messageId)) {
        return prev.filter((id) => id !== messageId);
      }
      return [...prev, messageId];
    });
  };

  const handleReply = (message) => {
    setReplyingTo(message);
    document.querySelector("textarea")?.focus();
  };

  const ReactionBar = ({ message }) => (
    <div className="absolute bottom-0 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 p-1 rounded-full bg-white dark:bg-gray-800 shadow-lg border">
      {REACTIONS.map((reaction) => (
        <button
          key={reaction.name}
          onClick={(e) => {
            e.stopPropagation();
            handleReaction(message.id, reaction.emoji);
          }}
          className="hover:bg-gray-100 dark:hover:bg-gray-700 p-1 rounded-full transition-colors"
        >
          {reaction.emoji}
        </button>
      ))}
    </div>
  );

  const MessageBubble = ({ message }) => {
    const isMe = message.sender === "me";
    const isPinned = pinnedMessages.includes(message.id);
    const replyingToMessage = message.replyTo
      ? messages[selectedUser.id]?.find((m) => m.id === message.replyTo.id)
      : null;

    return (
      <div
        className={`group relative flex flex-col gap-1 mb-4 max-w-[40%] ${
          isMe ? "ml-auto" : "mr-auto"
        }`}
      >
        {replyingToMessage && (
          <div
            className={`text-xs opacity-75 mb-1 ${
              isMe ? "text-right" : "text-left"
            }`}
          >
            Replying to: {replyingToMessage.text.substring(0, 30)}...
          </div>
        )}

        <div
          className={`flex items-start gap-2 ${
            isMe ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className="flex-1 relative group">
            {isPinned && (
              <Pin className="absolute -top-4 -left-4 h-3 w-3 text-gray-500" />
            )}

            <div
              className={`relative rounded-2xl px-4 py-2 ${
                isMe
                  ? "bg-blue-500 text-white before:absolute before:right-[-6px] before:top-[50%] before:border-8 before:border-transparent before:border-l-blue-500"
                  : "bg-gray-100 dark:bg-gray-800 before:absolute before:left-[-6px] before:top-[50%] before:border-8 before:border-transparent before:border-r-gray-100 dark:before:border-r-gray-800"
              }`}
            >
              {message.text}
            </div>

            {Object.entries(message.reactions).length > 0 && (
              <div
                className={`flex gap-1 mt-1 ${
                  isMe ? "justify-end" : "justify-start"
                }`}
              >
                {Object.entries(message.reactions).map(([reaction, count]) => (
                  <span
                    key={reaction}
                    className="bg-white dark:bg-gray-800 px-2 py-0.5 rounded-full text-xs border"
                  >
                    {reaction}
                  </span>
                ))}
              </div>
            )}

            <div
              className={`mt-1 text-xs opacity-50 flex gap-1 items-center ${
                isMe ? "justify-end" : "justify-start"
              }`}
            >
              {message.timestamp}
              {message.status === "sent" && <span>✓</span>}
            </div>

            <ReactionBar message={message} />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100"
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={isMe ? "end" : "start"}>
              <DropdownMenuItem onClick={() => handleReply(message)}>
                <Reply className="mr-2 h-4 w-4" />
                Reply
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handlePinMessage(message.id)}>
                <Pin className="mr-2 h-4 w-4" />
                {isPinned ? "Unpin" : "Pin"}
              </DropdownMenuItem>
              {isMe && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => handleEditMessage(message.id)}
                  >
                    <Edit2 className="mr-2 h-4 w-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleDeleteMessage(message.id)}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    );
  };

  return (
    <TooltipProvider>
      <div className="flex h-[calc(100vh-56px)] text-gray-800 dark:text-gray-200">
        <div className="w-1/4 border-r flex flex-col"
        ref={dmListRef} 
        style={{ width: `${dmListWidth}px` }} >
          <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold">Direct Messages</span>
            <div className="flex items-center space-x-2">
                <div
                  onClick={toggleSwitch}
                  className={`relative inline-block w-10 h-6 rounded-full transition-colors hover:cursor-pointer ${
                    isChecked ? "bg-blue-500" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`absolute left-1 top-1 block w-4 h-4 rounded-full bg-white transition-transform ${
                      isChecked ? "translate-x-4" : "translate-x-0"
                    }`}
                  />
                </div>
              <label htmlFor="airplane-mode">Unread</label>
            </div>
          </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50" />
              <input
                type="text"
                placeholder="Search dms"
                className="w-full pl-10 pr-4 py-2 border rounded-full bg-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {filteredUsers.map((user) => (
              <button
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-accent transition-colors hover:bg-gray-600"
              >
                <Avatar className="border border-gray-300">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 text-left">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{user.name}</span>
                    <span className="text-xs opacity-50">{user.timestamp}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        user.status === "online" ? "default" : "secondary"
                      }
                    >
                      {user.lastSeen}
                    </Badge>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div
        ref={leftDividerRef}
        className="w-1 bg-gray-600 cursor-col-resize hover:bg-blue-500 transition-colors"
        onMouseDown={() => setIsResizingLeft(true)}
      />
        <div className="flex-1 flex flex-col"
        ref={messageSectionRef}>
          {selectedUser ? (
            <>
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="border cursor-pointer" onClick={() => toggleProfileSectionVisibility(selectedUser.id)}>
                    <AvatarImage src={selectedUser.avatar} />
                    <AvatarFallback>
                      {selectedUser.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="font-medium">{selectedUser.name}</h2>
                    <p className="text-sm opacity-50">
                      {selectedUser.lastSeen}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                {(messages[selectedUser.id] || []).map((message) => (
                  <MessageBubble key={message.id} message={message} />
                ))}
              </div>

              <div className="p-4 border-t">
                {replyingTo && (
                  <div className="mb-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Reply className="h-4 w-4" />
                      <span className="text-sm">Replying to message</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setReplyingTo(null)}
                    >
                      ×
                    </Button>
                  </div>
                )}

                <div className="flex items-end gap-2">
                  <div className="flex-1">
                    <textarea
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      placeholder="Type a message..."
                      className="w-full p-3 rounded-lg border bg-transparent resize-none focus:outline-none"
                      rows={2}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                    />
                  </div>
                  <div className="flex gap-2 mb-3">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Paperclip className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Attach file</TooltipContent>
                    </Tooltip>
                    <Button onClick={handleSendMessage}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center opacity-50">
              Select a conversation to start messaging
            </div>
          )}
        </div>
        {isProfileSectionVisible && (
        <div
          ref={rightDividerRef}
          className="w-1 bg-gray-600 cursor-col-resize hover:bg-blue-500 transition-colors"
          onMouseDown={() => setIsResizingRight(true)}
        />
      )}

      {isProfileSectionVisible && (
        <div 
          ref={profileSectionRef} 
          style={{ width: `${profileSectionWidth}px` }} 
          className="flex-shrink-0 border-l border-gray-600 overflow-y-auto"
        >
          <ProfileSection
            userId={profileUserId} 
            onToggleVisibility={toggleProfileSectionVisibility}
            setIsProfileSectionVisible={setIsProfileSectionVisible}
            isProfileSectionVisible={isProfileSectionVisible}
          />
        </div>
      )}
      </div>
    </TooltipProvider>
  );
};

export default DMs;
