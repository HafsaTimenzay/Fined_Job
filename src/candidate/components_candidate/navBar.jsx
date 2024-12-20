import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
import "../../styles/sidebar.css";
import logoImage from "../../assets/images/logo.png";
import profileImg from "../../assets/images/profile.jpg";
import Logo from "../../components/logo";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg topNav" style={{ height: "70px" }}>
      {/* Brand */}
      <Logo/>


      {/* Centered Search Bar */}
      <div className="d-flex flex-grow-1 justify-content-center align-items-center">
        <div className="input-group" style={{ maxWidth: "600px" }}>
          {/* Job Title Input */}
          <span className="input-group-text">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Job title, Keyword..."
            aria-label="Job title, Keyword"
          />

          {/* Location Input */}
          <span className="input-group-text">
            <i className="bi bi-geo-alt"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Your Location"
            aria-label="Your Location"
          />

          {/* Find Job Button */}
          <button className="btnSearch" type="button">
            Find Job
          </button>
        </div>
      </div>

      {/* Sidebar Links */}
      <div className="ms-auto d-flex align-items-center customNav">
        {/* <a href="#notification" className="nav-link mt-2 navItemTop">
          <i className="fa-solid fa-bell"></i>
        </a> */}
        <a href="#profile" className="nav-link mx-3 active navItemTop">
          <img src={profileImg} className="img-fluid profile" alt="profile" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
