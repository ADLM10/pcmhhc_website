import React from "react";
import Academics from "../Academics";
import PageHeading from "../../../components/PageHeading/PageHeading";
import DataModal from "../../../components/DataModal/DataModal";
import "../Academics.style.css";

const DataCardComponent = (props) => {
  const [showModal, setShowModal] = React.useState(false); // for modal
  const modalData = React.useRef({}); // for modalData

  return (
    <Academics
      child={
        <>
          <PageHeading heading={props.Heading} />
          <div className="card-container" >
            {props.StaffList.map((member, index) => (
              <>
                <div className="card" key={index} style={{ height: props.Height }}>
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
                Keys={props.StaffKey}
              />)
            }
              </>
            ))}
          </div>
        </>
      }
    />
  );
};

export default DataCardComponent;
