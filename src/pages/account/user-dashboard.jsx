import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './../../assets/user_dashboard.css';
import Header from '../../components/header.jsx';
import Footer from '../../components/footer.jsx';

function UserDashboard() {
  const [username, setUsername] = useState('User');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const token = localStorage.getItem('authToken');

    if (!token) {
      navigate('/login');
    } else if (storedUsername) {
      setUsername(storedUsername);
    }
  }, [navigate]);

  const tools = [
    {
      name: "Protein Marker Counter",
      description: "Analyze stained slides and count specific markers.",
      path: "/ihc-insight",
      icon: "pi pi-image",
    },
    {
      name: "Molecule Binding Predictor",
      description: "Compare two molecules and estimate their binding likelihood.",
      path: "/molicule-binding",
      icon: "pi pi-cog",
    },
    {
      name: "Research Analyzer",
      description: "Upload a paper to summarize it and extract key visuals.",
      path: "/research-analyzer",
      icon: "pi pi-file-pdf",
    },
    {
      name: "Cell Counter",
      description: "Detect and count cells from microscope images.",
      path: "/cell-count",
      icon: "pi pi-eye",
    },
  ];

  return (
    <>
      <Header />
      <div className="dashboard-wrapper">
        <div className="dashboard-header">
          <h1>Welcome, {username} </h1>
          <p>Explore the tools below to accelerate your biomedical research.</p>
        </div>

        <div className="dashboard-grid">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="dashboard-card"
              onClick={() => navigate(tool.path)}
            >
              <i className={`${tool.icon} dashboard-icon`}></i>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
              <button className="open-tool-btn">Open Tool</button>
            </div>
          ))}
        </div>

        <div className="dashboard-more-tools" style={{ textAlign: 'center', margin: '2rem 0' }}>
          <button
            className="open-tool-btn"
            style={{ fontSize: '1.1rem', padding: '0.8rem 2rem' }}
            onClick={() => navigate('/services')}
          >
            More Tools
          </button>
        </div>

        <div className="dashboard-footer">
          <p>&copy; {new Date().getFullYear()} NeuraMedix • Empowering Researchers</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserDashboard;