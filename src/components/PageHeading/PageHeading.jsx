import React from "react";
import "./PageHeading.style.css";

const PageHeading = (props) => {
  return <h1 className="pageHeading">{props.heading}</h1>;
};

export default PageHeading;
