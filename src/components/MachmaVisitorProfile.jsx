import { useEffect, useRef, useState } from "react";
import "./MachmaVisitorProfile.css";

/* ── Sector columns ── */
const columns = [
  [
    "Aerospace",
    "Agriculture Machinery Mfrs.",
    "Automobiles & Auto Components",
    "Casting, Forging & Foundry Inds.",
    "Defence",
    "Earthmoving Equipment",
    "Electrical & Electronics",
    "Energy Sectors",
    "Engineering Industry",
  ],
  [
    "Oil & Gas Equipments",
    "Plastic Processing Plants",
    "Process Plant and Machinery",
    "Railways, PSU & Govt. Depts.",
    "Research and Development",
    "Rolling Mill Machine Telecom Equipment",
    "Textile Machinery Sector",
    "Tractor Industry",
    "Pumps, Valves & Hydraulics",
  ],
  [
    "Food Processing & Dairy Tech.",
    "Hand Tools / Fasteners Sectors",
    "Industrial Automation",
    "Steel & Infrastructure Sector",
    "Job Shops",
    "Machine Tools Industry",
    "Material Handling",
    "Medical Eqpt. Manufacturers",
    "Robotics & Smart Manufacturing",
  ],
];

/* ── Stats ── */
const stats = [
  { val: "50,000+", label: "Expected Visitors" },
  { val: "27+",     label: "Industry Sectors"  },
  { val: "13+",     label: "Countries"          },
  { val: "4",       label: "Days of Expo"       },
];

/* ── Tool watermark SVGs ── */
const Gear = ({ cls }) => (
  <svg className={cls} viewBox="0 0 100 100" fill="currentColor">
    <path d="M43.3 5.6l-2.1 7.9a32 32 0 0 0-8.4 3.5L25.4 13 13 25.4l4 7.4a32 32 0 0 0-3.5 8.4l-7.9 2.1v17.4l7.9 2.1a32 32 0 0 0 3.5 8.4L13 78.6l12.4 12.4 7.4-4a32 32 0 0 0 8.4 3.5l2.1 7.9h17.4l2.1-7.9a32 32 0 0 0 8.4-3.5l7.4 4 12.4-12.4-4-7.4a32 32 0 0 0 3.5-8.4l7.9-2.1V43.3l-7.9-2.1a32 32 0 0 0-3.5-8.4l4-7.4L78.6 13l-7.4 4a32 32 0 0 0-8.4-3.5l-2.1-7.9zM50 34a16 16 0 1 1 0 32A16 16 0 0 1 50 34z"/>
  </svg>
);
const Wrench = ({ cls }) => (
  <svg className={cls} viewBox="0 0 100 100" fill="currentColor">
    <path d="M76 4a22 22 0 0 0-20.8 29L12 76a8 8 0 1 0 12 12l43.2-43.2A22 22 0 1 0 76 4zm0 8a14 14 0 0 1 5 27.1L73 31l-8-8 8-8a14 14 0 0 1 3-.9z"/>
  </svg>
);
const CNC = ({ cls }) => (
  <svg className={cls} viewBox="0 0 100 100" fill="currentColor">
    <rect x="10" y="60" width="80" height="12" rx="3"/>
    <rect x="20" y="20" width="60" height="42" rx="4"/>
    <rect x="44" y="72" width="12" height="16" rx="2"/>
    <rect x="30" y="86" width="40" height="6" rx="2"/>
    <circle cx="50" cy="41" r="6"/>
    <line x1="50" y1="35" x2="50" y2="22" stroke="currentColor" strokeWidth="3"/>
  </svg>
);
const Drill = ({ cls }) => (
  <svg className={cls} viewBox="0 0 100 100" fill="currentColor">
    <rect x="8" y="38" width="55" height="14" rx="4"/>
    <rect x="55" y="30" width="22" height="30" rx="3"/>
    <rect x="70" y="34" width="22" height="22" rx="2"/>
    <polygon points="88,38 100,45 88,52"/>
    <rect x="18" y="52" width="8" height="20" rx="2"/>
    <rect x="32" y="52" width="8" height="16" rx="2"/>
  </svg>
);

