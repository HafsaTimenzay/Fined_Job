import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
import "../../styles/sidebar.css";
import Overview from "../content/overview";
import JobList from "../content/JobList";
import JobAlert from "../content/jobAlert";
import Settings from "../content/settings";

const SideBar = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <nav className="sideNav h-100">
        <div className="d-flex flex-column w-100 h-100">
          {/* Pages Header - Removed when the screen is small */}
          <div className="my-3 d-flex justify-content-center align-items-center d-none d-md-flex">
            <span className="text-uppercase text-muted small">
              candidate dashboard
            </span>
          </div>

          {/* Sidebar Links */}
          <ul className="navbar-nav flex-column w-100">
            <li className={`nav-item my-2 ${activeTab === "overview" ? "active" : ""}`}>
              <button
                className="btn nav-link navItem d-flex align-items-center p-0 w-100 text-start"
                onClick={() => setActiveTab("overview")}
              >
                <i className="fa-solid fa-layer-group mx-4"></i>
                <span className="d-none d-md-inline">Overview</span>
              </button>
            </li>

            <li className={`nav-item my-2 ${activeTab === "appliedJobs" ? "active" : ""}`}>
              <button
                className="btn nav-link navItem d-flex align-items-center p-0 w-100 text-start"
                onClick={() => setActiveTab("appliedJobs")}
              >
                <i className="fa-solid fa-briefcase mx-4"></i>
                <span className="d-none d-md-inline">Applied Jobs</span>
              </button>
            </li>

            <li className={`nav-item my-2 ${activeTab === "jobAlert" ? "active" : ""}`}>
              <button
                className="btn nav-link navItem d-flex align-items-center p-0 w-100 text-start"
                onClick={() => setActiveTab("jobAlert")}
              >
                <i className="fa-solid fa-bell mx-4"></i>
                <span className="d-none d-md-inline">Job Alert</span>
              </button>
            </li>

            <li className={`nav-item my-2 ${activeTab === "settings" ? "active" : ""}`}>
              <button
                className="btn nav-link navItem d-flex align-items-center p-0 w-100 text-start"
                onClick={() => setActiveTab("settings")}
              >
                <i className="fa-solid fa-gear mx-4"></i>
                <span className="d-none d-md-inline">Settings</span>
              </button>
            </li>

            {/* Log Out at Bottom */}
            <li className="nav-item mt-auto mb-3">
              <a href="#logout" className="nav-link logout ps-4">
                <i className="fa-solid fa-right-from-bracket me-3"></i>
                <span className="d-none d-md-inline">Log out</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content Area */}
      <div className="content-area p-4 w-100">
        {activeTab === "overview" && <Overview />}
        {activeTab === "appliedJobs" && <JobList />}
        {activeTab === "jobAlert" && <JobAlert />}
        {activeTab === "settings" && <Settings />}
      </div>
    </div>
  );
};

export default SideBar;
