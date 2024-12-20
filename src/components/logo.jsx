import React from "react";
import logoImage from "../assets/images/logo.png"

const Logo = () => {
    return (
      <div className="navbar-brand ms-4 d-flex align-items-center">
      <img src={logoImage} alt="Logo" style={{ height: "35px", marginRight: "10px" }} />
    <span className="fw-bold fs-5" style={{ color: "#000" }}>
                    JobMate
                  </span>
    </div>
    // <div className="d-flex align-items-center mb-5">
    //               <img
    //                 src={logoImage}
    //                 alt="JobMate Logo"
    //                 style={{ width: "35px", height: "35px" }}
    //                 className="me-2"
    //               />
                  
    //             </div>
    

    )
}

export default Logo