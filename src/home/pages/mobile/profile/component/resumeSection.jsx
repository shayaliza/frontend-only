import React, { useState, useEffect } from "react";
import { createOrUpdateProfile } from "./../../../../fetching/profileFetch";
import { useToast } from "@/components/ui/use-toast";

const ResumeSection = ({ currentResume }) => {
  const { toast } = useToast();
  const [initialResumeFile, setInitialResumeFile] = useState(currentResume);
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeName, setResumeName] = useState(
    currentResume ? currentResume.split("/").pop() : "No resume uploaded"
  );

  console.log(resumeName, currentResume);

  useEffect(() => {
    if (resumeFile) {
      setResumeName(resumeFile.name);
    } else {
      setResumeName(
        initialResumeFile
          ? initialResumeFile.split("/").pop()
          : "No resume uploaded"
      );
    }
  }, [resumeFile, initialResumeFile]);

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFile(file);
    }
  };

  const handleSaveChanges = async () => {
    if (resumeFile) {
      try {
        const response = await createOrUpdateProfile({}, null, resumeFile);
        const newResumeUrl = response.data.resume_file;
        setInitialResumeFile(newResumeUrl);
        setResumeFile(null);
        setResumeName(newResumeUrl.split("/").pop()); // Extract file name from URL
        toast({
          title: "Resume Updated",
        });
      } catch (error) {
        console.error("Error uploading resume:", error);
        toast({
          title: "Error uploading resume",
          variant: "destructive",
        });
      }
    }
  };

  const handleCancelChanges = () => {
    setResumeFile(null);
  };

  const handleRemoveResume = () => {
    setResumeFile(null);
    setInitialResumeFile(null);
    setResumeName("No resume uploaded");
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
        <button
          onClick={handleRemoveResume}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Remove Resume
        </button>
        <span className="ml-4 text-gray-600">{resumeName}</span>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleCancelChanges}
          className={`bg-gray-300 text-black px-4 py-2 rounded mr-2 ${
            !resumeFile ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={!resumeFile}
        >
          Cancel changes
        </button>
        <button
          type="button"
          onClick={handleSaveChanges}
          className={`bg-blue-500 text-white px-4 py-2 rounded ${
            !resumeFile ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={!resumeFile}
        >
          Save changes
        </button>
      </div>
    </div>
  );
};

export default ResumeSection;
