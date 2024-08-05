import React, { useState } from "react";

const SkillsSection = () => {
  const [skills, setSkills] = useState(["Django", "React", "JavaScript"]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-semibold mb-2">Top Skills</h3>
      <div className="flex flex-wrap gap-2 mb-4" id="skillsContainer">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-200 p-2 rounded flex items-center"
          >
            {skill}
            <button
              onClick={() => removeSkill(skill)}
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
          className="w-full p-2 border rounded"
          placeholder="Add new skills"
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={addSkill}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Skill
        </button>
      </div>
    </div>
  );
};

export default SkillsSection;
