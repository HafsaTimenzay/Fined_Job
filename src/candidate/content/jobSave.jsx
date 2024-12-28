import React, { useState } from 'react';
import '../../styles/candidate.css';
import Img2 from '../../assets/images/apple.jpg';

export default function JobSave() {
    // Initial JSON array of jobs (all jobs saved by default)
    const initialJobs = [
        {
            id: 1,
            title: "Networking Engineer",
            typeJob: "Remote",
            location: "Rabat",
            maxSalary: "100",
            minSalary: "80",
            status: "Active"
        },
        {
            id: 2,
            title: "Product Designer",
            typeJob: "Full Time",
            location: "Agadir",
            maxSalary: "80",
            minSalary: "50",
            status: "Expert"
        }
    ];

    // State to hold saved jobs
    const [savedJobs, setSavedJobs] = useState(initialJobs);

    // Handler to remove job from saved jobs (and update UI dynamically)
    const handleUnsaveJob = (jobId) => {
        const updatedJobs = savedJobs.filter((job) => job.id !== jobId);
        setSavedJobs(updatedJobs);
    };

    return (
        <div className="container-fluid table-responsive">
            <h5 className='m-3'>
                Favorite Jobs <span className='small text-secondary'>({savedJobs.length})</span>
            </h5>
            <table className="table">
                <tbody>
                    {savedJobs.map((job) => (
                        <tr key={job.id}>
                            <td>
                                <div className="d-flex align-items-center">
                                    <img src={Img2} style={{ width: '50px' }} alt="logo" className="me-3 rounded" />
                                    <div>
                                        <strong className='h5'>{job.title}</strong>
                                        <span className="badge bg-label-primary medium ms-2 mt-2">{job.typeJob}</span>
                                        <div className="text-muted small pt-1">
                                            <i className="fi fi-rs-marker text-muted small"></i> {job.location}
                                            <i className="fi fi-rr-dollar text-muted small ps-2"></i> {job.minSalary}DH-{job.maxSalary}DH/month
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td className="text-center align-middle">
                                <button
                                    className="btn btn-light me-2 p-3 rounded border d-flex align-items-center justify-content-center linksBtn"
                                    onClick={() => handleUnsaveJob(job.id)} // Remove job from the saved list
                                >
                                    <i className="fi fi-sr-bookmark" style={{ color: "#0a65cc" }}></i>
                                </button>
                            </td>

                            <td className="text-center align-middle">
                                <span className="pt-5">
                                    {job.status === "Active" ? (
                                        <button className="appliedBtn p-2 ps-3">
                                            Applied Now <i className="fi fi-rr-arrow-right px-2"></i>
                                        </button>
                                    ) : (
                                        <button className="ExpiredBtn py-2 px-3">Deadline Expired</button>
                                    )}
                                </span>
                            </td>

                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