/* ── Single item with stagger animation ── */
function SectorItem({ text, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <li
      className={`vp-item ${hovered ? "vp-item--hovered" : ""}`}
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="vp-item-arrow">
        <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M2 12L12 2M12 2H5M12 2v7"/>
        </svg>
      </span>
      <span className="vp-item-text">{text}</span>
      <span className="vp-item-line" />
    </li>
  );
}

/* ── Column card with tilt ── */
function ColumnCard({ items, colIndex, visible }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    setTilt({ x: dy * -5, y: dx * 5 });
  };

  return (
    <div
      ref={ref}
      className="vp-col-card"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hovered ? "translateY(-8px)" : ""}`,
        animationDelay: `${0.2 + colIndex * 0.15}s`,
      }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
    >
      {/* Card shine */}
      <div className="vp-col-shine" />
      {/* Top accent bar */}
      <div className="vp-col-topbar" />
      {/* Corner brackets */}
      <div className="vp-corner vp-corner--tl" />
      <div className="vp-corner vp-corner--br" />
      {/* Column number badge */}
      <div className="vp-col-badge">{String(colIndex + 1).padStart(2, "0")}</div>

      <ul className="vp-item-list">
        {items.map((text, i) => (
          <SectorItem
            key={text}
            text={text}
            delay={visible ? 0.3 + colIndex * 0.15 + i * 0.05 : 0}
          />
        ))}
      </ul>
    </div>
  );
}

/* ── Main ── */
export default function MachmaVisitorProfile({ bgImage = null }) {
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
    <section
      className={`vp-section ${visible ? "vp-section--visible" : ""}`}
      ref={sectionRef}
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
    >
      {/* Dark overlay on bg photo */}
      <div className="vp-overlay" />

      {/* Tool watermarks */}
      <Gear    cls="vp-wm vp-wm--g1" />
      <Wrench  cls="vp-wm vp-wm--w1" />
      <CNC     cls="vp-wm vp-wm--c1" />
      <Drill   cls="vp-wm vp-wm--d1" />
      <Gear    cls="vp-wm vp-wm--g2" />
      <Wrench  cls="vp-wm vp-wm--w2" />

      {/* Scan-line texture */}
      <div className="vp-scanlines" />

      <div className="vp-inner">

        {/* ── HEADING BLOCK ── */}
        <div className="vp-header">
          <div className="vp-header-tag">
            <span className="vp-tag-dot" />
            WHO VISITS MACHMA
            <span className="vp-tag-dot" />
          </div>

          <h2 className="vp-heading">
            Visitor <span className="vp-heading--red">Profile</span>
          </h2>

          {/* Animated underline */}
          <div className="vp-heading-rule">
            <span className="vp-rule-line" />
            <span className="vp-rule-diamond">◆</span>
            <span className="vp-rule-line" />
          </div>

          <p className="vp-subtext">
            Visitors include engineers, manufacturers, industry leaders,
            procurement managers, entrepreneurs, researchers, and technology
            enthusiasts from <strong>automotive, aerospace, electronics,</strong> and
            manufacturing sectors — all seeking the latest innovations,
            partnerships, and business growth opportunities at{" "}
            <strong>MACHMA Expo 2026.</strong>
          </p>

          {/* Stats row */}
          <div className="vp-stats-row">
            {stats.map((s, i) => (
              <div key={s.label} className="vp-stat" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                <strong>{s.val}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── COLUMNS ── */}
        <div className="vp-cols">
          {columns.map((col, i) => (
            <ColumnCard key={i} items={col} colIndex={i} visible={visible} />
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="vp-cta-wrap">
          <div className="vp-cta-line" />
          <a href="#" className="vp-cta-btn">
            <span className="vp-cta-bg" />
            <span className="vp-cta-label">Register as a Visitor</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M7 17L17 7M17 7H8M17 7v9"/>
            </svg>
          </a>
          <div className="vp-cta-line" />
        </div>

      </div>
    </section>
  );
}