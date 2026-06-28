import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: "40+", label: "Years of Service", color: "#C62828" },
  { value: "1000s", label: "Patients Treated", color: "#2E7D32" },
  { value: "8", label: "Advanced Procedures", color: "#1565C0" },
  { value: "100%", label: "Day Care", color: "#E65100" },
];

const points = [
  "Dedicated exclusively to ano-rectal diseases",
  "Advanced Laser – No cuts, no stitches",
  "Day care procedures – home same day",
  "Trained in Laser Surgery, Germany",
  "FIAMS, FIIOPM, FCGP certified",
  "Member – American Society of Colon & Rectal Surgeons",
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT – text */}
          <div>
            <div className="section-eyebrow">About Zen Laser Procto Care</div>
            <div className="rule" />
            <h2 className="section-title mb-5">
              A One-Stop Centre for<br />
              <span style={{ color: "#C62828" }}>Ano-Rectal Disease</span> Treatment
            </h2>
            <div className="space-y-4 text-[#374151] text-base leading-relaxed mb-7">
              <p>
                The incidence of ano-rectal diseases is steadily rising due to modern lifestyles and altered dietary habits.
                Fear and shame often delay treatment, leading to complications.
              </p>
              <p>
                We established <strong className="text-[#C62828]">ZEN LASER PROCTOCARE</strong> — a scientifically-run
                laser centre exclusively for the modern, painless treatment of Piles, Fissure, and Fistula.
              </p>
              <p>
                Sitaram Hospital and our Proctology Clinic have been serving the community with quality healthcare
                for over <strong>40 years</strong>. Our facility is equipped with state-of-the-art infrastructure
                offering <strong>Day Care Procedures</strong> — patients return home within hours of treatment.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-[#374151]">
                  <CheckCircle2 size={16} className="text-[#2E7D32] flex-shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-4 text-center shadow-sm">
                  <div className="text-2xl font-black mb-0.5" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-xs text-[#6B7280] font-medium leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – image + hospital info */}
          <div className="space-y-5">
            {/* Overview image */}
            <div className="relative rounded-3xl overflow-hidden img-glow-red border border-red-50">
              <Image
                src="/img/laser-treatment-overview.jpg"
                alt="Advanced Laser Proctology Treatment Overview"
                width={600}
                height={420}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <div className="text-lg font-bold">Advanced Laser Proctology Treatment</div>
                  <div className="text-sm text-white/75">Fistula · Hemorrhoids · Fissure · Pilonidal Sinus</div>
                </div>
              </div>
            </div>

            {/* Sitaram hospital card */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C62828] to-[#2E7D32] flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                SH
              </div>
              <div>
                <div className="font-bold text-[#111827] mb-0.5">Sitaram Hospital, Dhule</div>
                <div className="text-sm text-[#6B7280] mb-1">Surgical · Maternity · Family Physician</div>
                <div className="text-xs text-[#6B7280]">📍 Bhangya Maruti Chowk, Lane No. 6, Dhule</div>
                <div className="text-xs text-[#6B7280]">🌐 www.sitaramhospital.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
