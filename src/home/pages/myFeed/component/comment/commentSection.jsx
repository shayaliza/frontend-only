// CommentSection.js
import React, { useState } from "react";
import CommentList from "./commentList";

const CommentSection = () => {
  const [replyText, setReplyText] = useState("");
  const [commentsToShow, setCommentsToShow] = useState(2);

  const [comments, setComments] = useState([
    {
      id: 1,
      text: "This is a comment of This Comment Section, Try Adding more from above",
      username: "Current User",
      avatar:
        "https://imgs.search.brave.com/tnB2-jbfu1vbrOSPZ61dovkB4at9PsdBBKfSDnZ7iFU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDYxMTMz/MjUuanBn",
      replies: [],
    },
  ]);

  const addReply = (text, parentId = null) => {
    if (!text.trim()) return;

    const newReply = {
      id: new Date().getTime(),
      text,
      username: "Gojo Satura",
      avatar:
        "https://imgs.search.brave.com/6eVSEoKoaQF0S4Ccn3APkCK8UMlHOR6rrQX483qxons/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mLzUy/ZmQzOGIyLWQ0OWYt/NGQ4Mi05Y2M1LTk5/MDExNWUwZDIyMi9k/aGNkNTdrLTNkODVi/MGUyLWZjNTctNGMw/NC05NzZlLTQ0MzMw/MWUyZjU4NS5wbmc_/dG9rZW49ZXlKMGVY/QWlPaUpLVjFRaUxD/SmhiR2NpT2lKSVV6/STFOaUo5LmV5Snpk/V0lpT2lKMWNtNDZZ/WEJ3T2pkbE1HUXhP/RGc1T0RJeU5qUXpO/ek5oTldZd1pEUXhO/V1ZoTUdReU5tVXdJ/aXdpYVhOeklqb2lk/WEp1T21Gd2NEbzNa/VEJrTVRnNE9UZ3lN/alkwTXpjellUVm1N/R1EwTVRWbFlUQmtN/alpsTUNJc0ltOWlh/aUk2VzF0N0luQmhk/R2dpT2lKY0wyWmNM/elV5Wm1Rek9HSXlM/V1EwT1dZdE5HUTRN/aTA1WTJNMUxUazVN/REV4TldVd1pESXlN/bHd2WkdoalpEVTNh/eTB6WkRnMVlqQmxN/aTFtWXpVM0xUUmpN/RFF0T1RjMlpTMDBO/RE16TURGbE1tWTFP/RFV1Y0c1bkluMWRY/U3dpWVhWa0lqcGJJ/blZ5YmpwelpYSjJh/V05sT21acGJHVXVa/RzkzYm14dllXUWlY/WDAuS255a2NSeVdN/V0J5NTFmMTdxdEF0/UldjY21ic005VFMt/NnI2ZFB2T3Zfbw",
      replies: [],
    };

    // Recursive function to find the correct comment to add a reply to
    const addReplyToComment = (comments, parentId) =>
      comments.map((comment) => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [newReply, ...(comment.replies || [])],
            // replies: [...(comment.replies || []), newReply],
          };
        }
        if (comment.replies && comment.replies.length > 0) {
          return {
            ...comment,
            replies: addReplyToComment(comment.replies, parentId),
          };
        }
        return comment;
      });

    setComments((prevComments) => {
      return parentId
        ? addReplyToComment(prevComments, parentId)
        : [...prevComments, newReply];
    });
  };

  const loadMoreComments = () => {
    setCommentsToShow((prev) => prev + 2); // Load 2 more comments each time
  };
  const hasReplies = (comments) =>
    comments.some((comment) => comment.replies && comment.replies.length > 0);

  return (
    <div className="mx-auto p-4 bg-white dark:bg-gray-800 ">
      <div className="relative mt-2 flex items-center gap-4 mb-4">
        <img
          src={
            "https://imgs.search.brave.com/6eVSEoKoaQF0S4Ccn3APkCK8UMlHOR6rrQX483qxons/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mLzUy/ZmQzOGIyLWQ0OWYt/NGQ4Mi05Y2M1LTk5/MDExNWUwZDIyMi9k/aGNkNTdrLTNkODVi/MGUyLWZjNTctNGMw/NC05NzZlLTQ0MzMw/MWUyZjU4NS5wbmc_/dG9rZW49ZXlKMGVY/QWlPaUpLVjFRaUxD/SmhiR2NpT2lKSVV6/STFOaUo5LmV5Snpk/V0lpT2lKMWNtNDZZ/WEJ3T2pkbE1HUXhP/RGc1T0RJeU5qUXpO/ek5oTldZd1pEUXhO/V1ZoTUdReU5tVXdJ/aXdpYVhOeklqb2lk/WEp1T21Gd2NEbzNa/VEJrTVRnNE9UZ3lN/alkwTXpjellUVm1N/R1EwTVRWbFlUQmtN/alpsTUNJc0ltOWlh/aUk2VzF0N0luQmhk/R2dpT2lKY0wyWmNM/elV5Wm1Rek9HSXlM/V1EwT1dZdE5HUTRN/aTA1WTJNMUxUazVN/REV4TldVd1pESXlN/bHd2WkdoalpEVTNh/eTB6WkRnMVlqQmxN/aTFtWXpVM0xUUmpN/RFF0T1RjMlpTMDBO/RE16TURGbE1tWTFP/RFV1Y0c1bkluMWRY/U3dpWVhWa0lqcGJJ/blZ5YmpwelpYSjJh/V05sT21acGJHVXVa/RzkzYm14dllXUWlY/WDAuS255a2NSeVdN/V0J5NTFmMTdxdEF0/UldjY21ic005VFMt/NnI2ZFB2T3Zfbw"
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
        <button
          onClick={() => addReply(replyText)}
          className="absolute bottom-2 right-2 text-xs text-white bg-blue-500 px-2 py-1 rounded"
        >
          Submit
        </button>
      </div>
      <CommentList
        comments={comments.slice(0, commentsToShow)}
        addReply={addReply}
        isThereIndentComments={hasReplies(comments)}
      />

      {commentsToShow < comments.length && (
        <button
          onClick={loadMoreComments}
          className="mt-4 text-blue-500 hover:underline"
        >
          Load More Comments
        </button>
      )}
    </div>
  );
};

export default CommentSection;
