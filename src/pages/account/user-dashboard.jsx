import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './../../assets/user_dashboard.css';

// Define the SERVICES array outside the component to prevent re-creation on every render
const SERVICES = [
  {
    title: 'Protein Marker Counter',
    desc: 'Analyze image data to count specific protein markers and their distribution.',
    icon: 'pi pi-image',
    path: '/ihc-insight',
    disabled: false,
  },
  {
    title: 'Molecule Binding Predictor',
    desc: 'Predict potential binding interactions between two molecular structures.',
    icon: 'pi pi-dna',
    path: '/molicule-binding',
    disabled: false,
  },
  {
    title: 'Lung Tumor Detection',
    desc: 'Utilize AI to assist in identifying potential lung tumors from medical images. (Coming Soon)',
    icon: 'pi pi-microchip-ai',
    disabled: true,
  },
  {
    title: 'Heart Disease Detection',
    desc: 'Predict the likelihood of heart diseases based on various health indicators. (Coming Soon)',
    icon: 'pi pi-heart-fill',
    disabled: true,
  },
  {
    title: 'Cell Detection & Counting',
    desc: 'Automated detection and counting of cells in microscopic images. (Coming Soon)',
    icon: 'pi pi-th-large',
    disabled: true,
  },
  {
    title: 'Explore All Services',
    desc: 'Discover the full range of tools and features available to you.',
    icon: 'pi pi-plus',
    path: '/services',
    disabled: false,
    extraClass: 'all-services-card',
  },
];

function UserDashboard() {
  const [username, setUsername] = useState('Guest');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const authToken = localStorage.getItem('authToken');
    if (storedUsername && authToken) {
      setUsername(storedUsername);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      try {
        await fetch('http://127.0.0.1:8000/api/logout/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ refresh: refreshToken }),
        });
      } catch (error) {
        console.error('Error during backend logout:', error); // Log error but proceed
      }
    }
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome, {username}!</h1>
        <p className="dashboard-intro">Your personalized hub for our advanced services.</p>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>

      <div className="dashboard-content">
        <h2>Our Services</h2>
        <div className="service-cards-grid">
          {SERVICES.map((service, index) => (
            <div
              key={index} // Use a unique key for each item in the list
              className={`service-card ${service.disabled ? 'disabled' : ''} ${service.extraClass || ''}`}
              onClick={service.disabled ? null : () => navigate(service.path)} // Only navigate if not disabled
              role={service.disabled ? "presentation" : "button"} // Use role for accessibility
              aria-disabled={service.disabled} // Indicate if disabled for screen readers
            >
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <span className={`card-icon ${service.icon}`}></span>
            </div>
          ))}
        </div>
      </div>

      <div className="dashboard-footer">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </div>
  );
}

export default UserDashboard;