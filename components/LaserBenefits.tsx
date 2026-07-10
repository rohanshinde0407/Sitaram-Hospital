"use client";

import { useTranslation } from "@/contexts/LanguageContext";

const benefitColors = ["#C62828", "#2E7D32", "#1565C0", "#E65100", "#7C3AED", "#0E7490", "#B45309", "#047857"];

export default function LaserBenefits() {
  const t = useTranslation();
  const lb = t.laserBenefits;

  return (
    <section className="py-16 md:py-24 bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-eyebrow justify-center">{lb.eyebrow}</div>
          <div className="rule rule-center" />
          <h2 className="section-title mb-4">{lb.title}</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-5">
            {lb.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#FFF5F5] border border-red-200 text-[#C62828] text-sm font-bold px-5 py-1.5 rounded-full"
              >
                ✓ {tag}
              </span>
            ))}
          </div>
          <p className="text-[#111827] font-semibold text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            {lb.desc}
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {lb.benefits.map((b, i) => {
            const col = benefitColors[i] || "#C62828";
            return (
              <div
                key={b.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md p-5 transition-shadow duration-300 flex flex-col gap-2"
                style={{ borderLeft: `4px solid ${col}` }}
              >
                <h3 className="font-black text-[#111827] text-sm" style={{ color: col }}>{b.title}</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Banner */}
        <div className="rounded-3xl overflow-hidden shadow-sm" style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)" }}>
          <div className="grid md:grid-cols-2 gap-0">

            {/* Left: white card */}
            <div className="bg-white m-4 md:m-6 rounded-2xl p-6 md:p-8">
              <div className="inline-flex items-center gap-2 bg-[#F1F5F9] border border-[#E2E8F0] rounded-full px-4 py-1.5 mb-4">
                <span className="text-[#374151] font-bold text-xs uppercase tracking-widest">{lb.bannerBadge}</span>
              </div>
              <h3 className="text-[#111827] font-bold text-xl md:text-2xl leading-snug mb-3">
                {lb.bannerTitle}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{lb.bannerDesc}</p>
            </div>

            {/* Right: stats grid */}
            <div className="flex items-center p-8 md:p-10">
              <div className="grid grid-cols-2 gap-3 w-full">
                {lb.stats.map((s) => (
                  <div key={s.l} className="bg-white rounded-2xl p-5 text-center shadow-sm">
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
