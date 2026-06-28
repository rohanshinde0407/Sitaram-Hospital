import Image from "next/image";

const benefits = [
  { icon: "😌", title: "Minimal Pain", desc: "Significantly less painful than conventional surgery. Laser seals as it operates.", col: "#C62828" },
  { icon: "🏠", title: "Day Care Procedure", desc: "Discharge within a few hours. No prolonged hospital admission needed.", col: "#2E7D32" },
  { icon: "✂️", title: "No Cuts or Stitches", desc: "Sutureless treatment. Laser closes tissue instantly as it works.", col: "#1565C0" },
  { icon: "🩸", title: "Minimal Bleeding", desc: "Laser instantly seals blood vessels, resulting in virtually bloodless procedures.", col: "#E65100" },
  { icon: "⚡", title: "Faster Recovery", desc: "Resume normal activities in just 3–5 days. No extended bed rest.", col: "#7C3AED" },
  { icon: "🛡️", title: "Lower Infection Risk", desc: "Laser simultaneously sterilizes the treated area, drastically reducing infection.", col: "#0E7490" },
  { icon: "🎯", title: "High Precision", desc: "Protects sphincter muscles and surrounding healthy tissue with pin-point accuracy.", col: "#B45309" },
  { icon: "🔄", title: "Low Recurrence Rate", desc: "Excellent long-term results — significantly less chance of recurrence.", col: "#047857" },
];

export default function LaserBenefits() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-eyebrow justify-center">Why Laser?</div>
          <div className="rule rule-center" />
          <h2 className="section-title mb-4">Benefits of Laser Proctology</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {["Painless", "Scarless", "Quick Recovery"].map((tag) => (
              <span
                key={tag}
                className="bg-[#FFF5F5] border border-red-200 text-[#C62828] text-sm font-bold px-5 py-1.5 rounded-full"
              >
                ✓ {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Benefits grid – 4 cols on left side */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="card p-5 group">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-3 transition-transform group-hover:scale-110 duration-300"
                  style={{ background: `${b.col}12` }}
                >
                  {b.icon}
                </div>
                <h3 className="font-bold text-[#111827] text-sm mb-1.5">{b.title}</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* Right side – image + summary card */}
          <div className="lg:col-span-2 space-y-5">
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden img-glow-blue">
              <Image
                src="/img/laseev-machine.jpg"
                alt="LASEEV Laser Proctology Machine"
                width={480}
                height={360}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Summary card */}
            <div className="bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] rounded-3xl p-6 text-white">
              <div className="text-2xl mb-2">🏆</div>
              <h3 className="font-bold text-lg mb-2">Why Patients Choose Laser</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Dr. Ravi Wankhedkar has acquired advanced expertise through specialized training in
                Coloproctology and Laser treatment in India and abroad — including advanced training
                in Laser Surgery for Proctology, Germany.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { v: "3–5 days", l: "Recovery" },
                  { v: "Day Care", l: "Same-day home" },
                  { v: "Zero", l: "Stitches needed" },
                  { v: "95%+", l: "Success rate" },
                ].map((s) => (
                  <div key={s.l} className="bg-white/10 rounded-xl p-3 text-center">
                    <div className="font-black text-lg">{s.v}</div>
                    <div className="text-white/65 text-xs">{s.l}</div>
                  </div>
                ))}
              </div>
              <a href="#appointment" className="btn btn-white w-full justify-center mt-4">
                Book Laser Treatment →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
