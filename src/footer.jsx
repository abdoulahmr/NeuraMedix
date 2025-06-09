import React from "react";
import "./assets/footer.css"; 

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left: Nav Links */}
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>

        {/* Center: Email subscription */}
        <div className="footer-subscribe">
          <p>Subscribe to updates</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Right: Social Icons */}
         <div className="footer-social">
          <a href="#" aria-label="Twitter">
            <i className="pi pi-twitter pi-fw"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="pi pi-linkedin pi-fw"></i>
          </a>
          <a href="#" aria-label="GitHub">
            <i className="pi pi-github pi-fw"></i>
          </a>
        </div>
      </div>

      <p className="footer-bottom">© {new Date().getFullYear()} NeuraMedix. All rights reserved.</p>
    </footer>
  );
}
