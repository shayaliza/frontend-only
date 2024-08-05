// src/components/SettingBar.js
import React from 'react';

const SettingBar = ({ isOpen, closeSettingBar }) => {
  return (
    <div
      id="settingbar"
      className={`fixed top-0 right-0 h-full bg-white w-96 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button onClick={closeSettingBar} className="text-gray-500 text-3xl">
        ×
      </button>

      <div className="p-4">
        <div className="flex justify-between items-center mb-0">
          <img src="../assets/banner.png" alt="logo" className="w-full" />
        </div>
        <h1 className="text-2xl font-bold mb-6">Course Setting</h1>

        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-base">
              Dark Mode
              <span className="text-xs bg-purple-600 px-2 py-1 rounded-full ml-2">Beta</span>
            </p>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              id="setting-checkbox"
              name="setting-checkbox"
            />
            <span className="slider round"></span>
          </label>
        </div>

        <div className="flex space-x-4 mb-6">
          <div className="bg-gray-800 p-2 rounded-lg flex-1">
            <img src="../assets/download.png" alt="snpiiet" className="w-full h-[200px] object-cover mb-2" />
            <label className="flex items-center">
              <input type="checkbox" id="open-left" className="form-checkbox text-purple-600" />
              <span className="ml-2">Checkbox</span>
            </label>
          </div>
          <div className="bg-gray-800 p-2 rounded-lg flex-1">
            <img src="../assets/download.png" alt="snpiiet" className="w-full h-[200px] object-cover mb-2" />
            <label className="flex items-center">
              <input type="checkbox" id="open-right" className="form-checkbox text-purple-600" />
              <span className="ml-2">Checkbox</span>
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p>Save course history</p>
            <label className="switch">
              <input
                type="checkbox"
                id="setting-checkbox"
                name="setting-checkbox"
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="flex justify-between items-center">
            <p>Announcement Emails</p>
            <label className="switch">
              <input
                type="checkbox"
                id="setting-checkbox"
                name="setting-checkbox"
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="flex justify-between items-center">
            <p>Reminders</p>
            <label className="switch">
              <input
                type="checkbox"
                id="setting-checkbox"
                name="setting-checkbox"
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingBar;
