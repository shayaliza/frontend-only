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

import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";

const ExperienceCard = ({ expData }) => {
  const [expanded, setExpanded] = useState(null);

  const toggleDropdown = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">All Experience</h2>
      <div className="space-y-4">
        {expData &&
          expData.map((experience) => (
            <div
              key={experience.id}
              className="flex flex-col p-4 border-b border-gray-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start">
                  {/* If there's no logo in your data, you can use a placeholder */}
                  <img
                    src={experience.logo || "https://placehold.co/24x24?text=?"}
                    alt={`${experience.company_name} logo`}
                    className="w-12 h-12 mr-4 rounded-full"
                  />
                  <div className="w-full">
                    <div className="flex ">
                      <h3 className="font-bold text-base mr-2">
                        {experience.company_name}
                      </h3>
                    </div>
                    <div className="text-sm w-max text-gray-600">
                      <span>{experience.role} · </span>
                      <span>{experience.work_type} · </span>
                      <span>
                        {new Date(experience.start_date).toLocaleDateString()} -{" "}
                        {experience.is_current
                          ? "Present"
                          : new Date(experience.end_date).toLocaleDateString()}
                      </span>
                      <span> · {experience.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end w-full">
                  <button
                    onClick={() => toggleDropdown(experience.id)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    {expanded === experience.id ? (
                      <IoIosArrowUp size={30} />
                    ) : (
                      <RiArrowDownSLine size={30} />
                    )}
                  </button>
                </div>
              </div>
              {expanded === experience.id && (
                <div className="mt-2 p-2 border border-gray-200 rounded bg-gray-50">
                  <p className="text-sm text-gray-500">
                    {experience.description || "No description available."}
                  </p>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
