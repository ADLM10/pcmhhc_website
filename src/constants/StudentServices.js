import { LibraryData } from "./LibraryData";
import { LaboratoryData } from "./LaboratoryData";
import { SportsData } from "./SportsData";
import { ScholarshipData } from "./ScholarshipData";
import { TourData } from "./TourData";

export const Canteen = [
  {
    heading: "",
    description: (
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        The College has a clean and hygienic canteen service providing the
        students with high quality edibles to the students and staffs.
        <img
          style={{ width: "700px", margin: "20px" }}
          src={require("../assets/canteen.jpg")}
          alt="canteen"
        />
      </p>
    ),
  },
];

const Placements = [
  {
    heading: "",
    description: (
      <p>
        Placement Cell will help the students to get information of placement.
      </p>
    ),
  },
];

const AntiRaggingMembers = [
  { Name: "Dr. Asish kr. Sasmal, Bursur, P.C.M.H.Hospital & College (Chairperson)" },
  { Name: "Prof. (Dr.) Amitave Dhar, Ex-H.O.D, Community Medicine" },
  { Name: "Dr. Ambika Kundu, Dept. of Pharmacy" },
  { Name: "Dr. Sneha Kariwala, Dept. of Physiology" },
  { Name: "Dr. Santanu Ghsoh, H.O.D, Practice of Medicine" },
  { Name: "Dr. Asim Kumar Manna, Senior Medical Officer" },
  { Name: "Mr. Uttam Kumar Saha, Cashier (N.T.Staff)" },
];

const AntiRagMembers = [
  { Name: "Dr. Ambika Kundu (Saha) - Chairperson " },
  { Name: "Sumit Maity " },
  { Name: "Sreetama Chowdhury" },
  { Name: "Shma Perveen" },
  { Name: "Raju Das" },
  { Name: "Shruti Debnath" },
];

const SexHarrassmentMembers = [
  { Name: "Dr. Gargi Kundu - Chairperson" },
  { Name: "Prof. (Dr.) R.N.Dhara." },
  { Name: "Prof. (Dr.) D.Kundu" },
  { Name: "Dr. Ambika Kundu (Saha)" },
  { Name: "Dr. Sneha Kariwala" },
];

const AntiRaggingCommittee = [
  {
    heading: "",
    description: (
      <p>
        <ul>
          {AntiRaggingMembers.map((member, index) => (
            <li
              style={{ margin: "10px", fontSize: "1.4rem", fontWeight: "600" }}
              key={index}
            >
              {member.Name}
            </li>
          ))}
        </ul>
        <br />
        <h2>Anti Ragging Squad Members</h2>
        <ul>
          {AntiRagMembers.map((member, index) => (
            <li
              style={{ margin: "10px", fontSize: "1.2rem", fontWeight: "400" }}
              key={index}
            >
              {member.Name}
            </li>
          ))}
        </ul>
        <h2>Prevention of Sexual Harassment Committee Members</h2>
        <ul>
          {SexHarrassmentMembers.map((member, index) => (
            <li
              style={{ margin: "10px", fontSize: "1.2rem", fontWeight: "400" }}
              key={index}
            >
              {member.Name}
            </li>
          ))}
        </ul>
      </p>
    ),
  },
];

const Programs = [
  {
    heading: "",
    description: (
      <p style={{ textAlign: "justify", fontSize: "1.45rem" }}>
        Under the dynamic leadership of Prof. (Dr.) Bidhu Bhushan Jana,
        Ex-Principal and supervision of the members of Board of Trustees and
        Local Managing Committee along with the sincere co-operation of the
        teachers, non-teaching staff, Medical officers, students, Internees,
        House-staff, revolutionary changes and development continued. The
        college department is now equipped with computers in order to impart
        education on Materia Medica, Repertory and the hospital also computerise
        for central registration. Prof. (Dr.) Bidhu Bhusan Jana was
        superannuated on 31st January, 2020 and the college was running under
        the Principal-in-Charge, Prof. (Dr.) Nidan Betel on and from 1 February
        2020. Prof. (Dr.) Sanjay Kar joined as Principal on 6 August. 2021 and
        Dr. Kar was terminated on 6th August 2022 and then Prof. (Dr.) Nidan
        Betal joined as Principal on & from 8th August 2022 and still continuing
        in the post.
      </p>
    ),
  },
];

