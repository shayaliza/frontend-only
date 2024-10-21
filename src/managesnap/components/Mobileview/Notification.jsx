import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';
import img1 from "../../assets/img1.png";
import profile from "../../assets/logo.png";
import { SearchIcon, MicrophoneIcon, ChatIcon, AtSymbolIcon, HashtagIcon, ThumbUpIcon, CubeIcon, UserAddIcon } from '@heroicons/react/outline';
import { useTheme } from "../../../DarkMode/ThemeProvider";

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

  const renderTabContent = () => {
    switch (activeTab) {
      case 'All':
        return (
          <div className={`flex flex-col text-gray-700 dark:text-gray-300 space-y-4 mt-4bg-background`}>
            <div className="flex justify-between items-center ">
              <span className="font-medium">#Channel Invitation</span>
              <span className="text-sm">Jul 27</span>
            </div>
            <div className="flex space-x-3 items-center bg-gray-300 p-3 rounded-lg shadow-sm">
              <img src={profile} alt="Profile" className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-gray-800">Saketh33</h3>
                <p className="text-sm text-gray-600">Added you to <span className="font-semibold text-gray-900">#react-frontend</span></p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">#Message</span>
              <span className="text-sm">Jul 27</span>
            </div>
            <div className="flex space-x-3 items-center bg-gray-300 p-3 rounded-lg shadow-sm">
              <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-gray-800">User1</h3>
                <p className="text-sm text-gray-600">Sent you a message</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">#Message</span>
              <span className="text-sm">Jul 27</span>
            </div>
            <div className="flex space-x-3 items-center bg-gray-300 p-3 rounded-lg shadow-sm">
              <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-gray-800">User2</h3>
                <p className="text-sm text-gray-600">Mentioned you in a comment</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">#Message</span>
              <span className="text-sm">Jul 27</span>
            </div>
            <div className="flex space-x-3 items-center bg-gray-300 p-3 rounded-lg shadow-sm">
              <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-gray-800">User3</h3>
                <p className="text-sm text-gray-600">Liked your post</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">#Message</span>
              <span className="text-sm">Jul 27</span>
            </div>
            <div className="flex space-x-3 items-center bg-gray-300 p-3 rounded-lg shadow-sm">
              <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-gray-800">User4</h3>
                <p className="text-sm text-gray-600">Started following you</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">#Message</span>
              <span className="text-sm">Jul 27</span>
            </div>
            <div className="flex space-x-3 items-center bg-gray-300 p-3 rounded-lg shadow-sm">
              <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-gray-800">User5</h3>
                <p className="text-sm text-gray-600">Commented on your post</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">#Message</span>
              <span className="text-sm">Jul 27</span>
            </div>
            <div className="flex space-x-3 items-center bg-gray-300 p-3 rounded-lg shadow-sm">
              <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-gray-800">User6</h3>
                <p className="text-sm text-gray-600">Reacted to your story</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">#Message</span>
              <span className="text-sm">Jul 27</span>
            </div>
            <div className="flex space-x-3 items-center bg-gray-300 p-3 rounded-lg shadow-sm">
              <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-gray-800">User7</h3>
                <p className="text-sm text-gray-600">Shared your post</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">#Message</span>
              <span className="text-sm">Jul 27</span>
            </div>
            <div className="flex space-x-3 items-center bg-gray-300 p-3 rounded-lg shadow-sm">
              <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-gray-800">User8</h3>
                <p className="text-sm text-gray-600">Invited you to an event</p>
              </div>
            </div>
            <div className="flex space-x-3 items-center bg-gray-300 p-3 rounded-lg shadow-sm">
              <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-gray-800">User9</h3>
                <p className="text-sm text-gray-600">Added you as a friend</p>
              </div>
            </div>
            <div className="flex space-x-3 items-center bg-gray-300 p-3 rounded-lg shadow-sm">
              <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-gray-800">User10</h3>
                <p className="text-sm text-gray-600">Sent you a friend request</p>
              </div>
            </div>
          </div>
        );
      case 'Mentions':
        return (
          <>
          <div className="flex space-x-3 items-center bg-gray-300 p-3 rounded-lg shadow-sm mb-2">
          <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold text-gray-800">User2</h3>
            <p className="text-sm text-gray-600">Mentioned you in a comment</p>
          </div>
        </div>
         <div className="flex space-x-3 items-center bg-gray-300 p-3 rounded-lg shadow-sm mb-2">
         <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
         <div className="flex flex-col space-y-1">
           <h3 className="font-semibold text-gray-800">User2</h3>
           <p className="text-sm text-gray-600">Mentioned you in a comment</p>
         </div>
       </div>
        <div className="flex space-x-3 items-center bg-gray-300 p-3 rounded-lg shadow-sm mb-2">
        <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
        <div className="flex flex-col space-y-1">
          <h3 className="font-semibold text-gray-800">User2</h3>
          <p className="text-sm text-gray-600">Mentioned you in a comment</p>
        </div>
      </div>
       <div className="flex space-x-3 items-center bg-gray-300 p-3 rounded-lg shadow-sm mb-2">
       <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
       <div className="flex flex-col space-y-1">
         <h3 className="font-semibold text-gray-800">User2</h3>
         <p className="text-sm text-gray-600">Mentioned you in a comment</p>
       </div>
     </div>
     </>
        )
      case 'Threads':
        return (
          <>
          <div className="flex space-x-3 items-center bg-gray-300 p-3 rounded-lg shadow-sm mb-2">
        <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
        <div className="flex flex-col space-y-1">
          <h3 className="font-semibold text-gray-800">User2</h3>
          <p className="text-sm text-gray-600">No Threads Yet</p>
        </div>
      </div>
      <div className="flex space-x-3 items-center bg-gray-300 p-3 rounded-lg shadow-sm mb-2">
        <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
        <div className="flex flex-col space-y-1">
          <h3 className="font-semibold text-gray-800">User3</h3>
          <p className="text-sm text-gray-600">No Threads Yet</p>
        </div>
      </div>
      <div className="flex space-x-3 items-center bg-gray-300 p-3 rounded-lg shadow-sm mb-2">
        <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
        <div className="flex flex-col space-y-1">
          <h3 className="font-semibold text-gray-800">User4</h3>
          <p className="text-sm text-gray-600">No Threads Yet</p>
        </div>
      </div>
          </>
        )
      case 'Reactions':
        return (
          <>
           <div className="flex space-x-3 items-center bg-gray-300 p-3 rounded-lg shadow-sm mb-2">
              <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-gray-800">User6</h3>
                <p className="text-sm text-gray-600">Liked your story</p>
              </div>
            </div>
            <div className="flex space-x-3 items-center bg-gray-300 p-3 rounded-lg shadow-sm mb-2">
              <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-gray-800">User3</h3>
                <p className="text-sm text-gray-600">Liked your story</p>
              </div>
            </div>
            <div className="flex space-x-3 items-center bg-gray-300 p-3 rounded-lg shadow-sm mb-2">
              <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-gray-800">User9</h3>
                <p className="text-sm text-gray-600">Liked your story</p>
              </div>
            </div>
          </>
        )
      case 'Apps':
        return <div className="text-center text-gray-600 mt-4 ">No apps yet</div>;
      case 'Invitations':
        return (
          <>
          <div className="flex space-x-3 items-center bg-gray-300 p-3 rounded-lg shadow-sm mb-2">
              <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-gray-800">User3</h3>
                <p className="text-sm text-gray-600">Invited you to an event</p>
              </div>
            </div>
            <div className="flex space-x-3 items-center bg-gray-300 p-3 rounded-lg shadow-sm mb-2">
              <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-gray-800">User4</h3>
                <p className="text-sm text-gray-600">Invited you to an event</p>
              </div>
            </div>
            <div className="flex space-x-3 items-center bg-gray-300 p-3 rounded-lg shadow-sm mb-2">
              <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-gray-800">User1</h3>
                <p className="text-sm text-gray-600">Invited you to an event</p>
              </div>
            </div>
            <div className="flex space-x-3 items-center bg-gray-300 p-3 rounded-lg shadow-sm mb-2">
              <img src={img1} alt="Profile" className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-gray-800">User8</h3>
                <p className="text-sm text-gray-600">Invited you to an event</p>
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
    <div className="bg-background">
      <div className="p-4 mb-2">
        <div className="overflow-x-auto flex gap-4 mb-6">
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
    </>
  );
}

export default Notification;
