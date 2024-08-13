import React from "react";
import HeaderImage from "./Assests/header-light.svg";
import ForumsLight from "./Assests/kaggle-forum_light.svg";
import { Link } from "react-router-dom";
import secondImage from "./Assests/12063947-kg.jpg";
import thirdImage from "./Assests/769452-kg.jpg";
import fourthImage from "./Assests/9185728-kg.jpg";
import fifthImage from "./Assests/2125251-kg.jpg";

function Second() {
  const ForumCard = () => {
    return (
      <Link
        to={"/detailsPages/third"}
        className="block p-4 mb-4 border-b border-gray-200 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
      >
        <div className="flex items-start">
          {/* Image Section */}
          <div className="w-24 h-24 flex-shrink-0">
            <img
              src={ForumsLight}
              alt="Forum Icon"
              className="w-full h-full object-cover rounded"
            />
          </div>

          <div className="ml-4 flex-1">
            <h1 className="text-xl font-bold text-gray-800">General</h1>
            <p className="text-sm text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              error!
              <br />
              Last Post 10 minutes ago by Abhishek Nautiyal
            </p>
            <div className=" text-gray-500 font-semibold ">6 month</div>
          </div>

          <div>
            <div className="ml-4 flex flex-row items-center justify-end">
              <img
                src={secondImage}
                alt="User 1"
                className="w-8 h-8 object-cover rounded-full mb-2"
              />
              <img
                src={thirdImage}
                alt="User 2"
                className="w-8 h-8 object-cover rounded-full mb-2"
              />
              <img
                src={fourthImage}
                alt="User 3"
                className="w-8 h-8 object-cover rounded-full"
              />
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Recent Topics by Abhishek Nautiyal, John Smith, Arman Ansari
            </div>
          </div>
        </div>
      </Link>
    );
  };

  const DiscussionCard = () => {
    return (
      <div className="block p-4 mb-4 border-b border-gray-200 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-start">
          {/* Image Section */}
          <div className="w-24 h-24 flex-shrink-0">
            <img
              src={fifthImage}
              alt="Discussion Icon"
              className="w-full h-full object-cover rounded"
            />
          </div>

          <div className="ml-4 flex-1">
            <h1 className="text-xl font-bold text-gray-800">
              First Place at short solution Summary
            </h1>
            <div className="text-sm text-gray-600 mt-2 space-y-1">
              <a href="#" className="block">
                Raj Biswas
              </a>
              <a href="#" className="block">
                .in LLM - Detect AI generated Text
              </a>
              <a href="#" className="block">
                Last Comment 3m ago by Divyanshu32
              </a>
            </div>
          </div>

          <div className="ml-4 text-gray-500 font-semibold text-sm text-center">
            2.8k <i className="fa fa-eye" aria-hidden="true" />
          </div>

          <div className="ml-4 flex items-center">
            <div className="flex flex-col items-center">
              <button className="text-green-500">
                <i className="fas fa-arrow-up" />
              </button>
              <span className="text-gray-700 font-semibold">168</span>
              <button className="text-red-500">
                <i className="fas fa-arrow-down" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-600">20 comments...</div>
      </div>
    );
  };

  return (
    <div>
      <div>
        <div className="p-6 bg-gray-100">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mx-auto p-8">
            <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
              <p className="text-sm text-gray-500 mb-2">Discussions</p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                Techsnap
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                {" "}
                Discuss the Kaggle platform &amp; machine learning topics – this
                includes sharing feedback, asking questions, and more.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <img src={HeaderImage} alt="Banner" className="w-60 h-auto" />
            </div>
          </div>
          <div className="mt-12 w-full max-w-6xl mx-auto ">
            <h6 className="text-xl font-semibold">Forums</h6>
            <div>
              <ForumCard />
              <ForumCard />
              <ForumCard />
              <ForumCard />
              <ForumCard />
              <ForumCard />
            </div>
          </div>
          <div className="mt-12 w-full max-w-6xl mx-auto ">
            <h6 className="text-xl font-semibold">
              Discussion from across Techsnap
            </h6>
            <div>
              <DiscussionCard />
              <DiscussionCard />
              <DiscussionCard />
              <DiscussionCard />
              <DiscussionCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Second;
