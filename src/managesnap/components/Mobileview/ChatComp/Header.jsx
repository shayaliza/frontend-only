import React, {useState} from 'react';
import { ArrowLeftIcon, SearchIcon, DocumentTextIcon, VolumeUpIcon } from "@heroicons/react/outline";
import { ChevronDown, ChevronUp, PinIcon, Search } from 'lucide-react';

const ChatHeader = ({ type, chatInfo, handleNavigationBack, navigate }) => {
  const [messageSearch, setMessageSearch] = useState(false)
  const handleSearch = () => {
    setMessageSearch(true);
  }
  return (
    <div className="border-b fixed top-0 h-16 left-0 right-0 z-50 bg-white dark:bg-black">
      <div className="pt-4 px-4 pb-2 flex justify-between items-center bg-background border-gray-500">
        {messageSearch ? (
          <div className="w-full flex items-center justify-between pt-1.5">
          <div className="ml-2 cursor-pointer" onClick={() => setMessageSearch(false)}>
            <ArrowLeftIcon className="w-6 h-6 transition" />
          </div>
          <div className="flex-1 mx-4">
          <input type="text" name="" id="" className='focus:outline-none bg-gray-200 dark:bg-zinc-800 rounded-lg w-full py-1 px-2' placeholder='search for messages..' />
          </div>
          <div className="flex space-x-6 items-center mr-2">
            <ChevronUp/>
            <ChevronDown/>
          </div>
        </div>
        ) : (
          <>
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
          <SearchIcon className="w-6 h-6 hover:text-gray-400 transition" onClick={() => handleSearch()} />
          <DocumentTextIcon className="w-6 h-6 hover:text-gray-400 transition" />
          <PinIcon className="w-6 h-6 hover:text-gray-400 transition" />
        </div>
        </>
        )}
      </div>
    </div>
  );
};

export default ChatHeader;