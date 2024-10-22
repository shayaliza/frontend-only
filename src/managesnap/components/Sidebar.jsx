import React from 'react';
import { useLocation } from 'react-router-dom';
import { HomeIcon, BellIcon, CogIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { Tooltip as ReactTooltip } from 'react-tooltip';

function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop();

  const icons = [
    { id: 'home-tooltip', icon: <HomeIcon className="w-6 h-6 mb-1" />, label: 'channels', tooltip: 'Home', path: '/managesnap/channels' },
    { 
      id: 'custom-tooltip', 
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 mb-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
          />
        </svg>
      ), 
      label: 'dms', 
      tooltip: 'DMs', 
      path: '/managesnap/dms' 
    },
    { id: 'bell-tooltip', icon: <BellIcon className="w-6 h-6 mb-1" />, label: 'Notifications', tooltip: 'Notifications', path: '/managesnap/notifications' },
    { id: 'cog-tooltip', icon: <CogIcon className="w-6 h-6 mb-1" />, label: 'Settings', tooltip: 'Settings', path: '/managesnap/settings' }
  ];

  return (
    <aside className="hidden lg:flex flex-col items-center p-4 space-y-6 bg-zinc-900 shadow-md w-16">
      {icons.map(({ id, icon, label, tooltip, path }) => {
        const isActive = currentPath === path.split('/').pop(); 
        return (
          <Link to={path} key={id}>
            <div
              className={`group relative flex items-center justify-center w-12 h-12 cursor-pointer rounded-full transition 
                ${isActive ? 'bg-gray-600' : 'bg-gray-700 hover:bg-gray-600'}`}
              aria-label={label}
              role="button"
            >
              {React.cloneElement(icon, { className: `${isActive ? 'text-black' : 'text-white'} w-6 h-6 mb-1` })}
              <ReactTooltip id={id} place="right" type="light" effect="solid">
                {tooltip}
              </ReactTooltip>
            </div>
          </Link>
        );
      })}
    </aside>
  );
}

export default Sidebar;
