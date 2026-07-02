import Image from "next/image";

const surgeryServices = [
  { icon: "🔪", title: "Hernia Repair",              desc: "Open & laparoscopic hernia repair with mesh fixation for all hernia types." },
  { icon: "💧", title: "Hydrocele Surgery",           desc: "Surgical correction of hydrocele with minimal post-operative discomfort." },
  { icon: "🫁", title: "Laparotomy",                  desc: "Open abdominal surgery for complex intra-abdominal conditions." },
  { icon: "🟤", title: "Genito Urinary Surgery",       desc: "Surgical management of kidney stones, urological & genito-urinary conditions." },
  { icon: "🫃", title: "Gastrointestinal Surgery",    desc: "Surgery for GI tract conditions including appendix, gall bladder & bowel." },
  { icon: "🔭", title: "Laparoscopic Surgery",        desc: "Minimally invasive keyhole surgery — shorter hospital stay and faster recovery." },
  { icon: "🏥", title: "Dedicated General Surgery OT", desc: "A fully equipped, dedicated operation theatre for all general surgical procedures." },
  { icon: "👶", title: "Paediatric Surgery",          desc: "Specialised surgical care for infants, children and adolescents." },
  { icon: "🩹", title: "Plastic & Reconstructive Surgery", desc: "Wound care, scar revision, skin grafting and reconstructive procedures." },
  { icon: "🚑", title: "Accident & Trauma Care",      desc: "24-hour emergency surgical management for accident and trauma cases." },
  { icon: "🌙", title: "Day Care Surgery",            desc: "Planned procedures with 1-day admission — admitted and discharged the same day." },
];

const proctologyServices = [
  { icon: "🟠", title: "Laser Piles Treatment",    desc: "Advanced laser ablation for Grade I–IV haemorrhoids — painless, scarless, day care." },
  { icon: "🟢", title: "Laser Fissure Treatment",  desc: "Precision laser healing of chronic anal fissures with rapid, comfortable recovery." },
  { icon: "🔵", title: "Laser Fistula Treatment",  desc: "FILAC & VAAFT laser closure of fistula-in-ano — sphincter-preserving techniques." },
  { icon: "⚪", title: "Pilonidal Sinus Surgery",  desc: "Minimally invasive excision of pilonidal cysts with low recurrence and fast healing." },
  { icon: "🟣", title: "HAL-RAR Procedure",        desc: "Doppler-guided haemorrhoidal artery ligation with recto-anal repair — no cuts." },
  { icon: "🟡", title: "Video Rectoscopy",         desc: "Full-HD video-guided anoscopy and rectoscopy for precise diagnosis of ano-rectal conditions." },
  { icon: "🔶", title: "OPD Consultations",        desc: "Dedicated proctology OPD for assessment, diagnosis and personalised treatment planning." },
  { icon: "🔴", title: "Day Care Procedures",      desc: "All laser procedures performed as day care — admitted and discharged on the same day." },
  { icon: "🔹", title: "Anal Sphinctometry",       desc: "Manometric measurement of anal sphincter pressure for functional diagnosis and pre-op assessment." },
];

const womenServices = [
  { icon: "🌸", title: "Well Women Clinic",    desc: "Preventive health screenings, cervical smear, breast examination and general wellness check-ups for women of all ages." },
  { icon: "🤰", title: "Antenatal Care",       desc: "Complete pregnancy monitoring — routine check-ups, nutritional guidance and birth planning from conception to delivery." },
  { icon: "🍼", title: "Maternity Services",   desc: "Safe, supportive delivery care including normal delivery, assisted delivery and caesarean section by experienced obstetricians." },
  { icon: "⚕️", title: "Gynaecological Surgery", desc: "Surgical management of fibroids, ovarian cysts, ectopic pregnancy, prolapse and other gynaecological conditions." },
];

