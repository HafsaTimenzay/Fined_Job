import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const MultiStepForm = () => {
  const [activeTab, setActiveTab] = useState("companyInfo");
  const [socialLinks, setSocialLinks] = useState([
    { platform: "Facebook", url: "" },
    { platform: "Twitter", url: "" },
    { platform: "Instagram", url: "" },
    { platform: "YouTube", url: "" },
  ]);
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSocialLinkChange = (index, field, value) => {
    const updatedLinks = [...socialLinks];
    updatedLinks[index][field] = value;
    setSocialLinks(updatedLinks);
  };

  const handleAddSocialLink = () => {
    setSocialLinks([...socialLinks, { platform: "", url: "" }]);
  };

  const handleRemoveSocialLink = (index) => {
    const updatedLinks = socialLinks.filter((_, i) => i !== index);
    setSocialLinks(updatedLinks);
  };

  const handleFinishEditing = () => {
    navigate("/final-page");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title text-primary">Setup Progress</h5>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "companyInfo" ? "active" : ""}`}
                onClick={() => handleTabChange("companyInfo")}
              >
                Company Info
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "foundingInfo" ? "active" : ""}`}
                onClick={() => handleTabChange("foundingInfo")}
              >
                Founding Info
              </button>
            </li>
            <li className="nav-item">
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
                <h6>Company Info</h6>
                <form>
                  {/* Company Info Form */}
                  <div className="mb-3">
                    <label className="form-label">Logo & Banner Image</label>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="border p-3 text-center rounded">
                          <label htmlFor="logoUpload" className="form-label">
                            <strong>Upload Logo</strong>
                          </label>
                          <input type="file" className="form-control" id="logoUpload" />
                          <small className="text-muted d-block mt-2">
                            Max size: 5MB | JPG, PNG
                          </small>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="border p-3 text-center rounded">
                          <label htmlFor="bannerUpload" className="form-label">
                            <strong>Upload Banner Image</strong>
                          </label>
                          <input type="file" className="form-control" id="bannerUpload" />
                          <small className="text-muted d-block mt-2">
                            Recommended: 1200x300 | Max size: 5MB
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="companyName" className="form-label">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
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

                  <div className="d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleTabChange("foundingInfo")}
                    >
                      Save & Next
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === "foundingInfo" && (
              <div>
                <h6>Founding Info</h6>
                <form>
                  {/* Founding Info Form */}
                  {/* (Form Elements) */}
                  <div className="d-flex justify-content-between">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => handleTabChange("companyInfo")}
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleTabChange("socialMediaProfile")}
                    >
                      Save & Next
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === "socialMediaProfile" && (
              <div>
                <h6>Social Media Profile</h6>
                <form>
                  {/* Social Media Profile Form */}
                  {/* (Form Elements) */}
                  <div className="d-flex justify-content-between mt-4">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => handleTabChange("foundingInfo")}
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleFinishEditing}
                    >
                      Finish Editing
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const FinalPage = () => (
  <div className="container mt-5">
    <h3>Thank You!</h3>
    <p>The form has been successfully completed.</p>
  </div>
);

const App = () => (
  <Router>
    
  </Router>
);

export default App;
