import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaUserCircle, FaCog } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const channels = [
  "# test-tasks",
  "# datasnap",
  "# evalsnap",
  "# general",
  "# hiresnap",
  "# ideas",
  "# managesnap",
  "# moviesnap",
  "# techsnap"
];

const directMessages = [
  "Bala Murali Krishna",
  "Saketh33",
  "Samarth Gupta",
  "Tanvi Sharma",
  "Vignesh Reddy"
];

function ChannelsSidebar() {
  const [showChannels, setShowChannels] = useState(true);
  const [showDirectMessages, setShowDirectMessages] = useState(true);
  const navigate = useNavigate(); 

  const handleChannelClick = (channel) => {
    const channelName = channel.replace('#', '').trim();
    navigate(`/managesnap/channels/${channelName}`);
  };

  const handleDirectMessageClick = (username) => {
    const dmName = username.replace(/\s+/g, '_').trim();
    navigate(`/managesnap/direct/${dmName}`);
  };

  return (
    <div id="sidebar" className="sm:w-full flex flex-col bg-zinc-950 h-[calc(100vh-56px)] overflow-y-auto border-r">
      <div className="flex-1 p-4">
        <div className="mb-4 flex flex-col">
          <div 
            className="flex justify-between items-center cursor-pointer p-2 rounded hover:bg-gray-700 transition"
            onClick={() => setShowChannels(!showChannels)}
          >
            <span className="text-sm font-bold text-white">Channels</span>
            {showChannels ? <FaChevronUp className="text-gray-400"/> : <FaChevronDown className="text-gray-400"/>}
          </div>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${showChannels ? 'max-h-[1000px]' : 'max-h-0'}`}>
            <div id="channels" className="mt-2">
              {channels.map((channel, index) => (
                <div
                  key={index}
                  onClick={() => handleChannelClick(channel)} 
                  className={`p-3 rounded cursor-pointer hover:bg-gray-500 transition ${index === 0 ? 'channel-active' : 'channel'}`}
                >
                  <span className="text-white">{channel}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-4 flex flex-col">
          <div 
            className="flex justify-between items-center cursor-pointer p-2 rounded hover:bg-gray-700 transition"
            onClick={() => setShowDirectMessages(!showDirectMessages)}
          >
            <span className="text-sm font-bold text-white">Direct messages</span>
            {showDirectMessages ? <FaChevronUp className="text-gray-400"/> : <FaChevronDown className="text-gray-400"/>}
          </div>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${showDirectMessages ? 'max-h-[1000px]' : 'max-h-0'}`}>
            <div id="directMessages" className="mt-2">
              {directMessages.map((message, index) => (
                <div
                  key={index}
                  onClick={() => handleDirectMessageClick(message)}  
                  className={`flex items-center space-x-3 p-3 rounded cursor-pointer hover:bg-gray-500 transition`}
                >
                  <div className="bg-gray-500 w-8 h-8 rounded-full flex items-center justify-center text-xl">
                    <FaUserCircle />
                  </div>
                  <span className="text-white">{message}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center p-4 hidden">
        <button className="bg-gray-600 w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-gray-500 transition">
          <AiOutlinePlus />
        </button>
        <button className="bg-gray-600 w-10 h-10 rounded-full flex items-center justify-center text-xl ml-2 hover:bg-gray-500 transition">
          <FaCog />
        </button>
      </div>
    </div>
  );
}

export default ChannelsSidebar;
