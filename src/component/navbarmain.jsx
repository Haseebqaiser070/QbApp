import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import header from "./images/header.png";

export default function Mainnavbar() {
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  useEffect(() => {
    // Update the active link when the location changes
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: "#a2c1e0",
      }}
    >
      <div
        className="nav-inner"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
        }}
      >
        <span className="logo">
          <img src={header} style={{ height: "80px" }} alt="Logo" />
        </span>
        <div className="links">
          <NavLink to="/" text="Home" activeLink={activeLink} />
          <NavLink
            to="/Testknowledge"
            text="Test My Knowledge"
            activeLink={activeLink}
          />
          <NavLink
            to="/Uploadquebank"
            text="Upload a Question Bank"
            activeLink={activeLink}
          />
          <NavLink to="/Profile" text="Profile" activeLink={activeLink} />
        </div>
      </div>
    </nav>
  );
}

const NavLink = ({ to, text, activeLink }) => (
  <Link
    to={to}
    style={{
      textDecoration: "none",
      color: to === activeLink ? "#fcc822" : "#808080",
    }}
  >
    {text}
  </Link>
);
