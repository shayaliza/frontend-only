import React, { useState } from 'react';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css'; 

const MyEditor = () => {
  const [editorValue, setEditorValue] = useState('');

  const handleChange = (value) => {
    setEditorValue(value);
  };

  return (
    <div className="w-full mx-auto p-10 min-h-screen">
        <div className="w-full flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-gray-800">Title</h2>
          <input
            type="text"
            value="Test"
            className="mt-2 w-full p-2 border border-gray-300 rounded-md"
          />
          <div className="h-[50vh] border-none">
      <ReactQuill
        value={editorValue}
        onChange={handleChange}
        className="h-full "
      />
      </div>
    </div>
    </div>
  );
};

export default MyEditor;
