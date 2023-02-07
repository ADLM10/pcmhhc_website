import React from "react";
import "./Navbar.style.css";
import { navLinks } from "./index.js";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navParent">
      <ul className="navList">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className="listItem">
            <Link className="links" to={`/${nav.id}`}>
              {nav.title}
            </Link>
            {index !== navLinks.length - 1 && <span className="dot"></span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
