import React, { useState } from 'react';
import LoginImage from '../assets/images/login.jpeg';
import Logo from '../components/logo';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [accountType, setAccountType] = useState('Candidate'); // Default to Candidate

  const handleAccountTypeChange = (type) => {
    setAccountType(type);
  };

  return (
    <div className="container-fluid full-height m-0 p-0">
      <div className="row w-100 m-0 p-0">
        {/* Partie gauche : formulaire */}
        <div className="col-md-6 form-container bg-white p-3">
          <Logo />

          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container w-75">

              <h2>Create account.</h2>
              <p>
                Already have an account?{" "}
                <Link to="/login" className="login">Log In</Link>
              </p>
              {/* <div className="d-flex mb-4 p-2 rounded">
              <span >Create account as</span>
              
            </div> */}
              <div className="d-flex flex-column align-items-center mb-4 p-2 rounded bg-light">
                <p className="text-secondary fw-bold">CREATE ACCOUNT AS A</p>
                <div className="btn-group w-100" role="group">
                  <button
                    className={`btn ${accountType === "Candidate" ? "btn-primary" : "btn-light"} me-2 w-50 rounded`}
                    onClick={() => handleAccountTypeChange("Candidate")}
                  >
                    <i className="fa-regular fa-circle-user me-2"></i>
                    Candidate
                  </button>
                  <button
                    className={`btn ${accountType === "Enreprise" ? "btn-primary" : "btn-light"} w-50 rounded`}
                    onClick={() => handleAccountTypeChange("Enreprise")}
                  >
                    <i className="fa-regular fa-building me-2"></i>
                    Enreprise
                  </button>
                </div>
              </div>

              <form>
                <div className="mb-3 d-flex">
                  <input
                    className="form-control w-50 me-2"
                    type="text"
                    placeholder="First Name"
                  />
                  <input
                    className="form-control w-50"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="termsCheck"
                  />
                  <label className="form-check-label" htmlFor="termsCheck">
                    I’ve read and agree with your Terms of Services
                  </label>
                </div>
                <Link to={`${accountType==="Candidate" ? "/Candidate" :"/Enreprise/SignIn"} `} className="btn btn-primary w-100 mb-3">
                  Create Account
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </Link>
              </form>
            </div>
          </div>
        </div>

        {/* Partie droite : image */}
        <div className="col-md-6 image-container p-0 m-0">
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

export default Signup;
