import React, { useState } from "react";
import { FaReply, FaThumbsUp, FaShare } from "react-icons/fa";
import CommentList from "./commentList";
// import "./comment.css";

const Comment = ({
  comment,
  addReply,
  depth = 0,
  isLast = false,
  hasReplies = false,
  index,
  length,
}) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [repliesToShow, setRepliesToShow] = useState(1);
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
    <div
      className="relative mt-4"
      // style={{ marginLeft: `${depth}px` }
      // }
    >
      <div
        className={`comment  comment-container ${
          isLast ? "last-comment" : ""
        } ${hasReplies ? "has-replies" : ""}`}
        // style={{ marginLeft: `${depth * 3}px` }}
      >
        <div className="w-full grid grid-row relative ">
          <div className="grid grid-cols-12 items-stretch z-20 ">
            {/* First part with vertical line */}
            <div className="flex justify-center col-span-1 h-full ">
              <img
                src={comment.avatar || "https://..."}
                alt="Avatar"
                className="w-8 h-8 rounded-full"
              />
            </div>

            {/* Second part with the comment text */}
            <div className="col-span-11 ">
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                {comment.username || "Anonymous"}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-12 items-stretch z-20">
            {/* First part with vertical line */}
            <div className="flex justify-center col-span-1 h-full ">
              <div className="h-full border-l-2 border-gray-500"></div>
            </div>

            {/* Second part with the comment text */}
            <div className="col-span-11 ">
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
              {comment.replies && comment.replies.length > 0 && (
                <>
                  <CommentList
                    comments={comment.replies.slice(0, repliesToShow)}
                    addReply={addReply} // Pass addReply to CommentList
                    depth={depth + 1}
                  />
                </>
              )}
            </div>
          </div>
          {/* This is last layout */}
          <div className="grid grid-cols-12 items-stretch ">
            {/* First part with vertical line */}
            <div className="flex justify-center col-span-1 h-full pl-[14px]  -ml-[19px]">
              <div
                className="box-border h-md border-0 border-tone-4 border-solid border-red-900
                border-b-[2px] cursor-pointer w-[calc(50%+0.5px)] border-l-[2px]
                rounded-bl-[11px] mb-2 -mr-[30px]  mx-0"
              ></div>
            </div>

            {/* Second part with the comment text */}
            <div className="col-span-11 ">
              <div>
                <div className="inline-flex items-center">
                  <div className="w-4 border-t-2 border-red-600 mt-[7px]"></div>
                  <div className="">icon</div>
                  {comment.replies && comment.replies.length > 0 && (
                    <>
                      {repliesToShow < comment.replies.length && (
                        <button
                          onClick={showMoreReplies}
                          className="text-blue-500 hover:underline text-xs ml-1"
                        >
                          Show More Replies
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex items-center space-x-4 ml-10 mt-0">
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
          </div> */}
          {/* </div> */}

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
          {/* {comment.replies && comment.replies.length > 0 && (
            <>
              <CommentList
                comments={comment.replies.slice(0, repliesToShow)}
                addReply={addReply} // Pass addReply to CommentList
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
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Comment;
