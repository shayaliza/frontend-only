import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  memo,
  useRef,
} from "react";
import { FaHeart, FaComment, FaBookmark, FaShare } from "react-icons/fa";
import { Bookmark, MessageCircle, MoreHorizontal, SendIcon, Share2Icon, ShareIcon, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import image1 from "../assets/rsc/radu-florin-4_QFycgpC4c-unsplash.jpg";
import image2 from "../assets/rsc/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg";
import image3 from "../assets/rsc/joshua-earle-ICE__bo2Vws-unsplash.jpg";
import image4 from "../assets/rsc/arnold-francisca-nPhl2x4fk2s-unsplash.jpg";
import activityFeedIcon from "../assets/rsc/icons8-activity-feed-24.png";
import featuredIcon from "../assets/rsc/icons8-star-24.png";
import recentIcon from "../assets/rsc/icons8-clock-24.png";
import read from "../assets/rsc/read.png";
import img2 from "../assets/rsc/image2.png";
import Notification from "./Notification";
import BottomSheet from "./Effects/MoreHorizontal";
import CommentBottomSheet from "./Effects/CommentBottomSheet";
import { BiComment, BiDownArrow, BiUpArrow } from "react-icons/bi";

const tabs = [
  { id: "myfeed", icon: activityFeedIcon, text: "My Feed" },
  { id: "featured", icon: featuredIcon, text: "Featured" },
  { id: "recent", icon: recentIcon, text: "Recent" },
];

const baseImages = [image1, image2, image3, image4];

const Tag = memo(({ tag }) => (
  <span className="ml-2 px-2 py-1 border border-gray-500 text-sm">{tag}</span>
));

const ProfileImage = memo(({ src, index }) => (
  <img
    src={src}
    alt={`Profile ${index}`}
    className="inline-block w-16 h-16 object-cover rounded-full border-4 border-blue-600 shadow-md mr-2"
    loading="lazy"
  />
));

const Tab = memo(({ tab, isActive, onClick }) => (
  <div
    className={`relative flex items-center cursor-pointer space-x-2 py-2 px-6 rounded-full ${
      isActive ? "bg-blue-100 text-blue-600" : "hover:bg-blue-200"
    }`}
    onClick={onClick}
  >
    <img src={tab.icon} alt={tab.text} className="w-6 h-6" />
    <p className="text-xs md:text-sm md:font-medium">{tab.text}</p>
  </div>
));

const Article = memo(({
  profileImg,
  author,
  date,
  tags,
  title,
  activeTab,
  likes = 50,
  dislikes = 5,
  shares = 20,
  reads = 118,
  description,
  isPro = true,
}) => (
  <div className="border rounded-lg p-4 overflow-auto shadow-lg mb-3">
    <div className="flex justify-between items-center">
    <div className="flex items-center mb-4">
      <img
        src={profileImg}
        alt={`${author}'s profile`}
        className="w-12 h-12 mr-4"
      />
      <div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">{author}</span>
          {isPro && (
            <span className="px-2 text-sm border rounded-md">Pro</span>
          )}
        </div>
        <div className="text-sm">
          <span>{date}</span>
        </div>
      </div>
    </div>
    <div className="flex gap-4 mr-4">
    <button className="flex items-center gap-1">
          <Share2Icon className="w-4 h-4" />
          <span>{shares}</span>
        </button>
        <button className="flex items-center gap-1">
          <MoreHorizontal className="w-4 h-4" />
        </button>
    </div>
    </div>

    <div className="mb-4">
      <div className="flex flex-col md:flex-row justify-between gap-2 p-2">
        <div className="flex-1">
          <h3 className="text-md font-bold mb-2">{title}</h3>
          <div className="text-sm">
            <span>{description}</span>
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
        <button className="flex items-center gap-1">
          <ThumbsUpIcon className="w-4 h-4" />
          <span>{likes} </span>
        </button>
        <button className="flex items-center gap-1">
          <ThumbsDownIcon className="w-4 h-4" />
          <span>{dislikes} </span>
        </button>
        <button className="flex items-center gap-1">
          <MessageCircle className="w-4 h-4" />
          <span>0</span>
        </button>
        <button className="flex items-center gap-1">
          <Bookmark className="w-4 h-4" />
          <span>{reads} </span>
        </button>
        </div><div className="flex space-x-2">
            <p className="text-blue-500">4min</p>
            <p className="cursor-pointer border px-1">save</p>
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
));
const ArticleMobile = memo(
  ({
    profileImg,
    author,
    date,
    title,
    readTime,
    reactions,
    dislikes,
    comments,
    tags,
    activeTab,
  }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);
    const commentsData = [
      {
        author: "Jagan Army",
        profileImg: profileImg, 
        text: "Anna ostunnadu manchi rojulu vastunnayi.",
        time: "2h ago"
      },
      {
        author: "TDP Army",
        profileImg: profileImg,
        text: "Psycho povali cycle ravali.",
        time: "1h ago"
      },
      {
        author: "Jagan",
        profileImg: profileImg,
        text: "Madhusudhan rao ellakalam okela undadu.",
        time: "1h ago"
      },
      {
        author: "lokesh",
        profileImg: profileImg,
        text: "jaggu bhai punch padindha!",
        time: "1h ago"
      },
      {
        author: "pavan kalyan",
        profileImg: profileImg,
        text: "Jagan gutupettuko ninnu athapathalaniki tokkakapotey na peru pawan kalyan a kadu na party jansena a kadu",
        time: "1h ago"
      },

      {
        author: "Chandrababu",
        profileImg: profileImg,
        text: "Tammulu! Amaravati ni maro hitech city ga marusta",
        time: "1h ago"
      }
    ];
    return (
      <div className="border-t shadow-lg mb-2 overflow-hidden text-gray-800 dark:text-white">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img
                src={profileImg}
                alt="Profile"
                className="w-12 h-12 object-cover"
                loading="lazy"
              />
              <div className="ml-4">
                <h4 className="font-semibold">
                  <a href="#">{author}</a>
                </h4>
                <p className="text-sm ">{date}</p>
              </div>
            </div>
            <MoreHorizontal
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            />
          </div>

          <h3 className="font-bold mb-4">{title}</h3>

          <img
            src={img2}
            alt="Article"
            className="w-full h-48 object-cover mb-4"
            loading="lazy"
          />
          <div className="w-full flex justify-between">
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-300 dark:bg-gray-500 px-2 py-1 rounded-md text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <p>
              {readTime} <span>read</span>
            </p>
          </div>

          <div className="flex items-center justify-between px-4 text-gray-800 dark:text-white">
          <button className="flex items-center gap-2">
            <ThumbsUpIcon  /> {reactions}
          </button>
          <button className="flex items-center gap-2">
            <ThumbsDownIcon  /> {dislikes}
          </button>
          <button 
            className="flex items-center gap-1"
            onClick={() => setIsCommentsOpen(true)}
          >
            <MessageCircle /> {comments}
          </button>
            <Share2Icon className="cursor-pointer" />
            <Bookmark className="cursor-pointer" />
          </div>
        </div>
        <BottomSheet isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        <CommentBottomSheet 
        isOpen={isCommentsOpen}
        onClose={() => setIsCommentsOpen(false)}
        comments={commentsData}
        profileImg={profileImg}
      />
      </div>
    );
  }
);

