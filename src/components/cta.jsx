import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./../assets/cta.css";

export default function CTASection() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogText, setDialogText] = useState("");

  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const handleComingSoon = (text) => {
    setDialogText(text);
    setDialogOpen(true);
  };

  const closeDialog = () => setDialogOpen(false);

  return (
    <section className="cta-section" data-aos="zoom-in">
      <h2 className="cta-heading">Start Using NeuraMedix Today</h2>
      <p className="cta-subheading">
        Join our Early Access Program or Book a Live Demo with our AI experts.
      </p>
      <div className="cta-buttons">
        <button
          className="cta-btn primary"
          type="button"
          onClick={() => handleComingSoon('Early Access is coming soon!')}
        >
          Join Early Access
        </button>
        <button
          className="cta-btn secondary"
          type="button"
          onClick={() => handleComingSoon('Live Demo booking is coming soon!')}
        >
          Book a Live Demo
        </button>
      </div>
      {dialogOpen && (
        <div className="cta-dialogue-overlay" onClick={closeDialog}>
          <div className="cta-dialogue" onClick={e => e.stopPropagation()}>
            <p>{dialogText}</p>
            <button className="cta-dialogue-close" onClick={closeDialog}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}
