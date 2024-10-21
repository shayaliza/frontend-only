import React, { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  ArrowLeftIcon,
  CameraIcon,
  MicrophoneIcon,
  EmojiHappyIcon,
  PlusIcon,
  DocumentTextIcon,
  VolumeUpIcon,
  ReplyIcon,
  ClipboardCopyIcon,
  SaveIcon,
  FastForwardIcon,
  ShareIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { FaPlus, FaPaperPlane } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
// import { FiSend } from "react-icons/fi";
import { FaShare } from "react-icons/fa6";
import { MdSend } from "react-icons/md";
import img1 from "../../assets/man1.jpg";
import img2 from "../../assets/man2.jpg";
import img3 from "../../assets/man3.jpg";
import img4 from "../../assets/women1.jpg";
import { useTheme } from "../../../DarkMode/ThemeProvider";

function useLongPress(callback = () => {}, ms = 300) {
  const [startLongPress, setStartLongPress] = useState(false);
  const timerRef = useRef();
  const isLongPress = useRef(false);

  const start = useCallback(() => {
    setStartLongPress(true);
    timerRef.current = setTimeout(() => {
      isLongPress.current = true;
      callback();
    }, ms);
  }, [callback, ms]);

  const stop = useCallback(() => {
    setStartLongPress(false);
    clearTimeout(timerRef.current);
    if (isLongPress.current) {
      isLongPress.current = false;
    }
  }, []);

  return {
    onMouseDown: start,
    onMouseUp: stop,
    onMouseLeave: stop,
    onTouchStart: start,
    onTouchEnd: stop,
  };
}
const contacts = [
  {
    id: 1,
    name: "Vignesh",
    src: img1,
    isActive: true,
    lastMessage: "this message is redirected from user",
    lastSeen: "1m",
  },
  {
    id: 2,
    name: "John",
    src: img2,
    isActive: false,
    lastMessage: "Hey, how are you?",
    lastSeen: "5m",
  },
  {
    id: 3,
    name: "Alice",
    src: img3,
    isActive: true,
    lastMessage: "Can we reschedule our meeting?",
    lastSeen: "10m",
  },
  {
    id: 4,
    name: "Bob",
    src: img4,
    isActive: true,
    lastMessage: "Just sent you the files.",
    lastSeen: "15m",
  },
  {
    id: 5,
    name: "Charlie",
    src: img1,
    isActive: false,
    lastMessage: "Thanks for your help!",
    lastSeen: "20m",
  },
  {
    id: 6,
    name: "David",
    src: img2,
    isActive: true,
    lastMessage: "Let's catch up soon.",
    lastSeen: "25m",
  },
  {
    id: 7,
    name: "Eva",
    src: img1,
    isActive: true,
    lastMessage: "Did you get my email?",
    lastSeen: "30m",
  },
  {
    id: 8,
    name: "Frank",
    src: img3,
    isActive: false,
    lastMessage: "Looking forward to our next project.",
    lastSeen: "35m",
  },
  {
    id: 9,
    name: "Grace",
    src: img1,
    isActive: true,
    lastMessage: "Great job on the presentation!",
    lastSeen: "40m",
  },
  {
    id: 10,
    name: "Hank",
    src: img2,
    isActive: false,
    lastMessage: "I'm running late, see you soon.",
    lastSeen: "45m",
  },
  {
    id: 11,
    name: "Ivy",
    src: img4,
    isActive: true,
    lastMessage: "Let me know if you need anything.",
    lastSeen: "50m",
  },
  {
    id: 12,
    name: "Jack",
    src: img2,
    isActive: true,
    lastMessage: "Have a nice weekend!",
    lastSeen: "55m",
  },
  {
    id: 13,
    name: "Kara",
    src: img1,
    isActive: false,
    lastMessage: "Can you review this document?",
    lastSeen: "1h",
  },
  {
    id: 14,
    name: "Leo",
    src: img4,
    isActive: true,
    lastMessage: "I'll call you later.",
    lastSeen: "1h",
  },
  {
    id: 15,
    name: "Mona",
    src: img3,
    isActive: true,
    lastMessage: "Don't forget the meeting at 3 PM.",
    lastSeen: "1h 5m",
  },
  {
    id: 16,
    name: "Nina",
    src: img2,
    isActive: false,
    lastMessage: "Good luck with your exam!",
    lastSeen: "1h 10m",
  },
  {
    id: 17,
    name: "Oscar",
    src: img4,
    isActive: true,
    lastMessage: "Thanks for the update.",
    lastSeen: "1h 15m",
  },
  {
    id: 18,
    name: "Paul",
    src: img2,
    isActive: true,
    lastMessage: "Can you send me the details?",
    lastSeen: "1h 20m",
  },
  {
    id: 19,
    name: "Quinn",
    src: img3,
    isActive: false,
    lastMessage: "Let's schedule a call.",
    lastSeen: "1h 25m",
  },
  {
    id: 20,
    name: "Rita",
    src: img2,
    isActive: true,
    lastMessage: "I'll get back to you soon.",
    lastSeen: "1h 30m",
  },
];

const dummyMessages = [
  {
    sender: "Saketh",
    content: "Hello everyone!",
    timestamp: "2024-08-17T10:00:00Z",
  },
  {
    sender: "Yaswanth",
    content: "Hi there!",
    timestamp: "2024-08-17T10:01:00Z",
  },
  {
    sender: "You",
    content: "Good morning!",
    timestamp: "2024-08-17T10:02:00Z",
  },
  {
    sender: "Tanvi",
    content: "How's everyone doing?",
    timestamp: "2024-08-17T10:03:00Z",
  },
  {
    sender: "Saketh",
    content: "Check out this cool website: https://www.example.com",
    timestamp: "2024-08-17T10:05:00Z",
  },
  {
    sender: "Yaswanth",
    content: "Here's a picture of my cat!",
    timestamp: "2024-08-17T10:06:00Z",
    imageUrl:
      "https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg",
  },
  {
    sender: "You",
    content:
      "This is a really long message that just keeps going and going. I wanted to share all of my thoughts on this topic, so I decided to write a longer message to make sure everything is covered. What do you guys think about this idea?",
    timestamp: "2024-08-17T10:07:00Z",
  },
  {
    sender: "Tanvi",
    content: "Sounds good!",
    timestamp: "2024-08-17T10:08:00Z",
  },
  {
    sender: "Saketh",
    content:
      "Here's a quick update on the project: We're almost done with the first phase, and we'll be moving on to the next steps soon. I'll keep you all posted on any further developments. Thanks for your hard work!",
    timestamp: "2024-08-17T10:09:00Z",
  },
  { sender: "Yaswanth", content: "Got it!", timestamp: "2024-08-17T10:10:00Z" },
  {
    sender: "You",
    content: "Here's an interesting article I found:",
    timestamp: "2024-08-17T10:11:00Z",
    url: "https://www.technews.com/insights",
  },
  {
    sender: "Tanvi",
    content: "Look at this amazing sunset I captured yesterday!",
    timestamp: "2024-08-17T10:12:00Z",
    imageUrl: "https://example.com/sunset.jpg",
  },
  {
    sender: "Saketh",
    content: "Can anyone share the meeting notes?",
    timestamp: "2024-08-17T10:13:00Z",
  },
  {
    sender: "Yaswanth",
    content: "Sure, I'll send them over in a bit.",
    timestamp: "2024-08-17T10:14:00Z",
  },
  {
    sender: "You",
    content: "Thanks, Yaswanth!",
    timestamp: "2024-08-17T10:15:00Z",
  },
  {
    sender: "Tanvi",
    content:
      "Here's a quick recap of today's discussion: We covered the project's progress, upcoming tasks, and assigned responsibilities. We'll meet again next week to review the next steps and ensure we're on track.",
    timestamp: "2024-08-17T10:16:00Z",
  },
  {
    sender: "Saketh",
    content: "I found this really helpful tutorial on React. Check it out",
    timestamp: "2024-08-17T10:17:00Z",
    url: "https://react-tutorial.com",
  },
  {
    sender: "Yaswanth",
    content: "Here's the file you requested.",
    timestamp: "2024-08-17T10:18:00Z",
    imageUrl: "https://example.com/file.png",
  },
  {
    sender: "You",
    content: "Awesome, thanks!",
    timestamp: "2024-08-17T10:19:00Z",
  },
];

function Chat() {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [chatInfo, setChatInfo] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isReactionOpen, setIsReactionOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const reactionMenuRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  useEffect(() => {
    const fetchChatData = async () => {
      if (type === "channel") {
        setChatInfo({
          name: `${id}`,
          memberCount: Math.floor(Math.random() * 100) + 1,
        });
      } else if (type === "dm") {
        const { img, name } = location.state || {};
        setChatInfo({
          name: name || `${id}`,
          img: img || "https://via.placeholder.com/50",
        });
      }
      setMessages(
        dummyMessages.map((message, index) => ({
          id: index,
          ...message,
        }))
      );
    };

    fetchChatData();
  }, [type, id, location.state]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        reactionMenuRef.current &&
        !reactionMenuRef.current.contains(event.target)
      ) {
        setIsReactionOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavigationBack = () => {
    navigate(type === "channel" ? "/managesnap/channels" : "/managesnap/dms");
  };

  const textareaRef = useRef(null);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length,
          content: newMessage,
          sender: "You",
          timestamp: new Date().toISOString(),
        },
      ]);
      setNewMessage("");
      setIsActive(false);
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };
  const handleToggleReactions = useCallback((message) => {
    setSelectedMessage(message);
    setIsReactionOpen(true);
  }, []);

  const longPressEvent = useLongPress(
    (message) => handleToggleReactions(message),
    500
  );

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        reactionMenuRef.current &&
        !reactionMenuRef.current.contains(event.target)
      ) {
        setIsReactionOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setNewMessage(value);
    setIsActive(value.trim() !== "");
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleInputFocus = () => {
    setIsActive(newMessage.trim() !== "");
  };

  const handleInputBlur = () => {
    setIsActive(newMessage.trim() !== "");
  };

  const {theme} = useTheme();

  return (
    <>
      <div
  className={`flex flex-col ${isReactionOpen ? "overflow-hidden" : "overflow-auto"} min-h-screen pb-20 pt-4`}
>
  <div className="border-b fixed top-0 h-16 left-0 right-0 z-50">
    <div className="p-4 flex justify-between items-center bg-background border-b border-gray-500">
      <div className="flex items-center">
        <div className="mr-2 cursor-pointer" onClick={handleNavigationBack}>
          <ArrowLeftIcon className="w-6 h-6 transition" />
        </div>
        {type === "channel" ? (
          <span className="font-bold text-xl">
            #{chatInfo?.name}
          </span>
        ) : (
          <div className="flex items-center space-x-2">
            <img
              onClick={() => navigate(`/profile/${id}`, {
                state: {
                  img: chatInfo.img,
                  name: chatInfo.name
                },
              })}
              src={chatInfo?.img}
              alt=""
              className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-600"
            />
            <span className="font-bold text-xl">{chatInfo?.name}</span>
          </div>
        )}
      </div>
      <div className="flex space-x-4 items-center">
        <SearchIcon className="w-6 h-6 hover:text-gray-400 transition" />
        <DocumentTextIcon className="w-6 h-6 hover:text-gray-400 transition" />
        <VolumeUpIcon className="w-6 h-6 hover:text-gray-400 transition" />
      </div>
    </div>
  </div>

  <div className={`flex-grow ${isReactionOpen ? "overflow-hidden" : "overflow-auto"} px-4 pt-12 pb-2 mt-4`}>
    <div className="space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`relative flex items-start space-x-2 ${type === "dm" && message.sender === "You" ? "justify-end" : ""}`}
        >
          {type === "channel" && (
            <div className="flex-none w-10 h-10 rounded-full overflow-hidden">
              <img
                src="https://via.placeholder.com/50"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className={`flex flex-col relative ${type === "dm" && message.sender === "You" ? "text-left" : ""} rounded-lg text-black`}>
            {type === "channel" && (
              <div className={`font-bold bg-gray-400`}>
                {message.sender}{" "}
                <span className="text-xs">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </span>
              </div>
            )}

            {message.imageUrl && (
              <div className="flex items-center mb-4">
                <div className="relative rounded-lg overflow-hidden bg-gray-400 border  border-gray-300 max-w-52 flex-grow">
                  <img
                    src={message.imageUrl}
                    alt="Sent image"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div
                  onClick={() => setIsShareOpen(true)}
                  className="p-2 cursor-pointer rounded-full ml-4 bg-gray-400"
                >
                  <FaShare />
                </div>
              </div>
            )}

            {message.url && !message.imageUrl && (
              <div className="relative rounded-lg overflow-hidden bg-gray-400 border border-gray-300 p-2 max-w-max text-blue-600">
                <a
                  href={message.url}
                >
                  {message.url}
                </a>
              </div>
            )}

            {!message.imageUrl && !message.url && (
              <div
                {...longPressEvent}
                className={`message-content p-2 rounded-lg relative whitespace-pre-wrap break-words max-w-xs bg-gray-400 ${
                  type === "dm" && message.sender === "You" ? "" : ""
                }`}
                style={{ userSelect: "none" }}
              >
                {message.content}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
    <div ref={messagesEndRef} />
  </div>

  <form
    onSubmit={(e) => {
      e.preventDefault();
      handleSendMessage();
    }}
    className="flex items-center py-3 fixed bottom-0 left-0 right-0 w-full border-t border-gray-300 bg-background"
  >
    <button
      type="button"
      className="p-2 rounded-full hover:bg-gray-200 transition duration-150 ease-in-out"
    >
      <PlusIcon className="w-5 h-5 hover:text-gray-900" />
    </button>

    <div className="rounded-lg flex items-center flex-grow">
      <textarea
        ref={textareaRef}
        id="message-textarea"
        className="flex-grow p-2 outline-none rounded-sm text-sm  border border-gray-500 resize-none overflow-y-auto"
        placeholder="Type a message"
        value={newMessage}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        style={{
          minHeight: "1px",
          maxHeight: "150px",
          overflowY: "auto",
        }}
        onInput={(e) => {
          e.target.style.height = "auto";
          const newHeight = Math.min(e.target.scrollHeight, 150);
          e.target.style.height = `${newHeight}px`;
        }}
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
</div>


      {isReactionOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
          <div
            className="fixed left-[50%] top-[100%] h-full z-50 w-full  translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-gray-700 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-slate-800 dark:bg-slate-950"
            ref={reactionMenuRef}
          >
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1/5 h-2 bg-indigo-200 rounded-lg shadow-lg"></div>
            <div className="flex justify-around space-x-4 py-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 hover:bg-green-400 transition-transform duration-300 cursor-pointer text-2xl text-white transform hover:scale-110 shadow-md">
                👍
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-500 hover:bg-pink-400 transition-transform duration-300 cursor-pointer text-2xl text-white transform hover:scale-110 shadow-md">
                ❤️
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-transform duration-300 cursor-pointer text-2xl text-white transform hover:scale-110 shadow-md">
                😄
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-400 transition-transform duration-300 cursor-pointer text-2xl text-white transform hover:scale-110 shadow-md">
                😮
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-transform duration-300 cursor-pointer text-2xl text-white transform hover:scale-110 shadow-md">
                <FaPlus />
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <button className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-150 ease-in-out shadow-lg">
                <ClipboardCopyIcon className="w-6 h-6 text-gray-400" />
                <span className="text-gray-200 text-sm">Copy</span>
              </button>
              <button className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-150 ease-in-out shadow-lg">
                <ReplyIcon className="w-6 h-6 text-gray-400" />
                <span className="text-gray-200 text-sm">Reply</span>
              </button>
              <button className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-150 ease-in-out shadow-lg">
                <FastForwardIcon className="w-6 h-6 text-gray-400" />
                <span className="text-gray-200 text-sm">Forward</span>
              </button>
              <button className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-150 ease-in-out shadow-lg">
                <SaveIcon className="w-6 h-6 text-gray-400" />
                <span className="text-gray-200 text-sm">Save</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {isShareOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
          <div
            className={`fixed w-full h-full gap-4 border border-slate-700 bg-gray-100 p-6 shadow-lg duration-200 sm:rounded-lg dark:bg-gray-100 overflow-auto`}
          >
            <button
              className="absolute top-0 right-0 w-12 h-12 rounded-full hover:bg-gray-300 flex items-center justify-center transition duration-300 mt-2"
              onClick={() => setIsShareOpen(false)}
            >
              <FaTimes />
            </button>
            <div className="grid grid-cols-3 gap-2">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  className="flex flex-col items-center p-4"
                >
                  <div className="relative">
                    <img
                      src={contact.src}
                      alt={contact.name}
                      className="w-16 h-16 object-cover rounded-full border border-gray-700"
                    />
                    <span
                      className={`absolute bottom-0 right-2 w-3 h-3 rounded-full ${
                        contact.isActive ? "bg-green-500" : "bg-red-600"
                      }`}
                    />
                  </div>
                  <span className="text-xs mt-2 text-center">
                    {contact.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Chat;
