import React, { useState } from "react";
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

const LangForm = ({
  languageData,
  onAddLanguage,
  onEditLanguage,
  onDeleteLanguage,
}) => {
  const { toast } = useToast();

  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentLanguageId, setCurrentLanguageId] = useState(null);

  const resetForm = () => {
    setTitle("");
    setLevel("");
  };

  const handleAddLanguage = () => {
    const languageData = { title, level };
    onAddLanguage(languageData);
    resetForm();
    toast({ title: "Language Added" });
  };

  const handleEditLanguage = () => {
    const languageData = { title, level };
    onEditLanguage(currentLanguageId, languageData);
    resetForm();
    setIsEditing(false);
    setCurrentLanguageId(null);
    toast({ title: "Language Updated" });
  };

  const handleEdit = (lang) => {
    setTitle(lang.title);
    setLevel(lang.level);
    setIsEditing(true);
    setCurrentLanguageId(lang.id);
  };

  const handleDelete = (id) => {
    onDeleteLanguage(id);
    toast({ title: "Language Deleted" });
  };

  return (
    <div className="final mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Language</h2>

      <div className="mt-6 text-right">
        <Popover>
          <PopoverTrigger>
            <div className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">
              Add Language
            </div>
          </PopoverTrigger>
          <PopoverContent className={"w-full border-2 border-black"}>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="font-medium text-gray-700 mb-1">
                    Language
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
                    Level
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
                onClick={isEditing ? handleEditLanguage : handleAddLanguage}
                className={`bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 mt-4 cursor-pointer ${
                  !title || !level ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isEditing ? "Update Language" : "Add New Language"}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="mt-8">
        {languageData &&
          languageData.map((lang, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
              <div className="flex justify-between">
                <span>{lang.title}</span>
              </div>
              <div className="flex justify-between">
                <span>{lang.level}</span>
              </div>
              <div className="flex justify-end gap-5 mt-2">
                <div
                  className="bg-red-500 p-2 rounded-md text-white cursor-pointer"
                  onClick={() => handleDelete(lang.id)}
                >
                  Delete
                </div>
                <Popover>
                  <PopoverTrigger>
                    <div
                      className="text-blue-500 cursor-pointer"
                      onClick={() => handleEdit(lang)}
                    >
                      <div className="bg-green-500 p-2 rounded-md text-white">
                        Edit
                      </div>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className={"w-full border-2 border-black"}>
                    <div className="p-4 w-full">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                          <label className="font-medium text-gray-700 mb-1">
                            Language
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
                            Level
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
                        onClick={handleEditLanguage}
                        className={`bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 mt-4 cursor-pointer ${
                          !title || !level
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                      >
                        Update Language
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
