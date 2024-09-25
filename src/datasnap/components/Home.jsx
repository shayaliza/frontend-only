import React, { useState } from "react";
import { FaHeart, FaComment } from "react-icons/fa";
import image1 from "../assets/rsc/radu-florin-4_QFycgpC4c-unsplash.jpg";
import image2 from "../assets/rsc/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg";
import image3 from "../assets/rsc/joshua-earle-ICE__bo2Vws-unsplash.jpg";
import image4 from "../assets/rsc/arnold-francisca-nPhl2x4fk2s-unsplash.jpg";
import activityFeedIcon from "../assets/rsc/icons8-activity-feed-24.png";
import featuredIcon from "../assets/rsc/icons8-star-24.png";
import recentIcon from "../assets/rsc/icons8-clock-24.png";
import read from "../assets/rsc/read.png";
import img2 from "../assets/rsc/image2.png";
import { useTheme } from "../../DarkMode/ThemeProvider";

const tabs = [
  { id: "myfeed", icon: activityFeedIcon, text: "My Feed" },
  { id: "featured", icon: featuredIcon, text: "Featured" },
  { id: "recent", icon: recentIcon, text: "Recent" },
];

const images = [
  image1, image2, image3, image4, image1, image2, image3, image4,
  image1, image2, image3, image4, image1, image2, image3, image4,
  image1, image2, image3, image4, image1, image2, image3, image4,
  image1, image2, image3, image4, image1, image2, image3, image4,
  image1, image2, image3, image4, image1, image2, image3, image4,
];

