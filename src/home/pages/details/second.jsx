import React from "react";
import "./second.css";
import HeaderImage from "./Assests/header-light.svg";
import ForumsLight from "./Assests/kaggle-forum_light.svg";
import { Link } from "react-router-dom";
import secondImage from "./Assests/12063947-kg.jpg";
import thirdImage from "./Assests/769452-kg.jpg";
import fourthImage from "./Assests/9185728-kg.jpg";
import fifthImage from "./Assests/2125251-kg.jpg";

function Second() {
  const ForumCard = () => {
    return (
      <Link to={"/detailsPages/third"} className="general-forum-cards">
        <div className="forum-card-content">
          <div className="icon-heading">
            <div className="icon">
              <img src={ForumsLight} alt="" />
            </div>
            <div className="frm-heading">
              <h1>General</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                error!
                <br />
                Last Post 10 minutes ago by Abhishek Nautiyal
              </p>
              <p />
            </div>
          </div>
          <div className="topics-per-month">
            <strong>6 /</strong> month
          </div>
          <div className="forum-people-icon-name">
            <div className="people-icons">
              <img src={secondImage} alt="" />
              <img src={thirdImage} alt="" />
              <img src={fourthImage} alt="" />
            </div>
            <div className="people-names">
              Recents Topics by abhishek Nautiyal,John Smith,Arman Ansari
            </div>
          </div>
        </div>
        <div className="forum-grey-divider" />
      </Link>
    );
  };

  const DiscussionCard = () => {
    return (
      <div className="general-forum-cards">
        <div className="forum-card-content">
          <div className="icon-heading">
            <div className="icon-discussion">
              <img src={fifthImage} alt="" />
            </div>
            <div className="frm-heading">
              <h1>First Place at short solution Summary</h1>
              <div className="disc-text-name">
                <a>Raj Biswas</a>
                <a>.in LLM- Detect AI genereted Text</a>
                <a>Last Comment 3m ago by Divyanshu32</a>
              </div>
            </div>
          </div>
          <div className="views">
            2.8k <i className="fa fa-eye" aria-hidden="true" />
          </div>
          <div className="forum-people-icon-name">
            <div className="voting-button">
              <button className="upvote">
                <i className="fas fa-arrow-up" />
              </button>
              <span className="counter">168</span>
              <button className="downvote">
                <i className="fas fa-arrow-down" />
              </button>
            </div>
            <div className="people-names">20 comments...</div>
          </div>
        </div>
        <div className="forum-grey-divider" id="disc-divider" />
      </div>
    );
  };
  return (
    <div>
      <div>
        <div className="main-disc-body">
          <header>
            <div className="leftside">
              <h1>Discussions</h1>
              <p>
                Discuss the Kaggle platform &amp; machine learning topics – this
                includes sharing feedback, asking questions, and more.
              </p>
            </div>
            <div className="rightside">
              <img src={HeaderImage} alt="" />
            </div>
          </header>
          <div className="forum-section">
            <div className="forum-heading">
              <h6>
                <i className="fa-regular fa-message" />
                Forums
              </h6>
            </div>
            <ForumCard />
            <ForumCard />
            <ForumCard />
            <ForumCard />
            <ForumCard />
            <ForumCard />
          </div>
          <div className="main-discussion">
            <div className="forum-heading">
              <h6>
                <i className="fa-solid fa-users" />
                Discussion from across Techsnap
              </h6>
            </div>
            <div id="page1" className="content-page">
              {/* Content for page 1 */}
              {/* Discussion cards page-1 */}
              <div className="page-cards">
                <DiscussionCard />
                <DiscussionCard />
                <DiscussionCard />
                <DiscussionCard />
                <DiscussionCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Second;
