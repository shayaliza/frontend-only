import exp from 'constants';
import React from 'react';
import { FaTimes } from "react-icons/fa";

const ShareModal = ({ isShareOpen, setIsShareOpen, contacts }) => {
  return (
    <>
    {isShareOpen && (
    <div className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
      <div className="fixed w-full h-full gap-4 border border-slate-700 bg-gray-100 dark:bg-slate-950 p-6 shadow-lg duration-200 sm:rounded-lg overflow-auto">
        <button
          className="absolute top-0 right-0 w-12 h-12 rounded-full hover:bg-gray-300 flex items-center justify-center transition duration-300 mt-2"
          onClick={() => setIsShareOpen(false)}
        >
          <FaTimes />
        </button>
        <div className="grid grid-cols-3 gap-2">
          {contacts.map((contact) => (
            <div key={contact.id} className="flex flex-col items-center p-4">
              <div className="relative">
                <img
                  src={contact.src}
                  alt={contact.name}
                  className="w-16 h-16 object-cover rounded-full border border-gray-700"
                />
                <span
                  className={`absolute bottom-0 right-2 w-3 h-3 rounded-full ${
                    contact.isActive ? "bg-green-500" : "bg-red-600"
                  }`}
                />
              </div>
              <span className="text-xs mt-2 text-center">{contact.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    )}
    </>
  );
};

export default ShareModal;