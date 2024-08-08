import React, { useState } from "react";
import {
  addExperianceFetch,
  addLanguageFetch,
  addSkillFetch,
  deleteExperianceFetch,
  deleteLanguageFetch,
  deleteSkillFetch,
  updateExperianceFetch,
  updateLanguageFetch,
  updateSkillFetch,
} from "../../../../fetching/profileFetch";
import { useToast } from "@/components/ui/use-toast";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

const skillTypeOption = [
  { value: "beginner", label: "beginner" },
  { value: "intermediate", label: "intermediate" },
  { value: "advanced", label: "advanced" },
  { value: "native", label: "native" },
];

const LangForm = ({ expData }) => {
  const { toast } = useToast();

  const [lang, setLang] = useState(expData || []);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("");
  const [currentExperienceId, setCurrentExperienceId] = useState(null);

  const resetForm = () => {
    setTitle("");
    setLevel("");
  };

  const handleAddExperience = async () => {
    const skillData = {
      title,
      level,
    };

    await addLanguageFetch(skillData).then((res) => {
      console.log(res);
      if (res.status === 201) {
        console.log(res);
        console.log(res.data);
        const newData = res.data;
        resetForm();
        toast({ title: "Skill Added" });
        setLang([...lang, newData]);

        // setLang([...lang, skillData]);
      }
    });
  };

  const handleEditExperience = async (id) => {
    const skillData = {
      title,
      level,
    };
    console.log(id);

    await updateLanguageFetch(skillData, id).then((res) => {
      console.log(res);
      if (res.status === 200) {
        const newData = res.data;

        const updateSkill = lang.map((exp) =>
          exp.id === currentExperienceId ? { ...exp, ...newData } : exp
        );
        toast({ title: "Skill Updated" });
        setLang(updateSkill);
      }
    });

    resetForm();
    setIsEditing(false);
    setCurrentExperienceId(null);
  };

  const handleEdit = (exp) => {
    setTitle(exp.title);
    setLevel(exp.level);
    setIsEditing(true);
    setCurrentExperienceId(exp.id);
    console.log(exp.id, "her");
  };

  const handleDelete = async (id) => {
    await deleteLanguageFetch(id).then((res) => {
      if (res.status === 204) {
        toast({ title: "Experience Deleted" });
      }
    });

    console.log(id);
    setLang(lang.filter((exp) => exp.id !== id));
  };

  return (
    <div className="final mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Language</h2>

      <div className="mt-6 text-right ">
        <Popover>
          <PopoverTrigger>
            <div className=" bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">
              Add Language
            </div>
          </PopoverTrigger>
          <PopoverContent className={"w-full  border-2 border-black"}>
            <div className="p-4 ">
              <div className="grid grid-cols-2  gap-4">
                <div className="flex flex-col">
                  <label className="font-medium text-gray-700 mb-1">
                    language
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-medium text-gray-700 mb-1">
                    level:
                  </label>
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2"
                  >
                    <option value="" disabled>
                      Select language level
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
                Add New Language
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="mt-8">
        {lang.map((exp, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
            <div className="flex justify-between">
              <span>{exp.title}</span>
            </div>
            <div className="flex justify-between">
              <span>{exp.level}</span>
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
                          language
                        </label>
                        <input
                          type="text"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          className="border border-gray-300 rounded-lg p-2"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label className="font-medium text-gray-700 mb-1">
                          level:
                        </label>
                        <select
                          value={level}
                          onChange={(e) => setLevel(e.target.value)}
                          className="border border-gray-300 rounded-lg p-2"
                        >
                          <option value="" disabled>
                            Select language Level
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
                      Edit Language
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

export default LangForm;
