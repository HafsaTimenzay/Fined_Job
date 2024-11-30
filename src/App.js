import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componentNavBar/navbar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
