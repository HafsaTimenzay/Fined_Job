import React from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/entreprise.css'

const VerificationPage = () => {
  const navigate = useNavigate();

  const handleVerification = () => {
    // Logique de vérification réussie
    navigate("/Enreprise");
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      
        <div className="d-flex justify-content-center align-items-center mb-4 icon">
        <i className="fi fi-rr-check-double"></i>
        </div>
        <h3>🎉Congratulation, You profile is 100% complete!</h3>
        <p className="text-muted text-center">Your information is being verified...</p>
        {/* <p className="text-muted text-center">Your compte is verified, Welcome to JobMate</p> */}
        <div>
          <button className="white-btn me-2" onClick={handleVerification}>
            View Dashboard
          </button>
          <button className="blue-btn ms-2" onClick={handleVerification}>
            Post Job
            <i className="fi fi-rr-arrow-right mx-2 justify-content-center"></i>
          </button>
        </div>
      </div>
  
  );
};

export default VerificationPage;
