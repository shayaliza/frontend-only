import React, {useState} from 'react';

const CourseMedia = () => {

  const [editDesktopBanner, setEditDesktopBanner] = useState(false);

  const togglePopup = () => {
    setEditDesktopBanner(false);
  }

  return (
    <>
    <div className="container mx-auto p-4 lg:p-8">
      
      <div className="relative mb-6 flex flex-row gap-4">
      <img
                src="https://images.unsplash.com/photo-1602578558883-a40f8c22b3a0?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzJTIwYWRzfGVufDB8fDB8fHww&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=60"
                alt="Course Image"
                className="w-1/2 h-1/2 object-cover rounded-l-lg"
              />
              <button className=" h-10 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105" onClick={()=>setEditDesktopBanner(true)}>
        <span className="flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
          </svg>
          Edit
        </span>
      </button>
      </div>

      
      <div className="text-center mb-6">
        <p className="text-lg text-gray-600">Master advanced React concepts and build scalable applications.</p>
      </div>

      
      <div className="relative mb-6 flex flex-row gap-4 ">
      <img
                src="https://images.unsplash.com/photo-1602578558883-a40f8c22b3a0?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzJTIwYWRzfGVufDB8fDB8fHww&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=60"
                alt="Course Image"
                className="w-1/2 h-1/2 object-cover rounded-l-lg"
              />
              <button className=" h-10 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105" onClick={()=>setEditDesktopBanner(true)}>
        <span className="flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
          </svg>
          Edit
        </span>
      </button>
      </div>
    </div>
    {editDesktopBanner && (
  <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-xl border relative flex flex-col md:flex-row w-full max-w-4xl mx-4 my-8 md:my-16 lg:my-24 h-[calc(100vh-8rem)] md:h-[calc(100vh-6rem)] lg:h-[calc(100vh-8rem)]">
      <div className="w-full md:w-1/2 flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1602578558883-a40f8c22b3a0?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzJTIwYWRzfGVufDB8fDB8fHww&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=60"
          alt="Course Image"
          className="w-full h-full object-cover rounded-l-lg"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col p-6 md:p-8 lg:gap-6 bg-white border-t border-gray-200 rounded-r-lg">
        <h3 className="text-2xl font-bold mb-4 text-center">Add or Edit Banner</h3>
        <div className=" border">
        <input
          type="file"
          accept="image/*"
          className=""
          onChange={(e) => console.log(e.target.files[0])}
        />
        </div>
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
)}

    </>
  );
};

export default CourseMedia;
