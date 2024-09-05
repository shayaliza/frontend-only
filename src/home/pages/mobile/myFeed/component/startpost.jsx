import React, { useState } from "react";
import {
  FaPhotoVideo,
  FaVideo,
  FaCalendarAlt,
  FaFileAlt,
} from "react-icons/fa";
import NewPost from "./newPost";
import profileImage from "../../../../assets/profile.png";

function StartPost({ handleShowNewPost, handleCloseNewPost, showNewPost }) {
  return (
    <>
      <div className="bg-white p-4 w-[555px] min-[1400px]:w-[650px] max-[500px]:w-full max-[500px]:mx-0 mx-auto rounded-lg shadow-md">
        <div className="flex items-center mb-10">
          <img
            src={profileImage}
            alt="profile"
            className="w-12 h-12 rounded-full mr-2"
          />
          <div
            onClick={() => handleShowNewPost()}
            className="post_bar cursor-pointer border-gray-200 border-2 solid w-full rounded-full p-2"
          >
            <h1 className="text-lg font-semibold text-gray-400">
              Start A Post
            </h1>
          </div>
        </div>
        <div className="options_holder flex justify-between w-[90%] mx-auto">
          <div className="icon flex items-center cursor-pointer flex-col">
            <FaPhotoVideo className="w-6 h-6 mr-2 text-gray-600" />
            <span className="text-sm">Photo</span>
          </div>
          <div className="icon flex items-center cursor-pointer flex-col">
            <FaVideo className="w-6 h-6 mr-2 text-gray-600" />
            <span className="text-sm">Video</span>
          </div>
          <div className="icon flex items-center cursor-pointer flex-col">
            <FaCalendarAlt className="w-6 h-6 mr-2 text-gray-600" />
            <span className="text-sm">Event</span>
          </div>
          <div className="icon flex items-center cursor-pointer flex-col">
            <FaFileAlt className="w-6 h-6 mr-2 text-gray-600" />
            <span className="text-sm">Article</span>
          </div>
        </div>
      </div>

      {showNewPost && <NewPost onClose={() => handleCloseNewPost()} />}
    </>
  );
}

export default StartPost;
