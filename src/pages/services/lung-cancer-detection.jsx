import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './../../assets/lung_detection.css';
import Header from '../../components/header.jsx';
import Footer from '../../components/footer.jsx';

function LungCancerDetection() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Authentication check
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setResult(null);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError('Please upload a CT scan image.');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('https://api.neuramedix.co/api/lung_cancer_detection/', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to analyze image');

      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <h1>Lung Cancer Detection</h1>
        <p>Upload a chest CT scan to detect signs of lung cancer using AI.</p>

        <form onSubmit={handleSubmit} className="upload-form">
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Analyzing...' : 'Analyze Image'}
          </button>
        </form>

        {error && <div className="error">❌ {error}</div>}

        {result && (
          <div className="results-section">
            <p><strong>Prediction:</strong> {result.prediction}</p>
            <p className="risk"><strong>Probability:</strong> {result.probability.toFixed(2)}%</p>
            {result.annotated_image && (
              <img
                src={`data:image/png;base64,${result.annotated_image}`}
                alt="Detected"
                className="result-image"
              />
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default LungCancerDetection;