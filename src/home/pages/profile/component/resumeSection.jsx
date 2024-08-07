import React, { useState } from "react";
import { createOrUpdateProfile } from "./../../../../fetching/profileFetch";

const ResumeSection = () => {
  const [resumeFile, setResumeFile] = useState(null);

  const handleResumeChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSaveChanges = async () => {
    if (resumeFile) {
      console.log("Resume file:", resumeFile);
    }
    if (resumeFile) {
      resumeFile;
      try {
        const response = await createOrUpdateProfile({}, null, resumeFile);
        console.log("Resume uploaded successfully:", response.data);
      } catch (error) {
        console.error("Error uploading resume:", error);
      }
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-semibold mb-2">Current Resume</h3>
      <div className="flex items-center border p-2 rounded mb-2">
        <input
          type="file"
          id="uploadResume"
          className="hidden"
          onChange={handleResumeChange}
        />
        <button
          onClick={() => document.getElementById("uploadResume").click()}
          className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
        >
          Upload new Resume
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Remove Resume
        </button>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
        >
          Cancel changes
        </button>
        <button
          type="button"
          onClick={handleSaveChanges}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save changes
        </button>
      </div>
    </div>
  );
};

export default ResumeSection;
