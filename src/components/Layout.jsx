// import React, { useState } from "react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import { Outlet } from "react-router-dom";
// import CoursePopup from "../popups/CoursePopup";
// import CareerPathPopup from "../popups/CareerPathPopup";
// import "./Layout.css";

// function Layout() {
//   const [isPanelOpen, setIsPanelOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [isAddCoursePopup, setIsAddCoursePopup] = useState(false);
//   const [isAddCareerPathPopup, setIsAddCareerPathPopup] = useState(false);

//   const handlePanel = () => {
//     setIsPanelOpen(!isPanelOpen);
//   };

//   const toggleSidebar = () => {
//     setIsPanelOpen(false);
//   };

//   const toggleProfile = () => {
//     setProfileOpen(!profileOpen);
//   };

//   const toggleAddCoursePopup = () => {
//     setIsAddCoursePopup(!isAddCoursePopup);
//   };

//   const toggleAddCareerPathPopup = () => {
//     setIsAddCareerPathPopup(!isAddCareerPathPopup);
//   };

//   return (
//     <div className="flex overflow-hidden">
//       <Sidebar isPanelOpen={isPanelOpen} toggleSidebar={toggleSidebar} />
//       <div className={`flex flex-col w-full ${isPanelOpen ? "blur" : ""}`}>
//         <Header
//           handlePanel={handlePanel}
//           profileOpen={profileOpen}
//           toggleProfile={toggleProfile}
//         />
//         <div className={`lg:ml-56 mt-20 overflow-y-auto flex-grow z-0`}>
//           <Outlet
//             context={{
//               toggleAddCoursePopup,
//               toggleAddCareerPathPopup,
//             }}
//           />
//         </div>
//       </div>
//       <CoursePopup
//         isOpen={isAddCoursePopup}
//         togglePopup={toggleAddCoursePopup}
//       />
//       <CareerPathPopup
//         isOpen={isAddCareerPathPopup}
//         togglePopup={toggleAddCareerPathPopup}
//       />
//     </div>
//   );
// }

// export default Layout;

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet, useNavigate } from "react-router-dom";
import CareerPathPopup from "../popups/CareerPathPopup";
import BottomBar from "./BottomBar";
import "./Layout.css";

function Layout() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isAddCareerPathPopup, setIsAddCareerPathPopup] = useState(false);
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

  const toggleAddCareerPathPopup = () => {
    setIsAddCareerPathPopup(!isAddCareerPathPopup);
  };

  return (
    <div className="flex overflow-hidden">
      <Sidebar isPanelOpen={isPanelOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex flex-col w-full ${isPanelOpen ? "blur" : ""}`}>
        <div className="h-20 z-20">
        <Header
          handlePanel={handlePanel}
          profileOpen={profileOpen}
          toggleProfile={toggleProfile}
        />
        </div>
        <div className={`lg:ml-56 overflow-y-auto flex-grow z-0`}>
          <Outlet
            context={{
              toggleAddCareerPathPopup,
            }}
          />
        </div>
        <div className="h-16 lg:hidden">
        <BottomBar/>
        </div>
      </div>
      <CareerPathPopup
        isOpen={isAddCareerPathPopup}
        togglePopup={toggleAddCareerPathPopup}
      />
    </div>
  );
}

export default Layout;
