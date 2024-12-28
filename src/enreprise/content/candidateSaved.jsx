import React from 'react';
import '../../styles/candidate.css';
import Img1 from '../../assets/images/micro.png';
import Img2 from '../../assets/images/Profile.jpg';
import Img3 from '../../assets/images/google.png';
import Img4 from '../../assets/images/meta.jpeg';

export default function SavedCandidate() {
    const jobs = [
        {
            id: 1,
            firstName: "Jacob",
            lastName: "John",
            jobTitle: "Android Developer",
            location: "Rabat",
            maxSalary: "100",
            minSalary: "80",
            status: "Active"
        },
        {
            id: 2,
            firstName: "Robert",
            lastName: "Fox",
            jobTitle: "marketing Manager",
            location: "Agadir",
            maxSalary: "80",
            minSalary: "50",
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
                                        <strong className='h5'>{job.firstName} {job.lastName}</strong>
                                        <div className="text-muted small pt-1">
                                            {job.jobTitle}
                                        </div>
                                    </div>
                                </div>
                            </td>


                            <td className="text-center align-middle">
                                {/* <span className="pt-5"> */}
                                    {/* {job.status === "Active" ? (
                                        <button className=" appliedBtn p-2">Applied Now <i className="fi fi-rr-arrow-right px-2"></i></button>
                                    ) : (
                                        <button className="ExpiredBtn py-2 px-3">Deadline Expired</button>
                                    )} */}
                                {/* </span> */}
                                <button className="white-btn">
                                    View Profile
                                    <i className="fi fi-rr-arrow-right mx-2 justify-content-center"></i>
                                </button>
                                {/* Dropdown */}

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
