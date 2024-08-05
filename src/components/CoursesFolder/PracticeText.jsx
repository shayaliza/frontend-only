import React, {useState} from 'react';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css'; 

function PracticeText() {
    const [editorValue, setEditorValue] = useState('');

  const handleChange = (value) => {
    setEditorValue(value);
  };

  return (
    <div className="w-full mx-auto p-4">
      <div className="w-full flex border">
        <div className="w-1/2 p-4 flex flex-col gap-4">
        <div className="">
          <h2 className="text-2xl font-bold text-gray-800">Title</h2>
          <input
            type="text"
            value="Test"
            className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="h-full overflow-auto border-none">
      <ReactQuill
        value={editorValue}
        onChange={handleChange}
        className="h-full "
      />
      </div>
        </div>
        <div className="w-1/2">
          <iframe
            frameBorder="0"
            height="600px"
            src="https://onecompiler.com/embed/python"
            width="100%"
            className=" shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default PracticeText