import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ProfileImage from "./../assets/profile.jpg";
import { AiOutlineClose } from "react-icons/ai"; // Importing the close icon
import { IoIosNotificationsOutline } from "react-icons/io";

function ProfileIconMobile() {
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
        <>
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"></div>
          <div className="absolute h-screen -top-4 -right-4 mt-2 w-60 bg-white text-black backdrop-blur-none shadow-lg rounded-lg z-50">
            <div className="p-4 relative">
              {/* Cross Icon */}
              <AiOutlineClose
                className="absolute top-4 right-4 text-xl cursor-pointer"
                onClick={() => setProfileVisible(false)}
              />

              <div className="ml-4 flex mt-4">
                <img
                  src={ProfileImage}
                  alt="Profile"
                  className="w-20 h-20 rounded-full"
                />
                <div className="pt-3 pl-2">
                  <div>Name Here</div>
                  <div>6 Sep 2024</div>
                </div>
              </div>

              <ul className="list-none p-2 m-0">
                <div className="profile_item p-2 font-bold">
                  <p>
                    <Link to="/createsnap">Create Snap</Link>
                  </p>
                </div>
                <div className="profile_item p-2 font-bold">
                  <p>
                    <Link to="/dashboard/progress">Dashboard </Link>
                  </p>
                </div>
                <div className="profile_item p-2 font-bold">
                  <p>
                    <Link to="/dashboard/profile">Profile</Link>
                  </p>
                </div>
                <div className="profile_item p-2 font-bold">
                  <p>
                    <Link to="/organization/first">Create org</Link>
                  </p>
                </div>
                <div className="profile_item p-2 font-bold">
                  <div className="flex">
                    <span>Notification</span>
                    <span>
                      <IoIosNotificationsOutline size={28} />
                    </span>
                  </div>
                </div>
                <div className="profile_item p-2 font-bold">
                  <p>Settings</p>
                </div>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProfileIconMobile;
