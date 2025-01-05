import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginImage from "../assets/images/login.jpeg";
import Logo from "../components/logo";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "Candidate", // Default to Candidate
  });

  const [error, setError] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle account type selection
  const handleAccountTypeChange = (type) => {
    setFormData({ ...formData, accountType: type });
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          role: formData.accountType === "Candidate" ? "CANDIDATE" : "RECRUITER",
        }),
      });

      if (response.ok) {
        if (formData.accountType === "Candidate") {
          window.location.href = "/Candidate/overview";
        } else {
          window.location.href = "/Entreprise/SignIn";
        }
      } else {
         window.location.href = "/login";
         alert("You are successfully registered! Please log in.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container-fluid full-height m-0 p-0">
      <div className="row w-100 m-0 p-0">
        {/* Left side: Form */}
        <div className="col-md-6 form-container bg-white p-3">
          <Logo />
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container w-75">
              <h2>Create account.</h2>
              <p>
                Already have an account?{" "}
                <Link to="/login" className="login">
                  Log In
                </Link>
              </p>
              <div className="d-flex flex-column align-items-center mb-4 p-2 rounded bg-light">
                <p className="text-secondary fw-bold">CREATE ACCOUNT AS A</p>
                <div className="btn-group w-100" role="group">
                  <button
                    className={`btn ${
                      formData.accountType === "Candidate" ? "btn-primary" : "btn-light"
                    } me-2 w-50 rounded`}
                    onClick={() => handleAccountTypeChange("Candidate")}
                  >
                    <i className="fa-regular fa-circle-user me-2"></i>
                    Candidate
                  </button>
                  <button
                    className={`btn ${
                      formData.accountType === "Entreprise" ? "btn-primary" : "btn-light"
                    } w-50 rounded`}
                    onClick={() => handleAccountTypeChange("Entreprise")}
                  >
                    <i className="fa-regular fa-building me-2"></i>
                    Entreprise
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3 d-flex">
                  <input
                    className="form-control w-50 me-2"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  <input
                    className="form-control w-50"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
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
                {error && <p className="text-danger">{error}</p>}
                <button type="submit" className="btn btn-primary w-100 mb-3">
                  Create Account
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Right side: Image */}
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
