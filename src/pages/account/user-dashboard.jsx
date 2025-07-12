import React, { useEffect } from 'react';
import { Card, Row, Col, Container, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './../../assets/user_dashboard.css';
import Header from '../../components/header';
import {
  Science,
  Biotech,
  Visibility,
  DocumentScanner,
  Favorite,
  Assignment,
  Analytics,
  Hub,
  ArrowForward
} from '@mui/icons-material';

const UserDashboard = () => {
  const navigate = useNavigate();

  // Authentication check
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const ai_agents = [
    {
      name: 'LungIQ4',
      status: 'New',
      description: 'AI agent for lung cancer diagnosis assistance',
      lastUpdated: 'Last used: 2 hours ago',
      icon: "./img/LungIQ_Logo.png"
    },
    {
      name: 'CardioAI',
      description: 'AI agent for cardiovascular risk assessment',
      lastUpdated: 'Last used: 1 day ago',
      icon: "./img/CardioAI_Logo.png"
    },
    {
      name: 'PathoQuant',
      description: 'Quantitative pathology & IHC analysis',
      lastUpdated: '5 samples squared',
      icon: "./img/PathoQuant_Logo.png"
    },
    {
      name: 'CellScope AI',
      description: 'Microscopic cell analysis using AI',
      lastUpdated: '324 cells analyzed',
      icon: "./img/CellScope_AI_Logo.png"
    },
  ];

  const tools = [
    {
      name: 'ManuscriptMate',
      status: 'New',
      description: 'Publication-ready draft assistance',
      lastUpdated: 'Last used: 3 months ago',
      icon: <Assignment />
    },
    {
      name: 'PaperSage',
      status: 'New',
      description: 'Intelligent paper summarization & analysis',
      lastUpdated: '10 papers analyzed',
      icon: <Analytics />
    },
    {
      name: 'BindPredict',
      description: 'Molecular binding prediction',
      lastUpdated: 'Last used: 1 day ago',
      icon: <Biotech />
    },
    {
      name: 'DockSim',
      description: 'Molecular docking simulation',
      lastUpdated: '2 simulations active',
      icon: <Hub />
    },
  ];

  const getBadgeVariant = (status) => {
    switch (status.toLowerCase()) {
      case 'new':
        return 'success';
      case 'comming soon':
        return 'info';
      case 'under maintenance':
        return 'warning';
      default:
        return 'dark';
    }
  };

  const handleCardClick = (itemName) => {
    // Navigation logic based on the item name
    const routeMap = {
      'LungIQ4': '/services/lung-prediction',
      'CardioAI': '/services/heart-prediction',
      'PathoQuant': '/services/ihc-insight',
      'CellScope AI': '/services/cell-count',
      'ManuscriptMate': '/services/auto-publish-tool',
      'PaperSage': '/services/research-analyzer',
      'BindPredict': '/services/molicule-binding',
      'DockSim': '/services/lung-cancer-detection'
    };
    
    const route = routeMap[itemName];
    if (route) {
      navigate(route);
    } else {
      console.log(`No route defined for ${itemName}`);
    }
  };

  const renderCards = (items) =>
    items.map((item) => (
      <Col key={item.name} xs={12} md={6} lg={3} className="mb-4 d-flex">
        <Card 
          className="dashboard-card flex-fill" 
          style={{ cursor: 'pointer' }}
          onClick={() => handleCardClick(item.name)}
        >
          <Card.Body className="d-flex flex-column">
            <div className="d-flex align-items-center mb-3">
              <div className="card-icon me-3">
                {typeof item.icon === 'string' ? (
                  <img 
                      src={item.icon} 
                      alt={`${item.name} icon`}
                      style={{ 
                        width: '28px',
                        height: '28px',
                        objectFit: 'contain'
                      }}
                    />
                ) : (
                  <div style={{ fontSize: '40px', color: '#1699C6' }}>
                    {item.icon}
                  </div>
                )}
              </div>
              <div>
                <Card.Title className="mb-1">{item.name}</Card.Title>
                {item.status && <Badge bg={getBadgeVariant(item.status)}>{item.status}</Badge>}
              </div>
            </div>
            <Card.Text className="flex-grow-1 text-muted">
              {item.description}
            </Card.Text>
            <Card.Text className="text-end text-secondary small">
              {item.lastUpdated}
            </Card.Text>
            <div className="d-flex justify-content-end align-items-center mt-2 pt-2 border-top">
              <span className="text-primary small me-2">Open Tool</span>
              <ArrowForward 
                style={{ 
                  color: '#0d6efd', 
                  fontSize: '16px',
                  transition: 'transform 0.2s ease'
                }} 
                className="arrow-icon"
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    ));

  return (
    <>
      <Header />
      <div className="user-dashboard">
          <div className="dashboard-header">
            <h1><b>Welcome back, Doctor</b></h1>
            <p>Your AI-powered biomedical research hub is ready. Access your intelligent diagnostic and research tools.</p>
            <div className="dashboard-stats d-flex gap-4 my-4">
              <div className="stat-item flex-fill">
                <h2>Tools</h2>
                <p>8 Active Tools</p>
              </div>
              <div className="stat-item flex-fill">
                <h2>Publications</h2>
                <p>3 New Publications</p>
              </div>
              <div className="stat-item flex-fill">
                <h2>Research Papers</h2>
                <p>10 Papers Analyzed</p>
              </div>
            </div>
          </div>

          <hr />
          <div className='title-container'>
            <h2 className="mb-4">AI Agents</h2>
            <a href="" className="text-primary small">View All</a>
          </div>
          <Row className='ai-agents-row'>
            {renderCards(ai_agents)}
          </Row>

          <hr />
          <div className='title-container'>
            <h2 className="mb-4">Research Tools</h2>
            <a href="" className="text-primary small">View All</a>
          </div>
          <Row>
            {renderCards(tools)}
          </Row>
      </div>
    </>
  );
};

export default UserDashboard;
