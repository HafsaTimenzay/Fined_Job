import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/navbar.css';
import Logo from "./logo";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-white">
      <div className="container-fluid container px-3 d-flex justify-content-between align-items-center">
        <Logo />
        
        <div className="d-flex">
          <button className="btn btn-primary me-3 btnSin">
            <Link to="/signup" className="signup text-white text-decoration-none">
              Sign Up
            </Link>
          </button>
          <button className="btnLog">
            <Link to="/login" className="login text-decoration-none">
              Login
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
