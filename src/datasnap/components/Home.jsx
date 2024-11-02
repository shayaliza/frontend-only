// Home.js
import React, { useState, useEffect } from "react";
import { useTheme } from "../../DarkMode/ThemeProvider";
import { GetAllUserBlogs } from "../../fetching/dataSnap/userSide";
import activityFeedIcon from "../assets/rsc/icons8-activity-feed-24.png";
import featuredIcon from "../assets/rsc/icons8-star-24.png";
import recentIcon from "../assets/rsc/icons8-clock-24.png";
import image1 from "../assets/rsc/radu-florin-4_QFycgpC4c-unsplash.jpg";
import Article from "./Article";

const images = [image1];

const tabs = [
  { id: "myfeed", icon: activityFeedIcon, text: "My Feed" },
  { id: "featured", icon: featuredIcon, text: "Featured" },
  { id: "recent", icon: recentIcon, text: "Recent" },
];

function Home() {
  const [activeTab, setActiveTab] = useState("myfeed");
  const { theme } = useTheme();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchArticles = async () => {
    try {
      const response = await GetAllUserBlogs();
      if (response.data) {
        setArticles(response.data.results);
      } else {
        setArticles([]);
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-gray-800 text-gray-300"
      } min-h-screen`}
    >
      <div className="custom-scrollbar flex overflow-x-auto whitespace-nowrap p-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Profile ${index}`}
            className="inline-block w-16 h-16 object-cover rounded-full border-4 border-blue-600 shadow-md mr-2"
          />
        ))}
      </div>
      <div className="relative flex space-x-2 overflow-x-auto p-4 text-white">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={tab.id}
            className={`relative flex items-center cursor-pointer space-x-2 p-2 rounded-lg ${
              activeTab === tab.id ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <img src={tab.icon} alt={tab.text} className="w-6 h-6" />
            <p className="text-xs md:text-sm md:font-medium">{tab.text}</p>
            {activeTab === tab.id && (
              <div
                className="absolute bottom-0 left-0 h-1 bg-blue-500"
                style={{ width: "100%" }}
              ></div>
            )}
          </div>
        ))}
      </div>

      <div className="p-2 md:p-4">
        <div className="article-list">
          {loading ? (
            <p>Loading articles...</p>
          ) : articles.length > 0 ? (
            articles.map((article) => (
              <Article
                key={article.id}
                id={article.id}
                banner_image={article.banner_image}
                author_username={article.author_username || "Anonymous"}
                created_at={article.created_at}
                title={article.title}
                content={article.content}
                like_count={article.like_count}
                category={article.category}
              />
            ))
          ) : (
            <p>No articles found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
