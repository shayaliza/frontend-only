// CommentSection.js
import React, { useState } from "react";
import CommentList from "./commentList";

const CommentSection = () => {
  const [replyText, setReplyText] = useState("");

  const [comments, setComments] = useState([
    {
      id: 1,
      text: "This is the main comment.",
      replies: [
        {
          id: 2,
          text: "This is a reply to the main comment.",
          replies: [
            { id: 3, text: "This is a reply to the reply.", replies: [] },
          ],
        },
      ],
    },
  ]);

  const addReply = (text, parentId = null) => {
    // Logic for adding a reply
  };

  return (
    <div className="mx-auto p-4 bg-white dark:bg-gray-800 ">
      {/* <div className="relative mt-2 flex items-center gap-4 mb-4">
        <img
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjrWdH1kcSOptxTJvewZ8d6TIy84-yIoOIEjC8OYljd3LZaarqejCI1njtYhROEXhOCE&usqp=CAU"
          }
          alt="Avatar"
          className="w-12 h-12 rounded-full"
        />
        <textarea
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          className="w-full p-2 text-sm border rounded resize-none "
          placeholder="Write your reply..."
        ></textarea>
        <button className="absolute bottom-2 right-2 text-xs text-white bg-blue-500 px-2 py-1 rounded">
          Submit
        </button>
      </div> */}
      <CommentList comments={comments} addReply={addReply} depth={0} />
    </div>
  );
};

export default CommentSection;
