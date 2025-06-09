import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./assets/benefits.css";

const benefits = [
  {
    icon: "⏱️",
    title: "Save Hours",
    description: "Reduce time spent on manual analysis with automation.",
  },
  {
    icon: "🎯",
    title: "High Accuracy",
    description: "Improve diagnostic confidence with reliable ML predictions.",
  },
  {
    icon: "🧰",
    title: "All-in-One",
    description: "Access all your research tools from a single interface.",
  },
  {
    icon: "🔐",
    title: "Privacy First",
    description: "Your data stays secure and compliant with lab standards.",
  },
  {
    icon: "📊",
    title: "Visual + Quantitative",
    description: "Get charts, heatmaps, and counts for deeper insights.",
  },
  {
    icon: "🔗",
    title: "Lab Integration",
    description: "Integrate easily with your existing workflows and pipelines.",
  },
];

export default function BenefitsSection() {
  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="benefits-section">
      <h2 className="section-title">Why Researchers Love NeuraMedix</h2>
      <div className="benefits-wrapper">
        {benefits.map(({ icon, title, description }, i) => (
          <div
            key={i}
            className="benefit-item"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className="benefit-left">
              <span className="benefit-icon">{icon}</span>
            </div>
            <div className="benefit-right">
              <h3 className="benefit-title">{title}</h3>
              <p className="benefit-description">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
