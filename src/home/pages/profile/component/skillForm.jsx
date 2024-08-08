import React, { useState } from "react";
import {
  addExperianceFetch,
  addSkillFetch,
  deleteExperianceFetch,
  deleteSkillFetch,
  updateExperianceFetch,
  updateSkillFetch,
} from "../../../../fetching/profileFetch";
import { useToast } from "@/components/ui/use-toast";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

const skillTypeOption = [
  { value: "current", label: "current" },
  { value: "top", label: "top" },
  { value: "default", label: "default" },
];

const SkillForm = ({ expData }) => {
  const { toast } = useToast();

  const [skills, setSkills] = useState(expData || []);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [skill_type, setSkill_type] = useState("");
  const [currentExperienceId, setCurrentExperienceId] = useState(null);

  const resetForm = () => {
    setName("");
    setSkill_type("");
  };

  const handleAddExperience = async () => {
    const skillData = {
      name,
      skill_type,
    };

    await addSkillFetch(skillData).then((res) => {
      console.log(res);
      if (res.status === 201) {
        console.log(res);
        resetForm();
        toast({ title: "Skill Added" });
        setSkills([...skills, skillData]);
      }
    });
  };

  const handleEditExperience = async (id) => {
    const skillData = {
      name,
      skill_type,
    };
    console.log(id);

    await updateSkillFetch(skillData, id).then((res) => {
      console.log(res);
      if (res.status === 200) {
        toast({ title: "Skill Updated" });
        const updateSkill = skills.map((exp) =>
          exp.id === currentExperienceId ? { ...exp, ...skillData } : exp
        );
        setSkills(updateSkill);
      }
    });

    resetForm();
    setIsEditing(false);
    setCurrentExperienceId(null);
  };

  const handleEdit = (exp) => {
    setName(exp.name);
    setSkill_type(exp.skill_type);
    setIsEditing(true);
    setCurrentExperienceId(exp.id);
  };

  const handleDelete = async (id) => {
    await deleteSkillFetch(id).then((res) => {
      if (res.status === 204) {
        toast({ title: "Experience Deleted" });
      }
    });

    console.log(id);
    setSkills(skills.filter((exp) => exp.id !== id));
  };

  return (
    <div className="final mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Skill</h2>

      <div className="mt-6 text-right ">
        <Popover>
          <PopoverTrigger>
            <div className=" bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">
              Add Skill
            </div>
          </PopoverTrigger>
          <PopoverContent className={"w-full  border-2 border-black"}>
            <div className="p-4 ">
              <div className="grid grid-cols-2  gap-4">
                <div className="flex flex-col">
                  <label className="font-medium text-gray-700 mb-1">
                    Name:
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-medium text-gray-700 mb-1">
                    Skill Type:
                  </label>
                  <select
                    value={skill_type}
                    onChange={(e) => setSkill_type(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2"
                  >
                    <option value="" disabled>
                      Select Work Type
                    </option>
                    {skillTypeOption.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div
                onClick={handleAddExperience}
                className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 mt-4"
              >
                Create New Skill
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="mt-8">
        {skills.map((exp, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
            <div className="flex justify-between">
              <span>{exp.name}</span>
            </div>
            <div className="flex justify-between">
              <span>{exp.skill_type}</span>
            </div>
            <div className="flex justify-between">
              {/* <span>{exp.end_date}</span> */}
            </div>
            <div className="flex justify-end gap-5  mt-2">
              <div
                className="bg-red-500 p-2 rounded-md text-white cursor-pointer"
                onClick={() => handleDelete(exp.id)}
              >
                delete
              </div>
              <Popover>
                <PopoverTrigger>
                  <div
                    className="text-blue-500 mr-4"
                    onClick={() => handleEdit(exp)}
                  >
                    <div className="bg-green-500 p-2 rounded-md text-white">
                      Edit
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent className={"w-full  border-2 border-black"}>
                  <div className="p-4 w-full">
                    {/* Edit Experience Form */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label className="font-medium text-gray-700 mb-1">
                          Name:
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="border border-gray-300 rounded-lg p-2"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label className="font-medium text-gray-700 mb-1">
                          Skill Type:
                        </label>
                        <select
                          value={skill_type}
                          onChange={(e) => setSkill_type(e.target.value)}
                          className="border border-gray-300 rounded-lg p-2"
                        >
                          <option value="" disabled>
                            Select Work Type
                          </option>
                          {skillTypeOption.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div
                      onClick={() => handleEditExperience(exp.id)}
                      className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 mt-4"
                    >
                      Edit Skill
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillForm;
