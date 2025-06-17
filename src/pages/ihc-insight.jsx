import React, { useState } from 'react';
import './../assets/ihc_insight.css'; // New combined CSS file

function IHCInsight() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [originalFileName, setOriginalFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      setOriginalFileName(file.name);
    } else {
      setOriginalFileName('');
    }
    setError(null); // Clear errors when a new file is selected
    setAnalysisResults(null); // Clear previous results
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    if (!selectedFile) {
      setError('Please choose an image to upload.');
      return;
    }

    setError(null);
    setLoading(true);
    setAnalysisResults(null); // Clear previous results before new submission

    const formData = new FormData();
    // --- CHANGE 1: Append file with the key 'image' to match Django view ---
    formData.append('image', selectedFile);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/ihc_insight/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => response.statusText);
        throw new Error(`API Error: ${response.status} - ${typeof errorData === 'object' ? JSON.stringify(errorData) : errorData}`);
      }

      const data = await response.json();
      setAnalysisResults(data); // Set the received data to state
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
    <div className="container ihc-insight-container">
      <h1>Upload an Image for IHC Insight</h1>

      {/* Conditional rendering for the form */}
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
              {/* Display selected file name or a default message */}
              <span className="selected-file-name">
                {selectedFile ? selectedFile.name : 'No file chosen'}
              </span>
            </label>
            <button type="submit" className="analyze-button" disabled={loading || !selectedFile}>
              {loading ? 'Analyzing...' : 'Analyze Image'}
            </button>
          </form>
          <a href="/" className="back-home-link">Back to Home</a>
        </>
      )}

      {/* Loading state */}
      {loading && (
        <div className="loading-state">
          <p>Analyzing image...</p>
          <div className="spinner"></div>
        </div>
      )}

      {/* Analysis Results Section */}
      {analysisResults && analysisResults.brown_pixel_count !== undefined && (
        <div className="results-section">
          <h2>Analysis Results for "{originalFileName}"</h2>
          <p><strong>Total Brown Pixels:</strong> {analysisResults.brown_pixel_count}</p>

          <h3>Brown Shade Distribution:</h3>
          <ul>
            {/* --- CHANGE 2: Use analysisResults.distribution --- */}
            {analysisResults.distribution && Object.keys(analysisResults.distribution).length > 0 ? (
              Object.entries(analysisResults.distribution).map(([range, count]) => (
                <li key={range}><strong>{range} intensity:</strong> {count} pixels</li>
              ))
            ) : (
              <li>No shade distribution data available.</li>
            )}
          </ul>

          {/* --- CHANGE 2: Use analysisResults.mask_base64 --- */}
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
          <a href="/" className="back-home-link">Back to Home</a>
        </div>
      )}
    </div>
  );
}

export default IHCInsight;