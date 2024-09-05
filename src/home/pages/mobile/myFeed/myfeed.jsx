import React, { useState } from "react";

import StartPost from "./component/startpost";
import FirstPost from "./component/firstpost";
import NewPost from "./component/newPost";

function MyFeed() {
  const [showNewPost, setShowNewPost] = useState(false);

  const handleCloseNewPost = () => {
    setShowNewPost(false);
  };

  const handleShowNewPost = () => {
    setShowNewPost(true);
  };

  return (
    <div className="final md:flex-row flex flex-col">
      {showNewPost ? (
        <NewPost />
      ) : (
        <>
          <div className="min-[900px]:w-[70%]  w-full mx-auto">
            <StartPost
              handleShowNewPost={handleShowNewPost}
              handleCloseNewPost={handleCloseNewPost}
              showNewPost={showNewPost}
            />
            <FirstPost />
            <FirstPost />
            <FirstPost />
          </div>

          <div class="rounded-lg p-4 md:w-1/3 w-full ">
            <div class="bg-white p-4 rounded border mb-1.5 border-black md:rounded-lg">
              <h2 class="text-xl font-bold mb-2">Linkdin News</h2>
              <div class="mb-4">
                <p class="font-semibold">Biden to meet refugees in Poland</p>
                <p class="text-gray-400 text-sm">2h ago</p>
              </div>
              <div class="mb-4">
                <p class="font-semibold">Biden to meet refugees in Poland</p>
                <p class="text-gray-400 text-sm">2h ago</p>
              </div>
              <div class="mb-4">
                <p class="font-semibold">Biden to meet refugees in Poland</p>
                <p class="text-gray-400 text-sm">2h ago</p>
              </div>
              <div class="mb-4">
                <p class="font-semibold">Biden to meet refugees in Poland</p>
                <p class="text-gray-400 text-sm">2h ago</p>
              </div>
              <div class="mb-4">
                <p class="font-semibold">Biden to meet refugees in Poland</p>
                <p class="text-gray-400 text-sm">2h ago</p>
              </div>
            </div>
            <div class="text-white w-full rounded items-center">
              <img
                src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAACeUyGWuWBhQQLyxe1gEMEaZgw.png"
                alt="ads"
                class="w-full h-[280px] mb-1"
              />
              <img
                src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAACeUyGWuWBhQQLyxe1gEMEaZgw.png"
                alt="ads"
                class="w-full h-[280px] mb-1"
              />
              <img
                src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAACeUyGWuWBhQQLyxe1gEMEaZgw.png"
                alt="ads"
                class="w-full h-[280px] mb-1"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MyFeed;
