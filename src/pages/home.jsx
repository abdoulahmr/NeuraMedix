import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Hero from '../components/hero.jsx';
import TrustedBy from '../components/trustedby.jsx';
import LungIQ from '../components/lungIq.jsx';
import Features from '../components/features.jsx';
import Benefits from '../components/benefits.jsx';
import UI from "../components/ui.jsx";
import CTA from "../components/cta.jsx";
import Pricing from "../components/pricing.jsx";
 
function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
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
      <Header/>
      <div data-aos="fade-up">
        <Hero />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <TrustedBy />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <LungIQ />
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <Features />
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        <Benefits />
      </div>
      <div data-aos="fade-up" data-aos-delay="500">
        <UI />
      </div>
      <div data-aos="fade-up" data-aos-delay="600">
        <Pricing />
      </div>
      <div data-aos="fade-up" data-aos-delay="700">
        <CTA />
      </div>
      <Footer />
    </>
  );
}

export default Home;