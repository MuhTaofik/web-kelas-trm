import { useState } from "react";
import "./Navbar.css";
import logoKampus from "../assets/polidwa.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={() => setOpen(!open)}>☰</div>

      <div className="navbar-title">WELCOME CLASS</div>

      <img src={logoKampus} alt="Logo Kampus" className="logo-kampus" />

      <ul className={`nav-menu ${open ? "active" : ""}`}>
        <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setOpen(false)}>About Us</a></li>
        <li><a href="#members" onClick={() => setOpen(false)}>Members</a></li>
        <li><a href="#gallery" onClick={() => setOpen(false)}>Class Gallery</a></li>
        <li><a href="#maps" onClick={() => setOpen(false)}>Maps</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
