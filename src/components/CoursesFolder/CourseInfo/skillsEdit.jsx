// import React, { useState } from "react";
// import { FaTrash } from "react-icons/fa";

// const SkillsModal = ({ isOpen, skills, onSave, onCancel }) => {
//   const [editSkills, setEditSkills] = useState(skills);
//   const [newSkill, setNewSkill] = useState("");

//   const handleSave = () => {
//     onSave(editSkills);
//     onCancel();
//   };

//   const handleAddSkill = () => {
//     if (newSkill.trim()) {
//       setEditSkills([...editSkills, newSkill]);
//       setNewSkill("");
//     }
//   };

//   const handleDeleteSkill = (index) => {
//     const updatedSkills = editSkills.filter((_, i) => i !== index);
//     setEditSkills(updatedSkills);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg shadow-xl border relative flex flex-col md:flex-row w-full max-w-4xl mx-4 my-8 md:my-16 lg:my-24 h-[calc(100vh-8rem)] md:h-[calc(100vh-6rem)] lg:h-[calc(100vh-8rem)]">
//         <div className="w-full md:w-1/2 flex-shrink-0">
//           <img
//             src="https://images.unsplash.com/photo-1602578558883-a40f8c22b3a0?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzJTIwb24lMjB0YWJsZXxlbnwwfHwwfHx8MA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
//             alt="Modal Visual"
//             className="h-full w-full object-cover"
//           />
//         </div>
//         <div className="w-full md:w-1/2 flex-shrink-0 p-6">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//             Edit Skills
//           </h2>
//           <ul className="mb-6">
//             {editSkills.map((skill, index) => (
//               <li
//                 key={index}
//                 className="flex justify-between items-center mb-2"
//               >
//                 <span>{skill}</span>
//                 <FaTrash
//                   className="cursor-pointer text-red-500 hover:text-red-700"
//                   onClick={() => handleDeleteSkill(index)}
//                 />
//               </li>
//             ))}
//           </ul>
//           <div className="mb-4">
//             <input
//               type="text"
//               className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               value={newSkill}
//               onChange={(e) => setNewSkill(e.target.value)}
//               placeholder="Add a new skill"
//             />
//           </div>
//           <button
//             className="px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105 mb-4"
//             onClick={handleAddSkill}
//           >
//             Add Skill
//           </button>
//           <div className="flex justify-end space-x-4 mt-6">
//             <button
//               className="px-4 py-2 bg-gray-300 text-gray-800 text-sm font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105"
//               onClick={onCancel}
//             >
//               Cancel
//             </button>
//             <button
//               className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105"
//               onClick={handleSave}
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillsModal;

import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";

const SkillsModal = ({
  isOpen,
  skills,
  onSave,
  onCancel,
  courseId,
  onDelete,
}) => {
  const [editSkills, setEditSkills] = useState(skills);
  const [newSkill, setNewSkill] = useState("");

  useEffect(() => {
    if (isOpen) {
      setEditSkills(skills);
    }
  }, [isOpen, skills]);

  const handleSave = async () => {
    try {
      if (newSkill.trim()) {
        // Create a new skill object with a temporary ID
        const newSkillObj = {
          id: Date.now(), // Temporary ID
          name: newSkill,
          course: courseId,
        };

        // Pass the new skill back to the parent and get the result
        const result = await onSave(newSkillObj);

        // Check if the result includes an ID and update the local state
        if (result && result.id) {
          const updatedSkill = { ...newSkillObj, id: result.id };
          const updatedSkills = [...editSkills, updatedSkill];
          setEditSkills(updatedSkills);
        } else {
          console.error("Failed to retrieve ID from result:", result);
        }

        // Clear the input field
        setNewSkill("");

        // Close the modal
        onCancel();
      }
    } catch (error) {
      console.error("Failed to save skill:", error);
    }
  };

  const handleDeleteSkill = async (id) => {
    try {
      await onDelete(id);
      const updatedSkills = editSkills.filter((skill) => skill.id !== id);
      setEditSkills(updatedSkills);
    } catch (error) {
      console.error("Failed to delete skill:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl border relative flex flex-col md:flex-row w-full max-w-4xl mx-4 my-8 md:my-16 lg:my-24 h-[calc(100vh-8rem)] md:h-[calc(100vh-6rem)] lg:h-[calc(100vh-8rem)]">
        <div className="w-full md:w-1/2 flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1602578558883-a40f8c22b3a0?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzJTIwb24lMjB0YWJsZXxlbnwwfHwwfHx8MA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
            alt="Modal Visual"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex-shrink-0 p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Edit Skills
          </h2>
          <ul className="mb-6">
            {editSkills.map((skill) => (
              <li
                key={skill.id}
                className="flex justify-between items-center mb-2"
              >
                <span>{skill.name}</span>
                <FaTrash
                  className="cursor-pointer text-red-500 hover:text-red-700"
                  onClick={() => handleDeleteSkill(skill.id)}
                />
              </li>
            ))}
          </ul>
          <div className="mb-4">
            <input
              type="text"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Add a new skill"
            />
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <button
              className="px-4 py-2 bg-gray-300 text-gray-800 text-sm font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsModal;
