import React from "react";
import android from "../assets/rsc/icons8-android-96.png";
import trendingIcon from "../assets/rsc/icons8-trending-topic-25.png";
import likeIcon from "../assets/rsc/like.png";
import commentIcon from "../assets/rsc/comment.png";
import trendingArticleImage1 from "../assets/rsc/kristina-v-hYdikKrex4U-unsplash.jpg";
import trendingArticleImage2 from "../assets/rsc/radu-florin-4_QFycgpC4c-unsplash.jpg";
import trendingArticleImage3 from "../assets/rsc/paul-castanie-WZB_ZOqR4dA-unsplash.jpg";

const trendingArticles = [
  {
    image: trendingArticleImage1,
    title: "Build an Open Source app with PlanetScale in July...",
    author: "Eleftheria Batsou",
    likes: 98,
    comments: 10,
  },
  {
    image: trendingArticleImage2,
    title: "Introducing qrate - A smart tool to curate your links...",
    author: "Somnath Mishra",
    likes: 98,
    comments: 10,
  },
  {
    image: trendingArticleImage3,
    title: "Introducing Mockoops - Transform boring screen-recordings...",
    author: "Mohit Yadav",
    likes: 98,
    comments: 10,
  },
];

const recentlyAccessed = [
  {
    image: trendingArticleImage1,
    title: "Build an Open Source app with PlanetScale in July...",
    author: "Eleftheria Batsou",
  },
  {
    image: trendingArticleImage2,
    title: "Introducing qrate - A smart tool to curate your links...",
    author: "Somnath Mishra",
  },
  {
    image: trendingArticleImage3,
    title: "Introducing Mockoops - Transform boring screen-recordings...",
    author: "Mohit Yadav",
  },
];

function Notification({ isOpen }) {
  return (
    <>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex flex-col space-y-4 sm:space-y-8 p-4 sm:p-6 bg-gray-50 text-gray-700 dark:bg-black dark:text-gray-100 `}
      >
        <section className="flex items-center space-x-4 p-3 sm:p-4 border border-gray-300 shadow-sm rounded-lg">
          <img
            src={android}
            alt="Android"
            className="w-8 h-8 sm:w-12 sm:h-12 flex-shrink-0"
          />
          <p className="text-sm sm:text-lg font-semibold">
            Datasnap for Android is here!
          </p>
        </section>

        <section className="p-3 sm:p-4 border border-gray-300 shadow-sm rounded-lg">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <p className="text-base sm:text-lg font-semibold">
              Trending Articles
            </p>
            <img
              src={trendingIcon}
              alt="Trending"
              className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
            />
          </div>
          <div className="space-y-4 sm:space-y-6">
            {trendingArticles.map((article, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 sm:space-x-4"
              >
                <img
                  src={article.image}
                  alt="Article"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0"
                />
                <div>
                  <h4 className="text-sm sm:text-md font-semibold">
                    {article.title}
                  </h4>
                  <p className="text-xs sm:text-sm">{article.author}</p>
                  <div className="flex space-x-3 sm:space-x-4 text-xs sm:text-sm mt-1 sm:mt-2">
                    <span className="flex items-center">
                      <img
                        src={likeIcon}
                        alt="Likes"
                        className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0"
                      />
                      {article.likes}
                    </span>
                    <span className="flex items-center">
                      <img
                        src={commentIcon}
                        alt="Comments"
                        className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0"
                      />
                      {article.comments}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <p className="text-blue-500 cursor-pointer text-sm sm:text-base">
              Show more
            </p>
          </div>
        </section>

        <section className="p-3 sm:p-4 border border-gray-300 shadow-sm rounded-lg">
          <p className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
            Recently Accessed
          </p>
          <div className="space-y-4 sm:space-y-6">
            {recentlyAccessed.map((article, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 sm:space-x-4"
              >
                <img
                  src={article.image}
                  alt="Article"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0"
                />
                <div>
                  <h4 className="text-sm sm:text-md font-semibold">
                    {article.title}
                  </h4>
                  <p className="text-xs sm:text-sm">{article.author}</p>
                </div>
              </div>
            ))}
            <p className="text-blue-500 cursor-pointer text-sm sm:text-base">
              Show more
            </p>
          </div>
        </section>
      </div>
      <div
        className={`lg:hidden fixed inset-0 w-2/3 bg-black left-0 z-50 overflow-y-auto transition-transform duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } 
          }`}
      >
        <div className="flex flex-col">
          <section className="flex items-center space-x-4 p-3 sm:p-4 bg-gray-800 rounded-lg shadow-sm text-white">
            <img
              src={android}
              alt="Android"
              className="w-8 h-8 sm:w-12 sm:h-12 flex-shrink-0"
            />
            <p className="text-sm sm:text-lg font-semibold">
              Datasnap for Android is here!
            </p>
          </section>

          <section className="bg-gray-800 p-3 sm:p-4 rounded-lg shadow-sm text-white">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <p className="text-base sm:text-lg font-semibold">
                Trending Articles
              </p>
              <img
                src={trendingIcon}
                alt="Trending"
                className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
              />
            </div>
            <div className="space-y-4 sm:space-y-6">
              {trendingArticles.map((article, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 sm:space-x-4"
                >
                  <img
                    src={article.image}
                    alt="Article"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-sm sm:text-md font-semibold">
                      {article.title}
                    </h4>
                    <p className="text-xs sm:text-sm">{article.author}</p>
                    <div className="flex space-x-3 sm:space-x-4 text-xs sm:text-sm mt-1 sm:mt-2">
                      <span className="flex items-center">
                        <img
                          src={likeIcon}
                          alt="Likes"
                          className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0"
                        />
                        {article.likes}
                      </span>
                      <span className="flex items-center">
                        <img
                          src={commentIcon}
                          alt="Comments"
                          className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0"
                        />
                        {article.comments}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              <p className="text-blue-500 cursor-pointer text-sm sm:text-base">
                Show more
              </p>
            </div>
          </section>

          <section className="p-3 sm:p-4 border border-gray-300 shadow-sm rounded-lg">
            <p className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Recently Accessed
            </p>
            <div className="space-y-4 sm:space-y-6">
              {recentlyAccessed.map((article, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 sm:space-x-4"
                >
                  <img
                    src={article.image}
                    alt="Article"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-sm sm:text-md font-semibold">
                      {article.title}
                    </h4>
                    <p className="text-xs sm:text-sm">{article.author}</p>
                  </div>
                </div>
              ))}
              <p className="text-blue-500 cursor-pointer text-sm sm:text-base">
                Show more
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Notification;
