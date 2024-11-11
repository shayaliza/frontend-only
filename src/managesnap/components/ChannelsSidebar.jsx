import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaCog, FaThumbtack } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import img from "../assets/man1.jpg"
import img2 from "../assets/man2.jpg"
import img3 from "../assets/man3.jpg"
import img4 from "../assets/img1.png"

const channels = [
  { 
    id: "C0876",
    name: "# test-tasks",
    subChannels: [
      { id: "C0876-1", name: "# unit-tests" },
      { id: "C0876-2", name: "# integration-tests" }
    ]
  },
  { 
    id: "C0877",
    name: "# datasnap",
    subChannels: [
      { id: "C0877-1", name: "# data-processing" },
      { id: "C0877-2", name: "# data-visualization" }
    ]
  },
  { id: "C0878", name: "# evalsnap" },
  { 
    id: "C0879",
    name: "# general",
    subChannels: [
      { id: "C0879-1", name: "# announcements" },
      { id: "C0879-2", name: "# random" }
    ]
  },
  { id: "C0880", name: "# hiresnap" },
  { id: "C0881", name: "# ideas" },
  { id: "C0882", name: "# managesnap" },
  { id: "C0883", name: "# moviesnap" },
  { id: "C0884", name: "# techsnap" }
];

const directMessages = [
  { id: "D08976", name: "Bala Murali Krishna", photo: img },
  { id: "D08977", name: "Saketh33", photo: img3 },
  { id: "D08978", name: "Samarth Gupta", photo: img2 },
  { id: "D08979", name: "Tanvi Sharma", photo: img4 },
  { id: "D08980", name: "Vignesh Reddy", photo: img }
];

const pinnedItems = [
  { type: 'channel', id: "C0879", name: "# general", subChannel: "# announcements" },
  { type: 'channel', id: "C0877", name: "# datasnap", subChannel: "# data-processing" },
  { type: 'dm', ...directMessages[0] },
  { type: 'dm', ...directMessages[3] },
  { type: 'dm', ...directMessages[2] },
  { type: 'dm', ...directMessages[1] },
  { type: 'channel', id: "C0878", name: "# evalsnap" },
  { type: 'channel', id: "C0877-1", name: "# data-processing" },
];

const ChannelItem = ({ channel, level = 0, onChannelClick }) => {
  const [showSubChannels, setShowSubChannels] = useState(false);
  const hasSubChannels = channel.subChannels && channel.subChannels.length > 0;

  return (
    <div className="flex flex-col">
      <div
        className="flex items-center p-2 rounded cursor-pointer hover:bg-gray-500 transition"
        style={{ paddingLeft: `${level * 16 + 8}px` }}
        onClick={() => {
          if (hasSubChannels) {
            setShowSubChannels(!showSubChannels);
          } else {
            onChannelClick(channel);
          }
        }}
      >
        {hasSubChannels && (
          <span className="mr-2">
            {showSubChannels ? 
              <FaChevronUp className="text-gray-400 w-3 h-3" /> : 
              <FaChevronDown className="text-gray-400 w-3 h-3" />
            }
          </span>
        )}
        <span className="text-white text-sm">{channel.name}</span>
      </div>
      {hasSubChannels && showSubChannels && (
        <div className="ml-2">
          {channel.subChannels.map((subChannel) => (
            <ChannelItem 
              key={subChannel.id} 
              channel={subChannel} 
              level={level + 1}
              onChannelClick={onChannelClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

function ChannelsSidebar() {
  const [showChannels, setShowChannels] = useState(true);
  const [showDirectMessages, setShowDirectMessages] = useState(true);
  const navigate = useNavigate();

  const handleChannelClick = (channel) => {
    navigate(`/managesnap/home/${channel.id}`);
  };

  const handleDMClick = (dm) => {
    navigate(`/managesnap/home/${dm.id}`);
  };

  return (
    <div id="sidebar" className="relative w-full flex flex-col bg-zinc-950 h-[calc(100vh-56px)] overflow-y-auto border-r channel-scrollbar">
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
                <ChannelItem 
                  key={channel.id}
                  channel={channel}
                  onChannelClick={handleChannelClick}
                />
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
                  className="flex items-center space-x-3 p-2 rounded cursor-pointer hover:bg-gray-500 transition"
                >
                  <img src={message.photo} alt="" className="w-8 h-8 rounded-full" />
                  <span className="text-white text-sm">{message.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 w-full bg-zinc-950 py-4 px-4 border-t border-gray-700">
        <div className="flex items-center overflow-auto whitespace-nowrap pb-2 scrollbar-thin scrollbar-thumb-gray-600 pin-scrollbar">
          {pinnedItems.map((item, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 group relative mr-3 cursor-pointer last:mr-0"
              onClick={() => item.type === 'dm' ? handleDMClick(item) : handleChannelClick(item)}
            >
              {item.type === 'dm' ? (
                <div className="relative">
                  <img 
                    src={item.photo} 
                    alt={item.name} 
                    className="w-10 h-10 rounded-full border-2 border-gray-700"
                  />
                  <FaThumbtack 
                    className="absolute -top-1 -right-1 text-gray-400 bg-zinc-950 rounded-full p-1 w-4 h-4" 
                  />
                </div>
              ) : (
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center border-2 border-gray-700">
                    <span className="text-white text-sm">#</span>
                  </div>
                  <FaThumbtack 
                    className="absolute -top-1 -right-1 text-gray-400 bg-zinc-950 rounded-full p-1 w-4 h-4" 
                  />
                </div>
              )}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                {item.type === 'dm' ? item.name : item.subChannel || item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChannelsSidebar;