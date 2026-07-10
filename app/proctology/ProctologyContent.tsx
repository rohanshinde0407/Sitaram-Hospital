"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LaserBenefits from "@/components/LaserBenefits";
import Image from "next/image";
import { useTranslation } from "@/contexts/LanguageContext";

const conditionColors = [
  { color: "#C62828", bg: "#FFF5F5",  border: "#FECACA", image: "/img/Piles (Haemorrhoids).png" },
  { color: "#E65100", bg: "#FFF8F4",  border: "#FED7AA", image: "/img/Fissure in Ano.png" },
  { color: "#2E7D32", bg: "#F0FDF4",  border: "#BBF7D0", image: "/img/Fistula in Ano.png" },
  { color: "#1565C0", bg: "#EFF6FF",  border: "#BFDBFE", image: "/img/Pilonidal Sinus.png" },
  { color: "#7B1FA2", bg: "#FAF5FF",  border: "#E9D5FF", image: "/img/Perineal Tear 00.png" },
  { color: "#00695C", bg: "#F0FDFA",  border: "#99F6E4", image: "/img/Recto-Vaginal Fistula.png" },
  { color: "#B45309", bg: "#FFFBEB",  border: "#FDE68A", image: "/img/Anal Stenosis.png" },
];

export default function ProctologyContent() {
  const t = useTranslation();
  const p = t.proctology;
  const conditions = t.conditionData;

  return (
    <>
      <Header />
      <div className="h-14 md:h-24" />
      <main>

        {/* Procto hero image */}
        <div className="bg-[#FFF5F0] w-full flex items-center justify-center overflow-hidden">
          <Image
            src="/img/procto-care.png"
            alt="ZEN Laser Procto Care — Number one clinic for your number two problems"
            width={1200}
            height={500}
            className="w-full max-w-4xl h-auto object-contain"
            priority
          />
        </div>

        {/* CTA Banner */}
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-10">
          <div className="rounded-3xl overflow-hidden border border-red-100 shadow-sm bg-white flex flex-col md:flex-row items-center">
            <div className="flex-1 px-8 py-10 md:px-12 md:py-12">
              <div className="inline-block text-[10px] font-black uppercase tracking-widest text-[#C62828] bg-[#FFF5F5] border border-red-200 px-3.5 py-1.5 rounded-full mb-5">
                ZEN Laser Procto Care
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-[#111827] leading-tight mb-3">
                {t.services.ctaTitle}
              </h3>
              <p className="text-lg md:text-xl font-bold text-[#C62828] mb-3">{p.ctaLine}</p>
              <p className="text-[#374151] text-base leading-relaxed">{p.ctaDesc}</p>
            </div>
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

        {/* Conditions heading */}
        <div className="bg-white pt-12 pb-6 text-center border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-4">
            <div className="section-eyebrow justify-center">{p.conditionsEyebrow}</div>
            <div className="rule rule-center" />
            <h2 className="section-title mb-3">{p.conditionsTitle}</h2>
            <p className="section-lead mx-auto text-center">{p.conditionsDesc}</p>
          </div>
        </div>

        {/* Zigzag conditions — all text from translations */}
        <section className="py-10 md:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-16 md:space-y-24">
            {conditions.map((c, i) => {
              const style = conditionColors[i] || conditionColors[0];
              return (
                <div
                  key={c.id}
                  id={c.id}
                  className={`flex flex-col md:flex-row gap-8 md:gap-14 items-center${
                    i % 2 === 1 ? " md:flex-row-reverse" : ""
                  }`}
                  style={{ scrollMarginTop: "7rem" }}
                >
                  {/* Image side */}
                  <div className="w-full md:w-[44%] flex-shrink-0">
                    <div
                      className="rounded-2xl overflow-hidden border-2 shadow-md bg-white"
                      style={{ borderColor: style.border }}
                    >
                      <div className="relative w-full bg-[#F8FAFB]" style={{ aspectRatio: "4/3" }}>
                        <Image
                          src={style.image}
                          alt={c.label}
                          fill
                          style={{ objectFit: "contain", padding: "24px" }}
                          sizes="(max-width: 768px) 100vw, 44vw"
                        />
                      </div>
                      <div
                        className="flex items-center justify-between px-4 py-3"
                        style={{ background: style.color }}
                      >
                        <div className="min-w-0 mr-3">
                          <div className="text-white font-bold text-sm leading-tight truncate">{c.label}</div>
                          <div className="text-white/70 text-[11px]">Ano-Rectal Care · Laser Treatment</div>
                        </div>
                        <div className="flex-shrink-0 bg-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full">
                          {p.laserBadge}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="flex-1 space-y-4">
                    <h3
                      className="text-xl md:text-2xl lg:text-3xl font-black leading-snug"
                      style={{ color: style.color }}
                    >
                      {c.label}
                    </h3>
                    <p className="text-[#374151] text-sm md:text-base leading-relaxed">{c.desc}</p>

                    <div>
                      <div className="text-[10px] font-black uppercase tracking-wider text-[#9CA3AF] mb-2.5">
                        {p.symptomsLabel}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                        {c.symptoms.map((s) => (
                          <div key={s} className="flex items-start gap-2.5 text-sm">
                            <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ background: style.color }} />
                            <span className="text-[#374151]">{s}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div
                      className="rounded-xl px-4 py-3 text-sm"
                      style={{ background: style.bg, color: style.color, border: `1px solid ${style.border}` }}
                    >
                      <span className="font-bold">{p.treatmentLabel}: </span>
                      <span className="font-medium">{c.treatment}</span>
                    </div>

                    <div className="w-10 h-1 rounded-full" style={{ background: style.color }} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <LaserBenefits />

      </main>
      <Footer />
    </>
  );
}
