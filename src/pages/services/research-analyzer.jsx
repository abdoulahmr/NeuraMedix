import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './../../assets/research-analyzer.css';
import Header from '../../components/header';
import Footer from '../../components/footer';

function ResearchAnalyzer() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState('');
  const [keywords, setKeywords] = useState([]);
  const [images, setImages] = useState([]);
  const [methodology, setMethodology] = useState('');
  const [error, setError] = useState('');
  const token = localStorage.getItem('authToken');

  // Authentication check
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a PDF file.');
      return;
    }

    setError('');
    setLoading(true);
    setSummary('');
    setKeywords([]);
    setImages([]);
    setMethodology('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('http://164.92.167.174/api/research_analyzer/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setSummary(data.summary);
      setKeywords(data.keywords || []);
      setImages(data.images || []);
      setMethodology(data.methodology || '');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Open image in new tab on click
  const openImageInNewTab = (base64, ext) => {
    const image = new Image();
    image.src = `data:image/${ext};base64,${base64}`;
    const w = window.open('');
    if (w) {
      w.document.write(image.outerHTML);
    }
  };

  return (
    <>
      <Header />
      <div className="analyzer-wrapper">
        <div className="analyzer-card">
          <h1>Research Analyzer</h1>
          <p className="subtext">
            Upload a biomedical research paper and receive a smart summary, insights, and extracted figures powered by AI.
          </p>

          <div className="upload-box">
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setFile(e.target.files[0])}
              className="file-input"
            />
            <button onClick={handleUpload} disabled={loading} className="analyze-btn">
              {loading ? 'Analyzing...' : 'Analyze PDF'}
            </button>
          </div>

          {error && <div className="error-message">❌ {error}</div>}

          {summary && (
            <div className="results-block">
              <h2>Summary</h2>
              <p className="summary">{summary}</p>
            </div>
          )}

          {keywords.length > 0 && (
            <div className="results-block">
              <h2>Keywords</h2>
              <div className="keyword-list">
                {keywords.map((word, index) => (
                  <span key={index} className="keyword-tag">{word}</span>
                ))}
              </div>
            </div>
          )}

          {images.length > 0 && (
            <div className="results-block">
              <h2>Extracted Images</h2>
              <div className="image-gallery">
                {images.map((img, idx) => (
                  <div key={idx} className="image-box">
                    <img
                      src={`data:image/${img.ext};base64,${img.base64}`}
                      alt={img.title || `Figure ${img.page}-${img.index}`}
                      className="extracted-image"
                      onClick={() => openImageInNewTab(img.base64, img.ext)}
                      style={{ cursor: 'pointer' }}
                    />
                    <p className="image-caption">{img.title || `Page ${img.page}, Image ${img.index}`}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {methodology && (
            <div className="results-block">
              <h2>Methodology</h2>
              <p>{methodology}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ResearchAnalyzer;