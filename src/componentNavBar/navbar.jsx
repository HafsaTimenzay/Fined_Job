import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../images/Logo1.png";
import '../navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
      <div className="container-fluid container px-3">
        <div className="navbar-brand">
          <img src={Logo} alt="Logo" style={{ height: "30px", marginRight: "6px" }} />
          <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>
            <span> <b>JobMate</b></span>
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
            <li className="nav-item">
              <Link to="/signup" className="nav-link text-primary btn border border-primary p-2 me-3 rounded" aria-label="Sign up">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link btn btn-primary text-white p-2 rounded" aria-label="Login">
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
