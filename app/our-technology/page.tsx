import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import ClinicOverview from "@/components/ClinicOverview";

export const metadata = {
  title: "Our Technology — Sitaram Hospital, Dhule",
  description:
    "State-of-the-art laser and diagnostic equipment at ZEN Laser Procto Care, Sitaram Hospital Dhule — Advanced Laser, DGHAL-RAR, VAAFT, FILAC, Rectocam and more.",
};

const treatments = [
  {
    name: "Advanced Laser Procedures",
    short: "Laser",
    desc: "High-precision laser energy targets and destroys diseased tissue with zero damage to surrounding healthy structures.",
    uses: ["Piles", "Fissure", "Fistula"],
    color: "#C62828",
    bg: "#FFF5F5",
    border: "#FECACA",
  },
  {
    name: "DGHAL-RAR",
    short: "Doppler",
    desc: "Doppler-guided haemorrhoidal artery ligation with recto-anal repair. Minimally invasive, no excision.",
    uses: ["Grade III–IV Piles"],
    color: "#1565C0",
    bg: "#EFF6FF",
    border: "#BFDBFE",
  },
  {
    name: "Radio Frequency Ablation",
    short: "RFA",
    desc: "Dr.Oppel RF Electrosurgical device shrinks haemorrhoidal tissue using targeted radiofrequency energy.",
    uses: ["Piles", "Haemorrhoids"],
    color: "#E65100",
    bg: "#FFF8F4",
    border: "#FED7AA",
  },
  {
    name: "Ano-Recto Videoscopy",
    short: "Videoscopy",
    desc: "Full HD video-guided examination of the anal canal for precise diagnosis and treatment planning.",
    uses: ["Diagnosis", "All conditions"],
    color: "#0E7490",
    bg: "#ECFEFF",
    border: "#A5F3FC",
  },
  {
    name: "VAAFT",
    short: "VAAFT",
    desc: "Video Assisted Anal Fistula Treatment — scope-guided fistula cleaning and closure without cutting sphincter.",
    uses: ["Complex Fistula"],
    color: "#2E7D32",
    bg: "#F0FDF4",
    border: "#BBF7D0",
  },
  {
    name: "Anal Sphincterometry",
    short: "Sphincto",
    desc: "Measures anal sphincter pressure to diagnose anal stenosis, guide treatment decisions and monitor recovery.",
    uses: ["Anal Stenosis", "Fissure"],
    color: "#7C3AED",
    bg: "#F5F3FF",
    border: "#DDD6FE",
  },
  {
    name: "Micro Rectocam WiFi",
    short: "Rectocam",
    desc: "Wireless HD miniature camera system for real-time rectal visualization and video-assisted procedures.",
    uses: ["Diagnosis", "VAAFT"],
    color: "#B45309",
    bg: "#FFFBEB",
    border: "#FDE68A",
  },
  {
    name: "Rectocam Full HD",
    short: "Full HD",
    desc: "High-definition rectoscopy for crystal-clear imaging of the rectum and anal canal during procedures.",
    uses: ["Videoscopy", "Assessment"],
    color: "#047857",
    bg: "#ECFDF5",
    border: "#6EE7B7",
  },
  {
    name: "FILAC – Fistula Laser Closure",
    short: "FILAC",
    desc: "Sutureless, sphincter-preserving fistula treatment using laser energy to seal the fistula tract from within.",
    uses: ["Fistula in Ano"],
    color: "#C62828",
    bg: "#FFF5F5",
    border: "#FECACA",
  },
  {
    name: "Sclerotherapy",
    short: "Sclero",
    desc: "Injection of a sclerosing agent into haemorrhoidal tissue to shrink and obliterate them. Safe outpatient procedure.",
    uses: ["Grade I–II Piles"],
    color: "#047857",
    bg: "#ECFDF5",
    border: "#6EE7B7",
  },
];

const equipmentImages = [
  { src: "/img/machine-img/Computerised VDO Anoscopy.png", label: "Computerised VDO Anoscopy",  desc: "Full HD video-guided ano-rectal examination system" },
  { src: "/img/machine-img/Hal Rar Doppler.png",           label: "HAL-RAR Doppler",            desc: "Doppler-guided haemorrhoidal artery ligation device" },
  { src: "/img/machine-img/Radio Frequency Ablator.jpg",   label: "Radio Frequency Ablator",    desc: "RF electrosurgical device — Dr.Oppel ST-501" },
  { src: "/img/machine-img/Rectocam.png",                  label: "Rectocam Full HD",           desc: "High-definition rectoscopy imaging system" },
  { src: "/img/machine-img/VAAFT.png",                     label: "VAAFT Scope",                desc: "Video-assisted anal fistula treatment scope" },
  { src: "/img/machine-img/WhatsApp Image 2026-07-05 at 16.35.00.png", label: "Anal Sphinctometer", desc: "To assess anal sphincter tone" },
];

export default function OurTechnologyPage() {
  return (
    <>
      <Header />
      <div className="h-14 md:h-24" />
      <main>

        {/* ── Page hero ── */}
        <div className="bg-gradient-to-r from-[#0f6d6d] to-[#0a5252] py-8 md:py-10 text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2">ZEN Laser Procto Care · Sitaram Hospital</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight">Our Technology</h1>
          </div>
        </div>

        <ClinicOverview />

        {/* ── State-of-the-Art title ── */}
        <div className="bg-white border-t border-gray-100 py-10 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-2">ZEN Laser Procto Care</p>
            <h2 className="text-2xl md:text-4xl font-black text-[#111827]">
              State-of-the-Art Treatment Equipment
            </h2>
          </div>
        </div>

        {/* ── Compact zigzag treatment list ── */}
        <section className="py-12 md:py-16 bg-[#F8FAFB]">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="divide-y divide-gray-100">
              {treatments.map((t, i) => (
                <div
                  key={t.name}
                  className={`flex flex-col sm:flex-row gap-4 py-6 items-start${
                    i % 2 === 1 ? " sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Number + badge side */}
                  <div className="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-2 flex-shrink-0 sm:w-28 sm:text-center">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-base text-white flex-shrink-0"
                      style={{ background: t.color }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <span
                      className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border"
                      style={{ color: t.color, background: t.bg, borderColor: t.border }}
                    >
                      {t.short}
                    </span>
                  </div>

                  {/* Content side */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-black text-[#111827] text-base md:text-lg mb-1 leading-snug">
                      {t.name}
                    </h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed mb-3">
                      {t.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {t.uses.map((u) => (
                        <span
                          key={u}
                          className="text-[10px] font-bold px-2.5 py-1 rounded-full border"
                          style={{ color: t.color, background: t.bg, borderColor: t.border }}
                        >
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

        {/* ── Equipment image cards ── */}
        <section className="py-12 md:py-16 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-2">Our Equipment</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#111827]">
                State-of-the-Art Machines
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
              {equipmentImages.map((img, i) => (
                <div
                  key={i}
                  className="bg-[#F8FAFB] rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src={img.src}
                      alt={img.label}
                      fill
                      className="object-contain p-3"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
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
