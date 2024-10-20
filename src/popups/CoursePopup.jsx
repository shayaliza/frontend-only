import React, { useState } from "react";
import { useToast } from "../components/ui/use-toast";
import { createACourceFetch } from "../fetching/createSnap/courses";

const CoursePopup = ({ isOpen, togglePopup, setFilteredCourses, setData }) => {
  const { toast } = useToast();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("");
  const [mobileBannerImage, setMobileBannerImage] = useState(null);
  const [desktopBannerImage, setDesktopBannerImage] = useState(null);
  const [mobileBannerPreview, setMobileBannerPreview] = useState(null);
  const [desktopBannerPreview, setDesktopBannerPreview] = useState(null);

  const handleMobileBannerImageChange = (e) => {
    const file = e.target.files[0];
    setMobileBannerImage(file);
    setMobileBannerPreview(URL.createObjectURL(file)); // For preview
  };

  const handleDesktopBannerImageChange = (e) => {
    const file = e.target.files[0];
    setDesktopBannerImage(file);
    setDesktopBannerPreview(URL.createObjectURL(file)); // For preview
  };

  const handleSubmit = async () => {
    const data = {
      title,
      description,
      level,
    };

    console.log(
      "Data to be sent:",
      mobileBannerImage,
      desktopBannerImage,
      data
    );

    const res = await createACourceFetch(
      mobileBannerImage,
      desktopBannerImage,
      data
    );

    // Check if the response is valid
    if (res && res.data) {
      // console.log(res.data, "data we got in createACourseFetch");
      // Update state with the new course data
      setData((prevData) => {
        // Ensure prevData is in the expected format
        const results = Array.isArray(prevData.results)
          ? [...prevData.results, res.data]
          : [res.data];
        return { ...prevData, results };
      });

      setFilteredCourses((prevFilteredCourses) => [
        ...prevFilteredCourses,
        res.data,
      ]);

      toast({
        title: "Added the course",
      });
      togglePopup(); // Close the popup after adding the course
    } else {
      toast({
        title: "Failed to add the course",
        description: res.error || "Something went wrong!",
        status: "error",
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-md backdrop-brightness-150 flex items-center justify-center z-[9999]">
      <div className="backdrop-blur-lg backdrop-brightness-150 rounded-lg shadow-xl border relative flex flex-col md:flex-row w-full max-w-4xl mx-4 my-8 md:my-16 lg:my-24 h-[calc(100vh-12rem)] md:h-[calc(100vh-6rem)] lg:h-[calc(100vh-16rem)] overflow-hidden">
        <div className="w-full md:w-1/2 flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1602578558883-a40f8c22b3a0?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzJTIwYWRzfGVufDB8fDB8fHww&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=60"
            alt="Course Image"
            className="w-3/4 mx-auto h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col p-6 md:p-8 lg:gap-3 bg-white border-t border-gray-200 rounded-r-lg overflow-y-auto border shadow-md">
          <h3 className="text-2xl font-bold mb-2 text-center">
            Add New Course
          </h3>

          <label htmlFor="title" className="text-lg font-semibold">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter course title"
            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="description" className="text-lg font-semibold">
            Description
          </label>
          <input
            type="text"
            placeholder="Enter course description"
            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label htmlFor="level" className="text-lg font-semibold">
            Level
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="">Select level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>

          <label className="text-lg font-semibold">Mobile Banner Image</label>
          <input
            type="file"
            className="w-full mb-2"
            onChange={handleMobileBannerImageChange}
          />
          {mobileBannerPreview && (
            <img
              src={mobileBannerPreview}
              alt="Mobile Banner Preview"
              className="w-full h-32 object-cover rounded-lg mb-2"
            />
          )}

          <label className="text-lg font-semibold">Desktop Banner Image</label>
          <input
            type="file"
            className="w-full mb-2"
            onChange={handleDesktopBannerImageChange}
          />
          {desktopBannerPreview && (
            <img
              src={desktopBannerPreview}
              alt="Desktop Banner Preview"
              className="w-full h-32 object-cover rounded-lg mb-2"
            />
          )}

          <div className="flex justify-end space-x-4 mt-2">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              onClick={togglePopup}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePopup;
