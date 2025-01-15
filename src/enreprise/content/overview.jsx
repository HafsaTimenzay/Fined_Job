import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/candidate.css";
import JobList from "./myJobs";
import { Link} from "react-router-dom";


const Overview = () => {
  const candidate = 
    {
      id: 1,
      firstName : "Howard",
      lastName : "Esther"
    }
  
  const jobs = [
    {
      id: 1,
      title: "Networking Engineer",
      location: "Remote",
      salary: "$50k-$80k/month",
      dateApplied: "Feb 2, 2019 19:28",
      status: "Active",
      logo: "https://via.placeholder.com/30",
    },
    {
      id: 2,
      title: "Product Designer",
      location: "Full Time",
      salary: "$50k-$80k/month",
      dateApplied: "Dec 7, 2019 23:26",
      status: "Active",
      logo: "https://via.placeholder.com/30",
    },
    {
      id: 3,
      title: "Junior Graphic Designer",
      location: "Temporary",
      salary: "$50k-$80k/month",
      dateApplied: "Jan 10, 2020 10:15",
      status: "Inactive",
      logo: "https://via.placeholder.com/30",
    },
  ];

  return (
    <div className="container-fluid main-content" style={{ height: "1000px" }}>
      {/* Main Content */}
      <main className="col-md p-4">
        {/* Overview Section */}
        <section className="mb-4">
          <h4>Hello there!</h4>
          <p>Here is your daily activities and job alerts</p>
          <div className="container my-5">
      <div className="row">
        <div className="col-md-4">
          <div
            className="card text-center shadow-sm p-2 my-2"
            style={{ backgroundColor: "#EAF3FF", border: "none", borderRadius: "10px" }}
          >
            <div className="card-body">
                <div className="row">
                    <div className="col"> 
              <h5 className="card-title mb-1">589</h5>
              <p className="card-text text-muted">Open Jobs</p>
              </div>
              <div className="col"> 
                
              <i className="fas fa-briefcase fa-2x text-primary bg-white p-3 border border-white rounded-2"></i>

              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card text-center shadow-sm p-2 my-2"
            style={{ backgroundColor: "#FFF7E6", border: "none", borderRadius: "10px" }}
          >
            <div className="card-body">
            <div className="row">
            <div className="col"> 
              <h5 className="card-title mb-1">238</h5>
              <p className="card-text text-muted">Saved Candidates</p>
              </div>
              <div className="col">
              <i className="fas fa-id-card fa-2x text-warning bg-white p-3 border border-white rounded-2"></i>

              </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

          
        </section>

        {/* Recently Applied Jobs */}
        <section>
      
          <JobList/>
        </section>
      </main>
    </div>
  );
};

export default Overview;
