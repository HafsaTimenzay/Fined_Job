import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import '../styles/sidebar.css'
import { Nav, Navbar} from "react-bootstrap";
import Logo from "../assets/images/logo.png"
import profileImg from "../assets/images/profile.jpg"

const navBar = () => {
  return (
    <Navbar
      expand="lg"
      className="flex-row topNav "
      style={{ height: "70px" }}
    >

      {/* Brand */}
      <Navbar.Brand href="#home" className="mx-4">
        <img src={Logo} alt="Logo" style={{ height: "30px", marginRight: "6px" }} />
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

  );
};

export default navBar;
