import React from 'react';
import './../assets/Features.css'; // Import the CSS for styling

const Features = () => {
  const featureData = [
    {
      icon: (
        <svg className="feature-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </svg>
      ), // Placeholder Lung icon
      title: 'Lung Cancer Detection',
      description: 'AI-powered analysis of CT scans for early detection of lung nodules and cancer classification with high precision.',
      link: '#',
    },
    {
      icon: (
        <svg className="feature-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      ), // Placeholder Heart icon
      title: 'Heart Disease Prediction',
      description: 'Predictive analytics for cardiovascular risk assessment based on patient data and imaging results.',
      link: '#',
    },
    {
      icon: (
        <svg className="feature-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86z"/>
        </svg>
      ), // Placeholder Cell icon
      title: 'Cell Analysis',
      description: 'Automated counting and classification of cells from microscopic images for research and diagnostic applications.',
      link: '#',
    },
    {
      icon: (
        <svg className="feature-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86z"/>
        </svg>
      ), // Placeholder Histology icon
      title: 'Histological Analysis',
      description: 'Intelligent tissue sample analysis for pathology departments with automated feature detection.',
      link: '#',
    },
    {
      icon: (
        <svg className="feature-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86z"/>
        </svg>
      ), // Placeholder Molecular icon
      title: 'Molecular Binding Prediction',
      description: 'AI models that predict molecular interactions for drug discovery and personalized medicine applications.',
      link: '#',
    },
    {
      icon: (
        <svg className="feature-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86z"/>
        </svg>
      ), // Placeholder Neurology icon
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
