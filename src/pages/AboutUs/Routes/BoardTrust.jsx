import React from "react";
import MembersTextContainer from "../../../components/MembersTextContainer/MembersTextContainer";
import { BoardTrustMembers } from "../../../constants/BoardTrustMembers";
import AboutUs from "../AboutUs";

const BoardTrust = () => {
  return (
    <AboutUs
      child={
        <MembersTextContainer
          heading="MEMBERS OF BOARD OF TRUST"
          description={
            <>
              {BoardTrustMembers.map((member, index) => (
                <span style={{ marginTop: "20px" }}>
                  {member.id} . {member.name} -{" "}
                  <b style={{ textTransform: "uppercase" }}>{member.post}</b>
                </span>
              ))}
            </>
          }
        />
      }
    />
  );
};

export default BoardTrust;
