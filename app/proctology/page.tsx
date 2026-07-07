import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LaserBenefits from "@/components/LaserBenefits";
import Image from "next/image";

export const metadata = {
  title: "Proctology — ZEN Laser Procto Care, Sitaram Hospital Dhule",
  description:
    "Advanced laser treatment for Piles, Fissure, Fistula, Pilonidal Sinus and more ano-rectal conditions at ZEN Laser Procto Care, Sitaram Hospital, Dhule.",
};

const conditions = [
  {
    id: "piles",
    label: "Piles (Haemorrhoids)",
    image: "/img/Piles (Haemorrhoids).png",
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
    image: "/img/Fissure in Ano.png",
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
    image: "/img/Fistula in Ano.png",
    color: "#2E7D32",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    desc: "An abnormal tunnel connecting the anal canal to the skin outside, with persistent pus discharge.",
    symptoms: ["Pus or blood discharge", "Pain and swelling around anus", "Recurrent abscesses", "Foul smelling discharge"],
    treatment: "VAAFT · FiLaC · Laser Fistulotomy · Fixcision · LIFT",
  },
  {
    id: "pilonidal-sinus",
    label: "Pilonidal Sinus",
    image: "/img/Pilonidal Sinus.png",
    color: "#1565C0",
    bg: "#EFF6FF",
    border: "#BFDBFE",
    desc: "A small cyst near the tailbone containing hair and skin debris, causing recurrent infection and discharge.",
    symptoms: ["Pain and swelling near tailbone", "Pus or blood discharge", "Foul odour from sinus", "Recurrent infection & abscess"],
    treatment: "Laser Pilonidal Sinus Excision · Pit Picking · Sinusectomy · Flap Reconstruction",
  },
  {
    id: "perineal-tear",
    label: "Perineal Tear",
    image: "/img/Perineal Tear 00.png",
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
    image: "/img/Recto-Vaginal Fistula.png",
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
    image: "/img/Anal Stenosis.png",
    color: "#B45309",
    bg: "#FFFBEB",
    border: "#FDE68A",
    desc: "Abnormal narrowing of the anal canal that makes passing stools difficult and painful, resulting from prior surgery or scarring.",
    symptoms: ["Difficulty in passing stools", "Severe pain during defecation", "Narrow or ribbon-like stool", "Bleeding and straining"],
    treatment: "Anal Dilation · Anoplasty · Laser Anal Sphincteroplasty",
  },
];

export default function ProctologyPage() {
  return (
    <>
      <Header />
      <div className="h-14 md:h-24" />
      <main>

        {/* ── Procto hero image ── */}
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

        {/* ── Piles Fissure Fistula CTA ── */}
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-10">
          <div className="rounded-3xl overflow-hidden border border-red-100 shadow-sm bg-white flex flex-col md:flex-row items-center">

            {/* Left – content */}
            <div className="flex-1 px-8 py-10 md:px-12 md:py-12">
              <div className="inline-block text-[10px] font-black uppercase tracking-widest text-[#C62828] bg-[#FFF5F5] border border-red-200 px-3.5 py-1.5 rounded-full mb-5">
                ZEN Laser Procto Care
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-[#111827] leading-tight mb-3">
                Piles, Fissure &amp; Fistula
              </h3>
              <p className="text-lg md:text-xl font-bold text-[#C62828] mb-3">
                Don&rsquo;t hesitate. Don&rsquo;t suffer.
              </p>
              <p className="text-[#374151] text-base leading-relaxed">
                Get expert care with safe, effective, and timely treatment.
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

        {/* ── Conditions heading ── */}
        <div className="bg-white pt-12 pb-6 text-center border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-4">
            <div className="section-eyebrow justify-center">Conditions We Treat</div>
            <div className="rule rule-center" />
            <h2 className="section-title mb-3">Ano-Rectal Conditions We Specialize In</h2>
            <p className="section-lead mx-auto text-center">
              We exclusively diagnose and treat ano-rectal diseases. No shame, no delay — early treatment means faster recovery.
            </p>
          </div>
        </div>

        {/* ── Zigzag conditions ── */}
        <section className="py-10 md:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-16 md:space-y-24">
            {conditions.map((c, i) => (
              <div
                key={c.id}
                id={c.id}
                className={`flex flex-col md:flex-row gap-8 md:gap-14 items-center${
                  i % 2 === 1 ? " md:flex-row-reverse" : ""
                }`}
              >
                {/* ── Image side ── */}
                <div className="w-full md:w-[44%] flex-shrink-0">
                  <div
                    className="rounded-2xl overflow-hidden border-2 shadow-md bg-white"
                    style={{ borderColor: c.border }}
                  >
                    <div className="relative w-full bg-[#F8FAFB]" style={{ aspectRatio: "4/3" }}>
                      <Image
                        src={c.image}
                        alt={c.label}
                        fill
                        style={{ objectFit: "contain", padding: "24px" }}
                        sizes="(max-width: 768px) 100vw, 44vw"
                      />
                    </div>
                    <div
                      className="flex items-center justify-between px-4 py-3"
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

                {/* ── Content side ── */}
                <div className="flex-1 space-y-4">
                  <h3
                    className="text-xl md:text-2xl lg:text-3xl font-black leading-snug"
                    style={{ color: c.color }}
                  >
                    {c.label}
                  </h3>
                  <p className="text-[#374151] text-sm md:text-base leading-relaxed">{c.desc}</p>

                  <div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-[#9CA3AF] mb-2.5">
                      Common Symptoms
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
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

                  <div
                    className="rounded-xl px-4 py-3 text-sm"
                    style={{ background: c.bg, color: c.color, border: `1px solid ${c.border}` }}
                  >
                    <span className="font-bold">Our Treatments: </span>
                    <span className="font-medium">{c.treatment}</span>
                  </div>

                  {/* Accent line */}
                  <div className="w-10 h-1 rounded-full" style={{ background: c.color }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Benefits of Laser Proctology ── */}
        <LaserBenefits />

      </main>
      <Footer />
    </>
  );
}
