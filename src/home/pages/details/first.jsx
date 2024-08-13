import React from "react";
import BannerImage from "./Assests/default-banner-img.png";
import secondImage from "./Assests/46956_2.jfif";
import thirdImage from "./Assests/ca397229965210ffedb183a0c9b2760e8a7cafbe.svg";
import { Link } from "react-router-dom";

const ForumPage = () => {
  const LeftCard = () => {
    return (
      <Link
        to={"/detailsPages/second"}
        className="block p-4 mb-4 border-b border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
      >
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-lg md:text-xl font-bold">About the community</h1>
          <p className="text-sm md:text-base font-semibold">4/week</p>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <img
            src={thirdImage}
            alt="Community"
            className="w-full md:w-24 h-auto rounded-lg"
          />
          <p className="flex-1 text-gray-700">
            Community information and announcements including Welcome posts for
            introductions, a Getting Started guide, and The Treehouse for casual
            off-topic discussion.
          </p>
        </div>
      </Link>
    );
  };

  const RightCard = () => {
    return (
      <div className="p-4 mb-4 border-b border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col md:flex-row justify-between items-start">
        <div className="flex space-x-4 items-start">
          <img
            src={secondImage}
            alt="Latest Topic"
            className="w-full md:w-20 h-20 object-cover rounded-lg"
          />
          <div>
            <p className="text-base md:text-lg font-bold">
              Replication Cluster Primary Race Condition
            </p>
            <div className="mt-2 flex space-x-2">
              <span className="text-xs md:text-sm font-semibold text-gray-600 bg-gray-100 rounded-full px-2 py-1">
                #tech
              </span>
              <span className="text-xs md:text-sm font-semibold text-gray-600 bg-gray-100 rounded-full px-2 py-1">
                #snap
              </span>
            </div>
          </div>
        </div>
        <div className="mt-2 md:mt-0">
          <strong className="text-gray-500 whitespace-nowrap">26 min</strong>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mx-auto p-8">
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <p className="text-sm text-gray-500 mb-2">Welcome To</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Techsnap
          </h1>
          <p className="text-lg text-gray-600 mt-2">Developer Community</p>
          <div className="mt-6 space-y-4 md:space-y-0 md:space-x-4">
            <button className="w-full md:w-auto px-6 py-3 rounded-lg text-black border border-green-500 shadow ">
              Community Guides
            </button>
            <button className="w-full md:w-auto px-6 py-3 rounded-lg text-black border border-green-500 shadow ">
              Dark Mode
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img src={BannerImage} alt="Banner" className="w-60 h-auto" />
        </div>
      </div>

      <div className="mt-12 w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <div className="flex justify-between items-center mb-4">
            <p className="text-xl font-bold text-gray-700">Category</p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <LeftCard />
            <LeftCard />
            <LeftCard />
            <LeftCard />
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="mb-4">
            <p className="text-xl font-bold text-gray-700">Latest</p>
          </div>
          <div className="space-y-4">
            <RightCard />
            <RightCard />
            <RightCard />
            <RightCard />
            <RightCard />
            <RightCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumPage;
