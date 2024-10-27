// Comment.js
import React, { useState } from "react";
import { FaReply } from "react-icons/fa";
import CommentList from "./commentList";

const Comment = ({ comment, addReply, depth = 0 }) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleReply = () => {
    addReply(replyText, comment.id);
    setReplyText("");
    setShowReplyBox(false);
  };

  return (
    <div
      className="pl-4 border-l border-gray-300 ml-4"
      style={{ marginLeft: `${depth * 16}px` }}
    >
      {" "}
      {/* User avatar and name */}
      <div className="flex items-center mb-2 space-x-2">
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
      {/* Comment content */}
      <p className="text-sm text-gray-700 dark:text-gray-300 ml-10">
        {comment.text}
      </p>
      {/* Reply button */}
      <button
        className="text-xs text-blue-500 hover:underline mt-1 flex items-center ml-10"
        onClick={() => setShowReplyBox(!showReplyBox)}
      >
        <FaReply className="mr-1" /> Reply
      </button>
      {/* Reply input box */}
      {showReplyBox && (
        <div className="mt-2 relative ml-10">
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            className="w-full p-2 text-sm border rounded resize-none pr-12" // Padding-right for button space
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
      {/* Render nested comments */}
      {comment.replies && comment.replies.length > 0 && (
        <CommentList
          comments={comment.replies}
          addReply={addReply}
          depth={depth + 1}
        />
      )}
    </div>
  );
};

export default Comment;
