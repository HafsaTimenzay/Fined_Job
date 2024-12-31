import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/candidate.css";
import Img1 from "../../assets/images/apple.jpg";

function JobAlert({ title, location }) {
  const jobs = [
    {
      id: 1,
      title: "Programador Host",
      company: "Knowmad Mood",
      location: "Agadir",
      description: `
        InnovationTeam is a forward-thinking technology company that specializes in providing innovative solutions to businesses. We are currently seeking a talented Mobile Developer to join our team.
        As a Mobile Developer at InnovationTeam, you will be responsible for developing, testing, and maintaining mobile applications for Android platforms. You will collaborate with cross-functional teams to understand project requirements, design user interfaces, and implement app features. Additionally, you will work closely with product managers and UX designers to deliver high-quality, user-friendly mobile applications.
      `,
      salary: "$80,000 - $100,000",
      jobPosted: "14 Jul, 2024",
      jobExpires: "14 Aug, 2024",
      experience: "3+ years",
      typeJob: "Remote",
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
      education: "Master's Degree",
      requirements: ["Experience with React Native", "Proficiency in JavaScript"],
      benefits: ["On-Site Gym", "Paid Leave"],
    },
  ];

  // Filter jobs based on title and location
  const filteredJobs = jobs.filter(
    (job) =>
      (!title || job.title.toLowerCase().includes(title.toLowerCase())) &&
      (!location || job.location.toLowerCase().includes(location.toLowerCase()))
  );

  // State for the selected job
  const [selectedJob, setSelectedJob] = useState(filteredJobs[0] || null);

  // If no jobs match the criteria
  if (filteredJobs.length === 0) {
    return <p className="text-center mt-3">No jobs found for your search criteria.</p>;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar: Job List */}
        <div className="col-md-4 p-3 border-end">
          <h5 className="my-3">Top Job Picks</h5>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                className="card p-2 my-2 d-flex align-items-center jobCard"
                key={job.id}
                onClick={() => setSelectedJob(job)}
                style={{
                  backgroundColor: selectedJob?.id === job.id ? "#dfedff" : "white",
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
                    <p className="text-muted p-0 m-0">
                      {job.location} · ({job.typeJob})
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted">No jobs match your search criteria.</p>
          )}
        </div>

        {/* Main Content: Job Details */}
        <div className="col-md-8 p-4">
          {selectedJob ? (
            <>
              <div className="d-flex align-items-center mb-3">
                <img
                  src={Img1}
                  alt="Company Logo"
                  className="me-3 imgJobDes"
                  style={{ width: "70px", height: "70px" }}
                />
                <div>
                  <h4 className="mb-0">{selectedJob.title}</h4>
                  <p className="text-muted">
                    {selectedJob.company} · {selectedJob.location} · (
                    {selectedJob.typeJob})
                  </p>
                </div>
              </div>

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
            </>
          ) : (
            <p className="text-muted">Select a job to see the details.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobAlert;
