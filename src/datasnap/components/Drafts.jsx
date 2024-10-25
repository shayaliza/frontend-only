// import React from 'react';
// import trashIcon from '../assets/rsc/icons8-trash-32.png';
// import { useTheme } from '../../DarkMode/ThemeProvider';
// function Drafts() {
//   const {theme} = useTheme();
//   return (
//     <div className="flex flex-col items-center py-4 px-2 sm:px-4 min-h-screen">
//       <div className="w-full max-w-3xl py-6">
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
//           <div>
//             <h2 className="text-2xl font-bold text-white">Your Drafts</h2>
//             <p className="text-white">All your pending drafts are here</p>
//           </div>
//           <button className="mt-4 sm:mt-0 text-blue-600 px-4 py-2 font-semibold border-2 border-blue-600 rounded-lg">
//             New Draft +
//           </button>
//         </div>
//         <div className="space-y-4">
//           <div className={`flex flex-col sm:flex-row justify-between items-center p-4 rounded-lg shadow-sm border border-gray-200 ${theme == 'dark' ? 'bg-black text-white' : "bg-gray-800 text-gray-300"}`}>
//             <div className="flex items-center mb-4 sm:mb-0">
//               <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center text-white rounded-lg mr-4 bg-gray-700">
//                 <p>No Cover</p>
//               </div>
//               <div className='text-white'>
//                 <h3 className="text-lg font-semibold">Jokes only programmers will understand</h3>
//                 <p className="text-gray-300 italic">Empty Draft</p>
//                 <p className="text-gray-300">Last Updated: <i>July 15, 2022</i></p>
//               </div>
//             </div>
//             <div className="flex space-x-4">
//               <button className="text-blue-500 hover:underline">Edit</button>
//               <img src={trashIcon} alt="Delete" className="w-6 h-6 cursor-pointer hover:opacity-75" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Drafts;

import React, { useEffect, useState } from "react";
import trashIcon from "../assets/rsc/icons8-trash-32.png";
import { useTheme } from "../../DarkMode/ThemeProvider";
import { GetAllBlogs } from "../../fetching/dataSnap/post";
import { Link } from "react-router-dom";

function Drafts() {
  const { theme } = useTheme();
  const [drafts, setDrafts] = useState([]); // State to hold draft blogs

  useEffect(() => {
    const fetchDrafts = async () => {
      try {
        const data = await GetAllBlogs();
        // Filter only draft blogs
        const draftBlogs = data.results.filter(
          (blog) => blog.status === "draft"
        );
        setDrafts(draftBlogs); // Set drafts state
      } catch (error) {
        console.error("Failed to fetch drafts:", error);
      }
    };

    fetchDrafts();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="flex flex-col items-center py-4 px-2 sm:px-4 min-h-screen">
      <div className="w-full max-w-3xl py-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">Your Drafts</h2>
            <p className="text-white">All your pending drafts are here</p>
          </div>
          <Link
            to={"/ds/create"}
            className="mt-4 sm:mt-0 text-blue-600 px-4 py-2 font-semibold border-2 border-blue-600 rounded-lg"
          >
            New Draft +
          </Link>
        </div>
        <div className="space-y-4">
          {drafts.map((draft) => (
            <div
              key={draft.id}
              className={`flex flex-col sm:flex-row justify-between items-center p-4 rounded-lg shadow-sm border border-gray-200 ${
                theme === "dark"
                  ? "bg-black text-white"
                  : "bg-gray-800 text-gray-300"
              }`}
            >
              <div className="flex items-center mb-4 sm:mb-0">
                <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center text-white rounded-lg mr-4 bg-gray-700">
                  <p>No Cover</p>
                </div>
                <div className="text-white">
                  <h3 className="text-lg font-semibold">{draft.title}</h3>
                  <p className="text-gray-300 italic">Empty Draft</p>
                  <p className="text-gray-300">
                    Last Updated:{" "}
                    <i>{new Date(draft.updated_at).toLocaleDateString()}</i>
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="text-blue-500 hover:underline">Edit</button>
                <img
                  src={trashIcon}
                  alt="Delete"
                  className="w-6 h-6 cursor-pointer hover:opacity-75"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Drafts;
