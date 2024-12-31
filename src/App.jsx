import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./Authentification/Home";
import SignUp from "./Authentification/SignUp";
import Login from "./Authentification/Login";
import './styles/home.css'
import Candidate from "./candidate/candidate";
import Enreprise from "./enreprise/components_entreprise/enreprise";
import VerficationPage from "./enreprise/components_entreprise/Sigin"
import Overview from  "./candidate/components_candidate/SideBar"
import AppliedJob from  "./candidate/components_candidate/SideBar"

const App = () => {
  return (
    <Router>  
      <Routes>
      <Route path="/" element={
        <div className="home">
        <Navbar />
       <Home />
        </div>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Candidate" element={<Candidate />}></Route>
        <Route path="/Enreprise" element={<Enreprise />}>
          <Routes>
                <Route path="/SignUp" element={<EntrepriseSinUp />} />
                <Route path="/verfication Page" element={<VerficationPage />} />
              </Routes>
        </Route>

        {/* <Route path="/Candidate" element={<Candidate 
        <Route path="/Candidate/appliedJob" element={<AppliedJob />} />
        
        />} /> */}


      </Routes>
    </Router>
  );
};

export default App;
