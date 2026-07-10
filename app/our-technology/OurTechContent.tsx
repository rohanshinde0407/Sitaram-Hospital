"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import ClinicOverview from "@/components/ClinicOverview";
import { useTranslation } from "@/contexts/LanguageContext";

const equipmentSrcs = [
  "/img/machine-img/Computerised VDO Anoscopy.png",
  "/img/machine-img/Hal Rar Doppler.png",
  "/img/machine-img/Radio Frequency Ablator.jpg",
  "/img/machine-img/Rectocam.png",
  "/img/machine-img/VAAFT.png",
  "/img/machine-img/WhatsApp Image 2026-07-05 at 16.35.00.png",
];

export default function OurTechContent() {
  const t = useTranslation();
  const tech = t.technology;
  const treatments = tech.treatments;
  const equipment  = tech.equipment.map((e, i) => ({ ...e, src: equipmentSrcs[i] }));

  return (
    <>
      <Header />
      <div className="h-14 md:h-24" />
      <main>

        {/* Page hero */}
        <div className="bg-gradient-to-r from-[#0f6d6d] to-[#0a5252] py-8 md:py-10 text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2">{tech.heroSub}</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight">{tech.heroTitle}</h1>
          </div>
        </div>

        <ClinicOverview />

        {/* State-of-the-Art title */}
        <div className="bg-white border-t border-gray-100 py-10 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-2">{tech.sectionSub}</p>
            <h2 className="text-2xl md:text-4xl font-black text-[#111827]">{tech.sectionTitle}</h2>
          </div>
        </div>

        {/* Compact zigzag treatment list */}
        <section className="py-12 md:py-16 bg-[#F8FAFB]">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="divide-y divide-gray-100">
              {treatments.map((tr, i) => (
                <div
                  key={tr.name}
                  className={`flex flex-col sm:flex-row gap-4 py-6 items-start${i % 2 === 1 ? " sm:flex-row-reverse" : ""}`}
                >
                  <div className="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-2 flex-shrink-0 sm:w-28 sm:text-center">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-base text-white flex-shrink-0" style={{ background: tr.color }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border"
                      style={{ color: tr.color, background: tr.bg, borderColor: tr.border }}>
                      {tr.short}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-black text-[#111827] text-base md:text-lg mb-1 leading-snug">{tr.name}</h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed mb-3">{tr.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {tr.uses.map((u) => (
                        <span key={u} className="text-[10px] font-bold px-2.5 py-1 rounded-full border"
                          style={{ color: tr.color, background: tr.bg, borderColor: tr.border }}>
                          {u}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment image cards */}
        <section className="py-12 md:py-16 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-2">{tech.machinesSub}</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#111827]">{tech.machinesTitle}</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
              {equipment.map((img, i) => (
                <div key={i} className="bg-[#F8FAFB] rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                    <Image src={img.src} alt={img.label} fill className="object-contain p-3"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                  </div>
                  <div className="px-4 py-3 border-t border-gray-100 bg-white">
                    <div className="font-bold text-[#111827] text-xs leading-snug">{img.label}</div>
                    <div className="text-[10px] text-[#9CA3AF] mt-0.5">{img.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
