import React from "react";
import LessonBox from "./lessonBox";
import "./style.css";

function CourseTopics() {
  return (
    <div className="course-topics">
      <div className="course-topics-container flex flex-col max-w-[1084px] m-auto py-20">
        <LessonBox
          type="lesson"
          title="Lesson 1"
          description="Advanced Arrays and Objects in Javascript: Destructuring, Spread, and Rest Operators"
          icon="ri-file-2-line"
          buttonText="Review"
          buttonIcon="./assets/reload.png"
        />
        <LessonBox
          type="practice"
          title="Practice 1"
          description="Color Change with ES6 Destructuring and Spread Operator"
          icon="ri-code-box-line"
          buttonText="Start +60 EP"
          buttonIcon="./assets/reload.png"
        />
        <LessonBox
          type="practice"
          title="Practice 2"
          description="Supersonic Speed Upgrade"
          icon="ri-code-box-line"
          isLocked={true}
        />
        {/* Add more LessonBox components as needed */}
      </div>
    </div>
  );
}

export default CourseTopics;
