"use client";

import { Phone, ArrowRight, Clock, MapPin, Zap } from "lucide-react";

const pills = [
  { label: "Piles",           color: "#FF8A80", bg: "rgba(255,138,128,0.12)", border: "rgba(255,138,128,0.30)" },
  { label: "Fissure",         color: "#FFAB76", bg: "rgba(255,171,118,0.12)", border: "rgba(255,171,118,0.30)" },
  { label: "Fistula",         color: "#69F0AE", bg: "rgba(105,240,174,0.10)", border: "rgba(105,240,174,0.28)" },
  { label: "Pilonidal Sinus", color: "#82B1FF", bg: "rgba(130,177,255,0.10)", border: "rgba(130,177,255,0.28)" },
];

const checks = [
  { text: "No Cuts · No Stitches",    icon: "✂️" },
  { text: "Day Care – Home Same Day", icon: "🏠" },
  { text: "Painless & Scarless",      icon: "😌" },
  { text: "3–5 Day Recovery",         icon: "⚡" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden flex flex-col" style={{ background: "#0D1B2A" }}>

      {/* ── Main content — LEFT aligned ── */}
      <div className="relative flex-1 max-w-7xl mx-auto px-4 md:px-10 py-10 w-full flex flex-col justify-center">
        <div className="max-w-3xl space-y-5">

          {/* Eyebrow */}
          <div className="anim-up inline-flex items-center gap-2">
            <Zap size={12} color="#DFF1F1" fill="#DFF1F1" />
            <span className="text-[11px] font-black uppercase tracking-widest" style={{ color: "#DFF1F1" }}>
              One-Stop Advanced Laser Proctology Centre
            </span>
          </div>

          {/* ═══ BRAND CARD — title only ═══ */}
          <div
            className="anim-up d1 relative rounded-3xl p-7 md:p-10 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(223,241,241,0.13) 0%, rgba(195,228,228,0.09) 45%, rgba(223,241,241,0.12) 100%)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1.5px solid rgba(223,241,241,0.20)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(223,241,241,0.12)",
            }}
          >
            {/* Top shimmer */}
            <div className="absolute inset-x-0 top-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(223,241,241,0.35), transparent)" }} />

            {/* Left red accent bar */}
            <div className="absolute left-0 top-8 bottom-8 w-[3px] rounded-r-full"
              style={{ background: "linear-gradient(to bottom, transparent, #C62828 30%, #C62828 70%, transparent)" }} />

            {/* Dot grid */}
            <div className="absolute right-5 top-5 opacity-15 pointer-events-none grid grid-cols-4 gap-1.5">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: "#DFF1F1" }} />
              ))}
            </div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pl-4">
              {/* ZEN */}
              <div>
                <span
                  className="font-black leading-none tracking-tighter select-none block"
                  style={{
                    fontSize: "clamp(4.5rem,11vw,8rem)",
                    background: "linear-gradient(135deg, #E53935 0%, #C62828 35%, #FF5252 65%, #E53935 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 0 28px rgba(229,57,53,0.45))",
                  }}
                >
                  ZEN
                </span>
                <div className="h-[3px] w-28 rounded-full mb-2"
                  style={{ background: "linear-gradient(90deg, #C62828, #2E7D32, #1565C0)" }} />
                <div className="font-black uppercase tracking-[.20em] leading-tight"
                  style={{ fontSize: "clamp(1rem,2.6vw,1.65rem)", color: "#DFF1F1" }}>
                  Laser Procto Care
                </div>
              </div>

              {/* Tagline */}
              <div className="rounded-xl px-4 py-3"
                style={{ background: "rgba(198,40,40,0.14)", border: "1px solid rgba(198,40,40,0.28)", maxWidth: 290 }}>
                <p className="font-bold italic text-sm leading-snug" style={{ color: "#FFCDD2" }}>
                  &ldquo;Number one clinic for your number two problems!&rdquo;
                </p>
              </div>
            </div>

            {/* Corner badge */}
            <div className="absolute bottom-0 right-0 rounded-tl-2xl rounded-br-3xl px-3 py-1.5"
              style={{ background: "rgba(0,137,123,0.18)", border: "1px solid rgba(0,137,123,0.22)" }}>
              <span className="text-[9px] font-black uppercase tracking-widest" style={{ color: "#80CBC4" }}>
                Advanced Laser Centre · Sitaram Hospital
              </span>
            </div>
          </div>
          {/* ════════════════════════ */}

          {/* Description — plain */}
          <p className="anim-up d2 text-sm md:text-base leading-relaxed max-w-xl" style={{ color: "#9CA3AF" }}>
            Advanced Comprehensive Treatment for{" "}
            <strong style={{ color: "#E5E7EB" }}>Piles, Fissure &amp; Fistula.</strong>{" "}
            Painless, scarless, day-care procedures with modern laser technology.
          </p>

          {/* Condition pills — plain */}
          <div className="anim-up d2 flex flex-wrap gap-2">
            {pills.map((p) => (
              <span key={p.label} className="text-xs font-bold px-3 py-1 rounded-full border"
                style={{ color: p.color, background: p.bg, borderColor: p.border }}>
                {p.label}
              </span>
            ))}
          </div>

          {/* Check list — plain inline */}
          <ul className="anim-up d3 flex flex-wrap gap-x-5 gap-y-1.5">
            {checks.map((c) => (
              <li key={c.text} className="flex items-center gap-1.5">
                <span className="text-sm">{c.icon}</span>
                <span className="text-xs font-medium" style={{ color: "#D1D5DB" }}>{c.text}</span>
              </li>
            ))}
          </ul>

          {/* CTA buttons */}
          <div className="anim-up d4 flex flex-wrap gap-3">
            <a href="tel:9421279065" className="btn btn-red"><Phone size={14} /> Call Now</a>
            <a href="https://wa.me/919421279065?text=Hello%2C%20I%20would%20like%20to%20consult%20at%20Sitaram%20Hospital." target="_blank" rel="noopener noreferrer" className="btn btn-green">
              <ArrowRight size={14} /> WhatsApp Us
            </a>
          </div>

          {/* Address — highlighted */}
          <div className="anim-up d5 inline-flex items-start gap-3 rounded-2xl px-5 py-4"
            style={{
              background: "linear-gradient(135deg, rgba(223,241,241,0.10) 0%, rgba(223,241,241,0.06) 100%)",
              border: "1.5px solid rgba(223,241,241,0.22)",
            }}>
            <div className="mt-0.5 w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(76,175,80,0.18)", border: "1px solid rgba(76,175,80,0.30)" }}>
              <MapPin size={16} color="#4CAF50" />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: "#4CAF50" }}>
                Our Location
              </div>
              <div className="font-bold text-sm leading-snug" style={{ color: "#F3F4F6" }}>
                Bhangya Maruti Chowk, Lane No. 6
              </div>
              <div className="font-semibold text-sm" style={{ color: "#DFF1F1" }}>
                Dhule – 424001, Maharashtra
              </div>
            </div>
          </div>

          {/* OPD hours — inline below address */}
          <div className="anim-up d5 flex items-center gap-2 mt-1">
            <Clock size={13} color="#EF5350" />
            <span className="text-xs font-semibold" style={{ color: "#9CA3AF" }}>
              OPD: Mon–Sat &nbsp;·&nbsp; 10AM–2PM &amp; 6PM–9PM
            </span>
          </div>

        </div>
      </div>

      {/* ── Bottom quick-access bar ── */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(0,0,0,0.25)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { icon: "📞", label: "9421279065",        sub: "Call Us Now",             href: "tel:9421279065" },
              { icon: "🩺", label: "Our Doctors",       sub: "2 Expert Proctologists",  href: "#doctors" },
              { icon: "🔬", label: "Treatments",        sub: "8 Advanced Procedures",   href: "#treatments" },
              { icon: "📍", label: "Find Us",           sub: "Dhule, Maharashtra",      href: "#contact" },
            ].map((item, idx) => (
              <a key={item.label} href={item.href}
                className="group flex items-center gap-3 px-4 py-3 transition-colors"
                style={{ borderRight: idx < 3 ? "1px solid rgba(255,255,255,0.07)" : "none" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(198,40,40,0.08)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <span className="text-lg flex-shrink-0">{item.icon}</span>
                <div>
                  <div className="text-xs md:text-sm font-bold leading-tight" style={{ color: "#E5E7EB" }}>{item.label}</div>
                  <div className="text-[10px]" style={{ color: "#6B7280" }}>{item.sub}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
