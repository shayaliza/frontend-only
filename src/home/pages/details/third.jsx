import React from "react";
import "./third.css";
import { Link } from "react-router-dom";
import firstImage from "./Assests/2125251-kg.jpg";
import secondImage from "./Assests/7510375_2.png";
import thirdImage from "./Assests/769452-kg.jpg";

function Third() {
  const Card = () => {
    return (
      <Link to={"/detailsPages/fourth"} className="other-card">
        <div className="content">
          <h1>
            {" "}
            <i className="fa-solid fa-thumbtack" style={{ color: "#533a3a" }} />
            About the techsnap Announcment Category
          </h1>
          <p>
            Here is where you’ll find the latest updates from The Codecademy
            Team. We will announce things like new product features, curriculum
            releases, and even site outages.
          </p>
          <p>5 votes</p>
        </div>
        <div className="profile-pics">
          <img src={firstImage} alt="" />
          <img src={secondImage} alt="" />
          <img src={thirdImage} alt="" />
        </div>
        <div className="r-v-a-count">
          <p>1</p>
          <p className="views">1.8k</p>
          <p>Apr '21</p>
        </div>
      </Link>
    );
  };
  return (
    <div>
      <div className="topic-page">
        <div className="heading-top">
          <div className="heading-para">
            <h3>General</h3>
            <p>Announcements, resources, and interesting discussions</p>
          </div>
          <div className="follow-newTopic">
            <div className="follow-button">
              <strong>
                <p>
                  {" "}
                  <i className="fa-regular fa-bell" />
                  Follow <i className="fa-solid fa-caret-down" />
                </p>
              </strong>
            </div>
            <div className="new-topic-button">
              <strong>
                {" "}
                <p>
                  <i className="fa-solid fa-plus" /> New Topic{" "}
                </p>{" "}
              </strong>
            </div>
          </div>
        </div>
        {/* main section */}
        <div className="search-container">
          <i className="fa-solid fa-magnifying-glass" />
          <input
            type="text"
            id="searchInput"
            className="search-input"
            placeholder="Search Discussions..."
          />
        </div>
        <div className="cards-forum">
          <div className="buttons-disc">
            <a id="showAll">All</a>
            <a id="showPinned">Pinned </a>
            <a id="showBookmarked">Bookmarks</a>
          </div>
          <div className="grey-devider" />
          <div className="topic-replies-views">
            <a href>Topic</a>
            <div className="replies-views">
              <a href>Replies</a>
              <a href className="views">
                views
              </a>
              <a href>Activity</a>
            </div>
          </div>
          <div className="no-search">
            <img src="./assests/no-serach.svg" alt="" />
            <strong>Opps! No discussions found </strong>
          </div>
          <div className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Third;
