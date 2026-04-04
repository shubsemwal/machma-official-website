import { useEffect, useRef, useState } from "react";
import indiaMap from "../assets/Robo-img.jpeg";
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
            {/* <img 
      src={indiaMap} 
      alt="India Map" 
      className="india-map-img"
    /> */}
          </div>
        </div>

        {/* ══ RIGHT – Content ══ */}
        <div className="ma-content-col">
          <div className="ma-heading-wrap">
            <span className="ma-eyebrow">13TH EDITION · DECEMBER 2026</span>
            <h2 className="ma-heading">
              The <em>13th Edition</em> of{" "}
              <span className="ma-heading--accent">India's Leading</span>
              Exhibition On Machine Tools, Automation Expo &amp; Laser Technology
            </h2>
            <div className="ma-heading-line" />
          </div>

          <div className="ma-desc-grid">
            <p className="ma-desc">
              <strong>Fortune Exhibitors Pvt. Ltd.</strong> believes in enriching your business
              and life with new possibilities. Our Trade fairs & Exhibitions are
              planned and customized to suit your business needs and help
              generate the maximum footfalls and leads. Our endeavor as a
              responsible entity in the business networking industry is to
              ensure cost-effective, productive and thriving business returns
              for our clients. Our mantra to business success is: Connect,
              Network and Build your business; and we make it possible for you
              through Trade fairs & Exhibitions. <strong>Fortune Exhibitors Pvt. Ltd.</strong>
              firmly believes that technological empowerment is crucial for the
              promotion of products and services in a dynamic business
              environment. Besides offering a vibrant platform for showcasing
              your business through Trade fairs & Exhibitions, we empower you
              with the best professional marketing services appropriate for
              sustained business growth — from conceptualization to planning and
              execution. 
              <br /> 
            </p>
            <p className="ma-desc">
              <strong>50,000+</strong> trade professionals and{" "}
              <strong>10,000+</strong> innovative solutions. The upcoming
              edition promises to be grander, sharper, and future‑focused —
              setting new benchmarks in scale, innovation, and industrial
              impact.
              <br />  
              <br />  
              Our Mission at <strong>Fortune Exhibitors Pvt. Ltd.</strong> is to
              support our clients in realizing their vision of achieving
              business excellence through dedicated & customized Trade fairs &
              Exhibitions.
              Realizing business opportunities to address emerging
              markets is one of the fundamental aspects of <strong>Fortune Exhibitors Pvt. Ltd.</strong> If you are a business visionary with plans to expand
              your business, <strong>Fortune Exhibitors Pvt. Ltd.</strong> can offer you the
              perfect platform, the business edge, and exposure required to make
              it BIG. <strong>Fortune Exhibitors Pvt. Ltd.</strong> believes in empowering you
              and your business effectively by offering a cost-effective and
              need-based solution for growth and success.
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
                  <img
                    src={exhibitionPhoto}
                    alt="Exhibition"
                    className="ma-stat-bg-photo"
                  />
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