import React, { useState, useEffect } from 'react';
import { FaRocket, FaSearch, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import { motion } from 'framer-motion';
import './courses-style.css';

const coursesData = [
  {
    description: "Learn the fundamentals of testing in Ruby on Rails from experienced developers.",
    author: '../assets/rsc/author-1.jpg',
    authorName: 'The Pragmatic Programmers',
    courseName: 'Fundamentals of Testing Using Rails',
    difficulty: 'Advanced',
  },
  {
    description: "Join Alexandre Rousseau to learn how to build your own API with Rails.",
    author: '../assets/rsc/author-2.jpg',
    authorName: 'Alexandre Rousseau',
    courseName: 'Building your own API with Rails',
    difficulty: 'Beginner',
  },
  {
    description: "Eric Gitonga guides you through the process of developing web apps with Streamlit.",
    author: '../assets/rsc/author-3.jpg',
    authorName: 'Eric Gitonga',
    courseName: 'Develop Web Apps with Streamlit',
    difficulty: 'Beginner',
  },
  {
    description: "Master the Deno JavaScript runtime with Francesco Leardini and rageal.",
    author: '../assets/rsc/author-4.jpg',
    authorName: 'Francesco Leardini',
    courseName: 'Master the Deno JavaScript Runtime',
    difficulty: 'Beginner',
  },
  {
    description: "Learn to master big data with Apache Spark and Java from Juan Bruno.",
    author: '../assets/rsc/author-5.jpg',
    authorName: 'Juan Bruno',
    courseName: 'Mastering Big Data with Apache Spark and Java',
    difficulty: 'Intermediate',
  },
  {
    description: "Raghav Aggarwal provides a programmer's guide to AWS S3 applications.",
    author: '../assets/rsc/author-6.jpg',
    authorName: 'Raghav Aggarwal',
    courseName: 'A Programmer’s Guide to AWS S3',
    difficulty: 'Beginner',
  },
];

function Careerpath() {
  const navigate = useNavigate();
  const { toggleAddCareerPathPopup } = useOutletContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(coursesData);
  const [activeTab, setActiveTab] = useState("released");

  useEffect(() => {
    setFilteredCourses(
      coursesData.filter(course =>
        course.courseName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  

  const handlePreview = (courseId) => {
    navigate(`/createsnap/career-path/preview/info`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" md:course-container bg-gradient-to-br min-h-screen px-8 py-4"
    >
      <motion.div 
        className="flex flex-col w-full md:justify-between md:flex-row md:items-center mb-4 md:mb-10"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <h1 className="text-2xl lg:text-4xl font-bold mb-6 md:mb-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
          Explore Career Path
        </h1>
        <div className="flex items-center w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search for a course"
              className="flex-grow w-full p-3 pl-10 border-2 border-purple-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-4 text-purple-400" />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 ml-4 rounded-full text-white w-1/2 md:w-auto md:font-semibold shadow-lg transform transition duration-300"
            onClick={toggleAddCareerPathPopup}
            style={{
              background: "linear-gradient(to right, #6a11cb, #2575fc)",
            }}
          >
            Add Course
          </motion.button>
        </div>
      </motion.div>
      <div
        className="sticky top-0 bg-white z-10 p-2"
      >
        <div className="flex justify-start md:justify-end gap-4 mb-2">
          <button
            className={`p-3 font-semibold  transition-transform ${
              activeTab === "draft"
                ? " text-black border-b-4 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("draft")}
          >
            Draft
          </button>
          <button
            className={`p-3 font-semibold transition-transform ${
              activeTab === "released"
                ? "text-black border-b-4 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("released")}
          >
            Released
          </button>
        </div>
      </div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {filteredCourses.map((course, index) => (
  <motion.div
    key={index}
    className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col border"
    whileHover={{ y: -5 }}
  >
    <div className="p-6 flex-grow">
      <h3 className="text-2xl font-bold mb-3 text-gray-800">{course.courseName}</h3>
      <p className="text-gray-600 mb-4">{course.description}</p>
      <div className="flex items-center mb-4">
        <img src={course.author} alt="Course Author" className="w-10 h-10 rounded-full mr-3" />
        <p className="font-medium text-gray-700">{course.authorName}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <FaRocket className="w-5 h-5 text-purple-500 mr-2" />
          <p className="text-sm font-medium text-gray-600">Skill Path 3</p>
        </div>
        <div className="flex items-center">
          <FaStar className="w-5 h-5 text-yellow-400 mr-1" />
          <p className="text-sm font-medium text-gray-600">{course.difficulty}</p>
        </div>
      </div>
    </div>
    <motion.button
      className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
      onClick={() => handlePreview(index)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Preview Course
    </motion.button>
  </motion.div>
))}
      </motion.div>
    </motion.div>
  );
}

export default Careerpath;