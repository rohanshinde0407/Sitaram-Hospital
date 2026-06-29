"use client";

import { useState } from "react";
import Image from "next/image";

const conditions = [
  {
    id: "piles",
    label: "Piles (Haemorrhoids)",
    color: "#C62828",
    bg: "#FFF5F5",
    border: "#FECACA",
    img: "/img/hemorrhoid-anatomy.jpg",
    imgAlt: "Haemorrhoid anatomy diagram",
    desc: "Swollen blood vessels inside and around the rectum and anus. Both internal and external types treated with laser.",
    symptoms: ["Bleeding during bowel movements", "Pain or discomfort near anus", "Swelling or lump", "Itching or mucus discharge"],
    treatment: "Laser Hemorrhoidoplasty · DGHAL-RAR · RFA · Sclerotherapy",
  },
  {
    id: "fissure",
    label: "Fissure in Ano",
    color: "#E65100",
    bg: "#FFF8F4",
    border: "#FED7AA",
    img: "/img/piles-illustration.jpg",
    imgAlt: "Anal fissure awareness illustration",
    desc: "A small tear or cut in the lining of the anal canal causing severe pain during and after bowel movements.",
    symptoms: ["Severe burning pain during stool", "Bright red blood on tissue", "Muscle spasm near anus", "Visible crack or tear"],
    treatment: "Laser Fissurectomy · Anal Sphincterometry · Lateral Sphincterotomy",
  },
  {
    id: "fistula",
    label: "Fistula in Ano",
    color: "#2E7D32",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    img: "/img/fistula-anatomy.jpg",
    imgAlt: "Fistula anatomy diagram showing A B C D tracts",
    desc: "An abnormal tunnel connecting the anal canal to the skin outside, with persistent pus discharge.",
    symptoms: ["Pus or blood discharge", "Pain and swelling around anus", "Recurrent abscesses", "Foul-smelling drainage"],
    treatment: "VAAFT · FiLaC · Laser Fistulotomy",
  },
  {
    id: "pilonidal-sinus",
    label: "Pilonidal Sinus",
    color: "#1565C0",
    bg: "#EFF6FF",
    border: "#BFDBFE",
    img: "/img/laser-treatment-overview.jpg",
    imgAlt: "Laser treatment for pilonidal sinus",
    desc: "A small cyst or abscess near the tailbone (coccyx) at the top of the buttocks cleft, often containing hair and skin debris, causing recurrent infection and discharge.",
    symptoms: ["Pain and swelling near tailbone", "Pus or blood discharge", "Foul odour from the sinus", "Recurrent infection & abscess"],
    treatment: "Laser Pilonidal Sinus Excision · Pit Picking · Sinusectomy",
  },
  {
    id: "perineal-tear",
    label: "Perineal Tear",
    color: "#7B1FA2",
    bg: "#FAF5FF",
    border: "#E9D5FF",
    img: "/img/piles-illustration.jpg",
    imgAlt: "Perineal region anatomy",
    desc: "A tear in the perineum — the tissue between the vaginal opening and the anus — most commonly occurring after childbirth or due to trauma, causing pain and functional difficulty.",
    symptoms: ["Perineal pain and tenderness", "Difficulty sitting or walking", "Bleeding or wound discharge", "Bowel or urinary incontinence"],
    treatment: "Perineal Repair · Sphincter Reconstruction · Laser-Assisted Wound Healing",
  },
  {
    id: "recto-vaginal-fistula",
    label: "Recto-Vaginal Fistula",
    color: "#00695C",
    bg: "#F0FDFA",
    border: "#99F6E4",
    img: "/img/fistula-anatomy.jpg",
    imgAlt: "Recto-vaginal fistula diagram",
    desc: "An abnormal opening or tunnel between the rectum and the vagina, allowing gas and faecal matter to pass through the vagina, causing significant distress and hygiene concerns.",
    symptoms: ["Passage of gas or stool through vagina", "Foul-smelling vaginal discharge", "Recurrent vaginal infections", "Pain and discomfort in pelvic area"],
    treatment: "Fistula Flap Repair · Sphincteroplasty · Laser-Assisted Fistula Closure",
  },
  {
    id: "anal-stenosis",
    label: "Anal Stenosis",
    color: "#B45309",
    bg: "#FFFBEB",
    border: "#FDE68A",
    img: "/img/hemorrhoid-anatomy.jpg",
    imgAlt: "Anal canal anatomy",
    desc: "Abnormal narrowing of the anal canal that makes passing stools difficult and painful. Can result from prior surgery, chronic inflammation, or scarring.",
    symptoms: ["Difficulty passing stools", "Severe pain during defecation", "Narrow or ribbon-like stool", "Bleeding and straining"],
    treatment: "Anal Dilation · Anoplasty · Laser Anal Sphincteroplasty",
  },
];

