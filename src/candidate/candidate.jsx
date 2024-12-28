import React from "react";
// import SearchBar from "./searchBar";
import SideBar from "./components_candidate/SideBar";
import NavBar from "./components_candidate/navBar";
import JobList from "./content/JobList";
import Settings from "./content/settings";
import JobAlert from "./content/jobAlert";

import { BrowserRouter  } from "react-router-dom";

export default function Candidate() {
  return (
    <div className="container-fluid p-0 m-0">
      <div className="row">
        <div>
          <NavBar />
        </div>
          <div>
          
      <SideBar />
  
          </div>

        </div>
      </div>
  );
}
