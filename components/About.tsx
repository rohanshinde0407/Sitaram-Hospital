const stats = [
  { value: "40+",   label: "Years of Service",      color: "#C62828" },
  { value: "1000s", label: "Patients Treated",       color: "#2E7D32" },
  { value: "8+",    label: "Advanced Procedures",    color: "#1565C0" },
  { value: "100%",  label: "Day Care",               color: "#E65100" },
];


export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* ── Header ── */}
        <div className="max-w-3xl mb-12">
          <h2 className="section-title mb-5">
            A One-Stop Centre for<br />
            <span style={{ color: "#C62828" }}>Ano-Rectal Disease</span> Treatment
          </h2>
        </div>

        {/* ── Body ── */}
        <div className="space-y-6 text-[#374151] text-base leading-relaxed mb-12">

          <div>
            <h3 className="text-lg md:text-xl font-black text-[#111827] mb-2">
              Compassion. Expertise. Trusted for Over 40 Years.
            </h3>
            <p>
              For more than four decades, Sitaram Hospital has been delivering trusted healthcare with excellence
              in General Surgery, Maternity, Proctology, and Family Medicine through advanced medical expertise
              and compassionate care.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-black text-[#C62828] mb-2">
              ZEN Laser Procto Care
            </h3>
            <p>
              As lifestyle-related ano-rectal conditions continue to rise, ZEN Laser Procto Care offers advanced,
              minimally invasive laser treatment for Piles, Fissure, and Fistula. Our state-of-the-art day-care
              centre provides precise treatment, minimal discomfort, faster recovery, and a seamless patient
              experience — all backed by experienced specialists and modern technology.
            </p>
          </div>

          <p className="font-bold text-[#111827]">
            Advanced Care. Faster Recovery. Trusted Excellence.
          </p>

        </div>

        {/* ── Stats row ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-gray-100 pt-10">
          {stats.map((s) => (
            <div key={s.label}
              className="flex flex-col items-center text-center bg-[#F8FAFB] border border-gray-100 rounded-2xl py-6 px-4 shadow-sm">
              <div className="text-3xl font-black mb-1" style={{ color: s.color }}>{s.value}</div>
              <div className="text-xs text-[#6B7280] font-semibold tracking-wide uppercase leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
