import { useEffect, useRef, useState } from "react";
import "./MachmaReport.css";

const reportStats = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    category: "Leads",
    value: "37,220",
    sub: "Generated",
    accent: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    category: "Business",
    value: "₹2,390 Cr",
    sub: "Generated",
    accent: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    category: "Exhibitors",
    value: "615+",
    sub: "From 13+ countries",
    accent: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="22" y1="11" x2="16" y2="11" />
      </svg>
    ),
    category: "Visitors",
    value: "45,000+",
    sub: "Industry leaders & professionals",
    accent: false,
  },
];

function TiltCard({ stat, index }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -10, y: dx * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className={`mr-stat-card ${stat.accent ? "mr-stat-card--accent" : ""}`}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hovered ? "translateY(-8px) scale(1.03)" : ""}`,
        animationDelay: `${0.15 + index * 0.1}s`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Corner glow */}
      <div className="mr-card-glow" />

      {/* Top row */}
      <div className="mr-card-top">
        <span className="mr-card-category">{stat.category}</span>
        <span className="mr-card-icon">{stat.icon}</span>
      </div>

      {/* Divider */}
      <div className="mr-card-divider" />

      {/* Value */}
      <div className="mr-card-bottom">
        <strong className="mr-card-value">{stat.value}</strong>
        <span className="mr-card-sub">{stat.sub}</span>
      </div>
    </div>
  );
}

export default function MachmaReport() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mr-section" ref={sectionRef}>
      {/* Background pattern */}
      <div className="mr-bg-pattern" />

      <div className="mr-container">

        {/* ── Big outer box ── */}
        <div className={`mr-box ${visible ? "mr-box--visible" : ""}`}>

          {/* Top stripe */}
          <div className="mr-box-stripe" />

          {/* Header row */}
          <div className="mr-header">
            <div className="mr-header-left">
              <span className="mr-eyebrow">PAST EDITION HIGHLIGHTS</span>
              <h2 className="mr-title">
                Show's Report :<br />
                MACHMA <span className="mr-title--red">Expo 2024</span>
              </h2>
            </div>
            <div className="mr-header-right">
              <div className="mr-header-line" />
              <p className="mr-desc">
                The success of 2024 laid the foundation for an even bigger
                2026 edition. Here's a look at what made last year truly
                remarkable — record footfall, unprecedented business, and
                industry connections that lasted.
              </p>
              <div className="mr-badge">
                <span>✦</span> MACHMA EXPO 2024 · LUDHIANA
              </div>
            </div>
          </div>

          {/* Cards grid */}
          <div className="mr-cards-grid">
            {reportStats.map((stat, i) => (
              <TiltCard key={stat.category} stat={stat} index={i} />
            ))}
          </div>

          {/* Bottom footer bar */}
          <div className="mr-box-footer">
            <span className="mr-footer-text">
              ✦ &nbsp;Setting new benchmarks every edition since 2012
            </span>
            <a href="#" className="mr-footer-cta">
              Download Full Report
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}