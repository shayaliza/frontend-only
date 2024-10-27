// CommentList.js
import React from "react";
import Comment from "./comment";

const CommentList = ({ comments, addReply, depth }) => (
  <div className="space-y-4">
    {comments.map((comment) => (
      <Comment
        key={comment.id}
        comment={comment}
        addReply={addReply}
        depth={depth}
      />
    ))}
  </div>
);

export default CommentList;
