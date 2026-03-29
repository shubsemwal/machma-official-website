// FocusUs.jsx
import "./FocusUs.css";

const focusAreas = [
  {
    number: "01",
    title: "Machine Tools",
    desc: "CNC machines, lathes, milling machines, grinding machines, EDM, and the latest precision tools reshaping Indian manufacturing.",
    tags: ["CNC", "Lathe", "Milling", "Grinding", "EDM"],
  },
  {
    number: "02",
    title: "Automation & Robotics",
    desc: "Industrial robots, PLCs, SCADA systems, conveyor solutions, and smart factory automation platforms from global brands.",
    tags: ["Robotics", "PLC", "SCADA", "IoT", "Smart Factory"],
  },
  {
    number: "03",
    title: "Laser Technology",
    desc: "Laser cutting, welding, marking, and engraving systems including fiber lasers and CO₂ lasers for every industrial need.",
    tags: ["Laser Cutting", "Fiber Laser", "CO₂", "Engraving"],
  },
  {
    number: "04",
    title: "Metrology & Quality",
    desc: "Precision measurement, CMMs, surface roughness testers, vision systems, and quality control instruments.",
    tags: ["CMM", "Vision Systems", "Surface Testing", "QC"],
  },
  {
    number: "05",
    title: "Tooling & Accessories",
    desc: "Cutting tools, workholding systems, tool presetters, coolant systems, and all machining accessories.",
    tags: ["Cutting Tools", "Workholding", "Coolant", "Presetters"],
  },
  {
    number: "06",
    title: "Software & Digitisation",
    desc: "CAD/CAM software, MES systems, Industry 4.0 solutions, simulation tools, and digital twin platforms.",
    tags: ["CAD/CAM", "MES", "Industry 4.0", "Digital Twin"],
  },
];

const stats = [
  { value: "6",    label: "Focus Sectors" },
  { value: "500+", label: "Exhibiting Brands" },
  { value: "200+", label: "Live Demos" },
  { value: "4",    label: "Days of Action" },
];

export default function FocusUs({ logoImage = null }) {
  return (
    <>

      {/* PAGE HEADER */}
      <header className="page-header" data-bg-text="FOCUS">
        <h1>FOCUS <span>US</span></h1>
        <p>Our Core Exhibition Sectors & Technology Verticals</p>
      </header>

      {/* STATS BAR */}
      <div className="fu-stats-bar">
        {stats.map(s => (
          <div className="fu-stat" key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      {/* INTRO */}
      <section className="fu-intro container">
        <p className="kicker">What We Cover</p>
        <h2 className="fu-intro-heading">
          Six Pillars of<br /><span>Industrial Excellence</span>
        </h2>
        <p className="fu-intro-text">
          MACHMA EXPO 2026 is organised around six carefully curated technology verticals,
          each representing a critical pillar of modern manufacturing. Every exhibitor,
          every demo, every seminar is designed to deliver maximum value within these domains.
        </p>
      </section>

      {/* FOCUS CARDS */}
      <section className="fu-grid container">
        {focusAreas.map(f => (
          <div className="fu-card" key={f.number}>
            <div className="fu-card-num">{f.number}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
            <div className="fu-tags">
              {f.tags.map(t => <span key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </section>

      {/* CTA STRIP */}
      <div className="red-strip">
        <h3>Ready to Exhibit in Your Sector?</h3>
        <p>Secure your stall in the sector that best represents your product — limited spots available for MACHMA EXPO 2026.</p>
      </div>

    </>
  );
}