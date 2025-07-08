import React from 'react';
import './../assets/features.css'; // Import the CSS for styling

const Features = () => {
  const featureData = [
    {
      icon: (
        <svg className="feature-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C9.27 2 7 4.27 7 7v2H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2h-2V7c0-2.73-2.27-5-5-5zm0 2c1.66 0 3 1.34 3 3v2H9V7c0-1.66 1.34-3 3-3zm-6 9h12v6H6v-6zm6 1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>
        </svg>
      ),
      title: 'Lung Cancer Detection',
      description: 'AI-powered analysis of CT scans for early detection of lung nodules and cancer classification with high precision.',
      link: '#',
    },
    {
      icon: (
        <svg className="feature-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      title: 'Heart Disease Prediction',
      description: 'Predictive analytics for cardiovascular risk assessment based on patient data and imaging results.',
      link: '#',
    },
    {
      icon: (
        <svg className="feature-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 2c2.76 0 5 2.24 5 5 0 2.88-2.88 7.19-5 9.88C9.92 16.19 7 11.92 7 9c0-2.76 2.24-5 5-5zm0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
        </svg>
      ),
      title: 'Cell Analysis',
      description: 'Automated counting and classification of cells from microscopic images for research and diagnostic applications.',
      link: '#',
    },
    {
      icon: (
        <svg className="feature-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'Histological Analysis',
      description: 'Intelligent tissue sample analysis for pathology departments with automated feature detection.',
      link: '#',
    },
    {
      icon: (
        <svg className="feature-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      ),
      title: 'Molecular Binding Prediction',
      description: 'AI models that predict molecular interactions for drug discovery and personalized medicine applications.',
      link: '#',
    },
    {
      icon: (
        <svg className="feature-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      ),
      title: 'Neurological Assessment',
      description: 'Advanced neural imaging analysis to detect abnormalities and assist in neurological diagnostics.',
      link: '#',
    },
  ];

  return (
    <section className="features-section">
      <div className="features-grid">
        {featureData.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon-container">
              {feature.icon}
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
            <a href={feature.link} className="learn-more-link">
              Learn more <span className="arrow-icon">&rarr;</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
