import React from 'react';


function Html() {
  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">ReactJS Developer</h1>
      </div>

      <div className="flex justify-center space-x-4 mb-6">
        <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <a href="/careerpaths/edit_timeline/4" className="text-white">Edit</a>
        </button>
        <button className="btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          <a href="/careerpaths/details_popup/4" className="text-white">View Popup</a>
        </button>
        <button className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          <a href="/careerpaths/delete_timeline/4" className="text-white">Delete</a>
        </button>
      </div>

      <div className="flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
          <div className="mb-4">
            <img src="/media/timeline/company_YtqaBDy.png" alt="HTML" className="w-full h-40 object-cover rounded-md" />
          </div>
          <h2 className="text-xl font-semibold text-gray-700">Title: HTML</h2>
          <p className="text-gray-600 mt-2">Long Description: jhvjhj</p>
          <p className="text-gray-600 mt-2">Short Description: mgkjbgk</p>
        </div>
      </div>
    </div>
  );
}

export default Html;
