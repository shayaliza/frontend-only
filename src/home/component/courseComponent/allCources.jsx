import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

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
    navigate("/courses/details");
  };
  const [selectedTag, setSelectedTag] = useState("all");

  const tags = ["all", "python", "web-development", "frontend"];
  const courses = [
    {
      title: "Learn Python",
      image: "/src/assets/courses/sunset.jpg",
      profileImage: "/src/assets/profile.jpg",
      provider: "Techsnap",
      type: "company",
      enrollment: "2.8k",
      duration: "3h 20 min",
      details: [
        { icon: "/src/assets/time.svg", label: "12 Courses" },
        { icon: "/src/assets/time.svg", label: "12 Courses" },
        { icon: "/src/assets/time.svg", label: "12 Courses" },
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
      image: "/src/assets/courses/sunset.jpg",
      profileImage: "/src/assets/profile.jpg",
      provider: "Techsnap",
      type: "company",
      enrollment: "2.8k",
      duration: "3h 20 min",
      details: [
        { icon: "/src/assets/time.svg", label: "12 Courses" },
        { icon: "/src/assets/time.svg", label: "12 Courses" },
        { icon: "/src/assets/time.svg", label: "12 Courses" },
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
      image: "/src/assets/courses/sunset.jpg",
      profileImage: "/src/assets/profile.jpg",
      provider: "Techsnap",
      type: "company",
      enrollment: "2.8k",
      duration: "3h 20 min",
      details: [
        { icon: "/src/assets/time.svg", label: "12 Courses" },
        { icon: "/src/assets/time.svg", label: "12 Courses" },
        { icon: "/src/assets/time.svg", label: "12 Courses" },
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
      image: "/src/assets/courses/sunset.jpg",
      profileImage: "/src/assets/profile.jpg",
      provider: "Techsnap",
      type: "company",
      enrollment: "2.8k",
      duration: "3h 20 min",
      details: [
        { icon: "/src/assets/time.svg", label: "12 Courses" },
        { icon: "/src/assets/time.svg", label: "12 Courses" },
        { icon: "/src/assets/time.svg", label: "12 Courses" },
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
      image: "/src/assets/courses/sunset.jpg",
      profileImage: "/src/assets/profile.jpg",
      provider: "Techsnap",
      type: "company",
      enrollment: "2.8k",
      duration: "3h 20 min",
      details: [
        { icon: "/src/assets/time.svg", label: "12 Courses" },
        { icon: "/src/assets/time.svg", label: "12 Courses" },
        { icon: "/src/assets/time.svg", label: "12 Courses" },
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
      image: "/src/assets/courses/sunset.jpg",
      profileImage: "/src/assets/profile.jpg",
      provider: "Techsnap",
      type: "company",
      enrollment: "2.8k",
      duration: "3h 20 min",
      details: [
        { icon: "/src/assets/time.svg", label: "12 Courses" },
        { icon: "/src/assets/time.svg", label: "12 Courses" },
        { icon: "/src/assets/time.svg", label: "12 Courses" },
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
      image: "/src/assets/courses/sunset.jpg",
      profileImage: "/src/assets/profile.jpg",
      provider: "Techsnap",
      type: "company",
      enrollment: "2.8k",
      duration: "3h 20 min",
      details: [
        { icon: "/src/assets/time.svg", label: "12 Courses" },
        { icon: "/src/assets/time.svg", label: "12 Courses" },
        { icon: "/src/assets/time.svg", label: "12 Courses" },
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
      image: "/src/assets/courses/sunset.jpg",
      profileImage: "/src/assets/profile.jpg",
      provider: "Techsnap",
      type: "company",
      enrollment: "2.8k",
      duration: "3h 20 min",
      details: [
        { icon: "/src/assets/time.svg", label: "12 Courses" },
        { icon: "/src/assets/time.svg", label: "12 Courses" },
        { icon: "/src/assets/time.svg", label: "12 Courses" },
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
      image: "/src/assets/courses/sunset.jpg",
      profileImage: "/src/assets/profile.jpg",
      provider: "Techsnap",
      type: "company",
      enrollment: "2.8k",
      duration: "3h 20 min",
      details: [
        { icon: "/src/assets/time.svg", label: "12 Courses" },
        { icon: "/src/assets/time.svg", label: "12 Courses" },
        { icon: "/src/assets/time.svg", label: "12 Courses" },
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
    <div
      className="cardCourse border border-black h-auto pb-4 w-full"
      data-tags={course.tags}
    >
      <div className="flex flex-col">
        <img
          src={course.image}
          className="w-full object-cover h-[210px] md:w-[350px]"
          alt="Course"
        />
        <div className="font-bold text-lg ml-2 my-2">{course.title}</div>
        <div className="flex flex-row ml-2">
          <div className="mr-2">
            <img
              src={course.profileImage}
              className="rounded-full h-[60px] w-[60px]"
              alt="Profile"
            />
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-sm">{course.provider}</div>
            <div className="text-sm text-gray-500">{course.type}</div>
            <div className="text-xs text-gray-500">
              {course.enrollment} enrolled | {course.duration}
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-3 text-sm justify-center gap-4 lg:text-xs">
          {course.details.map((detail, index) => (
            <div key={index} className="flex gap-1">
              <img src={detail.icon} alt={detail.label} />
              <div className="text-[#f4b9cd] font-bold">{detail.label}</div>
            </div>
          ))}
        </div>
        <div className="flex ml-2 mt-3 gap-2 flex-wrap">
          {course.tags.map((tag, index) => (
            <div
              key={index}
              className="px-4 bg-orange-500 text-sm text-white rounded-lg"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="flex mt-3 ml-4 justify-between items-center">
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
            <div className="text-sm font-semibold">{course.levelText}</div>
          </div>
          <div className="mr-4">
            <div className="border border-black px-2 py-2 font-bold flex items-center cursor-pointer">
              <div className="flex gap-1" onClick={handleClick}>
                <div>Get Started</div>
                {/* <img
                  width="28"
                  height="28"
                  src="https://img.icons8.com/ultraviolet/40/long-arrow-right.png"
                  alt="arrow"
                /> */}
                <FaArrowRight className="mt-1" />
              </div>
            </div>
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
      <div className="text-3xl font-bold mb-6 ">
        <p>All Courses</p>
      </div>
      <div
        id="sticky-tags"
        className={`flex flex-wrap gap-2 mb-8 max-w-[1150px] mx-auto px-4 py-2 bg-white h-auto overflow-hidden md:overflow-auto 
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
            <select className="border-none focus:outline-none rounded-md font-bold">
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
                <select className="border-none focus:outline-none rounded-md font-bold">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              <div className="flex items-center rounded-3xl border-gray-500 p-3 border flex-shrink-0">
                <span className="mr-2">Option 2:</span>
                <select className="border-none focus:outline-none rounded-md font-bold">
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
