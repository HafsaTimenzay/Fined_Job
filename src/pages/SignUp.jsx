import React, { useState } from 'react'
import LoginImage from '../assets/images/login.jpeg';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/images/logo.png';

const Signup = () => {
  const [accountType, setAccountType] = useState('Candidate');  // Default to Candidate

  const handleAccountTypeChange = (type) => {
    setAccountType(type);
  };

  return (
<Container fluid className="full-height">
  <Row className="w-100">
    {/* Partie gauche : formulaire */}
    <Col md={6} className="form-container bg-white p-3">
      <div className="container w-75">
      <div className="d-flex align-items-center mb-5">
        <img
          src={logo} // Remplacez par le chemin de votre logo
          alt="JobMate Logo"
          style={{ width: "35px", height: "35px" }}
          className="me-2"
        />
        <span className="fw-bold fs-5" style={{ color: "#000" }}>
          JobMate
        </span>
      </div>

      <h2 >Create account.</h2>
      <p>
        Already have an account? <a href="/login" className='login'>Log In</a>
      </p>
      <div className="d-flex mb-4 p-2 rounded">
        <Button
          variant={accountType === "Candidate" ? "primary" : "secondary"}
          onClick={() => handleAccountTypeChange("Candidate")}
          className="me-2 w-50"
        >
          <i className="fa-regular fa-circle-user me-2"></i>
          Candidate
        </Button>
        <Button
          variant={accountType === "Employer" ? "primary" : "secondary"}
          onClick={() => handleAccountTypeChange("Employer")}
          className="w-50"
        >
          <i className="fa-regular fa-building me-2"></i>
          Employer
        </Button>
      </div>
      <Form>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            className="w-50 me-2"
            type="text"
            placeholder="First Name"
          />
          <Form.Control className="w-50" type="text" placeholder="Last Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Form.Check
          type="checkbox"
          label="I’ve read and agree with your Terms of Services"
          className="mb-3"
        />
        <Button variant="primary" type="submit" className="w-100 mb-3">
          Create Account
          <i class="fa-solid fa-arrow-right ms-2"></i>
        </Button>
      </Form>
      </div>
    </Col>

    {/* Partie droite : image */}
    <Col md={6} className="image-container m-0 p-0">
      <img
        src={LoginImage}
        alt="Jobpilot"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </Col>
  </Row>
</Container>
      )
}

export default Signup
