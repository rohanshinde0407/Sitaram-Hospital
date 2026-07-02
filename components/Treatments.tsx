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
];

const extras = [
  {
    name: "FILAC – Fistula Laser Closure",
    desc: "Sutureless, sphincter-preserving fistula treatment using laser energy to seal the fistula tract from within. Preserves continence and ensures fast recovery.",
    uses: ["Fistula in Ano"],
    color: "#C62828",
    bg: "#FFF5F5",
    border: "#FECACA",
  },
  {
    name: "Sclerotherapy",
    desc: "Injection of a sclerosing agent directly into haemorrhoidal tissue to shrink and obliterate them. Safe, effective outpatient procedure for Grade I–II piles.",
    uses: ["Grade I–II Piles"],
    color: "#047857",
    bg: "#ECFDF5",
    border: "#6EE7B7",
  },
];

export default function Treatments() {
  return (
    <section id="treatments" className="py-16 md:py-24 bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-eyebrow justify-center">Our Technology</div>
          <div className="rule rule-center" />
          <h2 className="section-title mb-4">State-of-the-Art Treatment Equipment</h2>
          <p className="section-lead mx-auto text-center">
            Our facility is equipped with the latest laser and diagnostic technology —
            enabling Day Care Procedures so patients return home within hours.
          </p>
        </div>

        {/* Equipment grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {treatments.map((t) => (
            <div
              key={t.name}
              className="group rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: t.border }}
            >
              {/* Image space — no icon */}
              <div
                className="relative h-44 flex flex-col items-center justify-center overflow-hidden"
                style={{ background: t.bg }}
              >
                {/* Decorative rings */}
                <div
                  className="absolute w-36 h-36 rounded-full border-2 opacity-10 group-hover:opacity-25 transition-opacity duration-300"
                  style={{ borderColor: t.color }}
                />
                <div
                  className="absolute w-20 h-20 rounded-full border opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ borderColor: t.color }}
                />

                {/* Treatment short name — centred */}
                <div
                  className="relative z-10 font-black text-xl tracking-wide"
                  style={{ color: t.color }}
                >
                  {t.short}
                </div>
                <div className="relative z-10 text-[10px] text-[#9CA3AF] uppercase tracking-widest mt-1">
                  Procedure
                </div>

                {/* Uses badge — top right */}
                <div
                  className="absolute top-3 right-3 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
                  style={{ background: t.color }}
                >
                  {t.uses[0]}
                </div>

                {/* Bottom accent bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: t.color }}
                />
              </div>

              {/* Text body */}
              <div className="p-5">
                <h3 className="font-bold text-[#111827] text-sm leading-snug mb-2">{t.name}</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed mb-3">{t.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {t.uses.map((u) => (
                    <span
                      key={u}
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{ color: t.color, background: t.bg, border: `1px solid ${t.border}` }}
                    >
                      {u}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FILAC & Sclerotherapy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
          {extras.map((t) => (
            <div
              key={t.name}
              className="group rounded-2xl border bg-white shadow-sm hover:shadow-xl p-6 flex gap-5 items-start transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: t.border }}
            >
              {/* Coloured left accent block */}
              <div
                className="w-1.5 self-stretch rounded-full flex-shrink-0"
                style={{ background: t.color }}
              />
              <div>
                <h3 className="font-bold text-[#111827] text-sm mb-1.5">{t.name}</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed mb-2">{t.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {t.uses.map((u) => (
                    <span
                      key={u}
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{ color: t.color, background: t.bg, border: `1px solid ${t.border}` }}
                    >
                      {u}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
