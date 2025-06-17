import React, { useState } from 'react';
import './../assets/mol_bind.css'; // A combined CSS file for styling

function MolecularBindingPage() {
  const [smiles1, setSmiles1] = useState('');
  const [smiles2, setSmiles2] = useState('');
  const [predictionData, setPredictionData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Helper function to format numbers if they are numbers
  const formatValue = (value) => {
    // Check if the value is a number before calling toFixed
    return typeof value === 'number' ? value.toFixed(3) : value;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!smiles1 || !smiles2) {
      setError('Both SMILES strings are required.');
      setPredictionData(null); // Clear previous results
      return;
    }

    setError(null); // Clear previous errors
    setLoading(true); // Set loading state
    setPredictionData(null); // Clear previous results when submitting new ones

    try {
      const response = await fetch('http://127.0.0.1:8000/api/mol_binding/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ smiles1, smiles2 }),
      });

      if (!response.ok) {
        const errorDetail = await response.json().catch(() => response.statusText);
        throw new Error(`API Error: ${response.status} - ${typeof errorDetail === 'object' ? JSON.stringify(errorDetail) : errorDetail}`);
      }

      const data = await response.json();
      setPredictionData(data); // Set the received data to state
    } catch (err) {
      console.error("Error fetching prediction:", err);
      setError("Failed to get prediction results: " + err.message);
      setPredictionData(null); // Ensure no old data is shown on error
    } finally {
      setLoading(false); // Clear loading state
    }
  };

  const handleAnalyzeAnother = () => {
    setSmiles1('');
    setSmiles2('');
    setPredictionData(null); // Clear results to show the form again
    setError(null); // Clear any errors
  };

  return (
    <div className="container combined-page-container">
      <h1>Molecular Binding Predictor</h1>

      {/* Conditional rendering for the introductory paragraph */}
      {(!smiles1 && !smiles2) && !predictionData && !loading && (
        <p>Enter two SMILES strings to compare their potential binding.</p>
      )}

      {/* --- Prediction Form Section --- */}
      {!predictionData && !loading && ( // Show form if no results and not loading
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
          <a href="/" className="back-home-link">Back to Home</a>
        </>
      )}

      {/* --- Loading State --- */}
      {loading && (
        <div className="loading-state">
          <p>Analyzing molecular binding...</p>
          {/* You can add a spinner here */}
          <div className="spinner"></div>
        </div>
      )}

      {/* --- Results Display Section --- */}
      {predictionData && ( // Only show results if predictionData is available
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
          <a href="/" className="back-home-link">Back to Home</a>
        </div>
      )}
    </div>
  );
}

export default MolecularBindingPage;