import React, { useState } from "react";
import { addExperianceFetch } from "../../../../fetching/profileFetch";
import { useToast } from "@/components/ui/use-toast";

const workTypeOptions = [
  { value: "Internship", label: "Internship" },
  { value: "Full Time", label: "Full Time" },
  { value: "Part Time", label: "Part Time" },
  { value: "Contract", label: "Contract" },
];

const ExperienceForm = () => {
  const { toast } = useToast();
  // Define state variables for each field
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [company_name, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [work_type, setWorkType] = useState("");

  // Handle form submission
  const handleSave = async () => {
    const experienceData = {
      start_date,
      end_date,
      company_name,
      role,
      location,
      work_type,
    };
    await addExperianceFetch(experienceData).then((res) => {
      console.log(res);
      if (res.status === 201) {
        console.log("Experience added successfully");
        toast({
          title: "Experiance Added",
        });
      }
    });

    setStartDate("");
    setEndDate("");
    setCompanyName("");
    setRole("");
    setLocation("");
    setWorkType("");
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Add Experience</h2>
      <div className="grid grid-cols-1 gap-4">
        <div className="flex flex-col">
          <label className="font-medium text-gray-700 mb-1">
            Company Name:
          </label>
          <input
            type="text"
            value={company_name}
            onChange={(e) => setCompanyName(e.target.value)}
            className="border border-gray-300 rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-gray-700 mb-1">Role:</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border border-gray-300 rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-gray-700 mb-1">Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border border-gray-300 rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-gray-700 mb-1">Work Type:</label>
          <select
            value={work_type}
            onChange={(e) => setWorkType(e.target.value)}
            className="border border-gray-300 rounded-lg p-2"
          >
            <option value="" disabled>
              Select Work Type
            </option>
            {workTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-gray-700 mb-1">Start Date:</label>
          <input
            type="date"
            value={start_date}
            onChange={(e) => setStartDate(e.target.value)}
            className="border border-gray-300 rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-gray-700 mb-1">End Date:</label>
          <input
            type="date"
            value={end_date}
            onChange={(e) => setEndDate(e.target.value)}
            className="border border-gray-300 rounded-lg p-2"
          />
        </div>
      </div>
      <div className="mt-6 text-right">
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ExperienceForm;
