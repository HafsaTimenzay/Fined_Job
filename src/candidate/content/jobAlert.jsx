import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/candidate.css";
import Img1 from "../../assets/images/apple.jpg";

const JobAlert = () => {

    const jobs = [
        {
            id: 1,
            title: "Programador Host",
            company: "Knowmad Mood",
            location: "Agaidr",
            description: `
            InnovationTeam is a forward-thinking technology company that specializes in providing innovative solutions to businesses. We are currently seeking a talented Mobile Developer to join our team.
            As a Mobile Developer at InnovationTeam, you will be responsible for developing, testing, and maintaining mobile applications for Android platforms. You will collaborate with cross-functional teams to understand project requirements, design user interfaces, and implement app features. Additionally, you will work closely with product managers and UX designers to deliver high-quality, user-friendly mobile applications.
            `,
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
        },
        {
            id: 2,
            title: "Développeur Applications Mobiles",
            company: "Majjane",
            location: "Rabat",
            description: `
            Arabic Computer Systems, one of the largest ICT companies in Saudi Arabia, is seeking an experienced iOS Application Developer to join their team. As an iOS Application Developer, you will be responsible for developing and maintaining high-quality iOS applications that meet the needs of the company's diverse clientele. You will have the opportunity to work with a team of more than 3,000 IT professionals, who are spread across 23 Saudi cities and are dedicated to providing cutting-edge technology solutions for enterprise customers. Arabic Computer Systems has maintained its leadership in the industry for over 35 years and serves both government entities and some of the Middle East's leading companies.
            `,
            salary: "$60,000 - $80,000",
            jobPosted: "20 Jun, 2024",
            jobExpires: "20 Aug, 2024",
            experience: "2+ years",
            typeJob: "On-site",
            typePost: "Job Opportunity",
            education: "Master's Degree",
            requirements: ["Experience with React Native", "Proficiency in JavaScript"],
            benefits: ["On-Site Gym", "Paid Leave"],
        },
    ];

    const [selectedJob, setSelectedJob] = useState(jobs[0]);

    const [isLightBoxVisible, setLightBoxVisible] = useState(false);

    const handleOpenLightBox = () => {
        setLightBoxVisible(true); // Affiche la lightbox
    };

    const handleCloseLightBox = () => {
        setLightBoxVisible(false); // Ferme la lightbox
    };

    return (
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar: Job List */}
                <div className="col-md-4 p-3 border-end">
                    <h5 className="my-3">Top Job Picks</h5>
                    {jobs.map((job) => (
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
                            <div className=" align-self-start">
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
                                <button className="btn btn-light me-2 p-3 rounded border d-flex align-items-center justify-content-center linksBtn">
                                    <i className="fi fi-rr-bookmark " style={{ color: "#0a65cc" }}></i>
                                    {/* <i className="fi fi-sr-bookmark"></i> */}
                                </button>


                                {/* Bouton pour ouvrir la lightbox */}
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
                                            onClick={(e) => e.stopPropagation()} // Empêche la fermeture lorsqu'on clique à l'intérieur
                                        >
                                            <button className="close-btn" onClick={handleCloseLightBox}>
                                                <i className="fi fi-rr-cross-small"></i>
                                            </button>
                                            <h2>Apply for the Job</h2>
                                            <p>Please fill in the necessary details to proceed.</p>
                                            <form>
                                                <div className="boxLight mb-3">
                                                    <label htmlFor="description" className="form-label text-left">Description</label>
                                                    <textarea
                                                        className="form-control"
                                                        id="description"
                                                        rows="4"
                                                        placeholder="Enter your description here"
                                                    ></textarea>
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="fileUpload" className="form-label text-left">Upload CV</label>
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
                    <div className="row">
                        {/* Left Column: Job Description */}
                        <div className="col-md-8 pt-3">
                            {/* Header Section */}


                            {/* Job Description */}
                            <h5>Job Description</h5>
                            <p>{selectedJob.description}</p>

                            {/* Requirements */}
                            <h5>Requirements</h5>
                            <ul>
                                {selectedJob.requirements.map((requirement, index) => (
                                    <li key={index}>{requirement}</li>
                                ))}

                            </ul>

                            {/* Benefits */}
                            <h5>Benefits</h5>
                            <ul>
                                {selectedJob.benefits.map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                ))}
                            </ul>

                        </div>

                        {/* Right Column: Job Overview */}
                        <div className="col-md-4">
                            {/* Salary */}
                            <div className="bg-light p-3 mb-3 rounded">
                                <h6 className="sub-title mb-4 fw-bold text-dark">Salary</h6>
                                <h5 className="text-success salary">{selectedJob.salary}</h5>
                            </div>

                            {/* Job Posted */}
                            <div className="bg-light p-3 mb-3 rounded">
                                <h6 className="sub-title mb-4 fw-bold text-dark">Job Details</h6>

                                {/* Job Posted */}
                                <div className="d-flex align-items-start mb-2">
                                    <i className="fi fi-rr-calendar me-3" style={{ color: '#0a65cc', fontSize: '1.5rem' }}></i>
                                    <div>
                                        <strong className="text-dark">Job Posted:</strong> <span className="text-muted">{selectedJob.jobPosted}</span>
                                    </div>
                                </div>

                                {/* Job Expires */}
                                <div className="d-flex align-items-start">
                                    <i className="fi fi-rr-clock me-3" style={{ color: '#0a65cc', fontSize: '1.5rem' }}></i>
                                    <div>
                                        <strong className="text-dark">Job Expires:</strong> <span className="text-muted">{selectedJob.jobExpires}</span>
                                    </div>
                                </div>
                            </div>


                            {/* Job Overview */}
                            <div className="bg-light mb-3 p-4 rounded shadow-sm">
                                <h6 className="sub-title mb-4 fw-bold text-dark">Job Overview</h6>

                                {/* Location */}
                                <div className="d-flex align-items-start mb-3">
                                    <i class="fi fi-rs-map me-3" style={{ color: '#0a65cc', fontSize: '1.5rem' }}></i>
                                    <div>
                                        <strong className="text-dark">Location:</strong> <span className="text-muted">{selectedJob.location}</span>
                                    </div>
                                </div>

                                {/* Type (Remote, On-site, etc.) */}
                                <div className="d-flex align-items-start mb-3">
                                    <i className="fi fi-rr-employee-man me-3" style={{ color: '#0a65cc', fontSize: '1.5rem' }}></i>
                                    <div>
                                        <strong className="text-dark">Type:</strong> <span className="text-muted">{selectedJob.typeJob}</span>
                                    </div>
                                </div>

                                {/* Experience */}
                                <div className="d-flex align-items-start mb-3">
                                    <i className="fi fi-rr-briefcase me-3" style={{ color: '#0a65cc', fontSize: '1.5rem' }}></i>
                                    <div>
                                        <strong className="text-dark">Experience:</strong> <span className="text-muted">{selectedJob.experience}</span>
                                    </div>
                                </div>

                                {/* Education */}
                                <div className="d-flex align-items-start">
                                    <i className="fi fi-rr-graduation-cap me-3" style={{ color: '#0a65cc', fontSize: '1.5rem' }}></i>
                                    <div>
                                        <strong className="text-dark">Education:</strong> <span className="text-muted">{selectedJob.education}</span>
                                    </div>
                                </div>
                            </div>


                            <div className="bg-light p-3 mb-3 rounded">
                                <h6 className="sub-title mb-4 fw-bold text-dark">Related Links</h6>
                                <div className="d-flex align-items-center">
                                    <button className="linksBtn btn btn-light me-3 p-3 rounded border d-flex align-items-center justify-content-center">
                                        <i class="fi fi-brands-linkedin linksIcon"></i>
                                    </button>
                                    <button className="linksBtn btn btn-light me-3 p-3 rounded border d-flex align-items-center justify-content-center">
                                        <i class="fi fi-ss-globe linksIcon"></i>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default JobAlert;
