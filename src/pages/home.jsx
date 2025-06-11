import "aos/dist/aos.css";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import HeroSection from "./../components/hero.jsx";
import FeaturesSection from "./../components/features.jsx";
import BenefitsSection from "./../components/benefits.jsx";
import TestimonialsSection from "./../components/testimonial.jsx";
import CTASection from "./../components/cta.jsx";
import AboutSection from "../components/about.jsx";

function Home() {
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
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

export default Home;