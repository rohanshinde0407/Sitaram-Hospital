"use client";

import { Phone, ArrowRight, Clock, MapPin, Zap } from "lucide-react";
import Image from "next/image";

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

      {/* ── Main content ── */}
      <div className="relative flex-1 max-w-7xl mx-auto px-3 md:px-10 py-5 md:py-10 w-full flex flex-col justify-center">
        <div className="w-[57vw] sm:w-[58vw] md:max-w-5xl md:w-auto space-y-1.5 md:space-y-5">

          {/* Eyebrow */}
          <div className="anim-up inline-flex items-center gap-1.5">
            <Zap size={9} color="#DFF1F1" fill="#DFF1F1" className="md:hidden" />
            <Zap size={12} color="#DFF1F1" fill="#DFF1F1" className="hidden md:block" />
            <span className="font-black uppercase tracking-widest text-[7px] md:text-[11px]" style={{ color: "#DFF1F1" }}>
              One-Stop Advanced Laser Proctology Centre · Sitaram Hospital
            </span>
          </div>

          {/* ═══ BRAND CARD ═══ */}
          <div
            className="anim-up d1 relative p-3 md:p-10 overflow-hidden rounded-[1rem] md:rounded-l-[1.5rem] md:rounded-r-none md:-mr-10"
            style={{
              background: "linear-gradient(105deg, rgba(223,241,241,0.11) 0%, rgba(195,228,228,0.07) 55%, rgba(13,27,42,0.0) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "none",
              boxShadow: "-4px 0 32px rgba(0,0,0,0.18)",
            }}
          >
            {/* Left red accent bar */}
            <div className="absolute left-0 top-4 bottom-4 md:top-8 md:bottom-8 w-[2px] md:w-[3px] rounded-r-full"
              style={{ background: "linear-gradient(to bottom, transparent, #C62828 30%, #C62828 70%, transparent)" }} />

            {/* Dot grid */}
            <div className="absolute left-8 md:left-14 top-3 md:top-5 opacity-10 pointer-events-none grid grid-cols-4 gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full" style={{ background: "#DFF1F1" }} />
              ))}
            </div>

            <div className="pl-2 md:pl-4 relative z-10">
              {/* ZEN */}
              <div className="block w-fit mb-1 md:mb-2">
                <span
                  className="font-black leading-none select-none block"
                  style={{
                    fontSize: "clamp(1.9rem, 11vw, 8rem)",
                    background: "linear-gradient(135deg, #E53935 0%, #C62828 35%, #FF5252 65%, #E53935 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 0 28px rgba(229,57,53,0.45))",
                    letterSpacing: "0.08em",
                  }}
                >
                  ZEN
                </span>
                <div className="h-[2px] md:h-[3px] rounded-full"
                  style={{ background: "linear-gradient(90deg, #C62828, #2E7D32, #1565C0)" }} />
              </div>

              {/* Laser Procto Care */}
              <div className="inline-block mb-1.5 md:mb-3">
                <div className="font-black uppercase tracking-[.20em] leading-none whitespace-nowrap"
                  style={{ fontSize: "clamp(0.5rem, 3.2vw, 1.65rem)", color: "#DFF1F1" }}>
                  Laser Procto Care
                </div>
                <div className="h-[2px] md:h-[3px] rounded-full mt-1"
                  style={{ background: "linear-gradient(90deg, #C62828, #2E7D32, #1565C0)" }} />
              </div>

              {/* Tagline */}
              <p style={{
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: "clamp(0.55rem, 2.5vw, 1.35rem)",
                fontStyle: "italic",
                fontWeight: 700,
                color: "#FFCDD2",
                textShadow: "0 2px 10px rgba(198,40,40,0.40), 0 1px 3px rgba(0,0,0,0.25)",
                lineHeight: 1.4,
                margin: 0,
              }}>
                &ldquo;Number one clinic for your number two problems!&rdquo;
              </p>
            </div>

            {/* Anatomy illustration — all screens */}
            <div className="absolute top-0 left-[55%] md:left-1/2 -translate-x-1/4 md:-translate-x-1/3 pointer-events-none select-none z-0">
              <Image src="/img/img1/Buttiuck.png" alt="" width={400} height={270}
                className="object-contain opacity-80 w-24 sm:w-32 md:w-[400px]" priority />
            </div>

            {/* Right gradient — desktop only */}
            <div className="absolute right-0 top-0 h-full w-72 pointer-events-none hidden md:block"
              style={{ background: "linear-gradient(to right, transparent 0%, rgba(13,27,42,0.6) 50%, #0D1B2A 100%)" }} />
          </div>

          {/* Description */}
          <p className="anim-up d2 leading-relaxed max-w-xl text-[9px] md:text-base" style={{ color: "#9CA3AF" }}>
            Advanced Comprehensive Treatment for{" "}
            <strong style={{ color: "#E5E7EB" }}>Piles, Fissure &amp; Fistula.</strong>{" "}
            Painless, scarless, day-care procedures with modern laser technology.
          </p>

          {/* Condition pills */}
          <div className="anim-up d2 flex flex-wrap gap-1 md:gap-2">
            {pills.map((p) => (
              <span key={p.label}
                className="font-bold rounded-full border"
                style={{
                  color: p.color, background: p.bg, borderColor: p.border,
                  fontSize: "clamp(0.45rem, 1.8vw, 0.75rem)",
                  padding: "2px 8px",
                }}>
                {p.label}
              </span>
            ))}
          </div>

          {/* Check list */}
          <ul className="anim-up d3 flex flex-wrap gap-x-3 md:gap-x-5 gap-y-1">
            {checks.map((c) => (
              <li key={c.text} className="flex items-center gap-1">
                <span className="text-[9px] md:text-sm">{c.icon}</span>
                <span className="font-medium text-[7px] md:text-xs" style={{ color: "#D1D5DB" }}>{c.text}</span>
              </li>
            ))}
          </ul>

          {/* CTA buttons */}
          <div className="anim-up d4 flex flex-wrap gap-1.5 md:gap-3">
            <a href="tel:9421279065"
              className="inline-flex items-center gap-1 font-bold rounded-lg bg-[#C62828] text-white"
              style={{ fontSize: "clamp(0.5rem, 2.2vw, 0.875rem)", padding: "4px 10px" }}>
              <Phone size={9} className="md:hidden" />
              <Phone size={14} className="hidden md:block" />
              Call Now
            </a>
            <a href="https://wa.me/919421279065?text=Hello%2C%20I%20would%20like%20to%20consult%20at%20Sitaram%20Hospital."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold rounded-lg bg-[#2E7D32] text-white"
              style={{ fontSize: "clamp(0.5rem, 2.2vw, 0.875rem)", padding: "4px 10px" }}>
              <ArrowRight size={9} className="md:hidden" />
              <ArrowRight size={14} className="hidden md:block" />
              WhatsApp Us
            </a>
          </div>

          {/* Address */}
          <div className="anim-up d5 inline-flex items-start gap-2 rounded-xl px-2 py-2 md:px-5 md:py-4"
            style={{
              background: "linear-gradient(135deg, rgba(223,241,241,0.10) 0%, rgba(223,241,241,0.06) 100%)",
              border: "1.5px solid rgba(223,241,241,0.22)",
            }}>
            <div className="mt-0.5 w-5 h-5 md:w-8 md:h-8 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(76,175,80,0.18)", border: "1px solid rgba(76,175,80,0.30)" }}>
              <MapPin size={10} color="#4CAF50" className="md:hidden" />
              <MapPin size={16} color="#4CAF50" className="hidden md:block" />
            </div>
            <div>
              <div className="font-black uppercase tracking-widest mb-0.5 text-[7px] md:text-[10px]" style={{ color: "#4CAF50" }}>
                Our Location
              </div>
              <div className="font-bold leading-snug text-[8px] md:text-sm" style={{ color: "#F3F4F6" }}>
                Bhangya Maruti Chowk, Lane No. 6
              </div>
              <div className="font-semibold text-[8px] md:text-sm" style={{ color: "#DFF1F1" }}>
                Dhule – 424001, Maharashtra
              </div>
            </div>
          </div>

          {/* OPD hours */}
          <div className="anim-up d5 flex items-center gap-1.5">
            <Clock size={10} color="#EF5350" className="md:hidden" />
            <Clock size={13} color="#EF5350" className="hidden md:block" />
            <span className="font-semibold text-[7px] md:text-xs" style={{ color: "#9CA3AF" }}>
              OPD: Mon–Sat &nbsp;·&nbsp; 10AM–2PM &amp; 6PM–9PM
            </span>
          </div>

        </div>
      </div>

      {/* ── Right-side illustration ── */}
      <div className="absolute right-0 md:right-10 top-1/2 -translate-y-1/2 pointer-events-none select-none">
        <Image
          src="/img/img1/magnific_1shNlcwr4r.png"
          alt=""
          width={620}
          height={740}
          className="object-contain drop-shadow-2xl w-[43vw] sm:w-[42vw] md:w-[480px] lg:w-[620px]"
          priority
        />
      </div>

      {/* ── Bottom quick-access bar ── */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(0,0,0,0.25)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { icon: "📞", label: "9421279065",  sub: "Call Us Now",            href: "tel:9421279065" },
              { icon: "🩺", label: "Our Doctors", sub: "2 Expert Proctologists", href: "#doctors" },
              { icon: "🔬", label: "Treatments",  sub: "8 Advanced Procedures",  href: "#treatments" },
              { icon: "📍", label: "Find Us",     sub: "Dhule, Maharashtra",     href: "#contact" },
            ].map((item, idx) => (
              <a key={item.label} href={item.href}
                className="group flex items-center gap-2 md:gap-3 px-2 md:px-4 py-2 md:py-3 transition-colors"
                style={{ borderRight: idx < 3 ? "1px solid rgba(255,255,255,0.07)" : "none" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(198,40,40,0.08)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <span className="text-sm md:text-lg flex-shrink-0">{item.icon}</span>
                <div>
                  <div className="text-[9px] md:text-sm font-bold leading-tight" style={{ color: "#E5E7EB" }}>{item.label}</div>
                  <div className="text-[8px] md:text-[10px]" style={{ color: "#6B7280" }}>{item.sub}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
