import React from "react";
import Academics from "../Academics";
import PageHeading from "../../../components/PageHeading/PageHeading";
import TextContainer from "../../../components/TextContainer/TextContainer";

const CollegeDetailsComponent = (props) => {
  return (
    <Academics
      child={
        <>
          <PageHeading heading={props.Heading} />
          {props.detailsList.map((item, index) => (
            <TextContainer
              key={index}
              heading={item.heading}
              description={item.description}
            />
          ))}
        </>
      }
    />
  );
};

export default CollegeDetailsComponent;
