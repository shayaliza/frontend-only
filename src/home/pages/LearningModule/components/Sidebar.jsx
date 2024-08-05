import { useState } from "react";
// import './Sidebar.css';
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [openChapters, setOpenChapters] = useState({});

  const toggleChapter = (chapter) => {
    setOpenChapters((prev) => ({
      ...prev,
      [chapter]: !prev[chapter],
    }));
  };

  return (
    <div
      className={`fixed top-0 left-0 w-96 max-[500px]:w-80 h-full bg-white shadow-lg sidebar-content overflow-y-auto ${
        isOpen ? "sidebar-open-left" : "hidden"
      }`}
    >
      <div className="p-4">
        <button onClick={toggleSidebar} className="text-gray-500 text-3xl">
          ×
        </button>
        <h2 className="text-xl font-semibold mb-8 mt-4">Learn SQL Basics</h2>
        <div className="border rounded-lg p-4">
          <ul>
            {/* Chapter 1 */}
            <li className="mb-2">
              <button
                className="text-left w-full text-gray-700 font-bold flex justify-between items-center py-2"
                onClick={() => toggleChapter(1)}
              >
                Ch 1: Introduction
                <span>{openChapters[1] ? "▲" : "▼"}</span>
              </button>
              {openChapters[1] && (
                <ul className="ml-4">
                  <li className="mb-2 pl-4 flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <Link className="text-gray-700">Topic 1.1</Link>
                  </li>
                  <li className="mb-2 pl-4 flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <Link className="text-gray-700">Topic 1.2</Link>
                  </li>
                </ul>
              )}
            </li>
            <hr className="border-gray-300" />
            {/* Chapter 2 */}
            <li className="mb-2">
              <button
                className="text-left w-full text-gray-700 font-bold flex justify-between items-center py-2"
                onClick={() => toggleChapter(2)}
              >
                Ch 2: Select Records
                <span>{openChapters[2] ? "▲" : "▼"}</span>
              </button>
              {openChapters[2] && (
                <ul className="ml-4">
                  <li className="mb-2 pl-4 flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <Link className="text-gray-700">SQL SELECT</Link>
                  </li>
                  <li className="mb-2 pl-4 flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <Link className="text-gray-700">SELECT WHERE</Link>
                  </li>
                  <li className="mb-2 pl-4 flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <Link className="text-gray-700">AND, OR and NOT</Link>
                  </li>
                </ul>
              )}
            </li>
            <hr className="border-gray-300" />
            {/* Chapter 3 */}
            <li className="mb-2">
              <button
                className="text-left w-full text-gray-700 font-bold flex justify-between items-center py-2"
                onClick={() => toggleChapter(3)}
              >
                Ch 3: Aggregate Functions
                <span>{openChapters[3] ? "▲" : "▼"}</span>
              </button>
              {openChapters[3] && (
                <ul className="ml-4">
                  <li className="mb-2 pl-4 flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <Link className="text-gray-700">Topic 3.1</Link>
                  </li>
                  <li className="mb-2 pl-4 flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <Link className="text-gray-700">Topic 3.2</Link>
                  </li>
                </ul>
              )}
            </li>
            <hr className="border-gray-300" />
            {/* More chapters can be added here */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
