// AboutUs.jsx
import Layout from "./Layout";
import "./AboutUs.css";

const highlights = [
  { value: "500+",  label: "Stalls" },
  { value: "10K+",  label: "Products" },
  { value: "50K+",  label: "Visitors" },
  { value: "13th",  label: "Edition" },
];

const values = [
  {
    title: "Innovation",
    desc: "Showcasing the latest in machine tools, automation, and laser technology from global leaders.",
    icon: "⚙️",
  },
  {
    title: "Networking",
    desc: "Connecting manufacturers, suppliers, and buyers under one roof across the entire industry.",
    icon: "🔗",
  },
  {
    title: "Excellence",
    desc: "13 editions of world-class exhibition experiences that benchmark industrial expos in India.",
    icon: "🏆",
  },
];

/**
 * AboutUs Props
 * @prop {string} logoImage  — passed to Layout (optional)
 * @prop {string} aboutImage — left-column photo (optional, SVG fallback built-in)
 */
export default function AboutUs({ logoImage = null, aboutImage = null }) {
  return (
    <>

      {/* PAGE HEADER */}
      <header className="page-header" data-bg-text="ABOUT">
        <h1>ABOUT <span>US</span></h1>
        <p>India's Premier Machine Tools & Automation Exhibition</p>
      </header>

      {/* MAIN CONTENT */}
      <section className="au-content container">

        {/* Image */}
        <div className="au-image-col">
          <div className="au-image-frame">
            {aboutImage
              ? <img src={aboutImage} alt="MACHMA Expo" />
              : (
                <div className="au-img-placeholder">
                  <svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg">
                    <rect width="480" height="360" fill="#111"/>
                    <rect x="0" y="0" width="480" height="120" fill="#181818"/>
                    {[55,165,275,385].map((x,i)=>(
                      <g key={i}>
                        <rect x={x-45} y="120" width="90" height="180" fill="#1e1e1e" stroke="#2a2a2a" strokeWidth="1"/>
                        <rect x={x-45} y="120" width="90" height="24" fill="#cc2200"/>
                        <rect x={x-30} y="200" width="60" height="40" rx="3" fill="#252525"/>
                        <circle cx={x} cy="220" r="14" fill="#1a1a1a" stroke="#cc2200" strokeWidth="1.5"/>
                      </g>
                    ))}
                    <rect x="0" y="305" width="480" height="55" fill="#161616"/>
                    {[80,200,340].map((x,i)=>(
                      <g key={i} transform={`translate(${x},290)`}>
                        <circle cx="0" cy="-30" r="7" fill="#2a2a2a"/>
                        <rect x="-5" y="-23" width="10" height="20" rx="2" fill="#2a2a2a"/>
                      </g>
                    ))}
                    <text x="60" y="136" fontFamily="Arial" fontWeight="bold" fontSize="10" fill="white" letterSpacing="2">MACHMA EXPO 2026</text>
                  </svg>
                </div>
              )
            }
            <div className="au-img-badge">Est. 2010 · 13 Editions</div>
          </div>
        </div>

        {/* Text */}
        <div className="au-text-col">
          <p className="kicker">Who We Are</p>
          <h2>India's Leading<br /><span>Industrial Expo</span><br />Since 2010</h2>
          <p>
            <strong>MACHMA EXPO</strong> is India's most prestigious exhibition dedicated to
            Machine Tools, Automation, and Laser Technology — bringing together the brightest
            minds, cutting-edge machinery, and thousands of decision-makers under one roof.
          </p>
          <div className="red-divider" />
          <p>
            Now in its <strong>13th edition</strong>, MACHMA EXPO 2026 spans four electrifying
            days from <strong>11–14 December 2026</strong>, with 500+ stalls, 10,000+ products,
            and an expected footfall of 50,000+ visitors.
          </p>
          <p>
            Whether you are a manufacturer showcasing innovations, a buyer seeking solutions, or
            a professional staying ahead — MACHMA EXPO connects you to what matters most.
          </p>
          <div className="au-highlights">
            {highlights.map(h => (
              <div className="au-hl" key={h.label}>
                <strong>{h.value}</strong>
                <span>{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION STRIP */}
      <div className="red-strip">
        <h3>"Empowering India's Manufacturing Future — One Exhibition at a Time"</h3>
        <p>Our mission: a world-class platform where technology meets commerce and industry leaders connect with the next generation of manufacturers.</p>
      </div>

      {/* VALUES */}
      <section className="au-values container">
        <div className="section-title">
          <h2>Why <span>MACHMA?</span></h2>
          <p>What sets us apart</p>
        </div>
        <div className="au-values-grid">
          {values.map(v => (
            <div className="au-card" key={v.title}>
              <div className="au-card-icon">{v.icon}</div>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
  );
}