import React from "react";
import AboutUs from "../AboutUs";
import PageHeading from "../../../components/PageHeading/PageHeading";
import { EthicsCommitteeMembers } from "../../../constants/EthicsCommitteeMembers";

const EthicsCommittee = () => {
  return (
    <AboutUs
      child={
        <>
          <PageHeading heading="Ethics Committee" />
          <div className="card-container">
            {EthicsCommitteeMembers.map((member, index) => (
              <div className="card" key={index}>
                <div className="card-content">
                  <h3>{member.Name}</h3>
                  <h4>{member.Designation}</h4>
                  <p>{member.Qualification}</p>
                  {/* <a href={`mailto:${member.email}`}>{member.email}</a> */}
                </div>
              </div>
            ))}
          </div>
        </>
      }
    />
  );
};

export default EthicsCommittee;
