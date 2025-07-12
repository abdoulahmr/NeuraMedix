import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './../../assets/lung_prediction.css';
import Header from '../../components/header.jsx';
import Footer from '../../components/footer.jsx';

function LungCancerPredictor() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  // Authentication check
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const convertToNumeric = (data) => {
  const mapping = {
    Yes: 1, No: 0,
    Male: 1, Female: 0, Other: 2,
    Low: 0, Medium: 1, High: 2,
  };

  const numericData = {};
    for (const key in data) {
      const val = data[key];

      if (val === undefined || val === null || val === '') {
        throw new Error(`Missing value for: ${key}`);
      }

      if (!isNaN(val)) {
        numericData[key] = Number(val);
      } else {
        numericData[key] = mapping[val];
        if (numericData[key] === undefined) {
          throw new Error(`Invalid input for: ${key}`);
        }
      }
    }
    return numericData;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const numericForm = convertToNumeric(formData);

    try {
      const response = await fetch('http://164.92.167.174/api/lung_cancer_prediction/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(numericForm),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Something went wrong');
      setResult(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const fields = [
    'AGE', 'GENDER', 'SMOKING', 'FINGER_DISCOLORATION', 'MENTAL_STRESS',
    'EXPOSURE_TO_POLLUTION', 'LONG_TERM_ILLNESS', 'ENERGY_LEVEL', 'IMMUNE_WEAKNESS',
    'BREATHING_ISSUE', 'ALCOHOL_CONSUMPTION', 'THROAT_DISCOMFORT', 'OXYGEN_SATURATION',
    'CHEST_TIGHTNESS', 'FAMILY_HISTORY', 'SMOKING_FAMILY_HISTORY', 'STRESS_IMMUNE'
  ];

  const renderOptions = (field) => {
    if (field === 'GENDER') {
      return (
        <>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </>
      );
    }

    if (['MENTAL_STRESS', 'EXPOSURE_TO_POLLUTION', 'ALCOHOL_CONSUMPTION'].includes(field)) {
      return (
        <>
          <option value="">Select</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </>
      );
    }

    return (
      <>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </>
    );
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="lung-prediction-header">
          <h1>Lung Cancer Risk Predictor</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-columns">
            {fields.map((field) => (
              <div key={field} className="form-group">
                <label htmlFor={field}>{field.replace(/_/g, ' ')}:</label>
                {(field === 'AGE' || field === 'ENERGY_LEVEL' || field === 'OXYGEN_SATURATION') ? (
                  <input
                    type="number"
                    id={field}
                    name={field}
                    required
                    onChange={handleChange}
                  />
                ) : (
                  <select id={field} name={field} required onChange={handleChange}>
                    {renderOptions(field)}
                  </select>
                )}
              </div>
            ))}
          </div>

          <button type="submit" className="submit-btn">Get Prediction</button>
        </form>

        {error && <div className="error">❌ {error}</div>}

        {result && (
          <div className="results-section">
            <p><strong>Prediction:</strong> {result.prediction}</p>
            <p className="risk">
              {result.probability ? `${result.probability.toFixed(2)}%` : 'N/A'}
            </p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default LungCancerPredictor;
