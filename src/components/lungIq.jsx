import React from 'react';
import './../assets/lungIq.css';

const LungIQ = () => {
  return (
    <section className="lungiq-section">
      <div className="lungiq-content-left">
        {/* Small tag/badge at the top */}
        <span className="lungiq-tag">Latest AI Agent</span>

        {/* Main Heading */}
        <h2 className="lungiq-heading">
          LungIQ4 Cancer Diagnosis Assistant
        </h2>

        {/* Description Paragraph */}
        <p className="lungiq-description">
          Advanced multi-stage AI agent that provides comprehensive lung cancer
          analysis from raw CT images to detailed classification.
        </p>

        {/* Features List */}
        <ul className="lungiq-features-list">
          <li className="feature-item">
            <span className="checkbox-icon">&#10003;</span> Prepare raw 2D CT images for analysis
          </li>
          <li className="feature-item">
            <span className="checkbox-icon">&#10003;</span> Classify CT images as Cancer or No Cancer
          </li>
          <li className="feature-item">
            <span className="checkbox-icon">&#10003;</span> Determine Benign or Malignant classification
          </li>
          <li className="feature-item">
            <span className="checkbox-icon">&#10003;</span> Classify malignant types: Adenocarcinoma, Squamous, Large Cell
          </li>
        </ul>

        {/* Call-to-action Buttons */}
        <div className="lungiq-actions">
          <button className="try-lungiq-button">Try LungIQ4</button>
          <button className="view-demo-button">View Demo</button>
        </div>
      </div>

      <div className="lungiq-image-right">
        <img src="./img/lungiq.png" alt="LungIQ4 Cancer Diagnosis Assistant" className="lungiq-illustration" />
      </div>
    </section>
  );
};

export default LungIQ;
