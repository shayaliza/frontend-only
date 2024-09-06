import React from 'react';

function AddTimeLine() {
  return (
    <div className="flex justify-center items-center px-4 py-2 lg:p-6">
      <div className="bg-white border px-6 lg:p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold my-2 text-center">Add Time Line</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-1">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              placeholder="Enter title"
            />
          </div>
         
          <div className="mb-3">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-1">Description</label>
            <textarea
              id="description"
              name="description"
              rows="3"
              className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              placeholder="Enter description"
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="short-description" className="block text-gray-700 font-bold mb-1">Short Description</label>
            <input
              type="text"
              id="short-description"
              name="short-description"
              className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              placeholder="Enter short description"
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="image-file" className="block text-gray-700 font-bold mb-1">Image</label>
            <input
              type="file"
              id="image-file"
              name="image-file"
              className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="icon-file" className="block text-gray-700 font-bold mb-1">Icon</label>
            <input
              type="file"
              id="icon-file"
              name="icon-file"
              className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTimeLine;
