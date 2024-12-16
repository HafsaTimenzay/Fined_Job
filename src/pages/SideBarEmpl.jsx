import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import '../styles/sidebar.css'
import { Link } from "react-router-dom";
import { Nav, Navbar, Accordion} from "react-bootstrap";
import logo from "../assets/images/Logo.png"
import profileImg from "../assets/images/profile.jpg"

const SideBarEmpl = () => {
  return (
    <>

    <Navbar
      expand="lg"
      className="flex-row topNav "
      style={{ height: "70px" }}
    >

      {/* Brand */}
      <Navbar.Brand href="#home" className="mx-4">
        <img src={logo} alt="Logo" style={{ height: "30px", marginRight: "6px" }} />
        <span> <b>JobMate</b></span>
          
      </Navbar.Brand>

      {/* Sidebar Links */}
      <Nav defaultActiveKey="/home" className="ms-auto flex-row customNav">
        {/* Example Page Links */}
        <Nav.Link href="#notification" className="mt-2 navItemTop">
          <i className="fa-solid fa-bell "></i>
        </Nav.Link>
        <Nav.Link href="#profile" className="mx-3">
          <img
            src={profileImg}
            class="img-fluid profile"
            alt="profile"
          
          />
          
          {/* <i className="fa-regular fa-circle-user " style={{fontSize : '35px'}}></i> */}
        </Nav.Link>
        

      </Nav>
    </Navbar>
    <Navbar
      expand="lg"
      className="flex-column sideNav"

    >
      {/* Sidebar Links */}
      <Nav defaultActiveKey="/home" className="flex-column w-100 h-100">
        {/* Pages Header */}
        <Nav.Item className="my-3 d-flex justify-content-center align-items-center">
          <span className="text-uppercase text-muted small">
            candidate dashboard
          </span>
        </Nav.Item>

        {/* Example Page Links */}
        
        <Nav.Link href="#overview" className="navItem ps-4">
          <div className="dec"></div>
          <i className="fa-solid fa-layer-group me-3"></i>
          <span>Overview</span>
        </Nav.Link>
        <Nav.Link href="#appliedJob" className="navItem ps-4">
          <i className="fa-solid fa-briefcase me-3"></i>
          Applied Jobs
        </Nav.Link>
        <Nav.Link href="#jobAlert" className="navItem ps-4">
          <i className="fa-solid fa-bell me-3"></i>
          Job Alert
        </Nav.Link>
        <Nav.Link href="#settings" className="navItem ps-4">
          <i className="fa-solid fa-gear me-3"></i>
          Settings
        </Nav.Link>

        {/* Log Out at Bottom */}
        <Nav.Link
          href="#logout"
          className="navItem ps-4 mt-auto mb-3"
        >
          <i className="fa-solid fa-right-from-bracket me-3"></i>
          Log out
        </Nav.Link>
      </Nav>
    </Navbar>
    </>

  );
};

export default SideBarEmpl;
