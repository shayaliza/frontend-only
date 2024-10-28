// CommentList.js
import React from "react";
import Comment from "./comment";

const CommentList = ({ comments, addReply, depth }) => (
  <div className="space-y-4">
    {comments.map((comment, index) => (
      <Comment
        key={comment.id}
        comment={comment}
        addReply={addReply}
        depth={depth}
        isLast={index === comments.length - 1} // Check if it's the last comment at this level
      />
    ))}
  </div>
);

export default CommentList;