const articleData = [
    {
      profileImg: image1,
      author: "Simon Egersand 🎈",
      date: "prplcode.hashnode.dev · Jul 2, 2022",
      title: "Write Git Commit Messages That Your Colleagues Will Love",
      description:
        "Git commit messages are how we communicate to our future selves. They help you understand why a certain line of code was added to the code base. That's why knowing how to write a good Git commit messa…",
      readTime: "4 mins",
      reactions: 23,
      comments: 4,
      tags: ["Javascript", "Git", "+1"],
    },
    {
      profileImg: image2,
      author: "Simon Egersand 🎈",
      date: "prplcode.hashnode.dev · Jul 2, 2022",
      title: "Write Git Commit Messages That Your Colleagues Will Love",
      description:
        "Git commit messages are how we communicate to our future selves. They help you understand why a certain line of code was added to the code base. That's why knowing how to write a good Git commit messa…",
      readTime: "4 mins",
      reactions: 23,
      comments: 4,
      tags: ["Javascript", "Git", "+1"],
    },
    {
      profileImg: image2,
      author: "Simon Egersand 🎈",
      date: "prplcode.hashnode.dev · Jul 2, 2022",
      title: "Write Git Commit Messages That Your Colleagues Will Love",
      description:
        "Git commit messages are how we communicate to our future selves. They help you understand why a certain line of code was added to the code base. That's why knowing how to write a good Git commit messa…",
      readTime: "4 mins",
      reactions: 23,
      comments: 4,
      tags: ["Javascript", "Git", "+1"],
    },
    {
      profileImg: image2,
      author: "Simon Egersand 🎈",
      date: "prplcode.hashnode.dev · Jul 2, 2022",
      title: "Write Git Commit Messages That Your Colleagues Will Love",
      description:
        "Git commit messages are how we communicate to our future selves. They help you understand why a certain line of code was added to the code base. That's why knowing how to write a good Git commit messa…",
      readTime: "4 mins",
      reactions: 23,
      comments: 4,
      tags: ["Javascript", "Git", "+1"],
    },
    {
      profileImg: image2,
      author: "Simon Egersand 🎈",
      date: "prplcode.hashnode.dev · Jul 2, 2022",
      title: "Write Git Commit Messages That Your Colleagues Will Love",
      description:
        "Git commit messages are how we communicate to our future selves. They help you understand why a certain line of code was added to the code base. That's why knowing how to write a good Git commit messa…",
      readTime: "4 mins",
      reactions: 23,
      comments: 4,
      tags: ["Javascript", "Git", "+1"],
    },
    {
      profileImg: image2,
      author: "Simon Egersand 🎈",
      date: "prplcode.hashnode.dev · Jul 2, 2022",
      title: "Write Git Commit Messages That Your Colleagues Will Love",
      description:
        "Git commit messages are how we communicate to our future selves. They help you understand why a certain line of code was added to the code base. That's why knowing how to write a good Git commit messa…",
      readTime: "4 mins",
      reactions: 23,
      comments: 4,
      tags: ["Javascript", "Git", "+1"],
    },
    {
      profileImg: image2,
      author: "Simon Egersand 🎈",
      date: "prplcode.hashnode.dev · Jul 2, 2022",
      title: "Write Git Commit Messages That Your Colleagues Will Love",
      description:
        "Git commit messages are how we communicate to our future selves. They help you understand why a certain line of code was added to the code base. That's why knowing how to write a good Git commit messa…",
      readTime: "4 mins",
      reactions: 23,
      comments: 4,
      tags: ["Javascript", "Git", "+1"],
    },
    {
      profileImg: image2,
      author: "Simon Egersand 🎈",
      date: "prplcode.hashnode.dev · Jul 2, 2022",
      title: "Write Git Commit Messages That Your Colleagues Will Love",
      description:
        "Git commit messages are how we communicate to our future selves. They help you understand why a certain line of code was added to the code base. That's why knowing how to write a good Git commit messa…",
      readTime: "4 mins",
      reactions: 23,
      comments: 4,
      tags: ["Javascript", "Git", "+1"],
    },
    {
      profileImg: image2,
      author: "Simon Egersand 🎈",
      date: "prplcode.hashnode.dev · Jul 2, 2022",
      title: "Write Git Commit Messages That Your Colleagues Will Love",
      description:
        "Git commit messages are how we communicate to our future selves. They help you understand why a certain line of code was added to the code base. That's why knowing how to write a good Git commit messa…",
      readTime: "4 mins",
      reactions: 23,
      comments: 4,
      tags: ["Javascript", "Git", "+1"],
    },
    {
      profileImg: image2,
      author: "Simon Egersand 🎈",
      date: "prplcode.hashnode.dev · Jul 2, 2022",
      title: "Write Git Commit Messages That Your Colleagues Will Love",
      description:
        "Git commit messages are how we communicate to our future selves. They help you understand why a certain line of code was added to the code base. That's why knowing how to write a good Git commit messa…",
      readTime: "4 mins",
      reactions: 23,
      comments: 4,
      tags: ["Javascript", "Git", "+1"],
    },
    {
      profileImg: image2,
      author: "Simon Egersand 🎈",
      date: "prplcode.hashnode.dev · Jul 2, 2022",
      title: "Write Git Commit Messages That Your Colleagues Will Love",
      description:
        "Git commit messages are how we communicate to our future selves. They help you understand why a certain line of code was added to the code base. That's why knowing how to write a good Git commit messa…",
      readTime: "4 mins",
      reactions: 23,
      comments: 4,
      tags: ["Javascript", "Git", "+1"],
    },
    {
      profileImg: image2,
      author: "Simon Egersand 🎈",
      date: "prplcode.hashnode.dev · Jul 2, 2022",
      title: "Write Git Commit Messages That Your Colleagues Will Love",
      description:
        "Git commit messages are how we communicate to our future selves. They help you understand why a certain line of code was added to the code base. That's why knowing how to write a good Git commit messa…",
      readTime: "4 mins",
      reactions: 23,
      comments: 4,
      tags: ["Javascript", "Git", "+1"],
    },
    {
      profileImg: image2,
      author: "Simon Egersand 🎈",
      date: "prplcode.hashnode.dev · Jul 2, 2022",
      title: "Write Git Commit Messages That Your Colleagues Will Love",
      description:
        "Git commit messages are how we communicate to our future selves. They help you understand why a certain line of code was added to the code base. That's why knowing how to write a good Git commit messa…",
      readTime: "4 mins",
      reactions: 23,
      comments: 4,
      tags: ["Javascript", "Git", "+1"],
    },
    {
      profileImg: image2,
      author: "Simon Egersand 🎈",
      date: "prplcode.hashnode.dev · Jul 2, 2022",
      title: "Write Git Commit Messages That Your Colleagues Will Love",
      description:
        "Git commit messages are how we communicate to our future selves. They help you understand why a certain line of code was added to the code base. That's why knowing how to write a good Git commit messa…",
      readTime: "4 mins",
      reactions: 23,
      comments: 4,
      tags: ["Javascript", "Git", "+1"],
    },
    {
      profileImg: image2,
      author: "Simon Egersand 🎈",
      date: "prplcode.hashnode.dev · Jul 2, 2022",
      title: "Write Git Commit Messages That Your Colleagues Will Love",
      description:
        "Git commit messages are how we communicate to our future selves. They help you understand why a certain line of code was added to the code base. That's why knowing how to write a good Git commit messa…",
      readTime: "4 mins",
      reactions: 23,
      comments: 4,
      tags: ["Javascript", "Git", "+1"],
    },
    {
      profileImg: image2,
      author: "Simon Egersand 🎈",
      date: "prplcode.hashnode.dev · Jul 2, 2022",
      title: "Write Git Commit Messages That Your Colleagues Will Love",
      description:
        "Git commit messages are how we communicate to our future selves. They help you understand why a certain line of code was added to the code base. That's why knowing how to write a good Git commit messa…",
      readTime: "4 mins",
      reactions: 23,
      comments: 4,
      tags: ["Javascript", "Git", "+1"],
    },
    {
      profileImg: image2,
      author: "Simon Egersand 🎈",
      date: "prplcode.hashnode.dev · Jul 2, 2022",
      title: "Write Git Commit Messages That Your Colleagues Will Love",
      description:
        "Git commit messages are how we communicate to our future selves. They help you understand why a certain line of code was added to the code base. That's why knowing how to write a good Git commit messa…",
      readTime: "4 mins",
      reactions: 23,
      comments: 4,
      tags: ["Javascript", "Git", "+1"],
    },
    {
      profileImg: image2,
      author: "Simon Egersand 🎈",
      date: "prplcode.hashnode.dev · Jul 2, 2022",
      title: "Write Git Commit Messages That Your Colleagues Will Love",
      description:
        "Git commit messages are how we communicate to our future selves. They help you understand why a certain line of code was added to the code base. That's why knowing how to write a good Git commit messa…",
      readTime: "4 mins",
      reactions: 23,
      comments: 4,
      tags: ["Javascript", "Git", "+1"],
    },
    {
      profileImg: image2,
      author: "Simon Egersand 🎈",
      date: "prplcode.hashnode.dev · Jul 2, 2022",
      title: "Write Git Commit Messages That Your Colleagues Will Love",
      description:
        "Git commit messages are how we communicate to our future selves. They help you understand why a certain line of code was added to the code base. That's why knowing how to write a good Git commit messa…",
      readTime: "4 mins",
      reactions: 23,
      comments: 4,
      tags: ["Javascript", "Git", "+1"],
    },
    {
      profileImg: image3,
      author: "Simon Egersand 🎈",
      date: "prplcode.hashnode.dev · Jul 2, 2022",
      title: "Write Git Commit Messages That Your Colleagues Will Love",
      description:
        "Git commit messages are how we communicate to our future selves. They help you understand why a certain line of code was added to the code base. That's why knowing how to write a good Git commit messa…",
      readTime: "4 mins",
      reactions: 23,
      comments: 4,
      tags: ["Javascript", "Git", "+1"],
    },
  ];

