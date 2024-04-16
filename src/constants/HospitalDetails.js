import { Canteen } from "./StudentServices";

const HospitalService = [
  {
    heading: "",
    description: (
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "900px" }}
          src={require("../assets/HospitalService")}
          alt="Hospital Service"
        />
      </p>
    ),
  },
];

const OPD = [
  {
    heading: "",
    description: (
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>Year: 2023</h2>
        <img
          style={{ width: "900px" }}
          src={require("../assets/OPD23.png")}
          alt="OPD"
        />
        <br />
        <br />
        <h2>Year: 2022</h2>
        <img
          style={{ width: "900px" }}
          src={require("../assets/OPD22.png")}
          alt="OPD"
        />
        <br />
        <br />
        <h2>Year: 2021</h2>
        <img
          style={{ width: "900px" }}
          src={require("../assets/OPD21")}
          alt="OPD"
        />
        <br />
        <br />
        <a
          href="https://drive.google.com/file/d/1v7Gf4PQ9jJDz6t2s3GzcknpaO3gcdcx8/view?usp=sharing"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          Download OPD 2023{" "}
        </a>
        <br />
        <a
          href="https://drive.google.com/file/d/1NE5g94iH-mAnPMRn7nMG4zatbH3f5O4t/view?usp=sharing"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          Download OPD 2022{" "}
        </a>
        <br />
        <a
          href="https://drive.google.com/file/d/16MoISCa2pkwJ-iSqIRDo_p5QwN34y6up/view?usp=sharing"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          Download OPD 2021{" "}
        </a>
      </p>
    ),
  },
];

const IPD = [
  {
    heading: "ipd patients",
    description: (
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>Year: 2023</h2>
        <img
          style={{ width: "900px" }}
          src={require("../assets/IPDpatients23.png")}
          alt="IPD Patients"
        />
        <br />
        <br />
        <h2>Year: 2022</h2>
        <img
          style={{ width: "900px" }}
          src={require("../assets/IPDpatients22.png")}
          alt="IPD Patients"
        />
        <br />
        <br />
        <h2>Year: 2021</h2>
        <img
          style={{ width: "900px" }}
          src={require("../assets/IPDpatients21")}
          alt="IPD Patients"
        />
      </p>
    ),
  },
  {
    heading: "ipd beds",
    description: (
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>Year: 2023</h2>
        <img
          style={{ width: "900px" }}
          src={require("../assets/IPDbeds23.png")}
          alt="IPD Beds"
        />
        <h4>GRAND TOTAL: 3053 </h4>
        <h6>Bed Occupancy(%) = 3053(p)*100 / 365*25(b) = 33%</h6>
        <br />
        <br />
        <h2>Year: 2022</h2>
        <img
          style={{ width: "900px" }}
          src={require("../assets/IPDbeds22.png")}
          alt="IPD Beds"
        />
        <h5>GRAND TOTAL: 3212</h5>
        <br />
        <br />
        <h2>Year: 2021</h2>
        <img
          style={{ width: "900px" }}
          src={require("../assets/IPDbeds21")}
          alt="IPD Beds"
        />
        <br />
        <br />
        <a 
          href="https://drive.google.com/file/d/1p4_Rwr2z5eHHyLIZ2yzPQ0bvbQBpj9ev/view?usp=sharing" 
          target={"_blank"} 
          rel="noopener noreferrer">
          Download IPD 2023{" "}
        </a>
        <br />
        <a 
          href="https://drive.google.com/file/" 
          target={"_blank"} 
          rel="noopener noreferrer">
          Download IPD 2022{" "}
        </a>
        <br />
        <a
          href="https://drive.google.com/file/d/1WWzkaTTd54wTjn-tEVekuBVb7Cq-NwJY/view?usp=sharing"
          target={"_blank"}
          rel="noopener noreferrer">
          Download IPD 2021{" "}
        </a>
      </p>
    ),
  },
];

const Pharmacy = [
  {
    heading: "",
    description: (
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          style={{ width: "900px" }}
          src={require("../assets/pharmacyHospital.jpg")}
          alt="Pharmacy"
        />
      </p>
    ),
  },
];

export const HospitalDetails = [
  {
    id: "hospitalService",
    heading: "Hospital Service",
    detailsList: HospitalService,
  },
  {
    id: "opd",
    heading: "OPD",
    detailsList: OPD,
  },
  {
    id: "ipd",
    heading: "IPD",
    detailsList: IPD,
  },
  {
    id: "canteen-room",
    heading: "Canteen Room",
    detailsList: Canteen,
  },
  {
    id: "pharmacy",
    heading: "Pharmacy",
    detailsList: Pharmacy,
  },
];
