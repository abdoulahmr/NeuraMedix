import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { HelpOutline } from '@mui/icons-material';
import './../../assets/cell_count.css';
import Aside from '../../components/aside.jsx';

function CellCounter() {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [cellCount, setCellCount] = useState(null);
    const [processedImage, setProcessedImage] = useState(null);
    const [originalFilename, setOriginalFilename] = useState('');
    const [error, setError] = useState('');
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

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setError('');
        setProcessedImage(null);
        setCellCount(null);
        setOriginalFilename('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedFile) {
            setError('Please select an image file to upload.');
            return;
        }

        setError('');
        setCellCount(null);
        setProcessedImage(null);
        setOriginalFilename('');
        setLoading(true);

        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            const response = await fetch('http://164.92.167.174/api/cell_detection/', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                setCellCount(data.cell_count);
                setProcessedImage(data.processed_image || null);
                setOriginalFilename(data.original_filename || selectedFile.name);
            } else {
                setError(data.error || 'Failed to analyze image. Please try again.');
                console.error('API Error:', data);
            }
        } catch (err) {
            console.error('Network or unexpected error:', err);
            setError('An unexpected error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="app-layout">
                <Aside 
                    isCollapsed={isAsideCollapsed}
                    onToggle={() => setIsAsideCollapsed(!isAsideCollapsed)}
                    activeItem="cell-count"
                />
                <div className={`main-content ${isAsideCollapsed ? 'collapsed' : ''}`}>
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="cell-count-header">
                                <h1>Cell Detection & Counting</h1>
                                <p>Upload microscopy images for automated cell detection and counting analysis.</p>
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

                <form onSubmit={handleSubmit} className="upload-form">
                    <label htmlFor="file">Choose image to upload:</label>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        accept="image/png, image/jpeg, image/gif"
                        onChange={handleFileChange}
                        required
                    />
                    <br />
                    <button type="submit" disabled={loading || !selectedFile} className="analyze-button">
                        {loading ? 'Analyzing...' : 'Analyze Image'}
                    </button>
                </form>

                {cellCount !== null && (
                    <div className="results-section">
                        <h2>
                            Detection Results
                            {originalFilename && ` for "${originalFilename}"`}
                        </h2>
                        <p><strong>Detected Cells:</strong> {cellCount}</p>

                        {processedImage ? (
                            <>
                                <h3>Processed Image with Detections:</h3>
                                <p>Green boxes indicate detected cells with a score higher than 0.5.</p>
                                <img
                                    src={`data:image/png;base64,${processedImage}`}
                                    alt="Detected Cells"
                                    className="mask-image"
                                />
                            </>
                        ) : (
                            <p className="error-message">Processed image could not be generated.</p>
                        )}
                    </div>                        )}
                    </div>
                </div>
            </div>

            {/* Help Modal */}
            <Modal show={showHelpModal} onHide={() => setShowHelpModal(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Cell Detection & Counting - User Guide</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="help-content">
                        <h5>Overview</h5>
                        <p>This tool uses advanced computer vision algorithms to automatically detect and count cells in microscopy images. It's designed for research applications requiring accurate cell quantification.</p>
                        
                        <h5>How to Use</h5>
                        <div className="attribute-list">
                            <div className="attribute-item mb-3">
                                <strong>1. Image Upload:</strong>
                                <ul>
                                    <li>Click "Choose image to upload" to select your microscopy image</li>
                                    <li>Supported formats: PNG, JPEG, GIF</li>
                                    <li>Recommended: High-contrast images with clear cell boundaries</li>
                                </ul>
                            </div>
                            
                            <div className="attribute-item mb-3">
                                <strong>2. Analysis Process:</strong>
                                <ul>
                                    <li>Click "Analyze Image" to start the detection process</li>
                                    <li>The algorithm will identify individual cells using machine learning</li>
                                    <li>Processing time varies based on image size and cell density</li>
                                </ul>
                            </div>
                            
                            <div className="attribute-item mb-3">
                                <strong>3. Results Interpretation:</strong>
                                <ul>
                                    <li><strong>Cell Count:</strong> Total number of detected cells</li>
                                    <li><strong>Detection Visualization:</strong> Green bounding boxes around detected cells</li>
                                    <li><strong>Confidence Score:</strong> Only cells with &gt;50% confidence are counted</li>
                                </ul>
                            </div>
                            
                            <div className="attribute-item mb-3">
                                <strong>Best Practices:</strong>
                                <ul>
                                    <li>Use well-focused, high-resolution images</li>
                                    <li>Ensure adequate contrast between cells and background</li>
                                    <li>Avoid overlapping or clustered cells for better accuracy</li>
                                    <li>Consider image preprocessing for optimal results</li>
                                </ul>
                            </div>
                            
                            <div className="attribute-item mb-3">
                                <strong>Applications:</strong>
                                <ul>
                                    <li>Cell proliferation assays</li>
                                    <li>Cytotoxicity studies</li>
                                    <li>Cell culture monitoring</li>
                                    <li>Histological analysis</li>
                                    <li>Drug screening experiments</li>
                                </ul>
                            </div>
                            
                            <div className="attribute-item mb-3">
                                <strong>Technical Notes:</strong>
                                <ul>
                                    <li>Detection threshold: 0.5 confidence score</li>
                                    <li>Algorithm: Deep learning-based object detection</li>
                                    <li>Processing: Cloud-based GPU acceleration</li>
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

export default CellCounter;
