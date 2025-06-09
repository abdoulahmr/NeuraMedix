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
      <head>
        <title>NeuraMedix</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="NeuraMedix is an all-in-one AI-powered software platform designed to accelerate biomedical research." />
        <meta name="author" content="Lahmar abdessalem" />
        <meta name="keywords" content="AI, biomedical research, software platform, NeuraMedix, machine learning, data analysis, healthcare innovation" />
        <meta property="og:title" content="NeuraMedix - Accelerating Biomedical Research with AI" />
        <meta property="og:description" content="NeuraMedix is an all-in-one AI-powered software platform designed to accelerate biomedical research." />
        <meta property="og:image" content="/img/og-image.png" />
        <meta property="og:url" content="https://neura-medix.vercel.app/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/img/4.png" />
      </head>
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