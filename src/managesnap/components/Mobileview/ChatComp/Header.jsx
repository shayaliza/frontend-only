import React from 'react';
import { ArrowLeftIcon, SearchIcon, DocumentTextIcon, VolumeUpIcon } from "@heroicons/react/outline";

const ChatHeader = ({ type, chatInfo, handleNavigationBack, navigate }) => {
  return (
    <div className="border-b fixed top-0 h-16 left-0 right-0 z-50 bg-white dark:bg-black">
      <div className="p-4 flex justify-between items-center bg-background border-gray-500">
        <div className="flex items-center">
          <div className="mr-2 cursor-pointer" onClick={handleNavigationBack}>
            <ArrowLeftIcon className="w-6 h-6 transition" />
          </div>
          {type === "channel" ? (
            <span className="font-bold text-xl">#{chatInfo?.name}</span>
          ) : (
            <div className="flex items-center space-x-2">
              <img
                onClick={() =>
                  navigate(`/managesnap/profile/${chatInfo?.id}`, {
                    state: {
                      img: chatInfo.img,
                      name: chatInfo.name,
                    },
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
          <SearchIcon className="w-6 h-6 hover:text-gray-400 transition" />
          <DocumentTextIcon className="w-6 h-6 hover:text-gray-400 transition" />
          <VolumeUpIcon className="w-6 h-6 hover:text-gray-400 transition" />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;