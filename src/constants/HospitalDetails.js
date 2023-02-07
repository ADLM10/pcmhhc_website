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
        <img
          style={{ width: "900px" }}
          src={require("../assets/OPD")}
          alt="OPD"
        />
        <br />
        <br />
        <a
          href="https://drive.google.com/file/d/16MoISCa2pkwJ-iSqIRDo_p5QwN34y6up/view?usp=sharing"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          Download OPD
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
        <img
          style={{ width: "900px" }}
          src={require("../assets/IPDpatients")}
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
        <img
          style={{ width: "900px" }}
          src={require("../assets/IPDbeds")}
          alt="IPD Beds"
        />
        <br />
        <br />
        <a
          href="https://drive.google.com/file/d/1WWzkaTTd54wTjn-tEVekuBVb7Cq-NwJY/view?usp=sharing"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          Download IPD{" "}
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
