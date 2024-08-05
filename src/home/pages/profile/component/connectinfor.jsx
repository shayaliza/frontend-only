import React from "react";

const ConnectInfoSection = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-semibold mb-2">Connect Information</h3>
      <form>
        <div className="mb-4">
          <label className="block mb-1">GitHub URL</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">LinkedIn URL</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Portfolio URL</label>
          <input type="text" className="w-full p-2 border rounded" />
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

export default ConnectInfoSection;
