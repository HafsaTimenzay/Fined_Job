import React, {useState} from "react";
import { Link,useNavigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
// import "../../styles/sidebar.css";
import profileImg from "../../assets/images/profile.jpg";
import Logo from "../../components/logo";


const NavBar = () => {
    const [showLightbox, setShowLightbox] = useState(false); // State for the lightbox
    const navigate = useNavigate(); 
    const handleLogout = () => {
      console.log("User logged out");
      setShowLightbox(false); // Close the lightbox
    };
    const handleSettings = () => {
      navigate("/settings");
      setShowLightbox(false); // Close the lightbox
    };
  return (
    <nav className="navbar navbar-expand-lg topNav px-3 custom-fixed-top" style={{ height: "auto" }}>
      
      {/* Logo */}
      <div className="d-flex align-items-center">
        <Logo />
      </div>

      {/* Profile Image */}
      <div className="ms-auto d-flex align-items-center">
        <Link to='post-job'>  
        <button className="outside-btn me-2">Add A Jobs</button>
        </Link>
      <div className="ms-auto d-flex align-items-center order-1 order-md-2 position-relative">
            <img
              src={profileImg}
              className="img-fluid profile rounded-circle"
              alt="profile"
              onClick={() => setShowLightbox(!showLightbox)} // Toggle the lightbox
              style={{ cursor: "pointer", width: "40px", height: "40px" }}
            />
    
            {/* Lightbox */}
            {showLightbox && (
              <div
                className="lightbox position-absolute bg-white p-4 shadow-lg rounded"
                style={{
                  top: "60px",
                  right: "10px",
                  zIndex: "10",
                  width: "200px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Link to="/">
                <button
                  className="btn btn-danger w-100 mb-3"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                  onClick={handleLogout}
                >
                  Log Out
                </button>
                </Link>
                <Link to="/Candidate/settings">
                <button
                  className="btn btn-primary w-100"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                  onClick={handleSettings}
                >
                  Settings
                </button>
                </Link>
              </div>
            )}
          </div>
      </div>
    </nav>
  );
};

export default NavBar;
