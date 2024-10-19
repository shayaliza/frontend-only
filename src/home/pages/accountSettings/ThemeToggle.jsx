import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import FontAwesome icons

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark"); // use your custom class for dark mode
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={toggleTheme}
        className="relative w-10 h-10 rounded-full focus:outline-none transition-all duration-500 ease-in-out bg-gray-200 dark-mode:bg-gray-800 hover:shadow-[0_0_20px] hover:shadow-yellow-400 dark-mode:hover:shadow-[0_0_20px] dark-mode:hover:shadow-blue-400 flex items-center justify-center"
      >
        <div className="absolute inset-0 flex items-center justify-center transition-transform transform hover:scale-110 hover:rotate-45 duration-500 ease-in-out">
          {theme === "light" ? (
            <FaSun className="text-yellow-500 text-xl" />
          ) : (
            <FaMoon className="text-blue-500 text-xl" />
          )}
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;
