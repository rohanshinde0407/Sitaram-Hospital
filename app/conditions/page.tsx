import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Piles, Fissure & Fistula Symptoms & Causes — ZEN Laser Procto Care, Dhule",
  description:
    "Understand your condition — Piles (Pailes), Fissure (Fisher), Fistula, Pilonidal Sinus, Anal Stenosis. Symptoms, causes and laser treatment at ZEN Laser Procto Care, Sitaram Hospital, Dhule.",
  keywords:
    "pailes symptoms, piles symptoms dhule, fisher symptoms dhule, fissure in ano symptoms dhule, fistula symptoms dhule, mulvyadh lakshane, bawaseer symptoms, bleeding while toilet dhule, burning during passing stool dhule, pain in anus dhule, pus discharge near anus dhule, pilonidal sinus symptoms dhule, anal stenosis dhule, haemorrhoids dhule, recto-vaginal fistula dhule, ano-rectal conditions dhule, wankhedkar hospital conditions treated",
  openGraph: {
    type: "website",
    url: "https://www.sita-ramhospital.com/conditions",
    siteName: "Sitaram Hospital & ZEN Laser Procto Care",
    title: "Ano-Rectal Conditions — Piles, Fissure, Fistula & More | Dhule",
    description:
      "Symptoms, causes and laser treatment options for Piles, Fissure, Fistula, Pilonidal Sinus and other ano-rectal conditions at ZEN Laser Procto Care, Dhule.",
    images: [{ url: "https://www.sita-ramhospital.com/img/procto-care.png", alt: "Ano-Rectal Conditions — ZEN Laser Procto Care Dhule" }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ano-Rectal Conditions Treated | ZEN Laser Procto Care, Dhule",
    description: "Piles, Fissure, Fistula, Pilonidal Sinus and more — symptoms and laser treatments at Sitaram Hospital, Dhule.",
    images: ["https://www.sita-ramhospital.com/img/procto-care.png"],
  },
  alternates: { canonical: "https://www.sita-ramhospital.com/conditions" },
};

