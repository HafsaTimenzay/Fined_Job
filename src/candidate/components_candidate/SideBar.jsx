import React from "react";
import { NavLink, Outlet } from "react-router-dom";  // Ajout de Outlet pour afficher les sous-routes
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
import "../../styles/sidebar.css";
import JobAlert from "../content/jobAlert";
import JobList from "../content/JobList";
import JobSave from "../content/jobSave";
import Settings from "../content/settings";

const SideBar = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <nav className="sideNav h-100">
        <div className="d-flex flex-column w-100 h-100">
          {/* Header de la page */}
          <div className="my-3 d-flex justify-content-center align-items-center d-none d-md-flex">
            <span className="text-uppercase text-muted small">
              Candidate Dashboard
            </span>
          </div>

          {/* Liens de la sidebar */}
          <ul className="navbar-nav flex-column w-100">
            <li className="nav-item my-2">
              <NavLink
                to="/Candidate/job-alert"
                className={({ isActive }) =>
                  `btn nav-link navItem d-flex align-items-center px-0 m-0 py-2 w-100 text-start ${isActive ? "active" : ""}`
                }
              >
                <i className="fi fi-rs-bell mx-4"></i>
                <span className="d-none d-md-inline">Job Alert</span>
              </NavLink>
            </li>

            <li className="nav-item my-2">
              <NavLink
                to="/Candidate/applied-jobs"
                className={({ isActive }) =>
                  `btn nav-link navItem d-flex align-items-center px-0 m-0 py-2 w-100 text-start ${isActive ? "active" : ""}`
                }
              >
                <i className="fi fi-rr-briefcase mx-4"></i>
                <span className="d-none d-md-inline">Applied Jobs</span>
              </NavLink>
            </li>

            <li className="nav-item my-2">
              <NavLink
                to="/Candidate/saved-jobs"
                className={({ isActive }) =>
                  `btn nav-link navItem d-flex align-items-center py-2 px-0 m-0 w-100 text-start ${isActive ? "active" : ""}`
                }
              >
                <i className="fi fi-rr-bookmark mx-4"></i>
                <span className="d-none d-md-inline">Save Jobs</span>
              </NavLink>
            </li>

            <li className="nav-item my-2">
              <NavLink
                to="/Candidate/settings"
                className={({ isActive }) =>
                  `btn nav-link navItem d-flex align-items-center px-0 m-0 py-2 w-100 text-start ${isActive ? "active" : ""}`
                }
              >
                <i className="fi fi-rr-settings mx-4"></i>
                <span className="d-none d-md-inline">Settings</span>
              </NavLink>
            </li>

            {/* Déconnexion en bas */}
            <li className="nav-item mt-5 pt-5">
              <NavLink to="/" className="nav-link logout ps-4 text-muted navItem">
                <i className="fi fi-ss-sign-out-alt me-3"></i>
                <span className="d-none d-md-inline">Log out</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Zone de contenu */}
      <div className="content-area p-4 w-100">
        <Outlet /> {/* C'est ici que les sous-routes seront rendues */}
      </div>
    </div>
  );
};

export default SideBar;
