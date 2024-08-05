// import React from "react";

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

// const ExperienceCard = () => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-lg font-semibold mb-4">Experience</h2>
//       <div className="space-y-4">
//         {experienceData.map((experience) => (
//           <div
//             key={experience.id}
//             className="flex items-start justify-between p-4 border-b border-gray-200"
//           >
//             <div className="flex items-start">
//               <img
//                 src={experience.logo}
//                 alt={`${experience.company} logo`}
//                 className="w-12 h-12 mr-4 rounded-full"
//               />
//               <div>
//                 <h3 className="font-bold text-base">{experience.company}</h3>
//                 <p className="text-sm text-gray-600">{experience.title}</p>
//                 <p
//                   className={`inline-block bg-${
//                     experience.type.toLowerCase() === "fulltime"
//                       ? "blue-100 text-blue-800"
//                       : experience.type.toLowerCase() === "contract"
//                       ? "green-100 text-green-800"
//                       : "yellow-100 text-yellow-800"
//                   } text-xs font-medium mt-1 px-2 rounded`}
//                 >
//                   {experience.type}
//                 </p>
//                 <p className="text-sm text-gray-600 mt-1">
//                   {experience.duration}
//                 </p>
//                 <p className="text-sm text-gray-500 mt-2">
//                   {experience.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ExperienceCard;

import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";

const experienceData = [
  {
    id: 1,
    logo: "https://placehold.co/24x24?text=T",
    company: "Trendyol.com",
    type: "Fulltime",
    duration: "1 Year 2 Months · Oct 2021 - Dec 2022",
    title: "Software Engineer",
    description:
      "Developed and maintained web applications using React and Node.js.",
  },
  {
    id: 2,
    logo: "https://placehold.co/24x24?text=T",
    company: "TiklaGelsin",
    type: "Contract",
    duration: "1 Year 2 Months · Oct 2021 - Dec 2022",
    title: "Frontend Developer",
    description:
      "Implemented user interfaces and collaborated with designers to improve user experience.",
  },
];

const EducationCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Education</h2>
      <div className="space-y-4">
        {experienceData.map((experience) => (
          <div
            key={experience.id}
            className="flex flex-col p-4 border-b border-gray-200"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="w-12 h-12 mr-4 rounded-full"
                />
                <div>
                  <div className="flex ">
                    <h3 className="font-bold text-base mr-2">
                      {experience.company}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">{experience.title}</p>

                  <p className="text-sm text-gray-600 mt-1">
                    {experience.duration}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationCard;
