import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componentNavBar/navbar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import './style/home.css'

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
      </Routes>
    </Router>
  );
};

export default App;
