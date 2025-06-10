import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./../assets/cta.css";

export default function CTASection() {
  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="cta-section" data-aos="zoom-in">
      <h2 className="cta-heading">Start Using NeuraMedix Today</h2>
      <p className="cta-subheading">
        Join our Early Access Program or Book a Live Demo with our AI experts.
      </p>
      <div className="cta-buttons">
        <a href="#signup" className="cta-btn primary">
          Join Early Access
        </a>
        <a href="#demo" className="cta-btn secondary">
          Book a Live Demo
        </a>
      </div>
    </section>
  );
}
