import React from "react";
import MembersTextContainer from "../../../components/MembersTextContainer/MembersTextContainer";
import { SubCommitteeMembers } from "../../../constants/SubCommitteeMembers";
import AboutUs from "../AboutUs";

const SubCommittee = () => {
  return (
    <AboutUs
      child={
        <MembersTextContainer
          heading="THE MEMBERS OF PCMHHC COLLEGE & HOSPITAL SUB-COMMITTEES"
          description={
            <>
              {SubCommitteeMembers.map((member, index) =>
                member.id <= 0 ? (
                  <span style={{ marginTop: "20px" }}>
                    {member.id} . {member.description}
                  </span>
                ) : (
                  <p style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ marginTop: "20px" }}>
                      {member.id} . {member.description}
                    </span>
                    {member.members.map((element, index) => (
                      <span style={{ marginTop: "20px", marginLeft: "50px" }}>
                        {element.id}.{element.name}
                      </span>
                    ))}
                  </p>
                )
              )}
            </>
          }
        />
      }
    />
  );
};

export default SubCommittee;
