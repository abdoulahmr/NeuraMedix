import React from 'react';
import './../assets/benefits.css'; // Import the CSS for styling

const Benefits = () => {
  const benefitData = [
    {
      icon: (
        <svg className="benefit-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2.05v3.13c3.95.49 7 3.85 7 7.92 0 4.08-3.05 7.44-7 7.93v3.13l-2.05-.01v-3.13c-3.95-.49-7-3.85-7-7.93 0-4.07 3.05-7.43 7-7.92V2.05L13 2.05zM12 4c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/>
        </svg>
      ),
      title: 'Speed & Efficiency',
      description: 'Reduce analysis time from hours to minutes with our optimized AI algorithms designed for medical workflows.',
    },
    {
      icon: (
        <svg className="benefit-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: 'Clinical Precision',
      description: 'Achieve diagnostic accuracy that matches or exceeds human experts in controlled validation studies.',
    },
    {
      icon: (
        <svg className="benefit-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      title: 'Explainable Results',
      description: 'Transparent AI decisions with visual explanations that build trust and confidence in analysis results.',
    },
    {
      icon: (
        <svg className="benefit-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
        </svg>
      ),
      title: 'Privacy Compliance',
      description: 'HIPAA-compliant platform with robust data protection measures for sensitive medical information.',
    },
    {
      icon: (
        <svg className="benefit-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20,5H4C2.89,5 2,5.89 2,7V17C2,18.11 2.89,19 4,19H20C21.11,19 22,18.11 22,17V7C22,5.89 21.11,5 20,5M20,17H4V7H20V17M6,10V12H8V10H6M10,10V12H12V10H10M6,14V16H8V14H6M10,14V16H12V14H10M14,10V12H16V10H14M14,14V16H16V14H14M18,10V12H20V10H18M18,14V16H20V14H18Z"/>
        </svg>
      ),
      title: 'Modular Design',
      description: 'Flexible architecture that integrates with existing systems and workflows for seamless adoption.',
    },
    {
      icon: (
        <svg className="benefit-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5,3H7V5H5V10A2,2 0 0,0 7,12A2,2 0 0,0 5,14V19H7V21H5C3.93,20.73 3,20.1 3,19V15A2,2 0 0,1 1,13H0V11H1A2,2 0 0,1 3,9V5C3,3.9 3.</svg>9,3 5,3M19,3A2,2 0 0,1 21,5V9A2,2 0 0,1 23,11H24V13H23A2,2 0 0,1 21,15V19A2,2 0 0,1 19,21H17V19H19V14A2,2 0 0,0 17,12A2,2 0 0,0 19,10V5H17V3H19M12,15A1,1 0 0,1 13,16A1,1 0 0,1 12,17A1,1 0 0,1 11,16A1,1 0 0,1 12,15M8,15A1,1 0 0,1 9,16A1,1 0 0,1 8,17A1,1 0 0,1 7,16A1,1 0 0,1 8,15M16,15A1,1 0 0,1 17,16A1,1 0 0,1 16,17A1,1 0 0,1 15,16A1,1 0 0,1 16,15Z"/>
        </svg>
      ),
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
