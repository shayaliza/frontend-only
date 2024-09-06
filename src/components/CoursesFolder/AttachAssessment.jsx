import React, { useState } from 'react';

const AttachAssessment = () => {
  const [assessmentTitle, setAssessmentTitle] = useState('');
  const [assessmentDescription, setAssessmentDescription] = useState('');
  const [assessmentFile, setAssessmentFile] = useState(null);

  const handleFileChange = (e) => {
    setAssessmentFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Assessment Title:', assessmentTitle);
    console.log('Assessment Description:', assessmentDescription);
    console.log('Assessment File:', assessmentFile);

 
    setAssessmentTitle('');
    setAssessmentDescription('');
    setAssessmentFile(null);
  };

  return (
    <div className="mx-auto p-4 lg:p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Attach Assessment</h1>
      
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-xl font-semibold text-gray-800 mb-2" htmlFor="assessmentTitle">
            Assessment Title
          </label>
          <input
            type="text"
            id="assessmentTitle"
            value={assessmentTitle}
            onChange={(e) => setAssessmentTitle(e.target.value)}
            className="w-full p-2 border rounded-lg border-gray-300"
            placeholder="Enter assessment title"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-xl font-semibold text-gray-800 mb-2" htmlFor="assessmentDescription">
            Assessment Description
          </label>
          <textarea
            id="assessmentDescription"
            value={assessmentDescription}
            onChange={(e) => setAssessmentDescription(e.target.value)}
            rows="4"
            className="w-full p-2 border rounded-lg border-gray-300"
            placeholder="Enter assessment description"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-xl font-semibold text-gray-800 mb-2" htmlFor="assessmentFile">
            Attach File
          </label>
          <input
            type="file"
            id="assessmentFile"
            onChange={handleFileChange}
            className="w-full border rounded-lg border-gray-300"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Submit Assessment
        </button>
      </form>
    </div>
  );
};

export default AttachAssessment;
