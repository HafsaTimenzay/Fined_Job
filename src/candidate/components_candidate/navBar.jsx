// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../../index.css";
// import "../../styles/sidebar.css";
// import profileImg from "../../assets/images/profile.jpg";
// import Logo from "../../components/logo";
// import { Link, useNavigate } from "react-router-dom";

// const NavBar = () => {
//   const [searchParams, setSearchParams] = useState({ title: "", location: "" });
//   const navigate = useNavigate(); // For navigating programmatically

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSearchParams((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Navigate to the job alert page with state
//     navigate('/Candidate/job-alert', { state: searchParams });
//   };

//   return (
//     <nav className="navbar navbar-expand-lg topNav px-3 custom-fixed-top" style={{ height: "auto" }}>
//       {/* Logo */}
//       <div className="d-flex align-items-center">
//         <Logo />
//       </div>

//       {/* Search Bar */}
//       <form onSubmit={handleSubmit} className="search-container flex-grow-1 d-flex justify-content-center order-2 order-md-1 mt-3 mt-md-0">
//         <div className="input-group" style={{ maxWidth: "600px", width: "100%" }}>
//           <span className="input-group-text">
//             <i className="bi bi-search p-1"></i>
//           </span>
//           <input
//             type="text"
//             className="form-control p-1"
//             placeholder="Job title, Keyword..."
//             aria-label="Job title, Keyword"
//             name="title"
//             value={searchParams.title}
//             onChange={handleChange}
//           />
//           <span className="input-group-text">
//             <i className="bi bi-geo-alt p-1"></i>
//           </span>
//           <input
//             type="text"
//             className="form-control p-1"
//             placeholder="Your Location"
//             aria-label="Your Location"
//             name="location"
//             value={searchParams.location}
//             onChange={handleChange}
//           />
//           <button className="btnSearch px-3" type="submit">
//             Find Job
//           </button>
//         </div>
//       </form>

//       {/* Profile Image */}
//       <div className="ms-auto d-flex align-items-center order-1 order-md-2">
//         <Link to='settings'>
//           <img src={profileImg} className="img-fluid profile" alt="profile" />
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
import "../../styles/sidebar.css";
import profileImg from "../../assets/images/profile.jpg";
import Logo from "../../components/logo";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [searchParams, setSearchParams] = useState({ title: "", location: "" });
  const [showLightbox, setShowLightbox] = useState(false); // State for the lightbox
  const navigate = useNavigate(); // For navigating programmatically

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/Candidate/job-alert', { state: searchParams });
  };

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
      <div className="d-flex align-items-center  ">
        <Logo />
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSubmit} className="search-container flex-grow-1 d-flex justify-content-center order-2 order-md-1 mt-3 mt-md-0">
        <div className="input-group" style={{ maxWidth: "600px", width: "100%" }}>
          <span className="input-group-text">
            <i className="bi bi-search p-1"></i>
          </span>
          <input
            type="text"
            className="form-control p-1"
            placeholder="Job title, Keyword..."
            aria-label="Job title, Keyword"
            name="title"
            value={searchParams.title}
            onChange={handleChange}
          />
          <span className="input-group-text">
            <i className="bi bi-geo-alt p-1"></i>
          </span>
          <input
            type="text"
            className="form-control p-1"
            placeholder="Your Location"
            aria-label="Your Location"
            name="location"
            value={searchParams.location}
            onChange={handleChange}
          />
          <button className="btnSearch px-3" type="submit">
            Find Job
          </button>
        </div>
      </form>

      {/* Profile Image */}
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
    </nav>
  );
};

export default NavBar;
