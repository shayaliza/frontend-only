import { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import ProfileSection from "./ProfileSection";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import img from "../assets/man1.jpg";
import img2 from "../assets/man2.jpg";
import img3 from "../assets/man3.jpg";
import ChatMessage from "./ChatComps/ChatMessages";
import MessageComposer from "./ChatComps/MessageComposer";
import FilePreview from "./ChatComps/FilePreview";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  MessageSquare,
  Phone,
  Video,
  Users,
  Mail,
  MapPin,
  Clock,
  Check,
  PinIcon,
  FileIcon,
  MoreVerticalIcon,
  Search,
  X,
  ChevronDownIcon,
} from "lucide-react";

const ALLOWED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "text/plain",
];

const currentUser = {
  id: 1,
  name: "You",
  photo: img,
};

const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

const DMs = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [profileUserId, setProfileUserId] = useState(null);

  const users = [
    {
      id: "Kunal",
      name: "Kunal Dugar",
      avatar: img2,
      status: "online",
      lastSeen: "Active now",
      timestamp: "Sep 4",
    },
    {
      id: "Techsnap",
      name: "Techsnap",
      avatar: img3,
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
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const timeoutRef = useRef(null);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleClose = () => {
    setIsSearchVisible(false);
    setSearchValue("");
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsProfileOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsProfileOpen(false);
    }, 300);
  };

  const dmListRef = useRef(null);
  const messageSectionRef = useRef(null);
  const profileSectionRef = useRef(null);
  const leftDividerRef = useRef(null);
  const rightDividerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isResizingLeft) {
        const newWidth =
          e.clientX - dmListRef.current.getBoundingClientRect().left;
        if (newWidth > 200 && newWidth < 400) {
          setDmListWidth(newWidth);
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
      document.body.classList.add("selecting-none");
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.classList.remove("selecting-none");
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
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [replyToMessage, setReplyToMessage] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [shouldScrollToBottom, setShouldScrollToBottom] = useState(false);
  const [scrollButton, setScrollButton] = useState(false);

  const fileInputRef = useRef(null);
  const chatContainerRef = useRef(null);
  const messagesEndRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (shouldScrollToBottom) {
      scrollToBottom();
      setShouldScrollToBottom(false);
    }
  }, [messages, shouldScrollToBottom]);

  useEffect(() => {
    return () => {
      selectedFiles.forEach((file) => {
        if (file.preview) URL.revokeObjectURL(file.preview);
        if (file.url) URL.revokeObjectURL(file.url);
      });
    };
  }, [selectedFiles]);

  useEffect(() => {
    return () => {
      messages.forEach((message) => {
        if (message.fileUrl?.startsWith("blob:")) {
          URL.revokeObjectURL(message.fileUrl);
        }
        if (message.imageUrl?.startsWith("blob:")) {
          URL.revokeObjectURL(message.imageUrl);
        }
      });
    };
  }, [messages]);

  const scrollToBottom = () => {
    const container = chatContainerRef.current;
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = chatContainerRef.current;

    const handleScroll = () => {
      if (!container) return;

      const isAtBottom =
        container.scrollHeight - container.scrollTop <=
        container.clientHeight + 100;
      const hasScrollableContent =
        container.scrollHeight > container.clientHeight;

      setScrollButton(hasScrollableContent && !isAtBottom);
    };

    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  const resetTextareaHeight = () => {
    const textarea = document.getElementById("message-textarea");
    if (textarea) {
      textarea.style.height = "auto";
    }
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

  const handleDrop = async (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    await handleFileUpload(files);
  };

  const handleImageUpload = async (file) => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      setIsUploading(true);
      setUploadProgress(0);

      for (let i = 0; i <= 100; i += 20) {
        setUploadProgress(i);
        await new Promise((resolve) => setTimeout(resolve, 200));
      }

      const fileObject = {
        id: Math.random().toString(36).substring(7),
        file: file,
        preview: e.target.result,
        type: file.type,
        name: file.name,
        size: formatFileSize(file.size),
        url: URL.createObjectURL(file),
      };

      setSelectedFiles((prev) => [...prev, fileObject]);
      setIsUploading(false);
      setUploadProgress(0);
    };
  };

  const handleFileSelection = (files) => {
    Array.from(files).forEach((file) => {
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        alert(`File type ${file.type} is not supported`);
        return;
      }

      const fileObject = {
        id: Math.random().toString(36).substring(7),
        file: file,
        type: file.type,
        name: file.name,
        size: formatFileSize(file.size),
        preview: file.type.startsWith("image/")
          ? URL.createObjectURL(file)
          : null,
        blobUrl: URL.createObjectURL(file),
      };

      setSelectedFiles((prev) => [...prev, fileObject]);
    });
  };

  const handleFileUpload = async (files) => {
    if (!files || files.length === 0) return;
    handleFileSelection(files);
  };

  const removePreviewFile = (id) => {
    setSelectedFiles((prev) => {
      const fileToRemove = prev.find((f) => f.id === id);
      if (fileToRemove?.url) {
        URL.revokeObjectURL(fileToRemove.url);
      }
      if (fileToRemove?.preview) {
        URL.revokeObjectURL(fileToRemove.preview);
      }
      return prev.filter((f) => f.id !== id);
    });
  };

  const createMessage = ({
    content = null,
    imageUrl = null,
    fileUrl = null,
    fileName = null,
    fileSize = null,
    fileType = null,
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
      fileName,
      fileSize,
      fileType,
      replyTo: replyToMessage
        ? {
            id: replyToMessage.id,
            user: replyToMessage.user,
            content: replyToMessage.content,
            imageUrl: replyToMessage.imageUrl,
            fileUrl: replyToMessage.fileUrl,
            fileName: replyToMessage.fileName,
            fileType: replyToMessage.fileType,
          }
        : null,
    };
  };

  const sendMessage = () => {
    setShouldScrollToBottom(true);
    if (!messageInput.trim() && selectedFiles.length === 0) return;

    if (editingMessageId) {
      setMessages(
        messages.map((msg) =>
          msg.id === editingMessageId ? { ...msg, content: messageInput } : msg
        )
      );
      setEditingMessageId(null);
    } else {
      selectedFiles.forEach((fileData) => {
        const newMessage = createMessage({
          content: messageInput,
          imageUrl: fileData.type.startsWith("image/")
            ? fileData.preview
            : null,
          fileUrl: fileData.blobUrl,
          fileName: fileData.name,
          fileType: fileData.type,
          fileSize: fileData.size,
          file: fileData.file,
        });
        setMessages((prev) => [...prev, newMessage]);
      });

      if (messageInput.trim() && selectedFiles.length === 0) {
        const newMessage = createMessage({
          content: messageInput,
        });
        setMessages((prev) => [...prev, newMessage]);
      }
    }

    setMessageInput("");
    setSelectedFiles([]);
    setReplyToMessage(null);
    resetTextareaHeight();
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

  const renderFilePreview = () => (
    <div className="p-4 border-t">
      <div className="flex flex-wrap gap-2">
        {selectedFiles.map((file) => (
          <FilePreview key={file.id} file={file} onRemove={removePreviewFile} />
        ))}
      </div>
    </div>
  );

  return (
    <TooltipProvider>
      <div className="flex h-[calc(100vh-56px)] text-gray-800 dark:text-gray-200">
        <div
          className="w-1/4 border-r flex flex-col"
          ref={dmListRef}
          style={{ width: `${dmListWidth}px` }}
        >
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
        <div
          className="flex-1 flex flex-col h-full text-black dark:text-white"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          ref={messageSectionRef}
        >
          {selectedUser ? (
            <>
              <div className="p-4 flex justify-between items-center border-b shadow-md">
                <div className="w-full flex justify-between items-center">
                  <div
                    className="flex items-center cursor-pointer space-x-2 mt-1"
                    onClick={() =>
                      toggleProfileSectionVisibility(selectedUser.id)
                    }
                  >
                    <Popover
                      open={isProfileOpen}
                      onOpenChange={setIsProfileOpen}
                    >
                      <PopoverTrigger asChild>
                        <div
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <Avatar
                            className="w-12 h-12 border border-gray-500 cursor-pointer hover:opacity-90"
                            onClick={toggleProfileSectionVisibility}
                          >
                            <AvatarImage
                              src={selectedUser.avatar}
                              alt="Profile"
                            />
                            <AvatarFallback>
                              {currentUser.name
                                ?.split(" ")
                                .map((n) => n[0])
                                .join("") || "U"}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                      </PopoverTrigger>

                      <PopoverContent
                        className="w-[300px] p-0  text-white shadow-xl"
                        onMouseEnter={() => {
                          if (timeoutRef.current)
                            clearTimeout(timeoutRef.current);
                        }}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="p-4 space-y-2 text-black dark:text-white">
                          <div className="flex items-center gap-2">
                            <Avatar className="w-10 h-10">
                              <AvatarImage
                                src={selectedUser.avatar}
                                alt={selectedUser.name}
                              />
                              <AvatarFallback>
                                {selectedUser.name
                                  ?.split(" ")
                                  .map((n) => n[0])
                                  .join("") || "U"}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <h3 className="font-semibold">
                                  {selectedUser.name}
                                </h3>
                                <div className="w-3.5 h-3.5 bg-gray-800 rounded-full flex items-center justify-center">
                                  <Check className="w-2.5 h-2.5 text-green-500" />
                                </div>
                              </div>
                              <p className="text-xs ">
                                Digital Innovation & Technology
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-around py-2 text-black dark:text-white">
                            <button className="hover:bg-gray-800 p-2 rounded-full transition-colors">
                              <MessageSquare className="w-5 h-5" />
                            </button>
                            <button className="hover:bg-gray-800 p-2 rounded-full transition-colors">
                              <Users className="w-5 h-5" />
                            </button>
                            <button className="hover:bg-gray-800 p-2 rounded-full transition-colors">
                              <Video className="w-5 h-5" />
                            </button>
                            <button className="hover:bg-gray-800 p-2 rounded-full transition-colors">
                              <Phone className="w-5 h-5" />
                            </button>
                          </div>
                        </div>

                        <div className="border-t border-gray-800 p-3 space-y-1.5 text-black dark:text-white">
                          <div className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span>Available • Free all day</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-black dark:text-white">
                            <Clock className="w-3.5 h-3.5" />
                            <span>Work hours: 10:00 AM - 7:00 PM</span>
                          </div>
                        </div>

                        <div className="border-t border-gray-800 p-3 text-black dark:text-white">
                          <h4 className="text-xs font-medium mb-2">Contact</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-blue-400">
                              <Mail className="w-4 h-4" />
                              <a
                                href={`mailto:salma.pattan@non.se.com`}
                                className="text-xs hover:underline"
                                onClick={(e) => e.stopPropagation()}
                              >
                                user.available@gmail.com
                              </a>
                            </div>
                            <div className="flex items-center gap-2 text-blue-400">
                              <Phone className="w-4 h-4" />
                              <a
                                href="tel:+91566757688"
                                className="text-xs hover:underline"
                                onClick={(e) => e.stopPropagation()}
                              >
                                +91 566757688
                              </a>
                            </div>
                            <div className="flex items-center gap-2 text-black dark:text-white">
                              <MapPin className="w-4 h-4" />
                              <span className="text-xs">Indian campus</span>
                            </div>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                    <div className="text-lg font-bold">{selectedUser.name}</div>
                  </div>
                  <div className="flex items-center space-x-4 mt-2">
                    {!isSearchVisible ? (
                      <button onClick={() => setIsSearchVisible(true)}>
                        <Search className="w-5 h-5 mr-1" />
                      </button>
                    ) : (
                      <div className="relative flex items-center">
                        <div className="absolute left-2">
                          <Search className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          value={searchValue}
                          onChange={(e) => setSearchValue(e.target.value)}
                          placeholder="Search..."
                          className="w-48 pl-8 pr-8 py-2 text-sm border rounded-lg focus:outline-none bg-transparent"
                          autoFocus
                        />
                        <button
                          onClick={handleClose}
                          className="absolute right-2 p-1 rounded-full"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}

                    <button className="p-1">
                      <PinIcon className="w-5 h-5" />
                    </button>

                    <button className="p-1">
                      <FileIcon className="w-5 h-5" />
                    </button>

                    <button className="p-1">
                      <MoreVerticalIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="relative flex-grow overflow-y-auto overflow-x-hidden px-6 py-10"
                ref={chatContainerRef}
              >
                {messages.map((message, index) => (
                  <ChatMessage
                    key={message.id}
                    message={message}
                    isCurrentUser={message.user === "You"}
                    previousMessage={index > 0 ? messages[index - 1] : null}
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
                                  ? msg.reactions.filter(
                                      (r) => r.emoji !== reaction
                                    )
                                  : [
                                      ...msg.reactions,
                                      { emoji: reaction, count: 1 },
                                    ],
                              }
                            : msg
                        )
                      );
                    }}
                    onImageClick={(imageUrl) => setImagePreview(imageUrl)}
                  />
                ))}
                {scrollButton && (
                  <div
                    className="fixed bottom-32 right-10 w-10 h-10 bg-gray-300 dark:bg-gray-500 rounded-full shadow-md flex items-center justify-center cursor-pointer"
                    onClick={() => setShouldScrollToBottom(true)}
                  >
                    <ChevronDownIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              {selectedFiles.length > 0 && renderFilePreview()}
              <MessageComposer
                messageInput={messageInput}
                setMessageInput={setMessageInput}
                handleKeyDown={handleKeyDown}
                handlePaste={handlePaste}
                editingMessageId={editingMessageId}
                replyToMessage={replyToMessage}
                setReplyToMessage={setReplyToMessage}
                showEmojiPicker={showEmojiPicker}
                setShowEmojiPicker={setShowEmojiPicker}
                fileInputRef={fileInputRef}
                handleFileUpload={handleFileUpload}
                handleImageUpload={handleImageUpload}
                sendMessage={sendMessage}
              />
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
