// import React, { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// import {
//   Navigation,
//   Autoplay,
//   Pagination,
//   Scrollbar,
//   A11y,
// } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// function NewPost({ onClose }) {
//   const [images, setImages] = useState([]);
//   const [step, setStep] = useState(1);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   const handleImageUpload = (e) => {
//     if (e.target.files) {
//       setImages([...images, ...Array.from(e.target.files)]);
//     }
//   };

//   const handleRemoveImage = (index) => {
//     const newImages = [...images];
//     newImages.splice(index, 1);
//     setImages(newImages);
//   };

//   const handleSubmit = () => {
//     // Handle final submission here
//     console.log("Post submitted with:", { title, description, images });
//     onClose();
//   };

//   return (
//     <div className="w-full flex items-center justify-center">
//       <div className="w-full">
//         <div className="bg-white p-4 rounded-lg mt-4">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold">
//               {step === 1 ? "Create a Post" : "Add Title and Description"}
//             </h2>
//           </div>

//           {step === 1 ? (
//             <>
//               <div className="mb-6">
//                 <div>Alan Biju</div>
//                 {images.length === 0 && (
//                   <label
//                     className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all duration-200 ease-in-out"
//                     htmlFor="imageUpload"
//                   >
//                     Upload Images
//                     <input
//                       id="imageUpload"
//                       type="file"
//                       multiple
//                       onChange={handleImageUpload}
//                       className="hidden"
//                     />
//                   </label>
//                 )}
//               </div>
//               {images.length > 0 && (
//                 <>
//                   <div className="w-full flex justify-between">
//                     <div className="w-1/2"> preview</div>
//                     <div className="w-1/2">
//                       <DragDropContext>
//                         <Droppable droppableId="images">
//                           {(provided) => (
//                             <ul
//                               {...provided.droppableProps}
//                               ref={provided.innerRef}
//                               className="mt-4 grid grid-cols-3 gap-4"
//                             >
//                               {images.map((file, index) => (
//                                 <Draggable
//                                   key={index}
//                                   draggableId={file.name}
//                                   index={index}
//                                 >
//                                   {(provided) => (
//                                     <li
//                                       {...provided.draggableProps}
//                                       {...provided.dragHandleProps}
//                                       ref={provided.innerRef}
//                                       className="relative"
//                                     >
//                                       <div className="relative">
//                                         <img
//                                           src={URL.createObjectURL(file)}
//                                           alt={file.name}
//                                           className="w-32 h-32 object-cover rounded"
//                                         />
//                                         <button
//                                           onClick={() => handleMoveLeft(index)}
//                                           className={`absolute left-1 top-1/2 transform -translate-y-1/2 ${
//                                             index === 0
//                                               ? "text-gray-300 cursor-not-allowed"
//                                               : "text-gray-600"
//                                           }`}
//                                           disabled={index === 0}
//                                         >
//                                           <FaArrowLeft />
//                                         </button>
//                                         <button
//                                           onClick={() => handleMoveRight(index)}
//                                           className={`absolute right-1 top-1/2 transform -translate-y-1/2 ${
//                                             index === images.length - 1
//                                               ? "text-gray-300 cursor-not-allowed"
//                                               : "text-gray-600"
//                                           }`}
//                                           disabled={index === images.length - 1}
//                                         >
//                                           <FaArrowRight />
//                                         </button>
//                                       </div>
//                                       <button
//                                         onClick={() => handleRemoveImage(index)}
//                                         className="block mt-2 text-center text-red-500"
//                                       >
//                                         Remove
//                                       </button>
//                                     </li>
//                                   )}
//                                 </Draggable>
//                               ))}
//                               {provided.placeholder}
//                             </ul>
//                           )}
//                         </Droppable>
//                       </DragDropContext>

//                       <div className="mt-8">
//                         <label
//                           className="px-4 py-2  bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all duration-200 ease-in-out"
//                           htmlFor="imageUpload"
//                         >
//                           +
//                           <input
//                             id="imageUpload"
//                             type="file"
//                             multiple
//                             onChange={handleImageUpload}
//                             className="hidden"
//                           />
//                         </label>
//                       </div>
//                     </div>
//                   </div>

//                   <button
//                     onClick={() => setStep(2)}
//                     className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//                   >
//                     Next
//                   </button>
//                 </>
//               )}
//             </>
//           ) : (
//             <>
//               <div className="mb-4">
//                 <label
//                   htmlFor="title"
//                   className="block mb-2 text-sm font-medium text-gray-700"
//                 >
//                   Title
//                 </label>
//                 <input
//                   id="title"
//                   type="text"
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                   className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg p-2 bg-gray-50 focus:outline-none"
//                   placeholder="Enter title"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label
//                   htmlFor="description"
//                   className="block mb-2 text-sm font-medium text-gray-700"
//                 >
//                   Description
//                 </label>
//                 <textarea
//                   id="description"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   rows={4}
//                   className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg p-2 bg-gray-50 focus:outline-none"
//                   placeholder="Enter description"
//                 />
//               </div>

