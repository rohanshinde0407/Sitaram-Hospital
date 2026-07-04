"use client";

import { useState } from "react";

const treatments = [
  {
    name: "Advanced Laser Procedures",
    short: "Laser",
    desc: "High-precision laser energy targets and destroys diseased tissue with zero damage to surrounding healthy structures.",
    uses: ["Piles", "Fissure", "Fistula"],
    color: "#C62828",
    bg: "#FFF5F5",
    border: "#FECACA",
  },
  {
    name: "DGHAL-RAR",
    short: "Doppler",
    desc: "Doppler-guided haemorrhoidal artery ligation with recto-anal repair. Minimally invasive, no excision.",
    uses: ["Grade III–IV Piles"],
    color: "#1565C0",
    bg: "#EFF6FF",
    border: "#BFDBFE",
  },
  {
    name: "Radio Frequency Ablation",
    short: "RFA",
    desc: "Dr.Oppel RF Electrosurgical device shrinks haemorrhoidal tissue using targeted radiofrequency energy.",
    uses: ["Piles", "Haemorrhoids"],
    color: "#E65100",
    bg: "#FFF8F4",
    border: "#FED7AA",
  },
  {
    name: "Ano-Recto Videoscopy",
    short: "Videoscopy",
    desc: "Full HD video-guided examination of the anal canal for precise diagnosis and treatment planning.",
    uses: ["Diagnosis", "All conditions"],
    color: "#0E7490",
    bg: "#ECFEFF",
    border: "#A5F3FC",
  },
  {
    name: "VAAFT",
    short: "VAAFT",
    desc: "Video Assisted Anal Fistula Treatment — scope-guided fistula cleaning and closure without cutting sphincter.",
    uses: ["Complex Fistula"],
    color: "#2E7D32",
    bg: "#F0FDF4",
    border: "#BBF7D0",
  },
  {
    name: "Anal Sphincterometry",
    short: "Sphincto",
    desc: "Measures anal sphincter pressure to diagnose anal stenosis, guide treatment decisions and monitor recovery.",
    uses: ["Anal Stenosis", "Fissure"],
    color: "#7C3AED",
    bg: "#F5F3FF",
    border: "#DDD6FE",
  },
  {
    name: "Micro Rectocam WiFi",
    short: "Rectocam",
    desc: "Wireless HD miniature camera system for real-time rectal visualization and video-assisted procedures.",
    uses: ["Diagnosis", "VAAFT"],
    color: "#B45309",
    bg: "#FFFBEB",
    border: "#FDE68A",
  },
  {
    name: "Rectocam Full HD",
    short: "Full HD",
    desc: "High-definition rectoscopy for crystal-clear imaging of the rectum and anal canal during procedures.",
    uses: ["Videoscopy", "Assessment"],
    color: "#047857",
    bg: "#ECFDF5",
    border: "#6EE7B7",
  },
  {
    name: "FILAC – Fistula Laser Closure",
    short: "FILAC",
    desc: "Sutureless, sphincter-preserving fistula treatment using laser energy to seal the fistula tract from within. Preserves continence and ensures fast recovery.",
    uses: ["Fistula in Ano"],
    color: "#C62828",
    bg: "#FFF5F5",
    border: "#FECACA",
  },
  {
    name: "Sclerotherapy",
    short: "Sclero",
    desc: "Injection of a sclerosing agent directly into haemorrhoidal tissue to shrink and obliterate them. Safe, effective outpatient procedure for Grade I–II piles.",
    uses: ["Grade I–II Piles"],
    color: "#047857",
    bg: "#ECFDF5",
    border: "#6EE7B7",
  },
];

export default function Treatments() {
  const [active, setActive] = useState(0);
  const t = treatments[active];

  return (
    <section id="treatments" className="py-16 md:py-24 bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div id="equipment" className="text-center mb-10">
          <div className="section-eyebrow justify-center">Our Technology</div>
          <div className="rule rule-center" />
          <h2 className="section-title mb-4">State-of-the-Art Treatment Equipment</h2>
          <p className="section-lead mx-auto text-center">
            Our facility is equipped with the latest laser and diagnostic technology —
            enabling Day Care Procedures so patients return home within hours.
          </p>
        </div>

        {/* ── Pill tabs — scroll on mobile, wrap on md+ ── */}
        <div className="mb-8">
          {/* Mobile: horizontal scroll */}
          <div className="flex md:hidden gap-2 overflow-x-auto pb-2 px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {treatments.map((item, i) => (
              <button
                key={item.name}
                onClick={() => setActive(i)}
                className="flex-shrink-0 py-2 px-4 rounded-full text-sm font-semibold border transition-all duration-200"
                style={
                  active === i
                    ? { color: item.color, background: item.bg, borderColor: item.color,
                        boxShadow: `0 0 0 3px ${item.color}18` }
                    : { color: "#6B7280", background: "#FFFFFF", borderColor: "#E5E7EB" }
                }
              >
                {item.name}
              </button>
            ))}
          </div>
          {/* Desktop: wrap centered */}
          <div className="hidden md:flex flex-wrap justify-center gap-2">
            {treatments.map((item, i) => (
              <button
                key={item.name}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className="py-2 px-4 rounded-full text-sm font-semibold border transition-all duration-200"
                style={
                  active === i
                    ? { color: item.color, background: item.bg, borderColor: item.color,
                        boxShadow: `0 0 0 3px ${item.color}18, 0 2px 8px rgba(0,0,0,0.08)`,
                        transform: "translateY(-1px)" }
                    : { color: "#6B7280", background: "#FFFFFF", borderColor: "#E5E7EB" }
                }
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* ── Detail panel ── */}
        <div
          className="rounded-3xl border-2 bg-white shadow-sm overflow-hidden transition-all duration-300"
          style={{ borderColor: t.border }}
        >
          {/* Top colour stripe — mobile only */}
          <div className="h-1.5 md:hidden w-full" style={{ background: t.color }} />

          <div className="grid md:grid-cols-[6px_1fr] items-stretch">

            {/* Left colour stripe — desktop only */}
            <div className="hidden md:block" style={{ background: t.color }} />

            <div className="p-5 md:p-10">

              {/* Badge + title + desc */}
              <div className="mb-4">
                <div
                  className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                  style={{ color: t.color, background: t.bg, border: `1px solid ${t.border}` }}
                >
                  {t.short}
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-[#111827] mb-2 leading-snug">
                  {t.name}
                </h3>
                <p className="text-[#374151] text-sm md:text-base leading-relaxed">
                  {t.desc}
                </p>
              </div>

              {/* Treats — full width below on mobile, inline on md */}
              <div className="border-t border-gray-100 pt-4">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#9CA3AF] mb-2">
                  Treats
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.uses.map((u) => (
                    <span
                      key={u}
                      className="text-xs font-bold px-3 py-1.5 rounded-full border"
                      style={{ color: t.color, background: t.bg, borderColor: t.border }}
                    >
                      {u}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom hint */}
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
                <span className="text-[11px] text-[#9CA3AF]">
                  <span className="md:hidden">Tap</span>
                  <span className="hidden md:inline">Hover or tap</span>
                  {" "}any pill above to explore our equipment
                </span>
                <span
                  className="ml-auto text-xs font-bold px-3 py-1 rounded-full"
                  style={{ color: t.color, background: t.bg }}
                >
                  {active + 1} / {treatments.length}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
