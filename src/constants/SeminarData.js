export const SeminarData = [
  {
    heading: (
      <span style={{ textDecoration: "underline" }}>
        Revised Seminar Calendar from November 2022 to Summer Vacation 2023
      </span>
    ),
    description: (
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          className="img-fluid"
          src={require("../assets/Seminar/SeminarCalendar.png")}
          alt="SeminarCalendar"
        />
        <br />
        <b>
          Respective departments conducting the seminars are encouraged to do
          interdepartmental presentation.
          <br /> Dates to be decided by the conducting department as per
          convenience within the stipulated time.
          <br />
        </b>
      </p>
    ),
  },
  {
    heading: "",
    description: (
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%", paddingRight: "10px" }}>
          <p style={{ display: "flex", justifyContent: "center" }}>
            <img
              className="img-fluid"
              src={require("../assets/Seminar/Gynaecology.jpg")}
              alt="Gynaecology"
              style={{ maxWidth: "400px", height: "300px" }}
            />
          </p>
          <p style={{ textAlign: "center", fontSize: "1.5rem" }}>Gynaecology & Obsterics</p>
        </div>
        <div style={{ width: "50%", paddingLeft: "10px" }}>
          <p style={{ display: "flex", justifyContent: "center" }}>
            <img
              className="img-fluid"
              src={require("../assets/Seminar/PracticeOfMedicine.jpg")}
              alt="Another Image"
              style={{ maxWidth: "400px", height: "300px" }}
            />
          </p>
          <p style={{ textAlign: "center", fontSize: "1.5rem" }}>Practice of Medicine</p>
        </div>
      </div>
    ),
  },
];
