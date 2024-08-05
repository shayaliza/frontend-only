import React, { useState } from 'react';
import Header from '../Header';
import { Outlet, useLocation, Link } from 'react-router-dom';
import ManageSidebar from './CourseSidebar';
import "../Layout.css"

function ManageLayout() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handlePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const toggleSidebar = () => {
    setIsPanelOpen(false);
  };

  const [profileOpen, setProfileOpen] = useState(false);

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
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
        <Header handlePanel={handlePanel} profileOpen={profileOpen} toggleProfile={toggleProfile} />
        <div className={`lg:ml-56 mt-20 overflow-y-auto flex-grow ${isPanelOpen ? 'blur' : ''}`}>
      <nav className="breadcrumb p-2 mb-2">
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
        </div>
      </div>
      
    </>
  );
}

export default ManageLayout;
