import React from "react";
import "./../assets/trustedby.css";

function TrustedBy() {
  const trustedCompanies = [
    {
      name: "Johns Hopkins Hospital",
      alt: "Johns Hopkins Hospital"
    },
    {
      name: "Mayo Clinic",
      alt: "Mayo Clinic"
    },
    {
      name: "Cleveland Clinic",
      alt: "Cleveland Clinic"
    },
    {
      name: "Mass General Brigham",
      alt: "Mass General Brigham"
    },
    {
      name: "Stanford Medicine",
      alt: "Stanford Medicine"
    }
  ];

  return (
    <section className="trustedby-section">
      <div className="trustedby-container">
        <div className="trustedby-header">
          <h2 className="trustedby-title">Trusted by Leading Medical Institutions</h2>
          <p className="trustedby-subtitle">
            Healthcare organizations worldwide rely on our AI-powered solutions for accurate diagnosis and research
          </p>
        </div>
        
        <div className="trustedby-logos">
          {trustedCompanies.map((company, index) => (
            <div key={index} className="trustedby-logo-item">
              <div className="trustedby-placeholder">
                {company.name}
              </div>
            </div>
          ))}
        </div>

        <div className="trustedby-stats">
          <div className="trustedby-stat">
            <div className="stat-number">500+</div>
            <div className="stat-label">Healthcare Providers</div>
          </div>
          <div className="trustedby-stat">
            <div className="stat-number">10M+</div>
            <div className="stat-label">Scans Analyzed</div>
          </div>
          <div className="trustedby-stat">
            <div className="stat-number">95%</div>
            <div className="stat-label">Accuracy Rate</div>
          </div>
          <div className="trustedby-stat">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Availability</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;
