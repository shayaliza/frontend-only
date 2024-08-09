import React, { useState } from "react";

const SkillsSection = ({ skills, onAddSkill, onRemoveSkill }) => {
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      onAddSkill(newSkill);
      setNewSkill(""); // Reset the input field
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && newSkill.trim()) {
      handleAddSkill();
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-semibold mb-2">Top Skills</h3>
      <div className="flex flex-wrap gap-2 mb-4" id="skillsContainer">
        {skills.map((skill) => (
          <span
            key={skill.id}
            className="bg-gray-200 p-2 rounded flex items-center"
          >
            {skill.name}
            <button
              onClick={() => onRemoveSkill(skill.id)}
              className="ml-2 text-red-500"
            >
              &times;
            </button>
          </span>
        ))}
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full p-2 border rounded"
          placeholder="Add new skill"
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleAddSkill}
          disabled={!newSkill.trim()}
          className={`px-4 py-2 rounded ${
            newSkill.trim()
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Add Skill
        </button>
      </div>
    </div>
  );
};

export default SkillsSection;
