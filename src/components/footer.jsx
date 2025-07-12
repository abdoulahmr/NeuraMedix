import React from "react";
import "./../assets/footer.css"; 

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        {/* Company Info */}
        <div className="footer-column company-info">
          <div className="footer-logo-container">
            <img src="./img/1.png" alt="NeuraMedix Logo" className="footer-logo" />
          </div>
          <p className="company-description">
            Accelerating medical diagnostics and research with AI-powered precision.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.34-1.6.57-2.46.69.88-.53 1.56-1.37 1.88-2.37-.83.49-1.75.85-2.72 1.04C18.37 3.51 17.26 3 16 3c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.99C8.01 8.81 4.24 6.71 1.7 3.5c-.37.64-.58 1.39-.58 2.19 0 1.49.75 2.81 1.88 3.59-.69-.02-1.34-.21-1.91-.53v.03c0 2.08 1.48 3.82 3.44 4.22-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.71 2.14 2.95 4.03 2.99C10.02 17.5 7.8 18.25 5.48 18.25c-.76 0-1.5-.04-2.22-.13 2.04 1.3 4.47 2.06 7.08 2.06 8.49 0 13.14-7.03 13.14-13.14 0-.2-.01-.4-.02-.6.9-.65 1.68-1.47 2.3-2.4z"/></svg>
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-5.99 15H12V9h2.01v9zm-2.01-9H10V9h2.01v9zM8.99 9H7V9h2.01v9zm-2.01-9H5V9h2.01v9zM16 9h-2.01v9H16V9zM12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm-.2 2.2C5.5 4.2 4.2 5.5 4.2 7.6v8.8c0 2.1 1.3 3.4 3.4 3.4h8.8c2.1 0 3.4-1.3 3.4-3.4V7.6c0-2.1-1.3-3.4-3.4-3.4H7.6zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm6.5-3.3a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"/></svg>
            </a>
            <a href="#" className="social-icon" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 8h-2V7h-3v3H8v2h2v3h3v-3h2l1-2z"/></svg>
            </a>
          </div>
        </div>

        {/* Solutions Column */}
        <div className="footer-column">
          <h4 className="column-title">Solutions</h4>
          <ul className="footer-links">
            <li><a href="#">Lung Cancer Detection</a></li>
            <li><a href="#">Heart Disease Prediction</a></li>
            <li><a href="#">Cell Analysis</a></li>
            <li><a href="#">Histological Analysis</a></li>
            <li><a href="#">Molecular Binding</a></li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="footer-column">
          <h4 className="column-title">Company</h4>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Research</a></li>
            <li><a href="#">News & Media</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Resources Column */}
        <div className="footer-column">
          <h4 className="column-title">Resources</h4>
          <ul className="footer-links">
            <li><a href="#">Documentation</a></li>
            <li><a href="#">API Reference</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p className="copyright-text">
          © {new Date().getFullYear()} NeuraMedix. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </p>
      </div>

    </footer>
  );
};

export default Footer;
