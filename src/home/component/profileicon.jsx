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
      className={`profile relative flex items-center `}
      onClick={toggleProfile}
      ref={profileRef}
    >
      <img src={ProfileImage} alt="Profile" className="w-8 h-8 rounded-full" />
      {isProfileVisible && (
        <div>
          <div className="absolute md:top-16 top-14 right-0 mt-2 w-48  bg-white text-black border border-gray-300  rounded-lg">
            <div className="absolute w-5 h-5 bg-inherit top-[-10px] right-4 rotate-45 content-['']"></div>

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
        </div>
      )}
    </div>
  );
}

export default ProfileIcon;
