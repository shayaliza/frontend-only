import React from 'react';
import trashIcon from '../assets/rsc/icons8-trash-32.png'; 

function Drafts() {

  return (
    <div className="flex flex-col items-center py-4 px-2 sm:px-4 bg-gray-50 text-gray-800 dark:text-gray-100 dark:bg-black min-h-screen">
      <div className="w-full max-w-3xl py-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold ">Your Drafts</h2>
            <p className="">All your pending drafts are here</p>
          </div>
          <button className="mt-4 sm:mt-0 text-blue-600 px-4 py-2 font-semibold border-2 border-blue-600 rounded-lg">
            New Draft +
          </button>
        </div>
        <div className="space-y-4">
          <div className={`flex flex-col sm:flex-row justify-between items-center p-4 rounded-lg shadow-sm border border-gray-200 bg-gray-50 text-gray-800 dark:text-gray-100 dark:bg-black`}>
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center rounded-lg mr-4 ">
                <p>No Cover</p>
              </div>
              <div className=''>
                <h3 className="text-lg font-semibold">Jokes only programmers will understand</h3>
                <p className=" italic">Empty Draft</p>
                <p className="">Last Updated: <i>July 15, 2022</i></p>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="text-blue-500 hover:underline">Edit</button>
              <img src={trashIcon} alt="Delete" className="w-6 h-6 cursor-pointer hover:opacity-75" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drafts;
