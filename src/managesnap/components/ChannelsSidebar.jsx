import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaUserCircle, FaCog } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const channels = [
  { id: "C0876", name: "# test-tasks" },
  { id: "C0877", name: "# datasnap" },
  { id: "C0878", name: "# evalsnap" },
  { id: "C0879", name: "# general" },
  { id: "C0880", name: "# hiresnap" },
  { id: "C0881", name: "# ideas" },
  { id: "C0882", name: "# managesnap" },
  { id: "C0883", name: "# moviesnap" },
  { id: "C0884", name: "# techsnap" }
];

const directMessages = [
  { id: "D08976", name: "Bala Murali Krishna" },
  { id: "D08977", name: "Saketh33" },
  { id: "D08978", name: "Samarth Gupta" },
  { id: "D08979", name: "Tanvi Sharma" },
  { id: "D08980", name: "Vignesh Reddy" }
];

function ChannelsSidebar() {
  const [showChannels, setShowChannels] = useState(true);
  const [showDirectMessages, setShowDirectMessages] = useState(true);
  const navigate = useNavigate(); 

  const handleChannelClick = (channel) => {
    const channelId = channel.id; 
    navigate(`/managesnap/home/${channelId}`); 
  };

  const handleDMClick = (dm) => {
    const dmId = dm.id; 
    navigate(`/managesnap/home/${dmId}`); 
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
              {channels.map((channel) => (
                <div
                  key={channel.id}
                  onClick={() => handleChannelClick(channel)} 
                  className={`p-3 rounded cursor-pointer hover:bg-gray-500 transition`}
                >
                  <span className="text-white">{channel.name}</span>
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
              {directMessages.map((message) => (
                <div
                  key={message.id}
                  onClick={() => handleDMClick(message)}  
                  className={`flex items-center space-x-3 p-3 rounded cursor-pointer hover:bg-gray-500 transition`}
                >
                  <div className="bg-gray-500 w-8 h-8 rounded-full flex items-center justify-center text-xl">
                    <FaUserCircle />
                  </div>
                  <span className="text-white">{message.name}</span>
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
