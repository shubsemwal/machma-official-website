import "./MachmaSponsors.css";
import almtImg from "../assets/Almti.png";
import ufitImg from "../assets/Ufit.png";
import bachanImg from "../assets/bachan-laser.png";
import chamberImg from "../assets/chamber-of-chandigarh.png";
import ficoImg from "../assets/Fico.png";
import globalImg from "../assets/Global.png";
import jaewooImg from "../assets/jaewoo.png";
import kwalityImg from "../assets/kwality.png";
import laghuImg from "../assets/laghu-udhyog.png";
import medeaImg from "../assets/medea-partner.png";

/* ── Sponsor data ── */
const poweredBy = {
  name: "ALMTI",
  label: "Association of Ludhiana Machine Tool Industries",
  src: almtImg
};

const globalSponsor = [
  { name: "Global", src: globalImg },
];

/* Row 1 — slides LEFT (top marquee) */
const silverRow1 = [
  { name: "Bachan CNC",  src: bachanImg },
  { name: "Kwality",     src: kwalityImg },
  { name: "Jaewoo",      src: jaewooImg },
];

/* Row 2 — slides RIGHT (bottom marquee) */
const silverRow2 = [
  { name: "Bachan CNC",  src: bachanImg },
  { name: "Kwality",     src: kwalityImg },
  { name: "Jaewoo",      src: jaewooImg },
];

const partners = [
  { tier: "Supported By",  name: "FICO",             src: ficoImg },
  { tier: "Supported By",  name: "UFIT",             src: ufitImg },
  { tier: "Supported By",  name: "Laghu Udyog",      src: laghuImg },
  { tier: "Media Partner", name: "Jessica News IAP", src: medeaImg },
];

/* ── Placeholder logo block (used when src is missing) ── */
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

        {/* ══ GLOBAL SPONSOR ══ */}
        <div className="sp-tier-block">
          <div className="sp-tier-header">
            <div className="sp-tier-line" />
            <span className="sp-tier-badge sp-tier-badge--gold">
              🌐 Global Sponsor
            </span>
            <div className="sp-tier-line" />
          </div>
          <div className="sp-gold-row">
            {globalSponsor.map((s) => (
              <SponsorPill key={s.name} sponsor={s} size="lg" />
            ))}
          </div>
        </div>

        {/* ══ SILVER MARQUEE ══ */}
        <div className="sp-tier-block">
          <div className="sp-tier-header">
            <div className="sp-tier-line" />
            <span className="sp-tier-badge sp-tier-badge--silver">
              ◆ Silver Sponsors
            </span>
            <div className="sp-tier-line" />
          </div>

          <Marquee items={silverRow1} direction="left"  speed={30} size="md" />
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