const conditions = [
  {
    id: "piles",
    label: "Piles (Haemorrhoids)",
    color: "#C62828",
    bg: "#FFF5F5",
    border: "#FECACA",
    overview: "Piles, or haemorrhoids, are swollen and inflamed blood vessels in and around the rectum and anus. They are one of the most common ano-rectal conditions, affecting millions globally. Grade I–IV classifications determine the treatment approach.",
    desc: "Internal haemorrhoids lie inside the rectum; external haemorrhoids develop under the skin around the anus. Modern laser treatment eliminates the need for open surgery — patients recover within a day.",
    symptoms: ["Bright red bleeding during bowel movement", "Pain, itching or irritation near anus", "Swelling or lump around the anus", "Discomfort or mucus discharge", "Feeling of incomplete evacuation", "Prolapse of tissue outside anus"],
    treatments: ["Laser Hemorrhoidoplasty (LHP)", "DGHAL-RAR — Doppler-Guided Artery Ligation", "Radio Frequency Ablation (RFA)", "Sclerotherapy (Grade I–II)", "Day Care Procedure — Discharged same day"],
    note: "Early-stage piles respond well to lifestyle changes. Grades III–IV require intervention. All our procedures are day care — no hospital admission needed.",
  },
  {
    id: "fissure",
    label: "Fissure in Ano",
    color: "#E65100",
    bg: "#FFF8F4",
    border: "#FED7AA",
    overview: "An anal fissure is a small tear or cut in the thin, moist tissue (mucosa) lining the anus. It causes intense burning pain, especially during and after bowel movements, and may bleed.",
    desc: "Acute fissures heal within a few weeks with conservative care. Chronic fissures (>6 weeks) often require laser treatment or sphincterotomy to relax the internal anal sphincter and restore blood flow to the area.",
    symptoms: ["Severe burning pain during defecation", "Pain lasting 1–2 hours after bowel movement", "Bright red blood on stool or tissue", "Visible crack or tear at the anal opening", "Spasm of the anal sphincter", "Skin tag or sentinel pile near the fissure"],
    treatments: ["Laser Fissurectomy — precise tissue removal", "Lateral Internal Sphincterotomy (LIS)", "Anal Sphincterometry — pressure assessment", "Topical anaesthetic and muscle relaxant therapy", "Day Care Procedure"],
    note: "Do not delay treatment. A chronic fissure may worsen with repeated straining and require more complex intervention.",
  },
  {
    id: "fistula",
    label: "Fistula in Ano",
    color: "#2E7D32",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    overview: "A fistula-in-ano is an abnormal tunnel that forms between the inner lining of the anal canal and the skin near the anus. It usually begins as an abscess that partially drains and leaves a chronic tract.",
    desc: "Fistulas are classified as simple or complex depending on their relationship to the sphincter muscles. Advanced procedures like VAAFT and FiLaC preserve sphincter function — avoiding the risk of incontinence.",
    symptoms: ["Persistent pus or blood discharge near anus", "Pain and swelling around the anal area", "Recurrent perianal abscesses", "Foul-smelling discharge on underwear", "Itching and skin irritation", "Fever (during acute infection)"],
    treatments: ["VAAFT — Video Assisted Anal Fistula Treatment", "FiLaC — Fistula Laser Closure (sphincter-preserving)", "Laser Fistulotomy (for low simple fistulas)", "Seton technique for complex tracts", "Day Care Procedure"],
    note: "VAAFT and FiLaC are sphincter-preserving procedures — no cutting of muscle — ensuring no risk of incontinence after treatment.",
  },
  {
    id: "pilonidal-sinus",
    label: "Pilonidal Sinus",
    color: "#1565C0",
    bg: "#EFF6FF",
    border: "#BFDBFE",
    overview: "A pilonidal sinus is a small cyst or abscess that occurs near the tailbone (coccyx), at the top of the cleft of the buttocks. It often contains hair and skin debris, and tends to become infected and painful.",
    desc: "Common in young men with thick or coarse hair. The condition frequently recurs after conventional surgery, but laser-assisted excision and pit-picking techniques have significantly reduced recurrence rates.",
    symptoms: ["Pain, redness and swelling near the tailbone", "Pus or blood draining from a small opening", "Foul odour from the sinus tract", "Recurrent infection and abscess formation", "Tender lump at the top of the buttock crease", "Difficulty sitting for prolonged periods"],
    treatments: ["Laser Pilonidal Sinus Excision", "Pit Picking (minimally invasive)", "Sinusectomy with primary closure", "Wound care and post-operative dressing", "Day Care Procedure"],
    note: "Laser excision has a lower recurrence rate and better cosmetic outcome compared to traditional wide excision surgery.",
  },
  {
    id: "perineal-tear",
    label: "Perineal Tear",
    color: "#7B1FA2",
    bg: "#FAF5FF",
    border: "#E9D5FF",
    overview: "A perineal tear is a laceration of the perineum — the area between the vaginal opening and the anus. It most commonly occurs during childbirth but can also result from trauma or surgery.",
    desc: "Tears are classified into four degrees based on depth. First and second degree tears heal spontaneously; third and fourth degree tears (involving the sphincter) require surgical repair to restore function and prevent long-term complications.",
    symptoms: ["Perineal pain, bruising and tenderness", "Difficulty or pain while sitting", "Bleeding or wound discharge in the perineal area", "Bowel or urinary incontinence (in severe tears)", "Painful sexual intercourse post-delivery", "Slow or non-healing perineal wound"],
    treatments: ["Perineal Repair (primary suturing)", "Sphincter Reconstruction (3rd/4th degree)", "Laser-Assisted Wound Healing & Debridement", "Pelvic floor physiotherapy referral", "Day Care or Short-Stay Procedure"],
    note: "Timely repair of a perineal tear significantly reduces the risk of long-term incontinence and improves quality of life.",
  },
  {
    id: "recto-vaginal-fistula",
    label: "Recto-Vaginal Fistula",
    color: "#00695C",
    bg: "#F0FDFA",
    border: "#99F6E4",
    overview: "A recto-vaginal fistula (RVF) is an abnormal connection or opening between the rectum and the vagina. This allows faecal matter and gas to pass through the vagina, causing significant distress and hygiene concerns.",
    desc: "RVFs are most commonly caused by obstetric injury during childbirth, but can also arise from inflammatory bowel disease, radiation, prior surgery, or infection. Laser-assisted repair offers excellent outcomes.",
    symptoms: ["Passage of gas or stool through the vagina", "Foul-smelling vaginal discharge", "Recurrent vaginal or urinary tract infections", "Persistent pain and discomfort in the pelvic area", "Skin irritation around the vaginal opening", "Emotional distress and social embarrassment"],
    treatments: ["Fistula Flap Repair (endorectal advancement flap)", "Sphincteroplasty (if sphincter involved)", "Laser-Assisted Fistula Closure", "Tissue interposition technique", "Day Care or Short-Stay Procedure"],
    note: "RVF repair requires careful surgical planning. Success rates improve significantly with minimally invasive laser-assisted techniques.",
  },
  {
    id: "anal-stenosis",
    label: "Anal Stenosis",
    color: "#B45309",
    bg: "#FFFBEB",
    border: "#FDE68A",
    overview: "Anal stenosis is an abnormal narrowing of the anal canal that makes it difficult and painful to pass stools. It is often a complication of prior anal surgery, chronic inflammation, or repeated injury to the anal mucosa.",
    desc: "The condition ranges from mild (easily dilated) to severe (requiring reconstructive surgery). Untreated anal stenosis leads to chronic constipation, straining, and recurrent fissures.",
    symptoms: ["Difficulty and pain when passing stools", "Narrow, ribbon-like or pencil-thin stools", "Severe straining during defecation", "Rectal bleeding and fissures", "Feeling of incomplete bowel emptying", "Chronic constipation"],
    treatments: ["Progressive Anal Dilation (bougie dilators)", "Anoplasty — mucosal advancement flap", "Laser Anal Sphincteroplasty", "Lateral Internal Sphincterotomy where indicated", "Day Care Procedure"],
    note: "Anal stenosis is often preventable. Patients who notice straining or narrow stools after any anal procedure should seek early assessment.",
  },
];

