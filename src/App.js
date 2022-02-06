import "./App.css";
import Home from "./Page/Home";
import { Routes, Route } from "react-router-dom";
import Order from "./Page/Order";
import ThemeContext from "./Contex/ThemeContext"
import { useState } from "react";
function App() {
  const [themeState, setThemeState] = useState("light");

  function toggleTheme() {
    setThemeState((prev) => (prev === "light" ? "dark" : "light"));
  }
  return (
    <>
      <ThemeContext.Provider value={{theme: themeState, themeToggler: toggleTheme}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Order" element={<Order />} />
      </Routes>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
