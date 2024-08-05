import React, { useState } from "react";
import Lecture from "./Lecture.jsx";
import Video from "./Video.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer.jsx";
import Quiz from "./Quiz.jsx";

function LearnModule() {
  const [currentContent, setCurrentContent] = useState("main");
  const handleNextLesson = () => {
    if (currentContent === "main") {
      setCurrentContent("video");
    } else if (currentContent === "video") {
      setCurrentContent("quiz");
    }
  };

  const handlePrevLesson = () => {
    if (currentContent === "quiz") {
      setCurrentContent("video");
    } else if (currentContent === "video") {
      setCurrentContent("main");
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {currentContent === "main" ? (
          <Lecture />
        ) : currentContent === "video" ? (
          <Video />
        ) : (
          <Quiz />
        )}
      </div>
      <Footer
        onNextLesson={handleNextLesson}
        onPrevLesson={handlePrevLesson}
        isPrevDisabled={currentContent === "main"}
        isNextDisabled={currentContent === "quiz"}
      />
    </div>
  );
}

export default LearnModule;
