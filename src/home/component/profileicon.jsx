import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ProfileImage from "./../assets/profile.jpg";

function ProfileIcon() {
  const [isProfileVisible, setProfileVisible] = useState(false);
  const profileRef = useRef(null);

  const toggleProfile = () => setProfileVisible(!isProfileVisible);

  const handleClickOutside = (event) => {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setProfileVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`profile relative flex items-center ${
        isProfileVisible && "bg-blue-300 rounded-lg"
      }`}
      onClick={toggleProfile}
      ref={profileRef}
    >
      <img src={ProfileImage} alt="Profile" className="w-8 h-8 rounded-full" />
      {isProfileVisible && (
        <div className="absolute md:top-16 top-14 right-0 mt-2 w-48  bg-black text-white bg-opacity-25 backdrop-blur-md shadow-lg  rounded-lg">
          <ul className="list-none p-2 m-0">
            <div className="profile_item p-2 font-bold">
              <p>
                <Link to="/createsnap">Create Snap</Link>
              </p>
            </div>
            <div className="profile_item p-2 font-bold">
              <p>
                <Link to="/datasnap">Data Snap</Link>
              </p>
            </div>
            <div className="profile_item p-2 font-bold">
              <p>Dashboard</p>
            </div>
            <div className="profile_item p-2 font-bold">
              <p>Profile</p>
            </div>
            <div className="profile_item p-2 font-bold">
              <p>Settings</p>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileIcon;
