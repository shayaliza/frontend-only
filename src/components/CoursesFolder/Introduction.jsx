import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./Quiz.css";

function Introduction() {

  const [courses, setCourses] = useState([
    {
      title: "Introduction",
      items: [
        { text: "text", id: "1" },
        { text: "video", id: "2" },
        { text: "practicetext", id: "3" },
        { text: "test", id: "4" },
        { text: "quiz", id: "5" }
      ],
    },
  ]);

  const [openIndexes, setOpenIndexes] = useState({});

  useEffect(() => {
    setOpenIndexes(courses.reduce((acc, _, index) => ({ ...acc, [index]: true }), {}));
  }, [courses]);


  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    const startIndex = parseInt(source.droppableId.split("-")[1], 10);
    const endIndex = parseInt(destination.droppableId.split("-")[1], 10);

    if (
      isNaN(startIndex) ||
      isNaN(endIndex) ||
      startIndex === -1 ||
      endIndex === -1
    )
      return;

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

  const [isQuizPopupOpen, setIsQuizPopupOpen] = useState(false);
  const [isTestPopupOpen, setIsTestPopupOpen] = useState(false);
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);
  const [isArticlePopupOpen, setIsArticlePopupOpen] = useState(false);
  const [isPracticePopupOpen, setIsPracticePopupOpen] = useState(false);

  const handleInternalPopup = (type) => {
    switch (type) {
      case 'Quiz':
        setIsQuizPopupOpen(prev => !prev);
        break;
      case 'Test':
        setIsTestPopupOpen(prev => !prev);
        break;
      case 'Video':
        setIsVideoPopupOpen(prev => !prev);
        break;
      case 'Article':
        setIsArticlePopupOpen(prev => !prev);
        break;
      case 'Practice text':
        setIsPracticePopupOpen(prev => !prev);
        break;
      default:
        break;
    }
  };

  const closePopup = (type) => {
    switch (type) {
      case 'Quiz':
        setIsQuizPopupOpen(false);
        break;
      case 'Test':
        setIsTestPopupOpen(false);
        break;
      case 'Video':
        setIsVideoPopupOpen(false);
        break;
      case 'Article':
        setIsArticlePopupOpen(false);
        break;
      case 'Practice text':
        setIsPracticePopupOpen(false);
        break;
      default:
        break;
    }
  };

  const navigate = useNavigate();

  const handleSave = (type) => {
    switch (type) {
      case 'Quiz':
        navigate("quiz");
        break;
      case 'Test':
        navigate("test");
        break;
      case 'Video':
        navigate("video");
        break;
      case 'Article':
        navigate("text");
        break;
      case 'Practice text':
        navigate("practicetext");
        break;
      default:
        break;
    }
  };


  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" type="droppable">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="min-w-full"
            >
              <div className="mx-4 sm:mx-6 md:mx-8 flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold underline">Introduction</h3>
                
              </div>
              {courses.map((course, courseIndex) => (
                <div
                  key={courseIndex}
                  className="mb-4 border border-gray-200 rounded-md shadow-md mx-6 my-4"
                >
                  <div className="flex items-center justify-between border-b border-gray-300 p-2 bg-gray-100 px-6">
                    <div className="flex">
                      <h2 className="text-lg font-bold flex items-center">
                        {course.title}
                      </h2>
                      
                    </div>
                  </div>

                  {openIndexes[courseIndex] && (
                    <Droppable droppableId={`droppable-${courseIndex}`}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          className="p-4 space-y-4"
                        >
                          <div className="lg:w-1/2 md:w-2/3 flex gap-2 md:justify-around my-4">
                            <button
                              onClick={() => handleInternalPopup("Quiz")}
                              className="px-2 lg:py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300"
                            >
                              Quiz
                            </button>
                            <button
                              onClick={() => handleInternalPopup("Test")}
                              className="px-2 lg:py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-300"
                            >
                              Test
                            </button>
                            <button
                              onClick={() => handleInternalPopup("Video")}
                              className="px-2 lg:py-2 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 transition duration-300"
                            >
                              Video
                            </button>
                            <button
                              onClick={() => handleInternalPopup("Article")}
                              className="px-2 lg:py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-300"
                            >
                              Text
                            </button>
                            <button
                              onClick={() => handleInternalPopup("Practice text")}
                              className="px-2 lg:py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-300"
                            >
                              Practice text
                            </button>
                          </div>
                          {course.items.map((item, itemIndex) => (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={itemIndex}
                            >
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="flex justify-between items-center p-2 bg-gray-50 border border-gray-300 rounded-md cursor-move"
                                >
                                  <div className="flex items-center">
                                    <span>{item.text}</span>
                                  </div>
                                  <div className="flex space-x-2">
                                    <Link
                                      to={`/course/started/html/introduction/${item.text}`}
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


      {isQuizPopupOpen && (
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
              <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">Add Quiz</h3>
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
                <div className="absolute flex flex-col md:flex-row gap-4 bottom-2 right-2">
                  <button
                    type="submit"
                    className="px-6 py-2 font-semibold text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 flex-1"
                    onClick={() => handleSave("Quiz")}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="px-6 py-2 font-semibold text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 flex-1"
                    onClick={() => closePopup("Quiz")}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}


   
      {isTestPopupOpen && (
        <div className="popup fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl border relative flex flex-col md:flex-row w-full max-w-4xl mx-4 my-8 md:my-16 lg:my-24 h-[calc(100vh-8rem)] md:h-[calc(100vh-6rem)] lg:h-[calc(100vh-8rem)]">
            <div className="w-full md:w-1/2 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1602578558883-a40f8c22b3a0?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzJTIwYWRzfGVufDB8fDB8fHww&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=60"
                alt="Course Image"
                className="w-full h-full object-cover rounded-l-lg"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col p-6 md:p-8 lg:gap-6 bg-white border-t border-gray-200 rounded-r-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">Add Test</h3>
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
                <div className="absolute flex flex-col md:flex-row gap-4 bottom-2 right-2">
                  <button
                    type="submit"
                    className="px-6 py-2 font-semibold text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 flex-1"
                    onClick={() => handleSave("Test")}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="px-6 py-2 font-semibold text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 flex-1"
                    onClick={() => closePopup("Test")}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

    
      {isVideoPopupOpen && (
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
              <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">Add Video</h3>
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
                <div className="absolute flex flex-col md:flex-row gap-4 bottom-2 right-2">
                  <button
                    type="submit"
                    className="px-6 py-2 font-semibold text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 flex-1"
                    onClick={() => handleSave("Video")}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="px-6 py-2 font-semibold text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 flex-1"
                    onClick={() => closePopup("Video")}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

   
      {isArticlePopupOpen && (
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
              <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">Add Article</h3>
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
                <div className="absolute flex flex-col md:flex-row gap-4 bottom-2 right-2">
                  <button
                    type="submit"
                    className="px-6 py-2 font-semibold text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 flex-1"
                    onClick={() => handleSave("Article")}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="px-6 py-2 font-semibold text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 flex-1"
                    onClick={() => closePopup("Article")}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

{isPracticePopupOpen && (
        <div className="popup fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl border relative flex flex-col md:flex-row w-full max-w-4xl mx-4 my-8 md:my-16 lg:my-24 h-[calc(100vh-8rem)] md:h-[calc(100vh-6rem)] lg:h-[calc(100vh-8rem)]">
            <div className="w-full md:w-1/2 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1602578558883-a40f8c22b3a0?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzJTIwYWRzfGVufDB8fDB8fHww&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=60"
                alt="Course Image"
                className="w-full h-full object-cover rounded-l-lg"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col p-6 md:p-8 lg:gap-6 bg-white border-t border-gray-200 rounded-r-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">Add Practice Text</h3>
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
                <div className="absolute flex flex-col md:flex-row gap-4 bottom-2 right-2">
                  <button
                    type="submit"
                    className="px-6 py-2 font-semibold text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 flex-1"
                    onClick={() => handleSave("Practice text")}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="px-6 py-2 font-semibold text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 flex-1"
                    onClick={() => closePopup("Practice text")}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Introduction;