export default function DepartmentsSection() {
  return (
    <section className="bg-[#F8FAFB]">

      {/* ── Section header ── */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-14 md:py-20 flex flex-col items-center text-center">

          {/* "Sitaram" — large dark display text */}
          <h2 className="font-black text-[#111827] leading-none mb-3 tracking-tight"
            style={{ fontSize: "clamp(3.5rem, 11vw, 7.5rem)" }}>
            Sitaram
          </h2>

          {/* "Hospital" — white text on solid red highlight block */}
          <div
            className="inline-block bg-[#C62828] text-white font-black leading-none px-5 md:px-8 py-2 md:py-3 mb-8 tracking-tight"
            style={{ fontSize: "clamp(2rem, 7vw, 4.5rem)" }}
          >
            Hospital
          </div>

          {/* Tagline */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-4">
            <span className="text-[#9CA3AF] text-xs md:text-sm font-medium tracking-widest uppercase">
              Comprehensive Care &nbsp;·&nbsp; All Under One Roof
            </span>
            <span className="text-[#D1D5DB]">|</span>
            <span className="inline-flex items-center gap-1.5 bg-[#FFF5F5] border border-red-100 text-[#C62828] text-xs font-bold px-3 py-1 rounded-full tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C62828] inline-block" />
              40 Years of Trusted Care
            </span>
          </div>

          {/* Specialities line */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-[#C62828]">•</span>
            {["Surgical", "Maternity", "Proctology", "Family Physician"].map((s, i, arr) => (
              <span key={s} className="flex items-center gap-2">
                <span className="text-[#374151] text-xs md:text-sm font-semibold">{s}</span>
                {i < arr.length - 1 && (
                  <span className="text-[#D1D5DB] font-light">*</span>
                )}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* ── Departments ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-10 space-y-10">

        {/* ══ SURGERY DEPARTMENT ══ */}
        <div className="rounded-3xl overflow-hidden border border-blue-100 shadow-sm">

          {/* Header bar */}
          <div className="px-7 py-5 flex items-center gap-4"
            style={{ background: "linear-gradient(135deg, #1565C0 0%, #0D47A1 100%)" }}>
            <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-2xl flex-shrink-0">
              🏨
            </div>
            <div>
              <div className="text-white/70 text-[10px] font-black uppercase tracking-widest">
                Department
              </div>
              <h3 className="text-white text-xl md:text-2xl font-black leading-tight">
                Surgery Department
              </h3>
            </div>
            <div className="ml-auto hidden md:flex items-center gap-2 bg-white/12 rounded-xl px-4 py-2 border border-white/20">
              <span className="text-white/80 text-xs font-bold">Dedicated General Surgery OT</span>
            </div>
          </div>

          {/* Services grid */}
          <div className="bg-white p-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {surgeryServices.map((s) => (
                <div key={s.title}
                  className="group flex gap-3 p-4 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/40 transition-all duration-200">
                  <span className="text-xl flex-shrink-0 mt-0.5">{s.icon}</span>
                  <div>
                    <div className="text-sm font-bold text-[#111827] group-hover:text-[#1565C0] transition-colors leading-tight mb-1">
                      {s.title}
                    </div>
                    <p className="text-[11px] text-[#9CA3AF] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ WOMEN'S DEPARTMENT ══ */}
        <div className="rounded-3xl overflow-hidden border border-pink-100 shadow-sm">

          {/* Header bar */}
          <div className="px-7 py-5 flex items-center gap-4"
            style={{ background: "linear-gradient(135deg, #AD1457 0%, #880E4F 100%)" }}>
            <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-2xl flex-shrink-0">
              🌸
            </div>
            <div>
              <div className="text-white/70 text-[10px] font-black uppercase tracking-widest">
                Department
              </div>
              <h3 className="text-white text-xl md:text-2xl font-black leading-tight">
                Women&rsquo;s Department
              </h3>
            </div>
            <div className="ml-auto hidden md:flex items-center gap-2 bg-white/12 rounded-xl px-4 py-2 border border-white/20">
              <span className="text-white/80 text-xs font-bold">Maternity &amp; Gynaecology</span>
            </div>
          </div>

          {/* Services grid */}
          <div className="bg-white p-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {womenServices.map((s) => (
                <div key={s.title}
                  className="group flex flex-col gap-2 p-5 rounded-2xl border border-gray-100 hover:border-pink-100 hover:bg-pink-50/40 transition-all duration-200">
                  <span className="text-2xl">{s.icon}</span>
                  <div className="text-sm font-bold text-[#111827] group-hover:text-[#AD1457] transition-colors leading-tight">
                    {s.title}
                  </div>
                  <p className="text-[11px] text-[#9CA3AF] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ PROCTOLOGY DEPARTMENT ══ */}
        <div className="rounded-3xl overflow-hidden border border-red-100 shadow-sm">

          {/* Header bar */}
          <div className="px-7 py-5 flex items-center gap-4"
            style={{ background: "linear-gradient(135deg, #C62828 0%, #8E0000 100%)" }}>
            <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-2xl flex-shrink-0">
              ⚡
            </div>
            <div>
              <div className="text-white/70 text-[10px] font-black uppercase tracking-widest">
                Department
              </div>
              <h3 className="text-white text-xl md:text-2xl font-black leading-tight">
                Proctology Department
              </h3>
            </div>
            <div className="ml-auto hidden md:flex items-center gap-2 bg-white/12 rounded-xl px-4 py-2 border border-white/20">
              <span className="text-white/80 text-xs font-bold">ZEN Laser Procto Care</span>
            </div>
          </div>

          {/* Services grid */}
          <div className="bg-white p-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {proctologyServices.map((s) => (
                <div key={s.title}
                  className="group flex gap-3 p-4 rounded-2xl border border-gray-100 hover:border-red-100 hover:bg-red-50/40 transition-all duration-200">
                  <span className="text-xl flex-shrink-0 mt-0.5">{s.icon}</span>
                  <div>
                    <div className="text-sm font-bold text-[#111827] group-hover:text-[#C62828] transition-colors leading-tight mb-1">
                      {s.title}
                    </div>
                    <p className="text-[11px] text-[#9CA3AF] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ── Proctology CTA Banner ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 pb-14">
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
              Don&rsquo;t Be Embarrassed. Don&rsquo;t Suffer.
            </p>
            <p className="text-[#374151] text-base leading-relaxed mb-7">
              Get expert care with safe, effective, and timely treatment.
            </p>
            <a
              href="#appointment"
              className="inline-flex items-center gap-2 bg-[#C62828] hover:bg-[#8E0000] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors duration-200 shadow-md"
            >
              Book a Consultation →
            </a>
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

    </section>
  );
}
