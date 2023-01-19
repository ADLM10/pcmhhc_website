import React from "react";
import "./Header.style.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="headingparent">
      <div className="logoContainer">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="collegeDetails">
        <h1 className="collegeName">
          PRATAP CHANDRA MEMORIAL HOMEOPATHIC HOSPITAL AND COLLEGE
        </h1>
        <span className="line"></span>
        <a
          href="https://goo.gl/maps/WRnc4bNRozV8nDyX8"
          target="blank"
          className="collegeAddress"
        >
          Mahanambrata Sarani, 14/1, Narkeldanga N Rd, Narkeldanga, Kolkata,
          West Bengal 700011
        </a>
      </div>
    </div>
  );
};

export default Header;
