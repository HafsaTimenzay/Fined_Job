import React from "react";
// import SearchBar from "./searchBar";
import SideBar from "./components_candidate/SideBar";
import NavBar from "./components_candidate/navBar";
import JobList from "./content/JobList";
import Settings from "./content/settings";


export default function Candidate() {
  return (
    <div className="container-fluid p-0 m-0">
      <div className="row">
        {/* Aside (barre latérale) */}
        <div className="col">
          <NavBar />
        </div>

        {/* Contenu principal */}
        <div className="row">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">

            <main className="">
              <Settings />

            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
