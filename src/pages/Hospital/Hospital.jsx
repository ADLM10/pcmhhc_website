import React from "react";
import PageNav from "../../components/PageNav/PageNav";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import HeroContainer from "../../components/HeroContainer/HeroContainer";
import { HospitalNavLinks } from "./HospitalNavLinks";

const Hospital = (props) => {
  return (
    <SectionContainer
      children={
        <>
          <PageNav
            navHeading="Hospital"
            navLinks={HospitalNavLinks}
            bgColor="#FFFFFF"
            textColor="#411010"
            containerColor="#A2ECFC"
            pagePath="hospital"
          />
          <HeroContainer bgColor="#A2ECFC" children={props.child} />
        </>
      }
    />
  );
};

export default Hospital;
