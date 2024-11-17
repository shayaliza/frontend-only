import React, { useState } from "react";
import logo from "../assets/rsc/TSlogo.png";
import banner from "../assets/rsc/banner.webp";
import { FaHeart, FaRegComment, FaEllipsisV } from "react-icons/fa";
import {
  FaRegThumbsUp,
  FaRegBookmark,
  FaRegEdit,
  FaRegCommentDots,
} from "react-icons/fa";
import {
  FaChevronDown,
  FaUser,
  FaSignOutAlt,
  FaTachometerAlt,
  FaEdit,
  FaHome,
  FaSearch,
  FaProjectDiagram,
} from "react-icons/fa";
import { FaExternalLinkAlt, FaFilter } from "react-icons/fa";

const articles = [
  {
    title: "Ableist Language & Maintaining an Inclusive Environment",
    author: "Damodar Lohani",
    date: "Jul 5 '21",
    image: "path/to/image1.jpg",
  },
  {
    title: "20+ Lessons I've Learned Writing on DEV for 4 Years",
    author: "Michael Tharrington",
    date: "Jul 21 '21",
    image: "path/to/image2.jpg",
  },
  {
    title: "Appwrite Image Previews Receive Massive New Updates",
    author: "Jean-Michel Fayard",
    date: "Jun 29 '21",
    image: "path/to/image3.jpg",
    textColor: "text-purple-500",
  },
  {
    title: "Authentication - Exploring Appwrite.io with React Series",
    author: "Daryl Lukas",
    date: "Jun 26 '21",
    image: "path/to/image4.jpg",
  },
];

