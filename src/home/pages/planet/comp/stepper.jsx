// import React from "react";
// import { FaCheckCircle } from "react-icons/fa";
// const Stepper = () => {
//   const steps = [
//     {
//       label: "Challenge Starts",
//       date: "26 May 09:30 pm",
//     },
//     {
//       label: "Registration Ends",
//       date: "25 Jun 09:30 pm",
//     },
//     {
//       label: "Challenge Ends",
//       date: "25 Jun 09:30 pm",
//     },
//   ];

//   return (
//     <div className="flex justify-center items-center mt-8">
//       {steps.map((step, index) => (
//         <div className="flex items-center" key={index}>
//           {/* Checkmark Icon */}
//           <div className="flex flex-col items-center">
//             <FaCheckCircle className="w-8 h-8 text-green-500" />
//             <p className="text-sm text-center mt-2 font-semibold text-gray-700">
//               {step.label}
//             </p>
//             <p className="text-xs text-center text-gray-500">{step.date}</p>
//           </div>

//           {index < steps.length - 1 && (
//             <svg
//               className="w-60 h-8 text-green-500"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 128 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <line x1="0" y1="12" x2="100%" y2="12" stroke="currentColor" />
//             </svg>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Stepper;

import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Stepper = () => {
  const steps = [
    {
      label: "Challenge Starts",
      date: "26 May 09:30 pm",
    },
    {
      label: "Registration Ends",
      date: "25 Jun 09:30 pm",
    },
    {
      label: "Challenge Ends",
      date: "25 Jun 09:30 pm",
    },
  ];

  return (
    <div className="flex justify-center items-center mt-8">
      {steps.map((step, index) => (
        <div className="flex items-center" key={index}>
          {/* Checkmark Icon */}
          <div className="flex flex-col items-center">
            <FaCheckCircle className="w-8 h-8 text-green-500" />
            <p className="md:text-sm text-xs text-center mt-2 font-semibold text-gray-700">
              {step.label}
            </p>
            <p className="text-xs text-center text-gray-500">{step.date}</p>
          </div>

          {index < steps.length - 1 && (
            <svg
              className="w-16 h-8 md:w-60 text-green-500" // Adjusted width for mobile
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="0" y1="12" x2="100%" y2="12" stroke="currentColor" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
