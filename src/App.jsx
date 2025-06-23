import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
import Home from './pages/home.jsx';
import AboutUsPage from './pages/about-us.jsx';
import ContactUsPage from './pages/contact-us.jsx';
import ServicePage from './pages/service.jsx';
import Terms from "./pages/terms.jsx";
import NotFoundPage from './pages/NotFoundPage.jsx';
import Privacy from './pages/privacy.jsx';
import Register from './pages/register.jsx';
{/*import MolecularBinding from "./pages/services/molicule-binding.jsx";
import Services from "./pages/services.jsx";
import IHCInsight from "./pages/services/ihc-insight.jsx";
import Register from "./pages/register.jsx";import Login from "./pages/login.jsx";
import UserDashboard from "./pages/account/user-dashboard.jsx";
import CellCounter from "./pages/services/cell-count.jsx";
import MyNotes from "./pages/account/my-notes.jsx";
import ResearchAnalyzer from "./pages/services/research-analyzer.jsx";
import HeartPrediction from "./pages/services/heart-prediction.jsx";
import LungCancerPredictor from "./pages/services/lung-prediction.jsx";
import LungCancerDetection from "./pages/services/lung-cancer-detection.jsx";*/}

function App() {
  useEffect(() => {
    Aos.init({ 
      duration: 1000,
      offset: 100,
      easing: 'ease-in-out', 
      once: true, 
      mirror: false,
    });
  }, []);

  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/services" element={<ServicePage />} /> // remove that line if you uncomment
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          

          {/*
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-notes" element={<MyNotes />} />
          <Route path="/services" element={<Services />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/molicule-binding" element={<MolecularBinding />} />
          <Route path="/ihc-insight" element={<IHCInsight />} />
          <Route path="/cell-count" element={<CellCounter />} />
          <Route path="/research-analyzer" element={<ResearchAnalyzer />} />
          <Route path="/heart-prediction" element={<HeartPrediction />} />
          <Route path="/lung-prediction" element={<LungCancerPredictor />} />
          <Route path="/lung-cancer-detection" element={<LungCancerDetection />} />*/}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;