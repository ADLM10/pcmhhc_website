import React from "react";
import PageNav from "../../components/PageNav/PageNav";
import { ServiceNavLinks } from "./ServiceNavLinks";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import HeroContainer from "../../components/HeroContainer/HeroContainer";

const StudentService = (props) => {
  return (
    <SectionContainer
      children={
        <>
          <PageNav
            navHeading="Student's Service"
            navLinks={ServiceNavLinks}
            bgColor="#FFFFFF"
            textColor="#411010"
            containerColor="#A2ECFC"
            pagePath="student-service"
          />
          <HeroContainer bgColor="#A2ECFC">{props.child}</HeroContainer>
        </>
      }
      // bgColor="#000000"
    />
  );
};

export default StudentService;
