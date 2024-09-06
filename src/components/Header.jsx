import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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



function Header({handlePanel, toggleProfile,profileOpen}) {
  const navigate = useNavigate();

  return (
    <>
      <div className="navigation z-10">
        <div className="navi">
          <div className="nav-logo gap-2 lg:hidden">
          <img src={img2} alt="" className="noti-icon" />
            <p className="nav-logo-item nav-logo-text">managesnap</p>
          </div>
          <div className="nav-rest">
          <HomeIcon className='w-6 h-6 text-black' onClick={()=> navigate("/dashboard/profile")}/>
            <div className="nav-item">
              <img src={img3} alt="" className="noti-icon" />
            </div>
            <div className="profile-image nav-item" onClick={toggleProfile}>
              <img src={img4} alt="" className="image" />
            </div>
          </div>
        </div>
      </div>
      {profileOpen && (
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
      )}
    </>
  );
}

export default Header;
