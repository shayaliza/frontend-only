import React, { useState } from "react";
import Lecture from "./Lecture.jsx";
import Video from "./Video.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer.jsx";
import Quiz from "./Quiz.jsx";
import CompletePage from "./components/completePage.jsx";
import Content from "./components/content.jsx";

function LearnModule() {
  const [currentContent, setCurrentContent] = useState("main");

  const handleNextLesson = () => {
    if (currentContent === "main") {
      setCurrentContent("content");
    } else if (currentContent === "content") {
      setCurrentContent("video");
    } else if (currentContent === "video") {
      setCurrentContent("quiz");
    } else if (currentContent === "quiz") {
      setCurrentContent("complete");
    }
  };

  const handlePrevLesson = () => {
    if (currentContent === "quiz") {
      setCurrentContent("video");
    } else if (currentContent === "video") {
      setCurrentContent("content");
    } else if (currentContent === "content") {
      setCurrentContent("main");
    } else if (currentContent === "complete") {
      setCurrentContent("quiz");
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="content mt-16">
        {currentContent === "main" ? (
          <Lecture />
        ) : currentContent === "content" ? (
          <Content />
        ) : currentContent === "video" ? (
          <Video />
        ) : currentContent === "quiz" ? (
          <Quiz />
        ) : currentContent === "complete" ? (
          <CompletePage
            onNextLesson={handleNextLesson}
            onPrevLesson={handlePrevLesson}
          />
        ) : null}
      </div>
      <Footer
        onNextLesson={handleNextLesson}
        onPrevLesson={handlePrevLesson}
        currentContent={currentContent}
      />
    </div>
  );
}

export default LearnModule;
