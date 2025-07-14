import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { HelpOutline } from '@mui/icons-material';
import CircularProgress from '@mui/material/CircularProgress';
import './../../assets/heart_prediction.css';
import Aside from '../../components/aside';

function HeartPrediction() {
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');
  const [formData, setFormData] = useState({
    age: '', sex: '1', cp: '', trestbps: '', chol: '', fbs: '0', restecg: '', thalach: '', exang: '0', oldpeak: '', slope: '',
  });
  const [error, setError] = useState('');
  const [predictionResult, setPredictionResult] = useState(null);
  const [probability, setProbability] = useState(null);
  const [isAsideCollapsed, setIsAsideCollapsed] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // Authentication check
  useEffect(() => {
    if (!token) navigate('/login');
  }, [token, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setPredictionResult(null);
    setProbability(null);
    setLoading(true);
    try {
      const response = await fetch('https://api.neuramedix.co/api/heart_disease_prediction/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setLoading(false);
      if (!response.ok) throw new Error(data.error || 'Something went wrong');
      setPredictionResult(data.prediction);
      const prob = data.probability !== undefined ? data.probability : data.risk;
      setProbability(prob !== undefined ? prob : null);
      if (prob === undefined) console.warn('Probability value not found in API response:', data);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return (
    <>
      <div className="app-layout">
        <Aside
          isCollapsed={isAsideCollapsed}
          onToggle={() => setIsAsideCollapsed(!isAsideCollapsed)}
          activeItem="heart-prediction"
        />
        <div className={`main-content ${isAsideCollapsed ? 'collapsed' : ''}`}>  
          <div className="container">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <div className="cardioai-title">
                  <h1>Heart Disease Prediction</h1>
                </div>
                <p>Enter the patient's physiological data to predict the risk of heart disease.</p>
              </div>
              <Button 
                variant="outline-info" 
                size="sm"
                onClick={() => setShowHelpModal(true)}
                className="d-flex align-items-center gap-2"
              >
                <HelpOutline fontSize="small" />
                Help
              </Button>
            </div>

            {error && <p className="error">❌ {error}</p>}

            <form onSubmit={handleSubmit} className="modern-form">
              <div className="form-grid">
                <div className="form-group">
                  <label>Age (years):</label>
                  <input type="number" name="age" min="0" value={formData.age} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Sex:</label>
                  <select name="sex" value={formData.sex} onChange={handleChange} required>
                    <option value="1">Male</option>
                    <option value="0">Female</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Chest Pain Type (0–3):</label>
                  <input type="number" name="cp" min="0" max="3" value={formData.cp} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Resting Blood Pressure (mm Hg):</label>
                  <input type="number" name="trestbps" min="0" value={formData.trestbps} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Serum Cholesterol (mg/dl):</label>
                  <input type="number" name="chol" min="0" value={formData.chol} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Fasting Blood Sugar &gt; 120 mg/dl:</label>
                  <select name="fbs" value={formData.fbs} onChange={handleChange} required>
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Resting ECG (0–2):</label>
                  <input type="number" name="restecg" min="0" max="2" value={formData.restecg} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Max Heart Rate Achieved:</label>
                  <input type="number" name="thalach" min="0" value={formData.thalach} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Exercise Induced Angina:</label>
                  <select name="exang" value={formData.exang} onChange={handleChange} required>
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>ST Depression (float):</label>
                  <input type="number" step="0.1" min="0" name="oldpeak" value={formData.oldpeak} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Slope of Peak Exercise ST Segment (0–2):</label>
                  <input type="number" min="0" max="2" name="slope" value={formData.slope} onChange={handleChange} required />
                </div>
              </div>
              <button type="submit" className="submit-btn" disabled={error || predictionResult || probability === null ? false : loading}>
                {loading ? <CircularProgress size={20} color="inherit" /> : 'Get Prediction'}
              </button>
            </form>

            {predictionResult && (
              <div className="results-section">
                <p><strong>Prediction:</strong> {predictionResult}</p>
                {probability !== null && (
                  <p className="risk"><strong>Probability of Heart Disease:</strong> {probability.toFixed(2)}%</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Help Modal */}
      <Modal show={showHelpModal} onHide={() => setShowHelpModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Heart Disease Prediction - Help</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="help-content">
            <h5>How to Use</h5>
            <ul>
              <li><strong>Age:</strong> Patient's age in years</li>
              <li><strong>Sex:</strong> 1 = Male, 0 = Female</li>
              <li><strong>Chest Pain Type:</strong> 0 = Typical angina, 1 = Atypical angina, 2 = Non-anginal pain, 3 = Asymptomatic</li>
              <li><strong>Resting Blood Pressure:</strong> mm Hg</li>
              <li><strong>Serum Cholesterol:</strong> mg/dl</li>
              <li><strong>Fasting Blood Sugar:</strong> 1 = &gt;120 mg/dl, 0 = &le;120 mg/dl</li>
              <li><strong>Resting ECG:</strong> 0 = Normal, 1 = ST-T wave abnormality, 2 = Left ventricular hypertrophy</li>
              <li><strong>Max Heart Rate Achieved:</strong> bpm</li>
              <li><strong>Exercise Induced Angina:</strong> 1 = Yes, 0 = No</li>
              <li><strong>ST Depression:</strong> Numeric value (float)</li>
              <li><strong>Slope:</strong> 0 = Upsloping, 1 = Flat, 2 = Downsloping</li>
            </ul>
            <h5>Result Interpretation</h5>
            <ul>
              <li><strong>Prediction:</strong> Indicates presence or absence of heart disease</li>
              <li><strong>Probability:</strong> Estimated risk percentage</li>
            </ul>
            <h5>Best Practices</h5>
            <ul>
              <li>Double-check all input values for accuracy</li>
              <li>Consult a physician for clinical decisions</li>
              <li>Use this tool for research and screening, not diagnosis</li>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowHelpModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HeartPrediction;