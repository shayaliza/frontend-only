import React from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-slate-400 text-black p-4 transition-transform transform  ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 lg:static lg:w-64 w-2/3 dark:bg-gray-900 dark:text-white`}
    >
      <div className="flex justify-between items-center lg:hidden">
        <h2 className="text-xl font-bold">Menu</h2>
        <button onClick={toggleSidebar} className="text-black dark:text-white">
          ✖
        </button>
      </div>
      <div className="text-2xl font-bold">DataSnap</div>
      <ul className="mt-4">
        <li className="py-2">
          <a href="#" className="dark:hover:text-gray-300">
            My Feed
          </a>
        </li>
        <li className="py-2">
          <a href="#" className="dark:hover:text-gray-300">
            Explore
          </a>
        </li>
        <li className="py-2">
          <a href="#" className="dark:hover:text-gray-300">
            Drafts
          </a>
        </li>
        <li className="py-2">
          <a href="#" className="dark:hover:text-gray-300">
            Bookmarks
          </a>
        </li>
        <li className="py-2">
          <a href="#" className="dark:hover:text-gray-300">
            More
          </a>
        </li>
      </ul>
      <div className="mt-8">
        <h3 className="text-lg font-bold">Trending Tags</h3>
        <ul className="mt-4 space-y-2">
          <li>
            <a
              href="#"
              className="block bg-darkblue-700 p-2 rounded dark:bg-gray-800 dark:text-white"
            >
              Javascript
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block bg-darkblue-700 p-2 rounded dark:bg-gray-800 dark:text-white"
            >
              React
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block bg-darkblue-700 p-2 rounded dark:bg-gray-800 dark:text-white"
            >
              CSS
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block bg-darkblue-700 p-2 rounded dark:bg-gray-800 dark:text-white"
            >
              Python
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block bg-darkblue-700 p-2 rounded dark:bg-gray-800 dark:text-white"
            >
              Vue
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
