import React from 'react';
import './../assets/services.css'; // Create this CSS file for styling

function Services() {
  const servicesList = [
    {
      name: "ProteinMarker Counter",
      description: "Accurately quantify protein markers in your biological samples with advanced image analysis.",
      icon: "pi pi-fw pi-microchip", // Example icon from PrimeIcons
      link: "/products/protein-marker-counter", // Placeholder for actual route
    },
    {
      name: "Molecule Binding Predictor",
      description: "Predict the potential binding affinity and interactions between two chemical molecules based on their SMILES strings.",
      icon: "pi pi-fw pi-atom", // Example icon from PrimeIcons
      link: "/products/molecule-binding-predictor", // Placeholder for actual route
    },
    {
      name: "Lung Tumor Detection",
      description: "Utilize AI-powered image processing to assist in the early detection and localization of lung tumors from medical scans.",
      icon: "pi pi-fw pi-microchip-ai",
      link: "/products/lung-tumor-detection",
    },
    {
      name: "Lung Disease Prediction",
      description: "Predict the likelihood of various lung diseases based on patient data and medical imaging features.",
      icon: "pi pi-fw pi-lungs",
      link: "/products/lung-disease-prediction",
    },
    {
      name: "Heart Disease Detection",
      description: "Apply machine learning algorithms to identify potential heart disease indicators from health metrics.",
      icon: "pi pi-fw pi-heart-fill",
      link: "/products/heart-disease-detection",
    },
    {
      name: "Cell Detection and Counting",
      description: "Automate the detection and precise counting of cells in microscopic images, streamlining research workflows.",
      icon: "pi pi-fw pi-box",
      link: "/products/cell-detection-counting",
    },
  ];

  return (
    <div className="services-page-container">
      <h1 className="services-title">Our Services & Tools</h1>
      <p className="services-intro">
        Explore a suite of cutting-edge bioinformatics and AI-driven tools designed to accelerate your research and analysis in life sciences and medicine.
      </p>

      <div className="services-grid">
        {servicesList.map((service, index) => (
          <div key={index} className="service-card">
            <i className={`${service.icon} service-icon`}></i>
            <h2 className="service-name">{service.name}</h2>
            <p className="service-description">{service.description}</p>
            {/* Replace <a> with <Link> from react-router-dom if you are using it */}
            <a href={service.link} className="service-link">
              Learn More & Use Tool <i className="pi pi-fw pi-arrow-right"></i>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;