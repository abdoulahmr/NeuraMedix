import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Header from "./header.jsx";
import HeroSection from "./hero.jsx";
import FeaturesSection from "./features.jsx";
import BenefitsSection from "./benefits.jsx";
import TestimonialsSection from "./testimonial.jsx";
import CTASection from "./cta.jsx";
import Footer from "./footer.jsx";

function App() {
  useEffect(() => {
    Aos.init({ 
      duration: 1000,
      offset: -100,
      easing: 'ease-in-out', 
    });
  }, []);
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;