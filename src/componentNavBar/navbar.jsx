import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../images/Logo1.png";
import '../style/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
      <div className="container-fluid container px-3">
        <div className="navbar-brand">
          <img src={Logo} alt="Logo" style={{ height: "30px", marginRight: "6px" }} />
          <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>
            <span> <b>Jobpilot</b></span>
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item signup me-3">
              <Link to="/signup" className="signup" >
                Sign Up
              </Link>
            </li>
            <li className="nav-item login">
              <Link to="/login" className="login" >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
