"use client";

import { useState } from "react";
import Image from "next/image";

const conditions = [
  {
    id: "piles",
    label: "Piles (Haemorrhoids)",
    image: "/img/Piles%20(Haemorrhoids).png",
    color: "#C62828",
    bg: "#FFF5F5",
    border: "#FECACA",
    desc: "Swollen blood vessels inside and around the rectum and anus. Both internal and external types treated with advanced laser.",
    symptoms: ["Bleeding during bowel movements", "Pain or discomfort near anus", "Swelling or lump near anus", "Itching or mucus discharge"],
    treatment: "Laser Hemorrhoidoplasty · DGHAL-RAR · RFA · Sclerotherapy",
  },
  {
    id: "fissure",
    label: "Fissure in Ano",
    image: "/img/Fissure%20in%20Ano.png",
    color: "#E65100",
    bg: "#FFF8F4",
    border: "#FED7AA",
    desc: "A small tear in the lining of the anal canal causing severe pain during and after bowel movements.",
    symptoms: ["Severe burning pain on passing stool", "Bright red blood on tissue", "Muscle spasm near anus", "Visible crack or tear"],
    treatment: "Laser Fissurectomy · Anal Sphincterometry · Lateral Sphincterotomy",
  },
  {
    id: "fistula",
    label: "Fistula in Ano",
    image: "/img/Fistula%20in%20Ano.png",
    color: "#2E7D32",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    desc: "An abnormal tunnel connecting the anal canal to the skin outside, with persistent pus discharge.",
    symptoms: ["Pus or blood discharge", "Pain and swelling around anus", "Recurrent abscesses", "Foul smelling discharge"],
    treatment: "VAAFT · FiLaC · Laser Fistulotomy",
  },
  {
    id: "pilonidal-sinus",
    label: "Pilonidal Sinus",
    image: "/img/Pilonidal%20Sinus.png",
    color: "#1565C0",
    bg: "#EFF6FF",
    border: "#BFDBFE",
    desc: "A small cyst near the tailbone containing hair and skin debris, causing recurrent infection and discharge.",
    symptoms: ["Pain and swelling near tailbone", "Pus or blood discharge", "Foul odour from sinus", "Recurrent infection & abscess"],
    treatment: "Laser Pilonidal Sinus Excision · Pit Picking · Sinusectomy",
  },
  {
    id: "perineal-tear",
    label: "Perineal Tear",
    image: "/img/Perineal%20Tear%2000.png",
    color: "#7B1FA2",
    bg: "#FAF5FF",
    border: "#E9D5FF",
    desc: "A tear in the perineum — tissue between the vaginal opening and the anus — commonly occurring after childbirth.",
    symptoms: ["Perineal pain and tenderness", "Difficulty sitting or walking", "Bleeding or wound discharge", "Bowel or urinary incontinence"],
    treatment: "Perineal Repair · Sphincter Reconstruction · Laser-Assisted Wound Healing",
  },
  {
    id: "recto-vaginal-fistula",
    label: "Recto-Vaginal Fistula",
    image: "/img/Recto-Vaginal%20Fistula.png",
    color: "#00695C",
    bg: "#F0FDFA",
    border: "#99F6E4",
    desc: "An abnormal opening between the rectum and vagina, allowing gas and faecal matter to pass through the vagina.",
    symptoms: ["Passage of gas or stool through vagina", "Foul-smelling vaginal discharge", "Recurrent vaginal infections", "Pain in pelvic area"],
    treatment: "Fistula Flap Repair · Sphincteroplasty · Laser-Assisted Fistula Closure",
  },
  {
    id: "anal-stenosis",
    label: "Anal Stenosis",
    image: "/img/Anal%20Stenosis.png",
    color: "#B45309",
    bg: "#FFFBEB",
    border: "#FDE68A",
    desc: "Abnormal narrowing of the anal canal that makes passing stools difficult and painful, resulting from prior surgery or scarring.",
    symptoms: ["Difficulty in passing stools", "Severe pain during defecation", "Narrow or ribbon-like stool", "Bleeding and straining"],
    treatment: "Anal Dilation · Anoplasty · Laser Anal Sphincteroplasty",
  },
];

