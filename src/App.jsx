import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
import Home from './pages/home.jsx';
import AboutUsPage from './pages/about-us.jsx';
import ContactUsPage from './pages/contact-us.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import MolecularBinding from "./pages/molicule-binding.jsx";
import Services from "./pages/services.jsx";
import IHCInsight from "./pages/ihc-insight.jsx";
import Register from "./pages/register.jsx";
import Login from "./pages/login.jsx";
import UserDashboard from "./pages/account/user-dashboard.jsx";

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
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/molicule-binding" element={<MolecularBinding />} />
          <Route path="/ihc-insight" element={<IHCInsight />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;