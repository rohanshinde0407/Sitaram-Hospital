import Image from "next/image";
import { CheckCircle2, Zap, Shield, Clock } from "lucide-react";

const highlights = [
  { icon: Zap, label: "Advanced Laser Technology", desc: "Sabrina Laser & LASEEV — EU-certified systems for pinpoint precision", color: "#C62828" },
  { icon: Shield, label: "No Cuts. No Stitches.", desc: "Sutureless, scar-free procedures with minimal blood loss", color: "#2E7D32" },
  { icon: Clock, label: "Day Care — Home Same Day", desc: "Procedures completed in hours; no overnight hospital stay", color: "#1565C0" },
];

const conditions = ["Piles (Haemorrhoids)", "Fissure in Ano", "Fistula in Ano", "Pilonidal Sinus"];

export default function ClinicOverview() {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT — Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/img/laser-treatment-overview.jpg"
                alt="Advanced Laser Proctology Treatment at ZEN Laser Procto Care"
                width={640}
                height={480}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#C62828] to-[#8E0000] rounded-xl flex items-center justify-center text-white font-black text-base flex-shrink-0">
                    Z
                  </div>
                  <div>
                    <div className="font-black text-[#111827] text-sm">ZEN Laser Procto Care</div>
                    <div className="text-[11px] text-[#6B7280]">at Sitaram Hospital, Dhule</div>
                  </div>
                  <div className="ml-auto">
                    <div className="bg-green-50 border border-green-200 text-[#2E7D32] text-[10px] font-bold px-2.5 py-1 rounded-full">
                      ✓ Certified
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative floating tag */}
            <div className="absolute -top-4 -right-4 bg-[#C62828] text-white text-xs font-bold px-4 py-2 rounded-2xl shadow-lg rotate-3">
              Advanced Laser Centre
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="space-y-6">
            <div>
              <div className="section-eyebrow">Advanced Laser Proctology Treatment</div>
              <div className="rule" />
              <h2 className="section-title mb-4">
                Conditions We Treat with<br />
                <span className="text-[#C62828]">Precision Laser Technology</span>
              </h2>
              <p className="text-[#374151] text-base leading-relaxed">
                At ZEN Laser Procto Care, we use internationally certified laser systems — LASEEV and Sabrina Laser — to treat proctological conditions with zero cuts, minimal pain, and rapid recovery. Patients go home the same day.
              </p>
            </div>

            {/* Conditions grid */}
            <div className="grid grid-cols-2 gap-3">
              {conditions.map((c) => (
                <div key={c} className="flex items-center gap-2.5 bg-white border border-gray-100 rounded-xl p-3.5 shadow-sm">
                  <CheckCircle2 size={16} className="text-[#C62828] flex-shrink-0" />
                  <span className="text-sm font-semibold text-[#111827]">{c}</span>
                </div>
              ))}
            </div>

            {/* Highlight cards */}
            <div className="space-y-3">
              {highlights.map(({ icon: Icon, label, desc, color }) => (
                <div key={label} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}12` }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <div className="font-bold text-[#111827] text-sm">{label}</div>
                    <div className="text-xs text-[#6B7280] mt-0.5 leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="/#appointment" className="btn btn-red">Book Consultation</a>
              <a href="/#treatments" className="btn btn-outline-red">View Treatments</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
