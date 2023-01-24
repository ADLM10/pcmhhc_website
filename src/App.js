import "./App.css";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Marquee from "./components/Marquee/Marquee.jsx";
import Home from "./pages/Home/Home";
import Finance from "./pages/Finance/Finance";
import SeminarResearch from "./pages/Seminar_Research/Seminar_Research";
import PhotoGallery from "./pages/PhotoGallery/PhotoGallery";
import Contact from "./pages/Contact/Contact";
import BoardTrust from "./pages/AboutUs/Routes/BoardTrust";
import LocalManagingCommittee from "./pages/AboutUs/Routes/LocalManagingCommittee";
import AdministrativeStaff from "./pages/AboutUs/Routes/AdministrativeStaff";
import MessageComponent from "./pages/AboutUs/Routes/MessageComponent";
import VisionMission from "./pages/AboutUs/Routes/VisionMission";
import UniversityOfficials from "./pages/AboutUs/Routes/UniversityOfficials";
import Departments from "./pages/Academics/Routes/Departments";
import DataCardComponent from "./pages/Academics/Routes/DataCardComponent";
import Library from "./pages/StudentService/Routes/Library";
import CollegeDetailsComponent from "./pages/Academics/Routes/CollegeDetailsComponent";
import Services from "./pages/StudentService/Routes/Services";
import HospitalDetailsComponent from "./pages/Hospital/Routes/HospitalDetailsComponent";
import HospitalStaff from "./pages/Hospital/Routes/HospitalStaff";
import NoticeBoard from "./pages/NoticeBoard/NoticeBoard";
import { HospitalDetails } from "./constants/HospitalDetails";
import { StudentServices } from "./constants/StudentServices";
import { CollegeDetails } from "./constants/CollegeDetails";
import { Staffs } from "./constants/Staffs";
import { Messages } from "./constants/Messages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <div className="fixedHeader">
          <Header />
          <Navbar />
          <Marquee />
        </div>
        <div className="heroSection">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/notice-board" element={<NoticeBoard />} />
            <Route path="/seminars" element={<SeminarResearch />} />
            <Route path="/research" element={<SeminarResearch />} />
            <Route path="/photo-gallery" element={<PhotoGallery />} />
            <Route path="/student-service" element={<Library />} />
            <Route path="/about-us" element={<BoardTrust />} />
            <Route path="/academics" element={<Departments />} />
            <Route
              path="/hospital"
              element={
                <HospitalDetailsComponent
                  Heading={HospitalDetails[0].heading}
                  detailsList={HospitalDetails[0].detailsList}
                />
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/about-us/board-trust-members"
              element={<BoardTrust />}
            />
            <Route
              path="/about-us/local-managing-committee"
              element={<LocalManagingCommittee />}
            />
            <Route
              path="/about-us/administrative-staff"
              element={<AdministrativeStaff />}
            />
            {Messages.map((message, index) => (
              <Route
                key={message.id}
                path={`/about-us/${message.id}`}
                element={
                  <MessageComponent
                    heading={message.heading}
                    message={message.message}
                  />
                }
              />
            ))}
            <Route
              path="/about-us/vision-mission"
              element={<VisionMission />}
            />
            <Route
              path="/about-us/university-officials"
              element={<UniversityOfficials />}
            />
            <Route path="/academics/departments" element={<Departments />} />
            {Staffs.map((staff, index) => (
              <Route
                key={staff.id}
                path={`/academics/${staff.id}`}
                element={
                  <DataCardComponent
                    Heading={staff.heading}
                    StaffList={staff.staffs}
                    StaffKey={staff.keys}
                    Height={staff.height}
                  />
                }
              />
            ))}
            {CollegeDetails.map((college, index) => (
              <Route
                key={college.id}
                path={`/academics/${college.id}`}
                element={
                  <CollegeDetailsComponent
                    Heading={college.heading}
                    detailsList={college.detailsList}
                  />
                }
              />
            ))}
            {StudentServices.map((service, index) => (
              <Route
                key={service.id}
                path={`/student-service/${service.id}`}
                element={
                  <Services
                    Heading={service.heading}
                    servicesList={service.servicesList}
                  />
                }
              />
            ))}
            {HospitalDetails.map((hospital, index) => (
              <Route
                key={hospital.id}
                path={`/hospital/${hospital.id}`}
                element={
                  <HospitalDetailsComponent
                    Heading={hospital.heading}
                    detailsList={hospital.detailsList}
                  />
                }
              />
            ))}
            <Route
              path="/hospital/hospital-staff"
              element={<HospitalStaff />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
