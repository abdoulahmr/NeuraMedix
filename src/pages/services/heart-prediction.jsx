import React, { useState } from 'react';
import './../../assets/heart_prediction.css'; // Update path as needed
import Header from '../../components/header';
import Footer from '../../components/footer';

function HeartPrediction() {
    const token = localStorage.getItem('authToken');

    const [formData, setFormData] = useState({
        age: '',
        sex: '1',
        cp: '',
        trestbps: '',
        chol: '',
        fbs: '0',
        restecg: '',
        thalach: '',
        exang: '0',
        oldpeak: '',
        slope: '',
    });

    const [error, setError] = useState('');
    const [predictionResult, setPredictionResult] = useState(null);
    const [probability, setProbability] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setPredictionResult(null);
        setProbability(null);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/heart_disease_prediction/', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Something went wrong');

      setPredictionResult(data.prediction);
      // Try both possible keys for probability
      const prob = data.probability !== undefined ? data.probability : data.risk;
      setProbability(prob !== undefined ? prob : null);
      if (prob === undefined) {
        console.warn('Probability value not found in API response:', data);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <h1>Heart Disease Prediction</h1>
        <p>Enter the patient's physiological data to predict the risk of heart disease.</p>

        {error && <p className="error">❌ {error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-columns">
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
              <label>Fasting Blood Sugar {'>'} 120 mg/dl:</label>
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

          <button type="submit" className="submit-btn">Get Prediction</button>
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
      <Footer />
    </>
  );
}

export default HeartPrediction;