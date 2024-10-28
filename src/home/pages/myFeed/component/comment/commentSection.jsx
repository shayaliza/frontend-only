// CommentSection.js
import React, { useState } from "react";
import CommentList from "./commentList";

const CommentSection = () => {
  const [replyText, setReplyText] = useState("");
  const [commentsToShow, setCommentsToShow] = useState(2); // Initial number of comments

  const [comments, setComments] = useState([
    {
      id: 1,
      text: "This is the main comment",
      username: "Gojo Satura",
      avatar:
        "https://imgs.search.brave.com/6eVSEoKoaQF0S4Ccn3APkCK8UMlHOR6rrQX483qxons/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mLzUy/ZmQzOGIyLWQ0OWYt/NGQ4Mi05Y2M1LTk5/MDExNWUwZDIyMi9k/aGNkNTdrLTNkODVi/MGUyLWZjNTctNGMw/NC05NzZlLTQ0MzMw/MWUyZjU4NS5wbmc_/dG9rZW49ZXlKMGVY/QWlPaUpLVjFRaUxD/SmhiR2NpT2lKSVV6/STFOaUo5LmV5Snpk/V0lpT2lKMWNtNDZZ/WEJ3T2pkbE1HUXhP/RGc1T0RJeU5qUXpO/ek5oTldZd1pEUXhO/V1ZoTUdReU5tVXdJ/aXdpYVhOeklqb2lk/WEp1T21Gd2NEbzNa/VEJrTVRnNE9UZ3lN/alkwTXpjellUVm1N/R1EwTVRWbFlUQmtN/alpsTUNJc0ltOWlh/aUk2VzF0N0luQmhk/R2dpT2lKY0wyWmNM/elV5Wm1Rek9HSXlM/V1EwT1dZdE5HUTRN/aTA1WTJNMUxUazVN/REV4TldVd1pESXlN/bHd2WkdoalpEVTNh/eTB6WkRnMVlqQmxN/aTFtWXpVM0xUUmpN/RFF0T1RjMlpTMDBO/RE16TURGbE1tWTFP/RFV1Y0c1bkluMWRY/U3dpWVhWa0lqcGJJ/blZ5YmpwelpYSjJh/V05sT21acGJHVXVa/RzkzYm14dllXUWlY/WDAuS255a2NSeVdN/V0J5NTFmMTdxdEF0/UldjY21ic005VFMt/NnI2ZFB2T3Zfbw",
      replies: [
        {
          id: 2,
          avatar:
            "https://imgs.search.brave.com/faNfydMERz5NzaWKzuOOa5WZtOZF36N2u0iv35M9iVg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg1LzQ2/LzMwLzg1NDYzMDQw/MTA5MWE5ZDkzOGRm/NDYzOGMxOWI2ZGMy/LmpwZw",

          username: "John Doe 2",
          text: "This is a nested reply responding to the initial reply, adding more context or discussion to the original comment to the original comment.",
          username: "Jane Smith",
          replies: [],
        },
        {
          id: 2,
          avatar:
            "https://imgs.search.brave.com/PDSHq-8qFZjvKZz6rasqujMmEYDQpOAj2XVwvTyO0yk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9lbGV2YXRlLXlv/dXItYnJhbmQtd2l0/aC1mcmllbmRseS1h/dmF0YXItdGhhdC1y/ZWZsZWN0cy1wcm9m/ZXNzaW9uYWxpc20t/aWRlYWwtc2FsZXMt/bWFuYWdlcnNfMTI4/MzU5NS0xODUzMS5q/cGc_c2VtdD1haXNf/aHlicmlk",
          text: "This is a reply to the main comment.",
          username: "John Doe 2",
          replies: [
            {
              id: 3,
              text: "This is a reply to the reply.",
              avatar:
                "https://imgs.search.brave.com/VFRI8eoZH_WT-ynfbliFWUnZX7qZF4u1yuatql4QIIQ/rs:fit:500:0:0:0/g:ce/aHR0cDovL20uZ2V0/dHl3YWxscGFwZXJz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wNS9Db29s/LUFuaW1lLURwLmpw/Zw",
              username: "John Doe 3",

              replies: [
                {
                  id: 3,
                  avatar:
                    "https://imgs.search.brave.com/tnB2-jbfu1vbrOSPZ61dovkB4at9PsdBBKfSDnZ7iFU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDYxMTMz/MjUuanBn",
                  text: "This is a reply to the reply.",
                  username: "John Doe 4",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      text: "This is the main comment.",
      avatar:
        "https://imgs.search.brave.com/faNfydMERz5NzaWKzuOOa5WZtOZF36N2u0iv35M9iVg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg1LzQ2/LzMwLzg1NDYzMDQw/MTA5MWE5ZDkzOGRm/NDYzOGMxOWI2ZGMy/LmpwZw",
      replies: [],
    },
    {
      id: 2,
      text: "This is the main comment.",
      username: "Gojo Satura",
      avatar:
        "https://imgs.search.brave.com/6eVSEoKoaQF0S4Ccn3APkCK8UMlHOR6rrQX483qxons/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mLzUy/ZmQzOGIyLWQ0OWYt/NGQ4Mi05Y2M1LTk5/MDExNWUwZDIyMi9k/aGNkNTdrLTNkODVi/MGUyLWZjNTctNGMw/NC05NzZlLTQ0MzMw/MWUyZjU4NS5wbmc_/dG9rZW49ZXlKMGVY/QWlPaUpLVjFRaUxD/SmhiR2NpT2lKSVV6/STFOaUo5LmV5Snpk/V0lpT2lKMWNtNDZZ/WEJ3T2pkbE1HUXhP/RGc1T0RJeU5qUXpO/ek5oTldZd1pEUXhO/V1ZoTUdReU5tVXdJ/aXdpYVhOeklqb2lk/WEp1T21Gd2NEbzNa/VEJrTVRnNE9UZ3lN/alkwTXpjellUVm1N/R1EwTVRWbFlUQmtN/alpsTUNJc0ltOWlh/aUk2VzF0N0luQmhk/R2dpT2lKY0wyWmNM/elV5Wm1Rek9HSXlM/V1EwT1dZdE5HUTRN/aTA1WTJNMUxUazVN/REV4TldVd1pESXlN/bHd2WkdoalpEVTNh/eTB6WkRnMVlqQmxN/aTFtWXpVM0xUUmpN/RFF0T1RjMlpTMDBO/RE16TURGbE1tWTFP/RFV1Y0c1bkluMWRY/U3dpWVhWa0lqcGJJ/blZ5YmpwelpYSjJh/V05sT21acGJHVXVa/RzkzYm14dllXUWlY/WDAuS255a2NSeVdN/V0J5NTFmMTdxdEF0/UldjY21ic005VFMt/NnI2ZFB2T3Zfbw",
      replies: [
        {
          id: 2,
          avatar:
            "https://imgs.search.brave.com/faNfydMERz5NzaWKzuOOa5WZtOZF36N2u0iv35M9iVg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg1LzQ2/LzMwLzg1NDYzMDQw/MTA5MWE5ZDkzOGRm/NDYzOGMxOWI2ZGMy/LmpwZw",

          username: "John Doe 2",
          text: "This is a reply to the main comment.",
          replies: [],
        },
        {
          id: 2,
          avatar:
            "https://imgs.search.brave.com/PDSHq-8qFZjvKZz6rasqujMmEYDQpOAj2XVwvTyO0yk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9lbGV2YXRlLXlv/dXItYnJhbmQtd2l0/aC1mcmllbmRseS1h/dmF0YXItdGhhdC1y/ZWZsZWN0cy1wcm9m/ZXNzaW9uYWxpc20t/aWRlYWwtc2FsZXMt/bWFuYWdlcnNfMTI4/MzU5NS0xODUzMS5q/cGc_c2VtdD1haXNf/aHlicmlk",
          text: "This is a reply to the main comment.",
          username: "John Doe 2",
          replies: [
            {
              id: 3,
              text: "This is a reply to the reply.",
              avatar:
                "https://imgs.search.brave.com/VFRI8eoZH_WT-ynfbliFWUnZX7qZF4u1yuatql4QIIQ/rs:fit:500:0:0:0/g:ce/aHR0cDovL20uZ2V0/dHl3YWxscGFwZXJz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wNS9Db29s/LUFuaW1lLURwLmpw/Zw",
              username: "John Doe 3",

              replies: [
                {
                  id: 3,
                  avatar:
                    "https://imgs.search.brave.com/tnB2-jbfu1vbrOSPZ61dovkB4at9PsdBBKfSDnZ7iFU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDYxMTMz/MjUuanBn",
                  text: "This is a reply to the reply.",
                  username: "John Doe 4",
                  replies: [],
                },
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

  const loadMoreComments = () => {
    setCommentsToShow((prev) => prev + 2); // Load 2 more comments each time
  };

  return (
    <div className="mx-auto p-4 bg-white dark:bg-gray-800 ">
      <div className="relative mt-2 flex items-center gap-4 mb-4">
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
      </div>
      {/* Comments List */}
      <CommentList comments={comments.slice(0, commentsToShow)} />

      {commentsToShow < comments.length && (
        <button
          onClick={loadMoreComments}
          className="mt-4 text-blue-500 hover:underline"
        >
          Load More Comments
        </button>
      )}
      {/* <CommentList comments={comments} addReply={addReply} depth={0} /> */}
    </div>
  );
};

export default CommentSection;
