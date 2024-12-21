import React, { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import ChatHeader from "./ChatComp/Header";
import MessageInput from "./ChatComp/MessageInput";
import Message from "./ChatComp/Message";
import ReactionMenu from "./ChatComp/ReactionMenu";
import ShareModal from "./ChatComp/Share";
import ReplyPreview from "./ChatComp/ReplyPreview";
import ScrollToBottomButton from "./ChatComp/Scroll";
import { useLongPress } from "./Hooks/useLongPress";
import img1 from "../../assets/man1.jpg";
import img2 from "../../assets/man2.jpg";
import img3 from "../../assets/man3.jpg";
import img4 from "../../assets/women1.jpg";

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
  const [replyToMessage, setReplyToMessage] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [shouldScrollToBottom, setShouldScrollToBottom] = useState(false);
  const [messageReactions, setMessageReactions] = useState({});
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [scrollButton, setScrollButton] = useState(false);

  const reactionMenuRef = useRef(null);
  const textareaRef = useRef(null);
  const chatContainerRef = useRef(null);
  const messagesEndRef = useRef(null);

  const handleAddReaction = (reaction) => {
    if (selectedMessage) {
      setMessageReactions((prev) => {
        const currentReactions = prev[selectedMessage.id] || [];
        const isReactionExists = currentReactions.includes(reaction);
        const updatedReactions = isReactionExists
          ? currentReactions.filter((r) => r !== reaction)
          : [...currentReactions, reaction];
        return {
          ...prev,
          [selectedMessage.id]: updatedReactions,
        };
      });

      setIsReactionOpen(false);
    }
  };

  useEffect(() => {
    if (shouldScrollToBottom) {
      scrollToEnd();
      setShouldScrollToBottom(false);
    }
  }, [messages, shouldScrollToBottom]);

  const scrollToEnd = () => {
    const container = chatContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

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


  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMessageObj = {
        id: messages.length + 1,
        content: newMessage,
        sender: "You",
        timestamp: new Date().toISOString(),
        replyTo: replyToMessage
          ? {
              id: replyToMessage.id,
              sender: replyToMessage.sender,
              content: replyToMessage.content,
              imageUrl: replyToMessage.imageUrl,
              timestamp: replyToMessage.timestamp,
            }
          : null,
      };

      setMessages([...messages, newMessageObj]);
      setNewMessage("");
      setIsActive(false);
      setReplyToMessage(null);
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

  

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView();
  };

  useEffect(() => {
    if ("virtualKeyboard" in navigator) {
      navigator.virtualKeyboard.overlaysContent = true;

      const handleGeometryChange = (event) => {
        const { height } = event.target.boundingRect;
        setKeyboardHeight(height || 0);
      };

      navigator.virtualKeyboard.addEventListener(
        "geometrychange",
        handleGeometryChange
      );

      return () => {
        navigator.virtualKeyboard.removeEventListener(
          "geometrychange",
          handleGeometryChange
        );
      };
    }
  }, []);

  // useEffect(() => {
  //   scrollToBottom();
  // }, [messages]);

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

  
  const [swipedMessageId, setSwipedMessageId] = useState(null);


  const handleInputChange = (e) => {
    const value = e.target.value;
    setNewMessage(value);
    setIsActive(value.trim() !== "");
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleReplyToMessage = useCallback((message) => {
    setReplyToMessage({
      id: message.id,
      sender: message.sender,
      content: message.content,
      imageUrl: message.imageUrl || null,
      timestamp: message.timestamp,
    });

    setIsReactionOpen(false);

    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const handleInputFocus = () => {
    setIsActive(newMessage.trim() !== "");
  };

  const handleInputBlur = () => {
    setIsActive(newMessage.trim() !== "");
  };

  
  
  
  return (
    <>
      <div className={`flex flex-col text-gray-800 dark:text-gray-200 ${
        isReactionOpen ? "overflow-hidden" : "overflow-y-auto"
      } min-h-screen pb-20 pt-4`}>
        <ChatHeader 
          type={type}
          chatInfo={chatInfo}
          handleNavigationBack={handleNavigationBack}
          navigate={navigate}
        />

        <div className={`flex-grow ${
          isReactionOpen ? "overflow-hidden" : "overflow-y-auto"
        } px-4 pt-14 pb-2 mt-4`}>
          <div className="relative space-y-1 overflow-x-auto" ref={chatContainerRef}>
            {messages.map((message) => (
              <Message
                key={message.id}
                message={message}
                handleReplyToMessage={handleReplyToMessage}
                messageReactions={messageReactions}
                setIsShareOpen={setIsShareOpen}
                handleToggleReactions={handleToggleReactions}
                longPressEvent={longPressEvent}
              />
            ))}
            <ScrollToBottomButton 
              visible={scrollButton}
              onClick={() => setShouldScrollToBottom(true)}
            />
          </div>
          <div ref={messagesEndRef} />
        </div>

        <ReplyPreview 
          replyToMessage={replyToMessage}
          setReplyToMessage={setReplyToMessage}
        />

        <MessageInput
          newMessage={newMessage}
          handleInputChange={handleInputChange}
          handleSendMessage={handleSendMessage}
          isActive={isActive}
          textareaRef={textareaRef}
          handleInputFocus={handleInputFocus}
          handleInputBlur={handleInputBlur}
          keyboardHeight={keyboardHeight}
          replyToMessage={replyToMessage}
          setReplyToMessage={setReplyToMessage}
        />
      </div>
    </>
  );

}

export default Chat;
