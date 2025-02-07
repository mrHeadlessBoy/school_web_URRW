import React from "react";
import "./Footer.css"; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>Contact : urrw.nm@urrw.ac.th | Phone: ยังไม่ใส่เลย </p>
      <p>© {new Date().getFullYear()} โรงเรียนอุบลรัตนราชกัญญาราชวิทยาลัย นครราชสีมา rights reserved.</p>
    </footer>
  );
};

export default Footer;
