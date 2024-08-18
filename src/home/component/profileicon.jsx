// import { useState } from "react";
// import { Link } from "react-router-dom";

// function ProfileIcon() {
//   const [isProfileVisible, setProfileVisible] = useState(false);

//   const toggleProfile = () => setProfileVisible(!isProfileVisible);
//   return (
//     <div className="profile relative flex items-center" onClick={toggleProfile}>
//       <img
//         src="/src/home/assets/profile.jpg"
//         alt="Profile"
//         className="w-8 h-8 rounded-full"
//       />
//       {isProfileVisible && (
//         <div
//           className="profile_dropDown flex flex-col p-4 rounded-lg absolute top-[65px] right-[-110%] w-[200px] z-50 bg-white text-center justify-between text-base"
//           style={{
//             boxShadow:
//               "0 -5px 10px -5px rgba(0, 0, 0, 0.35), 5px 0 10px -5px rgba(0, 0, 0, 0.35), -5px 0 10px -5px rgba(0, 0, 0, 0.35)",
//           }}
//         >
//           <div className="profile_item p-2 font-bold">
//             <p>
//               <Link to="/createsnap">Create Snap</Link>
//             </p>
//           </div>
//           <div className="profile_item p-2 font-bold">
//             <p>Dashboard</p>
//           </div>
//           <div className="profile_item p-2 font-bold">
//             <p>Profile</p>
//           </div>
//           <div className="profile_item p-2 font-bold">
//             <p>Settings</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProfileIcon;

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function ProfileIcon() {
  const [isProfileVisible, setProfileVisible] = useState(false);
  const profileRef = useRef(null);

  const toggleProfile = () => setProfileVisible(!isProfileVisible);

  const handleClickOutside = (event) => {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setProfileVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="profile relative flex items-center"
      onClick={toggleProfile}
      ref={profileRef}
    >
      <img
        src="/src/home/assets/profile.jpg"
        alt="Profile"
        className="w-8 h-8 rounded-full"
      />
      {isProfileVisible && (
        <div
          className="profile_dropDown flex flex-col p-4 rounded-lg absolute top-[65px] right-[-110%] w-[200px] z-50 bg-white text-center justify-between text-base"
          style={{
            boxShadow:
              "0 -5px 10px -5px rgba(0, 0, 0, 0.35), 5px 0 10px -5px rgba(0, 0, 0, 0.35), -5px 0 10px -5px rgba(0, 0, 0, 0.35)",
          }}
        >
          <div className="profile_item p-2 font-bold">
            <p>
              <Link to="/createsnap">Create Snap</Link>
            </p>
          </div>
          <div className="profile_item p-2 font-bold">
            <p>Dashboard</p>
          </div>
          <div className="profile_item p-2 font-bold">
            <p>Profile</p>
          </div>
          <div className="profile_item p-2 font-bold">
            <p>Settings</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileIcon;
