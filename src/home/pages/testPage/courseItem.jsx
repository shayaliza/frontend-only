import React from "react";
import "./style.css";

function CourseItem({
  lessons,
  practices,
  languages,
  title,
  description,
  buttonText,
  progress,
  imageUrl,
  level,
  courseType,
}) {
  return (
    <div className={`course-box ${courseType}`}>
      <div className="course-box-container">
        <div className="gradient-top"></div>
        <div className="left-section">
          <div className="top-left flex gap-16 mb-20">
            <div className="lessons flex gap-3 align-center">
              <div className="icon">
                <i className="ri-file-2-line"></i>
              </div>
              <p>{lessons} lessons</p>
            </div>
            <div className="practice flex gap-3 align-center">
              <div className="practice-icon">
                <i className="ri-code-box-line"></i>
              </div>
              <p>{practices} practices</p>
            </div>
          </div>
          <div className="course-language flex gap-8 mb-6">
            {languages.map((language) => (
              <div className="subtitle flex gap-1" key={language.name}>
                <img className="w-4" src={language.icon} alt={language.name} />
                <p>{language.name}</p>
              </div>
            ))}
          </div>
          <h1 className="big-heading text-4xl font-semibold mb-4">{title}</h1>
          <p className="course-content">{description}</p>
          <div className="flex gap-8">
            <button className="continue-button">{buttonText}</button>
            {progress && (
              <div className="progress-box">
                <p>Progress: {progress}%</p>
              </div>
            )}
          </div>
        </div>
        <div className="right-section flex">
          <div className="course-right-box bg-neutral-800 flex gap-4 self-end p-4 rounded-xl">
            <img
              className="course-logo w-20 h-20 flex-col self-center"
              src={imageUrl}
              alt="Course Logo"
            />
            <div>
              <p className="bg-gray-300 text-black inline-block px-4 rounded-full text-sm mb-2">
                {level}
              </p>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseItem;
