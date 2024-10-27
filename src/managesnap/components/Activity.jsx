import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';
import img1 from "../assets/img1.png";
import profile from "../assets/logo.png";
import { SearchIcon, MicrophoneIcon, ChatIcon, AtSymbolIcon, HashtagIcon, ThumbUpIcon, CubeIcon, UserAddIcon } from '@heroicons/react/outline';
import { useTheme } from "../../DarkMode/ThemeProvider";
import "./Main.css"

function Notification() {
  const [activeTab, setActiveTab] = useState('All');
  const navigate = useNavigate();
  const {theme} = useTheme();

  const tabs = [
    { name: 'All', icon: ChatIcon },
    { name: 'Mentions', icon: AtSymbolIcon },
    { name: 'Threads', icon: HashtagIcon },
    { name: 'Reactions', icon: ThumbUpIcon },
    { name: 'Apps', icon: CubeIcon },
    { name: 'Invitations', icon: UserAddIcon },
  ];

  const [isResizingLeft, setIsResizingLeft] = useState(false);
  const [isResizingRight, setIsResizingRight] = useState(false);
  const [dmListWidth, setDmListWidth] = useState(500);
  const [profileSectionWidth, setProfileSectionWidth] = useState(300);
  const [isProfileSectionVisible, setIsProfileSectionVisible] = useState(false);

  const dmListRef = useRef(null);
  const messageSectionRef = useRef(null);
  const profileSectionRef = useRef(null);
  const leftDividerRef = useRef(null);
  const rightDividerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isResizingLeft) {
        const newWidth = e.clientX - dmListRef.current.getBoundingClientRect().left;
        if (newWidth > 200 && newWidth < 400) {
          setDmListWidth(newWidth);
        }
      } else if (isResizingRight) {
        const containerWidth = messageSectionRef.current.parentElement.offsetWidth;
        const newWidth = containerWidth - e.clientX;
        if (newWidth > 230 && newWidth < 400) {
          setProfileSectionWidth(newWidth);
        }
      }
    };

    const handleMouseUp = () => {
      setIsResizingLeft(false);
      setIsResizingRight(false);
    };

    if (isResizingLeft || isResizingRight) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      document.body.classList.add('selecting-none');
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.classList.remove('selecting-none');
    };
  }, [isResizingLeft, isResizingRight]);


  const renderTabContent = () => {
    switch (activeTab) {
      case 'All':
        return (
          <div className="flex flex-col text-gray-700 dark:text-gray-300 space-y-4 mt-4">
  <div>
    <div className="flex justify-between items-center mb-1">
      <span className="font-medium">#Channel Invitation</span>
      <span className="text-sm">Jul 27</span>
    </div>
    <div className="flex space-x-3 items-center border border-neutral-300 dark:border-neutral-700 p-3 rounded-lg shadow-sm">
      <img src={profile} alt="Profile" className="w-12 h-12 rounded-lg" />
      <div className="flex flex-col space-y-1">
        <h3 className="font-semibold text-gray-800 dark:text-gray-100">Saketh33</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Added you to <span className="font-semibold text-gray-900 dark:text-gray-200">#react-frontend</span>
        </p>
      </div>
    </div>
  </div>
  <div>
    <div className="flex justify-between items-center mb-1">
      <span className="font-medium">#Message</span>
      <span className="text-sm">Jul 27</span>
    </div>
    <div className="flex space-x-3 items-center border border-neutral-300 dark:border-neutral-700 p-3 rounded-lg shadow-sm">
      <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
      <div className="flex flex-col space-y-1">
        <h3 className="font-semibold text-gray-800 dark:text-gray-100">User1</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Sent you a message</p>
      </div>
    </div>
  </div>
  <div>
    <div className="flex justify-between items-center mb-1">
      <span className="font-medium">#Message</span>
      <span className="text-sm">Jul 27</span>
    </div>
    <div className="flex space-x-3 items-center border border-neutral-300 dark:border-neutral-700 p-3 rounded-lg shadow-sm">
      <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
      <div className="flex flex-col space-y-1">
        <h3 className="font-semibold text-gray-800 dark:text-gray-100">User2</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Mentioned you in a comment</p>
      </div>
    </div>
  </div>
  <div>
    <div className="flex justify-between items-center mb-1">
      <span className="font-medium">#Message</span>
      <span className="text-sm">Jul 27</span>
    </div>
    <div className="flex space-x-3 items-center border border-neutral-300 dark:border-neutral-700 p-3 rounded-lg shadow-sm">
      <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
      <div className="flex flex-col space-y-1">
        <h3 className="font-semibold text-gray-800 dark:text-gray-100">User2</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Mentioned you in a comment</p>
      </div>
    </div>
  </div>
  <div>
    <div className="flex justify-between items-center mb-1">
      <span className="font-medium">#Message</span>
      <span className="text-sm">Jul 27</span>
    </div>
    <div className="flex space-x-3 items-center border border-neutral-300 dark:border-neutral-700 p-3 rounded-lg shadow-sm">
      <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
      <div className="flex flex-col space-y-1">
        <h3 className="font-semibold text-gray-800 dark:text-gray-100">User2</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Mentioned you in a comment</p>
      </div>
    </div>
  </div>
  <div>
    <div className="flex justify-between items-center mb-1">
      <span className="font-medium">#Message</span>
      <span className="text-sm">Jul 27</span>
    </div>
    <div className="flex space-x-3 items-center border border-neutral-300 dark:border-neutral-700 p-3 rounded-lg shadow-sm">
      <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
      <div className="flex flex-col space-y-1">
        <h3 className="font-semibold text-gray-800 dark:text-gray-100">User2</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Mentioned you in a comment</p>
      </div>
    </div>
  </div> 
</div>

        );
      case 'Mentions':
        return (
          <>
          <div className="flex space-x-3 items-center border p-3 rounded-lg shadow-sm mb-2">
          <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold text-gray-800 dark:text-gray-300">User2</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Mentioned you in a comment</p>
          </div>
        </div>
         <div className="flex space-x-3 items-center border p-3 rounded-lg shadow-sm mb-2">
         <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
         <div className="flex flex-col space-y-1">
           <h3 className="font-semibold text-gray-800 dark:text-gray-300">User2</h3>
           <p className="text-sm text-gray-600 dark:text-gray-300">Mentioned you in a comment</p>
         </div>
       </div>
        <div className="flex space-x-3 items-center border p-3 rounded-lg shadow-sm mb-2">
        <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
        <div className="flex flex-col space-y-1">
          <h3 className="font-semibold text-gray-800 dark:text-gray-300">User2</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Mentioned you in a comment</p>
        </div>
      </div>
       <div className="flex space-x-3 items-center border p-3 rounded-lg shadow-sm mb-2">
       <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
       <div className="flex flex-col space-y-1">
         <h3 className="font-semibold text-gray-800 dark:text-gray-300">User2</h3>
         <p className="text-sm text-gray-600 dark:text-gray-300">Mentioned you in a comment</p>
       </div>
     </div>
     </>
        )
      case 'Threads':
        return (
          <>
          <div className="flex space-x-3 items-center border p-3 rounded-lg shadow-sm mb-2">
        <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
        <div className="flex flex-col space-y-1">
          <h3 className="font-semibold text-gray-800 dark:text-gray-300">User2</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">No Threads Yet</p>
        </div>
      </div>
      <div className="flex space-x-3 items-center border p-3 rounded-lg shadow-sm mb-2">
        <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
        <div className="flex flex-col space-y-1">
          <h3 className="font-semibold text-gray-800 dark:text-gray-300">User3</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">No Threads Yet</p>
        </div>
      </div>
      <div className="flex space-x-3 items-center border p-3 rounded-lg shadow-sm mb-2">
        <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
        <div className="flex flex-col space-y-1">
          <h3 className="font-semibold text-gray-800 dark:text-gray-300">User4</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">No Threads Yet</p>
        </div>
      </div>
          </>
        )
      case 'Reactions':
        return (
          <>
           <div className="flex space-x-3 items-center border p-3 rounded-lg shadow-sm mb-2">
              <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-gray-800 dark:text-gray-300">User6</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Liked your story</p>
              </div>
            </div>
            <div className="flex space-x-3 items-center border p-3 rounded-lg shadow-sm mb-2">
              <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-gray-800 dark:text-gray-300">User3</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Liked your story</p>
              </div>
            </div>
            <div className="flex space-x-3 items-center border p-3 rounded-lg shadow-sm mb-2">
              <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-gray-800 dark:text-gray-300">User9</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Liked your story</p>
              </div>
            </div>
          </>
        )
      case 'Apps':
        return <div className="text-center text-gray-600 dark:text-gray-300 mt-4 ">No apps yet</div>;
      case 'Invitations':
        return (
          <>
          <div className="flex space-x-3 items-center border p-3 rounded-lg shadow-sm mb-2">
              <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-gray-800 dark:text-gray-300">User3</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Invited you to an event</p>
              </div>
            </div>
            <div className="flex space-x-3 items-center border p-3 rounded-lg shadow-sm mb-2">
              <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-gray-800 dark:text-gray-300">User4</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Invited you to an event</p>
              </div>
            </div>
            <div className="flex space-x-3 items-center border p-3 rounded-lg shadow-sm mb-2">
              <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-gray-800dark:text-gray-300">User1</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Invited you to an event</p>
              </div>
            </div>
            <div className="flex space-x-3 items-center border p-3 rounded-lg shadow-sm mb-2">
              <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-gray-800 dark:text-gray-300">User8</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Invited you to an event</p>
              </div>
            </div>
          </>
        )
      default:
        return null;
    }
  };
  

  return (
    <>
    <div className="flex h-[calc(100vh-56px)] text-gray-800 dark:text-gray-200">
    <div className="w-1/3 border-r flex flex-col h-[calc(100vh-56px)]"
    ref={dmListRef} 
    style={{ width: `${dmListWidth}px` }} >
  <div className="py-4 px-2 mb-2 overflow-y-auto h-full">
        <div className="overflow-auto flex gap-2.5 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition duration-200 ${
                activeTab === tab.name
                  ? 'bg-pink-900 text-white'
                  : 'bg-gray-300 text-black hover:bg-pink-900 hover:text-white'
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              <tab.icon className="w-5 h-5" />
              {tab.name}
            </button>
          ))}
        </div>
        <div>
          {renderTabContent()}
        </div>
      </div>
      </div>
      <div
        ref={leftDividerRef}
        className="w-1 bg-gray-600 cursor-col-resize hover:bg-blue-500 transition-colors"
        onMouseDown={() => setIsResizingLeft(true)}
      />
      <div className="flex-1 flex justify-center items-center">
        <span className="font-medium text-pink-900 dark:text-gray-100 text-xl">No conversations yet</span>
      </div>
      <div
          ref={rightDividerRef}
          className="w-1 bg-gray-600 cursor-col-resize hover:bg-blue-500 transition-colors"
          onMouseDown={() => setIsResizingRight(true)}
        />
    </div>
    </>
  );
}

export default Notification;
