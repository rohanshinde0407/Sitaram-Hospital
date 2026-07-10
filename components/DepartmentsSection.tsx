"use client";

import Image from "next/image";
import { useTranslation } from "@/contexts/LanguageContext";

export default function DepartmentsSection() {
  const t = useTranslation();
  const sv = t.services;
  const surgeryServices    = t.deptServices.surgery;
  const womenServices      = t.deptServices.womens;
  const proctologyServices = t.deptServices.proctology;
  const familyServices     = t.deptServices.family;

  return (
    <section id="departments" className="bg-[#F8FAFB]">

      {/* ── Section header ── */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16 flex flex-col items-center text-center">

          {/* 40 Years badge */}
          <span className="inline-flex items-center gap-1.5 bg-[#FFF5F5] border border-red-100 text-[#C62828] text-xs font-bold px-4 py-1.5 rounded-full tracking-wide mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C62828] inline-block" />
            {sv.badge}
          </span>

          {/* Main headline */}
          <h2 className="font-black text-[#111827] leading-tight tracking-tight mb-3"
            style={{ fontSize: "clamp(1.75rem, 6vw, 3.5rem)" }}>
            {sv.sectionTitle}
          </h2>
          <div
            className="inline-block bg-[#C62828] text-white font-black leading-none px-5 md:px-8 py-2 md:py-3 mb-6 tracking-tight"
            style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}
          >
            {sv.sectionBlock}
          </div>

          {/* Specialities line */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-[#C62828]">•</span>
            {sv.specialities.map((s, i, arr) => (
              <span key={s} className="flex items-center gap-2">
                <span className="text-[#374151] text-xs md:text-sm font-semibold">{s}</span>
                {i < arr.length - 1 && (
                  <span className="text-[#D1D5DB] font-light">*</span>
                )}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* ── Departments ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-10 space-y-10">

        {/* ══ SURGERY DEPARTMENT ══ */}
        <div id="dept-surgery" className="rounded-3xl overflow-hidden border border-blue-100 shadow-sm" style={{ scrollMarginTop: "7rem" }}>

          {/* Header bar */}
          <div className="px-7 py-5 flex items-center gap-4"
            style={{ background: "linear-gradient(135deg, #1565C0 0%, #0D47A1 100%)" }}>
            <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-2xl flex-shrink-0">
              🏨
            </div>
            <div>
              <h3 className="text-white text-xl md:text-2xl font-black leading-tight">
                {sv.surgery.title}
              </h3>
            </div>
            <div className="ml-auto hidden md:flex items-center gap-2 bg-white/12 rounded-xl px-4 py-2 border border-white/20">
              <span className="text-white/80 text-xs font-bold">{sv.surgery.badge}</span>
            </div>
          </div>

          {/* Services grid */}
          <div className="bg-white p-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {surgeryServices.map((s) => (
                <div key={s.title}
                  className="group flex gap-3 p-4 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/40 transition-all duration-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1565C0] flex-shrink-0 mt-2" />
                  <div>
                    <div className="text-sm font-bold text-[#111827] group-hover:text-[#1565C0] transition-colors leading-tight mb-1">
                      {s.title}
                    </div>
                    <p className="text-[11px] text-[#4B5563] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ WOMEN'S DEPARTMENT ══ */}
        <div id="dept-women" className="rounded-3xl overflow-hidden border border-pink-100 shadow-sm" style={{ scrollMarginTop: "7rem" }}>

          {/* Header bar */}
          <div className="px-7 py-5 flex items-center gap-4"
            style={{ background: "linear-gradient(135deg, #AD1457 0%, #880E4F 100%)" }}>
            <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-2xl flex-shrink-0">
              🌸
            </div>
            <div>
              <h3 className="text-white text-xl md:text-2xl font-black leading-tight">
                {sv.womens.title}
              </h3>
            </div>
            <div className="ml-auto hidden md:flex items-center gap-2 bg-white/12 rounded-xl px-4 py-2 border border-white/20">
              <span className="text-white/80 text-xs font-bold">{sv.womens.badge}</span>
            </div>
          </div>

          {/* Services grid */}
          <div className="bg-white p-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {womenServices.map((s) => (
                <div key={s.title}
                  className="group flex gap-3 p-5 rounded-2xl border border-gray-100 hover:border-pink-100 hover:bg-pink-50/40 transition-all duration-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#AD1457] flex-shrink-0 mt-2" />
                  <div>
                    <div className="text-sm font-bold text-[#111827] group-hover:text-[#AD1457] transition-colors leading-tight mb-1">
                      {s.title}
                    </div>
                    <p className="text-[11px] text-[#4B5563] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ PROCTOLOGY DEPARTMENT ══ */}
        <div id="dept-proctology" className="rounded-3xl overflow-hidden border border-red-100 shadow-sm" style={{ scrollMarginTop: "7rem" }}>

          {/* Header bar */}
          <div className="px-7 py-5 flex items-center gap-4"
            style={{ background: "linear-gradient(135deg, #C62828 0%, #8E0000 100%)" }}>
            <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-2xl flex-shrink-0">
              ⚡
            </div>
            <div>
              <h3 className="text-white text-xl md:text-2xl font-black leading-tight">
                {sv.proctology.title}
              </h3>
            </div>
            <div className="ml-auto hidden md:flex items-center gap-2 bg-white/12 rounded-xl px-4 py-2 border border-white/20">
              <span className="text-white/80 text-xs font-bold">{sv.proctology.badge}</span>
            </div>
          </div>

          {/* Services grid */}
          <div className="bg-white p-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {proctologyServices.map((s) => (
                <div key={s.title}
                  className="group flex gap-3 p-4 rounded-2xl border border-gray-100 hover:border-red-100 hover:bg-red-50/40 transition-all duration-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C62828] flex-shrink-0 mt-2" />
                  <div>
                    <div className="text-sm font-bold text-[#111827] group-hover:text-[#C62828] transition-colors leading-tight mb-1">
                      {s.title}
                    </div>
                    <p className="text-[11px] text-[#4B5563] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ FAMILY PHYSICIAN DEPARTMENT ══ */}
        <div id="dept-family" className="rounded-3xl overflow-hidden border border-green-100 shadow-sm" style={{ scrollMarginTop: "7rem" }}>

          {/* Header bar */}
          <div className="px-7 py-5 flex items-center gap-4"
            style={{ background: "linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)" }}>
            <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-2xl flex-shrink-0">
              🩺
            </div>
            <div>
              <h3 className="text-white text-xl md:text-2xl font-black leading-tight">
                {sv.family.title}
              </h3>
            </div>
            <div className="ml-auto hidden md:flex items-center gap-2 bg-white/12 rounded-xl px-4 py-2 border border-white/20">
              <span className="text-white/80 text-xs font-bold">{sv.family.badge}</span>
            </div>
          </div>

          {/* Services grid */}
          <div className="bg-white p-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {familyServices.map((s) => (
                <div key={s.title}
                  className="group flex gap-3 p-4 rounded-2xl border border-gray-100 hover:border-green-100 hover:bg-green-50/40 transition-all duration-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32] flex-shrink-0 mt-2" />
                  <div>
                    <div className="text-sm font-bold text-[#111827] group-hover:text-[#2E7D32] transition-colors leading-tight mb-1">
                      {s.title}
                    </div>
                    <p className="text-[11px] text-[#4B5563] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ── Proctology CTA Banner ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 pb-14">
        <div className="rounded-3xl overflow-hidden border border-red-100 shadow-sm bg-white flex flex-col md:flex-row items-center">

          {/* Left – content */}
          <div className="flex-1 px-8 py-10 md:px-12 md:py-12">
            <div className="inline-block text-[10px] font-black uppercase tracking-widest text-[#C62828] bg-[#FFF5F5] border border-red-200 px-3.5 py-1.5 rounded-full mb-5">
              {sv.ctaBadge}
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-[#111827] leading-tight mb-3">
              {sv.ctaTitle}
            </h3>
            <p className="text-lg md:text-xl font-bold text-[#C62828] mb-3">
              {sv.ctaLine}
            </p>
            <p className="text-[#374151] text-base leading-relaxed mb-7">
              {sv.ctaDesc}
            </p>
          </div>

          {/* Right – image */}
          <div className="w-full md:w-auto md:flex-shrink-0 flex justify-center md:justify-end">
            <Image
              src="/img/img1/Comod.png"
              alt="Piles Fissure Fistula Treatment"
              width={420}
              height={380}
              className="w-64 md:w-80 lg:w-[380px] h-auto object-contain"
            />
          </div>

        </div>
      </div>

    </section>
  );
}
