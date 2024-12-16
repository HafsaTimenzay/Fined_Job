import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/navbar.css';
import Logo from "./logo";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid container px-3">
        {/* <div className="navbar-brand">
          <img src={Logo} alt="Logo" style={{ height: "30px", marginRight: "6px" }} />
          <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>
            <span> <b>JobMate</b></span>
          </Link>
        </div> */}
        <Logo />
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
          <ul className="navbar-nav ms-auto ">
            <button className="btn btn-primary nav-item signup me-3">
              <Link to="/signup" className="signup text-white text-decoration-none" >
                Sign Up
              </Link>
            </button>
            <button className="btn btn-outline-primary text-primary nav-item login text-decoration-none">
              <Link to="/login" className="login" >
                Login
              </Link>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
