import React from "react";

export default function Settings() {
    return (
        <div className="container-fluid">

                    <main className="col-md-9 p-4">
                        <h2 className="mb-4">Settings</h2>

                        {/* Tabs */}
                        <ul className="nav nav-tabs mb-4">
                            <li className="nav-item">
                                <a className="nav-link active" href="#personal">
                                    Personal
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#profile">
                                    Profile
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#social-links">
                                    Social Links
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#account-setting">
                                    Account Setting
                                </a>
                            </li>
                        </ul>

                        {/* Basic Information Form */}
                        <div className="card p-4 mb-4">
                            <h5>Basic Information</h5>
                            <form>
                                <div className="row mb-3">
                                    <div className="col-md-3">
                                        <label className="form-label">Profile Picture</label>
                                        <div className="container d-flex justify-content-center align-items-center mt-5">
                                            <div
                                                className="border border-dashed rounded p-4 text-center"
                                                style={{ width: "300px", height: "300px" }}
                                            >
                                                <div className="mb-3">
                                                    <i className="bi bi-cloud-upload" style={{ fontSize: "50px", color: "#888" }}></i>
                                                </div>
                                                <p className="fw-bold mb-2">Browse photo or drop here</p>
                                                <p className="text-muted small">
                                                    A photo larger than 400 pixels works best. Max photo size 5 MB.
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-9">
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Full name</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Title/Headline</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Experience</label>
                                                <select className="form-select">
                                                    <option>Select...</option>
                                                    <option>1-2 years</option>
                                                    <option>3-5 years</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Education</label>
                                                <select className="form-select">
                                                    <option>Select...</option>
                                                    <option>Bachelor's</option>
                                                    <option>Master's</option>
                                                </select>
                                            </div>
                                        </div>
                                        <label className="form-label">Personal Website</label>
                                        <input
                                            type="url"
                                            className="form-control"
                                            placeholder="Website URL..."
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Save Changes
                                </button>
                            </form>
                        </div>

                        {/* CV/Resume Section */}
                        <div className="card p-4">
                            <h5>Your CV/Resume</h5>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="border rounded p-3 text-center">
                                        <p className="mb-1">Professional Resume</p>
                                        <p className="text-muted small">3.5 MB</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="border rounded p-3 text-center">
                                        <p className="mb-1">Product Designer</p>
                                        <p className="text-muted small">4.7 MB</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="border rounded p-3 text-center">
                                        <p className="mb-1">Visual Designer</p>
                                        <p className="text-muted small">1.3 MB</p>
                                    </div>
                                </div>
                                <div className="col-md-4 mt-3">
                                    <div
                                        className="border border-secondary rounded text-center p-3"
                                        style={{ cursor: "pointer" }}
                                    >
                                        <p className="mb-0">Add CV/Resume</p>
                                        <p className="text-muted small">
                                            Browse file or drop here. Only PDF.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>

    );
}