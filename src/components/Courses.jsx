import React, { useState, useEffect } from "react";
import { FaArrowRight, FaSearch, FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "../components/ui/use-toast";
import CoursePopup from "../popups/CoursePopup";
import EditCoursePopup from "../popups/EditCoursePopup";
import img from "../assets/rsc/c1.avif";
import {
  deleteOneCourseFetch,
  getCreaterCourseFetch,
} from "../fetching/createSnap/courses";

const CourseList = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [data, setData] = useState([]);
  const [isAddCoursePopup, setIsAddCoursePopup] = useState(false);
  const [isEditCoursePopup, setIsEditCoursePopup] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [activeTab, setActiveTab] = useState("released");

  const toggleAddCoursePopup = () => {
    setIsAddCoursePopup(!isAddCoursePopup);
  };

  const toggleEditCoursePopup = (course) => {
    setCurrentCourse(course);
    setIsEditCoursePopup(!isEditCoursePopup);
  };

  const handleCourse = (courseId) => {
    navigate(`/createsnap/course/${courseId}/started/`);
  };

  const handleDelete = async (courseId) => {
    const res = await deleteOneCourseFetch(courseId);
    if (res && res.status === 204) {
      setData((prevData) => ({
        results: prevData.results?.filter((course) => course.id !== courseId),
      }));
      setFilteredCourses(
        (prevFilteredCourses) =>
          prevFilteredCourses &&
          prevFilteredCourses.filter((course) => course.id !== courseId)
      );
    }

    toast({
      title: "Course deleted successfully",
    });
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

  const AllCourses = async () => {
    const res = await getCreaterCourseFetch();
    if (res && res.data) {
      // console.log(res.data.results, "data we got in getCreaterCourseFetch");
      setData(res.data.results);
      setFilteredCourses(res.data.results);
    }
  };

  // console.log(data, filteredCourses, "data and filtered courses");
  useEffect(() => {
    AllCourses();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto p-4 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <h1
          onClick={() => navigate("html/started/info")}
          className="text-3xl md:text-5xl font-bold mb-4 md:mb-0 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 cursor-pointer"
        >
          Explore Courses
        </h1>
        <div className="flex sm:flex-row items-center w-full md:w-auto">
          <div className="relative w-full md:w-64 mb-4 sm:mb-0">
            <input
              type="text"
              placeholder="Search for a course"
              className="w-full p-3 pl-10 border border-indigo-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-4 top-4 text-indigo-400" />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 ml-4 rounded-full text-white w-1/2 md:w-auto md:font-semibold shadow-lg transform transition duration-300 mb-4 lg:mb-0"
            onClick={toggleAddCoursePopup}
            style={{
              background: "linear-gradient(to right, #6a11cb, #2575fc)",
            }}
          >
            Add Course
          </motion.button>
        </div>
      </div>

      <div className="flex justify-start md:justify-end gap-4 mb-6 sticky top-16 bg-white z-10 p-2">
        <button
          className={`px-4 py-2 font-semibold rounded ${
            activeTab === "draft"
              ? "text-black border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("draft")}
        >
          Draft
        </button>
        <button
          className={`px-4 py-2 font-semibold rounded ${
            activeTab === "released"
              ? "text-black border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("released")}
        >
          Released
        </button>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredCourses &&
            filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-102"
              >
                <img
                  className="w-full h-40 object-cover"
                  src={course.mobile_banner_image || img}
                  alt={`${course.title} Cover`}
                />
                <div className="p-5">
                  <h2 className="font-bold text-xl mb-2 text-gray-800">
                    {course.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-gray-600 text-sm">
                      {course.level.charAt(0).toUpperCase() +
                        course.level.slice(1)}{" "}
                      | {course.status}
                    </div>
                    <div className="flex items-center space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center bg-indigo-500 text-white px-3 py-1 rounded-lg text-sm shadow-sm hover:bg-indigo-600 transition duration-300"
                        onClick={() => handleCourse(course.id)}
                      >
                        Get Started <FaArrowRight className="ml-1" />
                      </motion.button>
                      <button
                        className="text-blue-600 hover:text-blue-800"
                        onClick={() => toggleEditCoursePopup(course)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800"
                        onClick={() => handleDelete(course.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>

      <CoursePopup
        isOpen={isAddCoursePopup}
        togglePopup={toggleAddCoursePopup}
        addNewCourse={addNewCourse}
        setFilteredCourses={setFilteredCourses}
        setData={setData}
      />
      {currentCourse && (
        <EditCoursePopup
          isOpen={isEditCoursePopup}
          togglePopup={() => toggleEditCoursePopup(currentCourse)}
          course={currentCourse}
          setFilteredCourses={setFilteredCourses}
          setData={setData}
        />
      )}
    </motion.div>
  );
};

export default CourseList;
