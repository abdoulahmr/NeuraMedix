import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { HelpOutline } from '@mui/icons-material';
import CircularProgress from '@mui/material/CircularProgress';
import { Gauge } from '@mui/x-charts/Gauge';
import Aside from '../../components/aside';
import './../../assets/heart_prediction.css';

function LungIQ() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [isAsideCollapsed, setIsAsideCollapsed] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setError('');
    setResult(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setError('❌ Please select a CT image file.');
      return;
    }
    setLoading(true);
    setError('');
    setResult(null);

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/lungiq/', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => response.statusText);
        throw new Error(errorData.error || response.statusText || 'API error');
      }
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError('❌ ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const parseChartData = (stepObj) => {
    return {
      labels: Object.keys(stepObj),
      values: Object.values(stepObj).map(v => parseFloat(v.replace('%', '')))
    };
  };

  return (
    <>
      <div className="app-layout">
        <Aside
          isCollapsed={isAsideCollapsed}
          onToggle={() => setIsAsideCollapsed(!isAsideCollapsed)}
          activeItem="lung-prediction"
        />
        <div className={`main-content ${isAsideCollapsed ? 'collapsed' : ''}`}>
          <div className="container">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h1>LungIQ CT Analysis</h1>
                <p>Upload a chest CT image to detect cancer, classify malignancy, and subtype.</p>
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

            {error && <p className="error">{error}</p>}

            <form onSubmit={handleSubmit} className="modern-form">
              <div className="form-group mb-3">
                <label>Upload CT Image:</label>
                <input type="file" className="form-control" accept="image/*" onChange={handleFileChange} />
              </div>
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? <CircularProgress size={20} color="inherit" /> : 'Analyze'}
              </button>
            </form>

           {["Step 1: Cancer Detection", "Step 2: Benign vs Malignant", "Step 3: Malignant Subtype"].map((stepKey) => (
            result?.[stepKey] && (
                <div key={stepKey} className="mb-4">
                <h6 className="mb-2">{stepKey}</h6>
                <div className="d-flex flex-wrap gap-3">
                    {Object.entries(result[stepKey]).map(([label, value]) => {
  const num = parseFloat(value.replace('%', ''));
  return (
    <div key={label} className="card p-3" style={{ width: '220px', backgroundColor: '#fff', color: '#212121', boxShadow: '0 2px 8px rgba(22,153,198,0.08)', borderRadius: '12px' }}>
      <h6 style={{ color: '#1699C6', marginBottom: 4 }}>{label}</h6>
      <p className="mb-2" style={{ color: '#333', fontWeight: 500 }}>{value}</p>
      <Gauge
        width={200}
        height={100}
        value={isNaN(num) ? 0 : num}
        valueMin={0}
        valueMax={100}
        startAngle={-90}
        endAngle={90}
        text={({ value }) => `${value.toFixed(1)}%`}
        sx={{
          [`& .MuiGauge-valueText`]: {
            fill: '#212121',
            fontSize: '0.8rem',
          },
        }}
      />
    </div>
  );
})}
                </div>
                </div>
            )
            ))}

            {result?.GradCAM && (
              <div className="mb-4">
                <h6 className="mb-2" style={{ color: '#1699C6' }}>GradCAM Visualization</h6>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f8fafc', borderRadius: '12px', padding: '16px', boxShadow: '0 2px 8px rgba(22,153,198,0.08)' }}>
                  <img
                    src={result.GradCAM.startsWith('data:') ? result.GradCAM : `data:image/png;base64,${result.GradCAM}`}
                    alt="GradCAM"
                    style={{ maxWidth: '100%', maxHeight: '320px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(22,153,198,0.10)' }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Help Modal */}
      <Modal show={showHelpModal} onHide={() => setShowHelpModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>LungIQ - Help</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="help-content">
            <h5>How to Use</h5>
            <ul>
              <li>Upload a chest CT image (JPG/PNG)</li>
              <li>Click "Analyze" to run the model</li>
              <li>View probabilities and diagnosis steps</li>
            </ul>

            <h5>Result Interpretation</h5>
            <ul>
              <li>Step 1: Detects cancer probability</li>
              <li>Step 2: Classifies as benign or malignant</li>
              <li>Step 3: Identifies malignant subtype</li>
              <li>Final Decision: Likely diagnostic path</li>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowHelpModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LungIQ;