export default function Conditions() {
  const [active, setActive] = useState(0);
  const c = conditions[active];

  return (
    <section id="conditions" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="section-eyebrow justify-center">Conditions We Treat</div>
          <div className="rule rule-center" />
          <h2 className="section-title mb-4">Ano-Rectal Conditions We Specialize In</h2>
          <p className="section-lead mx-auto text-center">
            We exclusively diagnose and treat ano-rectal diseases. No shame, no delay — early treatment means faster recovery.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {conditions.map((cond, i) => (
            <button
              key={cond.id}
              onClick={() => setActive(i)}
              className="py-2 px-4 rounded-full text-xs font-bold transition-all duration-200 border"
              style={
                active === i
                  ? { color: cond.color, background: cond.bg, borderColor: cond.border, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }
                  : { color: "#6B7280", background: "#F9FAFB", borderColor: "#E5E7EB" }
              }
            >
              {cond.label}
            </button>
          ))}
        </div>

        {/* Active condition detail */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div
              className="absolute inset-0 rounded-3xl blur-2xl opacity-30 transition-all duration-500"
              style={{ background: c.color }}
            />
            <div className="relative rounded-3xl overflow-hidden border-2 transition-all duration-300"
              style={{ borderColor: c.border }}>
              <Image
                src={c.img}
                alt={c.imgAlt}
                width={600}
                height={420}
                className="w-full h-72 md:h-96 object-cover object-center"
              />
              {/* Bottom label */}
              <div
                className="absolute bottom-0 left-0 right-0 px-5 py-3"
                style={{ background: `linear-gradient(to top, ${c.color}ee, transparent)` }}
              >
                <div className="text-white font-bold text-sm">{c.label}</div>
                <div className="text-white/75 text-xs">{c.imgAlt}</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div
              className="inline-block text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4"
              style={{ color: c.color, background: c.bg, border: `1px solid ${c.border}` }}
            >
              {c.label}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3">{c.label}</h3>
            <p className="text-[#374151] leading-relaxed mb-5">{c.desc}</p>

            <div className="mb-5">
              <div className="text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-2.5">Common Symptoms</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {c.symptoms.map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-2 text-sm px-3 py-2.5 rounded-xl"
                    style={{ background: c.bg, color: c.color }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: c.color }} />
                    <span className="text-[#374151]">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl px-4 py-3 text-sm font-semibold mb-6"
              style={{ background: c.bg, color: c.color, border: `1px solid ${c.border}` }}
            >
              💊 <strong>Our Treatments:</strong> {c.treatment}
            </div>

            <a href="#appointment" className="btn btn-red inline-flex">
              Book Consultation for {c.label.split(" ")[0]} →
            </a>
          </div>
        </div>

        {/* Bottom full-width CTA */}
        <div
          className="mt-14 rounded-3xl p-8 md:p-10 text-center text-white"
          style={{ background: "linear-gradient(135deg, #C62828, #8E0000)" }}
        >
          <div className="text-3xl mb-3">🚨</div>
          <h3 className="text-xl md:text-2xl font-bold mb-2">Don't Delay Treatment Out of Fear or Shame</h3>
          <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto mb-5">
            All consultations are 100% confidential. Our compassionate team treats thousands of patients
            every year with complete discretion and dignity.
          </p>
          <a href="#appointment" className="btn btn-white inline-flex">
            Consult Our Expert Today →
          </a>
        </div>
      </div>
    </section>
  );
}
