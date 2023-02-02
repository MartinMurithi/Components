import React from "react";
import "./Header.css";

function Header() {
  return (
    <div >
      <nav className="nav_container">
        <h1 className="logo">LOGO</h1>
        <ul className="nav_links">
          <li className="link">Welcome</li>
          <li className="link">Our Team</li>
          <li className="link">Gallery</li>
          <li className="link">Career</li>
          <li className="link">Log in</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
