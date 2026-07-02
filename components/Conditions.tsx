"use client";

import { useState } from "react";

const conditions = [
  {
    id: "piles",
    label: "Piles (Haemorrhoids)",
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
    <section id="conditions" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-10">
          <div className="section-eyebrow justify-center">Conditions We Treat</div>
          <div className="rule rule-center" />
          <h2 className="section-title mb-4">Ano-Rectal Conditions We Specialize In</h2>
          <p className="section-lead mx-auto text-center">
            We exclusively diagnose and treat ano-rectal diseases. No shame, no delay — early treatment means faster recovery.
          </p>
        </div>

        {/* ── Tab pills ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {conditions.map((cond, i) => (
            <button
              key={cond.id}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className="py-2 px-4 rounded-full text-xs font-bold border transition-all duration-200"
              style={
                active === i
                  ? {
                      color: cond.color,
                      background: cond.bg,
                      borderColor: cond.color,
                      boxShadow: `0 0 0 3px ${cond.color}18, 0 2px 8px rgba(0,0,0,0.08)`,
                      transform: "translateY(-1px)",
                    }
                  : { color: "#6B7280", background: "#F9FAFB", borderColor: "#E5E7EB" }
              }
            >
              {cond.label}
            </button>
          ))}
        </div>

        {/* ── Detail panel ── */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT — Image placeholder */}
          <div className="relative order-2 lg:order-1">

            {/* Glow */}
            <div
              className="absolute -inset-3 rounded-3xl blur-2xl opacity-20"
              style={{ background: c.color, transition: "background 0.4s ease" }}
            />

            {/* Placeholder card */}
            <div
              className="relative rounded-3xl overflow-hidden border-2 flex flex-col items-center justify-center gap-3"
              style={{
                borderColor: c.border,
                background: c.bg,
                height: 380,
                transition: "border-color 0.4s ease, background 0.4s ease",
              }}
            >
              {/* Decorative rings */}
              <div className="absolute w-64 h-64 rounded-full border-2 opacity-10"
                style={{ borderColor: c.color, transition: "border-color 0.4s ease" }} />
              <div className="absolute w-40 h-40 rounded-full border opacity-10"
                style={{ borderColor: c.color, transition: "border-color 0.4s ease" }} />

              {/* Condition name — large, centred */}
              <div
                className="relative z-10 font-black text-2xl md:text-3xl text-center px-8 leading-snug"
                style={{ color: c.color, transition: "color 0.4s ease" }}
              >
                {c.label}
              </div>

              <div className="relative z-10 text-xs text-[#9CA3AF] tracking-widest uppercase">
                Speciality · Ano-Rectal Care
              </div>

              {/* Bottom accent bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1.5"
                style={{ background: c.color, transition: "background 0.4s ease" }}
              />
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="order-1 lg:order-2">

            {/* Badge */}
            <div
              className="inline-block text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4"
              style={{
                color: c.color,
                background: c.bg,
                border: `1px solid ${c.border}`,
                transition: "all 0.3s ease",
              }}
            >
              {c.label}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3">
              {c.label}
            </h3>
            <p className="text-[#374151] leading-relaxed mb-5">{c.desc}</p>

            {/* Symptoms */}
            <div className="mb-5">
              <div className="text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-2.5">
                Common Symptoms
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {c.symptoms.map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-2.5 text-sm px-3 py-2.5 rounded-xl border"
                    style={{
                      background: c.bg,
                      borderColor: c.border,
                      transition: "all 0.3s ease",
                    }}
                  >
                    <span className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: c.color }} />
                    <span className="text-[#374151]">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Treatment */}
            <div
              className="rounded-2xl px-4 py-3 text-sm font-semibold mb-6"
              style={{
                background: c.bg,
                color: c.color,
                border: `1px solid ${c.border}`,
                transition: "all 0.3s ease",
              }}
            >
              <strong>Our Treatments:</strong> {c.treatment}
            </div>

            <a
              href="#appointment"
              className="inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-xl hover:opacity-90 shadow-md"
              style={{ background: c.color, transition: "background 0.3s ease" }}
            >
              Book Consultation for {c.label.split(" ")[0]} →
            </a>
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div
          className="mt-14 rounded-3xl p-8 md:p-10 text-center text-white"
          style={{ background: "linear-gradient(135deg, #C62828, #8E0000)" }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            Don&rsquo;t Delay Treatment Out of Fear or Shame
          </h3>
          <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto mb-5">
            All consultations are 100% confidential. Our compassionate team treats thousands of
            patients every year with complete discretion and dignity.
          </p>
          <a href="#appointment" className="btn btn-white inline-flex">
            Consult Our Expert Today →
          </a>
        </div>

      </div>
    </section>
  );
}
