import React from "react";
import "./../assets/hero.css";

function HeroSection() {
  return (
    <section className="hero-section">
        <div className="hero-container">
            <video className="hero-video" autoPlay muted loop playsInline>
                <source src="/vid/27019-361107952_large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="hero-overlay"></div>  
            
            <div className="hero-content">
                <h1 className="hero-title">
                    Accelerating Scientific Discovery with <span>AI</span>
                </h1>
                <p className="hero-subtitle">
                    All-in-one AI platform for detection, analysis, and prediction in biomedical research.
                </p>
                <button className="hero-cta" >Get Started</button>
            </div>
        </div>
    </section>
  );
}

export default HeroSection;
