const benefits = [
  { icon: "😌", title: "Minimal Pain",        desc: "Significantly less painful than conventional surgery. Laser seals as it operates.",                       col: "#C62828" },
  { icon: "🏠", title: "Day Care Procedure",  desc: "Discharge within a few hours. No prolonged hospital admission needed.",                                   col: "#2E7D32" },
  { icon: "✂️", title: "No Cuts or Stitches", desc: "Sutureless treatment. Laser closes tissue instantly as it works.",                                        col: "#1565C0" },
  { icon: "🩸", title: "Minimal Bleeding",    desc: "Laser instantly seals blood vessels, resulting in virtually bloodless procedures.",                        col: "#E65100" },
  { icon: "⚡", title: "Faster Recovery",     desc: "Resume normal activities in just 3–5 days. No extended bed rest.",                                        col: "#7C3AED" },
  { icon: "🛡️", title: "Lower Infection Risk",desc: "Laser simultaneously sterilizes the treated area, drastically reducing infection.",                       col: "#0E7490" },
  { icon: "🎯", title: "High Precision",      desc: "Protects sphincter muscles and surrounding healthy tissue with pin-point accuracy.",                      col: "#B45309" },
  { icon: "🔄", title: "Low Recurrence Rate", desc: "Excellent long-term results — significantly less chance of recurrence.",                                  col: "#047857" },
];

const stats = [
  { v: "3–5 days", l: "Recovery Time"    },
  { v: "Day Care", l: "Same-Day Home"    },
  { v: "Zero",     l: "Stitches Needed"  },
  { v: "95%+",     l: "Success Rate"     },
];

export default function LaserBenefits() {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* ── Header (matches screenshot) ── */}
        <div className="text-center mb-12">
          <div className="section-eyebrow justify-center">Why Laser?</div>
          <div className="rule rule-center" />
          <h2 className="section-title mb-4">Benefits of Laser Proctology</h2>

          {/* Pill tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-5">
            {["Painless", "Scarless", "Quick Recovery"].map((tag) => (
              <span
                key={tag}
                className="bg-[#FFF5F5] border border-red-200 text-[#C62828] text-sm font-bold px-5 py-1.5 rounded-full"
              >
                ✓ {tag}
              </span>
            ))}
          </div>

          {/* Description paragraph */}
          <p className="text-[#111827] font-semibold text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            Dr. Ravindra Wankhedkar has acquired advanced expertise through specialized training in
            Coloproctology and Laser treatment in India and abroad — including advanced training in
            Laser Surgery for Proctology, Germany.
          </p>
        </div>

        {/* ── Benefits grid — 4 cols, full width, no empty space ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg p-5 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-3 transition-transform group-hover:scale-110 duration-300"
                style={{ background: `${b.col}14` }}
              >
                {b.icon}
              </div>
              <h3 className="font-bold text-[#111827] text-sm mb-1.5">{b.title}</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* ── Why Patients Choose Laser — full-width banner ── */}
        <div className="rounded-3xl overflow-hidden shadow-sm" style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)" }}>
          <div className="grid md:grid-cols-2 gap-0">

            {/* Left: white card — no red */}
            <div className="bg-white m-4 md:m-6 rounded-2xl p-6 md:p-8">
              <div className="inline-flex items-center gap-2 bg-[#F1F5F9] border border-[#E2E8F0] rounded-full px-4 py-1.5 mb-4">
                <span className="text-lg">🏆</span>
                <span className="text-[#374151] font-bold text-xs uppercase tracking-widest">Why Patients Choose Laser</span>
              </div>
              <h3 className="text-[#111827] font-bold text-xl md:text-2xl leading-snug mb-3">
                Advanced Laser Training —<br className="hidden md:block" /> Internationally Certified
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                Trained in Coloproctology and Laser Surgery in India and Germany, Dr. Ravindra
                Wankhedkar brings world-class precision to every procedure — ensuring the safest,
                least invasive treatment for every patient.
              </p>
              <a
                href="#appointment"
                className="inline-flex items-center gap-2 bg-[#111827] text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#1F2937] transition-colors shadow"
              >
                Book Laser Treatment →
              </a>
            </div>

            {/* Right: stats grid */}
            <div className="flex items-center p-8 md:p-10">
              <div className="grid grid-cols-2 gap-3 w-full">
                {stats.map((s) => (
                  <div
                    key={s.l}
                    className="bg-white rounded-2xl p-5 text-center shadow-sm"
                  >
                    <div className="font-black text-2xl md:text-3xl leading-none mb-1" style={{ color: "#C62828" }}>{s.v}</div>
                    <div className="text-[#6B7280] text-xs font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
