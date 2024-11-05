import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaUserCircle, FaCog } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import img from "../assets/man1.jpg"
import img2 from "../assets/man2.jpg"
import img3 from "../assets/man3.jpg"
import img4 from "../assets/women1.jpg"
import img5 from "../assets/img1.png"

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
  { id: "D08976", name: "Bala Murali Krishna", photo: img5 },
  { id: "D08977", name: "Saketh33", photo: img },
  { id: "D08978", name: "Samarth Gupta", photo: img2 },
  { id: "D08979", name: "Tanvi Sharma", photo: img4 },
  { id: "D08980", name: "Vignesh Reddy", photo: img3 }
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
                <div
                  key={channel.id}
                  onClick={() => handleChannelClick(channel)} 
                  className="p-2 rounded cursor-pointer hover:bg-gray-500 transition"
                >
                  <span className="text-white text-sm">{channel.name}</span>
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
                  className="flex items-center space-x-3 p-2 rounded cursor-pointer hover:bg-gray-500 transition"
                >
                    <img src={message.photo} alt="" className='w-8 h-8 rounded-full' />
                  <span className="text-white text-sm">{message.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 w-full bg-zinc-950 flex items-center p-4">
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

export default ChannelsSidebar
