// src/components/Popup.js
import React from 'react';

const Popup = ({ onClose }) => {
  const toggleSection = (index) => {
    const section = document.getElementById(`section${index}`);
    section.classList.toggle('hidden');
  };

  return (
    <div className="fixed z-50 inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-4">Learn Coding</h2>
        <div id="courseContent" className="space-y-4">
          <div className="bg-gray-100 p-4 rounded">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection(0)}>
              <span className="font-bold">1. Coding Fundamentals</span>
              <span>25%</span>
            </div>
            <div id="section0" className="mt-2 space-y-2 hidden">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold">Introduction to Programming</span>
                <span className="font-semibold">50 XP</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold">Variables and Data Types</span>
                <span className="font-semibold">100 XP</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold">Control Structures</span>
                <span className="font-semibold">100 XP</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection(1)}>
              <span className="font-bold">2. Advanced Topics</span>
              <span>0%</span>
            </div>
            <div id="section1" className="mt-2 space-y-2 hidden">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold">Functions and Methods</span>
                <span className="font-semibold">150 XP</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold">Object-Oriented Programming</span>
                <span className="font-semibold">200 XP</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">
            Close
          </button>
          <button id="resetProgress" className="px-4 py-2 bg-green-500 text-white rounded">
            Reset Progress
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
