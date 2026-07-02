import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const treatments = [
  {
    id: "laser",
    name: "Advanced Laser Procedures",
    short: "Laser",
    color: "#C62828",
    bg: "#FFF5F5",
    border: "#FECACA",
    overview: "High-precision laser energy is directed at diseased tissue to ablate, coagulate or seal it — with zero damage to surrounding healthy structures. ZEN Laser Procto Care uses the latest LASEEV and Sabrina diode laser systems imported from Germany.",
    desc: "Laser procedures eliminate the need for scalpels, stitches and hospital admission. Patients are treated under local or short general anaesthesia and discharged the same day. Pain during and after the procedure is minimal.",
    benefits: ["No cuts or stitches", "Minimal bleeding", "Virtually painless", "Day Care — same-day discharge", "Faster healing — 3–5 days", "Lower risk of recurrence"],
    usedFor: ["Piles (Grade I–IV)", "Fissure in Ano", "Fistula in Ano", "Pilonidal Sinus"],
    steps: ["Pre-operative assessment & Sphincterometry", "Laser probe inserted via anoscope", "Laser energy applied at precise depth", "Diseased tissue ablated/coagulated", "Dressing applied — patient discharged within 4 hrs"],
  },
  {
    id: "dghal-rar",
    name: "DGHAL-RAR",
    short: "Doppler",
    color: "#1565C0",
    bg: "#EFF6FF",
    border: "#BFDBFE",
    overview: "Doppler Guided Haemorrhoidal Artery Ligation with Recto-Anal Repair (DGHAL-RAR) is a minimally invasive procedure using a specially designed proctoscope with a built-in Doppler probe to locate and ligate the arteries supplying blood to haemorrhoids.",
    desc: "By cutting off the blood supply to haemorrhoids, they shrink naturally without excision. The RAR (recto-anal repair) component lifts prolapsed haemorrhoidal tissue back into its anatomical position using mucopexy sutures.",
    benefits: ["No excision of tissue", "No open wounds", "Very low pain score", "Preserves anal anatomy", "Day Care procedure", "Suitable for Grade III–IV prolapsed piles"],
    usedFor: ["Grade III Haemorrhoids", "Grade IV Haemorrhoids", "Prolapsed Piles"],
    steps: ["Doppler probe locates haemorrhoidal arteries", "Arteries ligated with absorbable sutures", "Prolapsed mucosa lifted (mucopexy — RAR)", "No tissue is excised", "Discharged within a few hours"],
  },
  {
    id: "rfa",
    name: "Radio Frequency Ablation (RFA)",
    short: "RFA",
    color: "#E65100",
    bg: "#FFF8F4",
    border: "#FED7AA",
    overview: "Radio Frequency Ablation uses the Dr.Oppel RF Electrosurgical Device (ST-501) to deliver controlled radiofrequency energy into haemorrhoidal tissue, causing protein denaturation and shrinkage of the blood vessels.",
    desc: "RFA is performed as an outpatient OPD procedure under local anaesthesia. It is particularly effective for Grade I–III haemorrhoids. The procedure takes less than 20 minutes and patients walk out of the clinic after a short observation period.",
    benefits: ["OPD procedure — no anaesthesia theatre", "Takes 10–20 minutes", "Virtually painless", "No hospitalisation", "Minimal post-procedure discomfort", "Return to work next day"],
    usedFor: ["Grade I Haemorrhoids", "Grade II Haemorrhoids", "Grade III Haemorrhoids"],
    steps: ["Local anaesthesia applied to the area", "RF probe inserted into haemorrhoidal tissue", "Radiofrequency energy delivered in bursts", "Tissue coagulates and shrinks over 2–4 weeks", "Observation for 30 minutes, then discharged"],
  },
  {
    id: "vaaft",
    name: "VAAFT — Video Assisted Anal Fistula Treatment",
    short: "VAAFT",
    color: "#2E7D32",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    overview: "VAAFT is a two-stage video-assisted procedure for treating fistula-in-ano without cutting the sphincter muscles. A miniature fistuloscope is inserted through the external opening to visualise and clean the fistula tract under direct vision.",
    desc: "In the first stage, the fistula tract is identified, debrided and cauterised using electrocautery. In the second stage (3–6 weeks later), the internal opening is closed with a mucosal flap. This sphincter-sparing approach eliminates the risk of incontinence.",
    benefits: ["Sphincter-preserving — no incontinence risk", "Direct video visualisation of the tract", "Treats complex and recurrent fistulas", "Lower recurrence than traditional fistulotomy", "Day Care procedure", "Minimal post-operative pain"],
    usedFor: ["Complex Fistula in Ano", "Recurrent Fistula", "High Trans-sphincteric Fistula", "Suprasphincteric Fistula"],
    steps: ["Fistuloscope inserted through external opening", "Fistula tract visualised under HD video", "Tract cleaned and cauterised", "Internal opening identified and closed", "Flap closure or FiLaC used for sealing"],
  },
  {
    id: "filac",
    name: "FiLaC — Fistula Laser Closure",
    short: "FiLaC",
    color: "#047857",
    bg: "#ECFDF5",
    border: "#6EE7B7",
    overview: "FiLaC (Fistula Laser Closure) is a sphincter-preserving technique where a radial-emitting laser probe is inserted into the fistula tract and withdrawn while delivering laser energy — sealing the tract from inside outward.",
    desc: "The laser energy destroys the epithelium lining the fistula tract and promotes fibrosis, sealing the tract permanently without cutting any muscle. FiLaC is often combined with VAAFT for optimal results in complex fistulas.",
    benefits: ["No muscle cutting — preserves continence", "Sutureless technique", "Outpatient Day Care procedure", "Suitable for complex & recurrent fistulas", "Very low recurrence rate", "Minimal post-operative discomfort"],
    usedFor: ["Trans-sphincteric Fistula", "Complex Fistula in Ano", "Recurrent Fistula", "High Fistulas"],
    steps: ["Fistula tract mapped and cleaned (VAAFT stage)", "Radial-emitting laser probe inserted from external opening", "Laser activated as probe is slowly withdrawn", "Tract walls destroyed and sealed by laser energy", "External opening left open to drain — heals within 2–3 weeks"],
  },
  {
    id: "videoscopy",
    name: "Ano-Recto Videoscopy",
    short: "Videoscopy",
    color: "#0E7490",
    bg: "#ECFEFF",
    border: "#A5F3FC",
    overview: "Ano-Recto Videoscopy is a full HD video-guided examination of the anal canal and rectum using a specialised video anoscope/rectoscope. It provides crystal-clear real-time imaging for accurate diagnosis and procedure guidance.",
    desc: "Unlike conventional rigid proctoscopy, video rectoscopy allows the doctor and patient to view the examination on a monitor simultaneously. This improves diagnostic accuracy, enables photographic documentation, and supports video-assisted interventions.",
    benefits: ["High-definition real-time visualisation", "Patient can view their own examination", "Photo and video documentation", "Guides all laser and VAAFT procedures", "Detects polyps, ulcers and early lesions", "OPD procedure — no anaesthesia required"],
    usedFor: ["Diagnosis of all ano-rectal conditions", "Pre-operative assessment", "VAAFT guidance", "Post-operative follow-up"],
    steps: ["Patient positioned in left lateral decubitus", "Video anoscope gently introduced", "Full HD image projected on monitor", "Examination documented with photos/video", "Report generated with findings — takes 5–10 minutes"],
  },
  {
    id: "sphincterometry",
    name: "Anal Sphincterometry",
    short: "Sphincto",
    color: "#7C3AED",
    bg: "#F5F3FF",
    border: "#DDD6FE",
    overview: "Anal Sphincterometry (ano-rectal manometry) measures the pressure generated by the anal sphincter muscles at rest and during squeeze. It is an essential diagnostic test before any ano-rectal surgical procedure.",
    desc: "The test uses a specialised probe to record pressure profiles along the anal canal. It helps identify sphincter weakness, hypertonia (high pressure causing fissures) or other functional abnormalities, guiding safe and appropriate treatment selection.",
    benefits: ["Non-invasive diagnostic procedure", "Takes 10–15 minutes", "No anaesthesia required", "Essential before sphincter surgery", "Detects occult sphincter injury", "Guides treatment for fissure and stenosis"],
    usedFor: ["Anal Fissure assessment", "Anal Stenosis evaluation", "Pre-operative sphincter mapping", "Post-operative functional assessment"],
    steps: ["Probe inserted gently into the anal canal", "Resting pressure recorded (internal sphincter tone)", "Squeeze pressure recorded (external sphincter strength)", "Pressure profile along the canal mapped", "Report generated — used to plan treatment"],
  },
  {
    id: "sclerotherapy",
    name: "Sclerotherapy",
    short: "Sclero",
    color: "#B45309",
    bg: "#FFFBEB",
    border: "#FDE68A",
    overview: "Sclerotherapy involves the injection of a sclerosing agent (phenol in oil or polidocanol) directly into haemorrhoidal tissue. The chemical causes the vessels to harden and shrink, cutting off blood supply to the haemorrhoid.",
    desc: "This is one of the oldest and most effective treatments for Grade I–II internal haemorrhoids. It is performed in the OPD without any anaesthesia, takes only a few minutes, and patients can return to daily activities immediately.",
    benefits: ["OPD injection — no anaesthesia needed", "Takes 5–10 minutes", "Immediate return to normal activity", "Very effective for Grade I–II piles", "No hospitalisation", "Can be repeated if needed"],
    usedFor: ["Grade I Internal Haemorrhoids", "Grade II Internal Haemorrhoids", "Bleeding Haemorrhoids"],
    steps: ["Anoscope introduced to identify haemorrhoid", "Sclerosant injected into the submucosal layer", "3–4 injection sites treated in one session", "No cutting or stitching — patient walks out", "Follow-up at 4–6 weeks to assess response"],
  },
];

