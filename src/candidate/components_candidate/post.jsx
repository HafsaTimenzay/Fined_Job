// import React from "react";

// export default function Post(){
//     const jobs = [
//       {
//         id: 1,
//         title: "Programador Host",
//         company: "Knowmad Mood",
//         location: "Agadir",
//         description: `InnovationTeam is a forward-thinking technology company...`,
//         salary: "$80,000 - $100,000",
//         jobPosted: "14 Jul, 2024",
//         jobExpires: "14 Aug, 2024",
//         experience: "3+ years",
//         typeJob: "Remote",
//         typePost: "Internship",
//         education: "Bachelor's Degree",
//         requirements: [
//           "Experience in Scrum methodology",
//           "Good communication skills",
//           "English level B2 or higher",
//         ],
//         benefits: ["Remote Work", "Health Insurance", "Flexible Hours"],
//       },
//       {
//         id: 2,
//         title: "Développeur Applications Mobiles",
//         company: "Majjane",
//         location: "Rabat",
//         description: `Arabic Computer Systems is seeking an experienced iOS Application Developer...`,
//         salary: "$60,000 - $80,000",
//         jobPosted: "20 Jun, 2024",
//         jobExpires: "20 Aug, 2024",
//         experience: "2+ years",
//         typeJob: "On-site",
//         typePost: "Job Opportunity",
//         education: "Master's Degree",
//         requirements: ["Experience with React Native", "Proficiency in JavaScript"],
//         benefits: ["On-Site Gym", "Paid Leave"],
//       },
//     ];
  

//     return (
//         <div className="row">
//             <div className="col-md-8 pt-3">
//               <h5>Job Description</h5>
//               <p>{selectedJob.description}</p>

//               <h5>Requirements</h5>
//               <ul>
//                 {selectedJob.requirements.map((requirement, index) => (
//                   <li key={index}>{requirement}</li>
//                 ))}
//               </ul>

//               <h5>Benefits</h5>
//               <ul>
//                 {selectedJob.benefits.map((benefit, index) => (
//                   <li key={index}>{benefit}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Job Overview */}
//             <div className="col-md-4">
//               <div className="bg-light p-3 mb-3 rounded">
//                 <h6 className="sub-title mb-4 fw-bold text-dark">Salary</h6>
//                 <h5 className="text-success salary">{selectedJob.salary}</h5>
//               </div>

//               <div className="bg-light p-3 mb-3 rounded">
//                 <h6 className="sub-title mb-4 fw-bold text-dark">Job Details</h6>
//                 <div className="d-flex align-items-start mb-2">
//                   <i
//                     className="fi fi-rr-calendar me-3"
//                     style={{ color: "#0a65cc", fontSize: "1.5rem" }}
//                   ></i>
//                   <div>
//                     <strong className="text-dark">Job Posted:</strong>{" "}
//                     <span className="text-muted">{selectedJob.jobPosted}</span>
//                   </div>
//                 </div>
//                 <div className="d-flex align-items-start">
//                   <i
//                     className="fi fi-rr-clock me-3"
//                     style={{ color: "#0a65cc", fontSize: "1.5rem" }}
//                   ></i>
//                   <div>
//                     <strong className="text-dark">Job Expires:</strong>{" "}
//                     <span className="text-muted">{selectedJob.jobExpires}</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-light mb-3 p-4 rounded shadow-sm">
//                 <h6 className="sub-title mb-4 fw-bold text-dark">Job Overview</h6>
//                 <div className="d-flex align-items-start mb-3">
//                   <i
//                     className="fi fi-rs-map me-3"
//                     style={{ color: "#0a65cc", fontSize: "1.5rem" }}
//                   ></i>
//                   <div>
//                     <strong className="text-dark">Location:</strong>{" "}
//                     <span className="text-muted">{selectedJob.location}</span>
//                   </div>
//                 </div>

//                 <div className="d-flex align-items-start mb-3">
//                   <i
//                     className="fi fi-rr-employee-man me-3"
//                     style={{ color: "#0a65cc", fontSize: "1.5rem" }}
//                   ></i>
//                   <div>
//                     <strong className="text-dark">Type:</strong>{" "}
//                     <span className="text-muted">{selectedJob.typeJob}</span>
//                   </div>
//                 </div>

//                 <div className="d-flex align-items-start mb-3">
//                   <i
//                     className="fi fi-rr-briefcase me-3"
//                     style={{ color: "#0a65cc", fontSize: "1.5rem" }}
//                   ></i>
//                   <div>
//                     <strong className="text-dark">Experience:</strong>{" "}
//                     <span className="text-muted">{selectedJob.experience}</span>
//                   </div>
//                 </div>

//                 <div className="d-flex align-items-start">
//                   <i
//                     className="fi fi-rr-graduation-cap me-3"
//                     style={{ color: "#0a65cc", fontSize: "1.5rem" }}
//                   ></i>
//                   <div>
//                     <strong className="text-dark">Education:</strong>{" "}
//                     <span className="text-muted">{selectedJob.education}</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-light p-3 mb-3 rounded">
//                 <h6 className="sub-title mb-4 fw-bold text-dark">Related Links</h6>
//                 <div className="d-flex align-items-center">
//                   <button className="linksBtn btn btn-light me-3 p-3 rounded border d-flex align-items-center justify-content-center">
//                     <i className="fi fi-brands-linkedin linksIcon"></i>
//                   </button>
//                   <button className="linksBtn btn btn-light me-3 p-3 rounded border d-flex align-items-center justify-content-center">
//                     <i className="fi fi-ss-globe linksIcon"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//     )
// }