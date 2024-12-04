import React, { useState, useEffect, useRef } from 'react';
import { SearchIcon } from '@heroicons/react/outline';

const SendDesktop = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContacts, setSelectedContacts] = useState([]);
  const popupRef = useRef(null);

  const contacts = [
    { name: 'Saketh (Techsnap)', id: 1 },
    { name: 'Vignesh Reddy (You)', id: 2 },
    { name: 'Boys 🔥', id: 3 },
    { name: 'Dhanush', id: 4 },
    { name: 'Rajesh Reddy', id: 6 },
    { name: 'Dileep', id: 7 },
    { name: 'Selva', id: 8 },
    { name: 'Hermes', id: 9 },
    { name: 'Ruthvik', id: 10 },
  ];

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleContactSelect = (contact) => {
    if (selectedContacts.some((c) => c.id === contact.id)) {
      setSelectedContacts(selectedContacts.filter((c) => c.id !== contact.id));
    } else {
      setSelectedContacts([...selectedContacts, contact]);
    }
  };

  const handleShare = async () => {
    try {
      await navigator.share({ text: 'Sharing from the app' });
    } catch (e) {
      console.log('Share error:', e);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 dark:bg-gray-800/70 transition-all z-[9999]">
          <div
            className="bg-white dark:bg-gray-900 rounded-lg p-6 w-full max-w-md border shadow-xl transition-transform transform scale-95 hover:scale-100"
            ref={popupRef}
          >
            <div className="mb-4">
              <input
                type="text"
                className="w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg focus:outline-none"
                placeholder="Selected contacts will appear here..."
                value={selectedContacts.map((c) => c.name).join(', ')}
                readOnly
              />
            </div>

            <div className="relative flex items-center mb-4 border border-gray-300 dark:border-gray-500 rounded-lg">
              <SearchIcon className="w-6 h-6 text-gray-500 dark:text-gray-400 ml-2 cursor-pointer" />
              <input
                type="text"
                placeholder="Search contacts..."
                className="flex-1 bg-transparent text-gray-700 dark:text-gray-200 px-4 py-2 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="max-h-[300px] overflow-y-auto popup-scrollbar">
              {filteredContacts.map((contact) => (
                <div
                  key={contact.id}
                  className="flex items-center justify-between py-2 px-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-lg"
                  onClick={() => handleContactSelect(contact)}
                >
                  <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {contact.name}
                  </span>
                  <input
                    type="checkbox"
                    checked={selectedContacts.some((c) => c.id === contact.id)}
                    onChange={() => handleContactSelect(contact)}
                    className="h-5 w-5 accent-blue-500 dark:accent-blue-400"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-end mt-4">
              {selectedContacts.length > 0 && (
                <button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
                  onClick={handleShare}
                >
                  Share
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SendDesktop;
