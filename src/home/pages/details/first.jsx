import React from "react";
import "./first.css";
import BannerImage from "./Assests/default-banner-img.png";
import secondImage from "./Assests/46956_2.jfif";
import thirdImage from "./Assests/ca397229965210ffedb183a0c9b2760e8a7cafbe.svg";
import { Link } from "react-router-dom";

const ForumPage = () => {
  const LeftCard = () => {
    return (
      <Link to={"/detailsPages/second"} className="cat-main-card">
        <div className="card-head">
          <strong>
            <h1>About the community</h1>
          </strong>
          <strong>
            <p>4/week</p>
          </strong>
        </div>
        <div className="cat-main-card-content">
          <img src={thirdImage} alt="Community" />
          <p>
            Community information and announcements including Welcome posts for
            introductions, a Getting Started guide, and The Treehouse for casual
            off-topic discussion.
          </p>
        </div>
      </Link>
    );
  };
  const RightCard = () => {
    return (
      <div className="latest-card">
        <div className="img-content">
          <img src={secondImage} alt="Latest Topic" />
          <div className="latest-content">
            <strong>
              <p>Replication Cluster Primary Race Condition</p>
            </strong>
            <div className="hashtags">
              <span className="hashtag">#tech</span>
              <span className="hashtag">#snap</span>
            </div>
          </div>
        </div>
        <div className="time">
          <strong>26 min</strong>
        </div>
      </div>
    );
  };
  return (
    <div className="main-forum">
      <div className="header-frm">
        <div className="left-side">
          <p className="para-above">Welcome To</p>
          <h1>Techsnap</h1>
          <p className="para-below">Developer Community</p>
          <div className="mt-6">
            <button className="btn-btn">Community Guides</button>
            <button className="btn-btn">Dark Mode</button>
          </div>
        </div>
        <div className="right-side">
          <img src={BannerImage} alt="Banner" />
        </div>
      </div>
      <div className="community-section">
        <div className="category-topics">
          <div className="heading">
            <p>Category</p>
            <p>Topics</p>
          </div>
          <div className="divider"></div>
          <div className="main-cards">
            <LeftCard />
            <div className="fade-divider"></div>

            <LeftCard />

            <div className="fade-divider"></div>

            <LeftCard />

            <div className="fade-divider"></div>
            <LeftCard />

            <div className="fade-divider"></div>
          </div>
        </div>
        <div className="latest">
          <div className="latest-topics">
            <div className="heading">
              <p>Latest</p>
            </div>
            <div className="divider"></div>
            <RightCard />
            <div className="fade-divider"></div>
            <RightCard />
            <div className="fade-divider"></div>
            <RightCard />
            <div className="fade-divider"></div>
            <RightCard />
            <div className="fade-divider"></div>
            <RightCard />
            <div className="fade-divider"></div>
            <RightCard />
            <div className="fade-divider"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumPage;
