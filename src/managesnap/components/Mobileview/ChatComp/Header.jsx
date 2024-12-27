import React, { useState } from "react";
import { ArrowLeftIcon, SearchIcon } from "@heroicons/react/outline";
import {
  ChevronDown,
  ChevronUp,
  MessageCircleIcon,
  PinIcon,
} from "lucide-react";

const ChatHeader = ({
  type,
  chatInfo,
  handleNavigationBack,
  navigate,
  onSendData,
  messages,
  messageSearch,
  setMessageSearch,
  setCurrentView
}) => {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [filteredMessageIds, setFilteredMessageIds] = useState([]);

  const handleSearch = () => {
    setMessageSearch(true);
    setSearchTerm("");
    setCurrentIndex(-1);
    setFilteredMessageIds([]);
  };

  const handleSearchInput = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term) {
      const filteredMessages = messages.filter((message) =>
        message.content.toLowerCase().includes(term)
      );
      const messageIds = filteredMessages.map((message) => message.id);
      setFilteredMessageIds(messageIds);

      setCurrentIndex(messageIds.length > 0 ? messageIds.length - 1 : -1);
      onSendData(
        messageIds.length > 0 ? [messageIds[messageIds.length - 1]] : []
      );
    } else {
      setFilteredMessageIds([]);
      setCurrentIndex(-1);
      onSendData([]);
    }
  };

  const handleUpNavigation = () => {
    if (filteredMessageIds.length > 0 && currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      onSendData([filteredMessageIds[newIndex]]);
    }
  };

  const handleDownNavigation = () => {
    if (
      filteredMessageIds.length > 0 &&
      currentIndex < filteredMessageIds.length - 1
    ) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      onSendData([filteredMessageIds[newIndex]]);
    }
  };

  return (
    <div className="border-b fixed top-0 h-16 left-0 right-0 z-50 bg-white dark:bg-black">
      <div className="pt-4 px-4 pb-2 flex justify-between items-center bg-background border-gray-500">
        {messageSearch ? (
          <div className="w-full flex items-center justify-between pt-1.5">
            <div
              className="ml-2 cursor-pointer"
              onClick={() => {
                setMessageSearch(false);
                setSearchTerm("");
                setCurrentIndex(-1);
                setFilteredMessageIds([]);
                onSendData([]);
              }}
            >
              <ArrowLeftIcon className="w-6 h-6 transition" />
            </div>
            <div className="flex-1 mx-4">
              <input
                type="text"
                value={searchTerm}
                className="focus:outline-none bg-gray-200 dark:bg-zinc-800 rounded-lg w-full py-1 px-2"
                placeholder="Search for messages..."
                onChange={handleSearchInput}
              />
            </div>
            <div className="flex space-x-6 items-center mr-2">
              <ChevronUp
                className={`cursor-pointer ${
                  currentIndex > 0 ? "text-blue-500" : "text-gray-400"
                }`}
                onClick={handleUpNavigation}
              />
              <ChevronDown
                className={`cursor-pointer ${
                  currentIndex < filteredMessageIds.length - 1
                    ? "text-blue-500"
                    : "text-gray-400"
                }`}
                onClick={handleDownNavigation}
              />
              <span className="text-sm text-gray-500">
                {filteredMessageIds.length > 0
                  ? `${currentIndex + 1}/${filteredMessageIds.length}`
                  : "0/0"}
              </span>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center">
              <div
                className="mr-2 cursor-pointer"
                onClick={handleNavigationBack}
              >
                <ArrowLeftIcon className="w-6 h-6 transition" />
              </div>
              {type === "channel" ? (
                <span className="font-bold text-xl">#{chatInfo?.name}</span>
              ) : (
                <div className="flex items-center space-x-2">
                  <img
                    onClick={() =>
                      navigate(`/managesnap/profile/${chatInfo?.id}`, {
                        state: { img: chatInfo.img, name: chatInfo.name },
                      })
                    }
                    src={chatInfo?.img}
                    alt=""
                    className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-600"
                  />
                  <span className="font-bold text-xl">{chatInfo?.name}</span>
                </div>
              )}
            </div>
            <div className="flex space-x-4 items-center">
              <SearchIcon
                className="w-6 h-6 hover:text-gray-400 transition"
                onClick={handleSearch}
              />
              <MessageCircleIcon className="w-6 h-6 hover:text-gray-400 transition" onClick={() => setCurrentView("messages")} />
              <PinIcon className="w-6 h-6 hover:text-gray-400 transition" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatHeader;
