import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top decorative bar */}
      <div className="footer-topbar" aria-hidden="true">
        <span className="topbar-line left" />
        <span className="topbar-gear">⚙</span>
        <span className="topbar-line right" />
      </div>

      <div className="footer-main">
        {/* ── Col 1: Brand + Tagline + Socials ── */}
        <div className="footer-col col-brand">
          <div className="brand-logo-box">
            <span className="brand-logo-text">
              <span className="logo-mach">MACH</span>
              <span className="logo-auto">AUTO</span>
            </span>
            <span className="logo-sub">EXPO</span>
          </div>

          <p className="brand-tagline">
            MachAuto is more than an exhibition –<br />
            it is a gateway to growth.<br />
            <em>Don't just visit the future, exhibit it.</em>
          </p>

          <div className="organiser-block">
            <span className="organiser-label">Organised By</span>
            <div className="organiser-name">
              <span className="org-icon">🏢</span>
              Fortune Exhibitor &amp; Pvt. Ltd.
            </div>
          </div>

          <div className="social-row">
            {[
              { label: "FB", href: "#" },
              { label: "TW", href: "#" },
              { label: "IN", href: "#" },
              { label: "YT", href: "#" },
            ].map((s) => (
              <a key={s.label} href={s.href} className="social-btn" aria-label={s.label}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Col 2: Quick Links ── */}
        <div className="footer-col col-links">
          <h3 className="col-heading">
            <span className="heading-line" />
            Quick Links
            <span className="heading-line" />
          </h3>
          <nav>
            <ul className="links-list">
              {[
                { label: "Home", href: "#" },
                { label: "Exhibitor Profile", href: "#" },
                { label: "Exhibitor List", href: "#" },
                { label: "Visitor Profile", href: "#" },
                { label: "Visitor Registration", href: "#" },
                { label: "Gallery", href: "#" },
                { label: "Contact Us", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    <span className="link-arrow">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* ── Col 3: Contact Info ── */}
        <div className="footer-col col-contact">
          <h3 className="col-heading">
            <span className="heading-line" />
            Contact Us
            <span className="heading-line" />
          </h3>

          <div className="contact-card">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <a href="tel:+919592048025" className="contact-phone">+91-00000-00000</a>
                <span className="contact-sep"> / </span>
                <a href="tel:+919876103835" className="contact-phone">+91-00000-00000</a>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">✉</span>
              <a href="mailto:info@machautoexpo.in" className="contact-email">
                info@machautoexpo.in
              </a>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <address className="contact-address">
                1201, Phase 1 Rd, Phase 1<br />
                Urban Estate Dugri, 141013<br />
                Ludhiana (Punjab)
              </address>
            </div>
          </div>

          <a href="#" className="book-now-btn">
            <span className="btn-text">BOOK NOW</span>
            <span className="btn-shine" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <span className="bottom-copy">
          © 2026 Fortune Exhibitor &amp; Pvt. Ltd. All rights reserved.
        </span>
        <span className="bottom-credit">
          Created by <a href="#" className="credit-link">Growess Group</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;