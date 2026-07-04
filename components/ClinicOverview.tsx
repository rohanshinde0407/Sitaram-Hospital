import { CheckCircle2, Zap, Shield, Clock } from "lucide-react";
import Image from "next/image";

const highlights = [
  { icon: Zap, label: "Advanced Laser Technology", desc: "EUFOTON LASER & Neo V Laser — EU-certified systems for pinpoint precision", color: "#C62828" },
  { icon: Shield, label: "No Cuts. No Stitches.", desc: "Sutureless, scar-free procedures with minimal blood loss", color: "#2E7D32" },
  { icon: Clock, label: "Day Care — Home Same Day", desc: "Procedures completed in hours; no overnight hospital stay", color: "#1565C0" },
];

const conditions = ["Piles (Haemorrhoids)", "Fissure in Ano", "Fistula in Ano", "Pilonidal Sinus"];

export default function ClinicOverview() {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT — Machine image + info */}
          <div className="flex flex-col gap-4">

            {/* Image card — outer wrapper has no overflow-hidden so tag is never clipped */}
            <div className="relative pt-4 pr-4">

              {/* Floating tag — outside the clipped area */}
              <div className="absolute top-0 right-0 z-20 bg-[#C62828] text-white text-xs font-bold px-4 py-2 rounded-2xl shadow-lg rotate-3 whitespace-nowrap">
                Advanced Laser Centre
              </div>

              {/* Inner card with border, rounded corners, overflow-hidden for image */}
              <div className="rounded-3xl overflow-hidden border-2 border-red-100 shadow-xl bg-white">

                {/* Machine photo — full image, object-contain, no crop */}
                <div
                  className="relative w-full flex items-center justify-center bg-[#F8FAFB]"
                  style={{ height: "clamp(300px, 38vw, 500px)" }}
                >
                  <Image
                    src="/img/Machine%2001.jpg"
                    alt="EUFOTON Laser Machine — ZEN Laser Procto Care"
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>

                {/* Branding bar below image */}
                <div className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-[#1a1a2e] to-[#16213e]">
                  <div>
                    <div className="text-white font-black text-sm leading-tight">ZEN Laser Procto Care</div>
                    <div className="text-white/60 text-[11px]">Sitaram Hospital, Dhule</div>
                  </div>
                  <div className="bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full">
                    ✓ Certified
                  </div>
                </div>

              </div>
            </div>

            {/* Laser systems row */}
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { name: "EUFOTON LASER", badge: "EU Certified", color: "#C62828", bg: "#FFF5F5" },
                { name: "Neo V Laser",   badge: "EU Certified", color: "#1565C0", bg: "#EFF6FF" },
              ].map((l) => (
                <div key={l.name}
                  className="flex items-center gap-2 rounded-xl px-3 py-3 border shadow-sm"
                  style={{ background: l.bg, borderColor: `${l.color}20` }}>
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: l.color }} />
                  <div>
                    <div className="font-bold text-xs text-[#111827] leading-tight">{l.name}</div>
                    <div className="text-[9px] font-semibold mt-0.5" style={{ color: l.color }}>{l.badge}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-2">
              {[
                { val: "40+",  label: "Years"       },
                { val: "Day",  label: "Care"         },
                { val: "Zero", label: "Cuts"         },
                { val: "100%", label: "Confidential" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl py-3 border border-gray-100 text-center shadow-sm">
                  <div className="font-black text-[#C62828] text-sm leading-tight">{s.val}</div>
                  <div className="text-[9px] text-[#9CA3AF] font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Training badge */}
            <div className="flex items-center gap-3 bg-green-50 rounded-xl px-4 py-3 border border-green-100">
              <div className="w-8 h-8 rounded-lg bg-green-100 border border-green-200 flex items-center justify-center text-[#2E7D32] font-black text-sm flex-shrink-0">✓</div>
              <div>
                <div className="text-xs font-bold text-[#2E7D32]">Internationally Certified</div>
                <div className="text-[10px] text-[#6B7280]">Advanced Laser Training — Germany</div>
              </div>
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
                At ZEN Laser Procto Care, we use internationally certified laser systems — EUFOTON LASER and Neo V Laser — to treat proctological conditions with zero cuts, minimal pain, and rapid recovery. Patients go home the same day.
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
