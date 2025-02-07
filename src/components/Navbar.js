import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">URRW NM</h1>
      <ul className="nav-links">
        <li><Link to="/">หน้าแรก</Link></li>
        <li><Link to="/senior-register">ม.ปลาย</Link></li>
        <li><Link to="/junior-register">ม.ต้น</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
