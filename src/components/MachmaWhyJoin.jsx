import { useEffect, useRef, useState } from "react";
import "./MachmaWhyJoin.css";

/* ── Card data ── */
const cards = [
  {
    title: "Buy Ticket",
    desc: "Secure your spot at India's most influential machine tools expo. Early bird offers available.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 9a1 1 0 0 1 0-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a1 1 0 0 1 0 2v2a1 1 0 0 1 0 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2a1 1 0 0 1 0-2V9z"/>
        <line x1="12" y1="3" x2="12" y2="21" strokeDasharray="3 3"/>
      </svg>
    ),
    bg: "card-bg-1",
    accent: false,
  },
  {
    title: "Networking",
    desc: "Connect with 650+ exhibitors and 50,000+ professionals from across the globe in one venue.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="4" height="4" rx="1"/><rect x="18" y="2" width="4" height="4" rx="1"/>
        <rect x="10" y="18" width="4" height="4" rx="1"/>
        <path d="M4 6v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6"/>
        <line x1="12" y1="12" x2="12" y2="18"/>
      </svg>
    ),
    bg: "card-bg-2",
    accent: true,
  },
  {
    title: "Great Speakers",
    desc: "Learn from thought leaders, industry innovators and technology pioneers on stage.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
      </svg>
    ),
    bg: "card-bg-3",
    accent: false,
  },
  {
    title: "New People",
    desc: "Meet decision-makers, buyers, investors and collaborators who transform your business.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    bg: "card-bg-4",
    accent: false,
  },
];

/* ── Background tool SVGs ── */
const ToolGear = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor">
    <path d="M43.3 5.6l-2.1 7.9a32 32 0 0 0-8.4 3.5L25.4 13 13 25.4l4 7.4a32 32 0 0 0-3.5 8.4l-7.9 2.1v17.4l7.9 2.1a32 32 0 0 0 3.5 8.4L13 78.6l12.4 12.4 7.4-4a32 32 0 0 0 8.4 3.5l2.1 7.9h17.4l2.1-7.9a32 32 0 0 0 8.4-3.5l7.4 4 12.4-12.4-4-7.4a32 32 0 0 0 3.5-8.4l7.9-2.1V43.3l-7.9-2.1a32 32 0 0 0-3.5-8.4l4-7.4L78.6 13l-7.4 4a32 32 0 0 0-8.4-3.5l-2.1-7.9zM50 34a16 16 0 1 1 0 32A16 16 0 0 1 50 34z"/>
  </svg>
);
const ToolWrench = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor">
    <path d="M76 4a22 22 0 0 0-20.8 29L12 76a8 8 0 1 0 12 12l43.2-43.2A22 22 0 1 0 76 4zm0 8a14 14 0 0 1 5 27.1L73 31l-8-8 8-8a14 14 0 0 1 3-.9z"/>
  </svg>
);
const ToolDrill = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor">
    <rect x="8" y="38" width="55" height="14" rx="4"/>
    <rect x="55" y="30" width="22" height="30" rx="3"/>
    <rect x="70" y="34" width="22" height="22" rx="2"/>
    <polygon points="88,38 100,45 88,52"/>
    <rect x="18" y="52" width="8" height="20" rx="2"/>
    <rect x="32" y="52" width="8" height="16" rx="2"/>
  </svg>
);
const ToolCNC = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor">
    <rect x="10" y="60" width="80" height="12" rx="3"/>
    <rect x="20" y="20" width="60" height="42" rx="4"/>
    <rect x="44" y="72" width="12" height="16" rx="2"/>
    <rect x="30" y="86" width="40" height="6" rx="2"/>
    <circle cx="50" cy="41" r="6"/>
    <line x1="50" y1="35" x2="50" y2="22" stroke="currentColor" strokeWidth="3"/>
  </svg>
);
const ToolLaser = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor">
    <rect x="42" y="70" width="16" height="22" rx="3"/>
    <rect x="34" y="58" width="32" height="16" rx="4"/>
    <rect x="38" y="36" width="24" height="26" rx="3"/>
    <ellipse cx="50" cy="34" rx="14" ry="8"/>
    <ellipse cx="50" cy="32" rx="10" ry="6"/>
    <rect x="48" y="8" width="4" height="26" rx="2"/>
    <ellipse cx="50" cy="8" rx="6" ry="4"/>
    <line x1="20" y1="45" x2="38" y2="45" stroke="currentColor" strokeWidth="3"/>
    <line x1="62" y1="45" x2="80" y2="45" stroke="currentColor" strokeWidth="3"/>
  </svg>
);

