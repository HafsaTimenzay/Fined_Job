import React from "react";
// import SearchBar from "./searchBar";
import SideBar from "./components_candidate/SideBar";
import NavBar from "./components_candidate/navBar";
import JobList from "./content/JobList";
import Settings from "./content/settings";
import JobAlert from "./content/jobAlert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Candidate() {
  return (
    <div className="container-fluid p-0 m-0">
      <div className="row">
        {/* Aside (barre latérale) */}
        <div className="col">
          <NavBar />
        </div>

        {/* Contenu principal */}
        {/* <div className="d-flex"> */}
        {/* Sidebar with fixed width */}
          <div>
            <SideBar />

            
          </div>

        {/* Main content taking the remaining space */}
        {/* <div className="flex-grow-1">
          <main className="m-0">
            <JobList />
          </main>
        </div> */}
      {/* </div> */}

        </div>
      </div>
  );
}
