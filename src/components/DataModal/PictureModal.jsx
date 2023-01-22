import React from "react";
import "./DataModal.style.css";

const PictureModal = (props) => {
  return (
    <div className="data-modal">
      <div
        className="data-modal-content"
        style={{
          backgroundImage: `url(${props.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "90%",
        }}
      >
        <div
          className="data-modal-header"
          style={{
            justifyContent: "flex-end",
          }}
        >
          <span className="close-button" onClick={props.onClose}>
            <img
              src="https://img.icons8.com/ios-glyphs/30/null/multiply.png"
              alt="close"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PictureModal;
