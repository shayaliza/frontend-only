import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet, useNavigate } from "react-router-dom";
import CareerPathPopup from "../popups/CareerPathPopup";
import ProfileComponent from "../popups/ManageSnapProfile"
import NotificationComponent from "../popups/ManageSnapNotification"
import BottomBar from "./BottomBar";
import "./Layout.css";
import { PullToRefresh } from "react-js-pull-to-refresh";
import { Loader2 } from "lucide-react";
import img4 from "../assets/rsc/kristina-v-hYdikKrex4U-unsplash.jpg";

function CustomSpinner({ pullProgress, isRefreshing }) {
  const spinnerRef = useRef(null);

  useEffect(() => {
    if (spinnerRef.current && !isRefreshing) {
      spinnerRef.current.style.transform = `rotate(${pullProgress * 360}deg)`;
    }
  }, [pullProgress, isRefreshing]);

  if (!isRefreshing && pullProgress === 0) return null;

  return (
    <div className="flex justify-center items-center h-16">
      <div className="relative bg-slate-100 p-2 rounded-full shadow-md">
        <Loader2 
          ref={spinnerRef}
          className={`w-6 h-6 ${isRefreshing ? 'animate-spin' : ''} text-blue-500 relative z-10`} 
        />
      </div>
    </div>
  );
}

function PullContent({ pullProgress, isRefreshing }) {
  return <CustomSpinner pullProgress={pullProgress} isRefreshing={isRefreshing} />;
}

function Layout() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notiOpen, setNotiOpen] = useState(false);
  const [isAddCareerPathPopup, setIsAddCareerPathPopup] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const navigate = useNavigate();
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

  const toggleAddCareerPathPopup = () => {
    setIsAddCareerPathPopup(!isAddCareerPathPopup);
  };

  // const handleRefresh = () => {
  //   setIsRefreshing(true);
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       setRefreshKey((prevKey) => prevKey + 1);
  //       setIsRefreshing(false);
  //       resolve();
  //     }, 2000);
  //   });
  // };

  return (
    <div className="flex overflow-hidden">
      <Sidebar isPanelOpen={isPanelOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex flex-col w-full ${isPanelOpen ? "blur" : ""}`}>
        <div className="h-[58px] z-20">
          <Header
            handlePanel={handlePanel}
            profileOpen={profileOpen}
            notiOpen={notiOpen}
            toggleNotification={toggleNotification}
            toggleProfile={toggleProfile}
          />
        </div>
        {/* <PullToRefresh
          pullDownContent={<PullContent />}
          releaseContent={<CustomSpinner pullProgress={1} isRefreshing={true} />}
          refreshContent={<CustomSpinner pullProgress={1} isRefreshing={true} />}
          pullDownThreshold={70}
          onRefresh={handleRefresh}
          triggerHeight={70}
          backgroundColor="white"
          startInvisible={true}
          pullDownContentProps={{ 
            pullProgress: (y) => y / 70,
            isRefreshing: isRefreshing
          }}
        > */}
          <div className={`lg:pl-56 flex-1 overflow-y-auto flex-grow max-w-[1500px] 2xl:mx-auto z-0 `}>
            <Outlet
              key={refreshKey}
              context={{
                toggleAddCareerPathPopup,
              }}
            />
          </div>
        {/* </PullToRefresh> */}
        <div className="h-16 lg:hidden">
          <BottomBar />
        </div>
      </div>
      <CareerPathPopup
        isOpen={isAddCareerPathPopup}
        togglePopup={toggleAddCareerPathPopup}
      />
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
    </div>
  );
}

export default Layout;