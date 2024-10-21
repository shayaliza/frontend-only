import { useState, useRef, useEffect } from 'react';
import Sidebar from './Sidebar';
import ProfileSection from './ProfileSection';
import ChannelsSidebar from './ChannelsSidebar';
import MessageSection from "./MessageSection";
import Header from './Header';
import './Main.css';

function Layout() {
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
        const newWidth = e.clientX - channelsSidebarRef.current.getBoundingClientRect().left;
        if (newWidth > 200 && newWidth < 400) {
          setChannelsSidebarWidth(newWidth);
        }
      } else if (isResizingRight) {
        const containerWidth = messageSectionRef.current.parentElement.offsetWidth;
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
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizingLeft, isResizingRight]);

  const toggleProfileSectionVisibility = () => {
    setIsProfileSectionVisible(!isProfileSectionVisible);
  };

  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 h-16 z-50">
        <Header />
      </div>
      
      {/* Scrollable Content Section */}
      <div className="flex flex-grow overflow-hidden pt-16">
        <Sidebar />
        <div ref={channelsSidebarRef} style={{ width: `${channelsSidebarWidth}px` }} className="flex-shrink-0">
          <ChannelsSidebar />
        </div>
        <div
          ref={leftDividerRef}
          className="w-1 bg-gray-600 cursor-col-resize"
          onMouseDown={() => setIsResizingLeft(true)}
        />
        <div
          ref={messageSectionRef}
          className={`flex-grow overflow-hidden ${!isProfileSectionVisible ? 'flex-grow' : ''}`}
        >
          <MessageSection
            isProfileSectionVisible={isProfileSectionVisible}
            toggleProfileSectionVisibility={toggleProfileSectionVisibility}
          />
        </div>
        <div
          ref={rightDividerRef}
          className="w-1 bg-gray-600 cursor-col-resize"
          onMouseDown={() => setIsResizingRight(true)}
        />
        {isProfileSectionVisible && (
          <div ref={profileSectionRef} style={{ width: `${profileSectionWidth}px` }} className="flex-shrink-0">
            <ProfileSection
              onToggleVisibility={toggleProfileSectionVisibility}
              setIsProfileSectionVisible={setIsProfileSectionVisible}
              isProfileSectionVisible={isProfileSectionVisible}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Layout;
