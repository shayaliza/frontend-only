import React, { useState, useEffect } from 'react';
import { MessageCircle, Search, ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const SlackInterface = () => {
  const [activeTab, setActiveTab] = useState('messages');
  const [isFromDropdownOpen, setIsFromDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQueries, setSelectedQueries] = useState([]);

  const location = useLocation();
  const name = location.state?.name || 'Techsnap';

  useEffect(() => {
    if (name && !selectedQueries.includes(name)) {
      setSelectedQueries([name]);
    }
  }, [name]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery && !selectedQueries.includes(searchQuery)) {
      setSelectedQueries([...selectedQueries, searchQuery]);
      setSearchQuery('');
    }
  };

  const toggleQuery = (query) => {
    if (selectedQueries.includes(query)) {
      setSelectedQueries(selectedQueries.filter(q => q !== query));
    } else {
      setSelectedQueries([...selectedQueries, query]);
    }
  };

  const tabContent = {
    messages: (
      <>
        <div className="p-3 flex items-center gap-2 ">
          <div className="relative border border-gray-500 rounded-lg">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsFromDropdownOpen(!isFromDropdownOpen);
              }}
              className="flex items-center gap-2 bg-blue-500/10 text-blue-400 px-2 py-1.5 rounded-md"
            >
              <div className="w-4 h-4 bg-purple-600 rounded flex items-center justify-center text-xs">T</div>
              <span>From {name || 'Techsnap'}</span>
              <ChevronDown size={16} className='mt-1' />
            </button>

            {isFromDropdownOpen && (
              <div className="absolute top-full mt-1 w-80 bg-black/40 backdrop-blur-sm border border-white/10 rounded-md shadow-lg z-50 text-white">
                <div className="p-3">
                  <form onSubmit={handleSearch} className="relative mb-3">
                    <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 opacity-60" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search people, channels, or DMs"
                      className="w-full pl-10 pr-3 py-2 bg-black/20 border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                  </form>
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {selectedQueries.map((query, index) => (
                      <label key={index} className="flex items-center gap-2 p-2 hover:bg-white/5 rounded cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedQueries.includes(query)}
                          onChange={() => toggleQuery(query)}
                          className="rounded border-white/20"
                        />
                        <span>{query}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <button className="px-3 py-1.5 opacity-60 bg-transparent border border-gray-500 rounded-lg">In</button>
          <button className="px-3 py-1.5 bg-transparent rounded-md border border-gray-500">Only my channels</button>
          <button className="px-3 py-1.5 bg-transparent rounded-md border border-gray-500">Exclude automations</button>
          <button className="flex items-center gap-1 px-3 py-1.5 text-blue-400 border border-gray-500 rounded-lg">
            <span className="text-lg">≡</span> Filters
          </button>
          <div className="ml-auto flex items-center border border-gray-500 rounded-md">
            <button className="pl-3 py-1.5 opacity-60">Most relevant</button>
            <ChevronDown size={16} className='mx-2 mt-1'/>
          </div>
        </div>

        <div className="mx-3 p-4 bg-gray-200 dark:bg-black/20 rounded-md border dark:border-gray-500">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="flex items-center gap-2">
                Unlock all of your team's hidden messages and files
                <span className="px-2 py-0.5 bg-purple-600 rounded text-xs">PRO</span>
              </h3>
              <p className="opacity-60 mt-1">
                Get access to your team's full archive with a free, 30-day trial.{' '}
                <a href="#" className="text-blue-400">Learn more</a>
              </p>
            </div>
            <button className="px-4 py-2 bg-emerald-800 text-white rounded-md hover:bg-emerald-700">
              Start Free Trial
            </button>
          </div>
        </div>

        <div className="mt-4">
          {['rwg', 'srswg', 'g', 'gsg', 'gs'].map((message, index) => (
            <div key={index} className="hover:bg-gray-200 dark:hover:bg-gray-700 bg-gray-50 dark:bg-zinc-900 px-4 py-3 rounded-lg border dark:border-gray-500 mb-3 mx-3">
              <div className="opacity-60 text-sm mb-1">{name || 'Techsnap'}</div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                  {(name || 'Techsnap').charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{name || 'Techsnap'}</span>
                    <span className="opacity-60 text-sm">Nov 9th at 12:43 AM</span>
                  </div>
                  <p className="opacity-80">{message}</p>
                  {index === 1 && (
                    <div className="flex gap-2 mt-2">
                      <span className="flex items-center gap-1 opacity-60 text-sm bg-black/20 px-2 py-1 rounded">
                        <MessageCircle size={14} /> 1
                      </span>
                      <span className="flex items-center gap-1 opacity-60 text-sm bg-black/20 px-2 py-1 rounded">
                        👀 1
                      </span>
                      <span className="flex items-center gap-1 opacity-60 text-sm bg-black/20 px-2 py-1 rounded">
                        🎯
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    ),
    files: (
      <div className="p-4 text-center opacity-60">
        <h3>Files Content</h3>
        <p>2 files found</p>
      </div>
    ),
    channels: (
      <div className="p-4 text-center opacity-60">
        <h3>Channels Content</h3>
        <p>No channels available</p>
      </div>
    ),
    people: (
      <div className="p-4 text-center opacity-60">
        <h3>People Content</h3>
        <p>No people found</p>
      </div>
    ),
    canvases: (
      <div className="p-4 text-center opacity-60">
        <h3>Canvases Content</h3>
        <p>No canvases available</p>
      </div>
    )
  };

  return (
    <div className="h-[calc(100vh-64px)] bg-white dark:bg-black text-black dark:text-white overflow-auto" onClick={() => isFromDropdownOpen && setIsFromDropdownOpen(false)}>
      <div className="flex justify-center items-center pt-3 px-3 border-b">
        <div className="flex space-x-6">
          <button 
            onClick={() => setActiveTab('messages')}
            className={`flex items-center ${activeTab === 'messages' ? 'border-b-2 border-black dark:border-white' : 'opacity-60'}`}>
            <span className="font-medium mb-2">Messages 11</span>
          </button>
          <button 
            onClick={() => setActiveTab('files')}
            className={`flex items-center ${activeTab === 'files' ? 'border-b-2 border-black dark:border-white' : 'opacity-60'}`}>
            <span className="font-medium mb-2">Files 2</span>
          </button>
          <button 
            onClick={() => setActiveTab('channels')}
            className={`flex items-center ${activeTab === 'channels' ? 'border-b-2 border-black dark:border-white' : 'opacity-60'}`}>
            <span className="font-medium mb-2">Channels 0</span>
          </button>
          <button 
            onClick={() => setActiveTab('people')}
            className={`flex items-center ${activeTab === 'people' ? 'border-b-2 border-black dark:border-white' : 'opacity-60'}`}>
            <span className="font-medium mb-2">People 0</span>
          </button>
          <button 
            onClick={() => setActiveTab('canvases')}
            className={`flex items-center ${activeTab === 'canvases' ? 'border-b-2 border-black dark:border-white' : 'opacity-60'}`}>
            <span className="font-medium mb-2">Canvases</span>
          </button>
        </div>
      </div>
      <div className="max-w-5xl mx-auto" onClick={(e) => e.stopPropagation()}>
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default SlackInterface;