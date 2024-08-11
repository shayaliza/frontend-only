import React from "react";
import { FiEdit, FiSun, FiBell, FiUser, FiMoon } from "react-icons/fi";
import useTheme from "../../../hooks/useTheme";

const Navbar = ({ toggleSidebar }) => {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="bg-slate-400 p-4 flex justify-between items-center dark:bg-gray-900">
      <div className="flex justify-between w-full gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="border w-full border-gray-300 rounded-md p-2 dark:bg-gray-800 dark:text-white"
        />
        <div className="flex flex-row gap-4 items-center">
          <div className="flex items-center gap-1">
            <FiEdit size={20} className="dark:text-white" />
          </div>
          <div className="flex items-center gap-1">
            {theme === "dark" ? (
              <FiSun
                size={20}
                onClick={toggleTheme}
                className="cursor-pointer text-white"
              />
            ) : (
              <FiMoon
                size={20}
                onClick={toggleTheme}
                className="cursor-pointer"
              />
            )}
          </div>
          <div className="flex items-center gap-1">
            <FiBell size={20} className="dark:text-white" />
          </div>
          <div className="flex items-center gap-1">
            <FiUser size={20} className="dark:text-white" />
          </div>
        </div>
      </div>
      <div className="flex items-center lg:hidden">
        <button className="text-black dark:text-white" onClick={toggleSidebar}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
