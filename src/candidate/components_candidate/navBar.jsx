import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
import "../../styles/sidebar.css";
import profileImg from "../../assets/images/profile.jpg";
import Logo from "../../components/logo";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg topNav px-3 custom-fixed-top" style={{ height: "auto" }}>
      
      {/* Logo */}
      <div className="d-flex align-items-center">
        <Logo />
      </div>

      {/* Search Bar */}
      <div className="search-container flex-grow-1 d-flex justify-content-center order-2 order-md-1 mt-3 mt-md-0">
        <div className="input-group" style={{ maxWidth: "600px", width: "100%" }}>
          <span className="input-group-text">
            <i className="bi bi-search p-1"></i>
          </span>
          <input
            type="text"
            className="form-control p-1"
            placeholder="Job title, Keyword..."
            aria-label="Job title, Keyword"
          />
          <span className="input-group-text">
            <i className="bi bi-geo-alt p-1"></i>
          </span>
          <input
            type="text"
            className="form-control p-1"
            placeholder="Your Location"
            aria-label="Your Location"
          />
          <button className="btnSearch px-3" type="button">
            Find Job
          </button>
        </div>
      </div>

      {/* Profile Image */}
      <div className="ms-auto d-flex align-items-center order-1 order-md-2">
        <a href="#profile" className="nav-link mx-3 active navItemTop">
          <img src={profileImg} className="img-fluid profile" alt="profile" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