function Home() {
  const [activeTab, setActiveTab] = useState("myfeed");
  const {theme} = useTheme();

  const Article = ({
    profileImg,
    author,
    date,
    title,
    readTime,
    reactions,
    comments,
    tags,
    description,
  }) => (
    <div className="article-card p-2 md:p-4 mb-2 border-2 border-gray-700 text-white overflow-auto shadow-lg rounded-lg">
      <div className="profile flex items-center mb-4 overflow-auto">
        <img
          src={profileImg}
          alt="Profile"
          className="profile-image w-12 h-12 rounded-full mr-4"
        />
        <div className="info">
          <h4 className="text-lg font-semibold">
            <a href="#">{author}</a>
          </h4>
          <p className="text-sm">{date}</p>
        </div>
      </div>
      <div className="article-content">
        <div className="content mb-4">
          {activeTab !== "myfeed" && (
            <div className="read-reactions flex items-center mb-2 text-sm">
              <div className="read flex items-center mr-4">
                <img src={read} alt="Read" className="w-4 h-4 mr-1" />
                <p>
                  {readTime} <span className="">read</span>
                </p>
              </div>
              <div className="reactions flex items-center mr-4">
                <FaHeart className="mr-1 text-red-500" />
                <p>
                  {reactions} <span className="">Reactions</span>
                </p>
              </div>
              <div className="comments flex items-center">
                <FaComment className="mr-1 text-gray-500" />
                <p>
                  {comments} <span className="">Comments</span>
                </p>
              </div>
            </div>
          )}
          <div className="flex flex-col md:flex-row justify-between gap-4 p-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
              <div className="mb-2">
                <span>{description}</span>
              </div>
              <p className="text-gray-400"></p>
            </div>
            <div className="w-full md:w-1/3 mb-2">
              <img src={img2} alt="Article" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="tags-used flex items-center justify-between text-white text-sm">
        <p className="used-tags flex items-center">
          Tags:
          {tags.map((tag, index) => (
            <span
              key={index}
              className="ml-2 px-2 py-1 border border-gray-200 text-sm"
            >
              {tag}
            </span>
          ))}
        </p>
        {activeTab === "myfeed" ? (
          <div className="flex space-x-2">
            <p className="text-blue-500">4min</p>
            <p className="cursor-pointer text-gray-400 border px-1">save</p>
          </div>
        ) : (
          <p className="save-button cursor-pointer text-blue-500">Save post</p>
        )}
      </div>
      {activeTab !== "myfeed" && (
        <div className="flex items-center mt-4 text-sm">
          <FaHeart className="mr-2 text-red-500 cursor-pointer" />
          <FaComment className="mr-2 text-gray-500 cursor-pointer" />
        </div>
      )}
    </div>
  );

  return (
    <div className={`${theme == 'dark' ? 'bg-black text-white' : "bg-gray-800 text-gray-300"} min-h-screen`}>
      <div className="custom-scrollbar flex overflow-x-auto whitespace-nowrap p-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Profile ${index}`}
            className="inline-block w-16 h-16 object-cover rounded-full border-4 border-blue-600 shadow-md mr-2"
          />
        ))}
      </div>
      <div className="relative flex space-x-2 overflow-x-auto p-4 text-white">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={tab.id}
            className={`relative flex items-center cursor-pointer space-x-2 p-2 rounded-lg ${
              activeTab === tab.id ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <img src={tab.icon} alt={tab.text} className="w-6 h-6" />
            <p className="text-xs md:text-sm md:font-medium">{tab.text}</p>
            {activeTab === tab.id && (
              <div
                className="absolute bottom-0 left-0 h-1 bg-blue-500"
                style={{
                  width: `calc(100%)`,
                  left: "-8px",
                }}
              ></div>
            )}
          </div>
        ))}
      </div>

      <div className="p-2 md:p-4">
        <div className="article-list">
          {articleData.map((article, index) => (
            <Article key={index} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
