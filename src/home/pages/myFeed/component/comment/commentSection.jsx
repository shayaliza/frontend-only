// CommentSection.js
import React, { useState } from "react";
import CommentList from "./commentList";

const CommentSection = () => {
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
        {
          id: 3,
          text: "This is a reply to the main comment.",
          replies: [
            {
              id: 4,
              text: "This is a reply to the reply.",
              replies: [
                { id: 5, text: "This is a reply to the reply.", replies: [] },
              ],
            },
          ],
        },
      ],
    },
  ]);

  const addReply = (text, parentId = null) => {
    // Logic for adding a reply
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>
      <CommentList comments={comments} addReply={addReply} />
    </div>
  );
};

export default CommentSection;
