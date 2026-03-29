import { useState } from "react";
import "./Gallery.css";

// Replace src values with your real image paths e.g. "/assets/gallery/img1.jpg"
const galleryItems = [
  { id: 1, src: null, caption: "CNC Demo Floor — MACHMA 2024", category: "machines", wide: true },
  { id: 2, src: null, caption: "Laser Cutting Live Demo",       category: "laser" },
  { id: 3, src: null, caption: "Inauguration Ceremony 2024",    category: "ceremony" },
  { id: 4, src: null, caption: "Robotics Pavilion",             category: "robots" },
  { id: 5, src: null, caption: "Visitor Footfall Day 1",        category: "visitors", wide: true },
  { id: 6, src: null, caption: "Precision Tools Display",       category: "machines" },
  { id: 7, src: null, caption: "Chief Guest Address",           category: "ceremony" },
  { id: 8, src: null, caption: "Fiber Laser Showcase",          category: "laser" },
  { id: 9, src: null, caption: "Automation Seminar Hall",       category: "robots" },
  { id: 10, src: null, caption: "Exhibition Opening Day",       category: "ceremony", wide: true },
  { id: 11, src: null, caption: "Swiss Machining Zone",         category: "machines" },
  { id: 12, src: null, caption: "Industry Networking Night",    category: "visitors" },
];

const categories = ["all", "machines", "laser", "robots", "ceremony", "visitors"];

// Palette for placeholder tiles
const placeholderColors = [
  "#1a0a08","#180808","#1c1010","#200e0e","#160808",
  "#1e1212","#140606","#1a0c0c","#221010","#180a0a",
];

export default function Gallery({ logoImage = null }) {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState(null);

  const visible = filter === "all"
    ? galleryItems
    : galleryItems.filter(g => g.category === filter);

  return (
    <>

      {/* PAGE HEADER */}
      <header className="page-header" data-bg-text="GALLERY">
        <h1>PHOTO <span>GALLERY</span></h1>
        <p>Moments from past MACHMA EXPO editions</p>
      </header>

      {/* FILTERS */}
      <div className="gallery-filters container">
        {categories.map(c => (
          <button
            key={c}
            className={`gf-btn ${filter === c ? "active" : ""}`}
            onClick={() => setFilter(c)}
          >
            {c.toUpperCase()}
          </button>
        ))}
      </div>

      {/* GRID */}
      <section className="gallery-grid container">
        {visible.map((item, i) => (
          <div
            className={`gallery-item ${item.wide ? "gallery-item--wide" : ""}`}
            key={item.id}
            onClick={() => setLightbox(item)}
          >
            {item.src ? (
              <img src={item.src} alt={item.caption} />
            ) : (
              <div
                className="gallery-placeholder"
                style={{ background: placeholderColors[i % placeholderColors.length] }}
              >
                <div className="gallery-ph-inner">
                  <span className="gallery-ph-num">{String(item.id).padStart(2,"0")}</span>
                  <span className="gallery-ph-icon">📷</span>
                  <span className="gallery-ph-label">{item.category.toUpperCase()}</span>
                </div>
              </div>
            )}
            <div className="gallery-caption">
              <span>{item.caption}</span>
              <span className="gallery-zoom">⊕</span>
            </div>
          </div>
        ))}
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
            {lightbox.src ? (
              <img src={lightbox.src} alt={lightbox.caption} />
            ) : (
              <div className="lightbox-placeholder">
                <span className="gallery-ph-icon" style={{ fontSize: "5rem" }}>📷</span>
                <p>{lightbox.caption}</p>
              </div>
            )}
            <div className="lightbox-caption">{lightbox.caption}</div>
          </div>
        </div>
      )}

      {/* RED STRIP */}
      <div className="red-strip" style={{ marginTop: "2rem" }}>
        <h3>Be Part of MACHMA EXPO 2026</h3>
        <p>Create your own exhibition story — book your stall today and be featured in next year's gallery.</p>
      </div>

    </>
  );
}