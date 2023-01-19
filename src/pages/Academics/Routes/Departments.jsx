import React from "react";
import Academics from "../Academics";
import { DepartmentMembers } from "../../../constants/DepartmentMembers";
import PageHeading from "../../../components/PageHeading/PageHeading";
import "../Academics.style.css";

const Departments = () => {
  return (
    <Academics
      child={
        <>
          <PageHeading heading="Departments" />
          <div className="card-container">
            {DepartmentMembers.map((member, index) => (
              <div className="card" key={index}>
                <div className="card-image">
                  <img src={member.picture} alt={member.Department} />
                </div>
                <div key={index} className="card-content">
                  <h3>{member.Department}</h3>
                </div>
              </div>
            ))}
          </div>
        </>
      }
    />
  );
};

export default Departments;
