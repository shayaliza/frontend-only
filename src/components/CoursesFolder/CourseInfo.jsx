import React, { useState, useRef } from "react";
import { FaTrash } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import {
  getCoursePrequisite,
  createCoursePrequisite,
  delCoursePrequisite,
} from "./../../fetching/createSnap/prequisite";

import {
  getCourseSkill,
  createCourseSkill,
  updateCourseSkill,
  delCourseSkill,
} from "./../../fetching/createSnap/skills"; // Import the skill functions
import { getOneCourseFetch } from "../../fetching/createSnap/courses";

function CourseDetails() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const prerequisitesResponse = await getCoursePrequisite(courseId);
  //       setPrerequisites(prerequisitesResponse.data.results);
  //       console.log(prerequisitesResponse.data);

  //       const skillsResponse = await getCourseSkill(courseId);
  //       setSkills(skillsResponse.data.results);

  //       // Get Cousse Name
  //       const response = await getOneCourseFetch(courseId);
  //       setTittle(response.data.course.title);
  //     } catch (error) {
  //       console.error("Failed to fetch data", error);
  //     }
  //   };

  //   fetchData();
  // }, [courseId]);

  const [skills, setSkills] = useState([
    "Understanding of React Hooks",
    "State Management with Context API",
    "Building Scalable Components",
    "Advanced Performance Optimization",
  ]);
  const [prerequisites, setPrerequisites] = useState([
    "Basic understanding of React",
    "Familiarity with JavaScript ES6+",
    "Experience with HTML and CSS",
  ]);

  const [editorValue, setEditorValue] = useState("");
  const [editSkills, setEditSkills] = useState(false);
  const [editOverview, setEditOverview] = useState(false);
  const [editPrerequisites, setEditPrerequisites] = useState(false);
  const [skillsOptions, setSkillsOptions] = useState([]);
  const [prerequisitesOptions, setPrerequisitesOptions] = useState([]);
  const overviewRef = useRef();

  const handleChange = (value) => {
    setEditorValue(value);
  };

  const handleAddSkills = () => {
    setSkillsOptions([
      ...skillsOptions,
      { id: skillsOptions.length + 1, value: "" },
    ]);
  };

  const handleDeleteSkills = (id) => {
    setSkillsOptions(
      skillsOptions.filter((skillOption) => skillOption.id !== id)
    );
  };

  const handleAddPrerequisites = () => {
    setPrerequisitesOptions([
      ...prerequisitesOptions,
      { id: prerequisitesOptions.length + 1, value: "" },
    ]);
  };

  const handleDeletePrerequisites = (id) => {
    setPrerequisitesOptions(
      prerequisitesOptions.filter(
        (prerequisiteOption) => prerequisiteOption.id !== id
      )
    );
  };

  const togglePopup = () => {
    setEditOverview(false);
    setEditSkills(false);
    setEditPrerequisites(false);
  };

  const handleEditSkills = () => {
    setSkillsOptions(
      skills.map((skill, index) => ({ id: index + 1, value: skill }))
    );
    setEditSkills(true);
  };

  const handleEditPrerequisites = () => {
    setPrerequisitesOptions(
      prerequisites.map((prerequisite, index) => ({
        id: index + 1,
        value: prerequisite,
      }))
    );
    setEditPrerequisites(true);
  };

  const handleEdit = () => {
    if (overviewRef.current) {
      setEditorValue(overviewRef.current.innerHTML);
    }
    setEditOverview(true);
  };

  const handleSave = () => {
    if (overviewRef.current) {
      overviewRef.current.innerHTML = editorValue;
    }
    togglePopup();
  };

  const handleSaveSkills = () => {
    setSkills(skillsOptions.map((option) => option.value));
    togglePopup();
  };

  const handleSavePrerequisites = () => {
    setPrerequisites(prerequisitesOptions.map((option) => option.value));
    togglePopup();
  };

  return (
    <>
      <div className="mx-auto px-4 py-2 lg:p-8">
        <div className="w-full md:w-2/3">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl underline">
              Advanced React Development
            </h1>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Course Overview
              </h2>
              <button
                className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105"
                onClick={handleEdit}
              >
                <span className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    ></path>
                  </svg>
                  Edit
                </span>
              </button>
            </div>
            <p className="text-gray-700" ref={overviewRef}>
              This course dives deep into advanced React concepts, including
              hooks, context, and state management. Learn how to build scalable
              applications with cutting-edge React techniques.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <div className="flex justify-between">
              <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
                Skills You Will Gain
              </h2>
              <button
                className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105"
                onClick={handleEditSkills}
              >
                <span className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    ></path>
                  </svg>
                  Edit
                </span>
              </button>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {skills.map((skill, index) => (
                <li key={index} className="flex justify-between">
                  <div className="flex">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414L10 13.414l-3.707-3.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {skill}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Prerequisites
              </h2>
              <button
                className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105"
                onClick={handleEditPrerequisites}
              >
                <span className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    ></path>
                  </svg>
                  Edit
                </span>
              </button>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {prerequisites.map((prerequisite, index) => (
                <li key={index} className="flex justify-between">
                  <div className="flex">
                    <svg
                      className="w-5 h-5 text-yellow-500 mr-2 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414L10 13.414l-3.707-3.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {prerequisite}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {editOverview && (
        <div className="fixed inset-0 backdrop-blur-md backdrop-brightness-150 flex items-center justify-center z-50">
          <div className="backdrop-blur-lg backdrop-brightness-200 rounded-lg shadow-xl border relative flex flex-col md:flex-row w-full max-w-4xl mx-4 my-8 md:my-16 lg:my-24 h-[calc(100vh-8rem)] md:h-[calc(100vh-6rem)] lg:h-[calc(100vh-14rem)]">
            <div className="w-full md:w-1/2 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1602578558883-a40f8c22b3a0?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzJTIwYWRzfGVufDB8fDB8fHww&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=60"
                alt="Course Image"
                className="w-3/4 h-full object-cover mx-auto"
              />
            </div>
            <div className="w-full md:w-2/3 flex flex-col p-6 md:p-8 lg:gap-3 bg-white border border-gray-200 rounded-r-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Add or Edit Course Overview
              </h3>
              <h4 className="text-xl font-semibold">Course Overview</h4>
              <ReactQuill
                value={editorValue}
                onChange={handleChange}
                className="h-[40vh]"
              />
              <div className="absolute bottom-2 right-2 flex space-x-4">
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 w-full"
                  onClick={togglePopup}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {editSkills && (
        <div className="fixed inset-0 backdrop-blur-md backdrop-brightness-150 flex items-center justify-center z-50">
          <div className="backdrop-blur-md backdrop-brightness-150 rounded-lg shadow-xl border relative flex flex-col md:flex-row w-full max-w-4xl mx-4 my-8 md:my-16 lg:my-24 h-[calc(100vh-8rem)] md:h-[calc(100vh-6rem)] lg:h-[calc(100vh-14rem)]">
            <div className="w-full md:w-1/2 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1602578558883-a40f8c22b3a0?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzJTIwYWRzfGVufDB8fDB8fHww&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=60"
                alt="Course Image"
                className="w-2/3 h-full object-cover mx-auto"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col p-6 md:p-8 lg:gap-6 bg-white border border-gray-200 rounded-r-lg overflow-y-auto shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Edit Skills
              </h3>
              <h4 className="text-xl font-semibold">Skills</h4>
              <div className="flex flex-col space-y-4">
                {skillsOptions.map((skillOption, index) => (
                  <div key={index} className="relative flex items-center">
                    <input
                      type="text"
                      value={skillOption.value}
                      onChange={(e) => {
                        const updatedSkills = [...skillsOptions];
                        updatedSkills[index].value = e.target.value;
                        setSkillsOptions(updatedSkills);
                      }}
                      className="border border-gray-300 rounded-lg py-2 w-full pl-4"
                      placeholder="Add skill"
                    />
                    <button
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500 px-2 py-2"
                      onClick={() => handleDeleteSkills(skillOption.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))}
              </div>

              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                onClick={handleAddSkills}
              >
                Add Skill
              </button>
              <div className=" absolute bottom-2 right-2 flex justify-between items-center mt-6">
                <div className="flex space-x-4">
                  <button
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 w-full"
                    onClick={togglePopup}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full"
                    onClick={handleSaveSkills}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {editPrerequisites && (
        <div className="fixed inset-0 backdrop-blur-md backdrop-brightness-150 flex items-center justify-center z-50">
          <div className="backdrop-blur-md backdrop-brightness-150 rounded-lg shadow-xl border relative flex flex-col md:flex-row w-full max-w-4xl mx-4 my-8 md:my-16 lg:my-24 h-[calc(100vh-8rem)] md:h-[calc(100vh-6rem)] lg:h-[calc(100vh-14rem)]">
            <div className="w-full md:w-1/2 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1602578558883-a40f8c22b3a0?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzJTIwYWRzfGVufDB8fDB8fHww&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=60"
                alt="Course Image"
                className="w-2/3 h-full object-cover mx-auto"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col p-6 md:p-8 lg:gap-6 bg-white border border-gray-200 rounded-r-lg overflow-y-auto shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Edit Prerequisites
              </h3>
              <h4 className="text-xl font-semibold">Prerequisites</h4>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-4">
                  {prerequisitesOptions.map((prerequisiteOption, index) => (
                    <div key={index} className="relative flex items-center">
                      <input
                        type="text"
                        value={prerequisiteOption.value}
                        onChange={(e) => {
                          const updatedPrerequisites = [
                            ...prerequisitesOptions,
                          ];
                          updatedPrerequisites[index].value = e.target.value;
                          setPrerequisitesOptions(updatedPrerequisites);
                        }}
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full pl-4"
                        placeholder="Add prerequisite"
                      />
                      <button
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500 px-2 py-2"
                        onClick={() =>
                          handleDeletePrerequisites(prerequisiteOption.id)
                        }
                      >
                        <FaTrash />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                onClick={handleAddPrerequisites}
              >
                Add Prerequisite
              </button>
              <div className=" absolute bottom-2 right-2 flex justify-between items-center mt-6">
                <div className="flex space-x-4">
                  <button
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 w-full"
                    onClick={togglePopup}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full"
                    onClick={handleSavePrerequisites}
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

export default CourseDetails;
