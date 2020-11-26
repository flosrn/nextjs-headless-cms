import React, { useContext } from "react";
import { ThemeContext } from "lib/themeContext";
import DarkModeToggle from "react-dark-mode-toggle";

const SwitchButton: React.FC = () => {
  const { isDarkMode, darkModeHandler } = useContext(ThemeContext);
  return (
    <div className="hidden md:flex items-center justify-center w-full max-w-xs mx-auto ml-8">
      <DarkModeToggle onChange={darkModeHandler} checked={isDarkMode} size={60} />
    </div>
  );
};

export default SwitchButton;
