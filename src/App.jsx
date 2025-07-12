import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home.jsx';
import AboutUsPage from './pages/about-us.jsx';
import ContactUsPage from './pages/contact-us.jsx';
import Terms from "./pages/terms.jsx";
import NotFoundPage from './pages/NotFoundPage.jsx';
import Privacy from './pages/privacy.jsx';
import ServicePage from "./pages/service.jsx";
import Solutions from "./pages/solutions.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import UserDashboard from "./pages/account/user-dashboard.jsx";
import HeartPrediction from "./pages/services/heart-prediction.jsx";
import IHCInsight from "./pages/services/ihc-insight.jsx";
import CellCounter from "./pages/services/cell-count.jsx";
import MolecularBinding from "./pages/services/molicule-binding.jsx";
import MyNotes from "./pages/account/my-notes.jsx";
import ResearchAnalyzer from "./pages/services/research-analyzer.jsx";
import LungCancerPredictor from "./pages/services/lung-prediction.jsx";
import AutoPublishTool from "./pages/services/auto-publish-tool.jsx";




function App() {
  useEffect(() => {
    Aos.init({ 
      duration: 700,
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
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/solutions" element={<Solutions />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route path="/user-dashboard" element={<UserDashboard />} />
          
          <Route path="/services/heart-prediction" element={<HeartPrediction />} />
          <Route path="/services/ihc-insight" element={<IHCInsight />} />
          <Route path="/services/cell-count" element={<CellCounter />} />

          <Route path="/services/auto-publish-tool" element={<AutoPublishTool />} />
          <Route path="/services/my-notes" element={<MyNotes />} />
          <Route path="/services/molicule-binding" element={<MolecularBinding />} />
          <Route path="/services/research-analyzer" element={<ResearchAnalyzer />} />
          <Route path="/services/lung-prediction" element={<LungCancerPredictor />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;