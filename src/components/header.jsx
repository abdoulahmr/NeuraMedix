import React, { useState, useEffect } from "react";
import { Menubar } from "primereact/menubar";
import { useNavigate } from 'react-router-dom';
import "./../assets/header.css";

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    const checkAuthStatus = () => {
      const token = localStorage.getItem('authToken');
      const storedUsername = localStorage.getItem('username');
      setIsLoggedIn(!!token);
      setUsername(storedUsername || 'User');
    };

    checkMobile();
    checkAuthStatus();
    window.addEventListener('resize', checkMobile);
    
    // Listen for storage changes to update auth status
    window.addEventListener('storage', checkAuthStatus);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('storage', checkAuthStatus);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
    setShowProfileMenu(false);
    navigate('/');
  };

  return (
    <header className="header-container">
      <div className="header-left-group">
        <div className="header-left">
          <a href="/" className="logo-link">
            <img src="./img/3.png" alt="NeuraMedix Logo" className="logo-icon" />
          </a>
        </div>
        
        {/* Show navigation only when not logged in */}
        {!isLoggedIn && (
          <>
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
          </>
        )}
      </div>

      {/* Show different content based on login status */}
      {isLoggedIn ? (
        // Profile Menu for logged in users
        <div className="profile-menu-container">
          <button
            className="profile-menu-button"
            onClick={toggleProfileMenu}
            aria-label="Profile menu"
          >
            {/* Example using react-icons */}
            <span className="profile-icon">
              <i className="pi pi-user" style={{ fontSize: '1.2em' }}></i>
            </span>
            <span className="profile-username">{username}</span>
            <span className={`profile-arrow ${showProfileMenu ? 'open' : ''}`}>
              <i className={`pi pi-chevron-down${showProfileMenu ? ' open' : ''}`} style={{ fontSize: '1em' }}></i>
            </span>
          </button>
          
          {showProfileMenu && (
            <div className="profile-dropdown">
              <div className="profile-dropdown-item" onClick={() => {
                navigate('/user-dashboard');
                setShowProfileMenu(false);
              }}>
                Dashboard
              </div>
              <div className="profile-dropdown-item" onClick={() => {
                navigate('/my-notes');
                setShowProfileMenu(false);
              }}>
                My Notes
              </div>
              <div className="profile-dropdown-divider"></div>
              <div className="profile-dropdown-item logout" onClick={handleLogout}>
                Logout
              </div>
            </div>
          )}
        </div>
      ) : (
        // Desktop Actions for non-logged in users
        !isMobile && (
          <div className="header-right">
            <a href="/login" className="sign-in-link">Sign In</a>
            <button
              className="request-demo-button"
              onClick={() => navigate('/register')}
            >
              Request Demo
            </button>
          </div>
        )
      )}

      {/* Mobile Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}
      
      {/* Profile Menu Overlay */}
      {showProfileMenu && (
        <div className="profile-overlay" onClick={() => setShowProfileMenu(false)}></div>
      )}
    </header>
  )
}

export default Header