"use client";

import { CheckCircle2, Zap, Shield, Clock } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/contexts/LanguageContext";

const highlightIcons = [Zap, Shield, Clock];
const highlightColors = ["#C62828", "#2E7D32", "#1565C0"];

export default function ClinicOverview() {
  const t = useTranslation();
  const c = t.clinicOverview;

  return (
    <section className="py-16 md:py-24 bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT — Machine image */}
          <div className="flex flex-col gap-4">

            <div className="relative pt-4 pr-4">
              <div className="absolute top-0 right-0 z-20 bg-[#C62828] text-white text-xs font-bold px-4 py-2 rounded-2xl shadow-lg whitespace-nowrap">
                {c.tag}
              </div>
              <div className="rounded-3xl overflow-hidden border-2 border-red-100 shadow-xl bg-white">
                <div
                  className="relative w-full flex items-center justify-center bg-[#F8FAFB]"
                  style={{ height: "clamp(300px, 38vw, 500px)" }}
                >
                  <Image
                    src="/img/Machine 01.jpg"
                    alt="EUFOTON Laser Machine — ZEN Laser Procto Care"
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ transform: "scaleX(-1)" }}
                    priority
                  />
                </div>
                <div className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-[#1a1a2e] to-[#16213e]">
                  <div>
                    <div className="text-white font-black text-sm leading-tight">{c.brand}</div>
                    <div className="text-white/60 text-[11px]">{c.location}</div>
                  </div>
                  <div className="bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full">
                    ✓ {c.certified}
                  </div>
                </div>
              </div>
            </div>

            {/* Laser systems row */}
            <div className="grid grid-cols-2 gap-2.5">
              {c.lasers.map((l, i) => {
                const colors = [{ color: "#C62828", bg: "#FFF5F5" }, { color: "#1565C0", bg: "#EFF6FF" }];
                const { color, bg } = colors[i] || colors[0];
                return (
                  <div key={l.name}
                    className="flex items-center gap-2 rounded-xl px-3 py-3 border shadow-sm"
                    style={{ background: bg, borderColor: `${color}20` }}>
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
                    <div>
                      <div className="font-bold text-xs text-[#111827] leading-tight">{l.name}</div>
                      <div className="text-[9px] font-semibold mt-0.5" style={{ color }}>{l.badge}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-2">
              {c.stats.map((s) => (
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
                <div className="text-xs font-bold text-[#2E7D32]">{c.certBadge}</div>
                <div className="text-[10px] text-[#6B7280]">{c.certDesc}</div>
              </div>
            </div>

          </div>

          {/* RIGHT — Content */}
          <div className="space-y-6">
            <div>
              <h2 className="section-title mb-4">
                {c.title}<br />
                <span className="text-[#C62828]">{c.titleAccent}</span>
              </h2>
              <p className="text-[#374151] text-base leading-relaxed">{c.desc}</p>
            </div>

            {/* Conditions grid */}
            <div className="grid grid-cols-2 gap-3">
              {c.conditions.map((cond) => (
                <div key={cond} className="flex items-center gap-2.5 bg-white border border-gray-100 rounded-xl p-3.5 shadow-sm">
                  <CheckCircle2 size={16} className="text-[#C62828] flex-shrink-0" />
                  <span className="text-sm font-semibold text-[#111827]">{cond}</span>
                </div>
              ))}
            </div>

            {/* Highlight cards */}
            <div className="space-y-3">
              {c.highlights.map((h, i) => {
                const Icon = highlightIcons[i] || Zap;
                const color = highlightColors[i] || "#C62828";
                return (
                  <div key={h.label} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}12` }}>
                      <Icon size={18} style={{ color }} />
                    </div>
                    <div>
                      <div className="font-bold text-[#111827] text-sm">{h.label}</div>
                      <div className="text-xs text-[#6B7280] mt-0.5 leading-relaxed">{h.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
