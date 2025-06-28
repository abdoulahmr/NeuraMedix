import React, { useState, useEffect } from "react";
import { Menubar } from "primereact/menubar";
import { useNavigate } from 'react-router-dom';
import "./../assets/header.css";

function Header() {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthStatus = () => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  };

  useEffect(() => {
    checkAuthStatus();
    window.addEventListener('storage', checkAuthStatus);
    return () => {
      window.removeEventListener('storage', checkAuthStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    setIsAuthenticated(false);
    navigate('/login');
  };

  const commonItems = [
    { label: "Home", icon: "pi pi-fw pi-home", command: () => { navigate("/"); } },
  ];

  const authenticatedItems = [
    { label: "Dashboard", icon: "pi pi-fw pi-chart-line", command: () => { navigate("/user-dashboard"); } },
    { label: "My Notes", icon: "pi pi-fw pi-pen-to-square", command: () => { navigate("/my-notes"); } },
    {
      label: "Services",
      icon: "pi pi-fw pi-file",
      items: [
        { label: "Protein Marker Counter", command: () => { navigate("/ihc-insight"); } },
        { label: "Molecule Binding Predictor", command: () => { navigate("/molicule-binding"); }},
        { label: "Research Paper Analyzer", command: () => { navigate("/research-analyzer"); }},
        { separator: true },
        { label: "Lung Tumor Detection", icon: "pi pi-fw pi-microchip-ai"},
        { label: "Lung Disease Prediction", icon: "pi pi-fw pi-microchip-ai" },
        { label: "Heart Disease Detection", icon: "pi pi-fw pi-microchip-ai" },
        { label: "Cell Detection and Counting", icon: "pi pi-fw pi-microchip-ai" },
        { separator: true },
        { label: "See More", icon: "pi pi-fw pi-plus", command: () => { navigate("/services"); }},
      ],
    },
    {
      label: "Profile",
      icon: "pi pi-fw pi-user",
      items: [
        { label: "View Profile", command: () => { navigate("/user-dashboard"); } },
        { label: "Settings", command: () => { navigate("/user-dashboard"); } },
        { separator: true },
        {
          label: "Logout",
          icon: "pi pi-fw pi-sign-out",
          command: handleLogout, 
          className: 'menubar-logout-item'
        },  
      ],
    },
  ];

  const unauthenticatedItems = [
    { label: "Services", icon: "pi pi-fw pi-briefcase", command: () => { navigate("/services"); } },
    { label: "Contact", icon: "pi pi-fw pi-phone", command: () => { navigate("/contact"); } },
    { label: "About Us", icon: "pi pi-fw pi-info-circle", command: () => { navigate("/about"); } },
    /*
    {
      label: "Login",
      icon: "pi pi-fw pi-sign-in",
      command: () => { navigate("/login"); },
      className: 'menubar-login-item'
    },
    {
      label: "Register",
      icon: "pi pi-fw pi-user-plus",
      command: () => { navigate("/register"); },
      className: 'menubar-register-item'
    },
    */
  ];

  const menuItems = isAuthenticated
    ? [...commonItems, ...authenticatedItems]
    : [...commonItems, ...unauthenticatedItems];

  const start = (
    <a href="/"> <img
      src="/img/3.png"
      alt="Logo"
      className="logo"
      style={{ height: '3rem' }}
    /></a>
  );

  return (
    <header>
      <Menubar model={menuItems} start={start} className="custom-menubar"/>
    </header>
  );
}

export default Header;
