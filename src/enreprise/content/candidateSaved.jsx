import React, { useState } from "react";
import "../../styles/candidate.css";
import Img2 from "../../assets/images/Profile.jpg";

export default function SavedCandidate() {
  const userData = {
    candidate: {
      id: 1,
      profilePicture: "https://example.com/profile.jpg",
      name: "Jane Doe",
      profession: "Software Engineer",
      location: "New York, USA",
      availability: "Available for Remote Work",
      email: "jane.doe@example.com",
      phone: "+1 123-456-7890",
      about:
        "Passionate software engineer with 5+ years of experience in building scalable web applications. Skilled in React, Node.js, and cloud infrastructure.",
      skills: ["React.js", "Node.js", "AWS", "MongoDB", "Express.js"],
      experience: [
        {
          role: "Frontend Developer",
          company: "TechCorp",
          duration: "Jan 2020 - Dec 2022",
        },
        {
          role: "Software Engineer",
          company: "Innovatech",
          duration: "Mar 2018 - Dec 2019",
        },
      ],
      yearsExperience: 5,
      education: "Bachelor's Degree in Computer Science",
      linkedIn: "https://linkedin.com/in/janedoe",
      website: "https://janedoe.dev",
    },
  };

  const jobs = [
    {
      id: 1,
      firstName: "Jacob",
      lastName: "John",
      jobTitle: "Android Developer",
      location: "Rabat",
      maxSalary: "100",
      minSalary: "80",
      status: "Active",
    },
    {
      id: 2,
      firstName: "Robert",
      lastName: "Fox",
      jobTitle: "Marketing Manager",
      location: "Agadir",
      maxSalary: "80",
      minSalary: "50",
      status: "Expert",
    },
  ];

  const [isLightBoxVisible, setLightBoxVisible] = useState(false);

  const handleOpenLightBox = () => {
    setLightBoxVisible(true); // Show the lightbox
  };

  const handleCloseLightBox = () => {
    setLightBoxVisible(false); // Close the lightbox
  };

  const [candidateSaved, setCandidateSaved] = useState(jobs); // Initialize with jobs

  const handleUnsaveCandiate = (idCan) => {
    const updatedCandidates = candidateSaved.filter((candidate) => candidate.id !== idCan);
    setCandidateSaved(updatedCandidates);
  };
  const { candidate } = userData; // Destructure candidate from userData

  return (
    <div className="container-fluid table-responsive main-content">
      <h5 className="m-3">
        Favorite Jobs <span className="small text-secondary">({jobs.length})</span>
      </h5>
      <table className="table">
        <tbody>
          {candidateSaved.map((job) => (
            <tr key={job.id}>
              <td>
                <div className="d-flex align-items-center">
                  <img src={Img2} style={{ width: "50px" }} alt="logo" className="me-3 rounded" />
                  <div>
                    <strong className="h5">
                      {job.firstName} {job.lastName}
                    </strong>
                    <div className="text-muted small pt-1">{job.jobTitle}</div>
                  </div>
                </div>
              </td>
              <td>
                <button
                  className="btn btn-light me-2 p-3 rounded border  d-flex align-items-center justify-content-center linksBtn p-0 mx-1"
                  onClick={() => handleUnsaveCandiate(job.id)}
                >
                  <i
                    className="fi fi-sr-star"
                    style={{ color: "#0a65cc" }}
                  ></i>
                </button>

              </td>

              <td className="text-center align-middle me-3" style={{ width: "150px" }}>
                <button className="white-btn" onClick={handleOpenLightBox}>
                  View Profile
                  <i className="fi fi-rr-arrow-right mx-2 justify-content-center"></i>
                </button>

                {/* Lightbox */}
                {isLightBoxVisible && (
                  <div className="lightbox-overlay" onClick={handleCloseLightBox}>
                    <div
                      className="lightbox-content"
                      style={{ position: "relative" }}
                      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                    >
                      <button className="close-btn" onClick={handleCloseLightBox}>
                        <i className="fi fi-rr-cross-small"></i>
                      </button>
                      <div className="container">
                        <div className="row">
                          <div className="d-flex align-items-center mb-3">
                            <img
                              src={candidate.profilePicture}
                              alt="Candidate Profile"
                              className="me-3 imgCandidate"
                            />
                            <div>
                              <h4 className="mb-0">{candidate.name}</h4>
                              <p className="text-muted">
                                {candidate.profession} · {candidate.location} · ({candidate.availability})
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Candidate Overview, Skills, and Experience */}
                        <div className="row">
                          <div className="col-md-7 ms-3 pt-3">
                            <h5>About the Candidate</h5>
                            <p>{candidate.about}</p>

                            <h5>Skills</h5>
                            <ul>
                              {candidate.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                              ))}
                            </ul>

                            <h5>Experience</h5>
                            <ul>
                              {candidate.experience.map((exp, index) => (
                                <li key={index}>
                                  {exp.role} at {exp.company} ({exp.duration})
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Candidate Details */}
                          <div className="col-md-4">
                            <div className="bg-light p-3 mb-3 rounded">
                              <h6 className="sub-title mb-4 fw-bold text-dark">Contact Information</h6>
                              <p className="text-muted">{candidate.email}</p>
                              <p className="text-muted">{candidate.phone}</p>
                            </div>

                            <div className="bg-light mb-3 p-4 rounded shadow-sm">
                              <h6 className="sub-title mb-4 fw-bold text-dark">Candidate Details</h6>
                              <div className="d-flex align-items-start mb-3">
                                <i
                                  className="fi fi-rr-employee-man me-3"
                                  style={{ color: "#0a65cc", fontSize: "1.5rem" }}
                                ></i>
                                <div>
                                  <strong className="text-dark">Profession:</strong>{" "}
                                  <span className="text-muted">{candidate.profession}</span>
                                </div>
                              </div>

                              <div className="d-flex align-items-start mb-3">
                                <i
                                  className="fi fi-rr-briefcase me-3"
                                  style={{ color: "#0a65cc", fontSize: "1.5rem" }}
                                ></i>
                                <div>
                                  <strong className="text-dark">Years of Experience:</strong>{" "}
                                  <span className="text-muted">{candidate.yearsExperience}</span>
                                </div>
                              </div>

                              <div className="d-flex align-items-start">
                                <i
                                  className="fi fi-rr-graduation-cap me-3"
                                  style={{ color: "#0a65cc", fontSize: "1.5rem" }}
                                ></i>
                                <div>
                                  <strong className="text-dark">Education:</strong>{" "}
                                  <span className="text-muted">{candidate.education}</span>
                                </div>
                              </div>
                            </div>

                            <div className="bg-light p-3 mb-3 rounded">
                              <h6 className="sub-title mb-4 fw-bold text-dark">Social Links</h6>
                              <div className="d-flex align-items-center">
                                <a
                                  href={candidate.linkedIn}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="linksBtn btn btn-light me-3 p-3 rounded border d-flex align-items-center justify-content-center"
                                >
                                  <i className="fi fi-brands-linkedin linksIcon"></i>
                                </a>
                                <a
                                  href={candidate.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="linksBtn btn btn-light me-3 p-3 rounded border d-flex align-items-center justify-content-center"
                                >
                                  <i className="fi fi-ss-globe linksIcon"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </td>
              <td className="text-center align-middle">
                <div className="dropdown">
                  <button
                    type="button"
                    className="p-0 dropdown-toggle hide-arrow"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ background: "white", border: "none" }}
                  >
                    <i className="fi fi-br-menu-dots-vertical"></i>
                  </button>
                  <ul className="dropdown-menu">
                    <li className="p-1"><a className="dropdown-item LinkProf" href="#">
                      <i className="fi fi-rr-envelope align-self-center me-2" style={{ fontSize: "14px" }}></i>
                      Send Email
                    </a></li>
                    <li className="p-1"><a className="dropdown-item LinkProf" href="#">
                      <i className="fi fi-sr-download align-self-center me-2" style={{ fontSize: "13px" }}></i>
                      Download Cv
                    </a></li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
