import { useEffect, useRef, useState } from "react";
import "./MachmaInvitation.css";

/* ── Decorative corner SVG ── */
const Corner = ({ flip }) => (
  <svg
    className={`inv-corner ${flip ? "inv-corner--flip" : ""}`}
    viewBox="0 0 60 60"
    fill="none"
  >
    <path d="M2 2 L28 2 L2 28 Z" fill="rgba(200,21,27,0.18)" />
    <path d="M2 2 L18 2" stroke="#c8151b" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M2 2 L2 18"  stroke="#c8151b" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="2" cy="2" r="2.5" fill="#c8151b" />
  </svg>
);

/* ── Wax seal SVG ── */
const WaxSeal = () => (
  <div className="inv-seal">
    <svg viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="36" fill="#c8151b" />
      <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <circle cx="40" cy="40" r="22" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      {/* 8-pointed star */}
      {[0,45,90,135,180,225,270,315].map((deg, i) => {
        const r1 = 28, r2 = 18;
        const a1 = (deg * Math.PI) / 180;
        const a2 = ((deg + 22.5) * Math.PI) / 180;
        const x1 = 40 + r1 * Math.cos(a1);
        const y1 = 40 + r1 * Math.sin(a1);
        const x2 = 40 + r2 * Math.cos(a2);
        const y2 = 40 + r2 * Math.sin(a2);
        return <line key={i} x1="40" y1="40" x2={x1} y2={y1} stroke="rgba(255,255,255,0.25)" strokeWidth="1" />;
      })}
      <text x="40" y="36" textAnchor="middle" fontSize="8" fontWeight="700"
        fontFamily="'Barlow Condensed', sans-serif" fill="white" letterSpacing="1">MACHMA</text>
      <text x="40" y="47" textAnchor="middle" fontSize="6.5" fontWeight="600"
        fontFamily="'Barlow Condensed', sans-serif" fill="rgba(255,255,255,0.85)" letterSpacing="0.5">EXPO 2026</text>
    </svg>
  </div>
);

/* ── Map pin ── */
const MapPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.05 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z"/>
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const CalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const TicketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M2 9a1 1 0 0 1 0-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a1 1 0 0 1 0 2v2a1 1 0 0 1 0 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2a1 1 0 0 1 0-2V9z"/>
    <line x1="12" y1="3" x2="12" y2="21" strokeDasharray="3 3"/>
  </svg>
);

