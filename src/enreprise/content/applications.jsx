import React, { useState } from 'react';
import img from '../../assets/images/profile.jpg';

// Sample data JSON
const jobApplications = [
  {
    id: 1,
    name: 'Ronald Richards',
    role: 'UI/UX Designer',
    experience: '7 Years Experience',
    education: 'Master Degree',
    appliedDate: 'Jan 23, 2022',
    cvLink: '#',
    photo: 'https://via.placeholder.com/50', // Replace with actual image URL
    isStarred: false, // Track the star status for each application
  },
  {
    id: 2,
    name: 'Theresa Webb',
    role: 'Product Designer',
    experience: '7 Years Experience',
    education: 'High School Degree',
    appliedDate: 'Jan 23, 2022',
    cvLink: '#',
    photo: 'https://via.placeholder.com/50', // Replace with actual image URL
    isStarred: false, // Track the star status for each application
  },
  {
    id: 3,
    name: 'Devon Lane',
    role: 'User Experience Designer',
    experience: '7 Years Experience',
    education: 'Master Degree',
    appliedDate: 'Jan 23, 2022',
    cvLink: '#',
    photo: 'https://via.placeholder.com/50', // Replace with actual image URL
    isStarred: false, // Track the star status for each application
  },
  {
    id: 4,
    name: 'Jessica Brown',
    role: 'Graphic Designer',
    experience: '5 Years Experience',
    education: 'Bachelor Degree',
    appliedDate: 'Feb 10, 2022',
    cvLink: '#',
    photo: 'https://via.placeholder.com/50', // Replace with actual image URL
    isStarred: false, // Track the star status for each application
  },
  {
    id: 5,
    name: 'Michael Davis',
    role: 'Web Developer',
    experience: '6 Years Experience',
    education: 'Master Degree',
    appliedDate: 'Mar 15, 2022',
    cvLink: '#',
    photo: 'https://via.placeholder.com/50', // Replace with actual image URL
    isStarred: false, // Track the star status for each application
  },
];

const JobApplications = () => {
  const [isLightBoxVisible, setLightBoxVisible] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);
  const [applications, setApplications] = useState(jobApplications);

  const handleOpenLightBox = (app) => {
    setSelectedApp(app);
    setLightBoxVisible(true);
  };

  const handleCloseLightBox = () => {
    setLightBoxVisible(false);
    setSelectedApp(null);
  };

  const toggleStar = (id) => {
    setApplications(applications.map(app => 
      app.id === id ? { ...app, isStarred: !app.isStarred } : app
    ));
    if (selectedApp && selectedApp.id === id) {
      setSelectedApp(prevApp => ({ ...prevApp, isStarred: !prevApp.isStarred }));
    }
  };

  return (
    <div className="container mt-5 pt-4">
      <h5 className="mb-4">Job Applications ({applications.length})</h5>

      {/* Lightbox Modal */}
      {isLightBoxVisible && selectedApp && (
        <div className="lightbox-overlay" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
        }}>
          <div className="lightbox-content" style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            width: '400px',
            maxWidth: '90%',
          }}>
            <h4>{selectedApp.name}</h4>
            <p>Role: {selectedApp.role}</p>
            <p>Experience: {selectedApp.experience}</p>
            <p>Education: {selectedApp.education}</p>
            <p>Applied: {selectedApp.appliedDate}</p>
            <button
              className="btn btn-light me-2 p-3 rounded border d-flex align-items-center justify-content-center linksBtn p-0 mx-1"
              onClick={() => toggleStar(selectedApp.id)}
            >
              <i
                className={`fi ${selectedApp.isStarred ? 'fi-sr-star' : 'fi-rr-star'}`}
                style={{ color: "#0a65cc" }}
              ></i>
            </button>
            <a href={selectedApp.cvLink} className="blue-btn text-decoration-none me-3">Download CV</a>
            <button onClick={handleCloseLightBox} className="gray-btn mt-2">Close</button>
          </div>
        </div>
      )}

      <div className="row g-4 bg-light p-2 mt-0">
        {applications.map((app) => (
          <div key={app.id} className="col-lg-3 col-md-4 col-sm-6 d-flex">
            <div className="card shadow-sm border-0 w-100">
              <div className="card-body d-flex pb-1">
                <img
                  src={img} // Use the app's photo or fallback to the default
                  alt={`${app.name}'s photo`}
                  className="rounded-circle me-3"
                  style={{ width: '45px', height: '45px', objectFit: 'cover' }}
                  onClick={() => handleOpenLightBox(app)}
                />
                <div className="w-100" onClick={() => handleOpenLightBox(app)}>
                  <h6 className="card-title mb-1">{app.name}</h6>
                  <p className="text-muted small mb-2">{app.role}</p>
                </div>
                
                <button
                  className="btn btn-light me-2 p-3 rounded border d-flex align-items-center justify-content-center linksBtn p-0 mx-1"
                  onClick={() => toggleStar(app.id)}
                >
                  <i
                    className={`fi ${app.isStarred ? 'fi-sr-star' : 'fi-rr-star'}`}
                    style={{ color: "#0a65cc" }}
                  ></i>
                </button>

              </div>
              <hr className="m-1 p-1" />
              <div className="mx-auto mb-2 mt-0">
                <ul className="list-styled small mb-2">
                  <li>{app.experience}</li>
                  <li>Education: {app.education}</li>
                  <li>Applied: {app.appliedDate}</li>
                </ul>
                <a
                  href={app.cvLink}
                  className="btn btn-link ps-3 text-primary text-decoration-none small"
                >
                  <i className="fi fi-br-download me-2" style={{ fontSize: '16px' }}></i>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobApplications;
