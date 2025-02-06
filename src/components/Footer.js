import React from "react";
import "./Footer.css"; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>Contact us: school@example.com | Phone: (123) 456-7890</p>
      <p>© {new Date().getFullYear()} School Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