const InternalExamination = [
  {
    heading: "",
    description: (
      <p style={{ textAlign: "justify", fontSize: "1.45rem" }}>
        Quarterly Internal Assessment Test for all batch of student in all the
        subject will be conducted and result of the examination will published
        and will be sent to the guardian time to time.
      </p>
    ),
  },
];

const CommonRoom = [
  {
    heading: "",
    description: (
      <p style={{ fontSize: "1.3rem" }}>
        The College has a big Common Room. There are arrangements for various
        Indoor games in the Common Room like Table Tennis, Carom, Chess etc.
        <br />
        <br />
        The College also has a private area for outdoor games like Badminton.
        Volley ball. Football, Cricket etc.
        <br />
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            width: "70vw",
            height: "100%",
          }}
        >
          <img
            style={{ width: "300px", margin: "20px" }}
            src={require("../assets/CommonRoom/common_room_01.jpg")}
            alt="common-room"
          />
          <img
            style={{ width: "300px", margin: "20px" }}
            src={require("../assets/CommonRoom/common_room_02.jpg")}
            alt="common-room"
          />
        </div>
      </p>
    ),
  },
];

const StudentsUnion = [
  {
    heading: "",
    description: (
      <p
        style={{
          fontSize: "1.25rem",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        All students of the College are members of the union. There is a
        constitution of the Students' Union which regulates the activities of
        the Union including election and formation of the Executive Committee of
        the Union. Apart from organizing various socio cultural activities like
        Fresher Welcome, Annual Social. Function, Interclass Cultural
        Competition etc., the Union play a positive role in further
        developmental programme of the Institution.
        <br />
        <br />
        <h4>Cultural Committee Members</h4>
        <ul style={{ fontSize: "1rem",}}>
          <li>Dr. Dipak Kar - Convenor</li>
          <li>Dr. Sneha Kariwala</li>
          <li>Mr. Uttam Kr. Saha</li>
          <li>Arijit Kundu</li>
          <li>Munazza Hassan</li>
          <li>Sobia Naaz</li>
          <li>Ananya Benerjee</li>
          <li>Poulomi Chakraborty</li>
        </ul>
        <img
          style={{ width: "800px", margin: "20px" }}
          src={require("../assets/studentUnion")}
          alt="studentUnion"
        />
      </p>
    ),
  },
];

const Results = [
  {
    heading:
      "Results of Different Parts of B.H.M.S. Examinations for last three years 	2018-2022",
    description: (
      <p
        style={{
          fontSize: "1.5rem",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "800px", margin: "20px" }}
          src={require("../assets/Results")}
          alt="Results"
        />
      </p>
    ),
  },
];

const AntiRaggingLinks = [
  {
    Link: "https://drive.google.com/file/d/1sh34DFPjB0jw3WSk96B512mTXQ9p5Ya8/view?usp=sharing",
    Name: "ANTI-RACISM Declaration(STUDENTS)",
  },
  {
    Link: "https://drive.google.com/file/d/1LXvBIYwLmiVbXWZ1l0E1WNbA2AA1Dqvt/view?usp=sharing",
    Name: "aNTI-RAGGING Declaration(PARENTS)",
  },
  {
    Link: "https://drive.google.com/file/d/1Pd7A4ZuKmj4YVmbMCyV8LdpSdc9jGXi3/view?usp=sharing",
    Name: "ANTI-RAGGING STUDENTS",
  },
  {
    Link: "https://drive.google.com/file/d/1dkSRy7uYvVGfmVaGCh-uDmilClZ4WniI/view?usp=sharing",
    Name: "anti-sexual parents",
  },
];

const AntiRagging = [
  {
    heading: "",
    description: (
      <p style={{ fontSize: "1.5rem" }}>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "70vw",
          }}
        >
          {AntiRaggingLinks.map((item, index) => (
            <a
              href={item.Link}
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: "1.5rem",
                textTransform: "uppercase",
                margin: "20px",
              }}
            >
              {item.Name}
            </a>
          ))}
        </ul>
      </p>
    ),
  },
];

