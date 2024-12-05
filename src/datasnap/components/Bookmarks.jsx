import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBookmark,
  FaThumbsUp,
  FaThumbsDown,
} from "react-icons/fa";
import {
  MessageCircle,
  MoreHorizontal,
  SendIcon,
  Share2Icon
} from "lucide-react";
import { BiDislike, BiBookmark, BiLike } from "react-icons/bi";
import profileImg from '../assets/rsc/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg';
import img2 from '../assets/rsc/image2.png';
import SendDesktop from './Effects/SendDesktop';
import DesktopMore from './Effects/DesktopMore';
import CommentsDesktop from './Effects/CommentsDesktop';

const Bookmarks = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);
    const navigate = useNavigate();
    const toggleBookmark = () => {
      setIsBookmarked((prev) => {
        const newValue = !prev;
        return newValue;
      });
    };

    const toggleLiked = () => {
      setIsLiked((prev) => {
        const newValue = !prev;
        return newValue;
      });
      setIsDisliked(false);
    };

    const toggleDisliked = () => {
      setIsDisliked((prev) => {
        const newValue = !prev;
        return newValue;
      });
      setIsLiked(false);
    };

    const commentsData = [
      {
        author: "Jagan Army",
        profileImg: profileImg,
        text: "Anna ostunnadu manchi rojulu vastunnayi.",
        time: "2h ago",
      },
      {
        author: "TDP Army",
        profileImg: profileImg,
        text: "Psycho povali cycle ravali.",
        time: "1h ago",
      },
      {
        author: "Jagan",
        profileImg: profileImg,
        text: "Madhusudhan rao ellakalam okela undadu.",
        time: "1h ago",
      },
      {
        author: "lokesh",
        profileImg: profileImg,
        text: "jaggu bhai punch padindha!",
        time: "1h ago",
      },
      {
        author: "pavan kalyan",
        profileImg: profileImg,
        text: "Jagan gutupettuko ninnu athapathalaniki tokkakapotey na peru pawan kalyan a kadu na party jansena a kadu",
        time: "1h ago",
      },
      {
        author: "sharmila",
        profileImg: profileImg,
        text: "Ippudu deenini Andhra Pradesh ani enduku antaro telusa idhi Andhra Pradesh kabatti",
        time: "1h ago",
      },
      {
        author: "Chandrababu",
        profileImg: profileImg,
        text: "Tammulu! Amaravati ni maro hitech city ga marusta",
        time: "1h ago",
      },
    ];

    const handleShare = async () => {
      const data = { title : "hi", text: "hi", url: "hi" };

      try {
        await navigator.share(data);
      } catch (e) {
        console.log("Share error:", e);
      }
    };
  return (
    <div className="p-4 sm:p-8">
      <div className="mb-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Bookmarks</h2>
          <p className="text-lg">All articles you have bookmarked on Hashnode</p>
        </div>
        <div className="border rounded-lg p-4 overflow-auto shadow-lg mb-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center mb-4">
            <img
              src={profileImg}
              alt={`profile`}
              className="w-12 h-12 mr-4"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold">Simon Egersand 🎈</span>
                  <span className="px-2 text-sm border rounded-md">Pro</span>
              </div>
              <div className="text-sm">
                <span>prplcode.hashnode.dev</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="flex space-x-2">
              <p className="text-blue-500">4min</p>
              <p className="cursor-pointer border px-1">save</p>
            </div>
            <div className="flex gap-2 mx-4">
              <button className="flex items-center gap-1" onClick={handleShare}>
                <SendIcon className="w-4 h-4" />
              </button>
              <button
                className="flex items-center gap-1"
                onClick={() => setIsOptionsOpen(true)}
              >
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-col md:flex-row justify-between gap-2 p-2">
            <div className="flex-1">
              <h3 className="text-md font-bold mb-2">Write Git Commit Messages That Your Colleagues Will Love</h3>
              <div className="text-sm">
                <span>"Git commit messages are how we communicate to our future selves. They help you understand why a certain line of code was added to the code base. That's why knowing how to write a good Git commit messa…",                </span>
              </div>
              <div className="flex gap-4 mt-2">
                <span>#javascript</span>
                <span>#web development</span>
                <span>#git</span>
              </div>
            </div>
            <div className="w-full md:w-1/3 mb-2">
              <img
                src={img2}
                alt="Article preview"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1" onClick={toggleLiked}>
            {isLiked ? (
                <FaThumbsUp className="w-4 h-4 " />
              ) : (
                <BiLike className="w-4 h-4" />
              )}
              <span>53 </span>
            </button>
            <button
              className="flex items-center gap-1"
              onClick={toggleDisliked}
            >
              {isDisliked ? (
                <FaThumbsDown className="w-4 h-4 mt-1" />
              ) : (
                <BiDislike className="w-4 h-4 mt-1" />
              )}
              <span>2</span>
            </button>
            <button
              className="flex items-center gap-1"
              onClick={() =>
                navigate(`/datasnap/${"bookmark1".replace(/\s+/g, '_')}`, {
                  state: {
                    ProfileImage: profileImg,
                    Title: "Write Git Commit Messages That Your Colleagues Will Love",
                    Description: "Git commit messages are how we communicate to our future selves. They help you understand why a certain line of code was added to the code base. That's why knowing how to write a good Git commit message               ",
                    BlogImg: img2,
                    Date: 'prplcode.hashnode.dev',
                    Author: "Simon Egersand 🎈",
                  },
                })
              }
            >
              <MessageCircle className="w-4 h-4" />
              <span>0</span>
            </button>
            <button
              className="flex items-center gap-1"
              onClick={toggleBookmark}
            >
                <FaBookmark className="w-4 h-4 " />
              <span>12</span>
            </button>
            <button
              className="flex items-center gap-1"
              onClick={() => setIsShareOpen(true)}
            >
              <Share2Icon className="w-4 h-4" />
              <span>20</span>
            </button>
            <SendDesktop
              isOpen={isShareOpen}
              onClose={() => setIsShareOpen(false)}
            />
            <DesktopMore
              isOpen={isOptionsOpen}
              onClose={() => setIsOptionsOpen(false)}
            />
            <CommentsDesktop
              isOpen={isCommentsOpen}
              onClose={() => setIsCommentsOpen(false)}
              comments={commentsData}
              profileImg={profileImg}
            />
          </div>
        </div>

        {/* <div className="flex items-center gap-4 px-4">
        <button className="flex items-center gap-2">
          <ThumbsUpIcon className="w-4 h-4" />
        </button>
        <button className="flex items-center gap-2">
          <ThumbsDownIcon className="w-4 h-4" />
        </button>
        <button className="flex items-center gap-1">
          <MessageCircle className="w-4 h-4" />
        </button>
        <Share2Icon className="cursor-pointer w-4 h-4" />
        <Bookmark className="cursor-pointer w-4 h-4" />
      </div> */}
      </div>
      </div>
    </div>
  );
};

export default Bookmarks;
