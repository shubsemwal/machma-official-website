import { useEffect, useRef, useState } from "react";
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
            {/*
              India SVG — proper geographic proportions.
              viewBox: 0 0 400 480  (width × height in SVG units)
              All state paths are traced from real India map proportions.
              Punjab is in the UPPER-LEFT area of the map.
            */}
            <svg
              viewBox="0 0 400 480"
              className="india-svg"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="pglow" x="-80%" y="-80%" width="260%" height="260%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* ── Jammu & Kashmir ── */}
              <path className="st" d="
                M 120,8  L 136,6  L 150,8  L 162,12 L 172,18
                L 178,26 L 180,36 L 176,44 L 168,50
                L 158,54 L 148,56 L 138,54 L 130,48
                L 122,42 L 116,34 L 114,24 Z
              "/>

              {/* ── Himachal Pradesh ── */}
              <path className="st" d="
                M 148,56 L 158,54 L 168,50 L 176,44
                L 182,50 L 184,58 L 180,66
                L 172,72 L 162,74 L 152,70
                L 146,64 Z
              "/>

              {/* ── Punjab — RED ── */}
              <path className="st st--punjab" filter="url(#pglow)" d="
                M 114,48 L 122,42 L 130,48 L 138,54
                L 148,56 L 146,64 L 152,70
                L 148,78 L 140,84 L 130,86
                L 120,82 L 112,74 L 108,64
                L 110,54 Z
              "/>

              {/* ── Haryana ── */}
              <path className="st" d="
                M 148,78 L 152,70 L 162,74 L 172,72
                L 180,66 L 184,72 L 186,80
                L 182,90 L 174,96 L 164,98
                L 154,94 L 148,86 Z
              "/>

              {/* ── Delhi (tiny) ── */}
              <path className="st" d="
                M 174,96 L 182,90 L 186,94 L 184,100
                L 176,102 Z
              "/>

              {/* ── Uttarakhand ── */}
              <path className="st" d="
                M 184,58 L 194,54 L 204,54 L 212,58
                L 216,66 L 212,76 L 204,82
                L 194,84 L 186,80 L 184,72
                L 180,66 Z
              "/>

              {/* ── Uttar Pradesh ── */}
              <path className="st" d="
                M 184,100 L 186,80 L 194,84 L 204,82
                L 212,76 L 220,80 L 230,84
                L 238,90 L 242,100 L 240,112
                L 234,122 L 224,130 L 212,134
                L 200,132 L 190,126 L 182,118
                L 180,108 Z
              "/>

              {/* ── Rajasthan ── */}
              <path className="st" d="
                M 70,78 L 90,74 L 108,72 L 114,78
                L 110,90 L 108,104 L 112,118
                L 116,132 L 112,148 L 104,160
                L 92,168 L 78,170 L 66,166
                L 56,156 L 50,144 L 50,130
                L 54,116 L 60,102 L 66,90 Z
              "/>

              {/* ── Bihar ── */}
              <path className="st" d="
                M 238,90 L 250,86 L 262,86 L 272,90
                L 276,100 L 272,110 L 262,116
                L 250,118 L 240,112 Z
              "/>

              {/* ── Jharkhand ── */}
              <path className="st" d="
                M 250,118 L 262,116 L 272,120
                L 274,130 L 268,140 L 256,144
                L 246,140 L 242,130 L 244,122 Z
              "/>

              {/* ── West Bengal ── */}
              <path className="st" d="
                M 272,90 L 284,88 L 292,92 L 294,102
                L 290,112 L 282,120 L 274,126
                L 268,140 L 274,130 L 272,120
                L 276,110 L 276,100 Z
              "/>

              {/* ── Sikkim (tiny) ── */}
              <path className="st" d="
                M 290,80 L 296,78 L 300,84 L 296,90 L 290,88 Z
              "/>

              {/* ── Assam ── */}
              <path className="st" d="
                M 296,84 L 310,80 L 324,80 L 334,84
                L 336,92 L 328,100 L 316,104
                L 304,102 L 296,96 Z
              "/>

              {/* ── Arunachal Pradesh ── */}
              <path className="st" d="
                M 308,68 L 326,64 L 344,62 L 356,66
                L 358,76 L 348,82 L 334,84 L 322,80
                L 308,78 Z
              "/>

              {/* ── Nagaland ── */}
              <path className="st" d="
                M 336,100 L 344,98 L 350,104 L 348,112
                L 340,114 L 334,108 Z
              "/>

              {/* ── Manipur ── */}
              <path className="st" d="
                M 344,114 L 352,112 L 356,120 L 352,128
                L 344,130 L 338,122 Z
              "/>

              {/* ── Mizoram ── */}
              <path className="st" d="
                M 338,132 L 346,130 L 350,138 L 346,146
                L 338,148 L 334,140 Z
              "/>

              {/* ── Tripura ── */}
              <path className="st" d="
                M 316,126 L 324,124 L 328,132 L 324,140
                L 316,140 L 312,132 Z
              "/>

              {/* ── Meghalaya ── */}
              <path className="st" d="
                M 296,106 L 310,104 L 320,108 L 322,116
                L 312,122 L 298,120 L 292,114 Z
              "/>

              {/* ── Madhya Pradesh ── */}
              <path className="st" d="
                M 112,148 L 116,132 L 112,118 L 120,112
                L 134,108 L 148,106 L 164,104
                L 180,108 L 182,118 L 190,126
                L 200,132 L 212,134 L 220,142
                L 218,156 L 210,166 L 198,172
                L 184,174 L 170,172 L 156,168
                L 142,162 L 130,154 L 120,148 Z
              "/>

              {/* ── Chhattisgarh ── */}
              <path className="st" d="
                M 220,132 L 234,122 L 244,128 L 252,136
                L 252,150 L 244,160 L 232,164
                L 220,160 L 214,150 L 216,140 Z
              "/>

              {/* ── Odisha ── */}
              <path className="st" d="
                M 252,136 L 264,132 L 274,134 L 278,144
                L 274,156 L 264,162 L 252,162
                L 244,156 L 244,146 Z
              "/>

              {/* ── Gujarat ── */}
              <path className="st" d="
                M 50,144 L 56,156 L 66,166 L 64,178
                L 56,186 L 44,190 L 34,188 L 26,180
                L 24,168 L 28,156 L 36,148 L 46,144 Z
                M 28,196 L 36,194 L 40,202 L 36,208
                L 28,208 L 24,202 Z
              "/>

              {/* ── Maharashtra ── */}
              <path className="st" d="
                M 112,172 L 120,166 L 130,168 L 142,172
                L 156,174 L 170,178 L 184,180
                L 198,178 L 210,172 L 218,178
                L 216,192 L 208,202 L 196,208
                L 182,212 L 166,212 L 150,208
                L 136,200 L 122,192 L 112,182 Z
              "/>

              {/* ── Telangana ── */}
              <path className="st" d="
                M 218,178 L 232,174 L 244,174 L 252,180
                L 250,194 L 242,204 L 230,208
                L 218,204 L 212,194 L 214,184 Z
              "/>

              {/* ── Andhra Pradesh ── */}
              <path className="st" d="
                M 252,166 L 264,162 L 276,164 L 282,172
                L 278,184 L 268,192 L 256,196
                L 244,194 L 240,184 L 244,174 L 252,168 Z
                M 238,206 L 248,204 L 252,212 L 246,220
                L 238,220 L 234,212 Z
              "/>

              {/* ── Karnataka ── */}
              <path className="st" d="
                M 154,216 L 166,214 L 180,216 L 194,216
                L 208,212 L 218,216 L 226,224
                L 222,236 L 212,244 L 198,248
                L 184,250 L 170,246 L 158,238
                L 150,226 Z
              "/>

              {/* ── Goa (tiny) ── */}
              <path className="st" d="
                M 150,226 L 156,224 L 158,230 L 154,236
                L 148,234 Z
              "/>

              {/* ── Kerala ── */}
              <path className="st" d="
                M 170,250 L 184,252 L 186,264 L 180,276
                L 170,284 L 160,290 L 152,284
                L 150,272 L 154,260 Z
              "/>

              {/* ── Tamil Nadu ── */}
              <path className="st" d="
                M 184,250 L 198,250 L 212,248 L 224,244
                L 234,250 L 232,264 L 224,274
                L 212,280 L 198,284 L 186,282
                L 176,276 L 180,264 Z
                M 188,286 L 196,284 L 198,292
                L 192,296 L 186,292 Z
              "/>

              {/* ── Lakshadweep dots ── */}
              <circle className="st isl" cx="20" cy="272" r="4" />
              <circle className="st isl" cx="16" cy="284" r="3" />
              <circle className="st isl" cx="18" cy="294" r="3" />

              {/* ── Andaman & Nicobar ── */}
              <ellipse className="st isl" cx="348" cy="290" rx="5" ry="9" />
              <ellipse className="st isl" cx="350" cy="308" rx="4" ry="7" />
              <ellipse className="st isl" cx="352" cy="324" rx="4" ry="6" />
              <ellipse className="st isl" cx="350" cy="338" rx="3" ry="5" />

              {/* ── Sri Lanka ── */}
              <ellipse className="st isl sl" cx="210" cy="302" rx="10" ry="14" />

              {/* ══ STATE LABELS ══ */}
              <text className="slbl" x="146" y="32" textAnchor="middle">JAMMU &amp; KASHMIR</text>
              <text className="slbl" x="170" y="64" textAnchor="middle">H.P.</text>
              <text className="slbl" x="168" y="92" textAnchor="middle">HARYANA</text>
              <text className="slbl" x="200" y="68" textAnchor="middle">UTTARAKHAND</text>
              <text className="slbl" x="60" y="130" textAnchor="middle">RAJASTHAN</text>
              <text className="slbl" x="210" y="112" textAnchor="middle">UTTAR PRADESH</text>
              <text className="slbl" x="256" y="102" textAnchor="middle">BIHAR</text>
              <text className="slbl" x="256" y="134" textAnchor="middle">JHARKHAND</text>
              <text className="slbl" x="284" y="108" textAnchor="middle">W.B.</text>
              <text className="slbl" x="316" y="94" textAnchor="middle">ASSAM</text>
              <text className="slbl" x="334" y="74" textAnchor="middle">ARUNACHAL</text>
              <text className="slbl" x="170" y="144" textAnchor="middle">MADHYA PRADESH</text>
              <text className="slbl" x="236" y="148" textAnchor="middle">C.G.</text>
              <text className="slbl" x="262" y="150" textAnchor="middle">ODISHA</text>
              <text className="slbl" x="46" y="170" textAnchor="middle">GUJARAT</text>
              <text className="slbl" x="164" y="194" textAnchor="middle">MAHARASHTRA</text>
              <text className="slbl" x="232" y="194" textAnchor="middle">TELANGANA</text>
              <text className="slbl" x="264" y="180" textAnchor="middle">ANDHRA</text>
              <text className="slbl" x="188" y="232" textAnchor="middle">KARNATAKA</text>
              <text className="slbl" x="166" y="270" textAnchor="middle">KERALA</text>
              <text className="slbl" x="210" y="266" textAnchor="middle">TAMIL NADU</text>

              {/* ══ PUNJAB LABEL (red, larger) ══ */}
              <text className="plbl" x="122" y="58" textAnchor="middle">PUNJAB</text>

              {/* ══ PULSE RINGS on Punjab centre ══ */}
              <circle cx="128" cy="70" r="5" className="pulse pulse--1" />
              <circle cx="128" cy="70" r="5" className="pulse pulse--2" />
              <circle cx="128" cy="70" r="5" className="pulse pulse--3" />

              {/* ══ LOCATION DOT ══ */}
              <circle cx="128" cy="70" r="8"   className="dot-halo" />
              <circle cx="128" cy="70" r="5"   className="dot-red"  />
              <circle cx="128" cy="70" r="2.5" className="dot-white" />

              {/* ══ LEADER LINE + LABEL ══ */}
              <line x1="136" y1="64" x2="176" y2="44" className="leader" />
              <circle cx="176" cy="44" r="2.5" className="leader-dot" />
              <text x="180" y="40" className="lbl-main">PUNJAB</text>
              <text x="180" y="52" className="lbl-city">Ludhiana, India</text>
            </svg>
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