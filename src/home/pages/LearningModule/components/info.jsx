import React, { useState } from "react";

const courseSections = [
  {
    title: "Coding Fundamentals",
    progress: 25,
    lessons: [
      { title: "Introduction to Programming", xp: 50 },
      { title: "Variables and Data Types", xp: 100 },
      { title: "Control Structures", xp: 100 },
    ],
  },
  {
    title: "Advanced Topics",
    progress: 0,
    lessons: [
      { title: "Functions and Methods", xp: 150 },
      { title: "Object-Oriented Programming", xp: 200 },
    ],
  },
];

const CourseContent = ({ onClose }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-30">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <div className="relative">
          {/* <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-700"
          >
            &times;
          </button> */}
          <div id="courseContent">
            {courseSections.map((section, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded mb-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection(index)}
                >
                  <span className="font-bold">
                    {index + 1}. {section.title}
                  </span>
                  <span>{section.progress}%</span>
                </div>
                {openSection === index && (
                  <div id={`section${index}`} className="mt-2 space-y-2">
                    {section.lessons.map((lesson, lessonIndex) => (
                      <div
                        key={lessonIndex}
                        className="flex justify-between items-center text-sm"
                      >
                        <span className="font-semibold">{lesson.title}</span>
                        <span className="font-semibold">{lesson.xp} XP</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <button
            onClick={onClose}
            className="mt-4 block mx-auto bg-gray-500 text-white rounded py-2 px-4 hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
