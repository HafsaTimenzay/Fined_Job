import React, { useState } from "react";

// Composant réutilisable pour les champs de saisie
function InputField({ label, type, placeholder, value, onChange, required = false }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

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
          <div>
            <img src={img} alt="Preview" width="100" />
            <br />
            <button className="btn btn-danger mt-2" onClick={() => setImg("")}>
              Remove Image
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
  const [activeTab, setActiveTab] = useState("profile");
  const [img, setImg] = useState("");
  const [cv, setCv] = useState("");

  const tabs = [
    { key: "profile", label: "Profile", icon: "bi bi-person-circle" },
    { key: "personal", label: "Personal", icon: "bi bi-person-lines-fill" },
    { key: "account-setting", label: "Account Setting", icon: "bi bi-gear" },
  ];

  // Fonction de rendu des contenus des onglets
  const renderContent = () => {
    const contentMap = {
      profile: (
        <div className="card p-4 mb-4">
          <h5>Basic Information</h5>
          <form>
            <div className="row mb-3">
              <div className="col-md-3">
                <label className="form-label">Profile Picture</label>
    <div className="d-flex justify-content-center align-items-center mt-3">

                <div
        className="border border-dashed rounded p-4 text-center"
        style={{ width: "350px", height: "150px" }}
      >
            <i className="bi bi-cloud-upload" style={{ fontSize: "30px", color: "#888" }}></i>
                <FileUploader img={img} setImg={setImg} importtext="Importer votre image" />
                </div>
              </div>
              </div>
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-6">
                    <InputField label="Nom" type="text" placeholder="Nom" />
                  </div>
                  <div className="col-md-6">
                    <InputField label="Prénom" type="text" placeholder="Prénom" />
                  </div>
                  <div className="col-md-6">
                    <InputField label="Date de naissance" type="date" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Sexe</label>
                    <div className="d-flex align-items-center">
                      <div className="form-check me-3">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="male"
                          name="sex"
                        />
                        <label className="form-check-label" htmlFor="male">
                          Homme
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="female"
                          name="sex"
                        />
                        <label className="form-check-label" htmlFor="female">
                          Femme
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary" style={{ float: "right" }}>
            Enregistrer les modifications
            </button>
          </form>
        </div>
      ),
      personal: (
        <div className="card p-4 mb-4">
          <h5>Additional Information</h5>
          <form>
            <div className="row mb-3">
              <div className="col-md">
                <FileUploader img={cv} setImg={setCv} importtext="Importer votre CV" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4">
                <InputField label="Experience" type="text" placeholder="Experience" />

              </div>
              <div className="col-md-4">
                <InputField label="Education" type="text" placeholder="Education" />

              </div>
              <div className="col-md-4">
                <InputField label="Role" type="text" placeholder="Role" />

              </div>
            </div>
            <InputField label="Linkden" type="url" placeholder="Linkden URL..." />
            <InputField label="Personal Website" type="url" placeholder="Website URL..." />
               
            <button type="submit" className="btn btn-primary" 
                style={{ float: "right" }}
            >
            Enregistrer les modifications
            </button>
          </form>
        </div>
      ),
      "account-setting": (
        <div className="card p-4 mb-4">
          <h5>Account Settings</h5>
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <InputField label="Email" type="text" placeholder="Email" />
              </div>
              <div className="col-md-6">
                <InputField label="Password" type="text" placeholder="Password" />
              </div>
            </div>
        
            <button type="submit" className="btn btn-primary" style={{ float: "right" }}>
            Enregistrer les modifications
            </button>
          </form>
        </div>
      ),
    };

    return contentMap[activeTab] || null;
  };

  return (
    <div className="container-fluid">
      <main className="col p-4">
        <h2 className="mb-4">Settings</h2>

        {/* Tabs */}
        <ul className="nav nav-tabs mb-4">
          {tabs.map((tab) => (
            <li className="nav-item" key={tab.key}>
              <button
                className={`nav-link ${activeTab === tab.key ? "active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: activeTab === tab.key ? "#007bff" : "#f8f9fa",
                    color: activeTab === tab.key ? "#fff" : "#6c757d",
                    fontWeight: activeTab === tab.key ? "bold" : "normal",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    marginRight: "10px",
                  }}
              >
              <i className={tab.icon} style={{ marginRight: "8px" }}></i>
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Content */}
        {renderContent()}
      </main>
    </div>
  );
}
