import React from "react";
import { Menubar } from "primereact/menubar";
import "./../assets/header.css";

function Header() {
  const items = [
    { label: "Home", icon: "pi pi-fw pi-home", command: () => { window.location.href = "/"; } },
    {
      label: "Products",
      icon: "pi pi-fw pi-file",
      items: [
        { label: "Protein Marker Counter" },
        { label: "Molecule Binding Predictor"},
        { separator: true },
        { label: "Lung Tumor Detection", icon: "pi pi-fw pi-microchip-ai"},
        { label: "Lung Disease Prediction", icon: "pi pi-fw pi-microchip-ai" },
        { label: "Heart Disease Detection", icon: "pi pi-fw pi-microchip-ai" },
        { label: "Cell Detection and Counting", icon: "pi pi-fw pi-microchip-ai" },
        { separator: true },
        { label: "See More", icon: "pi pi-fw pi-plus" ,command: () => { window.location.href = "/product"; }},
      ],
    },
    { label: "Contact", icon: "pi pi-fw pi-phone", command: () => { window.location.href = "/contact"; } },
    { label: "About Us", icon: "pi pi-fw pi-info-circle", command: () => { window.location.href = "/about"; } },
    { label: "Donate", icon: "pi pi-fw pi pi-money-bill", command: () => { window.location.href = "/help"; } },
  ];

  const start = (
    <img
      src="/img/3.png"
      alt="Logo"
      className="logo"
      style={{ height: '3rem' }}
    />
  );

  return (
    <header>
      <Menubar model={items} start={start} className="custom-menubar"/>
    </header>
  );
}

export default Header;