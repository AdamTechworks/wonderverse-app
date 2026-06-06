import { useState } from "react";
import "./ThemeToggle.css";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  function handleToggle() {
    setIsDark(!isDark);
    document.body.classList.toggle("light-theme");
  }

  return (
    <button className="theme-toggle" onClick={handleToggle}>
      {isDark ? "☾" : "☀"}
    </button>
  );
}

export default ThemeToggle;