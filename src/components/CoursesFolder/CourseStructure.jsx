import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function CourseStructure() {
  const [openIndexes, setOpenIndexes] = useState({});
  const [courses, setCourses] = useState([
    {
      title: "HTML",
      items: [
        { text: "introduction", id: "html1" },
        { text: "practicetext", id: "html2" },
        { text: "quiz", id: "html3" },
        { text: "text", id: "html4" },
        { text: "text", id: "html4" },
      ],
    },
    {
      title: "CSS",
      items: [
        { text: "article", id: "css1" },
        { text: "article", id: "css2" },
        { text: "article", id: "css3" },
        { text: "article", id: "css4" },
        { text: "article", id: "css5" },
      ],
    },
  ]);

  const toggleDropdown = (index) => {
    setOpenIndexes((prevOpenIndexes) => ({
      ...prevOpenIndexes,
      [index]: !prevOpenIndexes[index],
    }));
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const startIndex = parseInt(source.droppableId.split("-")[1], 10);
    const endIndex = parseInt(destination.droppableId.split("-")[1], 10);

    if (isNaN(startIndex) || isNaN(endIndex) || startIndex === -1 || endIndex === -1) return;

    if (startIndex === endIndex) {
      const updatedItems = Array.from(courses[startIndex].items);
      const [movedItem] = updatedItems.splice(source.index, 1);
      updatedItems.splice(destination.index, 0, movedItem);
      const newCourses = [...courses];
      newCourses[startIndex].items = updatedItems;
      setCourses(newCourses);
    } else {
      const startItems = Array.from(courses[startIndex].items);
      const [movedItem] = startItems.splice(source.index, 1);
      const endItems = Array.from(courses[endIndex].items);
      endItems.splice(destination.index, 0, movedItem);
      const newCourses = [...courses];
      newCourses[startIndex].items = startItems;
      newCourses[endIndex].items = endItems;
      setCourses(newCourses);
    }
  };

  const [isUnitPopup, setIsUnitPopup] = useState(false);
  const [isLessonPopup, setIsLessonPopup] = useState(false);
  const [isSingleActive, setIsSingleActive] = useState(false);
  const [isMultipleActive, setIsMultipleActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSingleClick = () => {
    setIsSingleActive(true);
    setIsMultipleActive(false);
    setIsDropdownOpen(true);
  };

  const handleMultipleClick = () => {
    setIsSingleActive(false);
    setIsMultipleActive(true);
    setIsDropdownOpen(false);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const closePopup = () => {
    setIsLessonPopup(false);
    setIsUnitPopup(false);
  };

  const navigate = useNavigate();

  const handleSave = () => {
    if (isMultipleActive) {
      navigate("/createsnap/course/html/started/html/introduction");
    } else if (isSingleActive) {
      setIsLessonPopup(false);
    }
  };

  return (
    <>
    
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" type="droppable">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} className="min-w-full">
              <div className="mx-4 sm:mx-6 md:mx-8 flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold underline">Course Structure</h3>
                <button
                  className="p-2 ml-2 rounded-md text-white font-bold shadow-lg transform transition duration-300 hover:scale-105"
                  onClick={() => setIsUnitPopup(true)}
                  style={{
                    background: 'radial-gradient(circle farthest-corner at 10% 20%, rgb(162, 88, 253) 0%, rgba(116,182,247,1) 90%)'
                  }}
                >
                  Add Unit
                </button>
              </div>
              {courses.map((course, courseIndex) => (
                <div key={courseIndex} className="mb-4 border border-gray-200 rounded-lg shadow-md mx-4 sm:mx-6 md:mx-8">
                  <div className="flex items-center justify-between border-b border-gray-300 py-2 px-4 bg-gray-100 rounded-t-lg">
                    <div className="flex items-center space-x-3">
                      <h2 className="text-lg font-bold text-gray-800">{course.title}</h2>
                      <button className="text-gray-600 focus:outline-none" onClick={() => toggleDropdown(courseIndex)}>
                        {openIndexes[courseIndex] ? (
                          <FaChevronUp className="h-4 w-4" />
                        ) : (
                          <FaChevronDown className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    <button
                      onClick={() => setIsLessonPopup(true)}
                      className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300"
                    >
                      Add Lesson
                    </button>
                  </div>
                  {openIndexes[courseIndex] && (
                    <Droppable droppableId={`droppable-${courseIndex}`}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className="p-4 space-y-4">
                          {course.items.map((item, itemIndex) => (
                            <Draggable key={item.id} draggableId={item.id} index={itemIndex}>
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="flex justify-between items-center p-2 bg-gray-50 border border-gray-300 rounded-md cursor-move"
                                >
                                  <div className="flex items-center space-x-2">
                                    <span className="font-medium text-gray-700">{item.text}</span>
                                  </div>
                                  <div className="flex space-x-2">
                                    <Link
                                      to={`/createsnap/course/html/started/${item.text.toLowerCase()}`}
                                      className="font-medium text-blue-600 hover:underline"
                                    >
                                      View
                                    </Link>
                                    <button className="px-2 py-1 text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">
                                      Delete
                                    </button>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  )}
                </div>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {isUnitPopup && (
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
              <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">Add Unit</h3>
              <form className="w-full space-y-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="title" className="text-lg font-medium text-gray-700">Add Title</label>
                  <input
                    type="text"
                    id="title"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter title"
                  />
                </div>
                <div className="absolute bottom-2 right-2 flex flex-col md:flex-row gap-4 mt-6">
                  <button
                    type="button"
                    className="px-6 py-2 font-semibold text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 flex-1"
                    onClick={closePopup}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 font-semibold text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 flex-1"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {isLessonPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="bg-white rounded shadow-xl border relative flex flex-row w-full max-w-4xl mx-4 my-8 md:my-16 lg:my-24 h-[calc(100vh-8rem)] md:h-[calc(100vh-6rem)] lg:h-[calc(100vh-8rem)]">
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1602578558883-a40f8c22b3a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Popup Image"
                className="w-full h-full object-cover rounded-l-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-6">
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold mb-4 text-center">Add Lesson</h3>
                <div className="mb-4">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="title" className="text-lg font-medium text-gray-700">Add Title</label>
                    <input
                      type="text"
                      id="title"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter title"
                    />
                  </div>
                  <div className="flex justify-around mt-4">
                    <button
                      onClick={handleSingleClick}
                      className={`p-2 border rounded-lg ${
                        isSingleActive ? "bg-blue-500 text-white" : "bg-white text-blue-500"
                      }`}
                    >
                      Single Correct
                    </button>
                    <button
                      onClick={handleMultipleClick}
                      className={`p-2 border rounded-lg ${
                        isMultipleActive ? "bg-blue-500 text-white" : "bg-white text-blue-500"
                      }`}
                    >
                      Multiple Correct
                    </button>
                    
                  </div>
                  {isDropdownOpen && (
                      <div className="mt-4">
                        <div className="flex flex-col space-y-2">
                          <label className="block text-gray-700 font-medium mb-2">Select Option</label>
                          <div className="flex flex-col space-y-2">
                            <label className="flex items-center">
                              <input
                                type="radio"
                                value="Video"
                                checked={selectedOption === "Video"}
                                onChange={handleOptionChange}
                                className="mr-2"
                              />
                              Video
                            </label>
                            <label className="flex items-center">
                              <input
                                type="radio"
                                value="Text"
                                checked={selectedOption === "Text"}
                                onChange={handleOptionChange}
                                className="mr-2"
                              />
                              Text
                            </label>
                            <label className="flex items-center">
                              <input
                                type="radio"
                                value="Task"
                                checked={selectedOption === "Task"}
                                onChange={handleOptionChange}
                                className="mr-2"
                              />
                              Task
                            </label>
                          </div>
                        </div>
                      </div>
                    )}
                </div>
                <div className="mt-auto flex justify-end space-x-4">
                  <button
                    onClick={closePopup}
                    className="px-4 py-2 font-semibold text-gray-800 border rounded-lg hover:bg-gray-200 transition duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CourseStructure;
