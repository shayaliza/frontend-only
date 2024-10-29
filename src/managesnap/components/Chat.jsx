import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaShare } from "react-icons/fa";
import img from "../assets/man1.jpg";
import img2 from "../assets/man2.jpg";
import img3 from "../assets/man3.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog";
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
  Image as ImageIcon,
  Link as LinkIcon,
  Download,
  Copy,
  FileIcon,
  PinIcon,
  PaperclipIcon,
} from "lucide-react";

const currentUser = {
  id: 1,
  name: "You",
  photo: "/api/placeholder/32/32",
};

const reactionTypes = [
  { emoji: "👍", label: "Like" },
  { emoji: "❤️", label: "Love" },
  { emoji: "😄", label: "Haha" },
  { emoji: "😢", label: "Sad" },
  { emoji: "😠", label: "Angry" },
];

// Dummy data for Direct Messages (DMs)
const dms = [
  {
    id: "msg1",
    user: "user",
    content: "Hello bro!",
    photo: img,
    timestamp: "2024-10-26T09:00:00",
    reactions: [{ emoji: "👋", count: 1 }],
  },
  {
    id: "msg2",
    user: "You",
    content: "Hey, good morning!",
    photo: img2,
    timestamp: "2024-10-28T09:05:00",
    reactions: [],
  },
  {
    id: "msg3",
    user: "User",
    photo: img3,
    url:"https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg",
    timestamp: "2024-10-24T09:10:00",
    reactions: [{ emoji: "☕", count: 2 }],
  },
];

// Dummy data for Channels
const channels = [
  {
    id: "msg1",
    user: "userA",
    content: "Hello everyone!",
    photo: img,
    timestamp: "2024-10-26T09:00:00",
    reactions: [{ emoji: "👋", count: 1 }],
  },
  {
    id: "msg3",
    user: "You",
    content: "Good morning all!",
    photo: img3,
    timestamp: "2024-10-24T09:10:00",
    reactions: [{ emoji: "☕", count: 2 }],
  },
  {
    id: "msg2",
    user: "userB",
    content: "Hey, good morning!",
    photo: img2,
    timestamp: "2024-10-28T09:05:00",
    reactions: [],
  },
];

function ImagePreviewModal({ isOpen, onClose, imageUrl, onDownload, onShare }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-auto max-h-screen overflow-hidden">
        <DialogHeader>
          <DialogTitle>Image Preview</DialogTitle>
        </DialogHeader>
        <div className="relative flex items-center justify-center h-full">
          <img
            src={imageUrl}
            alt="Preview"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
          <div className="absolute bottom-4 right-4 flex gap-2">
            <Button variant="secondary" size="sm" onClick={onDownload}>
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button variant="secondary" size="sm" onClick={onShare}>
              <FaShare className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function LinkPreviewCard({ url }) {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    setPreview({
      title: "Sample Link Title",
      description: "This is a sample description for the link preview...",
      image: url,
    });
  }, [url]);

  if (!preview) return null;

  return (
    <div className="border rounded-lg p-2 mt-2 max-w-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          src={preview.image}
          alt={preview.title}
          className="w-full h-24 object-cover rounded-lg mb-2"
        />
        <h4 className="font-medium text-sm">{preview.title}</h4>
        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
          {preview.description}
        </p>
      </a>
    </div>
  );
}

