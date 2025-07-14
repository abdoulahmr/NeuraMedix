import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { HelpOutline } from '@mui/icons-material';
import Aside from '../../components/aside';
import './../../assets/mol_bind.css';

function MolecularBindingPage() {
  const navigate = useNavigate();
  const [smiles1, setSmiles1] = useState('');
  const [smiles2, setSmiles2] = useState('');
  const [predictionData, setPredictionData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isAsideCollapsed, setIsAsideCollapsed] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const token = localStorage.getItem('authToken');

  // Authentication check
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  const formatValue = (value) => {
    return typeof value === 'number' ? value.toFixed(3) : value;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!smiles1 || !smiles2) {
      setError('Both SMILES strings are required.');
      setPredictionData(null);
      return;
    }

    setError(null);
    setLoading(true);
    setPredictionData(null);

    try {
      const response = await fetch('https://api.neuramedix.co/api/mol_binding/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ smiles1, smiles2 }),
      });

      if (!response.ok) {
        const errorDetail = await response.json().catch(() => response.statusText);
        throw new Error(`API Error: ${response.status} - ${typeof errorDetail === 'object' ? JSON.stringify(errorDetail) : errorDetail}`);
      }

      const data = await response.json();
      setPredictionData(data);
    } catch (err) {
      console.error("Error fetching prediction:", err);
      setError("Failed to get prediction results: " + err.message);
      setPredictionData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyzeAnother = () => {
    setSmiles1('');
    setSmiles2('');
    setPredictionData(null);
    setError(null);
  };

  return (
    <div className="app-layout">
      <Aside
        isCollapsed={isAsideCollapsed}
        onToggle={() => setIsAsideCollapsed(!isAsideCollapsed)}
        activeItem="mol-binding"
      />
      <div className={`main-content ${isAsideCollapsed ? 'collapsed' : ''}`}>  
        <div className="container combined-page-container">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h1>BindPredict</h1>
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

          {(!smiles1 && !smiles2) && !predictionData && !loading && (
            <p>Enter two SMILES strings to compare their potential binding.</p>
          )}

          {!predictionData && !loading && (
            <>
              {error && <p className="error-message">{error}</p>}
              <form onSubmit={handleSubmit} className="molecular-form">
                <div className="form-group">
                  <label htmlFor="smiles1">SMILES for Molecule 1:</label>
                  <input
                    type="text"
                    id="smiles1"
                    name="smiles1"
                    placeholder="e.g., CCCN(CCC)CCC"
                    value={smiles1}
                    onChange={(e) => setSmiles1(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="smiles2">SMILES for Molecule 2:</label>
                  <input
                    type="text"
                    id="smiles2"
                    name="smiles2"
                    placeholder="e.g., c1ccccc1"
                    value={smiles2}
                    onChange={(e) => setSmiles2(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="submit-button" disabled={loading}>
                  {loading ? 'Analyzing...' : 'Analyze Binding'}
                </button>
              </form>
            </>
          )}

          {loading && (
            <div className="loading-state">
              <p>Analyzing molecular binding...</p>
              <div className="spinner"></div>
            </div>
          )}

          {predictionData && (
            <div className="results-section">
              <h2>Prediction Results</h2>
              <div className="molecule-display">
                <div className="molecule-card">
                  <h3>Molecule X (SMILES 1)</h3>
                  <p className="smiles-string">{predictionData.smiles1}</p>
                  {predictionData.img1 ? (
                    <img src={`data:image/png;base64,${predictionData.img1}`} alt="2D structure of Molecule X" className="mol-image" />
                  ) : (
                    <p className="error-message">Image not available for Molecule X.</p>
                  )}
                </div>
                <div className="molecule-card">
                  <h3>Molecule Y (SMILES 2)</h3>
                  <p className="smiles-string">{predictionData.smiles2}</p>
                  {predictionData.img2 ? (
                    <img src={`data:image/png;base64,${predictionData.img2}`} alt="2D structure of Molecule Y" className="mol-image" />
                  ) : (
                    <p className="error-message">Image not available for Molecule Y.</p>
                  )}
                </div>
              </div>
              <div className="analysis-data">
                <h2>Analysis Data</h2>
                <ul>
                  <li><strong>Tanimoto Similarity:</strong> {predictionData.similarity !== undefined ? formatValue(predictionData.similarity) : 'N/A'}</li>
                  <li><strong>Common Functional Groups:</strong> {predictionData.functional_group_match !== undefined ? predictionData.functional_group_match.toString() : 'N/A'}</li>
                </ul>
              </div>
              <div className="molecular-descriptors">
                <div className="descriptor-section">
                  <h3>For Molecule X:</h3>
                  <ul>
                    {Object.entries(predictionData.descriptors1 || {}).map(([key, value]) => (
                      <li key={`mol1-${key}`}>
                        <strong>{key}:</strong> {formatValue(value)}
                      </li>
                    ))}
                    <li><strong>Binding Affinity-Like Score:</strong> {predictionData.score1 !== undefined ? formatValue(predictionData.score1) : 'N/A'}</li>
                  </ul>
                </div>
                <div className="descriptor-section">
                  <h3>For Molecule Y:</h3>
                  <ul>
                    {Object.entries(predictionData.descriptors2 || {}).map(([key, value]) => (
                      <li key={`mol2-${key}`}>
                        <strong>{key}:</strong> {formatValue(value)}
                      </li>
                    ))}
                    <li><strong>Binding Affinity-Like Score:</strong> {predictionData.score2 !== undefined ? formatValue(predictionData.score2) : 'N/A'}</li>
                  </ul>
                </div>
              </div>
              <div className="prediction-section">
                <h2>Prediction</h2>
                <p className="prediction-message">{predictionData.prediction || 'No specific prediction available.'}</p>
              </div>
              <button onClick={handleAnalyzeAnother} className="submit-button analyze-another-button">Analyze Another Pair</button>
            </div>
          )}
        </div>
        {/* Help Modal */}
        <Modal show={showHelpModal} onHide={() => setShowHelpModal(false)} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>BindPredict - Help</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="help-content">
              <h5>How to Use</h5>
              <ul>
                <li>Enter valid SMILES strings for two molecules.</li>
                <li>Click "Analyze Binding" to compare their binding potential.</li>
                <li>View molecular structures, similarity, functional groups, and binding scores.</li>
              </ul>
              <h5>Best Practices</h5>
              <ul>
                <li>Use canonical SMILES for best results.</li>
                <li>Interpret binding scores as relative, not absolute.</li>
                <li>Consult cheminformatics experts for advanced analysis.</li>
              </ul>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowHelpModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default MolecularBindingPage;