export default function ConditionsPage() {
  return (
    <>
      <Header />
      <div className="h-14 md:h-24" />
      <main>

        {/* ── Hero ── */}
        <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm mb-6 transition-colors">
              <ArrowLeft size={14} /> Back to Home
            </Link>
            <div className="inline-block bg-[#C62828]/20 text-[#EF5350] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-[#C62828]/30">
              Speciality — Ano-Rectal Care
            </div>
            <h1 className="text-white text-3xl md:text-5xl font-black mb-4 leading-tight">
              Ano-Rectal Conditions<br />
              <span className="text-[#EF5350]">We Specialize In</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-10">
              We exclusively diagnose and treat ano-rectal diseases using advanced laser techniques.
              Early treatment means faster recovery — all consultations are completely confidential.
            </p>

            {/* Condition quick-links */}
            <div className="flex flex-wrap justify-center gap-2">
              {conditions.map((c) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="text-xs font-bold px-3 py-1.5 rounded-full border transition-all hover:scale-105"
                  style={{ color: c.color, background: `${c.color}18`, borderColor: `${c.color}40` }}
                >
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Conditions ── */}
        <div className="bg-[#F8FAFB] py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-10">
            {conditions.map((c, idx) => (
              <div
                key={c.id}
                id={c.id}
                className="bg-white rounded-3xl overflow-hidden border shadow-sm"
                style={{ borderColor: c.border }}
              >
                {/* Card header */}
                <div
                  className="px-7 py-5 flex items-center justify-between gap-4"
                  style={{ background: c.bg, borderBottom: `2px solid ${c.border}` }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-sm flex-shrink-0"
                      style={{ background: c.color }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#9CA3AF]">
                        Condition
                      </div>
                      <h2 className="text-xl md:text-2xl font-black" style={{ color: c.color }}>
                        {c.label}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">

                  {/* Left — overview + desc */}
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-black uppercase tracking-widest text-[#9CA3AF] mb-2">
                        Overview
                      </div>
                      <p className="text-[#374151] text-sm leading-relaxed">{c.overview}</p>
                    </div>
                    <div>
                      <p className="text-[#374151] text-sm leading-relaxed">{c.desc}</p>
                    </div>
                    {/* Note */}
                    <div
                      className="rounded-xl px-4 py-3 text-xs leading-relaxed border-l-4"
                      style={{
                        background: c.bg,
                        borderLeftColor: c.color,
                        color: "#374151",
                      }}
                    >
                      <strong style={{ color: c.color }}>Note: </strong>{c.note}
                    </div>
                  </div>

                  {/* Right — symptoms + treatments */}
                  <div className="space-y-6">
                    {/* Symptoms */}
                    <div>
                      <div className="text-xs font-black uppercase tracking-widest text-[#9CA3AF] mb-3">
                        Common Symptoms
                      </div>
                      <ul className="space-y-2">
                        {c.symptoms.map((s) => (
                          <li key={s} className="flex items-start gap-2.5 text-sm text-[#374151]">
                            <span
                              className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
                              style={{ background: c.color }}
                            />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Treatments */}
                    <div>
                      <div className="text-xs font-black uppercase tracking-widest text-[#9CA3AF] mb-3">
                        Available Treatments
                      </div>
                      <ul className="space-y-2">
                        {c.treatments.map((t) => (
                          <li
                            key={t}
                            className="flex items-start gap-2.5 text-sm font-medium rounded-lg px-3 py-2"
                            style={{ background: c.bg, color: c.color }}
                          >
                            <span className="mt-0.5">✓</span>
                            <span className="text-[#374151]">{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="bg-white py-14">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="bg-gradient-to-br from-[#C62828] to-[#8E0000] rounded-3xl p-10 text-white">
              <h2 className="text-2xl md:text-3xl font-black mb-3">
                Don&rsquo;t Suffer in Silence
              </h2>
              <p className="text-white/75 mb-6 max-w-lg mx-auto">
                All consultations are 100% confidential. Expert laser treatment — painless,
                scarless, and discharged the same day.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:9421279065"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#C62828] font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors text-sm"
                >
                  Call 9421279065
                </a>
                <a
                  href="https://wa.me/919421279065"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 hover:bg-white/25 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
                >
                  WhatsApp Us →
                </a>
              </div>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
