import { createContext } from "react";

const ThemeContext = createContext({
  theme: localStorage.getItem("theme") || "",
  themeToggler: () => {},
});

export default ThemeContext;
