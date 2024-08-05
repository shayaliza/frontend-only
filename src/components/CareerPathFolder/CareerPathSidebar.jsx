import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../Profile.css";
import projectManagementIcon from '../../assets/rsc/icons8-project-management-48.png';
import chevronDownIcon from '../../assets/rsc/icons8-chevron-down-30.png';
import chevronUpIcon from '../../assets/rsc/icons8-chevron-up-30.png';
import dashboardIcon from '../../assets/rsc/icons8-dashboard-layout-48.png';
import eLearningIcon from '../../assets/rsc/icons8-e-learning-48.png';
import userGroupsIcon from '../../assets/rsc/icons8-user-groups-48.png';
import requestServiceIcon from '../../assets/rsc/icons8-request-service-48.png';
import commercialIcon from '../../assets/rsc/icons8-commercial-48.png';
import calendarIcon from '../../assets/rsc/icons8-calendar-48.png';
import unitIcon from '../../assets/rsc/icons8-unit-48.png';
import supportIcon from '../../assets/rsc/icons8-support-60.png';

function PreviewSidebar({ isPanelOpen, toggleSidebar }) {
  const location = useLocation();
  const [expandedPanels, setExpandedPanels] = useState({
    0: true,
    1: true,
    2: true,
    3: true,
    4: true
  });

  const togglePanel = (index) => {
    setExpandedPanels((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const panels = [
    {
      title: 'Tools',
      items: [
        { icon: dashboardIcon, text: 'info', link: '/career-path/preview/info' },
        { icon: dashboardIcon, text: 'banner-section', link: 'index.html' },
        { icon: requestServiceIcon, text: 'viewskills', link: 'groups.html' },
        { icon: userGroupsIcon, text: 'popups', link: 'groups.html' }
      ]
    },
    {
      title: 'Path',
      items: [
        { icon: requestServiceIcon, text: 'Add timeline', link: 'addtimeline' },
        { icon: commercialIcon, text: 'Existing timelines', link: 'viewtimeline' },
        { icon: commercialIcon, text: 'HTML', link: 'html' },
        { icon: commercialIcon, text: 'CSS', link: 'css' },
        { icon: commercialIcon, text: 'JS', link: 'js' }
      ]
    },
    {
      title: 'Skill paths',
      items: [
        { icon: requestServiceIcon, text: 'Add Related courses', link: '#' },
        { icon: requestServiceIcon, text: 'Add Related projects', link: 'dashboard.html' },
        { icon: requestServiceIcon, text: 'Attach Skill path', link: 'timetable.html' },
        { icon: requestServiceIcon, text: 'Attached Skill path', link: 'timetable.html' }
      ]
    },
    {
      title: 'Skill paths',
      items: [
        { icon: requestServiceIcon, text: 'Verified by', link: '#' },
        { icon: commercialIcon, text: 'Testimonials', link: 'dashboard.html' },
        { icon: calendarIcon, text: 'Related CPS', link: 'timetable.html' },
        { icon: eLearningIcon, text: 'Companies', link: 'timetable.html' }
      ]
    },
    {
      title: 'Statistics',
      items: [
        { icon: requestServiceIcon, text: 'Enrolled users', link: '#' },
        { icon: commercialIcon, text: 'View course', link: 'dashboard.html' },
        { icon: unitIcon, text: 'Know in detail', link: 'timetable.html' },
        { icon: unitIcon, text: 'Contact click', link: 'timetable.html' }
      ]
    }
  ];

  return (
    <div className={`side-panel-container ${isPanelOpen ? "block" : "hidden"} lg:block z-50`}>
      <div className="side-panel">
        <button className="sidebar-close-btn" onClick={toggleSidebar}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" color='white' xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="panel-item logo-item">
          <div className="logo">
            <img src={projectManagementIcon} alt="managesnap logo" className="logo-image" />
            <p className="logo-name">createsnap</p>
          </div>
        </div>

        {panels.map((panel, index) => (
          <div className="course-details panel-item" key={index}>
            <div className="panel-heading" onClick={() => togglePanel(index)}>
              <h3>{panel.title}</h3>
              <img
                src={expandedPanels[index] ? chevronUpIcon : chevronDownIcon}
                alt="Toggle"
                className="arrow"
              />
            </div>
            {expandedPanels[index] && (
              <div className="details">
                {panel.items.map((item, idx) => (
                  <div className={`panel-item ${location.pathname.includes(item.link) ? 'active' : ''}`} key={idx}>
                    <img src={item.icon} alt="" className="item" />
                    <p className="name"><Link to={item.link}>{item.text}</Link></p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="panel-item support">
          <button>
            <img src={supportIcon} alt="Support" />
            <p className='dark:text-white'>view career path</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreviewSidebar;
