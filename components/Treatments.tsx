
const treatments = [
  {
    img: "/img/laseev-machine.jpg",
    name: "Advanced Laser Procedures",
    short: "Laser",
    desc: "High-precision laser energy targets and destroys diseased tissue with zero damage to surrounding healthy structures.",
    uses: ["Piles", "Fissure", "Fistula"],
    color: "#C62828",
    bg: "#FFF5F5",
  },
  {
    img: "/img/hal-rar-doppler.jpg",
    name: "DGHAL-RAR",
    short: "Doppler",
    desc: "Doppler-guided haemorrhoidal artery ligation with recto-anal repair. Minimally invasive, no excision.",
    uses: ["Grade III–IV Piles"],
    color: "#1565C0",
    bg: "#EFF6FF",
  },
  {
    img: "/img/rf-generator.jpg",
    name: "Radio Frequency Ablation",
    short: "RFA",
    desc: "Dr.Oppel RF Electrosurgical device shrinks haemorrhoidal tissue using targeted radiofrequency energy.",
    uses: ["Piles", "Haemorrhoids"],
    color: "#E65100",
    bg: "#FFF8F4",
  },
  {
    img: "/img/video-rectoscope.jpg",
    name: "Ano-Recto Videoscopy",
    short: "Videoscopy",
    desc: "Full HD video-guided examination of the anal canal for precise diagnosis and treatment planning.",
    uses: ["Diagnosis", "All conditions"],
    color: "#0E7490",
    bg: "#ECFEFF",
  },
  {
    img: "/img/vaaft-scope.jpg",
    name: "VAAFT",
    short: "VAAFT",
    desc: "Video Assisted Anal Fistula Treatment — scope-guided fistula cleaning and closure without cutting sphincter muscle.",
    uses: ["Complex Fistula"],
    color: "#2E7D32",
    bg: "#F0FDF4",
  },
  {
    img: "/img/sphinctometer.jpg",
    name: "Anal Sphincterometry",
    short: "Sphincto",
    desc: "Measures anal sphincter pressure to diagnose anal stenosis, guide treatment decisions and monitor recovery.",
    uses: ["Anal Stenosis", "Fissure"],
    color: "#7C3AED",
    bg: "#F5F3FF",
  },
  {
    img: "/img/micro-rectocam.jpg",
    name: "Micro Rectocam WiFi",
    short: "Rectocam",
    desc: "Wireless HD miniature camera system for real-time rectal visualization and video-assisted procedures.",
    uses: ["Diagnosis", "VAAFT"],
    color: "#B45309",
    bg: "#FFFBEB",
  },
  {
    img: "/img/rectocam-hd.jpg",
    name: "Rectocam Full HD",
    short: "Full HD",
    desc: "High-definition rectoscopy for crystal-clear imaging of the rectum and anal canal during procedures.",
    uses: ["Videoscopy", "Assessment"],
    color: "#047857",
    bg: "#ECFDF5",
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
              className="card group overflow-hidden"
            >
              {/* Equipment photo placeholder */}
              <div className="relative h-48 overflow-hidden flex flex-col items-center justify-center gap-2" style={{ background: t.bg }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${t.color}18` }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={t.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                  </svg>
                </div>
                <div className="text-[10px] font-semibold" style={{ color: `${t.color}99` }}>Image coming soon</div>
                {/* Short name badge */}
                <div
                  className="absolute top-3 right-3 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
                  style={{ background: t.color }}
                >
                  {t.short}
                </div>
              </div>

              {/* Text */}
              <div className="p-5">
                <h3 className="font-bold text-[#111827] text-sm leading-snug mb-1.5">{t.name}</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed mb-3">{t.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {t.uses.map((u) => (
                    <span
                      key={u}
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{ color: t.color, background: t.bg }}
                    >
                      {u}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FILAC & Sclerotherapy – no equipment photo, text cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
          {[
            {
              name: "FILAC – Fistula Laser Closure",
              desc: "Sutureless, sphincter-preserving fistula treatment using laser energy to seal the fistula tract from within. Preserves continence and ensures fast recovery.",
              uses: ["Fistula in Ano"],
              color: "#C62828",
              bg: "#FFF5F5",
              icon: "💡",
            },
            {
              name: "Sclerotherapy",
              desc: "Injection of a sclerosing agent directly into haemorrhoidal tissue to shrink and obliterate them. Safe, effective outpatient procedure for Grade I–II piles.",
              uses: ["Grade I–II Piles"],
              color: "#047857",
              bg: "#ECFDF5",
              icon: "💉",
            },
          ].map((t) => (
            <div
              key={t.name}
              className="card p-6 flex gap-5 items-start"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: t.bg, border: `2px solid ${t.color}30` }}
              >
                {t.icon}
              </div>
              <div>
                <h3 className="font-bold text-[#111827] text-sm mb-1.5">{t.name}</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed mb-2">{t.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {t.uses.map((u) => (
                    <span key={u} className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{ color: t.color, background: t.bg }}>
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
