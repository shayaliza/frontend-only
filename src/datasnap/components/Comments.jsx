import {
  ChevronDown,
  MessageCircle,
  MoreHorizontal,
  Search,
  SendIcon,
  Share2Icon,
} from "lucide-react";
import React, { useState, memo, useMemo, useEffect } from "react";
import { BiBookmark, BiDislike, BiLike } from "react-icons/bi";
import { FaBookmark, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import SendDesktop from "./Effects/SendDesktop";
import DesktopMore from "./Effects/DesktopMore";
import CommentsDesktop from "./Effects/CommentsDesktop";
import { useLocation } from "react-router-dom";
import Commentstructure from "./Comments/CommentStructure";
import MainComments from "./Comments/MainComments";

const Comments = memo(
  ({
    likes = 50,
    dislikes = 5,
    shares = 20,
    reads = 118,
    isPro = true,
    url = "https://frontend-only-ruddy.vercel.app/datasnap/home",
  }) => {
    const [isShareOpen, setIsShareOpen] = useState(false);
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);
    const [commentInfo, setCommentInfo] = useState({});

    const location = useLocation();
    const { ProfileImage, Title, Description, BlogImg, Date, Author } = location.state || {};

    const toggleBookmark = () => {
      setIsBookmarked((prev) => {
        const newValue = !prev;
        return newValue;
      });
    };

    const toggleLiked = () => {
      setIsLiked((prev) => {
        const newValue = !prev;
        return newValue;
      });
      setIsDisliked(false);
    };

    const toggleDisliked = () => {
      setIsDisliked((prev) => {
        const newValue = !prev;
        return newValue;
      });
      setIsLiked(false);
    };

    const handleShare = async () => {
      const data = { Title, text: Description, url };

      try {
        await navigator.share(data);
      } catch (e) {
        console.log("Share error:", e);
      }
    };
    return (
      <div className="flex flex-col items-center space-y-4 p-6 mx-6">
        <div className="overflow-auto my-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center mb-4">
              <img
                src={ProfileImage}
                alt={`${Author}'s profile`}
                className="w-12 h-12 mr-4"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold">{Author}</span>
                  {isPro && (
                    <span className="px-2 text-sm border rounded-md">Pro</span>
                  )}
                </div>
                <div className="text-sm">
                  <span>{Date}</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-6">
              <div className="flex space-x-2">
                <p className="text-blue-500">4min</p>
                <p className="cursor-pointer border px-1">save</p>
              </div>
              <div className="flex gap-4 mx-4">
                <button
                  className="flex items-center gap-1"
                  onClick={handleShare}
                >
                  <SendIcon className="w-4 h-4" />
                </button>
                <button
                  className="flex items-center gap-1"
                  onClick={() => setIsOptionsOpen(true)}
                >
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex flex-col md:flex-row justify-between gap-2 py-2">
              <div className="flex-1">
                <h3 className="text-md font-bold mb-2">{Title}</h3>
                <div className="text-sm">
                  <span>{Description}</span>
                </div>
                <div className="flex gap-4 mt-2">
                  <span>#javascript</span>
                  <span>#web development</span>
                  <span>#git</span>
                </div>
              </div>
              <div className="w-full md:w-1/3 mb-2">
                <img
                  src={BlogImg}
                  alt="Article preview"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1" onClick={toggleLiked}>
                {isLiked ? (
                  <FaThumbsUp className="w-4 h-4 " />
                ) : (
                  <BiLike className="w-4 h-4" />
                )}
                <span>{likes} </span>
              </button>
              <button
                className="flex items-center gap-1"
                onClick={toggleDisliked}
              >
                {isDisliked ? (
                  <FaThumbsDown className="w-4 h-4 mt-1" />
                ) : (
                  <BiDislike className="w-4 h-4 mt-1" />
                )}
                <span>{dislikes} </span>
              </button>
              <button
                className="flex items-center gap-1"
                onClick={() => setIsCommentsOpen(true)}
              >
                <MessageCircle className="w-4 h-4" />
                <span>0</span>
              </button>
              <button
                className="flex items-center gap-1"
                onClick={toggleBookmark}
              >
                {isBookmarked ? (
                  <FaBookmark className="w-4 h-4 " />
                ) : (
                  <BiBookmark className="w-4 h-4" />
                )}
                <span>{reads} </span>
              </button>
              <button
                className="flex items-center gap-1"
                onClick={() => setIsShareOpen(true)}
              >
                <Share2Icon className="w-4 h-4" />
                <span>{shares} </span>
              </button>
              <SendDesktop
                isOpen={isShareOpen}
                onClose={() => setIsShareOpen(false)}
              />
              <DesktopMore
                isOpen={isOptionsOpen}
                onClose={() => setIsOptionsOpen(false)}
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <textarea
            id="message-textarea"
            className="w-full bg-transparent rounded-lg focus:outline-none resize-none border border-gray-500 p-4 text-sm"
            placeholder="Join Conversation"
            style={{
              minHeight: "10px",
              maxHeight: "400px",
              lineHeight: "1.5",
              overflowY: "auto",
            }}
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = `${Math.min(
                e.target.scrollHeight,
                400
              )}px`;
            }}
          />
        </div>
        {/* <div className="w-full flex justify-between items-center">
          <div className="flex space-x-4">
            {["All", "Answered", "Unanswered"].map((label) => (
              <button
                key={label}
                className="px-4 py-1 border rounded-lg hover:shadow focus:ring-2 focus:outline-none"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span>Sort by:</span>
              <button className="flex items-center px-4 py-1 border rounded-lg hover:shadow focus:ring-2 focus:outline-none">
                Best
                <ChevronDown className="w-4 h-4 ml-1 mt-1.5" />
              </button>
            </div>

            <div className="relative z-0">
              <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5" />
              <input
                type="text"
                placeholder="Search Comments..."
                className="pl-10 pr-4 py-2 border rounded-full w-48 focus:outline-none bg-transparent"
              />
            </div>
          </div>
        </div> */}
        <div className="">
          <MainComments/>
        </div>
      </div>
    );
  }
);

export default Comments;
