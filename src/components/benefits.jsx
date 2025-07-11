import React from 'react';
import './../assets/benefits.css'; // Import the CSS for styling

const Benefits = () => {
  const benefitData = [
    {
      icon: (
        <svg className="benefit-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2.05v3.13c3.95.49 7 3.85 7 7.92 0 4.08-3.05 7.44-7 7.93v3.13l-2.05-.01v-3.13c-3.95-.49-7-3.85-7-7.93 0-4.07 3.05-7.43 7-7.92V2.05L13 2.05zM12 4c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/>
        </svg>
      ), // Placeholder Speed & Efficiency icon (Lightning bolt)
      title: 'Speed & Efficiency',
      description: 'Reduce analysis time from hours to minutes with our optimized AI algorithms designed for medical workflows.',
    },
    {
      icon: (
        <svg className="benefit-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      ), // Placeholder Clinical Precision icon (Target)
      title: 'Clinical Precision',
      description: 'Achieve diagnostic accuracy that matches or exceeds human experts in controlled validation studies.',
    },
    {
      icon: (
        <svg className="benefit-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86z"/>
        </svg>
      ), // Placeholder Explainable Results icon (Graph)
      title: 'Explainable Results',
      description: 'Transparent AI decisions with visual explanations that build trust and confidence in analysis results.',
    },
    {
      icon: (
        <svg className="benefit-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86z"/>
        </svg>
      ), // Placeholder Privacy Compliance icon (Shield)
      title: 'Privacy Compliance',
      description: 'HIPAA-compliant platform with robust data protection measures for sensitive medical information.',
    },
    {
      icon: (
        <svg className="benefit-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86z"/>
        </svg>
      ), // Placeholder Modular Design icon (Puzzle piece)
      title: 'Modular Design',
      description: 'Flexible architecture that integrates with existing systems and workflows for seamless adoption.',
    },
    {
      icon: (
        <svg className="benefit-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86z"/>
        </svg>
      ), // Placeholder Continuous Learning icon (Graduation cap)
      title: 'Continuous Learning',
      description: 'Models that improve over time through feedback loops and new data integration, maintaining cutting-edge performance.',
    },
  ];

  return (
    <section className="benefits-section">
      <div className="benefits-header">
        <h2 className="benefits-heading">Why Choose NeuraMedix</h2>
        <p className="benefits-subheading">
          Our platform combines cutting-edge AI with clinical expertise to deliver reliable,
          actionable insights
        </p>
      </div>
      <div className="benefits-grid">
        {benefitData.map((benefit, index) => (
          <div className="benefit-card" key={index}>
            <div className="benefit-icon-container">
              {benefit.icon}
            </div>
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
