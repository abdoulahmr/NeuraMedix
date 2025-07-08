import React, { useState, useEffect } from "react";
import { Menubar } from "primereact/menubar";
import { useNavigate } from 'react-router-dom';
import "./../assets/header.css";

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header-container">
      <div className="header-left-group">
        <div className="header-left">
          <a href="/" className="logo-link">
            <img src="./img/3.png" alt="NeuraMedix Logo" className="logo-icon" />
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        {isMobile && (
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        )}

        {/* Navigation */}
        <nav className={`header-nav ${isMobile ? (isMobileMenuOpen ? 'mobile-nav-open' : 'mobile-nav-closed') : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/solutions" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Solutions</a>
            </li>
            <li className="nav-item">
              <a href="/services" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
            </li>
          </ul>
          
          {/* Mobile Actions */}
          {isMobile && (
            <div className="mobile-actions">
              <a href="/login" className="sign-in-link mobile-sign-in" onClick={() => setIsMobileMenuOpen(false)}>Sign In</a>
              <button
                className="request-demo-button mobile-demo-button"
                onClick={() => {
                  navigate('/register');
                  setIsMobileMenuOpen(false);
                }}
              >
                Request Demo
              </button>
            </div>
          )}
        </nav>
      </div>

      {/* Desktop Actions */}
      {!isMobile && (
        <div className="header-right">
          <a href="/login" className="sign-in-link">Sign In</a>
          <button
            className="request-demo-button"
            onClick={() => navigate('/register')}
          >
            Request Demo
          </button>
        </div>
      )}

      {/* Mobile Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}
    </header>
  )
}

export default Header