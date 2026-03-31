import { useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/machma-expo-2026-main.jpeg";
import pdfFile from "../assets/Machma-expopdf.pdf";
import "./Navbar.css";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "FOCUS US", href: "/focus-us" },
  { label: "PROMOTION", href: "/promotion" },
  { label: "GALLERY", href: "/gallery" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="machma-nav">
      {/* Logo */}
      <Link to="/" className="machma-logo-wrap" onClick={closeMenu}>
        <img
          src={heroImage}
          alt="MACHMA Expo 2026"
          className="machma-logo-img"
        />
      </Link>

      {/* Hamburger */}
      <button
        className={`machma-hamburger ${menuOpen ? "is-open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Navigation Links */}
      <ul className={`machma-nav-links ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link to={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          </li>
        ))}

        {/* Download PDF */}
        <li>
          <a
            href={pdfFile}
            download="Machma-expopdf.pdf"
            onClick={closeMenu}
          >
            DOWNLOADS
          </a>
        </li>

        {/* Book Now Button */}
      
      </ul>
    </nav>
  );
}