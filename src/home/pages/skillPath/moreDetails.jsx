import React from "react";
import "./moreDetails.css";
import banner from "./photo.jpg";

// Header Component
const MoreDetailsHeader = ({ title, onClose }) => {
  return (
    <div className="more_container_head">
      <h1 className="more_container_title">{title}</h1>
      <h1 className="more_close" onClick={onClose}>
        <i className="fas fa-times"></i>
      </h1>
    </div>
  );
};

// Banner Component
const MoreDetailsBanner = ({ src, alt }) => {
  return (
    <div className="more_banner_holder">
      <img src={src} alt={alt} />
    </div>
  );
};

// Description Component
const MoreDetailsDescription = ({ text }) => {
  return (
    <div className="more_description">
      <p>{text}</p>
    </div>
  );
};

// Roadmap Component
const RoadmapCard = ({ text, marginTop, alignEnd = false }) => {
  return (
    <div
      className="more_roadmap_card"
      style={{ marginTop: marginTop, alignSelf: alignEnd ? "end" : "start" }}
    >
      <p>{text}</p>
    </div>
  );
};
const RoadmapPath = ({ type }) => {
  return (
    <div className="more_path">
      <svg
        className="svg-line scale-change"
        xmlns="http://www.w3.org/2000/svg"
        height="96"
        viewBox="0 0 128 100"
        fill="none"
        preserveAspectRatio="none"
      >
        {type === "type1" ? (
          <path
            d="M126 2.12159V2.12159C115.974 38.3765 88.8647 67.4445 53.3959 79.9706L2 98.1216"
            stroke="white"
            strokeOpacity="0.2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="8 8"
            vectorEffect="non-scaling-stroke"
          ></path>
        ) : (
          <path
            d="M10 10C20 40 50 70 90 90"
            stroke="white"
            strokeOpacity="0.2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="5 5"
            vectorEffect="non-scaling-stroke"
          ></path>
        )}
      </svg>
    </div>
  );
};

const MoreDetailsRoadmap = () => {
  return (
    <div className="more_roadmap">
      <h3 className="more_roadmap_heading">Roadmap</h3>
      <div className="more_roadmap_cont">
        <RoadmapCard text="HTML Tag" />
        <RoadmapPath type="type1" />
        <RoadmapCard text="HTML Tag" alignEnd />
        <RoadmapPath type="type2" />
        <RoadmapCard text="HTML Tag" />
        <RoadmapPath type="type1" />
        <RoadmapCard text="HTML Tag" alignEnd />
      </div>
    </div>
  );
};

