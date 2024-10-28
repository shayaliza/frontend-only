import React, { useState } from "react";
import { FaReply, FaThumbsUp, FaShare } from "react-icons/fa";
import CommentList from "./commentList";
import "./comment.css";

const Comment = ({ comment, addReply, depth = 0 }) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [repliesToShow, setRepliesToShow] = useState(1); // Show 1 nested comment initially
  const [replyText, setReplyText] = useState("");

  const handleReply = () => {
    addReply(replyText, comment.id);
    setReplyText("");
    setShowReplyBox(false);
  };
  const showMoreReplies = () => {
    setRepliesToShow((prev) => prev + 1);
  };

  return (
    <div className={`flex mt-4`} style={{ marginLeft: `${depth * 16}px` }}>
      {/* Comment content */}
      <div className="relative w-full">
        <div className="flex flex-col mb-2 border-gray-200 border-2 rounded-2xl p-3 w-full">
          <div className="flex items-center space-x-2">
            <img
              src={
                comment.avatar ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjrWdH1kcSOptxTJvewZ8d6TIy84-yIoOIEjC8OYljd3LZaarqejCI1njtYhROEXhOCE&usqp=CAU"
              }
              alt="Avatar"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                {comment.username || "Anonymous"}
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 ml-10">
            {comment.text}
          </p>
          {/* Action Buttons */}
          <div className="flex items-center space-x-4 ml-10 mt-0">
            <button className="text-xs text-blue-500 hover:underline flex items-center">
              <FaThumbsUp className="mr-1" /> Like
            </button>
            <button className="text-xs text-blue-500 hover:underline flex items-center">
              <FaShare className="mr-1" /> Share
            </button>
            <button
              className="text-xs text-blue-500 hover:underline flex items-center"
              onClick={() => setShowReplyBox(!showReplyBox)}
            >
              <FaReply className="mr-1" /> Reply
            </button>
          </div>
        </div>

        {/* Reply input box */}
        {showReplyBox && (
          <div className="mt-2 relative ml-10">
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              className="w-full p-2 text-sm border rounded resize-none pr-12"
              placeholder="Write your reply..."
            ></textarea>
            <button
              onClick={handleReply}
              className="absolute bottom-2 right-2 text-xs text-white bg-blue-500 px-2 py-1 rounded"
            >
              Submit
            </button>
          </div>
        )}
        {comment.replies && comment.replies.length > 0 && (
          <>
            <CommentList
              comments={comment.replies.slice(0, repliesToShow)}
              depth={depth + 1}
            />
            {repliesToShow < comment.replies.length && (
              <button
                onClick={showMoreReplies}
                className="ml-10 mt-2 text-blue-500 hover:underline text-xs"
              >
                Show More Replies
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Comment;
