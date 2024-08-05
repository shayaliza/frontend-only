import React, { useState } from "react";
import PersonalInfoForm from "./component/personalinfoform";
import ResumeSection from "./component/resumeSection";
import SkillsSection from "./component/skillSection";
import ConnectInfoSection from "./component/connectinfor";
import ExperienceCard from "./secondComp/expeData";
import EducationCard from "./secondComp/education";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { FaUser, FaTrophy, FaMedal, FaStar, FaCrown } from "react-icons/fa";

const SecondProfilePage = () => {
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/80"
  );
  const [bannerImage, setBannerImage] = useState(
    "https://via.placeholder.com/1500x300"
  );

  const handleImageChange = (e, setImage) => {
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="flex flex-col">
      <div className="flex bg-gray-100 flex-row ">
        <div className="max-w-holder w-full mx-auto max_width_holder max-w-[1400px] max-[1500px]:max-w-[1100px] overflow-x-hidden overflow-y-scroll">
          <div className="max-w-7xl mx-auto p-4">
            <div className=" mx-auto ">
              <div className="relative">
                <img
                  src={bannerImage}
                  alt="Banner"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <input
                  type="file"
                  className="hidden"
                  id="uploadBanner"
                  onChange={(e) => handleImageChange(e, setBannerImage)}
                />
                <button
                  onClick={() =>
                    document.getElementById("uploadBanner").click()
                  }
                  className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Edit banner
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-xl p-9 mr-9 left-5 relative -mt-12">
                <div className="flex flex-row">
                  <div className="flex mb-4 w-full">
                    <img
                      className="w-16 h-16 rounded-full"
                      src="https://placehold.co/64x64"
                      alt="Profile Picture"
                    />
                    <div className="ml-4">
                      <h2 className="text-lg font-semibold text-foreground">
                        Sai Pavan Saketh
                      </h2>
                      <p className="text-muted-foreground">@saketh33</p>
                      <p className="text-muted-foreground">
                        Devops | Backend Developer @techsnap
                      </p>
                      <p className="text-muted-foreground">
                        Andhra Pradesh, India
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between  mb-4">
                    <div className="text-center">
                      <div>100k </div>
                      <div className="font-semibold">Connections</div>
                    </div>
                    <div className="text-center">
                      <div>45 </div>
                      <div className="font-semibold">blogs</div>
                    </div>
                    <div className="text-center">
                      <div>100k </div>
                      <div className="font-semibold">Followers</div>
                    </div>
                    <div className="text-center">
                      <div>100k </div>
                      <div className="font-semibold">Following</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-9 p-2">
              <div className="flex md:flex-row flex-col  gap-6">
                <div className="md:w-2/3 w-full">
                  <div className={"bg-card p-4 rounded-lg shadow-md"}>
                    <h2 className={"text-lg font-bold text-foreground"}>
                      About
                    </h2>
                    <p className={"text-muted-foreground flex flex-col"}>
                      <div>
                        {" "}
                        A racer of life without a race. Innovation & Venturing
                        ignited in me at a much younger age. 3 years of
                        Entrepreneurial Expeditions that I have sailed through
                        secondarily to shatter my experiential limits and
                        primarily to have and make a cause, before diving to
                        impact the World from a Corporate Role. I am a decisive
                        Product Manager, Business Specialist, and Structured
                        strategist........
                      </div>
                      <span className="text-primary hover:underline">
                        SEE MORE
                      </span>
                    </p>
                  </div>
                  <div className={"p-4 bg-background rounded-lg shadow-md"}>
                    <h2 className="text-lg font-semibold">Resume</h2>
                    <p className="text-muted-foreground">
                      jerome-bell-resume.pdf
                    </p>
                    <a
                      href="/path/to/jerome-bell-resume.pdf"
                      className={
                        "inline-flex items-center mt-2 bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-lg"
                      }
                    >
                      Download{" "}
                      <img
                        aria-hidden="true"
                        alt="download-icon"
                        src="https://openui.fly.dev/openui/24x24.svg?text=⬇️"
                        className="ml-2"
                      />
                    </a>
                  </div>
                  <div className="mt-4">
                    <ExperienceCard />
                  </div>
                  <div className="mt04">
                    <EducationCard />
                  </div>
                  {/* Proof of Work */}
                  <div className={"bg-white mt-4 p-4 rounded-lg shadow-md"}>
                    <h2 className={"text-lg font-bold text-foreground"}>
                      Proof of Word
                    </h2>
                    <div className=" h-[300px]"></div>
                  </div>
                  {/* Skills */}
                  <div className="p-4 bg-white rounded-lg shadow-md mt-4 ">
                    <h2 className="text-lg font-semibold mb-2">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm">
                        Mobile Application
                      </span>
                      <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm">
                        Problem-Solving
                      </span>
                      <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm">
                        Team-Working
                      </span>
                      <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm">
                        PHP
                      </span>
                      <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm">
                        Javascript
                      </span>
                      <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm">
                        HTML / CSS
                      </span>
                      <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm">
                        SwiftUI
                      </span>
                    </div>
                  </div>
                  {/* Language Info */}
                  <div className="p-4 bg-card rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold text-foreground">
                      Language
                    </h2>
                    <div className="flex space-x-4 mt-2">
                      <div className="bg-secondary text-secondary-foreground rounded-full px-3 py-1">
                        <span className="font-bold">TR</span> Turkish
                        <div className="text-sm text-muted-foreground">
                          Native Language
                        </div>
                      </div>
                      <div className="bg-secondary text-secondary-foreground rounded-full px-3 py-1">
                        <span className="font-bold">EN</span> English
                        <div className="text-sm text-muted-foreground">
                          Advanced
                        </div>
                      </div>
                      <div className="bg-secondary text-secondary-foreground rounded-full px-3 py-1">
                        <span className="font-bold">DE</span> German
                        <div className="text-sm text-muted-foreground">
                          Intermediate
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/3 w-full space-y-6">
                  {/* Quick Actions Section */}
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
                    <div className="flex flex-col space-y-2">
                      <div className=" flex justify-between gap-4">
                        <button className=" w-1/2 p-2 rounded-lg bg-yellow-400 text-black hover:bg-yellow-300">
                          View Blogs
                        </button>
                        <button className=" w-1/2 p-2 rounded-lg bg-orange-500 text-white hover:bg-orange-400">
                          Share Profile
                        </button>
                      </div>
                      <div className="gap-4 flex justify-between ">
                        <button className=" w-1/2 p-2 rounded-lg bg-orange-500 text-white hover:bg-orange-400">
                          View Posts
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Connect Section */}
                  <div className="bg-card p-6 rounded-lg shadow-md mt-4">
                    <h2 className="text-lg font-bold mb-4">Connect</h2>
                    <div className="flex flex-col space-y-2">
                      <a
                        href="https://facebook.com"
                        className="flex items-center text-muted-foreground hover:text-primary"
                      >
                        <CiGlobe className="mr-2" />
                        about me/skjfi
                      </a>
                      <a
                        href="https://facebook.com"
                        className="flex items-center text-muted-foreground hover:text-primary"
                      >
                        <FaFacebook className="mr-2" />
                        Facebook
                      </a>
                      <a
                        href="https://instagram.com"
                        className="flex items-center text-muted-foreground hover:text-primary"
                      >
                        <FaInstagram className="mr-2" />
                        Instagram
                      </a>
                    </div>
                  </div>
                  {/* Profile  */}
                  <div className="bg-card p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-foreground">
                      snaptheprofile
                    </h2>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="">
                        <h3 className="text-sm text-gray-400">Daily XP</h3>
                        <p className="text-xl font-semibold text-foreground">
                          0/250
                        </p>
                      </div>
                      <div className="">
                        <h3 className="text-sm text-gray-400">Total XP</h3>
                        <p className="text-xl font-semibold text-foreground">
                          250
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className=" text-gray-400 text-sm">Daily Streak</h3>
                      <div className="flex flex-row gap-5">
                        <p className="text-xl font-semibold text-foreground">
                          ⚡ 0 days
                        </p>
                        <div className="flex justify-center gap-3 mt-2">
                          <span className="mx-1">M</span>
                          <span className="mx-1">T</span>
                          <span className="mx-1">W</span>
                          <span className="mx-1">T</span>
                          <span className="mx-1">F</span>
                          <span className="mx-1">S</span>
                          <span className="mx-1">S</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      <div className="bg-white p-4 rounded-lg shadow-md text-center">
                        <span className="text-2xl">0</span>
                        <p className="mt-2">Courses completed</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-md text-center">
                        <span className="text-2xl">0</span>
                        <p className="mt-2">Tracks completed</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-md text-center">
                        <span className="text-2xl">0</span>
                        <p className="mt-2">Projects completed</p>
                      </div>
                    </div>
                  </div>
                  {/* LeaderBoard */}
                  <div className="max-w-sm mx-auto bg-card rounded-lg shadow-lg p-4">
                    <h2 className="text-lg font-bold text-foreground">
                      Weekly Leaderboard
                    </h2>
                    <div className="mt-4">
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <div className="flex items-center">
                          <FaTrophy className="mr-2 text-yellow-500" />
                          <FaUser className="mr-2 text-gray-500" />

                          <span className="font-semibold">Ali</span>
                        </div>
                        <span className="text-muted-foreground">7.68k XP</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <div className="flex items-center">
                          <FaMedal className="mr-2 text-orange-500" />
                          <FaUser className="mr-2 text-gray-500" />

                          <span className="font-semibold">Patnam</span>
                        </div>
                        <span className="text-muted-foreground">4.92k XP</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <div className="flex items-center">
                          <FaStar className="mr-2 text-blue-500" />
                          <FaUser className="mr-2 text-gray-500" />

                          <span className="font-semibold">Pradunya</span>
                        </div>
                        <span className="text-muted-foreground">4.63k XP</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <div className="flex items-center">
                          <FaCrown className="mr-2 text-purple-500" />
                          <FaUser className="mr-2 text-gray-500" />

                          <span className="font-semibold">4th</span>
                        </div>
                        <span className="text-muted-foreground">3.83k XP</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <div className="flex items-center">
                          <FaStar className="mr-2 text-red-500" />
                          <FaUser className="mr-2 text-gray-500" />

                          <span className="font-semibold">5th</span>
                        </div>
                        <span className="text-muted-foreground">3.82k XP</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <div className="flex items-center">
                          <FaStar className="mr-2 text-red-500" />

                          <FaUser className="mr-2 text-gray-500" />
                          <span className="font-semibold">Saketh</span>
                        </div>
                        <span className="text-muted-foreground">5 XP</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondProfilePage;
