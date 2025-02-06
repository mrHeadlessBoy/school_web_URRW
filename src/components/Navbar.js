import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">School Website</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/senior-register">Senior</Link></li>
        <li><Link to="/junior-register">Junior</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