// Curated Courses Component
const CuratedCourses = () => {
  return (
    <div className="more-simplified">
      <div className="more_roadmap_heading">
        <p>Techsnap Curated Courses</p>
      </div>
      <div className="more-course-cont">
        <div className="more-course-card">
          <div className="more-ccard-heading">Staff Pick</div>
          <div className="ccard-content">
            <div className="ccard-students">
              <p>12,355 students</p>
              <p>56 min</p>
            </div>
            <h4>
              Frontend full detailed course with HTML, CSS, Bootstrap, and more.
            </h4>
            <div className="ccard-bookmark">
              <p>Dale DmCok</p>
              <img src="assets/bookmark-white.png" alt="Bookmark" />
            </div>
            <div className="ccard-btn">View Course</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Related Experts Component
const RelatedExpertsCard = ({ name, title, imgSrc, believers }) => {
  return (
    <div className="more-related-card">
      <div className="more-related-heading">
        <img className="related-img" src={imgSrc} alt={name} />
        <div className="related-details">
          <div className="related-tags">
            <div className="tag-item">{title}</div>
          </div>
          <h3>{name}</h3>
          <div className="related-believers">
            <img src="assets/people.png" alt="People" />
            <p>{believers} Believers this month</p>
          </div>
        </div>
      </div>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugit.
      </h2>
      <div className="related-btns">
        <div className="connect-btn">Connect</div>
        <div className="connect-btn message-btn">Message</div>
      </div>
    </div>
  );
};

const MoreDetailsRelatedExperts = () => {
  return (
    <div className="more-related">
      <div className="more_roadmap_heading">
        <p>Related Experts</p>
      </div>
      <div className="more-related-cont">
        <RelatedExpertsCard
          name="John Robert"
          title="Instructor"
          imgSrc="https://cdn.pixabay.com/photo/2021/04/05/12/39/man-6153298_1280.jpg"
          believers="300"
        />
        <RelatedExpertsCard
          name="John Robert"
          title="Instructor"
          imgSrc="https://cdn.pixabay.com/photo/2021/04/05/12/39/man-6153298_1280.jpg"
          believers="300"
        />{" "}
        <RelatedExpertsCard
          name="John Robert"
          title="Instructor"
          imgSrc="https://cdn.pixabay.com/photo/2021/04/05/12/39/man-6153298_1280.jpg"
          believers="300"
        />{" "}
        <RelatedExpertsCard
          name="John Robert"
          title="Instructor"
          imgSrc="https://cdn.pixabay.com/photo/2021/04/05/12/39/man-6153298_1280.jpg"
          believers="300"
        />
      </div>
    </div>
  );
};

// related project
// ProjectCard.jsx
const ProjectCard = ({ imgSrc, title, description, prerequisites }) => {
  return (
    <div className="more-course-card projects-card">
      <div className="more-project-heading">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="projects-content">
        <p>Practice Project</p>
        <h2>{title}</h2>
        <h3>{description}</h3>
        <h3>
          Prerequisite(s)
          <br />
          {prerequisites}
        </h3>
        <div className="projects-btn">View Project</div>
      </div>
    </div>
  );
};

const ProjectList = () => {
  const projects = [
    {
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/5b80/826f/699e431255c73ac8adb13deb2f0afc8c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hE2z0hrCQ62ckqrH9XOO9Lj4w4WhcB88R95hk-qNbXB3gZVOudyas4jlgTVYq89X~mKkuZofxJuzj53dAhnjpzo0oW3r7eotRC162tLl-u7g9T6a8QhlL4EMTTqprnE5Mcx2Xgmm9T3BrE-yubBaX-o93jD8VUPIQD9ZNtOeRntJIkTNMfz1zZFEnquMySJroXJqk4N5IK2hj65o1gsFCwXZPCAZJ2THEMlcHDmukyC3R5gJGDsYEE6cYKDyYPR8~cBBLi3nyCR5g4Bg61lPDz7F0UAMDUnFKhh9Yp-85tNTrOvSE3uijH5k0mpioKyi7bQDI-HAosJKoz7zUVPLsQ__",
      title: "Amazon clone using React",
      description:
        "Nowadays the first thing someone does when they create a new business for trading goods is to...",
      prerequisites: "HTML, CSS, JavaScript",
    },
    {
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/5b80/826f/699e431255c73ac8adb13deb2f0afc8c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hE2z0hrCQ62ckqrH9XOO9Lj4w4WhcB88R95hk-qNbXB3gZVOudyas4jlgTVYq89X~mKkuZofxJuzj53dAhnjpzo0oW3r7eotRC162tLl-u7g9T6a8QhlL4EMTTqprnE5Mcx2Xgmm9T3BrE-yubBaX-o93jD8VUPIQD9ZNtOeRntJIkTNMfz1zZFEnquMySJroXJqk4N5IK2hj65o1gsFCwXZPCAZJ2THEMlcHDmukyC3R5gJGDsYEE6cYKDyYPR8~cBBLi3nyCR5g4Bg61lPDz7F0UAMDUnFKhh9Yp-85tNTrOvSE3uijH5k0mpioKyi7bQDI-HAosJKoz7zUVPLsQ__",
      title: "Amazon clone using React",
      description:
        "Nowadays the first thing someone does when they create a new business for trading goods is to...",
      prerequisites: "HTML, CSS, JavaScript",
    },
    {
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/5b80/826f/699e431255c73ac8adb13deb2f0afc8c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hE2z0hrCQ62ckqrH9XOO9Lj4w4WhcB88R95hk-qNbXB3gZVOudyas4jlgTVYq89X~mKkuZofxJuzj53dAhnjpzo0oW3r7eotRC162tLl-u7g9T6a8QhlL4EMTTqprnE5Mcx2Xgmm9T3BrE-yubBaX-o93jD8VUPIQD9ZNtOeRntJIkTNMfz1zZFEnquMySJroXJqk4N5IK2hj65o1gsFCwXZPCAZJ2THEMlcHDmukyC3R5gJGDsYEE6cYKDyYPR8~cBBLi3nyCR5g4Bg61lPDz7F0UAMDUnFKhh9Yp-85tNTrOvSE3uijH5k0mpioKyi7bQDI-HAosJKoz7zUVPLsQ__",
      title: "Amazon clone using React",
      description:
        "Nowadays the first thing someone does when they create a new business for trading goods is to...",
      prerequisites: "HTML, CSS, JavaScript",
    },
    {
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/5b80/826f/699e431255c73ac8adb13deb2f0afc8c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hE2z0hrCQ62ckqrH9XOO9Lj4w4WhcB88R95hk-qNbXB3gZVOudyas4jlgTVYq89X~mKkuZofxJuzj53dAhnjpzo0oW3r7eotRC162tLl-u7g9T6a8QhlL4EMTTqprnE5Mcx2Xgmm9T3BrE-yubBaX-o93jD8VUPIQD9ZNtOeRntJIkTNMfz1zZFEnquMySJroXJqk4N5IK2hj65o1gsFCwXZPCAZJ2THEMlcHDmukyC3R5gJGDsYEE6cYKDyYPR8~cBBLi3nyCR5g4Bg61lPDz7F0UAMDUnFKhh9Yp-85tNTrOvSE3uijH5k0mpioKyi7bQDI-HAosJKoz7zUVPLsQ__",
      title: "Amazon clone using React",
      description:
        "Nowadays the first thing someone does when they create a new business for trading goods is to...",
      prerequisites: "HTML, CSS, JavaScript",
    },
    {
      imgSrc:
        "https://s3-alpha-sig.figma.com/img/5b80/826f/699e431255c73ac8adb13deb2f0afc8c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hE2z0hrCQ62ckqrH9XOO9Lj4w4WhcB88R95hk-qNbXB3gZVOudyas4jlgTVYq89X~mKkuZofxJuzj53dAhnjpzo0oW3r7eotRC162tLl-u7g9T6a8QhlL4EMTTqprnE5Mcx2Xgmm9T3BrE-yubBaX-o93jD8VUPIQD9ZNtOeRntJIkTNMfz1zZFEnquMySJroXJqk4N5IK2hj65o1gsFCwXZPCAZJ2THEMlcHDmukyC3R5gJGDsYEE6cYKDyYPR8~cBBLi3nyCR5g4Bg61lPDz7F0UAMDUnFKhh9Yp-85tNTrOvSE3uijH5k0mpioKyi7bQDI-HAosJKoz7zUVPLsQ__",
      title: "Amazon clone using React",
      description:
        "Nowadays the first thing someone does when they create a new business for trading goods is to...",
      prerequisites: "HTML, CSS, JavaScript",
    },
  ];

  return (
    <div className="more-course-cont overflow-x-scroll">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          imgSrc={project.imgSrc}
          title={project.title}
          description={project.description}
          prerequisites={project.prerequisites}
        />
      ))}
    </div>
  );
};
// Ext card
// ExternalResourceCard.jsx
const ExternalResourceCard = ({ imgSrc, title, addedBy, backgroundColor }) => {
  return (
    <div className="more-external-card" style={{ backgroundColor }}>
      <div className="more-external-heading">
        <img src={imgSrc} alt={title} />
        <p>webilnk</p>
      </div>

      <h2>{title}</h2>

      <p className="external-text">
        added by <span>{addedBy}</span>
      </p>

      <div className="external-btn">visit weblink</div>
    </div>
  );
};

