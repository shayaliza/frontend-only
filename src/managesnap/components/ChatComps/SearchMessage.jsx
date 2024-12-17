import { SearchIcon, X } from "lucide-react";
import React, {useState, useEffect, useRef} from "react";

function SearchMessage({messages, onSendData, onClose}) {
  const chatContainerRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMessages, setFilteredMessages] = useState([]);
  const handleMessageSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim() === "") {
      setFilteredMessages("");
    } else {
      const filtered = messages.filter(
        (message) =>
          message.content.toLowerCase().includes(value.toLowerCase()) ||
          message.user.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredMessages(filtered);
    }
  };

  return (
    <>
      <div className="flex justify-between px-4 pt-2 text-black dark:text-white">
        <h1 className="text-lg font-semibold">Search for messages</h1>
        <X className="cursor-pointer" onClick={onClose} />
      </div>
      <div className="relative w-full flex p-4">
        <input
          type="text"
          name="search"
          id="search"
          value={searchTerm}
          onChange={handleMessageSearch}
          placeholder="Search messages"
          className="w-full dark:bg-[#1F1F1F] border outline-none px-8 py-3 rounded-md text-black dark:text-white focus:ring-0 dark:border-none"
        />
        <SearchIcon className="w-4 h-4 absolute top-8 left-6 text-black dark:text-white" />
      </div>

      <div
        className="relative flex-grow overflow-y-auto overflow-x-hidden"
        ref={chatContainerRef}
      >
        {filteredMessages.length === 0 ? (
          <div className="text-center text-gray-400 dark:text-white py-4">
            No messages found
          </div>
        ) : (
          filteredMessages.map((message) => (
            <div key={message.id} className="hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-white p-4 border-b" onClick={() => onSendData(message.id)}>
              <div className="flex items-center space-x-2 mb-2">
                {/* <span className="font-semibold text-sm">{message.user}</span> */}
                <span className="text-xs">{message.timestamp}</span>
              </div>
              <p className="text-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-[350px]">{message.content}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default SearchMessage;