export default function MachmaInvitation() {
  const [opened, setOpened] = useState(false);
  const [autoOpened, setAutoOpened] = useState(false);
  const sectionRef = useRef(null);

  /* Auto-open when scrolled into view */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !autoOpened) {
          setTimeout(() => { setOpened(true); setAutoOpened(true); }, 600);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, [autoOpened]);

  const toggle = () => setOpened((o) => !o);

  return (
    <section className="inv-section" ref={sectionRef}>
      {/* Background decoration */}
      <div className="inv-bg-lines" />
      <div className="inv-bg-dots" />

      <div className="inv-scene">

        {/* ── Section label ── */}
        <div className="inv-reach-label">
          <span className="inv-reach-dot" />
          REACH US
          <span className="inv-reach-dot" />
        </div>

        <h2 className="inv-section-title">
          Get <span className="inv-title-red">Direction</span> to the Event Hall
        </h2>

        {/* ─────────────────────────────────────
            ENVELOPE + CARD
        ───────────────────────────────────── */}
        <div className={`inv-envelope-wrap ${opened ? "inv-envelope-wrap--open" : ""}`}>

          {/* ── ENVELOPE BODY ── */}
          <div className="inv-envelope" onClick={toggle}>

            {/* Envelope back flaps (left & right V shapes) */}
            <div className="inv-env-flap inv-env-flap--left"  />
            <div className="inv-env-flap inv-env-flap--right" />
            <div className="inv-env-flap inv-env-flap--bottom"/>

            {/* Top flap — folds back on open */}
            <div className={`inv-env-flap inv-env-flap--top ${opened ? "inv-env-flap--top-open" : ""}`}>
              <WaxSeal />
            </div>

            {/* Envelope face label (closed state) */}
            <div className={`inv-env-label ${opened ? "inv-env-label--hide" : ""}`}>
              {/* <span className="inv-env-text">You're Invited</span> */}
              {/* <span className="inv-env-sub">Click to open ↑</span> */}
            </div>
          </div>

          {/* ── INVITATION CARD — rises out of envelope ── */}
          <div className={`inv-card ${opened ? "inv-card--risen" : ""}`}>

            {/* Card inner */}
            <div className="inv-card-inner">

              {/* Corner ornaments */}
              <Corner />
              <Corner flip />

              {/* Header band */}
              <div className="inv-card-header">
                <div className="inv-card-header-bg" />
                <span className="inv-card-eyebrow">FORMAL INVITATION</span>
                <h3 className="inv-card-title">
                  13<sup>th</sup> MACHMA <em>Expo 2026</em>
                </h3>
                <p className="inv-card-subtitle">India's Leading Exhibition on Machine Tools &amp; Automation</p>
              </div>

              {/* Ornamental divider */}
              <div className="inv-divider">
                <span className="inv-divider-line" />
                <span className="inv-divider-gem">◆</span>
                <span className="inv-divider-line" />
              </div>

              {/* Info grid */}
              <div className="inv-info-grid">

                {/* Date & Venue */}
                <div className="inv-info-block inv-info-block--date">
                  <div className="inv-info-icon"><CalIcon /></div>
                  <div>
                    <span className="inv-info-label">Date</span>
                    <strong className="inv-info-value">11 – 14 December 2026</strong>
                    <span className="inv-info-note">4 Days · All industry professionals welcome</span>
                  </div>
                </div>

                <div className="inv-info-block inv-info-block--venue">
                  <div className="inv-info-icon"><MapPin /></div>
                  <div>
                    <span className="inv-info-label">Venue</span>
                    <strong className="inv-info-value">Ludhiana, Punjab</strong>
                    <span className="inv-info-note">
                      1201, Phase 1 Rd, Phase 1, Urban Estate Dugri,<br />
                      Ludhiana, Punjab – 141013
                    </span>
                  </div>
                </div>

                <div className="inv-info-block">
                  <div className="inv-info-icon"><PhoneIcon /></div>
                  <div>
                    <span className="inv-info-label">Phone</span>
                    <a href="tel:+917087066117" className="inv-info-link">+91-70870-66117</a>
                    <a href="tel:+917340990309" className="inv-info-link">+91-73409-90309</a>
                  </div>
                </div>

                <div className="inv-info-block">
                  <div className="inv-info-icon"><MailIcon /></div>
                  <div>
                    <span className="inv-info-label">Email</span>
                    <a href="mailto:fortuneexhibitors@gmail.com" className="inv-info-link">fortuneexhibitors@gmail.com</a>
                    <a href="mailto:machmaexpo@gmail.com" className="inv-info-link">machmaexpo@gmail.com</a>
                  </div>
                </div>

                <div className="inv-info-block">
                  <div className="inv-info-icon"><TicketIcon /></div>
                  <div>
                    <span className="inv-info-label">Entry Fees</span>
                    <strong className="inv-info-value inv-info-value--free">Free Ticket</strong>
                    <span className="inv-info-note">For Industry Professionals</span>
                    <span className="inv-info-note" style={{marginTop: "4px"}}>
                      Booth Cost: <strong style={{color:"var(--inv-red)"}}>from ₹7,500 INR</strong>
                    </span>
                  </div>
                </div>

                <div className="inv-info-block">
                  <div className="inv-info-icon" style={{color:"var(--inv-red)"}}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                  </div>
                  <div>
                    <span className="inv-info-label">Organiser</span>
                    <strong className="inv-info-value">Fortune Exhibitors Pvt. Ltd.</strong>
                    <span className="inv-info-note">Supported by ALMTI</span>
                  </div>
                </div>

              </div>

              {/* Bottom ornamental rule */}
              <div className="inv-divider" style={{marginTop: "auto"}}>
                <span className="inv-divider-line" />
                <span className="inv-divider-gem" style={{fontSize:"0.55rem",opacity:0.4}}>✦ ✦ ✦</span>
                <span className="inv-divider-line" />
              </div>

              {/* CTAs */}
              <div className="inv-card-ctas">
                <a href="#" className="inv-cta inv-cta--primary">
                  Register Now
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" width="14" height="14">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <a
                  href="https://maps.google.com/?q=Ludhiana+Punjab"
                  target="_blank"
                  rel="noreferrer"
                  className="inv-cta inv-cta--outline"
                >
                  Get Directions
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="14" height="14">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </a>
              </div>

            </div>{/* /card-inner */}
          </div>{/* /inv-card */}

        </div>{/* /envelope-wrap */}

        {/* Close hint */}
        <button
          className={`inv-toggle-hint ${opened ? "inv-toggle-hint--visible" : ""}`}
          onClick={toggle}
        >
          {opened ? "↓ Close Invitation" : "↑ Open Invitation"}
        </button>

      </div>
    </section>
  );
}