//               <div className="mb-4">
//                 <h3 className="text-lg font-semibold mb-2">Uploaded Images</h3>
//                 <Swiper
//                   className="swiper-container"
//                   modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//                   spaceBetween={50}
//                   slidesPerView={1}
//                   navigation
//                 >
//                   {images.map((file, index) => (
//                     <SwiperSlide key={index}>
//                       <img
//                         src={URL.createObjectURL(file)}
//                         alt={file.name}
//                         className="w-full h-52 object-contain rounded-lg"
//                       />
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               </div>
//               <div className="flex justify-between">
//                 <button
//                   onClick={() => setStep(1)}
//                   className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//                 >
//                   Re order
//                 </button>
//                 <button
//                   onClick={handleSubmit}
//                   className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//                 >
//                   Save Post
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NewPost;

import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CgProfile } from "react-icons/cg";

function NewPost({ onClose }) {
  const [images, setImages] = useState([]);
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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

  const handleMoveLeft = (index) => {
    if (index > 0) {
      const newImages = [...images];
      [newImages[index], newImages[index - 1]] = [
        newImages[index - 1],
        newImages[index],
      ];
      setImages(newImages);
    }
  };

  const handleMoveRight = (index) => {
    if (index < images.length - 1) {
      const newImages = [...images];
      [newImages[index], newImages[index + 1]] = [
        newImages[index + 1],
        newImages[index],
      ];
      setImages(newImages);
    }
  };

  const handleSubmit = () => {
    // Handle final submission here
    console.log("Post submitted with:", { title, description, images });
    onClose();
  };

  return (
    <div className="w-full flex items-center justify-center  ">
      <div className="w-11/12">
        <div className="bg-gray-200 p-4 rounded-lg mt-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold mt-2 pl-4">
              {step === 1 ? "Create a Post" : "Add Title and Description"}
            </h2>
          </div>

          {step === 1 ? (
            <>
              <div className="mb-6 ">
                <div className="flex  items-center pl-4">
                  <div>
                    <CgProfile size={40} />
                  </div>
                  <div className="flex flex-col ml-4 ">
                    <div className="text-lg font-semibold">Alan Biju</div>
                    <div>TechSnap DevOps</div>
                  </div>
                </div>

                {images.length === 0 && (
                  <div className="flex justify-around  items-center py-20">
                    <div className="fles justify-center text-center">
                      <label
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all duration-200 ease-in-out"
                        htmlFor="imageUpload"
                      >
                        Upload Images
                        <input
                          id="imageUpload"
                          type="file"
                          multiple
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                    <div>
                      <img src="https://dummyimage.com/300x300" />
                    </div>
                  </div>
                )}
              </div>
              {images.length > 0 && (
                <>
                  <div className="w-full flex justify-between h-96 overflow-hidden ">
                    <div className="w-1/2">
                      <Swiper
                        className="swiper-container"
                        modules={[
                          Navigation,
                          Pagination,
                          Scrollbar,
                          A11y,
                          Autoplay,
                        ]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                      >
                        {images.map((file, index) => (
                          <SwiperSlide key={index}>
                            <img
                              src={URL.createObjectURL(file)}
                              alt={file.name}
                              className="w-full h-52 object-contain rounded-lg"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                    <div className="w-1/2 overflow-y-scroll">
                      <ul className="mt-4 grid grid-cols-2 gap-4">
                        {images.map((file, index) => (
                          <li key={index} className="relative">
                            <div className="relative">
                              <img
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                                className="w-32 h-32 object-cover rounded"
                              />
                              <button
                                onClick={() => handleMoveLeft(index)}
                                className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-md ${
                                  index === 0
                                    ? "text-gray-300 cursor-not-allowed"
                                    : "text-gray-600"
                                }`}
                                disabled={index === 0}
                              >
                                <FaArrowLeft />
                              </button>
                              <button
                                onClick={() => handleMoveRight(index)}
                                className={`absolute left-28 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-md ${
                                  index === images.length - 1
                                    ? "text-gray-300 cursor-not-allowed"
                                    : "text-gray-600"
                                }`}
                                disabled={index === images.length - 1}
                              >
                                <FaArrowRight />
                              </button>
                            </div>
                            <button
                              onClick={() => handleRemoveImage(index)}
                              className="block mt-2 text-center text-red-500"
                            >
                              Remove
                            </button>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8">
                        <label
                          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all duration-200 ease-in-out"
                          htmlFor="imageUpload"
                        >
                          +
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
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Next
                  </button>
                </>
              )}
            </>
          ) : (
            <>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg p-2 bg-gray-50 focus:outline-none"
                  placeholder="Enter title"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg p-2 bg-gray-50 focus:outline-none"
                  placeholder="Enter description"
                />
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Uploaded Images</h3>
                <Swiper
                  className="swiper-container"
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                >
                  {images.map((file, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className="w-full h-52 object-contain rounded-lg"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Reorder
                </button>
                <button
                  onClick={handleSubmit}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Save Post
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewPost;
