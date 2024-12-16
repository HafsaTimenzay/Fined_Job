import React from "react";
// import SearchBar from "./searchBar";
import SideBar from "./SideBar";
import NavBar from "./navBar";
import JobList from "./JobList";


export default function Candidate() {
  return (
    <div className="container p-0 m-0">
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

            <main className="p-4">
              <JobList />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
