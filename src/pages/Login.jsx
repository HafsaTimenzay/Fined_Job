import React, { useState } from 'react'
import LoginImage from '../assets/images/login.jpeg';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/images/logo.png';

const Login = () => {
  const [accountType, setAccountType] = useState('Candidate');  // Default to Candidate

  const handleAccountTypeChange = (type) => {
    setAccountType(type);
  };

  return (
<Container fluid className="full-height">
  <Row className="w-100">
    {/* Partie gauche : formulaire */}
    <Col md={6} className="form-container bg-white d-flex justify-content-center align-items-center">
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

      <h2 >Sign in to your account.</h2>
      <p>
      Don't have an account yet? <a href="/login" className='login'>Sign Up</a>
      </p>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Check
          type="checkbox"
          label="Remember me"
          className="mb-3"
        />
        <Button variant="primary" type="submit" className="w-100 mb-3">
          Log In
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

export default Login
