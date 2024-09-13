import React, { useState } from "react";
import {
  addRecommendationFetch,
  deleteRecommendationFetch,
  updateRecommendationFetch,
} from "../../../../fetching/profileFetch";
import { useToast } from "@/components/ui/use-toast";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

const RecommendationForm = ({ expData }) => {
  const { toast } = useToast();

  const [recommendation, setRecommendation] = useState(expData || []);

  const [isEditing, setIsEditing] = useState(false);
  const [recommended_to, setRecommended_to] = useState("");
  const [relationship, setRelationship] = useState("");
  const [position_at_time, setPosition_at_time] = useState("");
  const [text, setText] = useState("");
  const [experience, setExperience] = useState("");

  const [currentExperienceId, setCurrentExperienceId] = useState(null);

  const resetForm = () => {
    setRecommended_to("");
    setRelationship("");
    setPosition_at_time("");
    setText("");
    setExperience("");
  };

  const relationshipOptions = [
    { value: "manager", label: "manager" },
    { value: "colleague", label: "colleague" },
    { value: "mentor", label: "mentor" },
    { value: "subordinate", label: "subordinate" },
    { value: "other", label: "other" },
  ];
  const handleAddExperience = async () => {
    const workData = {
      recommended_to,
      relationship,
      position_at_time,
      text,
      experience,
    };

    await addRecommendationFetch(workData).then((res) => {
      console.log(res);
      if (res.status === 201) {
        console.log(res);
        resetForm();
        toast({ title: "Skill Added" });
        setRecommendation([...recommendation, workData]);
        // setSkills([...skills, skillData]);
      }
    });
  };

  const handleEditExperience = async (id) => {
    const workData = {
      recommended_to,
      relationship,
      position_at_time,
      text,
      experience,
    };
    console.log(id);

    await updateRecommendationFetch(workData, id).then((res) => {
      console.log(res);
      if (res.status === 200) {
        toast({ title: "Work Proof Updated" });
        const updateSkill = recommendation.map((exp) =>
          exp.id === currentExperienceId ? { ...exp, ...workData } : exp
        );
        setRecommendation(updateSkill);
      }
    });

    resetForm();
    setIsEditing(false);
    setCurrentExperienceId(null);
  };

  const handleEdit = (exp) => {
    setTitle(exp.title);
    setLink(exp.link);
    setIsEditing(true);
    setCurrentExperienceId(exp.id);
  };

  const handleDelete = async (id) => {
    await deleteRecommendationFetch(id).then((res) => {
      if (res.status === 204) {
        toast({ title: "Experience Deleted" });
      }
    });

    console.log(id);
    setRecommendation(recommendation.filter((exp) => exp.id !== id));
  };

  return (
    <div className="final mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Give Recommendation</h2>

      <div className="mt-6 text-right ">
        <Popover>
          <PopoverTrigger>
            <div className=" bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">
              Add Work Proof
            </div>
          </PopoverTrigger>
          <PopoverContent className={"w-full  border-2 border-black"}>
            <div className="p-4 ">
              <div className="grid grid-cols-2  gap-4">
                <div className="flex flex-col">
                  <label className="font-medium text-gray-700 mb-1">
                    Recommended to
                  </label>
                  <input
                    type="text"
                    value={recommended_to}
                    onChange={(e) => setRecommended_to(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium text-gray-700 mb-1">
                    RelationShip
                  </label>
                  <select
                    value={relationship}
                    onChange={(e) => setRelationship(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2"
                  >
                    <option value="" disabled>
                      Select RelationShip
                    </option>
                    {relationshipOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="font-medium text-gray-700 mb-1">
                    Current Position
                  </label>
                  <input
                    type="text"
                    value={position_at_time}
                    onChange={(e) => setPosition_at_time(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium text-gray-700 mb-1">Text</label>
                  <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium text-gray-700 mb-1">
                    experience
                  </label>
                  <input
                    type="text"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2"
                  />
                </div>
              </div>
              <div
                onClick={handleAddExperience}
                className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 mt-4"
              >
                Add new Recommendation
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="mt-8">
        {recommendation.map((exp, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
            <div className="flex justify-between">
              <span>{exp.recommended_to}</span>
            </div>
            <div className="flex justify-between">
              <span>{exp.relationship}</span>
            </div>
            <div className="flex justify-between">
              <span>{exp.position_at_time}</span>
            </div>
            <div className="flex justify-between">
              <span>{exp.text}</span>
            </div>
            <div className="flex justify-between">
              <span>{exp.experience}</span>
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
                          Recommended to
                        </label>
                        <input
                          type="text"
                          value={recommended_to}
                          onChange={(e) => setRecommended_to(e.target.value)}
                          className="border border-gray-300 rounded-lg p-2"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-medium text-gray-700 mb-1">
                          RelationShip
                        </label>
                        <select
                          value={relationship}
                          onChange={(e) => setRelationship(e.target.value)}
                          className="border border-gray-300 rounded-lg p-2"
                        >
                          <option value="" disabled>
                            Select RelationShip
                          </option>
                          {relationshipOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <label className="font-medium text-gray-700 mb-1">
                          Current Position
                        </label>
                        <input
                          type="text"
                          value={position_at_time}
                          onChange={(e) => setPosition_at_time(e.target.value)}
                          className="border border-gray-300 rounded-lg p-2"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-medium text-gray-700 mb-1">
                          Text
                        </label>
                        <input
                          type="text"
                          value={text}
                          onChange={(e) => setText(e.target.value)}
                          className="border border-gray-300 rounded-lg p-2"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-medium text-gray-700 mb-1">
                          experience
                        </label>
                        <input
                          type="number"
                          value={experience}
                          onChange={(e) => setExperience(e.target.value)}
                          className="border border-gray-300 rounded-lg p-2"
                        />
                      </div>
                    </div>
                    <div
                      onClick={() => handleEditExperience(exp.id)}
                      className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 mt-4"
                    >
                      Edit Reommendation
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

export default RecommendationForm;
