import React from "react";
import AboutUs from "../AboutUs";
import MembersTextContainer from "../../../components/MembersTextContainer/MembersTextContainer";

const MessageComponent = (props) => {
  return (
    <AboutUs
      child={
        <MembersTextContainer
          heading={props.heading}
          description={props.message}
        />
      }
    />
  );
};

export default MessageComponent;
