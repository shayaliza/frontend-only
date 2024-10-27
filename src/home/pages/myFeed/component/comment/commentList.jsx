// CommentList.js
import React from "react";
import Comment from "./comment";

const CommentList = ({ comments, addReply }) => (
  <div className="space-y-4">
    {comments.map((comment) => (
      <Comment key={comment.id} comment={comment} addReply={addReply} />
    ))}
  </div>
);

export default CommentList;
