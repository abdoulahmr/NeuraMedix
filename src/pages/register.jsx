import React, { useState } from 'react';
import './../assets/register.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setSuccess('');

    if (!email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!acceptedTerms) {
      setError('You must accept the terms and policies to register.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://api.neuramedix.co/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message || 'Registration successful! You can now log in.');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setAcceptedTerms(false);
      } else {
        if (data.username) {
            setError('Username: ' + data.username.join(', '));
        } else if (data.email) {
            setError('Email: ' + data.email.join(', '));
        } else if (data.password) {
            setError('Password: ' + data.password.join(', '));
        } else if (data.detail) {
            setError(data.detail);
        } else {
            setError(data.error || 'Registration failed. Please try again.');
        }
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Add useNavigate import from react-router-dom

  const navigate = useNavigate();

  return (
    <div className="register-page">
      <div className="register-back-button">
        <button onClick={() => navigate("/")} className="back-button">
          <span className="back-arrow">&larr;</span>
        </button>
      </div>
    
      <div className="register-container">
        <h2>Register</h2>
        <p className="register-intro">Create your account to access our advanced tools.</p>

        {error && <p className="register-message error-message">{error}</p>}
        {success && <p className="register-message success-message">{success}</p>}

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-label="Password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              aria-label="Confirm Password"
            />
          </div>

          <div className="form-group terms-group">
            <input
              type="checkbox"
              id="terms"
              checked={acceptedTerms}
              onChange={e => setAcceptedTerms(e.target.checked)}
              required
            />
            <label htmlFor="terms" className="terms-label">
              I agree to the <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a> and <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            </label>
          </div>

          <button type="submit" className="register-button" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <p className="login-link-text">
          Already have an account? <a href="/login" className="login-link">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
