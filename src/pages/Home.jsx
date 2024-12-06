import React from "react";
import HomImage from "../images/HomeIma.png";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h3>
            Find a job or internship that matches your passion and expertise.
          </h3>
          <p>
            Explore countless opportunities tailored to your goals. Build your
            future today with ease and confidence.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img src={HomImage} alt="Home" className="img-fluid" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-3 col-12 mb-3">
          <div className="bg-white border shadow p-3 text-center">
            <div className="d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-briefcase" style={{ color: 'blue', fontSize: '30px' }}></i>
              <div className="ms-2">
                <h5>7,532</h5>
                <p>Live Jobs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-12 mb-3">
          <div className="bg-white border shadow p-3 text-center">
            <div className="d-flex justify-content-center align-items-center">
              <i className="fa-regular fa-building" style={{color: 'blue', fontSize: '30px' }}></i>
              <div className="ms-2">
                <h5>1,75,324</h5>
                <p>Companies</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-12 mb-3">
          <div className="bg-white border shadow p-3 text-center">
            <div className="d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-users" style={{ color: 'blue', fontSize: '30px' }}></i>
              <div className="ms-2">
                <h5>97,354</h5>
                <p>Candidates</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-12 mb-3">
          <div className="bg-white border shadow p-3 text-center">
            <div className="d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-briefcase" style={{ color: 'blue',fontSize: '30px' }}></i>
              <div className="ms-2">
                <h5>38,47,154</h5>
                <p>New jobs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
