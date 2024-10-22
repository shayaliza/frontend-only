import React, { useState, useEffect } from "react";
import { useToast } from "../components/ui/use-toast";
import { updateOneCourseFetch } from "../fetching/createSnap/courses";

const EditCoursePopup = ({
  isOpen,
  togglePopup,
  setFilteredCourses,
  setData,
  course,
}) => {
  const { toast } = useToast();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("");
  const [mobileBannerImage, setMobileBannerImage] = useState(null);
  const [desktopBannerImage, setDesktopBannerImage] = useState(null);
  const [mobileBannerPreview, setMobileBannerPreview] = useState(null);
  const [desktopBannerPreview, setDesktopBannerPreview] = useState(null);

  useEffect(() => {
    if (course) {
      setTitle(course.title);
      setDescription(course.description);
      setLevel(course.level);
      setMobileBannerPreview(course.mobile_banner_image);
      setDesktopBannerPreview(course.desktop_banner_image);
    }
  }, [course]);

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
    const updatedData = {
      title,
      description,
      level,
    };

    console.log(
      "Data to be sent:",
      mobileBannerImage,
      desktopBannerImage,
      updatedData
    );

    const res = await updateOneCourseFetch(
      course.id,
      mobileBannerImage,
      desktopBannerImage,
      updatedData
    );

    if (res && res.data) {
      console.log(res.data, "data we got in updateCourseFetch");

      setData((prevData) => {
        const results = prevData.results?.map((item) =>
          item.id === course.id ? res.data : item
        );
        return { ...prevData, results };
      });

      setFilteredCourses(
        (prevFilteredCourses) =>
          prevFilteredCourses &&
          prevFilteredCourses.map((item) =>
            item.id === course.id ? res.data : item
          )
      );

      toast({
        title: "Course updated successfully",
      });
      togglePopup(); // Close the popup after updating the course
    } else {
      toast({
        title: "Failed to update the course",
        description: res.error || "Something went wrong!",
        variant: "destructive",
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl border relative flex flex-col md:flex-row w-full max-w-4xl mx-4 my-8 md:my-16 lg:my-24 h-[calc(100vh-8rem)] md:h-[calc(100vh-6rem)] lg:h-[calc(100vh-8rem)] overflow-hidden">
        <div className="w-full md:w-1/2 flex-shrink-0">
          <img
            src={
              "https://images.unsplash.com/photo-1602578558883-a40f8c22b3a0?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzJTIwYWRzfGVufDB8fDB8fHww&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=60"
            }
            alt="Course Image"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col p-6 md:p-8 lg:gap-6 bg-white border-t border-gray-200 rounded-r-lg overflow-y-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">Edit Course</h3>

          <label htmlFor="title" className="text-xl font-semibold">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter course title"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="description" className="text-xl font-semibold">
            Description
          </label>
          <input
            type="text"
            placeholder="Enter course description"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label htmlFor="level" className="text-xl font-semibold">
            Level
          </label>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="">Select level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>

          <label className="text-xl font-semibold">Mobile Banner Image</label>
          <input
            type="file"
            className="w-full mb-4"
            onChange={handleMobileBannerImageChange}
          />
          {mobileBannerPreview && (
            <img
              src={mobileBannerPreview}
              alt="Mobile Banner Preview"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
          )}

          <label className="text-xl font-semibold">Desktop Banner Image</label>
          <input
            type="file"
            className="w-full mb-4"
            onChange={handleDesktopBannerImageChange}
          />
          {desktopBannerPreview && (
            <img
              src={desktopBannerPreview}
              alt="Desktop Banner Preview"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
          )}

          <div className="flex justify-end space-x-4 mt-4">
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

export default EditCoursePopup;
