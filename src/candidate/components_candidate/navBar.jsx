import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
import "../../styles/sidebar.css";
import profileImg from "../../assets/images/profile.jpg";
import Logo from "../../components/logo";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [searchParams, setSearchParams] = useState({ title: "", location: "" });
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
    // Navigate to the job alert page with state
    navigate('/Candidate/job-alert', { state: searchParams });
  };

  return (
    <nav className="navbar navbar-expand-lg topNav px-3 custom-fixed-top" style={{ height: "auto" }}>
      {/* Logo */}
      <div className="d-flex align-items-center">
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
      <div className="ms-auto d-flex align-items-center order-1 order-md-2">
        <Link to='settings'>
          <img src={profileImg} className="img-fluid profile" alt="profile" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
