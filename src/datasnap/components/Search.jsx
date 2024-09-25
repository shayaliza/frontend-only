import React, { useState } from 'react';
import { LockIcon, HashIcon, UserIcon, ChevronLeftIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../DarkMode/ThemeProvider';

const tabs = [
  { id: 1, label: 'Recents' },
  { id: 2, label: 'Files' },
  { id: 3, label: 'Canvases' },
  { id: 4, label: 'Channels' },
  { id: 5, label: 'People' },
];

const tabContent = {
  Recents: [
    { type: 'lock', label: 'managesnap' },
    { type: 'lock', label: 'techsnap' },
    { type: 'lock', label: 'testing' },
    { type: 'hashtag', label: 'react-frontend' },
    { type: 'user', label: 'Saketh33' },
    { type: 'hashtag', label: 'hiresnap' },
    { type: 'lock', label: 'evalsnap' },
    { type: 'lock', label: 'datasnap' },
    { type: 'hashtag', label: 'test-tasks' },
    { type: 'hashtag', label: 'general' },
  ],
  Files: ['File 1', 'File 2', 'File 3'],
  Canvases: ['Canvas 1', 'Canvas 2', 'Canvas 3'],
  Channels: ['Channel 1', 'Channel 2', 'Channel 3'],
  People: ['Person 1', 'Person 2', 'Person 3'],
};

function Search() {
  const [activeTab, setActiveTab] = useState('Recents');
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  }
  const {theme} = useTheme();

  const renderIcon = (type) => {
    switch (type) {
      case 'lock':
        return <LockIcon className="w-5 h-5" />;
      case 'hashtag':
        return <HashIcon className="w-5 h-5" />;
      case 'user':
        return <UserIcon className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className={`${theme == 'dark' ? 'bg-black text-white' : ""}  border border-gray-200 h-screen p-4`}>

      <div className="flex items-center rounded-lg mb-4 shadow-sm">
        <ChevronLeftIcon className='w-8' onClick={handleBack}/>
        <input 
          type="text" 
          aria-label="Search or jump to" 
          placeholder="Jump to or search..." 
          className="bg-gray-200 rounded-xl p-2 ml-2 text-black w-full focus:outline-none placeholder-gray-400"
        />
        <button 
          className="font-semibold ml-2 p-2 rounded-lg hover:bg-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-700"
          aria-label="Cancel search"
        >
          Cancel
        </button>
      </div>

      <div className="flex justify-between text-sm mb-4">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(label)}
            className={`py-2 px-2 font-semibold transition-colors duration-200 rounded-lg focus:outline-none 
            ${activeTab === label ? 'bg-gray-300 text-black' : 'text-gray-400 hover:text-white hover:bg-gray-700'} border border-gray-200`}
            aria-current={activeTab === label ? 'page' : undefined}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {tabContent[activeTab].map((item, index) => (
          <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200">
            {activeTab === 'Recents' && renderIcon(item.type)}
            <span className="text-sm">{item.label || item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
