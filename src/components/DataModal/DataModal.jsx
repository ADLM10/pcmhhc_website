import React from "react";
import "./DataModal.style.css";

const DataModal = (props) => {
  return (
    <div className="data-modal">
      <div className="data-modal-content">
        <div className="data-modal-header">
          <h2>{props.Data.Name}</h2>
          <span className="close-button" onClick={props.onClose}>
            <img
              src="https://img.icons8.com/ios-glyphs/30/null/multiply.png"
              alt="open"
            />
          </span>
        </div>
        <div className="data-modal-body">
          {props.Keys.map(
            (item, index) =>
              props.Data[item.key] && (
                <span key={index}>
                  <b>{item.label}</b>:{props.Data[item.key]}
                </span>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default DataModal;
