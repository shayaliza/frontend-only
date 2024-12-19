import React, { useState, useRef, useEffect } from "react";
import ChannelsSidebar from "./ChannelsSidebar";
import Profile from "./ProfileSection";
import "./Main.css";
import ChatInterface from "./Chat";




const FullChatInterface = () => {
  const [isResizingLeft, setIsResizingLeft] = useState(false);
  const [isResizingRight, setIsResizingRight] = useState(false);
  const [channelsSidebarWidth, setChannelsSidebarWidth] = useState(280);
  const [profileSectionWidth, setProfileSectionWidth] = useState(300);
  const [isProfileSectionVisible, setIsProfileSectionVisible] = useState(false);

  const channelsSidebarRef = useRef(null);
  const messageSectionRef = useRef(null);
  const profileSectionRef = useRef(null);
  const leftDividerRef = useRef(null);
  const rightDividerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isResizingLeft) {
        const newWidth =
          e.clientX - channelsSidebarRef.current.getBoundingClientRect().left;
        if (newWidth > 200 && newWidth < 400) {
          setChannelsSidebarWidth(newWidth);
        }
      } else if (isResizingRight) {
        const containerWidth =
          messageSectionRef.current.parentElement.offsetWidth;
        const newWidth = containerWidth - e.clientX;
        if (newWidth > 230 && newWidth < 400) {
          setProfileSectionWidth(newWidth);
        }
      }
    };

    const handleMouseUp = () => {
      setIsResizingLeft(false);
      setIsResizingRight(false);
    };

    if (isResizingLeft || isResizingRight) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.classList.add('selecting-none')
    };
  }, [isResizingLeft, isResizingRight]);

  const toggleProfileSectionVisibility = () => {
    setIsProfileSectionVisible(!isProfileSectionVisible);
  };
  return (
    <div className="flex h-[calc(100vh-56px)]">
      <div className="flex flex-grow overflow-hiddens">
        <div
          ref={channelsSidebarRef}
          style={{ width: `${channelsSidebarWidth}px` }}
          className="flex-shrink-0"
        >
          <ChannelsSidebar />
        </div>
        <div
          ref={leftDividerRef}
          className="w-1 bg-gray-600 cursor-col-resize"
          onMouseDown={() => setIsResizingLeft(true)}
        />
        <div
          ref={messageSectionRef}
          className={`flex-grow overflow-hidden ${
            !isProfileSectionVisible ? "flex-grow" : ""
          }`}
        >
          <ChatInterface
            isProfileSectionVisible={isProfileSectionVisible}
            setIsProfileSectionVisible={setIsProfileSectionVisible}
            toggleProfileSectionVisibility={toggleProfileSectionVisibility}
          />
        </div>
        <div
          ref={rightDividerRef}
          className="w-1 bg-gray-600 cursor-col-resize"
          onMouseDown={() => setIsResizingRight(true)}
        />
        {isProfileSectionVisible && (
          <div
            ref={profileSectionRef}
            style={{ width: `${profileSectionWidth}px` }}
            className="flex-shrink-0"
          >
            <Profile
              onToggleVisibility={toggleProfileSectionVisibility}
              setIsProfileSectionVisible={setIsProfileSectionVisible}
              isProfileSectionVisible={isProfileSectionVisible}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FullChatInterface;
