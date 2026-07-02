import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: "40+",   label: "Years of Service",      color: "#C62828" },
  { value: "1000s", label: "Patients Treated",       color: "#2E7D32" },
  { value: "8+",    label: "Advanced Procedures",    color: "#1565C0" },
  { value: "100%",  label: "Day Care",               color: "#E65100" },
];

const points = [
  "Dedicated exclusively to ano-rectal diseases",
  "Advanced Laser – No cuts, no stitches",
  "Trained in Laser Surgery, Germany",
  "Day care procedures – home same day",
  "FIAMS, FIIOPM, FCGP certified",
  "Member – American Society of Colon & Rectal Surgeons",
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* ── Header ── */}
        <div className="max-w-3xl mb-12">
          <div className="section-eyebrow">About Zen Laser Procto Care</div>
          <div className="rule" />
          <h2 className="section-title mb-5">
            A One-Stop Centre for<br />
            <span style={{ color: "#C62828" }}>Ano-Rectal Disease</span> Treatment
          </h2>
        </div>

        {/* ── Body: text left, features right ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-12">

          {/* LEFT – description */}
          <div className="space-y-4 text-[#374151] text-base leading-relaxed">
            <p>
              The incidence of ano-rectal diseases is steadily rising due to modern lifestyles
              and altered dietary habits. Fear and shame often delay treatment, leading to
              serious complications.
            </p>
            <p>
              We established{" "}
              <strong className="text-[#C62828]">ZEN LASER PROCTOCARE</strong> — a
              scientifically-run laser centre exclusively for the modern, painless treatment
              of Piles, Fissure, and Fistula.
            </p>
            <p>
              Sitaram Hospital and our Proctology Clinic have been serving the community
              with quality healthcare for over <strong>40 years</strong>. Our facility is
              equipped with state-of-the-art infrastructure offering{" "}
              <strong>Day Care Procedures</strong> — patients return home within hours of
              treatment.
            </p>
          </div>

          {/* RIGHT – feature points */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {points.map((p) => (
              <li key={p}
                className="flex items-start gap-3 bg-[#F8FAFB] border border-gray-100 rounded-2xl px-4 py-3">
                <CheckCircle2 size={16} className="text-[#2E7D32] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[#374151] font-medium">{p}</span>
              </li>
            ))}
          </ul>
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
