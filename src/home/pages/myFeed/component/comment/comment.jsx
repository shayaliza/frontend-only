import React, { useState } from "react";
import { FaReply, FaThumbsUp, FaShare } from "react-icons/fa";
import CommentList from "./commentList";
import { AiFillPlusCircle } from "react-icons/ai";
// import "./comment.css";

const Comment = ({
  comment,
  addReply,
  depth = 0,
  isLast = false,
  hasReplies = false,
  isThereIndentComments = false,
  index,
  length,
}) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [repliesToShow, setRepliesToShow] = useState(1);
  const [showReplies, setShowReplies] = useState(false); // Toggle state for replies
  const [replyText, setReplyText] = useState("");

  const toggleReplies = () => {
    setShowReplies(!showReplies);
    if (!showReplies) setRepliesToShow(1); // Reset to initial count on close
  };
  const handleReply = () => {
    addReply(replyText, comment.id);
    setReplyText("");
    setShowReplyBox(false);
  };

  const showMoreReplies = () => {
    // setRepliesToShow((prev) => prev + 1);
    setRepliesToShow((prev) => prev + 2);
  };
  const remainingReplies = comment.replies
    ? comment.replies.length - repliesToShow
    : 0;

  return (
    <div className="w-full ">
      {/* Two column wrapper */}
      <div className="flex h-full">
        {/* //@ Left column - fixed width with three rows */}
        <div className="w-16 flex flex-col">
          {/* Top row - fixed height */}
          <div className="h-6 flex justify-center ">
            <img
              src={comment.avatar || "https://..."}
              alt="Avatar"
              className="h-6 w-6 rounded-full"
            />
          </div>
          <div className="flex-1 pl-8 ">
            {isThereIndentComments && (
              <div className="relative h-full">
                <div className="h-full border-l-2 border-black overflow-hidden"></div>
                <div
                  // onClick={showMoreReplies}
                  onClick={toggleReplies}
                  className="absolute -left-1  top-1 text-xl bg-gray-200 cursor-pointer"
                  style={{ zIndex: 10 }}
                >
                  {showReplies ? "-" : "+"}
                </div>
              </div>
            )}
          </div>

          {isThereIndentComments && (
            <div className="h-16 ">
              {isThereIndentComments && (
                <>
                  <div className="flex justify-center col-span-1 h-full">
                    <div
                      className="box-border h-8 border-0 border-tone-4 border-solid border-black
       border-b-[2px] cursor-pointer w-[33px]  border-l-[2px]
       rounded-bl-[11px] mb-2 -mr-[33px]  mx-0"
                    ></div>
                  </div>
                </>
              )}
            </div>
          )}
          {/* Bottom row - fixed height */}
        </div>

        {/* //@ Right column - responsive width with three rows */}
        <div className="flex-1 flex flex-col ">
          {/* Top row - fixed height */}
          <div className="h-6 ">
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
              {comment.username || "Anonymous"}
            </span>
          </div>

          {/* Middle row - responsive height */}
          <div className="flex-1  overflow-auto">
            <div> {comment.text}</div>
            <div className="flex items-center space-x-4 mt-0">
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
            {showReplyBox && (
              <div className="mt-2 relative">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="w-full p-2 text-sm border rounded resize-none pr-12"
                  placeholder="Write your reply..."
                ></textarea>
                <button
                  // onClick={addReply}
                  onClick={handleReply} // Corrected here
                  className="absolute bottom-2 right-2 text-xs text-white bg-blue-500 px-2 py-1 rounded"
                >
                  Submit
                </button>
              </div>
            )}
            {comment.replies && comment.replies.length > 0 && showReplies && (
              <>
                <CommentList
                  comments={comment.replies.slice(0, repliesToShow)}
                  addReply={addReply} // Pass addReply to CommentList
                  depth={depth + 1}
                  isThereIndentComments={isThereIndentComments}
                />
              </>
            )}
          </div>
          {/* @bottm */}
          {comment.replies && comment.replies.length > 0 && (
            <>
              {repliesToShow < comment.replies.length && (
                <div className="h-16 ">
                  <div className="mt-[14px]">
                    <div className="inline-flex items-center ">
                      <div className="w-4 border-t-2 border-black "></div>
                      <div className="ml-2">
                        <AiFillPlusCircle />
                      </div>
                      {/* 
                      <button
                        onClick={showMoreReplies}
                        className="text-blue-500 hover:underline text-xs ml-1"
                      >
                        Show More Replies
                      </button> */}
                      {repliesToShow < comment.replies.length && (
                        <button
                          onClick={showMoreReplies}
                          className="text-blue-500 hover:underline text-xs mt-2"
                        >
                          Show {remainingReplies} More Reply
                          {remainingReplies > 1 ? "ies" : ""}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {/* )} */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
