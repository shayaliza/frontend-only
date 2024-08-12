import React from "react";
import BannerImage from "./../../../assets/banner.png";
const SettingBar = ({
  isOpen,
  closeSettingBar,
  onPositionChange,
  selectedPosition,
}) => {
  return (
    <div
      id="settingbar"
      className={`fixed top-0  right-0 h-full overflow-y-auto bg-white w-96 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button onClick={closeSettingBar} className="text-gray-500 text-3xl">
        ×
      </button>

      <div className="p-4">
        <div className="flex justify-between items-center mb-0">
          <img src={BannerImage} alt="logo" className="w-full" />
        </div>
        <h1 className="text-2xl font-bold mb-6">Course Setting</h1>

        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-base">
              Dark Mode
              <span className="text-xs bg-purple-600 px-2 py-1 rounded-full ml-2">
                Beta
              </span>
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

        {/* Placeholder Images and Radio Buttons */}
        <div className="flex mb-6 space-x-4">
          <div className="flex-1 text-center">
            <img
              src="https://dummyimage.com/150x250/000/fff"
              alt="Left position placeholder"
              className="w-full h-auto object-cover rounded-lg mb-2"
            />
            <label className="flex items-center justify-center">
              <input
                type="radio"
                name="popup-position"
                value="left"
                checked={selectedPosition === "left"}
                onChange={(e) => onPositionChange(e.target.value)}
                className="form-radio text-purple-600"
              />
              <span className="ml-2">Left</span>
            </label>
          </div>
          <div className="flex-1 text-center">
            <img
              src="https://dummyimage.com/150x250/000/fff"
              alt="Right position placeholder"
              className="w-full h-auto object-cover rounded-lg mb-2"
            />
            <label className="flex items-center justify-center">
              <input
                type="radio"
                name="popup-position"
                value="right"
                checked={selectedPosition === "right"}
                onChange={(e) => onPositionChange(e.target.value)}
                className="form-radio text-purple-600"
              />
              <span className="ml-2">Right</span>
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