/* ── Tilt card ── */
function WhyCard({ card, index }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    setTilt({ x: dy * -8, y: dx * 8 });
  };

  return (
    <div
      ref={ref}
      className={`wj-card ${card.accent ? "wj-card--accent" : ""}`}
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hovered ? "translateY(-10px) scale(1.03)" : "translateY(0) scale(1)"}`,
        animationDelay: `${0.1 + index * 0.12}s`,
      }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
    >
      {/* Dark overlay that lifts on hover */}
      <div className="wj-card-overlay" />

      {/* Diagonal shine sweep on hover */}
      <div className="wj-card-shine" />

      {/* Red corner bracket top-left */}
      <div className="wj-card-corner wj-card-corner--tl" />
      <div className="wj-card-corner wj-card-corner--br" />

      {/* Icon circle */}
      <div className="wj-card-icon-wrap">
        <div className="wj-card-icon">{card.icon}</div>
        {/* Rotating ring on hover */}
        <div className="wj-icon-ring" />
      </div>

      {/* Text */}
      <div className="wj-card-body">
        <h3 className="wj-card-title">{card.title}</h3>
        <div className="wj-card-bar" />
        <p className="wj-card-desc">{card.desc}</p>
      </div>

      {/* Arrow CTA */}
      <div className="wj-card-arrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
    </div>
  );
}

/* ── Main component ── */
export default function MachmaWhyJoin() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={`wj-section ${visible ? "wj-section--visible" : ""}`} ref={sectionRef}>

      {/* ── Watermark tool silhouettes ── */}
      <ToolGear    className="wj-wm wj-wm--g1" />
      <ToolWrench  className="wj-wm wj-wm--w1" />
      <ToolDrill   className="wj-wm wj-wm--d1" />
      <ToolCNC     className="wj-wm wj-wm--c1" />
      <ToolLaser   className="wj-wm wj-wm--l1" />
      <ToolGear    className="wj-wm wj-wm--g2" />
      <ToolWrench  className="wj-wm wj-wm--w2" />
      <ToolDrill   className="wj-wm wj-wm--d2" />

      <div className="wj-inner">

        {/* ══ LEFT PANEL ══ */}
        <div className="wj-left">
          <div className="wj-left-sticky">

            {/* Vertical red bar accent */}
            <div className="wj-left-bar" />

            <span className="wj-eyebrow">WHY JOIN EXHIBIT</span>

            <h2 className="wj-heading">
              Why You Should<br />
              <span className="wj-heading--red">Join</span> the Event
            </h2>

            {/* Animated wave line */}
            <div className="wj-wave">
              <svg viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10 Q15 2 30 10 Q45 18 60 10 Q75 2 90 10 Q105 18 120 10"
                  stroke="#c8151b" strokeWidth="2.5" strokeLinecap="round" fill="none"
                  className="wj-wave-path"/>
              </svg>
            </div>

            <p className="wj-desc">
              Transform your business by connecting with industry leaders and
              decision-makers who are shaping the future. Learn how to stay
              ahead of technology and industry changes by engaging with pioneers
              at the forefront of innovation.
            </p>

            {/* Stats row */}
            <div className="wj-mini-stats">
              <div className="wj-mini-stat">
                <strong>500+</strong><span>Exhibitors</span>
              </div>
              <div className="wj-mini-divider" />
              <div className="wj-mini-stat">
                <strong>50K+</strong><span>Visitors</span>
              </div>
              <div className="wj-mini-divider" />
              <div className="wj-mini-stat">
                <strong>4</strong><span>Days</span>
              </div>
            </div>

            <a href="#" className="wj-cta">
              VISIT NOW
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>

        {/* ══ RIGHT — CARDS GRID ══ */}
        <div className="wj-right">
          <div className="wj-grid">
            {cards.map((card, i) => (
              <WhyCard key={card.title} card={card} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}