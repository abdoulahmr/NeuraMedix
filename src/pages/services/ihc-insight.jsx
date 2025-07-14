import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { HelpOutline } from '@mui/icons-material';
import './../../assets/ihc_insight.css';
import Header from '../../components/header.jsx';
import Footer from '../../components/footer.jsx';
import Aside from '../../components/aside.jsx';

function IHCInsight() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [originalFileName, setOriginalFileName] = useState('');
  const [isAsideCollapsed, setIsAsideCollapsed] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const token = localStorage.getItem('authToken');

  // Authentication check
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      setOriginalFileName(file.name);
    } else {
      setOriginalFileName('');
    }
    setError(null);
    setAnalysisResults(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      setError('Please choose an image to upload.');
      return;
    }

    setError(null);
    setLoading(true);
    setAnalysisResults(null);

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await fetch('http://api.neuramedix.co/api/ihc_insight/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => response.statusText);
        throw new Error(`API Error: ${response.status} - ${typeof errorData === 'object' ? JSON.stringify(errorData) : errorData}`);
      }

      const data = await response.json();
      setAnalysisResults(data);
    } catch (err) {
      console.error("Error during image analysis:", err);
      setError("Failed to analyze image: " + err.message);
      setAnalysisResults(null);
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyzeAnother = () => {
    setSelectedFile(null);
    setAnalysisResults(null);
    setError(null);
    setOriginalFileName('');
  };

  return (
    <>
      <div className="app-layout">
        <Aside
          isCollapsed={isAsideCollapsed}
          onToggle={() => setIsAsideCollapsed(!isAsideCollapsed)}
        />
        <div className={`main-content ${isAsideCollapsed ? 'collapsed' : ''}`}>
          <div className="container ihc-insight-container">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="ihc-insight-header">
                <h1>Upload an Image for PathoQuant</h1>
                <p>Upload histological images for quantitative pathology analysis and IHC biomarker detection.</p>
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

            {!analysisResults && !loading && (
              <>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit} className="image-upload-form">
                  <label htmlFor="file" className="file-input-label">
                    Choose an image:
                    <input
                      type="file"
                      name="file"
                      id="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      required
                      className="hidden-file-input"
                    />
                    <span className="selected-file-name">
                      {selectedFile ? selectedFile.name : 'No file chosen'}
                    </span>
                  </label>
                  <button type="submit" className="analyze-button" disabled={loading || !selectedFile}>
                    {loading ? 'Analyzing...' : 'Analyze Image'}
                  </button>
                </form>
              </>
            )}

            {loading && (
              <div className="loading-state">
                <p>Analyzing image...</p>
                <div className="spinner"></div>
              </div>
            )}

            {analysisResults && analysisResults.brown_pixel_count !== undefined && (
              <div className="results-section">
                <h2>Analysis Results for "{originalFileName}"</h2>
                <p><strong>Total Brown Pixels:</strong> {analysisResults.brown_pixel_count}</p>

                <h3>Brown Shade Distribution:</h3>
                <ul>
                  {analysisResults.distribution && Object.keys(analysisResults.distribution).length > 0 ? (
                    Object.entries(analysisResults.distribution).map(([range, count]) => (
                      <li key={range}><strong>{range} intensity:</strong> {count} pixels</li>
                    ))
                  ) : (
                    <li>No shade distribution data available.</li>
                  )}
                </ul>

                {analysisResults.mask_base64 ? (
                  <>
                    <h3>Brown Pixel Mask:</h3>
                    <p>White pixels indicate detected brown areas.</p>
                    <img
                      src={`data:image/png;base64,${analysisResults.mask_base64}`}
                      alt="Brown pixel mask"
                      className="mask-image"
                    />
                  </>
                ) : (
                  <p className="error-message">Brown pixel mask image could not be generated.</p>
                )}

                <button onClick={handleAnalyzeAnother} className="analyze-button analyze-another-button">Analyze Another Image</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Help Modal */}
      <Modal show={showHelpModal} onHide={() => setShowHelpModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>PathoQuant - User Guide</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="help-content">
            <h5>Overview</h5>
            <p>PathoQuant is an advanced tool for quantitative analysis of histological images, specifically designed for immunohistochemical (IHC) staining analysis and biomarker detection.</p>
            
            <h5>How to Use</h5>
            <div className="attribute-list">
              <div className="attribute-item mb-3">
                <strong>1. Image Upload:</strong>
                <ul>
                  <li>Click "Choose an image" to select your histological image</li>
                  <li>Supported formats: JPEG, PNG, TIFF files</li>
                  <li>Maximum file size: 10MB</li>
                </ul>
              </div>
              
              <div className="attribute-item mb-3">
                <strong>2. Analysis Process:</strong>
                <ul>
                  <li>Click "Analyze Image" to start the quantitative analysis</li>
                  <li>The system will detect and count brown/DAB-positive pixels</li>
                  <li>Processing typically takes 10-30 seconds depending on image size</li>
                </ul>
              </div>
              
              <div className="attribute-item mb-3">
                <strong>3. Results Interpretation:</strong>
                <ul>
                  <li><strong>Brown Pixel Count:</strong> Total number of positive staining pixels detected</li>
                  <li><strong>Intensity Distribution:</strong> Breakdown by staining intensity levels</li>
                  <li><strong>Detection Mask:</strong> Visual overlay showing detected areas in white</li>
                </ul>
              </div>
              
              <div className="attribute-item mb-3">
                <strong>Best Practices:</strong>
                <ul>
                  <li>Use well-focused, evenly lit microscopy images</li>
                  <li>Ensure consistent staining protocols across samples</li>
                  <li>Include appropriate positive and negative controls</li>
                  <li>Verify automated results with manual inspection</li>
                </ul>
              </div>
              
              <div className="attribute-item mb-3">
                <strong>Clinical Applications:</strong>
                <ul>
                  <li>Biomarker quantification for research</li>
                  <li>Treatment response assessment</li>
                  <li>Standardized pathology scoring</li>
                  <li>Quality control in diagnostic workflows</li>
                </ul>
              </div>
            </div>
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

export default IHCInsight;
