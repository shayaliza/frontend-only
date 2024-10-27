import React from "react";
import { useNavigate } from "react-router-dom";
const tags = [
  {
    title: "Javascript",
    articles: "172 articles this week",
    imgSrc: "https://brillup.com/wp-content/uploads/Learn-JavaScript.jpg",
  },
  {
    title: "Javascript",
    articles: "172 articles this week",
    imgSrc: "https://brillup.com/wp-content/uploads/Learn-JavaScript.jpg",
  },
  {
    title: "Javascript",
    articles: "172 articles this week",
    imgSrc: "https://brillup.com/wp-content/uploads/Learn-JavaScript.jpg",
  },
  {
    title: "Javascript",
    articles: "172 articles this week",
    imgSrc: "https://brillup.com/wp-content/uploads/Learn-JavaScript.jpg",
  },
  {
    title: "Javascript",
    articles: "172 articles this week",
    imgSrc: "https://brillup.com/wp-content/uploads/Learn-JavaScript.jpg",
  },
];
function Topics() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#f6f6f6] dark:bg-transparent">
      <div className="grid place-items-center w-full  max-[1500px]:max-w-[1100px] overflow-x-hidden overflow-y-scroll">
        <div className="p-[30px] max-[900px]:ml-0 max-w-[1400px]   ">
          <div className="heading flex">
            {/* Trending Tags */}
            <h1 className="text-2xl font-semibold mr-4 dark:text-white">
              Trending Tags
            </h1>
            <button className="outline-none border border-blue-600 rounded-full px-4 py-1 font-semibold text-blue-600 text-md">
              See all tags
            </button>
          </div>
          <div className="tags_holder flex my-10 flex-wrap justify-between max-[900px]:justify-center">
            {tags.map((tag, index) => (
              <div
                onClick={() => navigate("/dashboard/topics/onetopic")}
                key={index}
                className="tag flex items-center bg-gray-300 dark:bg-gray-800 min-w-[300px] border dark:border-none border-white h-[80px] my-0.5 rounded-md p-2"
              >
                <img
                  src={tag.imgSrc}
                  alt={tag.title}
                  className="w-10 h-10 mr-4"
                />
                <div className="details_holder flex-1">
                  <h1 className="text-lg font-semibold dark:text-white">
                    {tag.title}
                  </h1>
                  <p className="text-sm text-gray-600">{tag.articles}</p>
                </div>
                <button className="outline-none bg-white border-none w-9 h-9 text-blue-600 rounded-full text-lg font-semibold">
                  +
                </button>
              </div>
            ))}
          </div>
          {/* Newly Tags */}
          <p
            id="light_heading"
            class="text-xl font-semibold mr-4 justify-between dark:text-white"
          >
            Newly Added Tags
          </p>
          <div class="tags_holder flex flex-wrap my-10 justify-between max-[900px]:justify-center">
            <div class="tag newly flex items-center bg-gray-300 dark:bg-gray-800 dark:border-none border border-white  rounded-md p-2 min-w-[300px] h-[80px] my-0.5">
              <img
                src="https://brillup.com/wp-content/uploads/Learn-JavaScript.jpg"
                className="h-10 w-10 mr-4"
                alt=""
              />
              <div class="details_holder flex-1">
                <h1 class="text-lg font-semibold dark:text-white">Lindo</h1>
              </div>
              <button class="outline-none bg-white border-none w-9 h-9 text-blue-600 rounded-full text-lg font-semibold">
                +
              </button>
            </div>
            <div class="tag newly flex items-center bg-gray-300 dark:bg-gray-800 dark:border-none border border-white rounded-md p-2 min-w-[300px] h-[80px] my-0.5">
              <img
                src="https://brillup.com/wp-content/uploads/Learn-JavaScript.jpg"
                className="h-10 w-10 mr-4"
                alt=""
              />
              <div class="details_holder flex-1">
                <h1 class="text-lg font-semibold dark:text-white">Lindo</h1>
              </div>
              <button class="outline-none bg-white border-none w-9 h-9 text-blue-600 rounded-full text-lg font-semibold">
                +
              </button>
            </div>
            <div class="tag newly flex items-center bg-gray-300 dark:bg-gray-800 dark:border-none border border-white rounded-md p-2 min-w-[300px] h-[80px] my-0.5">
              <img
                src="https://brillup.com/wp-content/uploads/Learn-JavaScript.jpg"
                className="h-10 w-10 mr-4"
                alt=""
              />
              <div class="details_holder flex-1">
                <h1 class="text-lg font-semibold dark:text-white">Lindo</h1>
              </div>
              <button class="outline-none bg-white border-none w-9 h-9 text-blue-600 rounded-full text-lg font-semibold">
                +
              </button>
            </div>
            <div class="tag newly flex items-center bg-gray-300 dark:bg-gray-800 dark:border-none border border-white rounded-md p-2 min-w-[300px] h-[80px] my-0.5">
              <img
                src="https://brillup.com/wp-content/uploads/Learn-JavaScript.jpg"
                className="h-10 w-10 mr-4"
                alt=""
              />
              <div class="details_holder flex-1">
                <h1 class="text-lg font-semibold dark:text-white">Lindo</h1>
              </div>
              <button class="outline-none bg-white border-none w-9 h-9 text-blue-600 rounded-full text-lg font-semibold">
                +
              </button>
            </div>
          </div>
          <p
            id="light_heading"
            class="text-lg font-semibold mt-4 justify-between mr-4 dark:text-white"
          >
            All Tags
          </p>
          <div class="tags_holder flex flex-wrap justify-between mt-4 max-[900px]:justify-center">
            <div class="tag_card flex flex-col min-w-[300px] max-w-[300px] bg-white dark:bg-gray-800 dark:text-white border border-gray-400 rounded-lg my-1">
              <div class="color_holder green h-5 rounded-t-lg"></div>
              <div class="details_holder p-4">
                <h1 class="text-lg font-semibold">
                  <span id="green" class="text-green-600">
                    #
                  </span>
                  Javascript
                </h1>
                <p class="text-sm text-gray-600 dark:text-gray-200">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat dolor maxime eligendi, faci
                </p>
                <p id="light" class="text-sm text-gray-700 dark:text-gray-300">
                  100008 posts published
                </p>
              </div>
              <div class="card_footer px-4 py-2 flex justify-between">
                <button class="bg-gray-300 dark:text-black border-none outline-none rounded-lg px-4 py-1 font-semibold">
                  Follow
                </button>
              </div>
            </div>
            <div class="tag_card flex flex-col min-w-[300px] max-w-[300px] bg-white dark:bg-gray-800 dark:text-white border border-gray-400 rounded-lg my-1">
              <div class="color_holder green h-5 rounded-t-lg"></div>
              <div class="details_holder p-4">
                <h1 class="text-lg font-semibold">
                  <span id="green" class="text-green-600">
                    #
                  </span>
                  Javascript
                </h1>
                <p class="text-sm text-gray-600 dark:text-gray-200">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat dolor maxime eligendi, faci
                </p>
                <p id="light" class="text-sm text-gray-700 dark:text-gray-300">
                  100008 posts published
                </p>
              </div>
              <div class="card_footer px-4 py-2 flex justify-between">
                <button class="bg-gray-300 dark:text-black border-none outline-none rounded-lg px-4 py-1 font-semibold">
                  Follow
                </button>
              </div>
            </div>
            <div class="tag_card flex flex-col min-w-[300px] max-w-[300px] bg-white dark:bg-gray-800 dark:text-white border border-gray-400 rounded-lg my-1">
              <div class="color_holder green h-5 rounded-t-lg"></div>
              <div class="details_holder p-4">
                <h1 class="text-lg font-semibold">
                  <span id="green" class="text-green-600">
                    #
                  </span>
                  Javascript
                </h1>
                <p class="text-sm text-gray-600 dark:text-gray-200">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat dolor maxime eligendi, faci
                </p>
                <p id="light" class="text-sm text-gray-700 dark:text-gray-300">
                  100008 posts published
                </p>
              </div>
              <div class="card_footer px-4 py-2 flex justify-between">
                <button class="bg-gray-300 dark:text-black border-none outline-none rounded-lg px-4 py-1 font-semibold">
                  Follow
                </button>
              </div>
            </div>
            <div class="tag_card flex flex-col min-w-[300px] max-w-[300px] bg-white dark:bg-gray-800 dark:text-white border border-gray-400 rounded-lg my-1">
              <div class="color_holder green h-5 rounded-t-lg"></div>
              <div class="details_holder p-4">
                <h1 class="text-lg font-semibold">
                  <span id="green" class="text-green-600">
                    #
                  </span>
                  Javascript
                </h1>
                <p class="text-sm text-gray-600 dark:text-gray-200">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat dolor maxime eligendi, faci
                </p>
                <p id="light" class="text-sm text-gray-700 dark:text-gray-300">
                  100008 posts published
                </p>
              </div>
              <div class="card_footer px-4 py-2 flex justify-between">
                <button class="bg-gray-300 dark:text-black border-none outline-none rounded-lg px-4 py-1 font-semibold">
                  Follow
                </button>
              </div>
            </div>
            <div class="tag_card flex flex-col min-w-[300px] max-w-[300px] bg-white dark:bg-gray-800 dark:text-white border border-gray-400 rounded-lg my-1">
              <div class="color_holder green h-5 rounded-t-lg"></div>
              <div class="details_holder p-4">
                <h1 class="text-lg font-semibold">
                  <span id="green" class="text-green-600">
                    #
                  </span>
                  Javascript
                </h1>
                <p class="text-sm text-gray-600 dark:text-gray-200">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat dolor maxime eligendi, faci
                </p>
                <p id="light" class="text-sm text-gray-700 dark:text-gray-300">
                  100008 posts published
                </p>
              </div>
              <div class="card_footer px-4 py-2 flex justify-between">
                <button class="bg-gray-300 dark:text-black border-none outline-none rounded-lg px-4 py-1 font-semibold">
                  Follow
                </button>
              </div>
            </div>
            <div class="tag_card flex flex-col min-w-[300px] max-w-[300px] bg-white dark:bg-gray-800 dark:text-white border border-gray-400 rounded-lg my-1">
              <div class="color_holder green h-5 rounded-t-lg"></div>
              <div class="details_holder p-4">
                <h1 class="text-lg font-semibold">
                  <span id="green" class="text-green-600">
                    #
                  </span>
                  Javascript
                </h1>
                <p class="text-sm text-gray-600 dark:text-gray-200">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat dolor maxime eligendi, faci
                </p>
                <p id="light" class="text-sm text-gray-700 dark:text-gray-300">
                  100008 posts published
                </p>
              </div>
              <div class="card_footer px-4 py-2 flex justify-between">
                <button class="bg-gray-300 dark:text-black border-none outline-none rounded-lg px-4 py-1 font-semibold">
                  Follow
                </button>
              </div>
            </div>
            <div class="tag_card flex flex-col min-w-[300px] max-w-[300px] bg-white dark:bg-gray-800 dark:text-white border border-gray-400 rounded-lg my-1">
              <div class="color_holder green h-5 rounded-t-lg"></div>
              <div class="details_holder p-4">
                <h1 class="text-lg font-semibold">
                  <span id="green" class="text-green-600">
                    #
                  </span>
                  Javascript
                </h1>
                <p class="text-sm text-gray-600 dark:text-gray-200">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat dolor maxime eligendi, faci
                </p>
                <p id="light" class="text-sm text-gray-700 dark:text-gray-300">
                  100008 posts published
                </p>
              </div>
              <div class="card_footer px-4 py-2 flex justify-between">
                <button class="bg-gray-300 dark:text-black border-none outline-none rounded-lg px-4 py-1 font-semibold">
                  Follow
                </button>
              </div>
            </div>
            <div class="tag_card flex flex-col min-w-[300px] max-w-[300px] bg-white dark:bg-gray-800 dark:text-white border border-gray-400 rounded-lg my-1">
              <div class="color_holder green h-5 rounded-t-lg"></div>
              <div class="details_holder p-4">
                <h1 class="text-lg font-semibold">
                  <span id="green" class="text-green-600">
                    #
                  </span>
                  Javascript
                </h1>
                <p class="text-sm text-gray-600 dark:text-gray-200">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat dolor maxime eligendi, faci
                </p>
                <p id="light" class="text-sm text-gray-700 dark:text-gray-300">
                  100008 posts published
                </p>
              </div>
              <div class="card_footer px-4 py-2 flex justify-between">
                <button class="bg-gray-300 dark:text-black border-none outline-none rounded-lg px-4 py-1 font-semibold">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topics;
