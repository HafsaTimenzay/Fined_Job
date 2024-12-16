import React from 'react'
import '../styles/candidate.css';
import Img1 from '../assets/images/micro.png'
import Img2 from '../assets/images/apple.jpg'
import Img3 from '../assets/images/google.png'
import Img4 from '../assets/images/meta.jpeg'

export default function JobList(){
  return (
<div className="table-responsive m-3">
    <h5 className='mb-3'>Applied Jobs <span className='small text-secondary'>(85)</span></h5>
    <table className="table">
        <thead style={{backgroundColor:"#e7e8fc"}}>
        <tr style={{backgroundColor:"#e7e8fc"}}>
            <th scope="col">JOBS</th>
            <th scope="col">DATE APPLIED</th>
            <th scope="col">STATUS</th>
            <th scope="col" className="text-center">ACTION</th>
        </tr>
        </thead>
        <tbody>
        <tr >
            <td>
                <div className="d-flex align-items-center">
                    <img src={Img1} style={{width : '50px'}} alt="logo" className="me-3 rounded"/>
                    <div>
                        <strong>Networking Engineer</strong>
                        <span className="badge bg-label-primary ms-2">Remote</span>
                        <div className="text-muted small">
                            <i class="bi bi-geo-alt btsIcon"></i> Washington
                            <i class="bi bi-currency-dollar btsIcon ps-2"></i> 50k-80k/month
                        </div>
                    </div>
                </div>
            </td>
            <td>Feb 2, 2019 19:28</td>
            <td className=" fw-bold activeJob">
                <i class="bi bi-check"></i>
                <span className='badge bg-label-danger'>Active</span>
            </td>
            <td className="text-center">
                <button className="btn btn-light ViewDetatils">View Details</button>
            </td>
        </tr>
        <tr className='p-5'>
            <td>
                <div className="d-flex align-items-center">
                    <img src={Img2} style={{width : '50px'}} alt="logo" className="me-3 rounded" />
                    <div>
                        <strong>Product Designer</strong>
                        <span className="badge bg-label-primary ms-2">Full Time</span>
                        <div className="text-muted small">Dhaka | $50k-80k/month</div>
                    </div>
                </div>
            </td>
            <td>Dec 7, 2019 23:26</td>
            <td className="text-success fw-bold">✔ Active</td>
            <td className="text-center">
                <button className="btn btn-light btn-sm ViewDetatils">View Details</button>
            </td>
        </tr>
        <tr className='p-5'>
            <td>
                <div className="d-flex align-items-center">
                    <img src={Img3} style={{width : '50px'}} alt="logo" className="me-3 rounded"/>
                    <div>
                        <strong>Junior Graphic Designer</strong>
                        <span className="badge bg-label-primary ms-2">Temporary</span>
                        <div className="text-muted small">Brazil | $50k-80k/month</div>
                    </div>
                </div>
            </td>
            <td>Feb 2, 2019 19:28</td>
            <td className="text-success fw-bold">✔ Active</td>
            <td className="text-center">
                <button className="btn btn-primary btn-sm">View Details</button>
            </td>
        </tr>
        <tr className='p-5'>
            <td>
                <div className="d-flex align-items-center">
                    <img src={Img4} style={{width : '50px'}} alt="logo" className="me-3 rounded"/>
                    <div>
                        <strong>Visual Designer</strong>
                        <span className="badge bg-label-primary ms-2">Contract Base</span>
                        <div className="text-muted small">Wisconsin | $50k-80k/month</div>
                    </div>
                </div>
            </td>
            <td>Dec 7, 2019 23:26</td>
            <td className="text-success fw-bold">✔ Active</td>
            <td className="text-center">
                <button className="btn btn-primary btn-sm">View Details</button>
            </td>
        </tr>
        </tbody>
    </table>
    </div>
  )
    
  
}

