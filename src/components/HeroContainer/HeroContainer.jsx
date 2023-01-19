import React from "react";
import "./HeroContainer.style.css";

const HeroContainer = (props) => {
  return (
    <div
      className="heroContainer"
      style={{ backgroundColor: props.bgColor, width: props.width }}
    >
      {props.children}
    </div>
  );
};

export default HeroContainer;
