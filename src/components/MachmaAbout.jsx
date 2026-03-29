import { useEffect, useRef, useState } from "react";
import indiaMap from "../assets/IndiaMap.png";
import "./MachmaAbout.css";

const stats = [
  {
    value: "13th",
    label: "Edition",
    sub: "Marking 12 years of industrial excellence",
    highlight: false,
  },
  {
    value: "650+",
    label: "Exhibitors",
    sub: "Leading companies from India and abroad",
    highlight: true,
  },
  {
    value: "50,000+",
    label: "Visitors",
    sub: "Professionals and decision-makers across industries",
    highlight: false,
  },
  {
    value: "3.35L",
    label: "Sq. Ft.",
    sub: "A grand stage for innovation",
    highlight: false,
    hasPhoto: true,
  },
  {
    value: "10,000+",
    label: "Products",
    sub: "Live demos and cutting-edge solutions",
    highlight: true,
  },
];

export default function MachmaAbout({ exhibitionPhoto = null }) {
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
    <section
      className={`ma-section ${visible ? "ma-section--visible" : ""}`}
      ref={sectionRef}
    >
      <div className="ma-bg-stripe ma-bg-stripe--1" />
      <div className="ma-bg-stripe ma-bg-stripe--2" />
      <div className="ma-bg-dots" />

      <div className="ma-inner">

        {/* ══ LEFT – India Map ══ */}
        <div className="ma-map-col">
  <div className="india-map-wrapper">
    
    <img 
      src={indiaMap} 
      alt="India Map" 
      className="india-map-img"
    />

  </div>
</div>

        {/* ══ RIGHT – Content ══ */}
        <div className="ma-content-col">

          <div className="ma-heading-wrap">
            <span className="ma-eyebrow">13TH EDITION · DECEMBER 2026</span>
            <h2 className="ma-heading">
              The <em>13th Edition</em> of{" "}
              <span className="ma-heading--accent">India's Largest</span>
              <br />
              Machine Tools &amp; Automation Expo
            </h2>
            <div className="ma-heading-line" />
          </div>

          <div className="ma-desc-grid">
            <p className="ma-desc">
              In December 2026, <strong>MACHMA Expo</strong> returns with its{" "}
              <strong>13th edition</strong>, reaffirming its position as North
              India's biggest machine tools and automation technology exhibition.
              For over 12 successful years, MACHMA has been the platform of
              choice for <strong>500+ global exhibitors</strong>.
            </p>
            <p className="ma-desc">
              <strong>50,000+</strong> trade professionals and{" "}
              <strong>10,000+</strong> innovative solutions. The upcoming edition
              promises to be grander, sharper, and future‑focused — setting new
              benchmarks in scale, innovation, and industrial impact.
            </p>
          </div>

          <div className="ma-stats-grid">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`ma-stat-card${s.highlight ? " ma-stat-card--red" : ""}${s.hasPhoto ? " ma-stat-card--photo" : ""}`}
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                {s.hasPhoto && exhibitionPhoto && (
                  <img src={exhibitionPhoto} alt="Exhibition" className="ma-stat-bg-photo" />
                )}
                <div className="ma-stat-inner">
                  <strong className="ma-stat-value">{s.value}</strong>
                  <span className="ma-stat-label">{s.label}</span>
                  <p className="ma-stat-sub">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}