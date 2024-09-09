import React, { useEffect, useRef, useState } from "react";

const StickyDiv = () => {
  const [isSticky, setIsSticky] = useState(false);
  const divRef = useRef(null);
  const secondPageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const divTop = divRef.current.getBoundingClientRect().top;
      const secondPageTop = secondPageRef.current.getBoundingClientRect().top;

      if (secondPageTop <= 0 && divTop <= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* First page */}
      <div className="h-screen bg-blue-200 flex items-center justify-center">
        <h1>First Page</h1>
      </div>

      {/* Second page */}
      <div
        ref={secondPageRef}
        className="h-screen bg-green-200 relative flex items-center justify-center"
      >
        <div
          ref={divRef}
          className={`w-24 h-24 bg-red-400 p-4 transition-all duration-300 ${
            isSticky
              ? "fixed top-0 left-1/2 transform -translate-x-1/2"
              : "relative"
          }`}
        >
          <p>This div becomes sticky.</p>
        </div>
      </div>

      {/* Third page */}
      <div className="h-screen bg-yellow-200 flex items-center justify-center">
        <h1>Third Page</h1>
      </div>
    </div>
  );
};

export default StickyDiv;
