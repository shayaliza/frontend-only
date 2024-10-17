import React, { useState } from 'react';
import Header from '../Header';
import { Outlet, useLocation, Link, useNavigate } from 'react-router-dom';
import ManageSidebar from './CourseSidebar';
import "../Layout.css"
import BottomBar from './CoBottomBar';
import ProfileComponent from '../../popups/ManageSnapProfile';
import NotificationComponent from '../../popups/ManageSnapNotification';
import img4 from "../../assets/rsc/kristina-v-hYdikKrex4U-unsplash.jpg";

function ManageLayout() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notiOpen, setNotiOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      userImage: "/api/placeholder/40/40",
      userName: "John Doe",
      message: "Hey, check out this new feature!",
      time: "2m ago"
    },
    {
      userImage: "/api/placeholder/40/40",
      userName: "Jane Smith",
      message: "You have a new follower",
      time: "1h ago"
    },
  ]);
  const navigate = useNavigate();

  const handlePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const toggleSidebar = () => {
    setIsPanelOpen(false);
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  const toggleNotification = () => {
    setNotiOpen(!notiOpen);
  };



  const location = useLocation();

const pathSegments = location.pathname.split('/').filter(Boolean);
const breadcrumbs = [
  { name: "Home", path: "/" }
];

pathSegments.forEach((segment, index) => {
  const name = segment.charAt(0).toUpperCase() + segment.slice(1);
  const path = '/' + pathSegments.slice(0, index + 1).join('/');  
  breadcrumbs.push({ name, path });
})

  return (
    <>
      <div className="flex">
        <ManageSidebar isPanelOpen={isPanelOpen} toggleSidebar={toggleSidebar} />
        <div className={`flex flex-col w-full ${isPanelOpen ? 'blur' : ''}`}>
          <div className="h-20 z-10">
          <Header
            handlePanel={handlePanel}
            profileOpen={profileOpen}
            notiOpen={notiOpen}
            toggleNotification={toggleNotification}
            toggleProfile={toggleProfile}
          />
        </div>
        <div className={`lg:pl-56 overflow-y-auto max-w-[1500px] 3xl:mx-auto  pb-4 ${isPanelOpen ? 'blur' : ''}`}>
      <nav className="breadcrumb p-4 mb-2 overflow-auto hidden lg:block">
        {breadcrumbs.map((breadcrumb, index) => (
          <span key={index}>
            <Link to={breadcrumb.path} className="text-blue-500 hover:underline">
              {breadcrumb.name}
            </Link>
            {index < breadcrumbs.length - 1 && (
              <span className="mx-2">/</span>
            )}
          </span>
        ))}
      </nav>
        <Outlet />
      </div>
      <div className="h-16 lg:hidden">
        <BottomBar/>
      </div>
        </div>
      </div>
      <ProfileComponent 
        isOpen={profileOpen}
        onClose={toggleProfile}
        userImage={img4}
        userName="rose_emily003"
        userFullName="Emily Rose"
      />
      <NotificationComponent 
        isOpen={notiOpen}
        onClose={toggleNotification}
        notifications={notifications}
      />
    </>
  );
}

export default ManageLayout;
