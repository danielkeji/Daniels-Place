import { useEffect, useState } from "react";
import { useTheme } from "../utils/ThemeContext.jsx";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 transition-colors duration-200 rounded-lg hover:bg-secondaryColor/10"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <SunIcon className="w-5 h-5" />
        ) : (
          <MoonIcon className="w-5 h-5" />
        )}
      </button>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="hidden px-2 py-1 text-sm md:flex rounrded-lg bg-primaryColor"
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};

export default ThemeToggle;
