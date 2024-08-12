import React, { useState } from "react";
import Lecture from "./Lecture.jsx";
import Video from "./Video.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer.jsx";
import Quiz from "./Quiz.jsx";
import CompletePage from "./components/completePage.jsx";
import Content from "./components/content.jsx";
import Sidebar from "./components/Sidebar.jsx";
import SettingBar from "./components/Settingbar.jsx";

function LearnModule() {
  const [currentContent, setCurrentContent] = useState("main");

  // Lifted state from Navbar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSettingBarOpen, setIsSettingBarOpen] = useState(false);
  const [popupPosition, setPopupPosition] = useState("left");

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

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleSettingBar = () => setIsSettingBarOpen(!isSettingBarOpen);
  const handlePositionChange = (position) => setPopupPosition(position);

  return (
    <div className="App">
      <Navbar
        toggleSidebar={toggleSidebar}
        toggleSettingBar={toggleSettingBar}
        popupPosition={popupPosition}
        setPopupPosition={handlePositionChange}
        isSidebarOpen={isSidebarOpen}
        isSettingBarOpen={isSettingBarOpen}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        popupPosition={popupPosition}
      />
      <SettingBar
        isOpen={isSettingBarOpen}
        closeSettingBar={toggleSettingBar}
        onPositionChange={handlePositionChange}
        selectedPosition={popupPosition}
      />
      <div
        className={`content mt-16 ${
          isSidebarOpen ? "blur-sm overflow-hidden" : ""
        } ${isSettingBarOpen ? "blur-sm overflow-hidden" : ""} 
        } `}
      >
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