function Home() {
  const [activeTab, setActiveTab] = useState("myfeed");

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = useMemo(() => {
    return baseImages.reduce(
      (acc, img) => [...acc, ...Array(10).fill(img)],
      []
    );
  }, []);

  const articleData = useMemo(() => {
    return Array(20).fill({
      profileImg: image2,
      author: "Simon Egersand 🎈",
      date: "prplcode.hashnode.dev",
      title: "Write Git Commit Messages That Your Colleagues Will Love",
      description:
        "Git commit messages are how we communicate to our future selves. They help you understand why a certain line of code was added to the code base. That's why knowing how to write a good Git commit messa…",
      readTime: "4 mins",
      reactions: 23,
      dislikes:2,
      comments: 4,
      tags: ["Javascript", "Git", "+1"],
    });
  }, []);

  const handleTabClick = useCallback((tabId) => {
    setActiveTab(tabId);
  }, []);

  return (
    <div
      className={`bg-gray-50 text-gray-800 dark:text-gray-100 dark:bg-black min-h-screen`}
    >
      <div className="flex">
        <div className="w-full ">
          <div className="flex overflow-x-auto whitespace-nowrap p-4 ds-scrollbar">
            {images.map((src, index) => (
              <ProfileImage key={index} src={src} index={index} />
            ))}
          </div>

          <div className="relative flex space-x-2 overflow-x-auto p-4">
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                tab={tab}
                isActive={activeTab === tab.id}
                y
                onClick={() => handleTabClick(tab.id)}
              />
            ))}
          </div>

          <div className="md:p-4">
            <div className="article-list">
              {articleData.map((article, index) =>
                isMobile ? (
                  <ArticleMobile
                    key={`mobile-${index}`}
                    {...article}
                    activeTab={activeTab}
                  />
                ) : (
                  <Article
                    key={`desktop-${index}`}
                    {...article}
                    activeTab={activeTab}
                  />
                )
              )}
            </div>
          </div>
        </div>
        {/* <div className="hidden lg:block w-1/3 sticky top-0 h-max">
          <Notification />
        </div> */}
      </div>
    </div>
  );
}

export default memo(Home);
