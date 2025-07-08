import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../assets/solutions.css';

const Solutions = () => {
  const solutionCategories = [
    {
      id: 'diagnostic',
      title: 'Diagnostic Solutions',
      description: 'Advanced AI-powered diagnostic tools for accurate medical analysis',
      solutions: [
        {
          title: 'Lung Cancer Detection',
          description: 'AI-powered analysis of CT scans for early detection of lung nodules and cancer classification with high precision.',
          icon: (
            <svg className="solution-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
          ),
          features: ['CT Scan Analysis', 'Nodule Detection', 'Cancer Classification', 'Risk Assessment'],
          link: '/lung-cancer-detection'
        },
        {
          title: 'Heart Disease Prediction',
          description: 'Predictive analytics for cardiovascular risk assessment based on patient data and imaging results.',
          icon: (
            <svg className="solution-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          ),
          features: ['ECG Analysis', 'Risk Scoring', 'Predictive Modeling', 'Patient Monitoring'],
          link: '/heart-disease-prediction'
        }
      ]
    },
    {
      id: 'research',
      title: 'Research Solutions',
      description: 'Comprehensive tools for medical research and laboratory analysis',
      solutions: [
        {
          title: 'Cell Analysis & Counting',
          description: 'Automated counting and classification of cells from microscopic images for research and diagnostic applications.',
          icon: (
            <svg className="solution-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
            </svg>
          ),
          features: ['Automated Counting', 'Cell Classification', 'Morphology Analysis', 'Batch Processing'],
          link: '/cell-analysis'
        },
        {
          title: 'Histological Analysis',
          description: 'Intelligent tissue sample analysis for pathology departments with automated feature detection.',
          icon: (
            <svg className="solution-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          ),
          features: ['Tissue Classification', 'Feature Detection', 'Pathology Scoring', 'Quality Assessment'],
          link: '/histological-analysis'
        },
        {
          title: 'Molecular Binding Prediction',
          description: 'AI models that predict molecular interactions for drug discovery and personalized medicine applications.',
          icon: (
            <svg className="solution-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
          ),
          features: ['Binding Affinity Prediction', 'Drug Discovery', 'Molecular Docking', 'Interaction Analysis'],
          link: '/molecular-binding'
        }
      ]
    },
    {
      id: 'workflow',
      title: 'Workflow Solutions',
      description: 'Integrated solutions for streamlined medical workflows',
      solutions: [
        {
          title: 'Research Paper Analyzer',
          description: 'AI-powered analysis of medical literature and research papers for knowledge extraction and synthesis.',
          icon: (
            <svg className="solution-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
            </svg>
          ),
          features: ['Literature Analysis', 'Knowledge Extraction', 'Trend Identification', 'Citation Analysis'],
          link: '/research-analyzer'
        },
        {
          title: 'IHC Insight',
          description: 'Automated immunohistochemistry analysis for protein marker detection and quantification.',
          icon: (
            <svg className="solution-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
          ),
          features: ['Protein Detection', 'Marker Quantification', 'Staining Analysis', 'Automated Scoring'],
          link: '/ihc-insight'
        }
      ]
    }
  ];

  return (
    <div className="solutions-page">
      <Header />
      
      <main className="solutions-main">
        {/* Hero Section */}
        <section className="solutions-hero">
          <div className="solutions-hero-content">
            <h1 className="solutions-title">AI-Powered Medical Solutions</h1>
            <p className="solutions-subtitle">
              Comprehensive suite of AI tools designed to accelerate medical research, 
              improve diagnostic accuracy, and streamline clinical workflows
            </p>
          </div>
        </section>

        {/* Solutions Categories */}
        <section className="solutions-categories">
          {solutionCategories.map((category) => (
            <div key={category.id} className="solution-category">
              <div className="category-header">
                <h2 className="category-title">{category.title}</h2>
                <p className="category-description">{category.description}</p>
              </div>
              
              <div className="solutions-grid">
                {category.solutions.map((solution, index) => (
                  <div key={index} className="solution-card">
                    <div className="solution-icon-container">
                      {solution.icon}
                    </div>
                    <div className="solution-content">
                      <h3 className="solution-title">{solution.title}</h3>
                      <p className="solution-description">{solution.description}</p>
                      
                      <div className="solution-features">
                        <h4>Key Features:</h4>
                        <ul className="feature-list">
                          {solution.features.map((feature, idx) => (
                            <li key={idx} className="feature-item">
                              <span className="feature-checkmark">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="solution-actions">
                        <a href={solution.link} className="solution-link primary">
                          Learn More
                        </a>
                        <a href="#demo" className="solution-link secondary">
                          Try Demo
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="solutions-cta">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Medical Practice?</h2>
            <p className="cta-description">
              Join leading medical institutions worldwide who trust NeuraMedix 
              for their AI-powered diagnostic and research needs.
            </p>
            <div className="cta-actions">
              <a href="/register" className="cta-button primary">
                Request Demo
              </a>
              <a href="/contact" className="cta-button secondary">
                Contact Sales
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Solutions;