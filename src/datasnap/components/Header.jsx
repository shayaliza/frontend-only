import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import menu from "../assets/rsc/menu.png";
import datasnaplogo from "../assets/rsc/datasnap-logo.png";
import writeimg from "../assets/rsc/write.png";
import iconsun from "../assets/rsc/icons8-sun-48.png";
import profileimg from "../assets/rsc/arnold-francisca-nPhl2x4fk2s-unsplash.jpg";
import notification from "../assets/rsc/notification-bell.png";

function Header({toggleSidebar}) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [activeTab, setActiveTab] = useState("top");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSearchOpen = () => {
    setSearchOpen(true);
  };

  const closePopup = () => {
    setSearchOpen(false);
    setSearchInput("");
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "top":
        return (
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Top Results</h3>
            <ul className="space-y-2">
              <li>Top result 1 for "{searchInput}"</li>
              <li>Top result 2 for "{searchInput}"</li>
              <li>Top result 3 for "{searchInput}"</li>
            </ul>
          </div>
        );
      case "latest":
        return (
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Latest Results</h3>
            <ul className="space-y-2">
              <li>Latest result 1 for "{searchInput}"</li>
              <li>Latest result 2 for "{searchInput}"</li>
              <li>Latest result 3 for "{searchInput}"</li>
            </ul>
          </div>
        );
      case "tags":
        return (
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Related Tags</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{searchInput}</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Tag 2</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Tag 3</span>
            </div>
          </div>
        );
      case "people":
        return (
          <div className="mt-4">
            <h3 className="font-semibold mb-2">People</h3>
            <ul className="space-y-2">
              <li>Person 1 related to "{searchInput}"</li>
              <li>Person 2 related to "{searchInput}"</li>
              <li>Person 3 related to "{searchInput}"</li>
            </ul>
          </div>
        );
      case "blogs":
        return (
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Blogs</h3>
            <ul className="space-y-2">
              <li>Blog post 1 about "{searchInput}"</li>
              <li>Blog post 2 about "{searchInput}"</li>
              <li>Blog post 3 about "{searchInput}"</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex justify-between items-center border-b py-4 px-4 lg:px-8 bg-gray-800 text-white">
        <div className="flex items-center space-x-4">
          <div className="relative" onClick={toggleSidebar}>
        <img src={menu} alt="Menu" className="w-6 h-6 lg:hidden" />
        </div>
          <img src={datasnaplogo} alt="datasnap logo" className="w-10" />
          <p className="text-xl font-semibold hidden sm:block">datasnap</p>
        </div>
        <div className="flex items-center space-x-4">
          <div
            className="relative flex items-center bg-black rounded-full px-4 py-4 cursor-pointer"
            onClick={handleSearchOpen}
          >
            <FaSearch className="text-gray-400" />
          </div>

          <Link to="/ds/create" aria-label="Create Blog Post">
            <img src={writeimg} alt="Create blog post" className="w-6 h-6" />
          </Link>
          <img
            src={iconsun}
            alt="Toggle theme"
            id="toggle"
            className="w-6 h-6 hidden lg:inline-block"
          />
          <img src={notification} alt="Notifications" className="w-6 h-6 hidden lg:inline-block" />
          <div className="relative">
            <img
              src={profileimg}
              alt="Profile"
              className="w-8 h-8 rounded-full cursor-pointer"
              onClick={toggleDropdown}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 lg:hidden">
                <Link
                  to="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  <img
                    src={notification}
                    alt="Notifications"
                    className="inline w-4 h-4 mr-2"
                  />
                  Notifications
                </Link>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => {
                    document.body.classList.toggle("dark");
                  }}
                >
                  <img
                    src={iconsun}
                    alt="Dark mode"
                    className="inline w-4 h-4 mr-2"
                  />
                  Dark Mode
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl mx-auto bg-white border border-slate-200 rounded-lg shadow-lg p-6" style={{ top: "-20%" }}>
            <section className="relative flex w-full">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search..."
                value={searchInput}
                onChange={handleSearchInputChange}
                className="w-full border border-gray-300 p-2 rounded-full pl-6 pr-12 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Search"
              />
              <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </section>
            <button
              className="absolute top-0 right-2 text-2xl text-gray-500 hover:text-gray-800"
              onClick={closePopup}
              aria-label="Close"
            >
              &times;
            </button>
            {!searchInput && (
              <div className="flex justify-center items-center mt-4">
                <span className="text-center"> Search for people, tags, top, latest</span>
              </div>
            )}
            {searchInput && (
              <>
                <div className="mt-4 border-b">
                  <nav className="flex space-x-4 overflow-auto">
                    {["top", "latest", "tags", "people", "blogs"].map((tab) => (
                      <button
                        key={tab}
                        className={`py-2 px-1 ${
                          activeTab === tab
                            ? "border-b-2 border-blue-500 text-blue-500"
                            : "text-gray-500"
                        }`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </nav>
                </div>
                {renderTabContent()}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
