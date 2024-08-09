import React, { useState, useEffect } from "react";
import {
  addSkillFetch,
  deleteSkillFetch,
} from "../../../../fetching/profileFetch";
import { useToast } from "@/components/ui/use-toast";

const SkillsSection = ({ skills: initialSkills = [] }) => {
  const { toast } = useToast();
  const [skillList, setSkillList] = useState([]);

  useEffect(() => {
    setSkillList(initialSkills);
  }, [initialSkills]);

  const [newSkill, setNewSkill] = useState("");

  // console.log(initialSkills, "initialSkills", skillList, "skillList");

  const addSkill = async () => {
    if (newSkill.trim()) {
      const skillData = { name: newSkill, skill_type: "top" };

      try {
        const response = await addSkillFetch(skillData);
        if (response.status === 201) {
          setSkillList([...skillList, response.data]);
          toast({ title: "Skill Added" });
        }
      } catch (error) {
        console.error("Error adding skill:", error);
        toast({ title: "Error adding skill", variant: "destructive" });
      }

      setNewSkill("");
    }
  };

  const removeSkill = async (skillId) => {
    try {
      const response = await deleteSkillFetch(skillId);
      if (response.status === 204) {
        setSkillList(skillList.filter((skill) => skill.id !== skillId));
        toast({ title: "Skill Deleted" });
      }
    } catch (error) {
      console.error("Error deleting skill:", error);
      toast({ title: "Error deleting skill", variant: "destructive" });
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-semibold mb-2">Top Skills</h3>
      <div className="flex flex-wrap gap-2 mb-4" id="skillsContainer">
        {skillList &&
          skillList.map((skill) => (
            <span
              key={skill.id}
              className="bg-gray-200 p-2 rounded flex items-center"
            >
              {skill.name}
              <button
                onClick={() => removeSkill(skill.id)}
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
          placeholder="Add new skill"
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
