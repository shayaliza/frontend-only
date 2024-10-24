import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Smile, Send, MoreVertical, Pin, Edit, Reply, X } from "lucide-react";

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
    content: "Hello team!",
    timestamp: "10:10 AM",
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
  const [showReactions, setShowReactions] = useState(false);

  return (
    <div className={`group pt-6 flex items-start gap-2 ${isCurrentUser ? "justify-end" : "justify-start"}`}>
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

        <Card className={`border-0 ${isCurrentUser ? "bg-blue-400 rounded-t-lg rounded-bl-lg text-gray-200" : "bg-gray-500 rounded-t-lg rounded-br-lg text-gray-200"}`}>
          <CardContent className="p-3">
            <div className="flex justify-between items-start gap-2">
              <div className="text-sm font-medium">
                {isCurrentUser ? "You" : message.user}
                <span className="text-xs ml-2 opacity-70">{message.timestamp}</span>
              </div>

              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Smile className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-fit p-0">
                    <ReactionSelector onReact={(emoji) => onReact(message.id, emoji)} />
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
                  <Badge key={index} variant="secondary" className="text-xs py-0 h-6">
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

function ChatInterface({ toggleProfileSectionVisibility }) {
  const location = useLocation();
  const [messageInput, setMessageInput] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [replyToMessage, setReplyToMessage] = useState(null);
  const [channelMessages, setChannelMessages] = useState(initialChannelMessages);
  const [dmMessages, setDMMessages] = useState(initialDMMessages);
  const isChannelChat = location.pathname.includes("/channels/");
  const chatName = location.pathname.split("/").pop().replace(/_/g, " ");
  const messages = isChannelChat ? channelMessages : dmMessages;
  const setMessages = isChannelChat ? setChannelMessages : setDMMessages;

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
      messages.map((msg) => (msg.id === messageId ? { ...msg, isPinned: !msg.isPinned } : msg))
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
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
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

  return (
    <div className="flex flex-col h-[calc(100vh-56px)] text-gray-700 dark:text-gray-200">
      <div className="header p-4 flex justify-between items-center border shadow-md">
          <div className="flex items-center mx-4 cursor-pointer" onClick={toggleProfileSectionVisibility}>
            <img
              src={currentUser.photo}
              alt="Profile"
              className="w-12 h-12 flex-shrink-0 rounded-full border mr-4"
            />
            <div className="text-lg font-bold">
              {isChannelChat ? chatName : chatName}
            </div>
          </div>
        </div>
      <div className="flex-grow p-4 overflow-auto">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            isCurrentUser={message.user === currentUser.name}
            isChannelChat={isChannelChat}
            onReact={addReaction}
            onPin={togglePin}
            onReply={handleReply}
            onEdit={handleEdit}
          />
        ))}
      </div>

      <div className="p-4 border-t border-gray-700 flex flex-col gap-2">
        {replyToMessage && (
          <div className="p-2 bg-gray-500 rounded-md flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Replying to {replyToMessage.user}: "{replyToMessage.content}"
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0"
              onClick={() => setReplyToMessage(null)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}

        <div className="message-input flex gap-2 items-center">
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

          <textarea
              id="message-textarea"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              className="w-full p-2 bg-transparent rounded-lg border border-gray-500 focus:outline-none resize-none overflow-y-auto"
              placeholder={editingMessageId ? "Edit your message..." : "Type your message..."}
              style={{ minHeight: "0px", maxHeight: "300px", overflowY: "auto" }}
              onInput={(e) => {
                e.target.style.height = "auto";
                const newHeight = Math.min(e.target.scrollHeight, 400);
                e.target.style.height = `${newHeight}px`;
              }}
            />

          <Button onClick={sendMessage} className="h-8 w-8 p-0">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;
