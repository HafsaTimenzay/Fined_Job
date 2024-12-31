import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/candidate.css";
import Img1 from "../../assets/images/apple.jpg";
import { useLocation } from "react-router-dom";

const JobAlert = () => {
  const { title, location: jobLocation } = useLocation().state || {}; // Renamed 'location' to 'jobLocation' to avoid conflict
  const jobs = [
    {
      id: 1,
      title: "Programador Host",
      company: "Knowmad Mood",
      location: "Agadir",
      description: `InnovationTeam is a forward-thinking technology company...`,
      salary: "$80,000 - $100,000",
      jobPosted: "14 Jul, 2024",
      jobExpires: "14 Aug, 2024",
      experience: "3+ years",
      typeJob: "Remote",
      typePost: "Internship",
      education: "Bachelor's Degree",
      requirements: [
        "Experience in Scrum methodology",
        "Good communication skills",
        "English level B2 or higher",
      ],
      benefits: ["Remote Work", "Health Insurance", "Flexible Hours"],
      linkedIn: "https://www.linkedin.com/in/hafsa-timenzay-698b72293/",
      website: "https://hafsatimenzay.github.io/Portfolio/"
    },
    {
      id: 2,
      title: "Développeur Applications Mobiles",
      company: "Majjane",
      location: "Rabat",
      description: `Arabic Computer Systems is seeking an experienced iOS Application Developer...`,
      salary: "$60,000 - $80,000",
      jobPosted: "20 Jun, 2024",
      jobExpires: "20 Aug, 2024",
      experience: "2+ years",
      typeJob: "On-site",
      typePost: "Job Opportunity",
      education: "Master's Degree",
      requirements: ["Experience with React Native", "Proficiency in JavaScript"],
      benefits: ["On-Site Gym", "Paid Leave"],
      linkedIn: "https://www.linkedin.com/in/hafsa-timenzay-698b72293/",
      website: "https://hafsatimenzay.github.io/Portfolio/"
    },
  ];

  const [selectedJob, setSelectedJob] = useState(jobs[0]);
  const [isLightBoxVisible, setLightBoxVisible] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const [savedJobs, setSavedJobs] = useState([]);

  const handleSaveJob = (jobId) => {
    // Check if job is already saved
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter(id => id !== jobId)); // Remove job from saved list
    } else {
      setSavedJobs([...savedJobs, jobId]); // Add job to saved list
    }
  };
  

  // Effect to update filtered jobs whenever title or location changes
  useEffect(() => {
    // Normalize both location and job location for consistent comparison
    const normalizedJobLocation = jobLocation ? jobLocation.trim().toLowerCase() : null;
    const normalizedTitle = title ? title.trim().toLowerCase() : null;

    const filtered = jobs.filter((job) => {
      const titleMatch =
        !normalizedTitle || job.title.toLowerCase().includes(normalizedTitle);
      const locationMatch =
        !normalizedJobLocation || job.location.trim().toLowerCase() === normalizedJobLocation;

      return titleMatch && locationMatch;
    });

    setFilteredJobs(filtered);

    // Set the first job from filtered jobs as the selected job
    if (filtered.length > 0) {
      setSelectedJob(filtered[0]);
    } else {
      setSelectedJob(jobs[0]); // Fallback to the first job if no filter matches
    }
  }, [title, jobLocation]);


  const handleOpenLightBox = () => {
    setLightBoxVisible(true); // Show the lightbox
  };

  const handleCloseLightBox = () => {
    setLightBoxVisible(false); // Close the lightbox
  };

  return (
    <div className="container-fluid main-content">
      <div className="row">
        {/* Sidebar: Job List */}
        <div className="col-md-4 pt-1 py-3 border-end">
          <h5 className="my-3">Top Job Picks</h5>
          {(filteredJobs.length > 0 ? filteredJobs : jobs).map((job) => (
            <div
              className="card p-2 my-2 d-flex align-items-center jobCard"
              key={job.id}
              onClick={() => setSelectedJob(job)}
              style={{
                backgroundColor: selectedJob.id === job.id ? "#dfedff" : "white",
              }}
            >
              <img
                src={Img1}
                alt="logo"
                className="rounded jobImg me-2 mt-1"
                style={{ width: "50px", height: "50px" }}
              />
              <div className="align-self-start">
                <h5 className="p-0 m-0">{job.title}</h5>
                <div className="text-muted small p-0 m-0">
                  <p className="text-muted p-0 m-0">{job.company}</p>
                  <p className="text-muted p-0 m-0">{job.location} . ({job.typePost})</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content: Job Details */}
        <div className="col-md-8 p-4">
          <div className="row">
            <div className="d-flex align-items-center mb-3">
              <img
                src={Img1} // Replace with company logo
                alt="Company Logo"
                className="me-3 imgJobDes"
              />
              <div>
                <h4 className="mb-0">{selectedJob.title}</h4>
                <p className="text-muted">
                  {selectedJob.company} · {selectedJob.location} . ({selectedJob.typePost})
                </p>
              </div>
              <div className="d-flex align-items-center ms-auto align-self-start">
                <button
                  className="btn btn-light me-2 p-3 rounded border d-flex align-items-center justify-content-center linksBtn"
                  onClick={() => handleSaveJob(selectedJob.id)} // On button click, save the job
                >
                  <i
                    className={`fi ${savedJobs.includes(selectedJob.id) ? 'fi-sr-bookmark' : 'fi-rr-bookmark'}`}
                    style={{ color: "#0a65cc" }}
                  ></i>
                </button>

                {/* Button to open the lightbox */}
                <button
                  className="px-4 py-2 d-flex align-items-center appliedBtn"
                  onClick={handleOpenLightBox}
                >
                  Apply Now
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
                      <h2>Apply for the Job</h2>
                      <p>Please fill in the necessary details to proceed.</p>
                      <form>
                        <div className="boxLight mb-3">
                          <label htmlFor="description" className="form-label text-left">
                            Description
                          </label>
                          <textarea
                            className="form-control"
                            id="description"
                            rows="4"
                            placeholder="Enter your description here"
                          ></textarea>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="fileUpload" className="form-label text-left">
                            Upload CV
                          </label>
                          <input className="form-control" type="file" id="fileUpload" />
                        </div>

                        <button type="submit" className="px-4 py-2 appliedBtn">
                          Send Description
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Job Description, Requirements, and Benefits */}
          <div className="row">
            <div className="col-md-8 pt-3">
              <h5>Job Description</h5>
              <p>{selectedJob.description}</p>

              <h5>Requirements</h5>
              <ul>
                {selectedJob.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>

              <h5>Benefits</h5>
              <ul>
                {selectedJob.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            {/* Job Overview */}
            <div className="col-md-4">
              <div className="bg-light p-3 mb-3 rounded">
                <h6 className="sub-title mb-4 fw-bold text-dark">Salary</h6>
                <h5 className="text-success salary">{selectedJob.salary}</h5>
              </div>

              <div className="bg-light mb-3 p-4 rounded shadow-sm">
                <h6 className="sub-title mb-4 fw-bold text-dark">Job Details</h6>
                <div className="d-flex align-items-start mb-2">
                  <i
                    className="fi fi-rr-calendar me-3"
                    style={{ color: "#0a65cc", fontSize: "1.5rem" }}
                  ></i>
                  <div>
                    <strong className="text-dark">Job Posted:</strong>{" "}
                    <span className="text-muted">{selectedJob.jobPosted}</span>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <i
                    className="fi fi-rs-map me-3"
                    style={{ color: "#0a65cc", fontSize: "1.5rem" }}
                  ></i>
                  <div>
                    <strong className="text-dark">Location:</strong>{" "}
                    <span className="text-muted">{selectedJob.location}</span>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-3">
                  <i
                    className="fi fi-rr-employee-man me-3"
                    style={{ color: "#0a65cc", fontSize: "1.5rem" }}
                  ></i>
                  <div>
                    <strong className="text-dark">Type:</strong>{" "}
                    <span className="text-muted">{selectedJob.typeJob}</span>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-3">
                  <i
                    className="fi fi-rr-briefcase me-3"
                    style={{ color: "#0a65cc", fontSize: "1.5rem" }}
                  ></i>
                  <div>
                    <strong className="text-dark">Experience:</strong>{" "}
                    <span className="text-muted">{selectedJob.experience}</span>
                  </div>
                </div>

                <div className="d-flex align-items-start">
                  <i
                    className="fi fi-rr-graduation-cap me-3"
                    style={{ color: "#0a65cc", fontSize: "1.5rem" }}
                  ></i>
                  <div>
                    <strong className="text-dark">Education:</strong>{" "}
                    <span className="text-muted">{selectedJob.education}</span>
                  </div>
                </div>
              </div>

              <div className="bg-light p-3 mb-3 rounded">
                <h6 className="sub-title mb-4 fw-bold text-dark">Related Links</h6>
                <div className="d-flex align-items-center">
                  {/* LinkedIn Button */}
                  <a
                    href={selectedJob.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linksBtn btn btn-light me-3 p-3 rounded border d-flex align-items-center justify-content-center"
                  >
                    <i className="fi fi-brands-linkedin linksIcon"></i>
                  </a>
                  {/* Portfolio Button */}
                  <a
                    href={selectedJob.website}
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
          {/* <PostDetail /> */}
        </div>
      </div>
    </div>
  );
};

export default JobAlert;
