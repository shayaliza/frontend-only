import React, { useState } from "react";

import StartPost from "./component/startpost";
import FirstPost from "./component/firstpost";
import NewPost from "./component/newPost";
import bannerImage from "./../../../assets/banner.png";

function MyFeed() {
  const [showNewPost, setShowNewPost] = useState(false);

  const handleCloseNewPost = () => {
    setShowNewPost(false);
  };

  const handleShowNewPost = () => {
    setShowNewPost(true);
  };
  const images = [
    "https://media.licdn.com/dms/image/v2/D5622AQF_6uHE7vYtvQ/feedshare-shrink_800/feedshare-shrink_800/0/1726235254618?e=1729123200&v=beta&t=zMLTaSRfGn2AA4KFrB5zMqbmD6t2e33gFvFKPHKigV0",
    bannerImage,
    bannerImage,
  ];
  const images2 = [bannerImage];
  const images3 = [
    "https://media.licdn.com/dms/image/v2/D5610AQEKrNlq8HrfZA/image-shrink_800/image-shrink_800/0/1726240652774?e=1726984800&v=beta&t=7zO8CBniW2yG6WAzfj9yar-mbklFHERidEuDZUOsNiM",
  ];
  const images4 = [
    "https://media.licdn.com/dms/image/v2/D5622AQHCWbMAW2m-7Q/feedshare-shrink_800/feedshare-shrink_800/0/1726195214806?e=1729123200&v=beta&t=keHQ6ko0lRmKSK58sfEjNYyNxqO70xLYFmXJQylcPfs",
  ];
  const images5 = [
    "https://media.licdn.com/dms/image/v2/D5622AQHoQXQcqPalYQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1726132347210?e=1729123200&v=beta&t=LvgtifaAGDDu3DvBi_WcejDYSqR11rO-fx2yIVLNSB0",
    "https://media.licdn.com/dms/image/v2/D5622AQHJnI1yd_so0g/feedshare-shrink_1280/feedshare-shrink_1280/0/1726132345238?e=1729123200&v=beta&t=tq2E0vfGecKaWhOedwnF52rBQknMmMpC3tTbGjZSRxE",
    "https://media.licdn.com/dms/image/v2/D5622AQGqtu1NnNZeAw/feedshare-shrink_1280/feedshare-shrink_1280/0/1726132345060?e=1729123200&v=beta&t=KLXmqWagpHlHmUpa9hIRqyn71zn_lhYS5YzyY-NpYbI",
  ];

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
            <FirstPost images={images2} />
            <FirstPost images={images} />
            <FirstPost images={images3} />
            <FirstPost images={images4} />
            <FirstPost images={images5} />
          </div>
        </>
      )}
    </div>
  );
}

export default MyFeed;
