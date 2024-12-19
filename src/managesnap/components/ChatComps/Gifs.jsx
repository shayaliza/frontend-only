import React, { useState, useEffect } from 'react';
import { Search, Flame, Smile, Star, Film, Heart } from 'lucide-react';

const Gifs = ({setMessageInput}) => {
  const [activeTab, setActiveTab] = useState('trending');
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const GIPHY_API_KEY = '';

  const tabs = [
    { id: 'trending', icon: <Flame size={20} />, label: 'Trending' },
    { id: 'reactions', icon: <Smile size={20} />, label: 'Reactions' },
    { id: 'memes', icon: <Star size={20} />, label: 'Memes' },
    { id: 'movies', icon: <Film size={20} />, label: 'Movies' },
    { id: 'love', icon: <Heart size={20} />, label: 'Love' }
  ];

  const fetchGifs = async () => {
    setLoading(true);
    try {
      let url = '';
      switch (activeTab) {
        case 'trending':
          url = `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}&limit=100`;
          break;
        case 'reactions':
          url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=reactions&limit=100`;
          break;
        case 'memes':
          url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=memes&limit=100`;
          break;
        case 'movies':
          url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=movie%20clips&limit=100`;
          break;
        case 'love':
          url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=love&limit=100`;
          break;
        default:
          url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${searchTerm}&limit=100`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setGifs(data.data.map(gif => gif.images.fixed_width.url));
    } catch (error) {
      console.error('Error fetching GIFs:', error);
      setGifs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGifs();
  }, [activeTab]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setActiveTab('search');
      fetchGifs();
    }
  };

  const handleGifClick = (gifUrl) => {
    console.log('Selected GIF:', gifUrl);
  };

  return (
    <div className="">
      <form 
        onSubmit={handleSearch} 
        className="p-3 border-gray-700 flex items-center"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for GIFs"
          className="flex-grow p-1 rounded mr-2 bg-transparent focus:outline-none border dark:border-gray-700"
        />
        <button 
          type="submit" 
          className="bg-blue-600 hover:bg-blue-700 p-1 rounded"
        >
          <Search size={20} className='text-white' />
        </button>
      </form>

      <div className="flex overflow-x-auto hide-scrollbar border-b border-gray-700">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setSearchTerm('');
            }}
            className={`flex-shrink-0 p-2 hover:bg-gray-300 dark:hover:bg-gray-800 rounded-t-md ${
              activeTab === tab.id ? 'border-b-2 border-blue-500' : ''
            }`}
          >
            {tab.icon}
          </button>
        ))}
      </div>

      <div className="h-36 overflow-y-auto emoji-scrollbar">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-2 p-1">
            {gifs.map((gifUrl, index) => (
              <button
                key={index}
                onClick={() => setMessageInput(gifUrl)}
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src={gifUrl} 
                  alt={`GIF ${index}`} 
                  className="w-full h-32 object-cover rounded" 
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gifs;