export default function Conditions() {
  const [active, setActive] = useState(0);
  const c = conditions[active];

  return (
    <section id="conditions" className="py-14 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-8 md:mb-10">
          <div className="section-eyebrow justify-center">Conditions We Treat</div>
          <div className="rule rule-center" />
          <h2 className="section-title mb-4">Ano-Rectal Conditions We Specialize In</h2>
          <p className="section-lead mx-auto text-center">
            We exclusively diagnose and treat ano-rectal diseases. No shame, no delay — early treatment means faster recovery.
          </p>
        </div>

        {/* ── Pills — mobile: horizontal scroll | desktop: wrap centered ── */}
        <div className="mb-8">
          {/* Mobile */}
          <div
            className="flex md:hidden gap-2 overflow-x-auto pb-2 -mx-4 px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {conditions.map((cond, i) => (
              <button
                key={cond.id}
                onClick={() => setActive(i)}
                className="flex-shrink-0 py-2 px-4 rounded-full text-sm font-semibold border transition-all duration-200"
                style={
                  active === i
                    ? {
                        color: cond.color,
                        background: cond.bg,
                        borderColor: cond.color,
                        boxShadow: `0 0 0 3px ${cond.color}20`,
                      }
                    : { color: "#374151", background: "#FFFFFF", borderColor: "#E5E7EB" }
                }
              >
                {cond.label}
              </button>
            ))}
          </div>

          {/* Desktop */}
          <div className="hidden md:flex flex-wrap justify-center gap-2">
            {conditions.map((cond, i) => (
              <button
                key={cond.id}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className="py-2 px-5 rounded-full text-sm font-semibold border transition-all duration-200"
                style={
                  active === i
                    ? {
                        color: cond.color,
                        background: cond.bg,
                        borderColor: cond.color,
                        boxShadow: `0 0 0 3px ${cond.color}18, 0 2px 8px rgba(0,0,0,0.08)`,
                        transform: "translateY(-1px)",
                      }
                    : { color: "#374151", background: "#FFFFFF", borderColor: "#E5E7EB" }
                }
              >
                {cond.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Detail panel ── */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start">

          {/* LEFT — Image card */}
          <div>
            <div
              className="rounded-2xl overflow-hidden border-2 shadow-lg bg-white transition-all duration-300"
              style={{ borderColor: c.border }}
            >
              {/* Image container — fixed aspect ratio so image always fits */}
              <div
                className="relative w-full bg-[#F8FAFB]"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  key={c.id}
                  src={c.image}
                  alt={c.label}
                  fill
                  style={{ objectFit: "contain", padding: "24px" }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Label bar */}
              <div
                className="flex items-center justify-between px-4 py-3 transition-colors duration-300"
                style={{ background: c.color }}
              >
                <div className="min-w-0 mr-3">
                  <div className="text-white font-bold text-sm leading-tight truncate">{c.label}</div>
                  <div className="text-white/70 text-[11px]">Ano-Rectal Care · Laser Treatment</div>
                </div>
                <div className="flex-shrink-0 bg-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full">
                  Laser ✓
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="flex flex-col">

            {/* Condition title */}
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#111827] mb-3 leading-snug">
              {c.label}
            </h3>
            <p className="text-[#374151] text-sm md:text-base leading-relaxed mb-5">{c.desc}</p>

            {/* Symptoms */}
            <div className="mb-5">
              <div className="text-[10px] font-black uppercase tracking-wider text-[#6B7280] mb-3">
                Common Symptoms
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4">
                {c.symptoms.map((s) => (
                  <div key={s} className="flex items-start gap-2.5 text-sm">
                    <span
                      className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: c.color }}
                    />
                    <span className="text-[#374151]">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Treatment box */}
            <div
              className="rounded-xl px-4 py-3 text-sm mb-6"
              style={{
                background: c.bg,
                color: c.color,
                border: `1px solid ${c.border}`,
                transition: "all 0.3s ease",
              }}
            >
              <span className="font-bold">Our Treatments: </span>
              <span className="font-medium">{c.treatment}</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
