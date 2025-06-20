import React, { useState } from 'react';
import './../assets/register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    setError('');
    setSuccess('');

    // Client-side validation
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

    setLoading(true);

    try {
      // --- UPDATED URL and BODY to match curl command ---
      const response = await fetch('http://127.0.0.1:8000/api/register/', { // Updated URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // If your Django backend requires CSRF token for POST requests,
          // you would need to retrieve it and include it here.
          // Example: 'X-CSRFToken': getCookie('csrftoken'),
        },
        body: JSON.stringify({
          username: email, // Using email as username as per common practice
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message || 'Registration successful! You can now log in.');
        // Optionally clear form fields on successful registration
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        // Handle API errors
        // DRF validation errors often come with field-specific messages
        if (data.username) {
            setError('Username: ' + data.username.join(', '));
        } else if (data.email) {
            setError('Email: ' + data.email.join(', '));
        } else if (data.password) {
            setError('Password: ' + data.password.join(', '));
        } else if (data.detail) { // Generic error from DRF, e.g., "Invalid credentials"
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

  return (
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

        <button type="submit" className="register-button" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>

      <p className="login-link-text">
        Already have an account? <a href="/login" className="login-link">Login here</a>
        {/* If using React Router, replace <a> with <Link to="/login"> */}
      </p>
    </div>
  );
}

export default Register;