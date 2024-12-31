import React, { useState } from 'react';
import LoginImage from '../assets/images/login.jpeg';
import Logo from '../components/logo';
import { Link } from 'react-router-dom';

const Login = () => {
  const [accountType, setAccountType] = useState('Candidate'); // Default to Candidate

  const handleAccountTypeChange = (type) => {
    setAccountType(type);
  };

  return (
    <div className="container-fluid full-height m-0 p-0">
      <div className="row w-100 m-0 p-0">
        
        {/* Left Side: Form */}
        <div className="col-md-6 form-container bg-white p-3">
        <Logo />
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="container w-75">

            <h2>Sign in to your account.</h2>
            <p>
              Don't have an account yet?{" "}
              <Link to="/signup" className="login">Sign Up</Link>
            </p>
            <form>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" placeholder="Password" />
              </div>
              <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
              </div>
              <Link to="/Candidate" className="btn btn-primary w-100 mb-3">
                Log In
                <i className="fa-solid fa-arrow-right ms-2"></i>
              </Link>
            </form>
          </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="col-md-6 image-container p-0">
          <img
            src={LoginImage}
            alt="Jobpilot"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
