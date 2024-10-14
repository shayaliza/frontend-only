import React from "react";

const CareerPathPopup =  ( { isOpen, togglePopup }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 backdrop-blur-md backdrop-brightness-150 flex items-center justify-center z-50">
      <div className="backdrop-blur-md backdrop-brightness-150 rounded-lg shadow-xl border relative flex flex-col md:flex-row w-full max-w-4xl mx-4 my-8 md:my-16 lg:my-24 h-[calc(100vh-8rem)] md:h-[calc(100vh-6rem)] lg:h-[calc(100vh-15rem)] border-gray-200">
        <div className="w-full md:w-1/2 flex-shrink-0">
        <img
                src="https://images.unsplash.com/photo-1602578558883-a40f8c22b3a0?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzJTIwYWRzfGVufDB8fDB8fHww&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=60"
                alt="Course Image"
                className="w-3/4 mx-auto h-full object-cover rounded-l-lg"
              />
              </div>
          <div className="w-full md:w-1/2 flex flex-col p-6 md:p-8 lg:gap-6 bg-white border border-gray-200 rounded-r-lg shadow-md">
            
              <h3 className="text-2xl font-bold mb-4 text-center">Add New Careerpath</h3>
              <label htmlFor="title" className='text-xl font-semibold'>Add title</label>
              <input
                type="text"
                placeholder="Enter course title"
                className="w-full p-3 border border-gray-300 rounded-lg mb-4"
              />
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg mb-4 hover:bg-green-600 w-full">
                Upload Banner Image
              </button>
              <div className="absolute bottom-2 right-2 flex space-x-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 w-full"
                onClick={togglePopup}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full"
                onClick={togglePopup}
              >
                Save
              </button>
            </div>
            </div>
          </div>
    </div>
    )
}

export default CareerPathPopup;