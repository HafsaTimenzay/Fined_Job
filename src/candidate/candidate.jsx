import React from "react";
// import SearchBar from "./searchBar";
import SideBar from "./components_candidate/SideBar";
import NavBar from "./components_candidate/navBar";
import JobList from "./content/JobList";
import Settings from "./content/settings";
import JobAlert from "./content/jobAlert";
import '../styles/candidate.css'

import { BrowserRouter  } from "react-router-dom";

export default function Candidate() {
  const [showLightbox, setShowLightbox] = useState(true);
  const navigate = useNavigate();

  const handleGoToProfile = () => {
    setShowLightbox(false);
    navigate("/Candidate/profile"); // Adjust the route to match your profile page
  };
  return (
    <div className="container-fluid p-0 m-0">
      {showLightbox && (
        <div className="lightbox-overlay">
          <div className="lightbox">
            <h4 className="lightbox-title">Complete Your Profile</h4>
            <p className="lightbox-text">
              To access all features, please complete your profile information.
            </p>
            <button className="btn btn-primary" onClick={handleGoToProfile}>
              Go to Profile
            </button>
          </div>
        </div>
      )}
      <div className="row">
        <div>
          <NavBar />
        </div>
          <div>
          
      <SideBar />
  
          </div>

        </div>
      </div>
  );
}
