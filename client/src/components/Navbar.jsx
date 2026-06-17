import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">

    <div className="nav-controls">

      <button
        className="menu-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      <ThemeToggle />

    </div>

      {isOpen && (
        <nav className="dropdown-nav">
          <NavLink to="/" end onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          
          <NavLink to="/gallery" onClick={() => setIsOpen(false)}>
            Gallery
          </NavLink>

          <NavLink to="/Inspiration" onClick={() => setIsOpen(false)}>
            Inspiration
          </NavLink>

          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default Navbar;