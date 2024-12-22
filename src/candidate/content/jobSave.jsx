import React from 'react';
import '../../styles/candidate.css';
import Img1 from '../../assets/images/micro.png';
import Img2 from '../../assets/images/apple.jpg';
import Img3 from '../../assets/images/google.png';
import Img4 from '../../assets/images/meta.jpeg';

export default function jobSave() {
    const jobs = [
        {
            id: 1,
            title: "Networking Engineer",
            typeJob: "Remote",
            location: "Rabat",
            maxSalary: "100",
            minSalary: "80",
            dateApplied: "Feb 2, 2019",
            status: "Active"
        },
        {
            id: 2,
            title: "Product Designer",
            typeJob: "Full Time",
            location: "Agadir",
            maxSalary: "80",
            minSalary: "50",
            dateApplied: "Dec 7, 2019",
            status: "Expert"
        }
    ];

    return (
        <div className="container-fluid table-responsive">
            <h5 className='m-3'>Favorite Jobs <span className='small text-secondary'>({jobs.length})</span></h5>
            <table className="table">
                <tbody>
                    {jobs.map((job) => (
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
                                <span className="pt-5">
                                    {job.status === "Active" ? (
                                        <button className="btn btn-primary btn-sm">Applied Now <i class="fi fi-rr-arrow-right"></i></button>
                                    ) : job.status === "Expert" ? (
                                        <button className="btn btn-secondary btn-sm">Deadline Expired</button>
                                    ) : (
                                        <button className="btn btn-primary btn-sm">Applied Now <i class="fi fi-rr-arrow-right"></i></button>
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
