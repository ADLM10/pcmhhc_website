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
    heading: "Gynaecology & Obsterics",
    description: (
      <p style={{ display: "flex", justifyContent: "center" }}>
        <img
          className="img-fluid"
          src={require("../assets/Seminar/Gynaecology.jpg")}
          alt="Gynaecology"
        />
      </p>
    ),
  },
  {
    heading: "Practice of Medicine",
    description: (
      <p style={{ display: "flex", justifyContent: "center" }}>
        <img
          className="img-fluid"
          src={require("../assets/Seminar/PracticeOfMedicine.jpg")}
          alt="PracticeOfMedicine"
        />
      </p>
    ),
  },
];
