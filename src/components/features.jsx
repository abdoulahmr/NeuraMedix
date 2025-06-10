import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./../assets/features.css";

const features = [
  {
    icon: "/icon/lung_tumor_detection.png",
    title: "Lung Tumor Detection",
    description: "Automatically detect tumor locations on CT scans using advanced AI.",
  },
  {
    icon: "/icon/heart_disease_prediction.png",
    title: "Heart Disease Prediction",
    description: "Predict heart disease risk based on patient data with ML accuracy.",
  },
  {
    icon: "/icon/cell_detection.png",
    title: "Cell Detection & Counting",
    description: "Detect and count human or bacterial cells from microscopy images.",
  },
  {
    icon: "🟤",
    title: "Brown Pixel Counter",
    description: "Quantify brown pixels in histological images (e.g. for immunohistochemistry analysis).",
  },
  {
    icon: "/icon/molecule_binding_predictor.png",
    title: "Molecule Binding Predictor",
    description: "Estimate interactions between ligands and receptors—ideal for drug discovery.",
  },
  {
    icon: "/icon/lung_disease_evaluation.png",
    title: "Lung Disease Evaluation",
    description: "Diagnose and evaluate various lung diseases using imaging and ML.",
  },
];

export default function FeaturesSection() {
  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="features-section">
      <h2 className="section-title">Our AI Research Tools</h2>
      <div className="features-grid">
        {features.map(({ icon, title, description }, i) => (
          <div key={i} className="feature-card" data-aos="fade-up" data-aos-delay={i * 100}>
            <div className="feature-icon">
              {icon.startsWith("/") ? (
                <img src={icon} alt={title + " icon"} className="icon-img" />
              ) : (
                icon
              )}
            </div>
            <h3 className="feature-title">{title}</h3>
            <p className="feature-desc">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
