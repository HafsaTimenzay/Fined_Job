import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./Authentification/Home";
import SignUp from "./Authentification/Signup";
import Login from "./Authentification/Login";
import './styles/home.css';
import Candidate from "./candidate/candidate";
import JobAlert from "./candidate/content/jobAlert";
import JobList from "./candidate/content/JobList";
import JobSave from "./candidate/content/jobSave";
import Settings from "./candidate/content/settings";
import SignIn from './enreprise/components_entreprise/Sigin'
import VerficationPage from './enreprise/components_entreprise/verificationPage'
import Enreprise from './enreprise/enreprise'


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route principale */}
        <Route path="/" element={
          <div className="home">
            <Navbar />
            <Home />
          </div>
        } />

        {/* Routes d'authentification */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* Route pour le candidat */}
        <Route path="/Candidate" element={<Candidate />}>
          {/* Routes imbriquées pour le candidat */}
          <Route index element={<JobAlert />} />
          <Route path="job-alert" element={<JobAlert />} />
          <Route path="applied-jobs" element={<JobList />} />
          <Route path="saved-jobs" element={<JobSave />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/Enreprise/SignIn" element={<SignIn />} />
        <Route path="/Enreprise/verification" element={<VerficationPage />} />
        <Route path="/Enreprise" element={<Enreprise />} />
      </Routes>
    </Router>
  );
};

export default App;
