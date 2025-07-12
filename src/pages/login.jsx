import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './../assets/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Redirect if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/user-dashboard');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setSuccess('');

    if (!email || !password) {
      setError('Both email and password are required.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://164.92.167.174/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message || 'Login successful!');
        if (data.access) {
          localStorage.setItem('authToken', data.access);
        }
        if (data.refresh) {
          localStorage.setItem('refreshToken', data.refresh);
        }
        if (data.username) {
          localStorage.setItem('username', data.username);
        }
        if (data.id) {
          localStorage.setItem('userId', data.id);
        }
        setEmail('');
        setPassword('');
        navigate('/user-dashboard');
      } else {
        setError(data.error || 'Login failed. Please check your credentials.');
        if (data.non_field_errors) setError(data.non_field_errors.join(', '));
        if (data.detail) setError(data.detail);
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-back-button">
        <button onClick={() => navigate(-1)} className="back-button">
          <span className="back-arrow">&larr;</span>
        </button>
      </div>
      <div className="login-container">
        <h2>Login</h2>
        <p className="login-intro">Access your account to continue.</p>

        {error && <p className="login-message error-message">{error}</p>}
        {success && <p className="login-message success-message">{success}</p>}

        <form onSubmit={handleSubmit} className="login-form">
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

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="register-link-text">
          Don't have an account? <a href="/register" className="register-link">Register here</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
