import React, { useState, useEffect } from "react";
import { FaArrowRight, FaSearch, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  deleteOneCourseFetch,
  getCreaterCourseFetch,
} from "../fetching/createSnap/courses";
import { useToast } from "../components/ui/use-toast";
import CoursePopup from "../popups/CoursePopup";
import img from "../assets/rsc/c1.avif";

const CourseList = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [data, setData] = useState({ results: [] }); // Ensure results is an array
  const [isAddCoursePopup, setIsAddCoursePopup] = useState(false);

  const toggleAddCoursePopup = () => {
    setIsAddCoursePopup(!isAddCoursePopup);
  };

  useEffect(() => {
    const getAllCourses = async () => {
      const res = await getCreaterCourseFetch();
      if (res && res.data && Array.isArray(res.data.results)) {
        setData({ results: res.data.results }); // Ensure data has results array
        setFilteredCourses(res.data.results);
      } else {
        // Handle unexpected data format
        console.error("Unexpected data format:", res);
        setData({ results: [] });
        setFilteredCourses([]);
      }
    };
    getAllCourses();
  }, []);

  useEffect(() => {
    if (data.results.length > 0) {
      setFilteredCourses(
        data.results.filter((course) =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, data]);

  const handleCourse = (index) => {
    navigate("/createsnap/course/started/info");
  };

  const handleDelete = async (courseId) => {
    const response = await deleteOneCourseFetch(courseId);

    if (response.status === 204) {
      toast({
        title: "Course deleted successfully",
      });

      // Update the state to remove the deleted course
      setData((prevData) => ({
        results: prevData.results.filter((course) => course.id !== courseId),
      }));
      setFilteredCourses((prevFilteredCourses) =>
        prevFilteredCourses.filter((course) => course.id !== courseId)
      );
    } else {
      toast({
        title: "Failed to delete the course",
        variant: "destructive",
      });
    }
  };

  const addNewCourse = (newCourse) => {
    setData((prevData) => ({
      results: [...prevData.results, newCourse],
    }));
    setFilteredCourses((prevFilteredCourses) => [
      ...prevFilteredCourses,
      newCourse,
    ]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto p-4 overflow-hidden"
    >
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="flex flex-col md:flex-row justify-between items-center mb-10"
      >
        <h1 className="text-4xl font-bold mb-6 md:mb-0 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
          Explore Courses
        </h1>
        <div className="flex items-center w-full md:w-auto">
          <div className="relative w-full md:w-64 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search for a course"
              className="w-full p-3 pl-10 border-2 border-indigo-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-4 text-indigo-400" />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 ml-4 rounded-full text-white font-semibold shadow-lg transform transition duration-300"
            onClick={toggleAddCoursePopup}
            style={{
              background: "linear-gradient(to right, #6a11cb, #2575fc)",
            }}
          >
            Add Course
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-6"
      >
        <AnimatePresence>
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                className="w-full h-48 object-cover"
                src={
                  course.mobile_banner_image ||
                  course.desktop_banner_image ||
                  img
                }
                alt={`${course.title} Cover`}
              />
              <div className="p-6">
                <h2 className="font-bold text-2xl mb-3 text-gray-800">
                  {course.title}
                </h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <div className="text-gray-600 text-sm font-medium">
                    {course.level.charAt(0).toUpperCase() +
                      course.level.slice(1)}{" "}
                    | Released
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                    onClick={() => handleCourse(index)}
                  >
                    Get Started <FaArrowRight />
                  </motion.button>
                </div>
                <div>
                  <button
                    className=" p-4 text-red-800"
                    onClick={() => handleDelete(course.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {/* Render CoursePopup here */}
      <CoursePopup
        isOpen={isAddCoursePopup}
        togglePopup={toggleAddCoursePopup}
        addNewCourse={addNewCourse}
        setData={setData}
        setFilteredCourses={setFilteredCourses}
      />
    </motion.div>
  );
};

export default CourseList;
