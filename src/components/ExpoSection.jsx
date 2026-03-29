import React, { useEffect, useRef } from "react";
import "./ExpoSection.css";

const ExpoSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.15 }
    );

    const animatedEls = sectionRef.current?.querySelectorAll(".animate-in");
    animatedEls?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="expo-section" ref={sectionRef}>
      {/* Decorative background elements */}
      <div className="bg-grid left-grid" aria-hidden="true" />
      <div className="bg-grid right-grid" aria-hidden="true" />

      {/* Exhibitors Panel */}
      <div className="expo-panel exhibitors-panel">
        <div className="panel-inner">
          <span className="panel-tag animate-in">For Exhibitors</span>

          <h2 className="panel-heading animate-in delay-1">
            Showcase Your Brand,{" "}
            <span className="heading-accent">Expand Your Market</span>
          </h2>

          <p className="panel-body animate-in delay-2">
            MACHMA Expo 2025 provides a perfect platform to exhibit your
            products and services to a global audience. Engage with potential
            clients and partners while demonstrating your latest offerings.
          </p>

          <div className="benefits-block animate-in delay-3">
            <h3 className="benefits-title">Key Benefits for Exhibitors</h3>
            <ul className="benefits-list">
              {[
                { icon: "🌐", text: "Direct Access to International Buyers" },
                { icon: "🤝", text: "Connect with Industry Leaders & Decision Makers" },
                { icon: "📣", text: "Extensive Media Coverage & Branding Opportunities" },
              ].map((item, i) => (
                <li className="benefit-item" key={i}>
                  <span className="benefit-icon">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="cta-block animate-in delay-4">
            <p className="cta-text">Join Us and Grow Your Business at MACHMA Expo 2025!</p>
            <button className="cta-btn exhibitors-btn">
              <span>Book Stall Now</span>
              <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Decorative corner accent */}
        <div className="corner-accent top-left" aria-hidden="true" />
        <div className="corner-accent bottom-right" aria-hidden="true" />
      </div>

      {/* Divider */}
      <div className="panel-divider" aria-hidden="true">
        <span className="divider-icon">⚙</span>
      </div>

      {/* Visitors Panel */}
      <div className="expo-panel visitors-panel">
        <div className="panel-inner">
          <span className="panel-tag animate-in">For Visitors</span>

          <h2 className="panel-heading animate-in delay-1">
            Discover the Latest{" "}
            <span className="heading-accent visitors-accent">Industrial Solutions</span>
          </h2>

          <p className="panel-body animate-in delay-2">
            Whether you're looking for innovative products, industry expertise,
            or new business partnerships, MACHMA Expo has it all. Explore
            groundbreaking technologies and meet professionals from a wide array
            of sectors.
          </p>

          <div className="benefits-block animate-in delay-3">
            <h3 className="benefits-title">Why Attend MACHMA Expo?</h3>
            <ul className="benefits-list">
              {[
                { icon: "🏭", text: "Experience the Future of Manufacturing" },
                { icon: "🎓", text: "Attend Expert-Led Conferences & Workshops" },
                { icon: "🌍", text: "Meet Global Leaders in Technology and Innovation" },
              ].map((item, i) => (
                <li className="benefit-item" key={i}>
                  <span className="benefit-icon">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="cta-block animate-in delay-4">
            <p className="cta-text">Register Free & Explore the Future of Industry!</p>
            <button className="cta-btn visitors-btn">
              <span>Register as Visitor</span>
              <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="corner-accent top-left" aria-hidden="true" />
        <div className="corner-accent bottom-right" aria-hidden="true" />
      </div>
    </section>
  );
};

export default ExpoSection;