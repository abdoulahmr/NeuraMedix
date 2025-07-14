import React from "react";
import "./../../assets/hero.css";

const Hero = () => {
  const handleStartFreeTrial = () => {
    window.location.href = "/register";
  };

  return (
    <section className="hero-section">
      <div className="hero-content-left">
        <span className="hero-tag">AI-Powered Biomedical Platform</span>

        <h1 className="hero-heading">
          Accelerate Medical Diagnostics with <span className="highlight-text">AI Precision</span>
        </h1>

        <p className="hero-description">
          Enhance diagnostic and research workflows with intelligent tools that analyze complex medical data
          with speed, precision, and explainability.
        </p>

        <div className="hero-actions">
          <button className="start-free-trial-button" onClick={handleStartFreeTrial}>Start Free Trial</button>
          <button
            className="watch-demo-button"
            onClick={() => { window.location.href = "/contact"; }}
          >
            Contact Us
          </button>
        </div>
      </div>

      <div className="hero-image-right">
        <img src="./img/hero-image.png" alt="AI-Powered Medical Diagnostics" className="hero-illustration" />
      </div>
    </section>
  );
};

export default Hero;

