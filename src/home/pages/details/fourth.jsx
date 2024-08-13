import React, { useState, useEffect } from "react";
import { FaLeaf, FaFlag } from "react-icons/fa";
import BannerImage from "./Assests/default-banner-img.png";

const StickyButton = () => {
  const [position, setPosition] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop < windowHeight / 3) {
        setPosition("top");
      } else if (scrollTop + windowHeight > documentHeight - windowHeight / 3) {
        setPosition("bottom");
      } else {
        setPosition("middle");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-28 top-0 h-full flex flex-col items-center">
      {/* Vertical Line */}
      <div className="w-1 bg-gray-300 h-[200px] absolute top-[400px] "></div>

      {/* Button */}
      <div
        className={`relative transition-all duration-300 ${
          position === "top"
            ? "mt-[400px]"
            : position === "middle"
            ? "mt-[500px]"
            : "mt-[600px]"
        }`}
      >
        <button className="px-6 py-5 bg-green-500 text-white rounded-lg shadow"></button>
      </div>
    </div>
  );
};

const Fourth = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
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

      <div className="flex h-auto shadow-md border-2 border-gray-500 rounded-3xl px-4 bg-gray-100">
        <div className="flex-grow p-8">
          <h1 className="text-3xl font-semibold mb-6">
            Flagging posts for moderator review or assistance
          </h1>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Flags</h2>
            <p className="mt-2">
              Flags are an option for users to bring a post to the moderators’
              attention. This can include posts that need some formatting or
              category/tagging assistance as well as those that are off-topic,
              confusing, rude, or offensive. Users who repeatedly have their
              posts flagged as Off-Topic, Inappropriate, or Spam can receive
              one, two, or even three consequences depending on the content of
              their posts and the frequency of their flags. Repeat offenders can
              lose Trust Levels 9, the trust of the other users, or even their
              account.
            </p>
          </div>
          <h2 className="text-2xl font-semibold">Flags</h2>
          <p className="mb-2 mt-2">
            Flags are an option for users to bring a post to the moderators’
            attention. This can include posts that need some formatting or
            category/tagging assistance as well as those that are off-topic,
            confusing, rude, or offensive. Users who repeatedly have their posts
            flagged as Off-Topic, Inappropriate, or Spam can receive one, two,
            or even three consequences depending on the content of their posts
            and the frequency of their flags. Repeat offenders can lose Trust
            Levels 9, the trust of the other users, or even their account.
          </p>
          <div className="mb-4 mv-4">
            <img src="https://dummyimage.com/600x400/000/fff" />
          </div>
          <p>
            Flags are an option for users to bring a post to the moderators’
            attention. This can include posts that need some formatting or
            category/tagging assistance as well as those that are off-topic,
            confusing, rude, or offensive. Users who repeatedly have their posts
            flagged as Off-Topic, Inappropriate, or Spam can receive one, two,
            or even three consequences depending on the content of their posts
            and the frequency of their flags. Repeat offenders can lose Trust
            Levels 9, the trust of the other users, or even their account.
          </p>
          <div className="mt-4 mb-4">
            <img src="https://dummyimage.com/600x400/000/fff" />
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <StickyButton />
      </div>
    </div>
  );
};

export default Fourth;
