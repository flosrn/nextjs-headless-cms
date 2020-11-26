import React, { useState, useEffect, createContext } from "react";

type ContextProps = {
  isDarkMode: boolean;
  darkModeHandler: () => void;
};

export const ThemeContext = createContext<ContextProps>(undefined);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(undefined);

  const replaceHtmlClass = (newTheme) => {
    const currentTheme = document.querySelector("html").classList.value;
    document.querySelector("html").classList.replace(currentTheme, newTheme);
  };

  useEffect(() => {
    const persistedThemePreference = window.localStorage.getItem("theme");
    const systemThemePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (
      persistedThemePreference === "dark" ||
      (!("theme" in localStorage) && systemThemePreference)
    ) {
      replaceHtmlClass("dark");
      return setIsDarkMode(true);
    }
    return setIsDarkMode(false);
  }, []);

  const toggleDarkMode = (theme) => {
    setIsDarkMode(!isDarkMode);
    replaceHtmlClass(theme);
    window.localStorage.setItem("theme", theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        darkModeHandler: () => toggleDarkMode(!isDarkMode ? "dark" : "light"),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
