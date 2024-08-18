import React from "react";

const SkillsList = ({ skills, onEdit }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Skills You Will Gain
        </h2>
        <button
          className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105"
          onClick={onEdit}
        >
          <span className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              ></path>
            </svg>
            Edit
          </span>
        </button>
      </div>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {Array.isArray(skills) &&
          skills.map((skill) => (
            <li key={skill.id} className="flex justify-between">
              <div className="flex">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414L10 13.414l-3.707-3.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                {skill.name}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SkillsList;
