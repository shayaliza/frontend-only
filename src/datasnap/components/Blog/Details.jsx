import React, { useState } from "react";
import logo from "../../assets/rsc/TSlogo.png";
import banner from "../../assets/rsc/banner.webp";
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
    <div className="bg-gray-800 text-white flex flex-col w-screen">
      <div className="flex flex-row items-center justify-between p-4 w-full mx-auto sticky top-0 z-50 bg-gray-800">
      <img src={logo} alt="TechSnap Logo" className="h-16" />

      <ul className="w-auto flex flex-row md:space-x-6 items-center md:w-auto md:mt-0">
        <li className="hidden lg:block relative md:mr-4">
          <button
            onClick={() => handleDropdownClick("catalog")}
            className="flex items-center space-x-1 text-white"
          >
            <span>Catalog</span>
            <FaChevronDown />
          </button>
          {openMenu === "catalog" && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white text-black shadow-lg rounded-lg w-[80vw] md:w-[400px] z-50">
              <div className="flex flex-col md:flex-row">
                <div className="p-4 w-full md:w-1/3">
                  <h3 className="text-lg font-bold">Course Catalog</h3>
                  <p className="mt-2">
                    Career options for students after completing engineering in Computer Science
                  </p>
                </div>
                <div className="p-4 grid grid-cols-2 gap-4 md:grid-cols-3 w-full md:w-2/3">
                  <div>
                    <h4 className="font-bold">Developer Careers</h4>
                    <ul className="py-2">
                      <li>Frontend Developer</li>
                      <li>Backend Developer</li>
                      <li>Software Developer</li>
                      <li>Game Developer</li>
                      <li>Mobile Application Dev</li>
                      <li>
                        <a href="#" className="text-blue-500">view all</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold">Data Careers</h4>
                    <ul className="py-2">
                      <li>Data Analyst</li>
                      <li>Data Engineer</li>
                      <li>Data Scientist</li>
                      <li>Data Architect</li>
                      <li>ML Engineer</li>
                      <li>
                        <a href="#" className="text-blue-500">view all</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold">Cloud Careers</h4>
                    <ul className="py-2">
                      <li>Cloud Architect</li>
                      <li>DevOps Engineer</li>
                      <li>Cloud Security Analyst</li>
                      <li>Cloud Engineer</li>
                      <li>IOT Developer</li>
                      <li>
                        <a href="#" className="text-blue-500">view all</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </li>

        <li className="hidden lg:block relative md:mr-4">
          <button
            onClick={() => handleDropdownClick("community")}
            className="flex items-center space-x-1 text-white"
          >
            <span>Community</span>
            <FaChevronDown />
          </button>
          {openMenu === "community" && (
            <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-lg w-48 z-50">
              <ul className="p-4 space-y-2">
                <li><a href="#" className="hover:text-blue-500">About</a></li>
                <li><a href="#" className="hover:text-blue-500">Forum</a></li>
                <li><a href="#" className="hover:text-blue-500">Our People</a></li>
                <li><a href="#" className="hover:text-blue-500">Contact</a></li>
                <li><a href="#" className="hover:text-blue-500">Learner Stories</a></li>
                <li><a href="#" className="hover:text-blue-500">Fellowship</a></li>
              </ul>
            </div>
          )}
        </li>

        <li className="hidden lg:block cursor-pointer text-white md:mr-4">Career Paths</li>

        <li className="hidden lg:block relative md:mr-4">
          <button
            onClick={() => handleDropdownClick("resource")}
            className="flex items-center space-x-1 text-white"
          >
            <span>Resources</span>
            <FaChevronDown />
          </button>
          {openMenu === "resource" && (
            <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-lg w-48 z-50">
              <ul className="p-4 space-y-2">
                <li><a href="#" className="hover:text-blue-500">Cheat Sheets</a></li>
                <li><a href="#" className="hover:text-blue-500">Blogs</a></li>
                <li><a href="#" className="hover:text-blue-500">Mock Interview</a></li>
                <li><a href="#" className="hover:text-blue-500">Events</a></li>
                <li><a href="#" className="hover:text-blue-500">Webinars</a></li>
                <li><a href="#" className="hover:text-blue-500">Challenges</a></li>
                <li><a href="#" className="hover:text-blue-500">Projects</a></li>
              </ul>
            </div>
          )}
        </li>

        <li className="hidden lg:blockrelative md:mr-4">
          <button
            onClick={() => handleDropdownClick("pricing")}
            className="flex items-center space-x-1 text-white"
          >
            <span>Pricing</span>
            <FaChevronDown />
          </button>
          {openMenu === "pricing" && (
            <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-lg w-48 z-50">
              <ul className="p-4 space-y-2">
                <li><a href="#" className="hover:text-blue-500">For Individuals</a></li>
                <li><a href="#" className="hover:text-blue-500">For Students</a></li>
                <li><a href="#" className="hover:text-blue-500">For University</a></li>
              </ul>
            </div>
          )}
        </li>

        <span className="flex flex-row  md:space-y-0 space-x-2 md:ml-auto">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Register</button>
        </span>

        <li className="relative ml-2">
          <img
            src="https://avatars.githubusercontent.com/u/39455174?v=4"
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover cursor-pointer"
            onClick={() => handleDropdownClick("profile")}
          />
          {openMenu === "profile" && (
            <div className="absolute top-full right-0 mt-2 bg-white text-black shadow-lg rounded-lg w-48 z-50">
              <ul className="p-4 space-y-2">
                <li className="flex items-center space-x-2">
                  <FaTachometerAlt />
                  <a href="#" className="ml-2">View Dashboard</a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaUser />
                  <a href="#" className="ml-2">View Profile</a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaEdit />
                  <a href="#" className="ml-2">Edit</a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaSignOutAlt />
                  <a href="#" className="ml-2">Logout</a>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
      <div className="min-h-screen flex bg-gray-100 w-screen">
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

        <div className="w-3/4 hidden lg:block p-4 bg-gray-700 min-h-screen">
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

          <div className="mt-8 border border-gray-200 rounded-xl">
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
      <div className="bg-gray-900 text-white w-screen">
        <div className="container mx-auto px-4 py-8">
          <footer className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="lg:w-1/3">
              <img src={logo} alt="Logo" className="mb-4 w-32 h-auto" />
              <p className="text-sm leading-relaxed mb-4">
                We are here to endure your muddled stages of knowing the trends
                while pursuing UG-CSE. We help you to know about trending jobs
                and required skills for achieving one particular designation.
              </p>
              <p className="text-sm leading-relaxed">
                We will succour you in submitting your university projects as
                well as steer you with free tutorials, online courses, live
                courses, and career paths.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:w-2/3">
              <div>
                <h1 className="text-lg font-bold mb-2">Company</h1>
                <ul className="space-y-1 text-sm">
                  <li>
                    <a href="/aboutus" className="hover:text-blue-400">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="/learnerstories" className="hover:text-blue-400">
                      Learner stories
                    </a>
                  </li>
                  <li>
                    <a href="/boardmembers" className="hover:text-blue-400">
                      Our people
                    </a>
                  </li>
                  <li>
                    <a href="/jobs" className="hover:text-blue-400">
                      Jobs
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-lg font-bold mb-2">Resources</h1>
                <ul className="space-y-1 text-sm">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Tutorials
                    </a>
                  </li>
                  <li>
                    <a href="/careerpath" className="hover:text-blue-400">
                      Career paths
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Courses
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Blogs
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-lg font-bold mb-2">Support</h1>
                <ul className="space-y-1 text-sm">
                  <li>
                    <a href="/contact" className="hover:text-blue-400">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="/any_bugs" className="hover:text-blue-400">
                      Any ideas/Bugs
                    </a>
                  </li>
                  <li>
                    <a href="/invest" className="hover:text-blue-400">
                      Get Involved
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-lg font-bold mb-2">Services</h1>
                <ul className="space-y-1 text-sm">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Startup services
                    </a>
                  </li>
                  <li>
                    <a href="/careerpath" className="hover:text-blue-400">
                      Design services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Mini projects
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Mock interviews
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm w-full md:w-auto">
              <p>Join our newsletter</p>
              <form
                className="flex mt-2 space-x-2"
                method="POST"
                action="/nextpage"
              >
                <input
                  type="email"
                  name="email"
                  className="p-2 rounded-md text-black w-full md:w-auto"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/74741373/"
                className="hover:opacity-80"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
                  alt="LinkedIn"
                  className="h-6 w-6"
                />
              </a>
              <a href="/contact" className="hover:opacity-80">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                  alt="Gmail"
                  className="h-6 w-6"
                />
              </a>
              <a
                href="https://trello.com/b/SMDt9NMY/techsnap-upcoming-releases"
                className="hover:opacity-80"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC-APsSZXqFUpTTg9qvGW6D5hERazjQfAMkM0Oz6b9sC3uIwU4-_fD8CatVhbAUG4hz3g&usqp=CAU"
                  alt="Trello"
                  className="h-6 w-6"
                />
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
            <div className="flex flex-wrap justify-center space-x-4 mb-4">
              <a href="/privacy" className="hover:text-blue-400 mb-2">
                Privacy policy
              </a>
              <a href="/cookies" className="hover:text-blue-400 mb-2">
                Cookies Notice
              </a>
              <a href="/security" className="hover:text-blue-400 mb-2">
                Security
              </a>
              <a href="/terms" className="hover:text-blue-400 mb-2">
                Terms of use
              </a>
            </div>
            <p className="text-gray-500">
              Made with 💗 in India © 2021 Techsnap Educations LLP. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarDesktop;

