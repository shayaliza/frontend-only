// import React, { useState } from "react";
// import { FaReply, FaThumbsUp, FaShare } from "react-icons/fa";
// import CommentList from "./commentList";

// const Comment = ({ comment, addReply, depth = 0 }) => {
//   const [showReplyBox, setShowReplyBox] = useState(false);
//   const [replyText, setReplyText] = useState("");

//   const handleReply = () => {
//     addReply(replyText, comment.id);
//     setReplyText("");
//     setShowReplyBox(false);
//   };

//   return (
//     <div className="relative pl-4" style={{ marginLeft: `${depth * 16}px` }}>
//       {/* Connector Line */}
//       {depth > 0 && (
//         <div className="absolute left-0 top-0 w-1 h-8 bg-gray-300 z-0"></div>
//       )}
//       {depth > 0 && (
//         <div className="absolute left-0 top-8 w-8 h-1 bg-gray-300 z-0"></div>
//       )}

//       {/* User avatar and name */}
//       <div className="flex items-center mb-2 space-x-2">
//         <img
//           src={
//             comment.avatar ||
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjrWdH1kcSOptxTJvewZ8d6TIy84-yIoOIEjC8OYljd3LZaarqejCI1njtYhROEXhOCE&usqp=CAU"
//           }
//           alt="Avatar"
//           className="w-8 h-8 rounded-full"
//         />
//         <div>
//           <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
//             {comment.username || "Anonymous"}
//           </span>
//         </div>
//       </div>

//       {/* Comment content */}
//       <p className="text-sm text-gray-700 dark:text-gray-300 ml-10">
//         {comment.text}
//       </p>

//       {/* Action Buttons */}
//       <div className="flex items-center space-x-4 ml-10 mt-1">
//         <button className="text-xs text-blue-500 hover:underline flex items-center">
//           <FaThumbsUp className="mr-1" /> Like
//         </button>
//         <button className="text-xs text-blue-500 hover:underline flex items-center">
//           <FaShare className="mr-1" /> Share
//         </button>
//         <button
//           className="text-xs text-blue-500 hover:underline flex items-center"
//           onClick={() => setShowReplyBox(!showReplyBox)}
//         >
//           <FaReply className="mr-1" /> Reply
//         </button>
//       </div>

//       {/* Reply input box */}
//       {showReplyBox && (
//         <div className="mt-2 relative ml-10">
//           <textarea
//             value={replyText}
//             onChange={(e) => setReplyText(e.target.value)}
//             className="w-full p-2 text-sm border rounded resize-none pr-12"
//             placeholder="Write your reply..."
//           ></textarea>
//           <button
//             onClick={handleReply}
//             className="absolute bottom-2 right-2 text-xs text-white bg-blue-500 px-2 py-1 rounded"
//           >
//             Submit
//           </button>
//         </div>
//       )}

//       {/* Render nested comments */}
//       {comment.replies && comment.replies.length > 0 && (
//         <CommentList
//           comments={comment.replies}
//           addReply={addReply}
//           depth={depth + 1}
//         />
//       )}
//     </div>
//   );
// };

// export default Comment;

import React, { useState } from "react";
import { FaReply, FaThumbsUp, FaShare } from "react-icons/fa";
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
    <div className="relative pl-4" style={{ marginLeft: `${depth * 16}px` }}>
      {/* Connector Line */}
      {depth > 0 && (
        <>
          {/* Vertical Line */}
          <div className="absolute -left-1 -top-10 w-1 h-[60px] bg-gray-300 z-0"></div>
          {/* Horizontal Line */}
          <div className="absolute -left-0 top-4 w-2 h-1 bg-gray-300 z-0"></div>
        </>
      )}
      {depth > 3 && (
        <>
          {/* Vertical Line */}
          <div className="absolute -left-1 -top-10 w-1 h-[60px] bg-gray-300 z-0"></div>
          {/* Horizontal Line */}
          <div className="absolute -left-0 top-4 w-2 h-1 bg-gray-300 z-0"></div>
        </>
      )}

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

      {/* Action Buttons */}
      <div className="flex items-center space-x-4 ml-10 mt-1">
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
