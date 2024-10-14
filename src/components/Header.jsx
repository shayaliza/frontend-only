import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./Profile.css";
import img1 from "../assets/rsc/icons8-menu-50.png";
import img2 from "../assets/rsc/icons8-project-management-48.png";
import img3 from "../assets/rsc/icons8-notification-48 (1).png";
import img4 from "../assets/rsc/kristina-v-hYdikKrex4U-unsplash.jpg";
import closeIcon from '../assets/rsc/icons8-close-50.png';
import krishtis from '../assets/rsc/kristina-v-hYdikKrex4U-unsplash.jpg';
import settingsIcon from '../assets/rsc/icons8-settings-48.png';
import logoutIcon from '../assets/rsc/icons8-logout-48.png';
import { HomeIcon } from 'lucide-react';
import { IoIosArrowDropdown } from 'react-icons/io';



function Header({handlePanel, toggleProfile,profileOpen,toggleNotification}) {
  const navigate = useNavigate();
  const mainToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="navigation z-10">
        <div className="navi">
          <div className="nav-logo gap-2 lg:hidden">
          <img src={img2} alt="" className="noti-icon" />
            <p className="nav-logo-item nav-logo-text">managesnap</p>
            <div className="relative" ref={dropdownRef}>
            <button onClick={mainToggleDropdown} className="py-2">
              <IoIosArrowDropdown size={24} />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-12 -right-10 mt-2 w-48  bg-black text-white bg-opacity-25 backdrop-blur-md shadow-lg  rounded-lg z-[999]">
                <ul className="list-none p-2 m-0">
                  <li className="p-2 hover:bg-gray-400 hover:text-gray-900 cursor-pointer">
                    Follower
                  </li>
                  <li className="p-2 hover:bg-gray-400 hover:text-gray-900 cursor-pointer">
                    Following
                  </li>
                  <li className="p-2 hover:bg-gray-400 hover:text-gray-900 cursor-pointer">
                    <Link to="/dashboard/profile">Home</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-400 hover:text-gray-900 cursor-pointer">
                    <Link to="/createsnap/analytics">Createsnap</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-400 hover:text-gray-900 cursor-pointer">
                    <Link to="/datasnap">Datasnap</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          </div>
          <div className="nav-rest mr-4">
          {/* <HomeIcon className='w-6 h-6 text-black' onClick={()=> navigate("/createsnap/analytics")}/> */}
            <div className="nav-item" onClick={toggleNotification}>
              <img src={img3} alt="" className="noti-icon" />
            </div>
            <div className="profile-image nav-item" onClick={toggleProfile}>
              <img src={img4} alt="" className="image" />
            </div>
          </div>
        </div>
      </div>
      {/* {profileOpen && (
        <div className="profile-container ">
          <div className="profile">
            <div className="profile-heading">
              <h3>Profile</h3>
              <img src={closeIcon} className="profile-close cursor-pointer" onClick={toggleProfile} alt="Close" width={20} height={20} />
            </div>
            <div className="user-info profile-item">
              <div className="user-image">
                <img src={krishtis} alt="Emily Rose" />
              </div>
              <div className="user-details">
                <p className="user-fullname">Emily Rose</p>
                <p className="user-name">@rose_emily003</p>
              </div>
            </div>
            <div className="settings profile-item">
              <img src={settingsIcon} alt="Settings" />
              <p>Account Settings</p>
            </div>
            <div className="logout profile-item">
              <img src={logoutIcon} alt="Logout" />
              <p>Logout</p>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
}

export default Header;
