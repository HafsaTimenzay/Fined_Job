import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";


// Composant réutilisable pour le téléversement de fichiers
function FileUploader({ img, setImg, importtext }) {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg(URL.createObjectURL(file));
    }
  };

  return (
<div>
    {img ? (
      <div className="bg-dark img-container main-content">
        <img src={img} alt="Preview" width="100" />
        <button className="close-Img" onClick={() => setImg("")}>
          <i className="fi fi-rr-cross-small"></i>
        </button>
      </div>
    ) : (
      <div>
        <p>{importtext}</p>
      </div>
    )}
    <div className="mt-3">
      <input type="file" className="form-control" onChange={handleImageChange} />
    </div>
  </div>
      
    
  );
}

export default function Settings() {
  const [img, setImg] = useState("");

  const [activeTab, setActiveTab] = useState("companyInfo");
  // const [socialLinks, setSocialLinks] = useState([
  //   { platform: "Facebook", url: "" },
  //   { platform: "Twitter", url: "" },
  //   { platform: "Instagram", url: "" },
  //   { platform: "YouTube", url: "" },
  // ]);
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // const handleSocialLinkChange = (index, field, value) => {
  //   const updatedLinks = [...socialLinks];
  //   updatedLinks[index][field] = value;
  //   setSocialLinks(updatedLinks);
  // };

  // const handleAddSocialLink = () => {
  //   setSocialLinks([...socialLinks, { platform: "", url: "" }]);
  // };

  // const handleRemoveSocialLink = (index) => {
  //   const updatedLinks = socialLinks.filter((_, i) => i !== index);
  //   setSocialLinks(updatedLinks);
  // };

  const handleFinishEditing = () => {
    navigate("/Entreprise/verification");
  };


  return (
    <div className="container">
      <h5 className='m-3'>Settings</h5>
      <div className="mt-4 d-flex justify-content-center">
    <div className="card-body">
      <ul className="nav NavLine">
        <li
          className={`nav-item ${activeTab === "companyInfo" ? "NavDes" : "NavDisabled"}`}
          onClick={() => handleTabChange("companyInfo")}>
          <button
            className={`nav-link ${activeTab === "companyInfo" ? "active" : ""}`}
            onClick={() => handleTabChange("companyInfo")}

          >
            Company Info
          </button>
        </li>
        <li className={`nav-item ${activeTab === "foundingInfo" ? "NavDes" : "NavDisabled"}`}
          onClick={() => handleTabChange("foundingInfo")}>
          <button
            className={`nav-link ${activeTab === "foundingInfo" ? "active" : ""}`}
            onClick={() => handleTabChange("foundingInfo")}
          >
            Founding Info
          </button>
        </li>
        <li className={`nav-item ${activeTab === "socialMediaProfile" ? "NavDes" : "NavDisabled"}`}
          onClick={() => handleTabChange("socialMediaProfile")}>
          <button
            className={`nav-link ${activeTab === "socialMediaProfile" ? "active" : ""}`}
            onClick={() => handleTabChange("socialMediaProfile")}
          >
            Social Media Profile
          </button>
        </li>
      </ul>

      <div className="tab-content mt-4">
        {activeTab === "companyInfo" && (
          <div>
            <h6 className="my-4" >Company Information</h6>
            <form>
              {/* Company Info Form */}
              <div className="mb-3">
                <div className="row g-3">
                  <div className="col-md-3">
                    <label className="form-label">Logo</label>

                    <div className="border p-3 text-center rounded h-75">
                      <label htmlFor="logoUpload" className="form-label">
                        <strong>Upload Logo</strong>
                      </label>
                      <input type="file" className="form-control" id="logoUpload" />
                      <small className="text-muted d-block mt-2">
                        Max size: 5MB | JPG, PNG
                      </small>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="mb-3">
                      <label htmlFor="companyName" className="form-label">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="form-control w-75"
                        id="companyName"
                        placeholder="Enter company name"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="aboutUs" className="form-label">
                        About Us
                      </label>
                      <textarea
                        className="form-control"
                        id="aboutUs"
                        rows="4"
                        placeholder="Write about your company here..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>


              <button
                  type="button"
                  className="blue-btn"
                  
                >
                  Save Updates
                </button>
            </form>
          </div>
        )}

        {activeTab === "foundingInfo" && (
          <div>
            <h6 className="my-4">Founding Info</h6>
            <form>
              {/* Founding Info Form */}
              <div className="mb-3">
                <div className="row g-3">
                  <div className="col-md-4">
                    <label htmlFor="OrganizationType" className="form-label">Organization Type</label>
                    <input
                      type="text"
                      className="form-control"
                      id="OrganizationType"
                      placeholder="Select..."
                    />
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="IndustryType" className="form-label">
                        Industry Type
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="IndustryType"
                        placeholder="Select..."
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="TeamSize" className="form-label">
                        Team Size
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="TeamSize"
                        placeholder="Select..."
                      />
                    </div>
                  </div>
                </div>

                <div className="row g-3">
                  <div className="col-md-4">
                    <label htmlFor="YearEstablishment" className="form-label">Year Of Establishment</label>
                    <input
                      type="date"
                      className="form-control"
                      id="YearEstablishment"
                    />
                  </div>

                </div>

                <div className="row g-3 mt-1">
                  <div className="col-md-12">
                    <label htmlFor="CompanyVersion" className="form-label">Company Version</label>
                    <textarea
                      className="form-control"
                      id="CompanyVersion"
                      rows="4"
                      placeholder="Tell us about your company version..."
                    ></textarea>
                  </div>
                </div>
              </div>
              {/* (Form Elements) */}
                <button
                  type="button"
                  className="blue-btn"
                >
                  Save Updates
                </button>
            </form>
          </div>
        )}

        {activeTab === "socialMediaProfile" && (
          <div>
            <h6>Social Media Profile</h6>
            <form>
              {/* Social Media Profile Form */}
              <div className="row g-3">
                  <div className="col-md-4">
                    <label htmlFor="Website" className="form-label">Company Website</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Website"
                      placeholder="Website url..."
                    />
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label htmlFor="LinkedIn" className="form-label">
                        Company LinkedIn 
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="LinkedIn"
                        placeholder="LinkedIn url..."
                      />
                    </div>
                  </div>
                </div>
              {/* (Form Elements) */}
                <button
                  type="button"
                  className="blue-btn"
                >
                  Save Updates
                </button>
            </form>
          </div>
        )}
      </div>
    </div>
  </div>
    </div>
  );
}
