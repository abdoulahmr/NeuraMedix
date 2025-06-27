import React, { useState } from 'react';
import Header from './../components/header.jsx';
import Footer from './../components/footer.jsx';
import './../assets/services.css';

function Services() {
  const [search, setSearch] = useState("");
  const tools = [
    {
      name: "IHC Insight",
      description: "Quantify protein markers in biological samples using AI-enhanced image analysis.",
      icon: "pi pi-fw pi-microchip",
      link: "/ihc-insight",
    },
    {
      name: "Molecule Binding Predictor",
      description: "Predict chemical interactions using SMILES strings and descriptor analysis.",
      icon: "pi pi-fw pi-cog",
      link: "/molicule-binding",
    },
    {
      name: "Cell Detection and Counting",
      description: "Automated detection and quantification of cells in microscopy images.",
      icon: "pi pi-fw pi-box",
      link: "/cell-count",
    },
    {
      name: "AI-powered Research Paper Analyzer",
      description: "Summarize, extract keywords, and visualize figures from scientific PDFs.",
      icon: "pi pi-fw pi-file-pdf",
      link: "/research-analyzer",
      badge: "new",
    },
    {
      name: "Heart Disease Detection",
      description: "Detect potential heart disease based on cardiovascular health metrics.",
      icon: "pi pi-fw pi-heart-fill",
      link: "/heart-prediction",
    },
    
    {
      name: "Lung Tumor Detection",
      description: "AI-powered detection of lung tumors from CT scans using deep learning models.",
      icon: "pi pi-fw pi-microchip-ai",
      link: "/lung-cancer-detection",
      badge: "new",
    },
    {
      name: "Lung Disease Prediction",
      description: "Predict respiratory diseases using patient data and diagnostic features.",
      icon: "pi pi-fw pi-chart-line",
      link: "/lung-prediction",
    },
    {
      name: "Auto-Publish Research Tool",
      description: "Automatically generate structured drafts and insights for publishing.",
      icon: "pi pi-fw pi-send",
      link: "/auto-publish-tool",      
      badge: "new",
    },
    {
      name: "Lung Cancer Localization",
      description: "Localize lung cancer regions in CT scans using advanced image processing.",
      icon: "pi pi-fw pi-map-marker",
      comingSoon: true,
    },
    {
      name: "Molecule Docking Simulator",
      description: "Simulate molecular docking to predict interaction potential and fit score.",
      icon: "pi pi-fw pi-compass",
      comingSoon: true,
    },
    {
      name: "Biomedical Image Classifier",
      description: "Classify biomedical images using AI (microscopy, histology, radiology).",
      icon: "pi pi-fw pi-image",
      comingSoon: true,
    },
    {
      name: "Genetic Mutation Visualizer",
      description: "Visualize and explore gene mutation patterns for genomics research.",
      icon: "pi pi-fw pi-chart-bar",
      comingSoon: true,
    },
    {
      name: "Molecule Interaction Simulator",
      description: "Explore real-time interaction simulation between chemical structures.",
      icon: "pi pi-fw pi-sliders-h",
      comingSoon: true,
    },
  ];

  // Filter tools based on search query (name or description)
  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(search.toLowerCase()) ||
    tool.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="services-outer-wrapper">
      <Header />
      <div className="services-page-container">
        <h1 className="services-title">Explore Our Research Tools</h1>
        <p className="services-intro">
          A comprehensive suite of intelligent tools for accelerating biomedical and pharmaceutical research.
        </p>

        <div className="services-search-bar-wrapper" style={{ textAlign: 'center', margin: '2rem 0' }}>
          <input
            type="text"
            placeholder="Search tools..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="services-search-bar"
            style={{ padding: '0.7rem 1.2rem', borderRadius: '8px', border: '1px solid #ccc', width: '100%', maxWidth: 400 }}
          />
        </div>

        <div className="services-grid">
          {filteredTools.length > 0 ? filteredTools.map((tool, index) => (
            <div key={index} className={`service-card ${tool.comingSoon ? 'disabled' : ''}`}>
              <i className={`${tool.icon} service-icon`}></i>
              <h2 className="service-name">
                {tool.name}
                {tool.badge && <span className="badge new">NEW</span>}
                {tool.comingSoon && <span className="badge soon">Coming Soon</span>}
              </h2>
              <p className="service-description">{tool.description}</p>
              {!tool.comingSoon && (
                <a href={tool.link} className="service-link">
                  Launch Tool <i className="pi pi-arrow-right"></i>
                </a>
              )}
            </div>
          )) : (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', color: '#888', fontSize: '1.2em' }}>
              No tools found.
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
