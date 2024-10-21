import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Fifth() {
  const navigate = useNavigate();

  const [emailFields, setEmailFields] = useState([
    { email: "", role: "Admin" },
  ]);

  // Handle email input change
  const handleEmailChange = (index, event) => {
    const values = [...emailFields];
    values[index].email = event.target.value;
    setEmailFields(values);
  };

  // Handle role selection change
  const handleRoleChange = (index, event) => {
    const values = [...emailFields];
    values[index].role = event.target.value;
    setEmailFields(values);
  };

  // Add another email field
  const handleAddField = () => {
    setEmailFields([...emailFields, { email: "", role: "Admin" }]);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left section */}
      <div className="lg:w-2/3 w-full flex flex-col px-8 lg:px-24 h-full justify-between">
        <div>
          {/* Logo Section */}
          <div className="mb-8 mt-8">
            <div>Techsnap org logo</div>
          </div>

          {/* Heading Section */}
          <h1 className="text-2xl lg:text-3xl font-semibold mb-8">
            Who else is on your team?
          </h1>

          {/* Radio Buttons Section */}
          <div className="space-y-4">
            {emailFields.map((field, index) => (
              <div key={index} className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Add email here"
                  value={field.email}
                  onChange={(event) => handleEmailChange(index, event)}
                  className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="relative">
                  <select
                    value={field.role}
                    onChange={(event) => handleRoleChange(index, event)}
                    className="border border-gray-300 rounded-md px-4 py-2 w-32 appearance-none"
                  >
                    <option value="Admin">Admin</option>
                    <option value="Editor">Editor</option>
                    <option value="Viewer">Viewer</option>
                  </select>

                  {/* Custom Arrow Icon */}
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddField}
              className="text-blue-500 flex items-center space-x-2"
            >
              <span className="text-xl">+</span>
              <span>Add another</span>
            </button>
          </div>
        </div>

        {/* Continue Button Section */}
        <div className="w-full mb-8">
          <div className="flex justify-between">
            <button
              onClick={() => {
                navigate("/organization/fourth");
              }}
              className="bg-gray-300 text-gray-600 px-6 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in"
            >
              Remind me later
            </button>
            <button
              onClick={() => {
                navigate("/organization/sixth");
              }}
              className="bg-gray-300 text-gray-600 px-6 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in"
            >
              Invite your team
            </button>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="hidden lg:w-1/3 w-full bg-green-500 md:flex items-center justify-center lg:min-h-full">
        <div className="relative">
          <img
            src="https://dummyimage.com/400x400/00ff00"
            alt="Illustration"
            className="w-64 lg:w-96"
          />
        </div>
      </div>
    </div>
  );
}

export default Fifth;