const NavBarDesktop = () => {
  const [openMenu, setOpenMenu] = useState("");

  const handleDropdownClick = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  return (
    <div className="bg-gray-800 text-white flex flex-col min-h-screen pb-10 lg:pb-0">
      <div className="min-h-screen flex bg-gray-100">
        <div className="m-4 bg-gray-50 rounded-xl overflow-hidden">
          <div className="w-full my-4 lg:px-8">
            <img src={banner} alt="Banner" className="w-full rounded-lg" />
            <div className="msg-from-sec">
              <div className="flex justify-between text-gray-800">
                <div className="flex mt-8 px-6">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--Vce2LydN--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/1/0213bbaa-d5a1-4d25-9e7a-10c30b455af0.png"
                    alt="Profile"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex flex-col ml-2 mt-1 leading-tight">
                    <div className="px-6">
                      <strong className="announced-by">JANE DOE</strong>&nbsp;
                      for
                      <a href="" className="text-blue-600 hover:underline">
                        The Dev team
                      </a>
                      <div>
                        <span className="announced-on">Posted On 12 Apr</span>
                        <span className="announced-on">
                          {" "}
                          · Updated On 15 Apr
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-8 mr-6">
                  <FaRegThumbsUp title="like" className="cursor-pointer" />
                  <FaRegBookmark title="bookmark" className="cursor-pointer" />
                  <FaRegEdit
                    title="improve article"
                    className="cursor-pointer"
                  />
                  <FaRegCommentDots
                    title="view discussion"
                    className="cursor-pointer"
                  />
                </div>
              </div>

              <div className="mt-4 px-6 text-black">
                <h1 className="font-bold text-4xl mb-4">
                  Announcing the Appwrite Hackathon on DEV!
                </h1>
                <p className="flex flex-wrap gap-3">
                  <a className="text-pink-600">
                    <span>#</span>appwritehack
                  </a>
                  <a className="text-blue-600">
                    <span>#</span>appwrite
                  </a>
                  <a className="text-black">
                    <span>#</span>meta
                  </a>
                </p>
                <p className="mt-2">
                  There's a brand new opportunity for you to sharpen your
                  software development skills while educating others, and
                  earning some amazing prizes — right here on DEV...
                </p>

                <h1 className="font-bold text-4xl my-4">
                  Announcing the Appwrite Hackathon on DEV 🎉
                </h1>
                <p className="flex flex-wrap gap-3">
                  <a className="text-pink-600">
                    <span>#</span>appwritehack
                  </a>
                  <a className="text-blue-600">
                    <span>#</span>appwrite
                  </a>
                  <a className="text-black">
                    <span>#</span>meta
                  </a>
                </p>
                <p className="mt-2">
                  This is our last DEV hackathon for a number of months, so if
                  you've been considering participating in a past DEV contest,
                  this is the time!{" "}
                </p>
                <p className="mt-2">
                  Read on for more details about Appwrite and the fun challenge
                  they're extending to DEV members over the next few weeks.
                </p>

                <hr />
                <p className="mt-4">
                  <a href="" class="text-blue">
                    APPWRITE{" "}
                  </a>{" "}
                  is a self-hosted backend-as-a-service platform that gives
                  developers all the APIs required to build any application.
                  With Appwrite, you can add a number of crucial services into
                  your app including user authentication, file management, image
                  handling, Cloud Functions, Realtime database and more!
                </p>
                <p className="mt-4">
                  From now through May 12th, we're offering you the opportunity
                  to build a new application using Appwrite for the chance to
                  earn/win some awesome prizes (including up to $2,000 USD). In
                  the process of building your app and writing your DEV
                  submission post, you’ll get better acquainted with Appwrite's
                  end-to-end backend server for Web, Mobile, Native, or Backend
                  apps ✨
                </p>
                <h2 className="text-2xl mt-4 font-bold">Categories</h2>
                <p className="py-2">
                  The Appwrite Hackathon on DEV is calling for projects in the
                  following four categories:
                </p>

                <ul class="mt-4">
                  <li>
                    <strong className="text-xl">Web2 Wizards:</strong>
                  </li>
                  <div>
                    Build an application using any of Appwrite's services that
                    services today's internet and its users. Projects under this
                    category should make use of user-generated content on the
                    internet in some way.
                  </div>
                  <li>
                    <strong className="text-xl">Web3 Wunderkinds:</strong>
                  </li>
                  <div>
                    Fascinated by decentralization? Put on your creative hats
                    and build a blockchain-related application using Appwrite.
                  </div>
                  <li>
                    <strong className="text-xl">Mobile Moguls:</strong>
                  </li>
                  <div>
                    Build a new application that utilizes Appwrite's Apple SDK,
                    Appwrite’s Flutter SDK or Appwrite's Android SDK.
                  </div>
                  <li>
                    <strong className="text-xl">Wacky Wildcards:</strong>
                  </li>
                  <div>
                    Build a wacky app that doesn’t fit into one of the
                    categories above. With this category, we are looking for
                    some truly silly and/or fun submissions. Feel free to dream
                    big and ridiculously — and utilize any offering that
                    Appwrite offers
                  </div>
                </ul>
                <div className="p-6 space-y-4 my-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <h2 className="text-lg font-bold">Comments(60)</h2>
                      <FaExternalLinkAlt className="text-gray-500" />
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex items-center px-4 py-2 border rounded-lg text-sm font-medium text-gray-700">
                        <FaFilter className="mr-2" />
                        Filters
                      </button>
                      <button className="px-4 py-2 border rounded-lg text-sm font-medium text-gray-700">
                        Subscribe
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <FaUser className="text-2xl text-gray-500" />
                    <input
                      type="text"
                      placeholder="Kindly login to comment or like"
                      className="w-full p-3 border rounded-lg text-gray-600"
                    />
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium">
                      Reply
                    </button>
                  </div>
                </div>
                <div class="comment-card mt-3 comment-thread comment-2">
                  <div className="flex flex-col md:flex-row items-start mb-4 p-4 bg-gray-100 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                      <div className="bg-red-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl">
                        M
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="border p-2 rounded-lg bg-white">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-lg md:text-xl">
                            Matej Bačo
                          </h4>
                          <span className="text-gray-500 text-sm">Apr 11</span>
                        </div>
                        <p className="mt-2 text-gray-800 text-sm md:text-base">
                          Trust me, Appwrite is one of the easiest to learn! Fun
                          fact, you don't need to learn everything at once - you
                          can gradually add features as you learn about them
                          <span className="inline-block ml-1">😇</span> For me,
                          the starting point was a cool reading where Appwrite
                          team built a real application.
                        </p>
                      </div>
                      <div className="flex items-center mt-4 space-x-4 text-gray-500 text-sm md:text-base">
                        <div className="flex items-center space-x-1">
                          <FaHeart />
                          <span>60</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FaRegCommentDots />
                          <span>Reply</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-start mb-4 p-4 bg-gray-100 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                      <div className="bg-red-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl">
                        M
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="border p-2 rounded-lg bg-white">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-lg md:text-xl">
                            Matej Bačo
                          </h4>
                          <span className="text-gray-500 text-sm">Apr 11</span>
                        </div>
                        <p className="mt-2 text-gray-800 text-sm md:text-base">
                          Trust me, Appwrite is one of the easiest to learn! Fun
                          fact, you don't need to learn everything at once - you
                          can gradually add features as you learn about them
                          <span className="inline-block ml-1">😇</span> For me,
                          the starting point was a cool reading where Appwrite
                          team built a real application.
                        </p>
                      </div>
                      <div className="flex items-center mt-4 space-x-4 text-gray-500 text-sm md:text-base">
                        <div className="flex items-center space-x-1">
                          <FaHeart />
                          <span>60</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FaRegCommentDots />
                          <span>Reply</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-start mb-4 p-4 bg-gray-100 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                      <div className="bg-red-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl">
                        M
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="border p-2 rounded-lg bg-white">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-lg md:text-xl">
                            Matej Bačo
                          </h4>
                          <span className="text-gray-500 text-sm">Apr 11</span>
                        </div>
                        <p className="mt-2 text-gray-800 text-sm md:text-base">
                          Trust me, Appwrite is one of the easiest to learn! Fun
                          fact, you don't need to learn everything at once - you
                          can gradually add features as you learn about them
                          <span className="inline-block ml-1">😇</span> For me,
                          the starting point was a cool reading where Appwrite
                          team built a real application.
                        </p>
                      </div>
                      <div className="flex items-center mt-4 space-x-4 text-gray-500 text-sm md:text-base">
                        <div className="flex items-center space-x-1">
                          <FaHeart />
                          <span>60</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FaRegCommentDots />
                          <span>Reply</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-start mb-4 p-4 bg-gray-100 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                      <div className="bg-red-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl">
                        M
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="border p-2 rounded-lg bg-white">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-lg md:text-xl">
                            Matej Bačo
                          </h4>
                          <span className="text-gray-500 text-sm">Apr 11</span>
                        </div>
                        <p className="mt-2 text-gray-800 text-sm md:text-base">
                          Trust me, Appwrite is one of the easiest to learn! Fun
                          fact, you don't need to learn everything at once - you
                          can gradually add features as you learn about them
                          <span className="inline-block ml-1">😇</span> For me,
                          the starting point was a cool reading where Appwrite
                          team built a real application.
                        </p>
                      </div>
                      <div className="flex items-center mt-4 space-x-4 text-gray-500 text-sm md:text-base">
                        <div className="flex items-center space-x-1">
                          <FaHeart />
                          <span>60</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FaRegCommentDots />
                          <span>Reply</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-start mb-4 p-4 bg-gray-100 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                      <div className="bg-red-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl">
                        M
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="border p-2 rounded-lg bg-white">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-lg md:text-xl">
                            Matej Bačo
                          </h4>
                          <span className="text-gray-500 text-sm">Apr 11</span>
                        </div>
                        <p className="mt-2 text-gray-800 text-sm md:text-base">
                          Trust me, Appwrite is one of the easiest to learn! Fun
                          fact, you don't need to learn everything at once - you
                          can gradually add features as you learn about them
                          <span className="inline-block ml-1">😇</span> For me,
                          the starting point was a cool reading where Appwrite
                          team built a real application.
                        </p>
                      </div>
                      <div className="flex items-center mt-4 space-x-4 text-gray-500 text-sm md:text-base">
                        <div className="flex items-center space-x-1">
                          <FaHeart />
                          <span>60</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FaRegCommentDots />
                          <span>Reply</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-start mb-4 p-4 bg-gray-100 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                      <div className="bg-red-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl">
                        M
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="border p-2 rounded-lg bg-white">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-lg md:text-xl">
                            Matej Bačo
                          </h4>
                          <span className="text-gray-500 text-sm">Apr 11</span>
                        </div>
                        <p className="mt-2 text-gray-800 text-sm md:text-base">
                          Trust me, Appwrite is one of the easiest to learn! Fun
                          fact, you don't need to learn everything at once - you
                          can gradually add features as you learn about them
                          <span className="inline-block ml-1">😇</span> For me,
                          the starting point was a cool reading where Appwrite
                          team built a real application.
                        </p>
                      </div>
                      <div className="flex items-center mt-4 space-x-4 text-gray-500 text-sm md:text-base">
                        <div className="flex items-center space-x-1">
                          <FaHeart />
                          <span>60</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FaRegCommentDots />
                          <span>Reply</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-start mb-4 p-4 bg-gray-100 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                      <div className="bg-red-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl">
                        M
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="border p-2 rounded-lg bg-white">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-lg md:text-xl">
                            Matej Bačo
                          </h4>
                          <span className="text-gray-500 text-sm">Apr 11</span>
                        </div>
                        <p className="mt-2 text-gray-800 text-sm md:text-base">
                          Trust me, Appwrite is one of the easiest to learn! Fun
                          fact, you don't need to learn everything at once - you
                          can gradually add features as you learn about them
                          <span className="inline-block ml-1">😇</span> For me,
                          the starting point was a cool reading where Appwrite
                          team built a real application.
                        </p>
                      </div>
                      <div className="flex items-center mt-4 space-x-4 text-gray-500 text-sm md:text-base">
                        <div className="flex items-center space-x-1">
                          <FaHeart />
                          <span>60</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FaRegCommentDots />
                          <span>Reply</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-start mb-4 p-4 bg-gray-100 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                      <div className="bg-red-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl">
                        M
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="border p-2 rounded-lg bg-white">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-lg md:text-xl">
                            Matej Bačo
                          </h4>
                          <span className="text-gray-500 text-sm">Apr 11</span>
                        </div>
                        <p className="mt-2 text-gray-800 text-sm md:text-base">
                          Trust me, Appwrite is one of the easiest to learn! Fun
                          fact, you don't need to learn everything at once - you
                          can gradually add features as you learn about them
                          <span className="inline-block ml-1">😇</span> For me,
                          the starting point was a cool reading where Appwrite
                          team built a real application.
                        </p>
                      </div>
                      <div className="flex items-center mt-4 space-x-4 text-gray-500 text-sm md:text-base">
                        <div className="flex items-center space-x-1">
                          <FaHeart />
                          <span>60</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FaRegCommentDots />
                          <span>Reply</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-start mb-4 p-4 bg-gray-100 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                      <div className="bg-red-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl">
                        M
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="border p-2 rounded-lg bg-white">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-lg md:text-xl">
                            Matej Bačo
                          </h4>
                          <span className="text-gray-500 text-sm">Apr 11</span>
                        </div>
                        <p className="mt-2 text-gray-800 text-sm md:text-base">
                          Trust me, Appwrite is one of the easiest to learn! Fun
                          fact, you don't need to learn everything at once - you
                          can gradually add features as you learn about them
                          <span className="inline-block ml-1">😇</span> For me,
                          the starting point was a cool reading where Appwrite
                          team built a real application.
                        </p>
                      </div>
                      <div className="flex items-center mt-4 space-x-4 text-gray-500 text-sm md:text-base">
                        <div className="flex items-center space-x-1">
                          <FaHeart />
                          <span>60</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FaRegCommentDots />
                          <span>Reply</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-start mb-4 p-4 bg-gray-100 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                      <div className="bg-red-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl">
                        M
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="border p-2 rounded-lg bg-white">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-lg md:text-xl">
                            Matej Bačo
                          </h4>
                          <span className="text-gray-500 text-sm">Apr 11</span>
                        </div>
                        <p className="mt-2 text-gray-800 text-sm md:text-base">
                          Trust me, Appwrite is one of the easiest to learn! Fun
                          fact, you don't need to learn everything at once - you
                          can gradually add features as you learn about them
                          <span className="inline-block ml-1">😇</span> For me,
                          the starting point was a cool reading where Appwrite
                          team built a real application.
                        </p>
                      </div>
                      <div className="flex items-center mt-4 space-x-4 text-gray-500 text-sm md:text-base">
                        <div className="flex items-center space-x-1">
                          <FaHeart />
                          <span>60</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FaRegCommentDots />
                          <span>Reply</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-start mb-4 p-4 bg-gray-100 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                      <div className="bg-red-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl">
                        M
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="border p-2 rounded-lg bg-white">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-lg md:text-xl">
                            Matej Bačo
                          </h4>
                          <span className="text-gray-500 text-sm">Apr 11</span>
                        </div>
                        <p className="mt-2 text-gray-800 text-sm md:text-base">
                          Trust me, Appwrite is one of the easiest to learn! Fun
                          fact, you don't need to learn everything at once - you
                          can gradually add features as you learn about them
                          <span className="inline-block ml-1">😇</span> For me,
                          the starting point was a cool reading where Appwrite
                          team built a real application.
                        </p>
                      </div>
                      <div className="flex items-center mt-4 space-x-4 text-gray-500 text-sm md:text-base">
                        <div className="flex items-center space-x-1">
                          <FaHeart />
                          <span>60</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FaRegCommentDots />
                          <span>Reply</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-start mb-4 p-4 bg-gray-100 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                      <div className="bg-red-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl">
                        M
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="border p-2 rounded-lg bg-white">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-lg md:text-xl">
                            Matej Bačo
                          </h4>
                          <span className="text-gray-500 text-sm">Apr 11</span>
                        </div>
                        <p className="mt-2 text-gray-800 text-sm md:text-base">
                          Trust me, Appwrite is one of the easiest to learn! Fun
                          fact, you don't need to learn everything at once - you
                          can gradually add features as you learn about them
                          <span className="inline-block ml-1">😇</span> For me,
                          the starting point was a cool reading where Appwrite
                          team built a real application.
                        </p>
                      </div>
                      <div className="flex items-center mt-4 space-x-4 text-gray-500 text-sm md:text-base">
                        <div className="flex items-center space-x-1">
                          <FaHeart />
                          <span>60</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FaRegCommentDots />
                          <span>Reply</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-10 py-4 bg-gray-50 rounded-lg shadow-md border">
              <h2 className="text-2xl font-bold mb-6 text-gray-700">
                Read next
              </h2>
              <div className="space-y-4">
                {articles.map((article, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 border-b hover:bg-gray-300 rounded-lg p-2"
                  >
                    <img
                      src={article.image}
                      alt={article.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3
                        className={`text-lg font-semibold ${
                          article.textColor || "text-black"
                        }`}
                      >
                        {article.title}
                      </h3>
                      <p className="text-gray-600">{`${article.author} - ${article.date}`}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-3/4 hidden lg:block p-4 bg-gray-700 min-h-screen sticky top-[-240px]">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center">
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--mbsgKaXh--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/1/0213bbaa-d5a1-4d25-9e7a-10c30b455af0.png"
                alt="DEV Team"
                className="w-20 h-20"
              />
              <a href="#" className="ml-4 text-blue-500">
                The DEV team
              </a>
            </div>
            <div className="">
              <button className="mt-4 mb-4 bg-blue-500 text-white py-2 px-4 rounded w-full">
                Follow
              </button>
            </div>

            <div className="text-gray-600">LOCATION</div>
            <div className="text-gray-200">Washington DC</div>
            <div className="text-gray-600">EDUCATION</div>
            <div className="text-gray-200">
              Duke University | The Firehose Project (coding bootcamp)
            </div>
            <div className="text-gray-600">WORK</div>
            <div className="text-gray-200">Software Engineer at Forem</div>
            <div className="text-gray-600">JOINED</div>
            <div className="text-gray-200">10 Jul 2018</div>
          </div>

          <div className="mt-6 border border-gray-200  rounded-lg">
            <div className="px-2 py-2 rounded-t-xl bg-black">
              <h4 className="text-lg font-bold">Contribute</h4>
            </div>
            <div className="p-4">
              <p>The hardworking team behind dev.to ❤️</p>
              <p className="text-gray-200">
                Want to contribute to open source and help make the DEV
                community stronger?
                <br />
                The code that powers DEV is called <b>Forem</b> and is freely
                available on GitHub.
                <br />
                You're welcome to jump in!
              </p>
              <div className="mt-4 w-full">
                <button className="bg-blue-500 text-white py-2 px-4 rounded w-full">
                  Contribute to Forem
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 border border-gray-200 rounded-xl overflow-x-hidden">
            <div className=" bg-black text-white rounded-t-xl px-4 py-2 mb-8">
              <h4 className="text-lg font-bold mb-4">
                More from{" "}
                <a href="#" className="text-blue-500">
                  The DEV team
                </a>
              </h4>
            </div>
            <div className="px-4">
              <div className="flex gap-2 mb-4">
                <img
                  className="w-20 h-20"
                  src="https://blog.bit.ai/wp-content/uploads/2022/06/mw1920_24_Awesome_Integrations_to_Create_Powerful_Documents_banner-80x80.jpg"
                  alt="Article 1"
                />
                <p className="text-gray-200">
                  Interested in the social impact you can have as a developer?
                  Read this post.
                  <br />
                  <span className="text-blue-500">#meta</span>{" "}
                  <span className="text-blue-500">#forem</span>{" "}
                  <span className="text-blue-500">#inclusion</span>{" "}
                  <span className="text-blue-500">#socialimpact</span>
                </p>
              </div>

              <div className="flex gap-2 mb-4">
                <img
                  className="w-20 h-20"
                  src="https://blog.bit.ai/wp-content/uploads/2022/05/mw1920_How_Bit.ai_Makes_a_Freelancer_s_Life_Easy_banner-80x80.jpg"
                  alt="Article 2"
                />
                <p className="text-gray-200">
                  Appwrite x DEV Hackathon Help Thread
                  <br />
                  <span className="text-blue-500">#appwritehack</span>{" "}
                  <span className="text-blue-500">#appwrite</span>{" "}
                  <span className="text-blue-500">#help</span>
                </p>
              </div>

              <div className="flex gap-2 mb-4">
                <img
                  className="w-20 h-20"
                  src="https://blog.bit.ai/wp-content/uploads/2022/05/mw1920_How_Bit.ai_Can_Help_Students_Manage_Schoolwork_banner-80x80.jpg"
                  alt="Article 3"
                />
                <p className="text-gray-200">
                  Community Discussion Thread — Appwrite x DEV Hackathon
                  <br />
                  <span className="text-blue-500">#discuss</span>{" "}
                  <span className="text-blue-500">#appwritehack</span>{" "}
                  <span className="text-blue-500">#appwrite</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarDesktop;

