"use client";

import { useTranslation } from "@/contexts/LanguageContext";

export default function About() {
  const t = useTranslation();
  const a = t.about;

  const stats = [
    { value: a.stats.years,      label: a.stats.yearsLabel,      color: "#C62828" },
    { value: a.stats.patients,   label: a.stats.patientsLabel,   color: "#2E7D32" },
    { value: a.stats.procedures, label: a.stats.proceduresLabel, color: "#1565C0" },
    { value: a.stats.dayCare,    label: a.stats.dayCareLabel,    color: "#E65100" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="section-title mb-5">
            {a.sectionTitle.split("Ano-Rectal Disease").map((part, i, arr) =>
              i < arr.length - 1
                ? <span key={i}>{part}<span style={{ color: "#C62828" }}>Ano-Rectal Disease</span></span>
                : <span key={i}>{part}</span>
            )}
          </h2>
        </div>

        {/* Body */}
        <div className="space-y-6 text-[#374151] text-base leading-relaxed mb-12">
          <div>
            <h3 className="text-lg md:text-xl font-black text-[#111827] mb-2">{a.heading1}</h3>
            <p>{a.para1}</p>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-black text-[#C62828] mb-2">{a.zenTitle}</h3>
            <p>{a.para2}</p>
          </div>
          <p className="font-bold text-[#111827]">{a.closing}</p>
        </div>

        {/* Stats row */}
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
