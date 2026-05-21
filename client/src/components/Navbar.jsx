import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        WonderVerse
      </NavLink>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/bio">Bio</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;