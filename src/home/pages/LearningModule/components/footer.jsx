const Footer = ({ onNextLesson, onPrevLesson, currentContent }) => {
  const bgColor = {
    main: "bg-blue-300",
    video: "bg-blue-300",
    content: "bg-blue-300",
    quiz: "bg-blue-300",
    complete: "bg-blue-300",
  };

  console.log(currentContent, bgColor, "jdh");
  return (
    <footer className="py-4 z-50 bg-white px-3 sm:px-6 flex items-center justify-between border-2 shadow-xl fixed bottom-0 w-full">
      {/* Previous Lesson Button */}
      <button
        onClick={onPrevLesson}
        className={`lesson-button border border-gray-500 px-2 py-1 rounded-md text-sm flex items-center ${
          currentContent === "main" ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={currentContent === "main"}
      >
        <span>&lt;</span> <span className="hidden md:block">Prev Lesson</span>
      </button>

      {/* Middle Part */}
      <div className="flex gap-2">
        <div
          className={`px-6 py-2 rounded ${
            currentContent === "main" ? bgColor.main : "bg-gray-200"
          }`}
        ></div>
        <div
          className={`px-6 py-2 rounded ${
            currentContent === "content" ? bgColor.main : "bg-gray-200"
          }`}
        ></div>
        <div
          className={`px-6 py-2 rounded ${
            currentContent === "video" ? bgColor.video : "bg-gray-200"
          }`}
        ></div>
        <div
          className={`px-6 py-2 rounded ${
            currentContent === "quiz" ? bgColor.quiz : "bg-gray-200"
          }`}
        ></div>
        <div
          className={`px-6 py-2 rounded ${
            currentContent === "complete" ? bgColor.complete : "bg-gray-200"
          }`}
        ></div>
      </div>

      {/* Next Lesson Button */}
      <button
        onClick={onNextLesson}
        className={`lesson-button bg-blue-500 text-white px-2 py-1 rounded-md text-sm flex items-center ${
          currentContent === "complete" ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={currentContent === "complete"}
      >
        <span className="hidden md:block">Next Lesson </span>
        <span>&gt;</span>
      </button>
    </footer>
  );
};

export default Footer;
