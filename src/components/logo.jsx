import React from "react";
import logoImage from "../assets/images/logo.png"

const Logo = () => {
    return (
        <div className="navbar-brand">
          <img src={logoImage} alt="Logo" style={{ height: "30px", marginRight: "6px" }} />
          {/* <Link to='/Home' style={{ textDecoration: "none", color: "inherit" }}> */}
            <span> <b>JobMate</b></span>
          {/* </Link> */}
        </div>

    )
}

export default Logo