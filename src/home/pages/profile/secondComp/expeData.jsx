// import React, { useState } from "react";
// import { RiArrowDownSLine } from "react-icons/ri";
// import { IoIosArrowUp } from "react-icons/io";

// const experienceData = [
//   {
//     id: 1,
//     logo: "https://placehold.co/24x24?text=T",
//     company: "Trendyol.com",
//     type: "Fulltime",
//     duration: "1 Year 2 Months · Oct 2021 - Dec 2022",
//     title: "Software Engineer",
//     description:
//       "Developed and maintained web applications using React and Node.js.",
//   },
//   {
//     id: 2,
//     logo: "https://placehold.co/24x24?text=T",
//     company: "TiklaGelsin",
//     type: "Contract",
//     duration: "1 Year 2 Months · Oct 2021 - Dec 2022",
//     title: "Frontend Developer",
//     description:
//       "Implemented user interfaces and collaborated with designers to improve user experience.",
//   },
//   {
//     id: 3,
//     logo: "https://placehold.co/24x24?text=P",
//     company: "Pazarama",
//     type: "Internship",
//     duration: "1 Year · Oct 2021 - Oct 2022",
//     title: "Intern Developer",
//     description:
//       "Assisted in the development of internal tools and learned best practices in software engineering.",
//   },
// ];

// const ExperienceCard = (expData) => {
//   console.log(expData);
//   const [expanded, setExpanded] = useState(null);

//   const toggleDropdown = (id) => {
//     setExpanded(expanded === id ? null : id);
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-lg font-semibold mb-4">All Experience</h2>
//       <div className="space-y-4">
//         {experienceData.map((experience) => (
//           <div
//             key={experience.id}
//             className="flex flex-col p-4 border-b border-gray-200"
//           >
//             <div className="flex items-start justify-between">
//               <div className="flex items-start">
//                 <img
//                   src={experience.logo}
//                   alt={`${experience.company} logo`}
//                   className="w-12 h-12 mr-4 rounded-full"
//                 />
//                 <div className="w-full">
//                   <div className="flex ">
//                     <h3 className="font-bold text-base mr-2">
//                       {experience.company}
//                     </h3>
//                   </div>
//                   <div className="text-sm w-max  text-gray-600">
//                     {experience.title}
//                     {experience.type}
//                     {experience.duration}
//                   </div>
//                 </div>
//               </div>
//               <div className="flex justify-end w-full">
//                 <button
//                   onClick={() => toggleDropdown(experience.id)}
//                   className="text-blue-500 hover:text-blue-700"
//                 >
//                   {expanded === experience.id ? (
//                     <IoIosArrowUp size={30} />
//                   ) : (
//                     <RiArrowDownSLine size={30} />
//                   )}
//                 </button>
//               </div>
//             </div>
//             {expanded === experience.id && (
//               <div className="mt-2 p-2 border border-gray-200 rounded bg-gray-50">
//                 <p className="text-sm text-gray-500">
//                   {experience.description}
//                 </p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ExperienceCard;

// import React, { useState } from "react";
// import { RiArrowDownSLine } from "react-icons/ri";
// import { IoIosArrowUp } from "react-icons/io";

// const ExperienceCard = ({ expData }) => {
//   const [expanded, setExpanded] = useState(null);

//   const toggleDropdown = (id) => {
//     setExpanded(expanded === id ? null : id);
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-lg font-semibold mb-4">All Experience</h2>
//       <div className="space-y-4">
//         {expData &&
//           expData.map((experience) => (
//             <div
//               key={experience.id}
//               className="flex flex-col p-4 border-b border-gray-200"
//             >
//               <div className="flex items-start justify-between">
//                 <div className="flex items-start">
//                   {/* If there's no logo in your data, you can use a placeholder */}
//                   <img
//                     src={experience.logo || "https://placehold.co/24x24?text=?"}
//                     alt={`${experience.company_name} logo`}
//                     className="w-12 h-12 mr-4 rounded-full"
//                   />
//                   <div className="w-full">
//                     <div className="flex ">
//                       <h3 className="font-bold text-base mr-2">
//                         {experience.company_name}
//                       </h3>
//                     </div>
//                     <div className="text-sm w-max text-gray-600">
//                       <span>{experience.role} · </span>
//                       <span>{experience.work_type} · </span>
//                       <span>
//                         {new Date(experience.start_date).toLocaleDateString()} -{" "}
//                         {experience.is_current
//                           ? "Present"
//                           : new Date(experience.end_date).toLocaleDateString()}
//                       </span>
//                       <span> · {experience.location}</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex justify-end w-full">
//                   <button
//                     onClick={() => toggleDropdown(experience.id)}
//                     className="text-blue-500 hover:text-blue-700"
//                   >
//                     {expanded === experience.id ? (
//                       <IoIosArrowUp size={30} />
//                     ) : (
//                       <RiArrowDownSLine size={30} />
//                     )}
//                   </button>
//                 </div>
//               </div>
//               {expanded === experience.id && (
//                 <div className="mt-2 p-2 border border-gray-200 rounded bg-gray-50">
//                   <p className="text-sm text-gray-500">
//                     {experience.description || "No description available."}
//                   </p>
//                 </div>
//               )}
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default ExperienceCard;

import React from "react";
import { RxDotFilled } from "react-icons/rx";
const Timeline = () => {
  return (
    <div className="flex flex-col space-y-4 bg-white p-4 mb-2 rounded-md">
      <h3 className="text-lg font-semibold">Experiance</h3>

      <div className="flex flex-col space-x-4">
        <div className="flex gap-2">
          <div>
            <img src="https://dummyimage.com/50/50" />
          </div>
          <div className="mb-4">
            <h3 className="font-bold">Company Name</h3>
            <p className="text-sm text-gray-500">2 yrs 7 mos</p>
            <p className="text-sm text-gray-500">On-site</p>
          </div>
        </div>
        {/* Left SVG line */}
        <div className="relative">
          <svg height="100%" width="50" className=" absolute left-1 top-3">
            <line
              x1="10"
              y1="0"
              x2="10"
              y2="69%"
              stroke="#ccc"
              strokeWidth="2"
            />
          </svg>

          {/* Job details */}
          <div className="ml-10">
            {/* Position 1 */}
            <div className="mb-6 relative">
              <div className="absolute -left-10 top-0">
                <RxDotFilled size={30} />
              </div>
              <h4 className="font-semibold">API & Integration Engineer</h4>
              <p className="text-sm text-gray-500">Full-time</p>
              <p className="text-sm text-gray-500">
                May 2023 - Present · 1 yr 5 mos
              </p>
              <p className="text-sm text-gray-500">
                Bengaluru, Karnataka, India
              </p>
            </div>

            {/* Position 2 */}
            <div className="mb-6 relative">
              <div className="absolute -left-10 top-0">
                <RxDotFilled size={30} />
              </div>
              <h4 className="font-semibold">Graduate Engineering Trainee</h4>
              <p className="text-sm text-gray-500">Full-time</p>
              <p className="text-sm text-gray-500">
                Aug 2022 - Apr 2023 · 9 mos
              </p>
              <p className="text-sm text-gray-500">Mysore, Karnataka, India</p>
            </div>

            {/* Position 3 */}
            <div className="mb-6 relative">
              <div className="absolute -left-10 top-0">
                <RxDotFilled size={30} />
              </div>
              <h4 className="font-semibold">Software Developer</h4>
              <p className="text-sm text-gray-500">Internship</p>
              <p className="text-sm text-gray-500">
                Mar 2022 - Jul 2022 · 5 mos
              </p>
              <p className="text-sm text-gray-500">Mysore, Karnataka, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
