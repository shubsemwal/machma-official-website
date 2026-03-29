import "./MachmaSponsors.css";
import almtImg from "../assets/Almti.png";
import ufitImg from "../assets/Ufit.png";
import bachanImg from "../assets/bachan-laser.png";
import chamberImg from "../assets/chamber-of-chandigarh.png";
import ficoImg from "../assets/fico.png";
import globalImg from "../assets/global.png";
import jaewooImg from "../assets/jaewoo.png";
import kwalityImg from "../assets/kwality.png";
import laghuImg from "../assets/laghu-udhyog.png";
import medeaImg from "../assets/medea-partner.png";

/* ── Sponsor data — replace src with real logo paths ── */
const poweredBy = {
  name: "ALMTI",
  label: "Association of Ludhiana Machine Tool Industries",
  src:almtImg
};

const goldSponsors = [
  { name: "Hindustan Hydraulics", src:ufitImg 
  },
  { name: "Bachan CNC",           src: bachanImg },
];

/* Row 1 — slides LEFT (top marquee) */
const silverRow1 = [
  { name: "Jyoti",           src: globalImg },
  { name: "NTAT Technologies",src: medeaImg },
  { name: "Guru Kirpa Automation", src: kwalityImg },
  { name: "Infused Systems",  src: laghuImg },
  { name: "Bhavya Machines",  src: chamberImg },
];

/* Row 2 — slides RIGHT (bottom marquee) */
const silverRow2 = [
  { name: "Jyoti",           src: globalImg },
  { name: "NTAT Technologies",src: medeaImg },
  { name: "Guru Kirpa Automation", src: kwalityImg },
  { name: "Infused Systems",  src: laghuImg },
  { name: "Bhavya Machines",  src: chamberImg },
];

const partners = [
  { tier: "Technology Partner", name: "BST TEC",  src: "://images..com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMHRvb2xzfGVufDB8fDB8fHww" },
  { tier: "Banking Partner",    name: "SIDBI",     src: ":" },
  { tier: "Supported By",       name: "Laghu Udyog Sangha", src: ":" },
];

/* ── Placeholder logo block (used when src is ":") ── */
function LogoBlock({ name, size = "md" }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
  return (
    <div className={`sp-logo-placeholder sp-logo-placeholder--${size}`}>
      <span className="sp-logo-initials">{initials}</span>
      <span className="sp-logo-name">{name}</span>
    </div>
  );
}

/* ── Single sponsor pill ── */
function SponsorPill({ sponsor, size = "md" }) {
  return (
    <div className={`sp-pill sp-pill--${size}`}>
      {sponsor.src ? (
        <img src={sponsor.src} alt={sponsor.name} className="sp-logo-img" />
      ) : (
        <LogoBlock name={sponsor.name} size={size} />
      )}
    </div>
  );
}

/* ── Infinite marquee track ── */
function Marquee({ items, direction = "left", speed = 35, size = "md" }) {
  // duplicate 4× so the strip never shows a gap
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className={`sp-marquee sp-marquee--${direction}`}>
      <div
        className="sp-track"
        style={{ "--sp-speed": `${speed}s`, "--sp-dir": direction === "left" ? "-50%" : "0%" }}
      >
        {repeated.map((s, i) => (
          <SponsorPill key={`${s.name}-${i}`} sponsor={s} size={size} />
        ))}
      </div>
    </div>
  );
}

/* ── Main ── */
export default function MachmaSponsors() {
  return (
    <section className="sp-section">
      {/* ── Background ── */}
      <div className="sp-bg-grid" />

      <div className="sp-inner">

        {/* ══ POWERED BY ══ */}
        <div className="sp-powered-wrap">
          <span className="sp-powered-label">Powered by</span>
          <div className="sp-powered-logo">
            {poweredBy.src ? (
              <img src={poweredBy.src} alt={poweredBy.name} />
            ) : (
              <div className="sp-powered-placeholder">
                <span className="sp-powered-name">{poweredBy.name}</span>
                <span className="sp-powered-sub">{poweredBy.label}</span>
              </div>
            )}
          </div>
          <div className="sp-powered-rule" />
        </div>

        {/* ══ GOLD SPONSORS ══ */}
        <div className="sp-tier-block">
          <div className="sp-tier-header">
            <div className="sp-tier-line" />
            <span className="sp-tier-badge sp-tier-badge--gold">
              ★ Gold Sponsors
            </span>
            <div className="sp-tier-line" />
          </div>
          <div className="sp-gold-row">
            {goldSponsors.map((s) => (
              <SponsorPill key={s.name} sponsor={s} size="lg" />
            ))}
          </div>
        </div>

        {/* ══ SILVER MARQUEE — ROW 1 (slides LEFT) ══ */}
        <div className="sp-tier-block">
          <div className="sp-tier-header">
            <div className="sp-tier-line" />
            <span className="sp-tier-badge sp-tier-badge--silver">
              ◆ Silver Sponsors
            </span>
            <div className="sp-tier-line" />
          </div>

          <Marquee items={silverRow1} direction="left"  speed={30} size="md" />

          {/* ══ SILVER MARQUEE — ROW 2 (slides RIGHT — opposite) ══ */}
          <Marquee items={silverRow2} direction="right" speed={28} size="md" />
        </div>

        {/* ══ PARTNER PILLS ══ */}
        <div className="sp-tier-block">
          <div className="sp-tier-header">
            <div className="sp-tier-line" />
            <span className="sp-tier-badge sp-tier-badge--partner">
              ✦ Partners & Supporters
            </span>
            <div className="sp-tier-line" />
          </div>
          <div className="sp-partners-row">
            {partners.map((p) => (
              <div key={p.name} className="sp-partner-card">
                <span className="sp-partner-tier">{p.tier}</span>
                <SponsorPill sponsor={p} size="md" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}