export default function TreatmentsPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── Hero ── */}
        <div className="bg-gradient-to-br from-[#0D1B2A] via-[#162035] to-[#0D1B2A] py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm mb-6 transition-colors">
              <ArrowLeft size={14} /> Back to Home
            </Link>
            <div className="inline-block bg-[#2E7D32]/20 text-[#4ade80] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-[#2E7D32]/30">
              Advanced Laser Technology
            </div>
            <h1 className="text-white text-3xl md:text-5xl font-black mb-4 leading-tight">
              Our Laser Treatments<br />
              <span className="text-[#4ade80]">&amp; Procedures</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-10">
              8 advanced procedures — all Day Care, painless and scarless. Patients return home
              within hours of treatment.
            </p>

            {/* Treatment quick-links */}
            <div className="flex flex-wrap justify-center gap-2">
              {treatments.map((t) => (
                <a
                  key={t.id}
                  href={`#${t.id}`}
                  className="text-xs font-bold px-3 py-1.5 rounded-full border transition-all hover:scale-105"
                  style={{ color: t.color, background: `${t.color}18`, borderColor: `${t.color}40` }}
                >
                  {t.short}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Treatments ── */}
        <div className="bg-[#F8FAFB] py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-10">
            {treatments.map((t, idx) => (
              <div
                key={t.id}
                id={t.id}
                className="bg-white rounded-3xl overflow-hidden border shadow-sm"
                style={{ borderColor: t.border }}
              >
                {/* Card header */}
                <div
                  className="px-7 py-5 flex items-center justify-between gap-4"
                  style={{ background: t.bg, borderBottom: `2px solid ${t.border}` }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-sm flex-shrink-0"
                      style={{ background: t.color }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#9CA3AF]">
                        Treatment / Procedure
                      </div>
                      <h2 className="text-xl md:text-2xl font-black" style={{ color: t.color }}>
                        {t.name}
                      </h2>
                    </div>
                  </div>
                  <span
                    className="hidden sm:inline-block text-xs font-bold text-white px-3 py-1.5 rounded-full flex-shrink-0"
                    style={{ background: t.color }}
                  >
                    {t.short}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">

                  {/* Left — overview + steps */}
                  <div className="space-y-5">
                    <div>
                      <div className="text-xs font-black uppercase tracking-widest text-[#9CA3AF] mb-2">
                        Overview
                      </div>
                      <p className="text-[#374151] text-sm leading-relaxed">{t.overview}</p>
                    </div>
                    <div>
                      <p className="text-[#374151] text-sm leading-relaxed">{t.desc}</p>
                    </div>

                    {/* Procedure steps */}
                    <div>
                      <div className="text-xs font-black uppercase tracking-widest text-[#9CA3AF] mb-3">
                        How It Works
                      </div>
                      <ol className="space-y-2">
                        {t.steps.map((s, i) => (
                          <li key={s} className="flex items-start gap-3 text-sm text-[#374151]">
                            <span
                              className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white flex-shrink-0 mt-0.5"
                              style={{ background: t.color }}
                            >
                              {i + 1}
                            </span>
                            {s}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  {/* Right — benefits + used for */}
                  <div className="space-y-6">
                    {/* Benefits */}
                    <div>
                      <div className="text-xs font-black uppercase tracking-widest text-[#9CA3AF] mb-3">
                        Key Benefits
                      </div>
                      <ul className="space-y-2">
                        {t.benefits.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2.5 text-sm rounded-lg px-3 py-2"
                            style={{ background: t.bg }}
                          >
                            <span className="text-[#2E7D32] font-black mt-0.5">✓</span>
                            <span className="text-[#374151]">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Used for */}
                    <div>
                      <div className="text-xs font-black uppercase tracking-widest text-[#9CA3AF] mb-3">
                        Used For
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {t.usedFor.map((u) => (
                          <span
                            key={u}
                            className="text-xs font-bold px-3 py-1.5 rounded-full border"
                            style={{ color: t.color, background: t.bg, borderColor: t.border }}
                          >
                            {u}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <a
                      href="#appointment"
                      className="inline-flex items-center gap-2 text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
                      style={{ background: t.color }}
                    >
                      Book Consultation →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="bg-white py-14">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] rounded-3xl p-10 text-white">
              <h2 className="text-2xl md:text-3xl font-black mb-3">
                Ready for a Painless Recovery?
              </h2>
              <p className="text-white/75 mb-6 max-w-lg mx-auto">
                All procedures are Day Care — go home the same day. Talk to our expert
                proctologist to find the right treatment for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:9421279065"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#2E7D32] font-bold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors text-sm"
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
