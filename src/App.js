import "./App.css";
import { HospitalDetails } from "./constants/HospitalDetails";
import { StudentServices } from "./constants/StudentServices";
import { CollegeDetails } from "./constants/CollegeDetails";
import { Staffs } from "./constants/Staffs";
import { Messages } from "./constants/Messages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home/Home"));
const Header = lazy(() => import("./components/Header/Header"));
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Marquee = lazy(() => import("./components/Marquee/Marquee"));
const HospitalDetailsComponent = lazy(() =>
  import("./pages/Hospital/Routes/HospitalDetailsComponent")
);
const HospitalStaff = lazy(() =>
  import("./pages/Hospital/Routes/HospitalStaff")
);
const AdministrativeStaff = lazy(() =>
  import("./pages/AboutUs/Routes/AdministrativeStaff")
);
const MessageComponent = lazy(() =>
  import("./pages/AboutUs/Routes/MessageComponent")
);
const DataCardComponent = lazy(() =>
  import("./pages/Academics/Routes/DataCardComponent")
);
const CollegeDetailsComponent = lazy(() =>
  import("./pages/Academics/Routes/CollegeDetailsComponent")
);
const Services = lazy(() => import("./pages/StudentService/Routes/Services"));
const PhotoGallery = lazy(() => import("./pages/PhotoGallery/PhotoGallery"));
const SeminarResearch = lazy(() =>
  import("./pages/Seminar_Research/Seminar_Research")
);
const Finance = lazy(() => import("./pages/Finance/Finance"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const BoardTrust = lazy(() => import("./pages/AboutUs/Routes/BoardTrust"));
const LocalManagingCommittee = lazy(() =>
  import("./pages/AboutUs/Routes/LocalManagingCommittee")
);
const Library = lazy(() => import("./pages/StudentService/Routes/Library"));
const Departments = lazy(() => import("./pages/Academics/Routes/Departments"));
const VisionMission = lazy(() =>
  import("./pages/AboutUs/Routes/VisionMission")
);
const EthicsCommittee = lazy(() =>
  import("./pages/AboutUs/Routes/EthicsCommittee")
);
const UniversityOfficials = lazy(() =>
  import("./pages/AboutUs/Routes/UniversityOfficials")
);
const NoticeBoard = lazy(() => import("./pages/NoticeBoard/NoticeBoard"));

function App() {
  return (
    <div className="App">
      <Router>
        <div className="fixedHeader">
          <Suspense fallback={<></>}>
            <Header />
          </Suspense>
          <Suspense fallback={<></>}>
            <Navbar />
          </Suspense>
          <Suspense fallback={<></>}>
            <Marquee />
          </Suspense>
        </div>
        <div className="heroSection">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<></>}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/home"
              element={
                <Suspense fallback={<></>}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/finance"
              element={
                <Suspense fallback={<></>}>
                  <Finance />
                </Suspense>
              }
            />
            <Route
              path="/notice-board"
              element={
                <Suspense fallback={<></>}>
                  <NoticeBoard />
                </Suspense>
              }
            />
            <Route
              path="/seminars"
              element={
                <Suspense fallback={<></>}>
                  <SeminarResearch />
                </Suspense>
              }
            />
            <Route
              path="/research"
              element={
                <Suspense fallback={<></>}>
                  <SeminarResearch />
                </Suspense>
              }
            />
            <Route
              path="/photo-gallery"
              element={
                <Suspense fallback={<></>}>
                  <PhotoGallery />
                </Suspense>
              }
            />
            <Route
              path="/student-service"
              element={
                <Suspense fallback={<></>}>
                  <Library />
                </Suspense>
              }
            />
            <Route path="/hospital">
              <Route
                index={true}
                element={
                  <Suspense fallback={<></>}>
                    <HospitalDetailsComponent
                      Heading={HospitalDetails[0].heading}
                      detailsList={HospitalDetails[0].detailsList}
                    />
                  </Suspense>
                }
              />
              {HospitalDetails.map((hospital, index) => (
                <Route
                  key={hospital.id}
                  path={hospital.id}
                  element={
                    <Suspense fallback={<></>}>
                      <HospitalDetailsComponent
                        Heading={hospital.heading}
                        detailsList={hospital.detailsList}
                      />
                    </Suspense>
                  }
                />
              ))}
              <Route
                path="hospital-staff"
                element={
                  <Suspense fallback={<></>}>
                    <HospitalStaff />
                  </Suspense>
                }
              />
            </Route>
            <Route
              path="/contact"
              element={
                <Suspense fallback={<></>}>
                  <Contact />
                </Suspense>
              }
            />
            <Route path="/about-us">
              <Route
                index={true}
                element={
                  <Suspense fallback={<></>}>
                    <BoardTrust />
                  </Suspense>
                }
              />
              <Route
                path="board-trust-members"
                element={
                  <Suspense fallback={<></>}>
                    <BoardTrust />
                  </Suspense>
                }
              />
              <Route
                path="local-managing-committee"
                element={
                  <Suspense fallback={<></>}>
                    <LocalManagingCommittee />
                  </Suspense>
                }
              />
              <Route
                path="administrative-staff"
                element={
                  <Suspense fallback={<></>}>
                    <AdministrativeStaff />
                  </Suspense>
                }
              />
              {Messages.map((message, index) => (
                <Route
                  key={message.id}
                  path={message.id}
                  element={
                    <Suspense className={<></>}>
                      <MessageComponent
                        heading={message.heading}
                        message={message.message}
                      />
                    </Suspense>
                  }
                />
              ))}
              <Route
                path="vision-mission"
                element={
                  <Suspense fallback={<></>}>
                    <VisionMission />
                  </Suspense>
                }
              />
              <Route
                path="ethics-committee"
                element={
                  <Suspense fallback={<></>}>
                    <EthicsCommittee />
                  </Suspense>
                }
              />
              <Route
                path="university-officials"
                element={
                  <Suspense fallback={<></>}>
                    <UniversityOfficials />
                  </Suspense>
                }
              />
            </Route>
            <Route path="/academics">
              <Route
                index={true}
                element={
                  <Suspense fallback={<></>}>
                    <Departments />
                  </Suspense>
                }
              />
              <Route
                path="departments"
                element={
                  <Suspense fallback={<></>}>
                    <Departments />
                  </Suspense>
                }
              />
              {Staffs.map((staff, index) => (
                <Route
                  key={staff.id}
                  path={staff.id}
                  element={
                    <Suspense fallback={<></>}>
                      <DataCardComponent
                        Heading={staff.heading}
                        StaffList={staff.staffs}
                        StaffKey={staff.keys}
                        Height={staff.height}
                      />
                    </Suspense>
                  }
                />
              ))}
              {CollegeDetails.map((college, index) => (
                <Route
                  key={college.id}
                  path={college.id}
                  element={
                    <Suspense fallback={<></>}>
                      <CollegeDetailsComponent
                        Heading={college.heading}
                        detailsList={college.detailsList}
                      />
                    </Suspense>
                  }
                />
              ))}
            </Route>
            {StudentServices.map((service, index) => (
              <Route
                key={service.id}
                path={`/student-service/${service.id}`}
                element={
                  <Suspense fallback={<></>}>
                    <Services
                      Heading={service.heading}
                      servicesList={service.servicesList}
                    />
                  </Suspense>
                }
              />
            ))}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
