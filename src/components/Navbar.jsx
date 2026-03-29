import { useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/machma-expo-2026-main.jpeg";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about", hasDropdown: false },
  { label: "FOCUS US", href: "/focus-us" },
  { label: "PROMOTION", href: "/promotion", hasDropdown: false },
  { label: "GALLERY", href: "/gallery", hasDropdown: false },
  { label: "DOWNLOADS", href: "/downloads", hasDropdown: false },
];

export default function Navbar({ logoImage = null }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="machma-nav">
      <Link to="/" className="machma-logo-wrap">
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

      <button
        className="machma-hamburger"
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`machma-nav-links ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link to={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <Link to="/book-now" className="machma-book-btn">
        BOOK NOW
      </Link>
    </nav>
  );
}
