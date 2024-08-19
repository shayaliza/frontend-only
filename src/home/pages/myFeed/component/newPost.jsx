import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FaTimes, FaArrowUp, FaArrowDown } from "react-icons/fa";

function NewPost({ onClose }) {
  const [images, setImages] = useState([]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedImages = Array.from(images);
    const [reorderedItem] = reorderedImages.splice(result.source.index, 1);
    reorderedImages.splice(result.destination.index, 0, reorderedItem);

    setImages(reorderedImages);
  };

  const handleImageUpload = (e) => {
    if (e.target.files) {
      setImages([...images, ...Array.from(e.target.files)]);
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const moveImage = (fromIndex, toIndex) => {
    const newImages = [...images];
    const [movedImage] = newImages.splice(fromIndex, 1);
    newImages.splice(toIndex, 0, movedImage);
    setImages(newImages);
  };

  const handleMoveUp = (index) => {
    if (index > 0) {
      moveImage(index, index - 1);
    }
  };

  const handleMoveDown = (index) => {
    if (index < images.length - 1) {
      moveImage(index, index + 1);
    }
  };

  const handleSubmit = () => {
    console.log("Images submitted:", images);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-90 backdrop-blur-lg flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Create New Post</h2>
          <FaTimes className="cursor-pointer text-gray-600" onClick={onClose} />
        </div>

        {/* <div className="mb-4">
          <label
            htmlFor="imageUpload"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Upload Images
          </label>
          <input
            id="imageUpload"
            type="file"
            multiple
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          />
        </div> */}
        <div className="mb-6">
          <label
            htmlFor="imageUpload"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Upload Images
          </label>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="imageUpload"
              className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all duration-200 ease-in-out"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18m-5 4l4-4m0 0l-4-4"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF (Max. 10MB)
                </p>
              </div>
              <input
                id="imageUpload"
                type="file"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="images">
            {(provided) => (
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="mt-4"
              >
                {images.map((file, index) => (
                  <Draggable key={index} draggableId={file.name} index={index}>
                    {(provided) => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className="flex items-center justify-between p-3 border rounded-lg bg-gray-100 mb-2"
                      >
                        <img
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex items-center">
                          <button
                            onClick={() => handleMoveUp(index)}
                            className={`mr-2 ${
                              index === 0
                                ? "text-gray-300 cursor-not-allowed"
                                : "text-gray-600"
                            }`}
                            disabled={index === 0}
                          >
                            <FaArrowUp />
                          </button>
                          <button
                            onClick={() => handleMoveDown(index)}
                            className={`mr-2 ${
                              index === images.length - 1
                                ? "text-gray-300 cursor-not-allowed"
                                : "text-gray-600"
                            }`}
                            disabled={index === images.length - 1}
                          >
                            <FaArrowDown />
                          </button>
                          <button
                            onClick={() => handleRemoveImage(index)}
                            className="text-red-500"
                          >
                            Remove
                          </button>
                        </div>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>

        <button
          onClick={handleSubmit}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg w-full font-medium text-lg"
        >
          Save Post
        </button>
      </div>
    </div>
  );
}

export default NewPost;
