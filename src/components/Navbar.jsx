import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import heroImage from "../assets/machma-expo-2026-main.jpeg";
import "./Navbar.css";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "FOCUS US", href: "/focus-us" },
  { label: "PROMOTION", href: "/promotion" },
  { label: "GALLERY", href: "/gallery" },
  { label: "DOWNLOADS", href: "/downloads" },
  { label: "BOOK NOW", href: "/book-now" },
];

export default function Navbar({ logoImage = null }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="machma-nav">
      {/* Logo */}
      <Link to="/" className="machma-logo-wrap" onClick={closeMenu}>
        {logoImage ? (
          <img
            src={heroImage}
            alt="MACHMA Expo 2026"
            className="machma-logo-img"
          />
        ) : (
          <div className="machma-logo">
            <span className="logo-edition">13th</span>
            <span className="logo-main">MACHMA</span>
            <span className="logo-sub">EXPO-2026</span>
          </div>
        )}
      </Link>

      {/* Hamburger */}
      <button
        className={`machma-hamburger ${menuOpen ? "is-open" : ""}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Nav links — closeMenu on every click */}
      <ul className={`machma-nav-links ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link to={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Book Now CTA */}
      <Link to="/book-now" className="machma-book-btn" onClick={closeMenu}>
        BOOK NOW
      </Link>
    </nav>
  );
}