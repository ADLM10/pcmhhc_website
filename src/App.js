import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Marquee from './components/Marquee/Marquee.jsx';
import Home from './pages/Home/Home';
import Finance from './pages/Finance/Finance';
import SeminarResearch from './pages/Seminar_Research/Seminar_Research';
import PhotoGallery from './pages/PhotoGallery/PhotoGallery';
import AboutUs from './pages/AboutUs/AboutUs';
import Academics from './pages/Academics/Academics';
import StudentService from './pages/StudentService/StudentService';
import Hospital from './pages/Hospital/Hospital';
import Contact from './pages/Contact/Contact';
import BoardTrust from './pages/AboutUs/Routes/BoardTrust';
import LocalManagingCommittee from './pages/AboutUs/Routes/LocalManagingCommittee';
import AdministrativeStaff from './pages/AboutUs/Routes/AdministrativeStaff';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/finance" element={<Finance/>} />
            <Route path="/seminars" element={<SeminarResearch/>} />
            <Route path="/research" element={<SeminarResearch/>} />
            <Route path="/photo-gallery" element={<PhotoGallery/>} />
            <Route path="/about-us" element={<BoardTrust/>} />
            <Route path="/academics" element={<Academics/>} />
            <Route path="/student-service" element={<StudentService/>} />
            <Route path="/hospital" element={<Hospital/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/about-us/board-trust-members" element={<BoardTrust/>} />
            <Route path="/about-us/local-managing-committee" element={<LocalManagingCommittee/>} />
            <Route path="/about-us/administrative-staff" element={<AdministrativeStaff/>} />
          </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
