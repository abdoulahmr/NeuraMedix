import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./../assets/testimonial.css";

const testimonials = [
  {
    quote:
      "NeuraMedix helped us analyze our histology slides 10x faster. The brown pixel counter is a game changer.",
    name: "Dr. X",
    title: "Histopathologist",
  },
  {
    quote:
      "The lung tumor detection tool allowed us to identify anomalies earlier, saving crucial time in diagnosis.",
    name: "Dr. Amina K.",
    title: "Thoracic Radiologist",
  },
  {
    quote:
      "From cell counting to molecular binding predictions, NeuraMedix unified all our needs into one seamless platform.",
    name: "Prof. David Lin",
    title: "Biotech Researcher",
  },
];

export default function TestimonialsSection() {
  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="testimonials-section">
      <h2 className="section-title">Trusted by Researchers</h2>
      <div className="testimonials-grid">
        {testimonials.map(({ quote, name, title }, i) => (
          <div
            key={i}
            className="testimonial-card"
            data-aos="fade-up"
            data-aos-delay={i * 150}
          >
            <p className="testimonial-quote">“{quote}”</p>
            <p className="testimonial-name">— {name}</p>
            <p className="testimonial-title">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
