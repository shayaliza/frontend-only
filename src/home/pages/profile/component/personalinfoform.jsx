import React from "react";

const PersonalInfoForm = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-semibold mb-2">Personal Information</h3>
      <form>
        <div className="mb-4">
          <label className="block mb-1">Full Name</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Headline</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label className="block mb-1">Country</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div className="w-1/2 ml-2">
            <label className="block mb-1">State</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Phone Number</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Visibility</label>
          <select className="w-full p-2 border rounded">
            <option>Private</option>
            <option>Public</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1">About</label>
          <textarea className="w-full p-2 border rounded"></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
          >
            Cancel changes
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
