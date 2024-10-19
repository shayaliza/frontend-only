import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import sunset from "./../../assets/courses/sunset.jpg";
import profile from "./../../assets/profile.jpg";
import time from "./../../assets/time.svg";
// Tag Component
const Tag = ({ tag, isActive, onClick }) => (
  <div
    className={`tagCourse p-3 rounded-md flex-shrink-0 ${
      isActive ? "bg-black text-white" : "bg-gray-200 text-black"
    }`}
    onClick={() => onClick(tag)}
  >
    {tag}
  </div>
);

// Card Component

// Main Component
const AllCourses = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard/courses/details");
  };
  const [selectedTag, setSelectedTag] = useState("all");

  const tags = ["all", "python", "web-development", "frontend"];
  const courses = [
    {
      title: "Learn Python",
      image: sunset,
      profileImage: profile,
      provider: "Techsnap",
      type: "company",
      enrollment: "2.8k",
      duration: "3h 20 min",
      details: [
        { icon: time, label: "12 Courses" },
        { icon: time, label: "12 Courses" },
        { icon: time, label: "12 Courses" },
      ],
      tags: ["Web Development", "Frontend"],
      level: [
        "https://img.icons8.com/ios-glyphs/30/full-stop--v1.png",
        "https://img.icons8.com/ios-glyphs/30/full-stop--v1.png",
        "https://img.icons8.com/ios-glyphs/30/full-stop--v1.png",
      ],
      levelText: "Beginner",
    },
    {
      title: "Learn Python",
      image: sunset,
      profileImage: profile,
      provider: "Techsnap",
      type: "company",
      enrollment: "2.8k",
      duration: "3h 20 min",
      details: [
        { icon: time, label: "12 Courses" },
        { icon: time, label: "12 Courses" },
        { icon: time, label: "12 Courses" },
      ],
      tags: ["Web Development", "Frontend"],
      level: [
        "https://img.icons8.com/ios-glyphs/30/full-stop--v1.png",
        "https://img.icons8.com/ios-glyphs/30/full-stop--v1.png",
        "https://img.icons8.com/ios-glyphs/30/full-stop--v1.png",
      ],
      levelText: "Beginner",
    },
    {
      title: "Learn Python",
      image: sunset,
      profileImage: profile,
      provider: "Techsnap",
      type: "company",
      enrollment: "2.8k",
      duration: "3h 20 min",
      details: [
        { icon: time, label: "12 Courses" },
        { icon: time, label: "12 Courses" },
        { icon: time, label: "12 Courses" },
      ],
      tags: ["Web Development", "Frontend"],
      level: [
        "https://img.icons8.com/ios-glyphs/30/full-stop--v1.png",
        "https://img.icons8.com/ios-glyphs/30/full-stop--v1.png",
        "https://img.icons8.com/ios-glyphs/30/full-stop--v1.png",
      ],
      levelText: "Beginner",
    },
    {
      title: "Learn Python",
      image: sunset,
      profileImage: profile,
      provider: "Techsnap",
      type: "company",
      enrollment: "2.8k",
      duration: "3h 20 min",
      details: [
        { icon: time, label: "12 Courses" },
        { icon: time, label: "12 Courses" },
        { icon: time, label: "12 Courses" },
      ],
      tags: ["Web Development", "Frontend"],
      level: [
        "https://img.icons8.com/ios-glyphs/30/full-stop--v1.png",
        "https://img.icons8.com/ios-glyphs/30/full-stop--v1.png",
        "https://img.icons8.com/ios-glyphs/30/full-stop--v1.png",
      ],
      levelText: "Beginner",
    },
    {
      title: "Learn Python",
      image: sunset,
      profileImage: profile,
      provider: "Techsnap",
      type: "company",
      enrollment: "2.8k",
      duration: "3h 20 min",
      details: [
        { icon: time, label: "12 Courses" },
        { icon: time, label: "12 Courses" },
        { icon: time, label: "12 Courses" },
      ],
      tags: ["python"],
      level: [
        "https://img.icons8.com/ios-glyphs/30/full-stop--v1.png",
        "https://img.icons8.com/ios-glyphs/30/full-stop--v1.png",
        "https://img.icons8.com/ios-glyphs/30/full-stop--v1.png",
      ],
      levelText: "Beginner",
    },
    {
      title: "Learn Python",
      image: sunset,
      profileImage: profile,
      provider: "Techsnap",
      type: "company",
      enrollment: "2.8k",
      duration: "3h 20 min",
      details: [
        { icon: time, label: "12 Courses" },
        { icon: time, label: "12 Courses" },
        { icon: time, label: "12 Courses" },
      ],
      tags: ["python"],
      level: [
        "https://img.icons8.com/ios-glyphs/30/full-stop--v1.png",
        "https://img.icons8.com/ios-glyphs/30/full-stop--v1.png",
        "https://img.icons8.com/ios-glyphs/30/full-stop--v1.png",
      ],
      levelText: "Beginner",
    },
    {
      title: "Learn Python",
      image: sunset,
      profileImage: profile,
      provider: "Techsnap",
      type: "company",
      enrollment: "2.8k",
      duration: "3h 20 min",
      details: [
        { icon: time, label: "12 Courses" },
        { icon: time, label: "12 Courses" },
        { icon: time, label: "12 Courses" },
      ],
      tags: ["python"],
      level: [
        "https://img.icons8.com/ios-glyphs/30/full-stop--v1.png",
        "https://img.icons8.com/ios-glyphs/30/full-stop--v1.png",
        "https://img.icons8.com/ios-glyphs/30/full-stop--v1.png",
      ],
      levelText: "Beginner",
    },
    {
      title: "Learn Python",
      image: sunset,
      profileImage: profile,
      provider: "Techsnap",
      type: "company",
      enrollment: "2.8k",
      duration: "3h 20 min",
      details: [
        { icon: time, label: "12 Courses" },
        { icon: time, label: "12 Courses" },
        { icon: time, label: "12 Courses" },
      ],
      tags: ["python"],
      level: [
        "https://img.icons8.com/ios-glyphs/30/full-stop--v1.png",
        "https://img.icons8.com/ios-glyphs/30/full-stop--v1.png",
        "https://img.icons8.com/ios-glyphs/30/full-stop--v1.png",
      ],
      levelText: "Beginner",
    },
    {
      title: "Learn Python",
      image: sunset,
      profileImage: profile,
      provider: "Techsnap",
      type: "company",
      enrollment: "2.8k",
      duration: "3h 20 min",
      details: [
        { icon: time, label: "12 Courses" },
        { icon: time, label: "12 Courses" },
        { icon: time, label: "12 Courses" },
      ],
      tags: ["frontend"],
      level: [
        "https://img.icons8.com/ios-glyphs/30/full-stop--v1.png",
        "https://img.icons8.com/ios-glyphs/30/full-stop--v1.png",
        "https://img.icons8.com/ios-glyphs/30/full-stop--v1.png",
      ],
      levelText: "Beginner",
    },
    // Add more course objects as needed
  ];
  const Card = ({ course }) => (
    <div className="border bg-white dark:bg-gray-700 pb-2 border-gray-200 shadow-lg rounded-xl overflow-hidden w-full lg:w-[350px] mb-4 lg:mb-0 transition duration-300 ease-in-out  hover:shadow-2xl">
      <div className="flex flex-col">
        <img
          src={course.image}
          className="w-full object-cover h-[210px] rounded-t-xl"
          alt="Course Banner"
        />
        <div className="font-bold text-lg ml-4 my-3 text-gray-800 dark:text-white">
          {course.title}
        </div>
        <div className="flex items-center ml-4">
          <img
            src={course.profileImage}
            className="rounded-full h-[60px] w-[60px] mr-4"
            alt="Instructor Profile"
          />
          <div className="flex flex-col">
            <div className="font-bold text-sm text-gray-700 dark:text-white">
              {course.provider}
            </div>
            <div className="text-xs text-gray-500">{course.type}</div>
            <div className="text-xs text-gray-400">
              {course.enrollment} enrolled | {course.duration}
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-4 justify-center gap-6 text-xs">
          <div className="flex gap-1 items-center">
            <img src={time} alt="Time Icon" className="w-4 h-4" />
            <div className="text-pink-500 font-semibold">12 Courses</div>
          </div>
          <div className="flex gap-1 items-center">
            <img src={time} alt="Time Icon" className="w-4 h-4" />
            <div className="text-pink-500 font-semibold">12 Courses</div>
          </div>
          <div className="flex gap-1 items-center">
            <img src={time} alt="Time Icon" className="w-4 h-4" />
            <div className="text-pink-500 font-semibold">12 Courses</div>
          </div>
        </div>

        <div className="flex ml-4 mt-3 gap-2">
          {course.tags.map((tag, index) => (
            <div
              className="px-4 py-1 bg-orange-500 text-xs text-white rounded-full"
              key={index}
            >
              {tag}
            </div>
          ))}
        </div>

        <div className="flex mt-4 ml-4 justify-between items-center px-4">
          <div className="flex flex-col">
            <div className="flex">
              {course.level.map((icon, index) => (
                <img
                  key={index}
                  width="15"
                  height="15"
                  src={icon}
                  alt="Level Icon"
                />
              ))}
            </div>
            <div className="text-sm font-semibold text-gray-600 dark:text-white mt-1">
              {course.levelText}
            </div>
          </div>
          <div className="mr-4">
            <button
              className="border border-gray-300 px-4 py-2 font-bold flex items-center gap-1 rounded-lg transition hover:bg-gray-100 hover:border-gray-500 dark:text-white dark:hover:text-black"
              onClick={handleClick}
            >
              Get Started
              <FaArrowRight className="text-xs" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <div className="py-8 px-4 relative">
      <div className="text-3xl font-bold mb-6 text-black md:text-white ">
        <p>All Courses</p>
      </div>
      <div
        id="sticky-tags"
        className={`flex flex-wrap gap-2 mb-8 max-w-[1150px] mx-auto px-4 py-2  h-auto overflow-hidden md:overflow-auto 
        }`}
      >
        {tags.map((tag) => (
          <Tag
            key={tag}
            tag={tag}
            isActive={selectedTag === tag}
            onClick={handleTagClick}
          />
        ))}
      </div>
      <div className="w-full max-w-[1150px] mx-auto px-4">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between mb-6">
          <div className="flex items-center rounded-3xl border-gray-500 p-3 border flex-shrink-0 w-full md:w-auto">
            <span className="mr-2">Sort by:</span>
            <select className="border-none focus:outline-none rounded-md font-bold bg-transparent">
              <option>Most Popular</option>
              <option>Filter</option>
              <option>Filter</option>
            </select>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto">
            <span className="text-xl font-semibold p-3">Filter by:</span>
            <div className="flex flex-col gap-2 w-full md:flex-row md:w-auto">
              <div className="flex items-center rounded-3xl border-gray-500 p-3 border flex-shrink-0">
                <span className="mr-2">Option 1:</span>
                <select className="border-none focus:outline-none rounded-md font-bold bg-transparent">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              <div className="flex items-center rounded-3xl border-gray-500 p-3 border flex-shrink-0">
                <span className="mr-2">Option 2:</span>
                <select className="border-none focus:outline-none rounded-md font-bold bg-transparent">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1150px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses
            .filter(
              (course) =>
                selectedTag === "all" || course.tags.includes(selectedTag)
            )
            .map((course, index) => (
              <Card key={index} course={course} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
