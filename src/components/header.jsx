import React, { useState, useEffect } from "react";
import { Menubar } from "primereact/menubar";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import "./../assets/header.css";

function Header() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // State to manage authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to check authentication status
  const checkAuthStatus = () => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token); // Set to true if token exists, false otherwise
  };

  // Run once on component mount to set initial auth status
  useEffect(() => {
    checkAuthStatus();

    // Optional: Listen for changes in localStorage (e.g., from other tabs or direct changes)
    // This makes the header react instantly to login/logout from anywhere.
    window.addEventListener('storage', checkAuthStatus);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('storage', checkAuthStatus);
    };
  }, []); // Empty dependency array means this runs once on mount

  // Logout handler
  const handleLogout = () => {
    // Clear all authentication-related items from localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');

    setIsAuthenticated(false); // Update state immediately
    navigate('/login'); // Redirect to login page
  };

  // Define common menu items
  const commonItems = [
    { label: "Home", icon: "pi pi-fw pi-home", command: () => { navigate("/"); } },
    { label: "Contact", icon: "pi pi-fw pi-phone", command: () => { navigate("/contact"); } },
    { label: "About Us", icon: "pi pi-fw pi-info-circle", command: () => { navigate("/about"); } },
  ];

  // Define authenticated-specific items
  const authenticatedItems = [
    { label: "Dashboard", icon: "pi pi-fw pi-chart-line", command: () => { navigate("/user-dashboard"); } },
    {
      label: "Services",
      icon: "pi pi-fw pi-file",
      items: [
        { label: "Protein Marker Counter", command: () => { navigate("/ihc-insight"); } },
        { label: "Molecule Binding Predictor", command: () => { navigate("/molicule-binding"); }},
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
      label: "Logout",
      icon: "pi pi-fw pi-sign-out",
      command: handleLogout, // Use the defined handleLogout function
      className: 'menubar-logout-item' // Optional: add specific class for logout button styling
    },
  ];

  // Define unauthenticated-specific items
  const unauthenticatedItems = [
    {
      label: "Login",
      icon: "pi pi-fw pi-sign-in",
      command: () => { navigate("/login"); },
      className: 'menubar-login-item'
    },
    {
      label: "Register",
      icon: "pi pi-fw pi-user-plus", // Changed to user-plus icon for register
      command: () => { navigate("/register"); },
      className: 'menubar-register-item'
    },
  ];

  // Combine items based on authentication status
  const menuItems = isAuthenticated
    ? [...commonItems, ...authenticatedItems]
    : [...commonItems, ...unauthenticatedItems];

  const start = (
    <img
      src="/img/3.png" // Ensure this path is correct for your logo
      alt="Logo"
      className="logo"
      style={{ height: '3rem' }}
    />
  );

  return (
    <header>
      <Menubar model={menuItems} start={start} className="custom-menubar"/>
    </header>
  );
}

export default Header;