const ExternalResourceList = () => {
  const externalResources = [
    {
      imgSrc: "assets/link.png",
      title: "W3Schools: Learn HTML",
      addedBy: "techsnap",
      backgroundColor: "rgb(243, 255, 131)",
    },
    {
      imgSrc: "assets/link.png",
      title: "W3Schools: Learn HTML",
      addedBy: "techsnap",
      backgroundColor: "rgb(168, 255, 127)",
    },
    {
      imgSrc: "assets/link.png",
      title: "W3Schools: Learn HTML",
      addedBy: "techsnap",
      backgroundColor: "rgb(243, 255, 131)",
    },
    {
      imgSrc: "assets/link.png",
      title: "W3Schools: Learn HTML",
      addedBy: "techsnap",
      backgroundColor: "rgb(243, 255, 131)",
    },
  ];

  return (
    <div className="more-external-cont">
      {externalResources.map((resource, index) => (
        <ExternalResourceCard
          key={index}
          imgSrc={resource.imgSrc}
          title={resource.title}
          addedBy={resource.addedBy}
          backgroundColor={resource.backgroundColor}
        />
      ))}
    </div>
  );
};

// Main Component
function MoreDetails() {
  const showDetailsPopUp = () => {
    console.log("Closing details popup");
  };

  return (
    <div className="final">
      <MoreDetailsHeader title="HTML basics" onClose={showDetailsPopUp} />
      <MoreDetailsBanner src={banner} alt="HTML Basics" />
      <MoreDetailsDescription text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iure aliquid dolor laborum, suscipit laboriosam totam a! Dicta aliquam, eos vitae iusto accusantium ratione inventore praesentium repudiandae sed quaerat voluptatum." />
      <MoreDetailsRoadmap />
      <CuratedCourses />
      <MoreDetailsRelatedExperts />
      <ProjectList />
      <div className="more-external">
        <div className="more_roadmap_heading">
          <p>External Resources</p>
        </div>
        <ExternalResourceList />
      </div>
      <div class="more-resource">
        <div class="more-resource-card">
          <p>Resource center</p>
        </div>
      </div>
    </div>
  );
}

export default MoreDetails;
