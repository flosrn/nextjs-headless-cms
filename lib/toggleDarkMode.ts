export const toggleDarkMode = (switchValue: boolean) => {
  const theme = switchValue ? "dark" : "light";
  const currentTheme = document.querySelector("html").classList.value;
  document.querySelector("html").classList.replace(currentTheme, theme);
};

// export const loadUserSystemPrefTheme = () => {
//   // On page load or when changing themes, best to add inline in `head` to avoid FOUC
//   if (
//     localStorage?.theme === "dark" ||
//     (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
//   ) {
//     document.querySelector("html").classList.replace("light", "dark");
//     return true;
//   } else {
//     document.querySelector("html").classList.replace("dark", "light");
//     return false;
//   }
//
//   // Whenever the user explicitly chooses light mode
//   // localStorage.theme = "light";
//   //
//   // // Whenever the user explicitly chooses dark mode
//   // localStorage.theme = "dark";
//   //
//   // // Whenever the user explicitly chooses to respect the OS preference
//   // localStorage.removeItem("theme");
// };