const admittedStudents = [
  {
    heading: "",
    description: (
      <p>
        <img
          style={{ width: "900px" }}
          src={require("../assets/admittedStudents")}
          alt="admittedstudents"
        />
        <a href="https://docs.google.com/spreadsheets/d/1ALQOmGomSWdm4rlTjcFWDKoTB5uAd4xWTVLV7l4FAvs/edit?usp=sharing">
          <br />
          Click here to view the list of admitted students
        </a>
      </p>
    ),
  },
];

const campus = [
  {
    heading: "",
    description: (
      <p 
      style={{width:"60%", margin:"auto", textalign:"justify",fontWeight:"600"}}
      >
        <h3>OUR FUTURE PEARLS</h3>
        <br/> 
        Welcome boys, welcome girls,<br />
        Welcome future homoeo-pearls.<br />
        The auspicious bell summons you.<br />
        Treat the millions waiting in queue.
        <br /><br />
        Be proud of your reverend temple<br />
        Where scope of learning is ample.<br />
        Your serious outlook, brilliant wit<br />
        Lead you must to your dream-feat
        <br /><br />
        What a peerless environment here!<br />
        Everyone is lovable, full of cheer.
        'Ragging' is made to fling away<br />
        In the abyss of The Bengal-Bay.
        <br /><br />
        A coterie of distinguished teachers,<br />
        Each blended with exclusive features,<br />
        Will mould your desired futurity<br />
        With utmost care and sincerity.
        <br /><br />
        On the route of your strenuous ride,<br />
        Be sure of helpful advice and guide,<br />
        From our benevolent jovial seniors,<br />
        All brimmed with amiable manners.
        <br /><br />
        The altruistic staffs take pride<br />
        In helping at your ardent stride.<br />
        To keep your esteemed-esse high,<br />
        Meagre earners never breathe sigh.
        <br /><br />
        Then, after an arduous long way<br />
        You must be content, happy and gay.<br />
        A heavenly feeling in you will reign,<br />
        For relieving ailing men -women.
        <br /><br />
        You may believe in almighty's power,<br />
        You may expect His graceful shower,<br />
        But the blessings of the grateful lot<br />
        Will surely offer you a peaceful cot.

      </p>
    )
  }
]

const Alumni =[
  {
    heading: "",
    description:(<p>

    </p>)
  }
]

export const StudentServices = [
  {
    id: "library",
    heading: "Library",
    servicesList: LibraryData,
  },
  {
    id: "laboratories",
    heading: "Laboratories",
    servicesList: LaboratoryData,
  },
  {
    id: "sports",
    heading: "Sports",
    servicesList: SportsData,
  },
  {
    id: "scholarships",
    heading: "Scholarships",
    servicesList: ScholarshipData,
  },
  {
    id: "canteen",
    heading: "Canteen",
    servicesList: Canteen,
  },
  {
    id: "placements",
    heading: "Placements",
    servicesList: Placements,
  },
  {
    id: "anti-ragging-members",
    heading: "Members of Anti-Ragging, Anti-Sexual Harassment and Anti-Racism",
    servicesList: AntiRaggingCommittee,
  },
  {
    id: "programs",
    heading: "Programs",
    servicesList: Programs,
  },
  {
    id: "tour",
    heading: "Tours",
    servicesList: TourData,
  },
  {
    id: "internal-examination",
    heading: "Internal Examination",
    servicesList: InternalExamination,
  },
  {
    id: "common-room",
    heading: "Common Room",
    servicesList: CommonRoom,
  },
  {
    id: "students-union",
    heading: "Students Union",
    servicesList: StudentsUnion,
  },
  {
    id: "results",
    heading: "Results",
    servicesList: Results,
  },
  {
    id: "anti-ragging-declaration",
    heading:
      "Declaration of anti-ragging, anti-sexual-harassments and anti-racism ",
    servicesList: AntiRagging,
  },
  {
    id: "admitted-students",
    heading: "admitted students(last five years)",
    servicesList: admittedStudents,
  },
  {
    id: "campus",
    heading: "Campus",
    servicesList: campus,
  },
  {
    id: "alumni",
    heading: "Alumni",
    servicesList: Alumni,
  },
];
