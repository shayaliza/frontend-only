import React, { useState } from 'react';

const AttachProject = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectFile, setProjectFile] = useState(null);

  const handleFileChange = (e) => {
    setProjectFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Project Name:', projectName);
    console.log('Project Description:', projectDescription);
    console.log('Project File:', projectFile);

    
    setProjectName('');
    setProjectDescription('');
    setProjectFile(null);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 lg:p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Attach Project</h1>
      
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-xl font-semibold text-gray-800 mb-2" htmlFor="projectName">
            Project Name
          </label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="w-full p-2 border rounded-lg border-gray-300"
            placeholder="Enter project name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-xl font-semibold text-gray-800 mb-2" htmlFor="projectDescription">
            Project Description
          </label>
          <textarea
            id="projectDescription"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            rows="4"
            className="w-full p-2 border rounded-lg border-gray-300"
            placeholder="Enter project description"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-xl font-semibold text-gray-800 mb-2" htmlFor="projectFile">
            Attach File
          </label>
          <input
            type="file"
            id="projectFile"
            onChange={handleFileChange}
            className="w-full border rounded-lg border-gray-300"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Submit Project
        </button>
      </form>
    </div>
  );
};

export default AttachProject;
