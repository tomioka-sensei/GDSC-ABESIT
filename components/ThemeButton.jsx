import React from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="relative">
      <button
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
        className="transition-all duration-100 text-white dark:text-gray-800 m-2 p-2 text-sm rounded-lg bottom-32"
      >
       
        {currentTheme === "light" ? (
          <MoonIcon className="text-black dark:text-black h-8 w-8 transition-all hover:text-blue-400 dark:hover:text-blue-400" />
        ) : (
          <SunIcon className="text-black dark:text-black h-8 w-8 transition-all hover:text-blue-400 dark:hover:text-blue-400" />
        )}
      </button>
    </div>
  );
};

export default ThemeButton;