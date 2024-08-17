// import React, { useState, useEffect } from "react";
// import {
//   FaArrowRight,
//   FaSearch,
//   FaBook,
//   FaQuestionCircle,
//   FaClipboardCheck,
// } from "react-icons/fa";
// import { useNavigate, useOutletContext } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import img from "../assets/rsc/c1.avif";
// import img2 from "../assets/rsc/c2.avif";
// import img3 from "../assets/rsc/c3.avif";
// import img4 from "../assets/rsc/c4.avif";
// import img5 from "../assets/rsc/c5.avif";
// import img6 from "../assets/rsc/c6.avif";
// import { getCreaterCourseFetch } from "../fetching/createSnap/courses";

// const coursesData = [
//   {
//     description: "Learn the basics of HTML and start building web pages.",
//     author: img,
//     authorName: "Techsnap",
//     courseName: "Learn HTML",
//     difficulty: "Beginner | Released",
//     units: 12,
//     quizzes: 3,
//     assessments: 3,
//   },
//   {
//     description: "Dive into CSS and style your websites beautifully.",
//     author: img2,
//     authorName: "Design Master",
//     courseName: "Master CSS",
//     difficulty: "Beginner | Released",
//     units: 15,
//     quizzes: 5,
//     assessments: 4,
//   },
//   {
//     description:
//       "Master JavaScript to build dynamic and interactive web applications.",
//     author: img3,
//     authorName: "Code Ninja",
//     courseName: "JavaScript Essentials",
//     difficulty: "Advanced | Released",
//     units: 20,
//     quizzes: 6,
//     assessments: 5,
//   },
//   {
//     description:
//       "Master JavaScript to build dynamic and interactive web applications.",
//     author: img4,
//     authorName: "Code Ninja",
//     courseName: "JavaScript Essentials",
//     difficulty: "Advanced | Released",
//     units: 20,
//     quizzes: 6,
//     assessments: 5,
//   },
//   {
//     description:
//       "Master JavaScript to build dynamic and interactive web applications.",
//     author: img5,
//     authorName: "Code Ninja",
//     courseName: "JavaScript Essentials",
//     difficulty: "Advanced | Released",
//     units: 20,
//     quizzes: 6,
//     assessments: 5,
//   },
//   {
//     description:
//       "Master JavaScript to build dynamic and interactive web applications.",
//     author: img6,
//     authorName: "Code Ninja",
//     courseName: "JavaScript Essentials",
//     difficulty: "Advanced | Released",
//     units: 20,
//     quizzes: 6,
//     assessments: 5,
//   },
// ];

// const CourseList = () => {
//   const navigate = useNavigate();
//   const { toggleAddCoursePopup } = useOutletContext();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredCourses, setFilteredCourses] = useState(coursesData);
//   const [data, setData] = useState();

//   useEffect(() => {
//     setFilteredCourses(
//       coursesData.filter((course) =>
//         course.courseName.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     );
//     getAllCourses();
//   }, [searchTerm]);

//   const handleCourse = (index) => {
//     navigate("/createsnap/course/started/info");
//   };
//   const getAllCourses = async () => {
//     const res = await getCreaterCourseFetch();
//     // console.log(res);
//     setData(res.data);
//   };
//   console.log(data);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="max-w-7xl mx-auto p-4 overflow-hidden"
//     >
//       <motion.div
//         initial={{ y: -50 }}
//         animate={{ y: 0 }}
//         className="flex flex-col md:flex-row justify-between items-center mb-10"
//       >
//         <h1 className="text-4xl font-bold mb-6 md:mb-0 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
//           Explore Courses
//         </h1>
//         <div className="flex items-center w-full md:w-auto">
//           <div className="relative w-full md:w-64 mb-4 md:mb-0">
//             <input
//               type="text"
//               placeholder="Search for a course"
//               className="w-full p-3 pl-10 border-2 border-indigo-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <FaSearch className="absolute left-3 top-4 text-indigo-400" />
//           </div>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="p-3 ml-4 rounded-full text-white font-semibold shadow-lg transform transition duration-300"
//             onClick={toggleAddCoursePopup}
//             style={{
//               background: "linear-gradient(to right, #6a11cb, #2575fc)",
//             }}
//           >
//             Add Course
//           </motion.button>
//         </div>
//       </motion.div>
//       <motion.div
//         layout
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-6"
//       >
//         <AnimatePresence>
//           {filteredCourses.map((course, index) => (
//             <motion.div
//               key={index}
//               layout
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 50 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
//             >
//               <img
//                 className="w-full h-48 object-cover"
//                 src={course.author}
//                 alt={`${course.courseName} Cover`}
//               />
//               <div className="p-6">
//                 <h2 className="font-bold text-2xl mb-3 text-gray-800">
//                   {course.courseName}
//                 </h2>
//                 <p className="text-gray-600 mb-4">{course.description}</p>
//                 <div className="flex gap-4 mb-4 text-indigo-600">
//                   <div className="flex items-center">
//                     <FaBook className="w-4 h-4 mr-1" />
//                     {course.units} Units
//                   </div>
//                   <div className="flex items-center">
//                     <FaQuestionCircle className="w-4 h-4 mr-1" />
//                     {course.quizzes} Quizzes
//                   </div>
//                   <div className="flex items-center">
//                     <FaClipboardCheck className="w-4 h-4 mr-1" />
//                     {course.assessments} Assessments
//                   </div>
//                 </div>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold">
//                     Web Development
//                   </span>
//                   <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
//                     Frontend
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <div className="text-gray-600 text-sm font-medium">
//                     {course.difficulty}
//                   </div>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
//                     onClick={() => handleCourse(index)}
//                   >
//                     <span>Get Started</span>
//                     <FaArrowRight className="w-4 h-4" />
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default CourseList;

import React, { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaSearch,
  FaBook,
  FaQuestionCircle,
  FaClipboardCheck,
} from "react-icons/fa";
import { useNavigate, useOutletContext } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getCreaterCourseFetch } from "../fetching/createSnap/courses";
import img from "../assets/rsc/c1.avif";

const CourseList = () => {
  const navigate = useNavigate();
  const { toggleAddCoursePopup } = useOutletContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [data, setData] = useState();

  useEffect(() => {
    const getAllCourses = async () => {
      const res = await getCreaterCourseFetch();
      setData(res.data);
      setFilteredCourses(res.data.results);
    };
    getAllCourses();
  }, []);

  useEffect(() => {
    if (data) {
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
                {/* Other course details here */}
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
                    <span>Get Started</span>
                    <FaArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default CourseList;
