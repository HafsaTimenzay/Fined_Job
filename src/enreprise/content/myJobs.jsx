import React from 'react';
import '../../styles/entreprise.css';
import {Link} from "react-router-dom";


export default function myJobs() {
    const jobs = [
        {
            id: 1,
            title: "Networking Engineer",
            jobType: "Remote",
            applicationsTotal: "123",
            datePosted: "Feb 2, 2019",
            status: "Active"
        },
        {
            id: 2,
            title: "Product Designer",
            jobType: "Full Time",
            applicationsTotal: "123",
            datePosted: "Dec 7, 2019",
            status: "Expert"
        }
    ];

    return (
        <div className="container-fluid table-responsive main-content">
            <h5 className='m-3'>Applied Jobs <span className='small text-secondary'>({jobs.length})</span></h5>
            <table className="table">
                <thead style={{ backgroundColor: "#e7e8fc" }}>
                    <tr style={{ backgroundColor: "#e7e8fc" }}>
                        <th scope="col">JOBS</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">APPLICATIONS</th>
                        <th scope="col" className="text-center">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job) => (
                        <tr key={job.id}>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <strong className='h5'>{job.title}</strong>
                                        <div className="text-muted small pt-1">
                                            <i className="fi fi-rr-employee-man text-muted small"></i> {job.jobType}
                                            <i className="fi fi-rr-calendar text-muted small ps-2"></i> {job.datePosted}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="align-middle fw-bold activeJob">
                                {/* <i className="fi fi-rr-users-alt"></i>
                            <i className="fi fi-rr-cross-circle"></i> */}
                                <span className='pt-5' style={{ color: job.status == "Active" ? "#16b91e" : "#b93416" }}>{job.status}</span>
                            </td>
                            <td className="align-middle fw-bold activeJob">
                                {/* <i className="fi fi-rr-users-alt"></i> */}
                                <span className='pt-5 text-muted fw-normal'>{job.applicationsTotal} Applications</span>
                            </td>
                            <td className="text-center align-middle d-flex align-items-end">
                                <Link to={"applications"}>
                                <button className="grayBlue-btn">View Applications</button>
                                </Link>
                                
                            </td>
                            <td>
                                <div className="dropdown">
                                    <button
                                        type="button"
                                        className="btn p-0 dropdown-toggle hide-arrow"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i className="fi fi-br-menu-dots-vertical"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Item 1</a></li>
                                        <li><a className="dropdown-item" href="#">Item 2</a></li>
                                        <li><a className="dropdown-item" href="#">Item 3</a></li>
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
