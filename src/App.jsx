// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState } from 'react';
// import { Button, Form, Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import LoginImage from './assets/images/Login.jpeg';
// import logo from './assets/images/logo.png';
// import './index.css';
// import Signup from './components/Signup'
// import Login from './components/Login'
// import Aside from './components/aside'


// const App = () => {


//   return (
//     // <Signup />
//     // <Login /> 
//     <Aside />

//   );
// };

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import './styles/home.css'

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
