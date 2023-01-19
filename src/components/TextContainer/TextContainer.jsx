import React from "react";
import "./TextContainer.style.css";

const TextContainer = (props) => {
  return (
    <div className="text-Container">
      <h1 className="containerHeading">{props.heading}</h1>
      <p className="containerDescription">{props.description}</p>
    </div>
  );
};

export default TextContainer;
