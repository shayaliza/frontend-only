import React, { useState } from 'react';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({
    addStudio: false,
    addProject: false,
    addAssessment: false,
    allowCopyPaste: false,
    trackTime: false,
    noCompiler: false,
  });

  const handleOptionChange = (e) => {
    setSelectedOptions({
      ...selectedOptions,
      [e.target.name]: e.target.checked,
    });
  };

  const Tab1 = () => {
    return (
      <div className="p-2 lg:p-8 max-w-xl">
  <h1 className="text-3xl font-bold text-gray-900 mb-3">Course Settings</h1>

  <div className="bg-white p-5 border rounded-md shadow-md mb-4 hover:shadow-lg transition-shadow duration-200 ease-in-out">
    <label className="flex items-center space-x-4">
      <input
        type="checkbox"
        name="addStudio"
        checked={selectedOptions.addStudio}
        onChange={handleOptionChange}
        className="form-checkbox h-5 w-5 text-indigo-600"
      />
      <span className="text-lg font-medium text-gray-700">Add Studio</span>
    </label>
  </div>

  <div className="bg-white p-5 border rounded-md shadow-md mb-4 hover:shadow-lg transition-shadow duration-200 ease-in-out">
    <label className="flex items-center space-x-4">
      <input
        type="checkbox"
        name="addProject"
        checked={selectedOptions.addProject}
        onChange={handleOptionChange}
        className="form-checkbox h-5 w-5 text-indigo-600"
      />
      <span className="text-lg font-medium text-gray-700">Add Project</span>
    </label>
  </div>

  <div className="bg-white p-5 border rounded-md shadow-md mb-4 hover:shadow-lg transition-shadow duration-200 ease-in-out">
    <label className="flex items-center space-x-4">
      <input
        type="checkbox"
        name="addAssessment"
        checked={selectedOptions.addAssessment}
        onChange={handleOptionChange}
        className="form-checkbox h-5 w-5 text-indigo-600"
      />
      <span className="text-lg font-medium text-gray-700">Add Assessment</span>
    </label>
  </div>

  <div className="bg-white p-5 border rounded-md shadow-md mb-4 hover:shadow-lg transition-shadow duration-200 ease-in-out">
    <label className="flex items-center space-x-4">
      <input
        type="checkbox"
        name="allowCopyPaste"
        checked={selectedOptions.allowCopyPaste}
        onChange={handleOptionChange}
        className="form-checkbox h-5 w-5 text-indigo-600"
      />
      <span className="text-lg font-medium text-gray-700">Allow Copy-Paste</span>
    </label>
  </div>

  <div className="bg-white p-5 border rounded-md shadow-md mb-4 hover:shadow-lg transition-shadow duration-200 ease-in-out">
    <label className="flex items-center space-x-4">
      <input
        type="checkbox"
        name="trackTime"
        checked={selectedOptions.trackTime}
        onChange={handleOptionChange}
        className="form-checkbox h-5 w-5 text-indigo-600"
      />
      <span className="text-lg font-medium text-gray-700">Track Time</span>
    </label>
  </div>

  <div className="bg-white p-5 border rounded-md shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
    <label className="flex items-center space-x-4">
      <input
        type="checkbox"
        name="noCompiler"
        checked={selectedOptions.noCompiler}
        onChange={handleOptionChange}
        className="form-checkbox h-5 w-5 text-indigo-600"
      />
      <span className="text-lg font-medium text-gray-700">No Compiler</span>
    </label>
  </div>
</div>

    );
  };

  const tabs = [
    { title: 'Setting1', content: <Tab1 /> },
    { title: 'Setting2', content: 'Content of setting2' },
    { title: 'Setting3', content: 'Content of setting3' },
  ];

  return (
    <div className="py-4 px-10">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm font-medium text-gray-600 focus:outline-none ${
              activeTab === index
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'hover:text-blue-500'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="p-4 bg-white border border-gray-200 mt-2 rounded-md shadow">
        {tabs[activeTab].content}
        <div className="mt-2 flex justify-center items-center">
        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105">
        <span className="flex items-center">
          Save settings
        </span>
      </button>
      </div>
      </div>
      
    </div>
  );
};

export default TabComponent;
