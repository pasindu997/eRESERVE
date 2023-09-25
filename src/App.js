import "./App.css";

import backgroundImage from "./assets/HomePageImage.jpg";
import HanthanaGuideImage from "./assets/Hanthana.jpg";
import UniversityVisit from "./assets/UniversityVisit.jpg";
import GalBangollow from "./assets/GalBangollow.jpg";
import UniversityPhotography from "./assets/UniversityPhotography.jpg";
import HostelRegistation from "./assets/HostelRegistation.jpg";

function App() {
  return (
    <div>
      <nav className="Navbar">
        <h1 className="heading">eRESERVE</h1>
        <div className="linknav">
          <a className="link" href="#">
            Home
          </a>
          <a className="link" href="#">
            about us
          </a>
          <a className="link" href="#">
            services
          </a>
          <a className="link" href="#">
            contact us
          </a>
          <a className="link" href="#">
            sign in
          </a>
          <button class="button button01">sign up</button>
        </div>
      </nav>
      <div className="ImageSize">
        <img className="backgroundimage" src={backgroundImage} alt="image" />
      </div>
      <p>
        The University of Peradeniya (Sinhala: පේරාදෙණිය විශ්වවිද්‍යාලය, Tamil:
        பேராதனைப் பல்கலைக்கழகம்) is a public university in Sri Lanka, funded by
        the University Grants Commission.[2] It is the largest university in Sri
        Lanka, which was originally established as the University of Ceylon in
        1942. The university was officially opened on 20 April 1954, in the
        presence of Queen Elizabeth II, by Prince Philip, Duke of Edinburgh. The
        University of Peradeniya hosts nine faculties, four postgraduate
        institutes (including the newly added Postgraduate Institute of Medical
        Sciences), 20 centres and units, 73 departments, and teaches about
        12,000 students in the fields of Medicine, Agriculture, Arts, Science,
        Engineering, Dental Sciences, Veterinary Medicine and Animal Science,
        Management, and Allied Health Science.[3] It claims to have the largest
        government endowment by a higher education institution in Sri Lanka,
        based on its large staff and faculties/departments.
      </p>
      <div className="Type">
        <div className="HantanaGuide">
          <img
            className="HanthanaGuideImage"
            src={HanthanaGuideImage}
            alt="image"
          />
          <button class="button button02">HantanaGuide</button>
        </div>
        <div className="University">
          <img className="UniversityVisit" src={UniversityVisit} alt="image" />
        </div>
        <div className="BangollowBooking">
          <img className="GalBangollow" src={GalBangollow} alt="image" />
        </div>
        <div className="Photography">
          <img
            className="UniversityPhotography"
            src={UniversityPhotography}
            alt="image"
          />
        </div>
        <div className="HostelRegistation">
          <img
            className="HostelRegistation"
            src={HostelRegistation}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
