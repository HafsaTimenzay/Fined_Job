import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
import "../../styles/sidebar.css";
import { Link } from "react-router-dom";
import Overview from "../content/overview";
import JobList from "../content/myJobs";
import PostJob from "../content/PostJob";
import JobSave from "../content/candidateSaved";
import Settings from "../content/settings";
import Home from "../../Authentification/Home";
import MyJobs from "../content/myJobs"
import SavedCandidate from "../content/candidateSaved"

const SideBar = () => {
  const [activeTab, setActiveTab] = useState("postJob");

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <nav className="sideNav h-100">
        <div className="d-flex flex-column w-100 h-100">
          {/* Pages Header - Removed when the screen is small */}
          <div className="my-3 d-flex justify-content-center align-items-center d-none d-md-flex">
            <span className="text-uppercase text-muted small">
              company dashboard
            </span>
          </div>

          {/* Sidebar Links */}
          <ul className="navbar-nav flex-column w-100">
            {/* <li className={`nav-item my-2 ${activeTab === "overview" ? "active" : ""}`}>
              <button
                className="btn nav-link navItem d-flex align-items-center px-0 m-0 py-2 w-100 text-start"
                onClick={() => setActiveTab("overview")}
              >
                <i className="fi fi-rr-layers mx-4"></i>
                <span className="d-none d-md-inline">Overview</span>
              </button>
            </li> */}

            <li className={`nav-item my-2 ${activeTab === "postJob" ? "active" : ""}`}>
              <button
                className="btn nav-link navItem d-flex align-items-center px-0 m-0 py-2 w-100 text-start"
                onClick={() => setActiveTab("postJob")}
              >
                <i className="fi fi-rr-add mx-4"></i>
                <span className="d-none d-md-inline">Post a Job</span>
              </button>
            </li>

            <li className={`nav-item my-2 ${activeTab === "myJobs" ? "active" : ""}`}>
              <button
                className="btn nav-link navItem d-flex align-items-center px-0 m-0 py-2 w-100 text-start"
                onClick={() => setActiveTab("myJobs")}
              >
                <i className="fi fi-rr-briefcase mx-4"></i>
                <span className="d-none d-md-inline">My Jobs</span>
              </button>
            </li>

          
            <li className={`nav-item my-2 ${activeTab === "savedCandidate" ? "active" : ""}`}>
              <button
                className="btn nav-link navItem d-flex align-items-center py-2 px-0 m-0 w-100 text-start"
                onClick={() => setActiveTab("savedCandidate")}
              >
                <i className="fi fi-rr-bookmark mx-4"></i>
                <span className="d-none d-md-inline">Saved Candidate</span>
              </button>
            </li>

            <li className={`nav-item my-2 ${activeTab === "settings" ? "active" : ""}`}>
              <button
                className="btn nav-link navItem d-flex align-items-center px-0 m-0 py-2 w-100 text-start"
                onClick={() => setActiveTab("settings")}
              >
                <i className="fi fi-rr-settings mx-4"></i>
                <span className="d-none d-md-inline">Settings</span>
              </button>
            </li>

            {/* Log Out at Bottom */}
            <li className="nav-item mt-5 pt-5 ">
              <a className="nav-link logout ps-4 text-muted navItem">
                <i className="fi fi-ss-sign-out-alt me-3"></i>
                <Link to="/" className="login">  {/* Change to "/" for the homepage */}
                  <span className="d-none d-md-inline">Log out</span>
                </Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content Area */}
      <div className="content-area p-4 w-100">
        {activeTab === "postJob" && <PostJob />}
        {/* {activeTab === "overview" && <Overview />} */}
        {activeTab === "myJobs" && <MyJobs />}
        {activeTab === "savedCandidate" && <SavedCandidate />}
        {activeTab === "settings" && <Settings />}
      </div>
    </div>
  );
};

export default SideBar;
