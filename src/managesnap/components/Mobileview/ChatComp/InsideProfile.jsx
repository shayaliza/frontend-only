import React from "react";
import {
  FaCamera,
  FaCheckCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaTimes,
} from "react-icons/fa";

function InsideProfile({setCurrentView}) {
  return (
    
      <div
        className={`z-50 w-full gap-4 bg-background`}
      >
        <div className="p-4 w-full">
          <div className="flex justify-center mb-6">
            <button className="flex items-center space-x-2 bg-gray-100 text-black hover:bg-gray-700 px-4 py-2 rounded-lg shadow-md transition ease-in-out duration-200">
              <FaCamera className="" />
              <span className="font-medium">Update photo</span>
            </button>
          </div>

          <div className="bg-gray-100 text-black p-4 rounded-lg mb-6 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <span className="flex items-center space-x-2 text-lg font-medium">
                <FaCheckCircle className="text-green-500" />
                <span>Available</span>
              </span>
              <span className="text-sm">Free all day</span>
            </div>
            <p className="text-sm">Work hours: 6:30 AM - 5:30 PM</p>
            <p className="text-smmt-1">2:40 PM - Your local time</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <div className="space-y-3">
              <div className="flex shrink-0 items-center space-x-3">
                <FaEnvelope className=" w-4 h-4" />
                <span className="text-xs">
                  saipavansaketh.desamsetti@se.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="" />
                <span>+91 9705811666</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="" />
                <span>Exora Business Park</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Your manager</h3>
              <div
                className="text-blue-500 text-md block text-center"
                onClick={() => setCurrentView("organisation")}
              >
                Show organisation
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-gray-100 text-black p-4 rounded-lg shadow-md">
              <img
                src="path_to_manager_image.jpg"
                alt="Manager Avatar"
                className="w-8 h-8 rounded-full border-2 border-gray-100 shadow-lg"
              />
              <div>
                <p className="font-semibold text-md">Apoorva PRAKASH</p>
                <p className="text-sm">DGM - Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default InsideProfile;
