import { useState } from 'react';
import { Smile, Users, Plane, Heart, Flag, Clock, Pizza, Trophy } from 'lucide-react';

const Emoji = ({setMessageInput}) => {
  const [activeTab, setActiveTab] = useState('all');
  const [recentEmojis, setRecentEmojis] = useState(['👀', '🙌', '✅', '👍', '❤️']);

  const categories = {
    smileys: {
      title: "Smileys & People",
      emojis: ['😀', '😃', '😄', '😊', '😅', '😆', '😂', '😅', '😉',
              '😊', '🤤', '😌', '😍', '🥰', '😘', '😋', '😎', '😭',
              '🤔', '😏', '😐', '😑', '😕', '🙄', '😬', '🤥', '😌', '😔', '😪']
    },
    people: {
      title: "People & Body",
      emojis: ['👶', '👧', '🧑', '👱', '👨', '👩', '🧓', '👴', '👵', '🤝', '👍', '👎', '👊', '✌️']
    },
    food: {
      title: "Food & Drink",
      emojis: ['🍕', '🍔', '🌭', '🍟', '🌮', '🍖', '🍗', '🥩', '🍱', '🍎', '🍓', '🥑']
    },
    travel: {
      title: "Travel & Places",
      emojis: ['✈️', '🚗', '🚕', '🚌', '🏎️', '🚓', '🚑', '🚒', '🚐', '🌍', '🌎', '🌏']
    },
    activities: {
      title: "Activities",
      emojis: ['⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🎱', '🏓', '🎮', '🎲']
    },
    flags: {
      title: "Flags",
      emojis: ['🏁', '🚩', '🎌', '🏴', '🏳️', '🏳️‍🌈', '🏴‍☠️', '🇺🇳']
    }
  };

  const tabs = [
    { id: 'all', icon: <Smile size={20} />, label: 'All' },
    { id: 'smileys', icon: <Smile size={20} />, label: 'Smileys' },
    { id: 'people', icon: <Users size={20} />, label: 'People' },
    { id: 'food', icon: <Pizza size={20} />, label: 'Food' },
    { id: 'travel', icon: <Plane size={20} />, label: 'Travel' },
    { id: 'activities', icon: <Trophy size={20} />, label: 'Activities' },
    { id: 'flags', icon: <Flag size={20} />, label: 'Flags' }
  ];

  const handleEmojiClick = (emoji) => {
    const newRecent = [emoji, ...recentEmojis.filter(e => e !== emoji)].slice(0, 5);
    setRecentEmojis(newRecent);
    console.log('Selected emoji:', emoji);
  };

  return (
    <div className=" text-black dark:text-white w-full">
      <div className="flex overflow-x-auto hide-scrollbar border-b border-gray-700">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-shrink-0 p-3 hover:bg-gray-300 dark:hover:bg-gray-800 rounded-t-md ${
              activeTab === tab.id ? 'border-b-2 border-blue-500' : ''
            }`}
          >
            {tab.icon}
          </button>
        ))}
      </div>

      <div className="h-96 overflow-y-auto emoji-scrollbar">
        <div className="p-3 border-b border-gray-700">
          <div className="text-sm mb-2">Recently Used</div>
          <div className="grid grid-cols-6 gap-2">
            {recentEmojis.map((emoji, index) => (
              <button
                key={index}
                onClick={() => setMessageInput((prev) => prev + emoji)}
                className="text-2xl hover:bg-gray-300 dark:hover:bg-gray-800 rounded p-1 transition-colors"
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'all' ? (
          Object.entries(categories).map(([key, category]) => (
            <div key={key} className="p-3 border-b border-gray-700">
              <div className="text-sm mb-2">{category.title}</div>
              <div className="grid grid-cols-6 gap-2">
                {category.emojis.map((emoji, index) => (
                  <button
                    key={index}
                    onClick={() => setMessageInput((prev) => prev + emoji)}
                    className="text-2xl hover:bg-gray-300 dark:hover:bg-gray-800 rounded p-1 transition-colors"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="p-3">
            <div className="grid grid-cols-6 gap-2">
              {categories[activeTab]?.emojis.map((emoji, index) => (
                <button
                  key={index}
                  onClick={() => setMessageInput((prev) => prev + emoji)}
                  className="text-2xl hover:bg-gray-300 dark:hover:bg-gray-800 rounded p-1 transition-colors"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Emoji;