function Chat({ toggleProfileSectionVisibility }) {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [replyToMessage, setReplyToMessage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);
  const location = useLocation();

  const lastSegment = location.pathname.split("/").pop();
  const isChannelChat = lastSegment.startsWith("C");

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    isChannelChat ? setMessages(channels) : setMessages(dms);
  }, [channels, dms]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePaste = async (e) => {
    const items = Array.from(e.clipboardData.items);
    let imageItem, fileItem, text;
    items.forEach((item) => {
      if (item.type.startsWith("image")) {
        imageItem = item.getAsFile();
      } else if (item.type.startsWith("application/")) {
        fileItem = item.getAsFile();
      } else if (item.type === "text/plain") {
        item.getAsString((str) => {
          text = str;
          console.log("Pasted text:", text);
        });
      }
    });

    if (imageItem) {
      try {
        await handleImageUpload(imageItem);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }

    if (fileItem) {
      try {
        await handleFileUpload(fileItem);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  const handleImageUpload = async (file) => {
    if (!file) return;

    setIsUploading(true);
    setUploadProgress(0);
    const reader = new FileReader();
    reader.onload = async (e) => {
      for (let i = 0; i <= 100; i += 20) {
        setUploadProgress(i);
        await new Promise((resolve) => setTimeout(resolve, 200));
      }

      const newMessage = createMessage({
        content: "",
        imageUrl: e.target.result,
      });

      setMessages((prev) => [...prev, newMessage]);
      setIsUploading(false);
      setUploadProgress(0);
    };

    reader.readAsDataURL(file);
  };

  const handleDrop = async (e) => {
    e.preventDefault();

    const files = Array.from(e.dataTransfer.files);
    const imageFiles = files.filter((file) => file.type.startsWith("image"));

    for (const file of imageFiles) {
      await handleImageUpload(file);
    }
  };

  const handleFileUpload = async (file) => {
    if (!file) return;

    setIsUploading(true);
    setUploadProgress(0);
    const reader = new FileReader();

    reader.onload = async (e) => {
      for (let i = 0; i <= 100; i += 20) {
        setUploadProgress(i);
        await new Promise((resolve) => setTimeout(resolve, 200));
      }
      let newMessage;

      if (file.type.startsWith("image/")) {
        newMessage = createMessage({
          content: "", 
          imageUrl: e.target.result,
        });
      } else if (file.type === "application/pdf") {
        newMessage = createMessage({
          content: `${file.name} (PDF) uploaded.`,
          fileUrl: e.target.result, 
          fileType: file.type,
        });
      } else if (
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
        file.type === "application/msword"
      ) {
        newMessage = createMessage({
          content: `${file.name} (Word Document) uploaded.`,
          fileUrl: e.target.result, 
          fileType: file.type,
        });
      } else {
        newMessage = createMessage({
          content: `${file.name}`,
          fileUrl: e.target.result, 
          fileType: file.type,
        });
      }

      setMessages((prev) => [...prev, newMessage]);
      setIsUploading(false);
      setUploadProgress(0);
    };

    if (file.type.startsWith("image/")) {
      reader.readAsDataURL(file); 
    } else {
      reader.readAsArrayBuffer(file); 
    }
  };

  const createMessage = ({
    content = null,
    imageUrl = null,
    fileUrl = null, 
  }) => {
    return {
      id: Date.now(),
      user: currentUser.name,
      content,
      timestamp: new Date().toLocaleTimeString(),
      reactions: [],
      photo: currentUser.photo,
      isPinned: false,
      imageUrl,
      fileUrl,
      replyTo: replyToMessage
        ? {
            id: replyToMessage.id,
            user: replyToMessage.user,
            content: replyToMessage.content,
          }
        : null,
    };
  };
  

  const sendMessage = () => {
    if (!messageInput.trim() && !selectedImage) return;

    if (editingMessageId) {
      setMessages(
        messages.map((msg) =>
          msg.id === editingMessageId ? { ...msg, content: messageInput } : msg
        )
      );
      setEditingMessageId(null);
    } else {
      const newMessage = createMessage({
        content: messageInput,
        imageUrl: selectedImage,
      });
      setMessages([...messages, newMessage]);
    }

    setMessageInput("");
    setSelectedImage(null);
    setReplyToMessage(null);
    resetTextareaHeight();
  };

  const resetTextareaHeight = () => {
    const textarea = document.getElementById("message-textarea");
    if (textarea) {
      textarea.style.height = "auto";
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const downloadImage = (imageUrl) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const shareImage = async (imageUrl) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Shared Image",
          text: "Check out this image!",
          url: imageUrl,
        });
      } else {
        await navigator.clipboard.writeText(imageUrl);
        alert("Image URL copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div
      className="flex flex-col h-full text-black dark:text-white"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className="p-4 flex justify-between items-center border-b shadow-md">
        <div
          className="flex items-center cursor-pointer"
          onClick={toggleProfileSectionVisibility}
        >
          <Avatar className="w-12 h-12 border border-gray-500 mr-4">
            <AvatarImage src={currentUser.photo} alt="Profile" />
            <AvatarFallback>YR</AvatarFallback>
          </Avatar>
          <div className="text-lg font-bold">{lastSegment}</div>
        </div>
      </div>

      <div className="flex-grow overflow-auto p-4">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            isCurrentUser={message.user === "You"}
            onReply={setReplyToMessage}
            onEdit={(messageId, content) => {
              setEditingMessageId(messageId);
              setMessageInput(content);
            }}
            onPin={(messageId) => {
              setMessages(
                messages.map((msg) =>
                  msg.id === messageId
                    ? { ...msg, isPinned: !msg.isPinned }
                    : msg
                )
              );
            }}
            onReact={(messageId, reaction) => {
              setMessages(
                messages.map((msg) =>
                  msg.id === messageId
                    ? {
                        ...msg,
                        reactions: msg.reactions.some(
                          (r) => r.emoji === reaction
                        )
                          ? msg.reactions.filter((r) => r.emoji !== reaction)
                          : [...msg.reactions, { emoji: reaction, count: 1 }],
                      }
                    : msg
                )
              );
            }}
            onImageClick={(imageUrl) => setImagePreview(imageUrl)}
            isChannelChat={isChannelChat}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {isUploading && (
        <div className="px-4 py-2 bg-blue-50 dark:bg-blue-900">
          <div className="flex items-center gap-2">
            <div className="flex-grow bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
              <div
                className="bg-blue-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
            <span className="text-sm">{uploadProgress}%</span>
          </div>
        </div>
      )}

      <div className="p-4 border-t shadow-md">
        {replyToMessage && (
          <div className="mb-2 flex items-center gap-2 bg-muted p-2 rounded">
            <Reply className="w-4 h-4" />
            <div className="flex-grow">
              <div className="text-sm font-medium">{replyToMessage.user}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                {replyToMessage.content}
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
        )}

        {selectedImage && (
          <div className="mb-2 relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-h-32 rounded-lg"
            />
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-1 right-1"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        )}

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
            accept=""
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFileUpload(file);
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
              <div className="grid grid-cols-6 gap-2 p-2">
                {reactionTypes.map((reaction) => (
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

      <ImagePreviewModal
        isOpen={!!imagePreview}
        onClose={() => setImagePreview(null)}
        imageUrl={imagePreview}
        onDownload={() => downloadImage(imagePreview)}
        onShare={() => shareImage(imagePreview)}
      />
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
  onImageClick,
  isChannelChat,
}) {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);
  const contentRef = useRef(null);
  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setHasOverflow(
        contentRef.current.scrollHeight > contentRef.current.clientHeight
      );
    }
  }, [message.content]);

  const shareMessage = async () => {
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
      setIsShareOpen(false);
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const renderContent = () => {
    return (
      <div className="space-y-2">
        {message.replyTo && (
          <div className="bg-black/10 dark:bg-white/10 rounded p-2 text-sm">
            <div className="text-xs opacity-70">
              Reply to {message.replyTo.user}
            </div>
            <div className="line-clamp-1">{message.replyTo.content}</div>
          </div>
        )}

        {message.imageUrl && (
          <div className="relative group">
            <img
              src={message.imageUrl}
              alt="Shared"
              className="max-w-sm rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => onImageClick(message.imageUrl)}
            />
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                variant="secondary"
                size="sm"
                className="mr-2"
                onClick={() => downloadImage(message.imageUrl)}
              >
                <Download className="w-4 h-4" />
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => shareMessage()}
              >
                <FaShare className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {message.fileUrl && (
          <a
            href={message.fileUrl}
            download
            className="text-blue-500 underline"
          >
            {message.content}
          </a>
        )}

        {message.url && !message.imageUrl && (
          <LinkPreviewCard url={message.url} />
        )}

        <div
          ref={contentRef}
          className={`${
            showFullContent ? "" : "max-h-32"
          } overflow-hidden transition-all duration-200`}
        >
          {message.content}
        </div>

        {hasOverflow && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowFullContent(!showFullContent)}
            className="text-xs"
          >
            {showFullContent ? "Show less" : "Show more"}
          </Button>
        )}
      </div>
    );
  };

  const renderTimestamp = () => {
    const now = new Date();
    const messageDate = new Date(message.timestamp);
    // console.log(messageDate);
    const diffInHours = (now - messageDate) / (1000 * 60 * 60);
    // console.log(diffInHours);
    // console.log(messageDate.toLocaleDateString());

    let formattedTime;
    if (diffInHours < 24) {
      formattedTime = message.timestamp;
    } else if (diffInHours < 48) {
      formattedTime = "Yesterday";
    } else if (isCurrentUser) {
      formattedTime = now.toLocaleTimeString();
    } else {
      formattedTime = `${messageDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })}, ${messageDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })}`;
    }
    // console.log(formattedTime);

    return (
      <span className="text-xs opacity-70">
        {formattedTime}
        {message.edited && " (edited)"}
      </span>
    );
  };

  return (
    <div
      className={`group relative mb-6 flex items-start gap-2 my-8 ${
        isCurrentUser ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {!isCurrentUser && isChannelChat && (
        <Avatar className="w-8 h-8 border border-gray-500 flex-shrink-0">
          <AvatarImage src={message.photo} alt={message.user} />
          {/* <AvatarFallback>{message.user[0]}</AvatarFallback> */}
        </Avatar>
      )}

      <div className="relative max-w-[70%] min-w-[240px]">
        {message.isPinned && (
          <div className="absolute -top-6 left-0 flex items-center text-xs text-muted-foreground">
            <Pin className="w-3 h-3 mr-1" /> Pinned
          </div>
        )}

        <Card
          className={`border-0 ${
            isCurrentUser
              ? "bg-blue-500 text-white dark:bg-blue-700"
              : "bg-gray-200 dark:bg-gray-700"
          } ${
            isCurrentUser
              ? "rounded-t-lg rounded-bl-lg"
              : "rounded-t-lg rounded-br-lg"
          }`}
        >
          <CardContent className="p-3">
            {isChannelChat ? (
              <div className="">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-medium text-sm">
                    {isCurrentUser ? "You" : message.user}
                  </span>
                  <div className="flex flex-end">{renderTimestamp()}</div>
                </div>
                {renderContent()}
              </div>
            ) : (
              <div className="relative flex items-start">
                <div className="flex-1 mb-1">{renderContent()}</div>
                <div className="absolute bottom-0 right-1 text-xs">
                  {renderTimestamp()}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {message.reactions.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2 z-50">
            {message.reactions.map((reaction, index) => (
              <Badge
                key={`${reaction.emoji}-${index}`}
                variant="secondary"
                className="text-xs py-0.5 px-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
                onClick={() => onReact(message.id, reaction.emoji)}
              >
                {reaction.emoji}
              </Badge>
            ))}
          </div>
        )}

        <div className="absolute -bottom-12 z-50 left-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 p-1 rounded-full bg-white dark:bg-gray-800 shadow-lg border">
          {reactionTypes.map((reaction) => (
            <button
              key={reaction.label}
              onClick={() => onReact(message.id, reaction.emoji)}
              className="hover:bg-gray-100 dark:hover:bg-gray-700 p-1.5 rounded-full transition-colors"
              title={reaction.label}
            >
              {reaction.emoji}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <MessageOptions
          message={message}
          onReply={onReply}
          onEdit={onEdit}
          onPin={onPin}
          isCurrentUser={isCurrentUser}
          onShare={shareMessage}
        />
      </div>
    </div>
  );
}

function MessageOptions({
  message,
  onReply,
  onEdit,
  onPin,
  isCurrentUser,
  onShare,
}) {
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
        <DropdownMenuItem onClick={onShare}>
          <FaShare className="mr-2 h-4 w-4" /> Share
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => navigator.clipboard.writeText(message.content)}
        >
          <Copy className="mr-2 h-4 w-4" /> Copy Text
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Chat;
