import React, { useState } from 'react';
import Userdata from "../../data.json";
import img from "../../assets/rsc/c1.avif";
import img2 from "../../assets/rsc/c2.avif";
import img3 from "../../assets/rsc/c3.avif";
import img4 from "../../assets/rsc/c4.avif";
import img5 from "../../assets/rsc/c5.avif";
import img6 from "../../assets/rsc/c6.avif";

function Testimonials() {
  const [testimonialsData, setTestimonialsData] = useState([
    {
      name: "John Doe",
      role: "Web Developer",
      image: img,
      content: "The courses on this platform have been instrumental in advancing my career. The content is top-notch and very practical.",
      rating: 5
    },
    {
      name: "Jane Smith",
      role: "UX Designer",
      image: img2,
      content: "I've learned so much about user experience design. The instructors are knowledgeable and the projects are challenging yet rewarding.",
      rating: 4
    },
    {
      name: "Mike Johnson",
      role: "Data Scientist",
      image: img3,
      content: "The data science track here is comprehensive and up-to-date. It's helped me transition into a new career field.",
      rating: 5
    },
    {
      name: "Emily Brown",
      role: "Mobile App Developer",
      image: img4,
      content: "The mobile development courses are fantastic. I've built several apps using the skills I've learned here.",
      rating: 4
    },
    {
      name: "Chris Lee",
      role: "DevOps Engineer",
      image: img5,
      content: "The DevOps curriculum is thorough and practical. It's improved my workflow and made me much more efficient.",
      rating: 5
    },
    {
      name: "Sarah Wilson",
      role: "Frontend Developer",
      image: img6,
      content: "I've taken multiple frontend courses and they've all been excellent. The instructors really know their stuff.",
      rating: 5
    },
  ]);

  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [newUserName, setNewUserName] = useState('');
  const [newUserReview, setNewUserReview] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const openEditPopup = (index) => {
    setEditingIndex(index);
    setIsEditPopupOpen(true);
  };

  const closePopup = () => {
    setIsEditPopupOpen(false);
    setSelectedOption(null);
    setSearchValue('');
    setFilteredUsers([]);
    setSelectedUsers([]);
    setNewUserName('');
    setNewUserReview('');
    setEditingIndex(null);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value) {
      setFilteredUsers(
        Userdata.filter(user =>
          user.last_name.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredUsers([]);
    }
  };

  const selectUser = (user) => {
    setSelectedUsers([...selectedUsers, user]);
    setSearchValue('');
    setFilteredUsers([]);
  };

  const removeUser = (user) => {
    setSelectedUsers(selectedUsers.filter(u => u !== user));
  };

  const handleImageUpload = (e) => {
    console.log("Image uploaded:", e.target.files[0]);
  };

  const handleSave = () => {
    if (selectedOption === 'existing') {
      const updatedTestimonials = [...testimonialsData];
      const selectedUser = selectedUsers[0];
      updatedTestimonials[editingIndex] = {
        ...updatedTestimonials[editingIndex],
        name: `${selectedUser.last_name}`,
        role: "Updated Role", 
        image: img, 
      };
      setTestimonialsData(updatedTestimonials);
    } else if (selectedOption === 'new') {
      setTestimonialsData([...testimonialsData, {
        name: newUserName,
        role: "New User",
        image: img, 
        content: newUserReview,
        rating: 5 
      }]);
    }
    closePopup();
  };

  return (
    <>
      <div className="max-w-7xl mx-auto p-4 overflow-hidden">
        <h1 className="text-3xl font-bold mb-6 text-center underline">Testimonials</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg transform transition hover:scale-105 border p-6 relative"
            >
              <div className="flex items-center mb-4">
                <img className="w-16 h-16 rounded-full mr-4" src={testimonial.image} alt={`${testimonial.name}'s profile`} />
                <div>
                  <h2 className="font-bold text-xl">{testimonial.name}</h2>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-12">{testimonial.content}</p>
              <button 
                className="absolute bottom-4 right-4 px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                onClick={() => openEditPopup(index)}
              >
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                  Edit
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {isEditPopupOpen && (
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
        <button
          onClick={closePopup}
          className="absolute p-1 rounded-lg top-4 right-4 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h3 className="text-2xl font-bold mb-4 text-center">Edit Testimonial</h3>
        
        {!selectedOption && (
          <div className="flex justify-center items-center space-x-4 mb-4">
            <button
              onClick={() => setSelectedOption('existing')}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Existing Account
            </button>
            <button
              onClick={() => setSelectedOption('new')}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              New Account
            </button>
          </div>
        )}

        {selectedOption === 'existing' && (
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-gray-700 font-semibold">Search existing users</label>
            <div className="relative">
              <input
                type="text"
                value={searchValue}
                onChange={handleSearchChange}
                placeholder="Enter last name..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {filteredUsers.length > 0 && (
                <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 shadow-lg max-h-60 overflow-auto">
                  {filteredUsers.map((user, index) => (
                    <li
                      key={index}
                      onClick={() => selectUser(user)}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {user.last_name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="mt-2 flex flex-wrap">
              {selectedUsers.map((user, index) => (
                <div key={index} className="flex items-center bg-blue-100 rounded-lg px-3 py-1 m-1">
                  <span>{user.last_name}</span>
                  <button
                    onClick={() => removeUser(user)}
                    className="ml-2 text-gray-600 hover:text-gray-800"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedOption === 'new' && (
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-gray-700 font-semibold">User Name:</label>
            <input
              type="text"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              placeholder="Enter new user name..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label className="mt-4 mb-2 text-gray-700 font-semibold">Review:</label>
            <textarea
              value={newUserReview}
              onChange={(e) => setNewUserReview(e.target.value)}
              placeholder="Enter review content..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label className="mt-4 mb-2 text-gray-700 font-semibold">Upload Image:</label>
            <input
              type="file"
              onChange={handleImageUpload}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        <div className="absolute bottom-4 right-4 flex justify-end space-x-4 mt-4">
          <button
            onClick={closePopup}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
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
}

export default Testimonials;
