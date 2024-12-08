import React, { useState } from "react";
import { FaHeart, FaComment } from "react-icons/fa";
import { LikeABlog, UnlikeLikeABlog } from "../../fetching/dataSnap/like";

const Article = ({
  banner_image,
  author_username,
  created_at,
  title,
  content,
  like_count,
  category,
  id,
}) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(like_count);

  const handleLikeToggle = async () => {
    try {
      if (liked) {
        await UnlikeLikeABlog(id);
        setLikes(likes - 1);
      } else {
        await LikeABlog(id);
        setLikes(likes + 1);
      }
      setLiked(!liked);
    } catch (error) {
      console.error("Error updating like status:", error);
    }
  };

  return (
    <div className="article-card p-2 md:p-4 mb-2 border-2 border-gray-700 text-white overflow-auto shadow-lg rounded-lg">
      <div className="profile flex items-center mb-4 overflow-auto">
        <img
          src={banner_image}
          alt="Profile"
          className="profile-image w-12 h-12 rounded-full mr-4"
        />
        <div className="info">
          <h4 className="text-lg font-semibold">
            <a href="#">{author_username || "Anonymous"}</a>
          </h4>
          <p className="text-sm">{new Date(created_at).toLocaleDateString()}</p>
        </div>
      </div>
      <div className="article-content">
        <div className="content mb-4">
          <div className="read-reactions flex items-center mb-2 text-sm">
            <button
              className="reactions flex items-center mr-4 cursor-pointer"
              onClick={handleLikeToggle}
            >
              <FaHeart
                className={`mr-1 ${liked ? "text-red-500" : "text-gray-500"}`}
              />
              <p>
                {likes} <span>like</span>
              </p>
            </button>
            <div className="comments flex items-center">
              <FaComment className="mr-1 text-gray-500" />
              <p>Comments</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4 p-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
              <div className="mb-2">
                <span dangerouslySetInnerHTML={{ __html: content }}></span>
              </div>
            </div>
            <div className="w-full md:w-1/3 mb-2">
              <img src={banner_image} alt="Article" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="tags-used flex items-center justify-between text-white text-sm">
        <p className="used-tags flex items-center">Tags: {category}</p>
      </div>
    </div>
  );
};

export default Article;
