import React from "react";
import PageHeading from "../../../components/PageHeading/PageHeading";
import DataModal from "../../../components/DataModal/DataModal";
import Hospital from "../Hospital";
import {
  HospitalStaffMembers,
  HospitalStaffKey,
} from "../../../constants/HospitalStaffMembers";

const HospitalStaff = (props) => {
  const [showModal, setShowModal] = React.useState(false); // for modal
  const modalData = React.useRef({}); // for modalData

  return (
    <Hospital
      child={
        <>
          <PageHeading heading="Hospital Staff" />
          <div className="card-container">
            {HospitalStaffMembers.map((member, index) => (
              <>
                <div className="card" key={index} style={{ height: "375px" }}>
                  <div className="card-image">
                    <div className="staff-image-container">
                      <img src={member.Photo} alt={member.Name} />
                    </div>
                  </div>
                  <div key={index} className="card-content">
                    <h3>{member.Name}</h3>
                    <h4>{member.Designation}</h4>
                    <span>
                      <img
                        src="https://img.icons8.com/ios-glyphs/30/null/plus-math.png"
                        alt="open"
                        onClick={() => {
                          setShowModal((prev) => !prev);
                          modalData.current = member;
                        }}
                      />
                    </span>
                  </div>
                </div>
                {showModal && (
                  <DataModal
                    onClose={() => setShowModal((prev) => !prev)}
                    Data={modalData.current}
                    Keys={HospitalStaffKey}
                  />
                )}
              </>
            ))}
          </div>
        </>
      }
    />
  );
};

export default HospitalStaff;
