import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { FaRegSmile, FaThumbsUp, FaHeart, FaEdit, FaTrash, FaTimes,FaChevronUp, FaChevronDown } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";
import { HeartIcon } from "@heroicons/react/outline";
import img from "../assets/man1.jpg";
import { useTheme } from "../../DarkMode/ThemeProvider";

const currentUser = {
  id: 1,
  name: "Yaswanth",
  photo: img,
};

const initialChannelMessages = [
  { id: 1, user: "Alice", content: "Hey everyone!", timestamp: "10:00 AM", reactions: [] },
  { id: 2, user: "Yaswanth", content: "Hi Alice, how are you?", timestamp: "10:05 AM", reactions: [] },
  { id: 3, user: "Bob", content: "Hello team!", timestamp: "10:10 AM", reactions: [] },
];

const initialDMMessages = [
  { id: 1, user: "John", content: "Hey, how's it going?", timestamp: "10:15 AM", reactions: [] },
  { id: 2, user: "Yaswanth", content: "I'm good, thanks! How about you?", timestamp: "10:20 AM", reactions: [] },
];

function ChatInterface({toggleProfileSectionVisibility}) {
  const location = useLocation();
  const [messageInput, setMessageInput] = useState("");
  const [channelMessages, setChannelMessages] = useState(initialChannelMessages);
  const [dmMessages, setDMMessages] = useState(initialDMMessages);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [replyToMessage, setReplyToMessage] = useState(null);

  const isChannelChat = location.pathname.includes("/channels/");
  const chatName = location.pathname.split('/').pop().replace(/_/g, ' ');
  const {theme} = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const messages = isChannelChat ? channelMessages : dmMessages;
  const setMessages = isChannelChat ? setChannelMessages : setDMMessages;

  useEffect(() => {
    if (replyToMessage) {
      const foundMessage = messages.find(msg => msg.id === replyToMessage.id);
      if (foundMessage) {
        setReplyToMessage(foundMessage);
      } else {
        setReplyToMessage(null);
      }
    }
  }, [messages, replyToMessage]);

  const sendMessage = () => {
    if (!messageInput.trim()) return;
  
    if (editingMessageId) {
      const updatedMessages = messages.map((msg) =>
        msg.id === editingMessageId ? { ...msg, content: messageInput } : msg
      );
      setMessages(updatedMessages);
      setEditingMessageId(null);
    } else {
      const newMessage = {
        id: messages.length + 1,
        user: currentUser.name,
        content: messageInput,
        timestamp: new Date().toLocaleTimeString(),
        reactions: [],
      };
      setMessages([...messages, newMessage]);
    }
  
    // Reset the input and textarea height
    setMessageInput("");
    const textarea = document.getElementById("message-textarea");
    if (textarea) {
      textarea.style.height = "auto"; // Reset the height to its original value
    }
  
    setReplyToMessage(null);
    setShowEmojiPicker(false);
  };
  

  const addReaction = (messageId, reaction) => {
    const updatedMessages = messages.map((msg) =>
      msg.id === messageId ? { ...msg, reactions: [...msg.reactions, reaction] } : msg
    );
    setMessages(updatedMessages);
  };

  const startEditing = (messageId, content) => {
    setReplyToMessage(null);
    setEditingMessageId(messageId);
    setMessageInput(content);
  };

  const cancelEditing = () => {
    setEditingMessageId(null);
    setMessageInput("");
  };

  const replyTo = (message) => {
    setReplyToMessage(message);
    setEditingMessageId(null);
  };

  return (
    <div className={`flex h-[calc(100vh-56px)] ${theme == "dark" ? "bg-black" : "" }`}>
      <div className="flex flex-col w-full h-full text-gray-700 dark:text-gray-300">
        <div className="header p-4 flex justify-between items-center border-b shadow-md">
          <div className="flex items-center mx-4 cursor-pointer" onClick={toggleProfileSectionVisibility}>
            <img
              src={currentUser.photo}
              alt="Profile"
              className="w-12 h-12 flex-shrink-0 rounded-full mr-4"
            />
            <div className="text-lg font-bold">
              {isChannelChat ? chatName : chatName}
            </div>
          </div>
        </div>

        <div className={`flex-grow overflow-y-auto p-4 space-y-4 ${theme == "light" ? "bg-gray-100" : ""}`}>
          {messages.map((message) => (
            <div 
            key={message.id} 
            className={`relative group py-2 px-4 rounded-t-2xl max-w-[40%] ${
              message.user === currentUser.name
                ? "ml-auto rounded-bl-2xl bg-fuchsia-500 text-black dark:text-gray-300 dark:bg-gray-500"
                : "mr-auto rounded-br-2xl bg-white text-black dark:text-gray-300 dark:bg-gray-700"
            }`}
          >          
              {isChannelChat && (
                <div className="text-sm">
                  {message.user === currentUser.name ? "You" : message.user}
                  <span className="text-xs ml-2">{message.timestamp}</span>
                </div>
              )}
              <div className="mt-1">{message.content}</div>

              <div className="flex space-x-2 mt-2">
                {message.reactions.map((reaction, index) => (
                  <span key={index}>
                    {reaction}
                  </span>
                ))}
              </div>

              <div className="absolute top-0 right-0 hidden group-hover:flex group-hover:items-center space-x-2 p-2">
                <button
                  onClick={() => addReaction(message.id, <FaThumbsUp className="w-4 h-4" />)}
                >
                  <FaThumbsUp className="w-4 h-4" />
                </button>
                <button
                  onClick={() => addReaction(message.id, <HeartIcon className="w-4 h-4" />)}
                >
                  <FaHeart className="w-4 h-4" />
                </button>
                <button
                  onClick={() => replyTo(message)}
                >
                  <MdOutlineMessage className="w-4 h-4" />
                </button>
                {message.user === currentUser.name && (
                  <>
                    <button
                      onClick={() => startEditing(message.id, message.content)}
                    >
                      <FaEdit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() =>
                        setMessages(messages.filter((msg) => msg.id !== message.id))
                      }
                    >
                      <FaTrash className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {replyToMessage && (
          <div className="flex space-x-4 rounded-lg mx-4 border overflow-hidden">
          <div className="w-2 h-full rounded-l-lg bg-green-600"></div>
          <div className="flex flex-col w-full py-2 overflow-hidden">
            <div className="flex justify-between items-start w-full overflow-y-auto">
              <div className="flex flex-col space-y-2  flex-1 mr-4 text-gray-700 dark:text-gray-300 ">
                <strong>{replyToMessage.user}</strong>
                <span className={`${isExpanded ? '' : ''}`}>
                  {replyToMessage.content}
                </span>
              </div>
              <button
                onClick={() => setReplyToMessage(null)}
                className="relative right-2 top-1/3 w-6 h-6 rounded-full flex-shrink-0 flex justify-center items-center text-gray-700 dark:text-gray-300 border border-gray-200 hover:bg-red-600 hover:text-white"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        )}

        <div className="message-input px-4 py-4">
          <div className="flex items-center space-x-2 border rounded-lg pr-2 shadow-lg bg-gray-200 dark:bg-black text-gray-700 dark:text-gray-300 mb-2">
            <textarea
              id="message-textarea"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              className="w-full p-2 bg-transparent rounded-lg focus:outline-none resize-none overflow-y-auto"
              placeholder={editingMessageId ? "Edit your message..." : "Type your message..."}
              style={{ minHeight: "0px", maxHeight: "300px", overflowY: "auto" }}
              onInput={(e) => {
                e.target.style.height = "auto";
                const newHeight = Math.min(e.target.scrollHeight, 400);
                e.target.style.height = `${newHeight}px`;
              }}
            />

            <button
              onClick={sendMessage}
              className="px-4 py-2 rounded-lg bg-green-600"
            >
              <FiSend />
            </button>
            
            <button
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              className="px-4 py-2 rounded-lg"
            >
              <FaRegSmile />
            </button>
            {showEmojiPicker && (
              <div className="absolute bottom-16 right-2 p-4 border rounded-lg">
                <button onClick={() => setMessageInput(messageInput + "👍")}>
                  👍
                </button>
                <button onClick={() => setMessageInput(messageInput + "❤️")}>
                  ❤️
                </button>
              </div>
            )}
            {editingMessageId && (
              <button
                onClick={cancelEditing}
                className="px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;
