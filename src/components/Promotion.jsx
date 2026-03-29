// Promotion.jsx
import { useState } from "react";
import "./Promotion.css";

const offers = [
  {
    badge: "EARLY BIRD",
    title: "Early Bird Stall Booking",
    price: "₹ 18,000",
    priceNote: "/ sq. metre (limited slots)",
    original: "₹ 24,000",
    features: [
      "Premium stall location",
      "Free fascia name board",
      "2 Exhibitor passes included",
      "Listing in official expo catalogue",
      "Free Wi-Fi in stall",
    ],
    highlight: true,
    deadline: "Offer ends 30 Aug 2026",
  },
  {
    badge: "STANDARD",
    title: "Standard Stall Package",
    price: "₹ 22,000",
    priceNote: "/ sq. metre",
    original: null,
    features: [
      "Choice of stall location",
      "Free fascia name board",
      "2 Exhibitor passes included",
      "Listing in official expo catalogue",
      "Free Wi-Fi in stall",
    ],
    highlight: false,
    deadline: "Available until Oct 2026",
  },
  {
    badge: "PREMIUM",
    title: "Premium Corner Package",
    price: "₹ 28,000",
    priceNote: "/ sq. metre",
    original: null,
    features: [
      "Corner stall with extra visibility",
      "Branded fascia board",
      "4 Exhibitor passes included",
      "Featured listing in catalogue",
      "Dedicated power supply",
      "Free Wi-Fi + IT support",
    ],
    highlight: false,
    deadline: "Limited corner stalls",
  },
];

const perks = [
  { icon: "📢", title: "Social Media Spotlight", desc: "Your brand featured on MACHMA EXPO's official social channels reaching 1L+ followers." },
  { icon: "📰", title: "Press Coverage", desc: "Get mentioned in industry publications and press releases distributed to 500+ media contacts." },
  { icon: "🎤", title: "Speaker Opportunity", desc: "Top exhibitors get the chance to present at MACHMA EXPO's seminar series." },
  { icon: "🏷️", title: "Brand in Catalogue", desc: "Full-page ad option in the official printed & digital expo catalogue." },
];

export default function Promotion({ logoImage = null }) {
  const [active, setActive] = useState(null);

  return (
    <>

      {/* PAGE HEADER */}
      <header className="page-header" data-bg-text="PROMO">
        <h1>PROMO<span>TION</span></h1>
        <p>Exclusive Packages & Offers for Exhibitors</p>
      </header>

      {/* COUNTDOWN TICKER */}
      <div className="promo-ticker">
        <span>🔥</span>
        <span>EARLY BIRD OFFER ENDS 30 AUGUST 2026 — Book Now & Save Up To 25%</span>
        <span>🔥</span>
        <span>LIMITED STALLS AVAILABLE — MACHMA EXPO 11–14 DEC 2026</span>
        <span>🔥</span>
        <span>EARLY BIRD OFFER ENDS 30 AUGUST 2026 — Book Now & Save Up To 25%</span>
      </div>

      {/* PACKAGES */}
      <section className="promo-packages container">
        <div className="section-title">
          <h2>Stall <span>Packages</span></h2>
          <p>Choose the package that fits your brand</p>
        </div>
        <div className="promo-grid">
          {offers.map((o, i) => (
            <div
              className={`promo-card ${o.highlight ? "promo-card--hot" : ""}`}
              key={i}
            >
              {o.highlight && <div className="promo-hot-label">BEST VALUE</div>}
              <div className="promo-badge">{o.badge}</div>
              <h3>{o.title}</h3>
              <div className="promo-price-row">
                <strong>{o.price}</strong>
                {o.original && <del>{o.original}</del>}
              </div>
              <p className="promo-price-note">{o.priceNote}</p>
              <ul className="promo-features">
                {o.features.map(f => (
                  <li key={f}><span className="promo-check">✓</span>{f}</li>
                ))}
              </ul>
              <p className="promo-deadline">{o.deadline}</p>
              <a href="#" className={`promo-cta ${o.highlight ? "promo-cta--hot" : ""}`}>
                BOOK THIS PACKAGE
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* RED STRIP */}
      <div className="red-strip">
        <h3>More Than a Stall — It's a Stage for Your Brand</h3>
        <p>Every package at MACHMA EXPO includes marketing benefits that amplify your reach far beyond the exhibition floor.</p>
      </div>

      {/* PERKS */}
      <section className="promo-perks container">
        <div className="section-title">
          <h2>Marketing <span>Perks</span></h2>
          <p>Included with every package</p>
        </div>
        <div className="promo-perks-grid">
          {perks.map(p => (
            <div className="promo-perk" key={p.title}>
              <div className="promo-perk-icon">{p.icon}</div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </>
  );
}