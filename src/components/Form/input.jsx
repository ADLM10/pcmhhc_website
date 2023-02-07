import React from "react";
import "./Form.style.css";

const input = (props) => {
  return (
    <div className="formbold-mb-5">
      <label for={props.name} className="formbold-form-label">
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        className="formbold-form-input"
      />
    </div>
  );
};

export default input;
