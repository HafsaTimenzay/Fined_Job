import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import '../../styles/sidebar.css'
import { Link } from "react-router-dom";
import { Nav, Navbar, InputGroup, Form, Button} from "react-bootstrap";

const SideBar = () => {
  return (
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
        <Link to='./overview'>
        <Nav.Link  className="navItem p-0 mx-0 my-2 d-flex align-items-center">
          <div className="dec"></div>
          <i className="fa-solid fa-layer-group mx-4 "></i>
          <span>Overview</span>
        </Nav.Link>
        </Link>
        <Nav.Link href="#appliedJob" className="navItem p-0 mx-0 my-2 d-flex align-items-center">
          <div className="dec"></div>
          <i className="fa-solid fa-briefcase mx-4"></i>
          <span>Applied Jobs</span>
        </Nav.Link>
        <Nav.Link href="#jobAlert" className="navItem p-0 mx-0 my-2 d-flex align-items-center">
          <div className="dec"></div>
          <i className="fa-solid fa-bell mx-4"></i>
          <span>Job Alert</span>
        </Nav.Link>
        <Nav.Link href="#settings" className="navItem p-0 mx-0 my-2 d-flex align-items-center">
          <div className="dec"></div>
          <i className="fa-solid fa-gear mx-4"></i>
          <span>Settings</span>
        </Nav.Link>

        {/* Log Out at Bottom */}
        <Nav.Link
          href="#logout"
          className="logout ps-4 mt-auto mb-3"
        >
          <i className="fa-solid fa-right-from-bracket me-3"></i>
          Log out
        </Nav.Link>
      </Nav>
    </Navbar>
    

  );
};

export default SideBar;
