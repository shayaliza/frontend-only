import { X } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import img1 from "../../assets/man1.jpg"
import img2 from "../../assets/man2.jpg"
import img3 from "../../assets/man3.jpg"

const ForwardMessage = ({ message, isOpen, onClose }) => {

  const [searchQuery, setSearchQuery] = useState("");

  const [filteredChats, setFilteredChats] = useState([]);

  const [selectedChats, setSelectedChats] = useState([]);

  const [isFocused, setIsFocused] = useState(false);

  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  const dummyChats = [
    { photo: img1, user: "Vignesh Reddy" },
    { photo: img2, user: "Mahesh Reddy" },
    { photo: img3, user: "Rajesh Reddy" },
    { photo: img1, user: "Siddharth Reddy" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        inputRef.current && 
        !inputRef.current.contains(event.target)
      ) {
        setIsFocused(false);
        setFilteredChats([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setIsFocused(true);

    if (query.trim() === "") {
      setFilteredChats(dummyChats);
    } else {
      const results = dummyChats.filter((chat) =>
        chat.user.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredChats(results);
    }
  };

  const handleSelectChat = (chat) => {
    const isAlreadySelected = selectedChats.some((selected) => selected.user === chat.user);
    if (!isAlreadySelected) {
      const newSelectedChats = [...selectedChats, chat];
      setSelectedChats(newSelectedChats);
    }
    setIsFocused(false);
    setSearchQuery(""); 
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleRemoveChat = (user) => {
    const updatedChats = selectedChats.filter((chat) => chat.user !== user);
    setSelectedChats(updatedChats);
  };

  const handleForward = () => {
    console.log("Forwarding to:", selectedChats);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/10 dark:bg-black/20 backdrop-blur-sm">
          <div className="w-full max-w-md mx-auto p-4 bg-white/80 dark:bg-gray-900/80 rounded-lg shadow-lg border">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">
                Forward this private message
              </h2>
              <button className="text-gray-400" onClick={onClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                placeholder="Add by name or channel"
                value={searchQuery}
                onChange={handleSearch}
                onFocus={() => {
                  setIsFocused(true);
                  setFilteredChats(dummyChats);
                }}
                className="w-full px-3 py-2 mb-4 text-sm bg-transparent rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {(isFocused && filteredChats.length > 0) && (
                <div 
                  ref={dropdownRef}
                  className="absolute z-10 w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-300 rounded shadow-md mt-1"
                >
                  {filteredChats.map((chat) => (
                    <div
                      key={chat.user}
                      onMouseDown={(e) => {
                        e.preventDefault(); 
                        handleSelectChat(chat);
                      }}
                      className="flex items-center px-3 py-2 hover:bg-gray-200 dark:hover:bg-zinc-700 cursor-pointer"
                    >
                      <img
                        src={chat.photo}
                        alt={chat.user}
                        className="h-6 w-6 rounded-full mr-3"
                      />
                      <span>{chat.user}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {selectedChats.map((chat) => (
                <div
                  key={chat.user}
                  className="flex items-center px-3 py-2 rounded-full text-sm bg-gray-200 dark:bg-gray-700"
                >
                  <img
                    src={chat.photo}
                    alt={chat.user}
                    className="h-6 w-6 rounded-full mr-3"
                  />
                  <span>{chat.user}</span>
                  <button
                    onClick={() => handleRemoveChat(chat.user)}
                    className="ml-2"
                  >
                    <X size={16}/>
                  </button>
                </div>
              ))}
            </div>

            <textarea
              placeholder="Add a message if you like."
              rows={3}
              className="w-full px-3 py-2 mb-4 text-sm rounded bg-transparent border resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <div className="flex items-center gap-3 p-3 bg-gray-300 dark:bg-gray-700 rounded">
              <img
                src={message.photo}
                alt={message.user}
                className="h-8 w-8 rounded-full"
              />
              <div>
                <div className="text-sm font-medium">
                  {message.user}
                </div>
                {message.fileUrl && (
                  <img
                    src={message.fileUrl}
                    alt={message.user}
                    className="h-8 w-auto"
                  />
                )}
                <div className="text-sm">{message.content}</div>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button 
                onClick={handleForward}
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-500"
              >
                Forward
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ForwardMessage;