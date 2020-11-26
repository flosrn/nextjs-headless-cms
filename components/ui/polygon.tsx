import React, { useContext } from "react";
import { ThemeContext } from "lib/themeContext";

const Polygon: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <svg
      className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
      fill="currentColor"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polygon points="50,0 100,0 50,100 0,100" style={{ fill: isDarkMode ? "#111827" : "" }} />
    </svg>
  );
};

export default Polygon;
