import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CourseOverviewModal = ({ isOpen, overview, onSave, onCancel }) => {
  const [editValue, setEditValue] = useState(overview);

  const handleSave = () => {
    onSave(editValue);
    onCancel();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl border relative flex flex-col md:flex-row w-full max-w-4xl mx-4 my-8 md:my-16 lg:my-24 h-[calc(100vh-8rem)] md:h-[calc(100vh-6rem)] lg:h-[calc(100vh-8rem)]">
        <div className="w-full md:w-1/2 flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1602578558883-a40f8c22b3a0?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzJTIwb24lMjB0YWJsZXxlbnwwfHwwfHx8MA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
            alt="Modal Visual"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex-shrink-0 p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Edit Course Overview
          </h2>
          <div className="mb-6">
            <ReactQuill value={editValue} onChange={setEditValue} />
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <button
              className="px-4 py-2 bg-gray-300 text-gray-800 text-sm font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverviewModal;
