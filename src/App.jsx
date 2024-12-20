import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./Authentification/Home";
import SignUp from "./Authentification/SignUp";
import Login from "./Authentification/Login";
import './styles/home.css'
import Candidate from "./candidate/candidate";
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
        /* <Route path="/Candidate" element={<Candidate />}></Route>

        {/* <Route path="/Candidate" element={<Candidate 
        <Route path="/Candidate/appliedJob" element={<AppliedJob />} />
        
        />} /> */}


      </Routes>
    </Router>
  );
};

export default App;
