import React from "react";
import { Link } from "react-router-dom";
import firstImage from "./Assests/2125251-kg.jpg";
import secondImage from "./Assests/7510375_2.png";
import thirdImage from "./Assests/769452-kg.jpg";

const Card = () => {
  return (
    <Link
      to={"/detailsPages/fourth"}
      className="p-4 border rounded-lg shadow-sm flex  justify-between "
    >
      <div className="w-2/3">
        <h1 className="text-lg font-semibold flex items-center space-x-2">
          <i className="fa-solid fa-thumbtack text-[#533a3a]" />
          <span>About the techsnap Announcement Category</span>
        </h1>
        <p className="text-gray-600 mt-1">
          Here is where you’ll find the latest updates from The Codecademy Team.
          We will announce things like new product features, curriculum
          releases, and even site outages.
        </p>
        <p className="text-gray-600 mt-1">5 votes</p>
      </div>

      <div className="flex items-center space-x-[-10px]">
        <img
          src={firstImage}
          alt="Profile 1"
          className="w-8 h-8 rounded-full object-cover border-2 border-white"
        />
        <img
          src={secondImage}
          alt="Profile 2"
          className="w-8 h-8 rounded-full object-cover border-2 border-white"
        />
        <img
          src={thirdImage}
          alt="Profile 3"
          className="w-8 h-8 rounded-full object-cover border-2 border-white"
        />
      </div>

      <div className="text-right  flex flex-row space-x-4">
        <p className="text-gray-600">1</p>
        <p className="text-gray-600">1.8k</p>
        <p className="text-gray-600">Apr '21</p>
      </div>
    </Link>
  );
};

const Third = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-semibold">General</h3>
            <p className="text-gray-600">
              Announcements, resources, and interesting discussions
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="flex items-center px-4 py-2 bg-gray-200 rounded-lg text-gray-800">
              <i className="fa-regular fa-bell mr-2" />
              Follow <i className="fa-solid fa-caret-down ml-2" />
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg">
              <i className="fa-solid fa-plus mr-2" /> New Topic
            </button>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <div className="relative mb-6">
        <i className="fa-solid fa-magnifying-glass absolute left-4 top-3 text-gray-500" />
        <input
          type="text"
          className="w-full pl-10 py-2 border rounded-lg focus:outline-none"
          placeholder="Search Discussions..."
        />
      </div>

      {/* Filters */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4 text-gray-600">
          <a href="#" className="hover:underline">
            All
          </a>
          <a href="#" className="hover:underline">
            Pinned
          </a>
          <a href="#" className="hover:underline">
            Bookmarks
          </a>
        </div>
        <div className="h-px bg-gray-300 flex-1"></div>
        <div className="flex space-x-4 text-gray-600">
          <a href="#" className="hover:underline">
            Replies
          </a>
          <a href="#" className="hover:underline">
            Views
          </a>
          <a href="#" className="hover:underline">
            Activity
          </a>
        </div>
      </div>

      {/* Cards Section */}
      <div className="space-y-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      {/* No Search Results */}
      <div className="text-center mt-12">
        <img
          src="./assests/no-serach.svg"
          alt="No Search Results"
          className="mx-auto mb-4"
        />
        <strong className="text-gray-600">Oops! No discussions found</strong>
      </div>
    </div>
  );
};

export default Third;
